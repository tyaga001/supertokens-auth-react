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
import { CSSObject } from "@emotion/react";
import React from "react";
import { NormalisedDefaultStyles, NormalisedPalette, Styles } from "../types";
import { getMergedStyles } from "./styles";

type NormalisedStyle = {
    palette: NormalisedPalette;
    [x: string]: CSSObject;
};

const StyleContext = React.createContext<NormalisedStyle>({
    palette: {
        colors: {} as Record<string, string>,
        fonts: {
            size: [],
        },
    },
});

export function StyleProvider({
    children,
    styleFromInit,
    rootStyleFromInit,
    getDefaultStyles,
    defaultPalette,
    rawPalette,
}: {
    children: JSX.Element;
    styleFromInit?: Styles;
    rootStyleFromInit: Styles;
    getDefaultStyles: (palette: NormalisedPalette) => NormalisedDefaultStyles;
    defaultPalette: NormalisedPalette;
    rawPalette: Record<string, string>;
}): JSX.Element {
    const palette = getMergedPalette(defaultPalette, rawPalette);

    let mergedStyles = getDefaultStyles(palette);
    if (rootStyleFromInit !== undefined) {
        // Palette is a reserved word, delete it if exists.
        delete rootStyleFromInit.palette;

        mergedStyles = getMergedStyles(mergedStyles, rootStyleFromInit);
    }

    if (styleFromInit !== undefined) {
        // Palette is a reserved word, delete it if exists.
        delete styleFromInit.palette;

        mergedStyles = getMergedStyles(mergedStyles, styleFromInit);
    }

    const value: NormalisedStyle = {
        palette,
        ...mergedStyles,
    };
    return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
}

/*
 * Helpers
 */
function getMergedPalette(defaultPalette: NormalisedPalette, rawPalette: Record<string, string>): NormalisedPalette {
    const palette = defaultPalette;
    for (const key in palette.colors) {
        if (rawPalette[key] !== undefined) {
            palette.colors[key] = rawPalette[key];
        }
    }
    return palette;
}

export default StyleContext;
