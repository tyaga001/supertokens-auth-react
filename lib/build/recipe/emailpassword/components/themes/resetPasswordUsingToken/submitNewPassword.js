"use strict";
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
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Imports.
 */
/** @jsx jsx */
var react_1 = require("@emotion/react");
var react_2 = require("react");
var styleContext_1 = __importDefault(require("../../../../../styles/styleContext"));
var library_1 = require("../../library");
var formBase_1 = __importDefault(require("../../library/formBase"));
var withOverride_1 = require("../../../../../components/componentOverride/withOverride");
var EmailPasswordSubmitNewPassword = /** @class */ (function (_super) {
    __extends(EmailPasswordSubmitNewPassword, _super);
    /*
     * Constructor.
     */
    function EmailPasswordSubmitNewPassword(props) {
        var _this = _super.call(this, props) || this;
        _this.onSuccess = function () {
            _this.setState(function () {
                return {
                    status: "SUCCESS",
                };
            });
        };
        _this.state = {
            status: "READY",
        };
        return _this;
    }
    /*
     * Render.
     */
    EmailPasswordSubmitNewPassword.prototype.render = function () {
        var _this = this;
        var styles = this.context;
        var _a = this.props,
            formFields = _a.formFields,
            onSignInClicked = _a.onSignInClicked;
        var status = this.state.status;
        if (status === "SUCCESS") {
            return react_1.jsx(
                "div",
                { "data-supertokens": "container", css: styles.container },
                react_1.jsx(
                    "div",
                    { "data-supertokens": "row", css: styles.row },
                    react_1.jsx("div", { "data-supertokens": "headerTitle", css: styles.headerTitle }, "Success!"),
                    react_1.jsx(
                        library_1.FormRow,
                        { key: "form-button" },
                        react_1.jsx(
                            react_2.Fragment,
                            null,
                            react_1.jsx(
                                "div",
                                {
                                    "data-supertokens": "primaryText submitNewPasswordSuccessMessage",
                                    css: [styles.primaryText, styles.submitNewPasswordSuccessMessage],
                                },
                                "Your password has been updated successfully"
                            ),
                            react_1.jsx(library_1.Button, {
                                disabled: false,
                                isLoading: false,
                                type: "button",
                                onClick: onSignInClicked,
                                label: "SIGN IN",
                            })
                        )
                    )
                )
            );
        }
        return react_1.jsx(
            "div",
            { "data-supertokens": "container", css: styles.container },
            react_1.jsx(
                "div",
                { "data-supertokens": "row", css: styles.row },
                react_1.jsx(formBase_1.default, {
                    formFields: formFields,
                    buttonLabel: "Change password",
                    onSuccess: this.onSuccess,
                    validateOnBlur: true,
                    callAPI: function (fields) {
                        return __awaiter(_this, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        return [
                                            4 /*yield*/,
                                            this.props.recipeImplementation.submitNewPassword({
                                                formFields: fields,
                                                token: this.props.token,
                                                config: this.props.config,
                                            }),
                                        ];
                                    case 1:
                                        response = _a.sent();
                                        if (response.status === "RESET_PASSWORD_INVALID_TOKEN_ERROR") {
                                            return [
                                                2 /*return*/,
                                                {
                                                    status: "GENERAL_ERROR",
                                                    message: "Invalid password reset token",
                                                },
                                            ];
                                        }
                                        return [
                                            2 /*return*/,
                                            response.status === "FIELD_ERROR"
                                                ? response
                                                : {
                                                      status: "OK",
                                                  },
                                        ];
                                }
                            });
                        });
                    },
                    showLabels: true,
                    header: react_1.jsx(
                        react_2.Fragment,
                        null,
                        react_1.jsx(
                            "div",
                            { "data-supertokens": "headerTitle", css: styles.headerTitle },
                            "Change your password"
                        ),
                        react_1.jsx(
                            "div",
                            { "data-supertokens": "headerSubtitle", css: styles.headerSubtitle },
                            react_1.jsx(
                                "div",
                                { "data-supertokens": "secondaryText", css: styles.secondaryText },
                                "Enter a new password below to change your password"
                            )
                        )
                    ),
                })
            )
        );
    };
    EmailPasswordSubmitNewPassword.contextType = styleContext_1.default;
    return EmailPasswordSubmitNewPassword;
})(react_2.PureComponent);
exports.SubmitNewPassword = withOverride_1.withOverride(
    "EmailPasswordSubmitNewPassword",
    EmailPasswordSubmitNewPassword
);
