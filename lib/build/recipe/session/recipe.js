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
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
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
var recipeModule_1 = __importDefault(require("../recipeModule"));
var utils_1 = require("../../utils");
var supertokens_website_1 = __importDefault(require("supertokens-website"));
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session(config) {
        var _this = _super.call(this, config) || this;
        _this.eventListeners = new Set();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _this.getFeatureComponent = function (_) {
            throw new Error("should never come here");
        };
        _this.getFeatures = function () {
            return {};
        };
        _this.getUserId = function () {
            return supertokens_website_1.default.getUserId();
        };
        _this.getAccessTokenPayloadSecurely = function () {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, supertokens_website_1.default.getAccessTokenPayloadSecurely()];
                });
            });
        };
        _this.doesSessionExist = function () {
            return supertokens_website_1.default.doesSessionExist();
        };
        _this.signOut = function () {
            return supertokens_website_1.default.signOut();
        };
        _this.attemptRefreshingSession = function () {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, supertokens_website_1.default.attemptRefreshingSession()];
                });
            });
        };
        /**
         * @returns Function to remove event listener
         */
        _this.addEventListener = function (listener) {
            _this.eventListeners.add(listener);
            return function () {
                return _this.eventListeners.delete(listener);
            };
        };
        _this.notifyListeners = function (event) {
            return __awaiter(_this, void 0, void 0, function () {
                var sessionContext;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, this.getSessionContext(event)];
                        case 1:
                            sessionContext = _a.sent();
                            this.eventListeners.forEach(function (listener) {
                                return listener(__assign({ sessionContext: sessionContext }, event));
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        supertokens_website_1.default.init(
            __assign(__assign({}, config), {
                onHandleEvent: function (event) {
                    if (config.onHandleEvent !== undefined) {
                        config.onHandleEvent(event);
                    }
                    _this.notifyListeners(event);
                },
                preAPIHook: function (context) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var response;
                        return __generator(this, function (_a) {
                            response = __assign(__assign({}, context), {
                                requestInit: __assign(__assign({}, context.requestInit), {
                                    headers: __assign(__assign({}, context.requestInit.headers), {
                                        rid: config.recipeId,
                                    }),
                                }),
                            });
                            if (config.preAPIHook === undefined) {
                                return [2 /*return*/, response];
                            } else {
                                return [2 /*return*/, config.preAPIHook(context)];
                            }
                            return [2 /*return*/];
                        });
                    });
                },
                apiDomain: config.appInfo.apiDomain.getAsStringDangerous(),
                apiBasePath: config.appInfo.apiBasePath.getAsStringDangerous(),
            })
        );
        return _this;
    }
    Session.prototype.getSessionContext = function (_a) {
        var action = _a.action;
        return __awaiter(this, void 0, void 0, function () {
            var _b, userId, accessTokenPayload;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(action === "SESSION_CREATED" || action === "REFRESH_SESSION")) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all([this.getUserId(), this.getAccessTokenPayloadSecurely()])];
                    case 1:
                        (_b = _c.sent()), (userId = _b[0]), (accessTokenPayload = _b[1]);
                        return [
                            2 /*return*/,
                            {
                                doesSessionExist: true,
                                accessTokenPayload: accessTokenPayload,
                                userId: userId,
                            },
                        ];
                    case 2:
                        if (action === "SIGN_OUT" || action === "UNAUTHORISED") {
                            return [
                                2 /*return*/,
                                {
                                    doesSessionExist: false,
                                    accessTokenPayload: {},
                                    userId: "",
                                },
                            ];
                        }
                        throw new Error("Unhandled recipe event: " + action);
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    Session.addAxiosInterceptors = function (axiosInstance) {
        return supertokens_website_1.default.addAxiosInterceptors(axiosInstance);
    };
    Session.init = function (config) {
        return function (appInfo) {
            Session.instance = new Session(
                __assign(__assign({}, config), { appInfo: appInfo, recipeId: Session.RECIPE_ID })
            );
            return Session.instance;
        };
    };
    Session.getInstanceOrThrow = function () {
        if (Session.instance === undefined) {
            throw Error(
                "No instance of Session found. Make sure to call the Session.init method. See https://supertokens.io/docs/emailpassword/quick-setup/frontend"
            );
        }
        return Session.instance;
    };
    Session.reset = function () {
        if (!utils_1.isTest()) {
            return;
        }
        Session.instance = undefined;
        return;
    };
    Session.RECIPE_ID = "session";
    return Session;
})(recipeModule_1.default);
exports.default = Session;
