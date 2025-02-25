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

import {
    DEFAULT_API_BASE_PATH,
    DEFAULT_WEBSITE_BASE_PATH,
    RECIPE_ID_QUERY_PARAM,
    WINDOW_UNDEFINED_ERROR,
} from "./constants";
import NormalisedURLDomain from "./normalisedURLDomain";
import NormalisedURLPath from "./normalisedURLPath";
import { FormFieldError } from "./recipe/emailpassword/types";
import { APIFormField, AppInfoUserInput, NormalisedAppInfo, NormalisedFormField } from "./types";

/*
 * getRecipeIdFromPath
 * Input:
 * Output: The "rid" query param if present, null otherwise.
 */
export function getRecipeIdFromSearch(search: string): string | null {
    const urlParams = new URLSearchParams(search);
    return urlParams.get(RECIPE_ID_QUERY_PARAM);
}

export function getQueryParams(param: string): string | null {
    const urlParams = new URLSearchParams(getWindowOrThrow().location.search);
    return urlParams.get(param);
}

export function getRedirectToPathFromURL(): string | undefined {
    const param = getQueryParams("redirectToPath");
    if (param === null) {
        return undefined;
    } else {
        // Prevent Open redirects by normalising path.
        try {
            return new NormalisedURLPath(param).getAsStringDangerous();
        } catch {
            return undefined;
        }
    }
}

/*
 * isTest
 */
export function isTest(): boolean {
    try {
        return process.env.TEST_MODE === "testing";
    } catch (err) {
        // can get Uncaught ReferenceError: process is not defined error
        return false;
    }
}

export function normaliseInputAppInfoOrThrowError(appInfo: AppInfoUserInput): NormalisedAppInfo {
    if (appInfo === undefined) {
        throw new Error("Please provide the appInfo object when calling supertokens.init");
    }

    if (appInfo.apiDomain === undefined) {
        throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
    }
    if (appInfo.appName === undefined) {
        throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
    }
    if (appInfo.websiteDomain === undefined) {
        throw new Error("Please provide your websiteDomain inside the appInfo object when calling supertokens.init");
    }

    let apiGatewayPath = new NormalisedURLPath("");
    if (appInfo.apiGatewayPath !== undefined) {
        apiGatewayPath = new NormalisedURLPath(appInfo.apiGatewayPath);
    }

    return {
        appName: appInfo.appName,
        apiDomain: new NormalisedURLDomain(appInfo.apiDomain),
        websiteDomain: new NormalisedURLDomain(appInfo.websiteDomain),
        apiBasePath: apiGatewayPath.appendPath(
            getNormalisedURLPathOrDefault(DEFAULT_API_BASE_PATH, appInfo.apiBasePath)
        ),
        websiteBasePath: getNormalisedURLPathOrDefault(DEFAULT_WEBSITE_BASE_PATH, appInfo.websiteBasePath),
    };
}

function getNormalisedURLPathOrDefault(defaultPath: string, path?: string): NormalisedURLPath {
    if (path !== undefined) {
        return new NormalisedURLPath(path);
    } else {
        return new NormalisedURLPath(defaultPath);
    }
}

/*
 * validateForm
 */

// We check that the number of fields in input and config form field is the same.
// We check that each item in the config form field is also present in the input form field
export async function validateForm(
    inputs: APIFormField[],
    configFormFields: NormalisedFormField[]
): Promise<FormFieldError[]> {
    const validationErrors: FormFieldError[] = [];

    if (configFormFields.length !== inputs.length) {
        throw Error("Are you sending too many / too few formFields?");
    }

    // Loop through all form fields.
    for (let i = 0; i < configFormFields.length; i++) {
        const field = configFormFields[i];

        // Find corresponding input value.
        const input = <APIFormField>inputs.find((i) => i.id === field.id);

        // Otherwise, use validate function.

        // Trim value for email only.
        let value: string = input.value;
        if (input.id === "email") {
            value = value.trim();
        }
        const error = await field.validate(value);

        // If error, add it.
        if (error !== undefined) {
            validationErrors.push({
                error,
                id: field.id,
            });
        }
    }

    return validationErrors;
}

/*
 * getCurrentNormalisedUrlPath
 */
export function getCurrentNormalisedUrlPath(): NormalisedURLPath {
    return new NormalisedURLPath(getWindowOrThrow().location.pathname);
}

export function appendQueryParamsToURL(stringUrl: string, queryParams?: Record<string, string>): string {
    if (queryParams === undefined) {
        return stringUrl;
    }

    try {
        const url = new URL(stringUrl);
        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });
        return url.href;
    } catch (e) {
        const fakeDomain = stringUrl.startsWith("/") ? "http:localhost" : "http://localhost/";
        const url = new URL(`${fakeDomain}${stringUrl}`);
        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });
        return `${url.pathname}${url.search}`;
    }
}

function getWindowOrThrow(): any {
    // eslint-disable-next-line supertokens-auth-react/no-direct-window-object
    if (typeof window === "undefined") {
        throw new Error(WINDOW_UNDEFINED_ERROR);
    }

    // eslint-disable-next-line supertokens-auth-react/no-direct-window-object
    return window;
}
/*
 * Default method for matching recipe route based on query params.
 */
export function matchRecipeIdUsingQueryParams(recipeId: string): () => boolean {
    return () => {
        const recipeIdFromSearch = getRecipeIdFromSearch(getWindowOrThrow().location.search);
        return recipeIdFromSearch === recipeId;
    };
}

export function redirectWithFullPageReload(to: string): void {
    if (to.trim() === "") {
        to = "/";
    }
    getWindowOrThrow().location.href = to;
}

export function redirectWithHistory(to: string, history: any): void {
    if (to.trim() === "") {
        to = "/";
    }
    history.push(to);
}

export function isIE(): boolean {
    return getWindowOrThrow().document.documentMode !== undefined;
}

export function setSessionStorage(key: string, value: string): void {
    getWindowOrThrow().sessionStorage.setItem(key, value);
}

export function getSessionStorage(key: string): string {
    return getWindowOrThrow().sessionStorage.getItem(key);
}

export function getOriginOfPage(): NormalisedURLDomain {
    return new NormalisedURLDomain(getWindowOrThrow().location.origin);
}

export function getLocalStorage(key: string): string | null {
    const res = getWindowOrThrow().localStorage.getItem(key);
    if (res === null || res === undefined) {
        return null;
    }
    return res;
}

export function setLocalStorage(key: string, value: string): void {
    getWindowOrThrow().localStorage.setItem(key, value);
}

export function removeFromLocalStorage(key: string): void {
    getWindowOrThrow().localStorage.removeItem(key);
}
