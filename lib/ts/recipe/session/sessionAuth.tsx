/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/*
 * Imports.
 */
import React, { useEffect, useState, useContext, useCallback } from "react";
import SessionContext, { isDefaultContext } from "./sessionContext";
import Session from "./recipe";
import { RecipeEvent, SessionContextType } from "./types";
import { RequireSession } from "./RequireSession";
import { doesSessionExist, getJWTPayloadSecurely, getUserId } from "./index";

const hasParentProvider = (ctx: SessionContextType) => !isDefaultContext(ctx);

type Props = {
    requireAuth?: boolean;
    redirectToLogin: () => void;
    onSessionExpired?: () => void;
};

const SessionAuth: React.FC<Props> = ({ children, ...props }) => {
    const { requireAuth, redirectToLogin, onSessionExpired } = props;

    const parentSessionContext = useContext(SessionContext);
    const [context, setContext] = useState<SessionContextType | undefined>(undefined);

    const session = Session.getInstanceOrThrow();

    const setInitialContext = useCallback(async (): Promise<void> => {
        const sessionExists = await doesSessionExist();

        if (sessionExists === false) {
            return setContext({
                doesSessionExist: sessionExists,
                jwtPayload: {},
                userId: "",
            });
        }

        const [jwtPayload, userId] = await Promise.all([getJWTPayloadSecurely(), getUserId()]);

        return setContext({
            doesSessionExist: sessionExists,
            jwtPayload,
            userId,
        });
    }, []);

    const onHandleEvent = useCallback(
        async (event: RecipeEvent) => {
            switch (event.action) {
                case "SESSION_CREATED":
                    setContext({
                        doesSessionExist: true,
                        userId: await getUserId(),
                        jwtPayload: await getJWTPayloadSecurely(),
                    });
                    return;
                case "REFRESH_SESSION":
                    setContext({
                        doesSessionExist: true,
                        userId: context === undefined ? "" : context.userId,
                        jwtPayload: await getJWTPayloadSecurely(),
                    });
                    return;
                case "SIGN_OUT":
                    setContext({
                        doesSessionExist: false,
                        userId: "",
                        jwtPayload: {},
                    });
                    return;
                case "UNAUTHORISED":
                    // If there's onSessionExpired handler, use it without setting state...
                    if (onSessionExpired !== undefined) {
                        onSessionExpired();
                        return;
                    }

                    // ...else fallback to default behaviour
                    setContext({
                        doesSessionExist: false,
                        userId: "",
                        jwtPayload: {},
                    });
                    return;
            }
        },
        [context, onSessionExpired]
    );

    // Read and set the current state
    useEffect(() => {
        // If there's a parent provider, it already listens for events, so we don't have to
        if (hasParentProvider(parentSessionContext)) {
            setContext(parentSessionContext);
            return;
        }

        setInitialContext();
        // we return here cause addEventListener returns a function that removes
        // the listener, and this function will be called by useEffect on
        // component unmount
        return session.addEventListener(onHandleEvent);
    }, [parentSessionContext]);

    useEffect(() => {
        if (context === undefined) {
            return;
        }

        // If the session doesn't exist and we require auth, redirect to login
        if (context.doesSessionExist === false && requireAuth === true) {
            redirectToLogin();
            return;
        }
    }, [context, requireAuth, redirectToLogin]);

    // If the context is undefined, we are still waiting to know whether session exists.
    if (context === undefined) {
        return null;
    }

    return (
        <SessionContext.Provider value={context}>
            <RequireSession requireSession={requireAuth}>{children}</RequireSession>
        </SessionContext.Provider>
    );
};

export default SessionAuth;
