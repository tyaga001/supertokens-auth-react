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
var react_1 = __importDefault(require("react"));
var authRecipeModule_1 = __importDefault(require("../authRecipeModule"));
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
var normalisedURLPath_1 = __importDefault(require("../../normalisedURLPath"));
var constants_1 = require("../../constants");
var signInAndUp_1 = __importDefault(require("./components/features/signInAndUp"));
var signInAndUpCallback_1 = __importDefault(require("./components/features/signInAndUpCallback"));
var recipeImplementation_1 = __importDefault(require("./recipeImplementation"));
var authWidgetWrapper_1 = __importDefault(require("../authRecipeModule/authWidgetWrapper"));
/*
 * Class.
 */
var ThirdParty = /** @class */ (function (_super) {
    __extends(ThirdParty, _super);
    function ThirdParty(config, recipes) {
        var _this =
            _super.call(this, utils_2.normaliseThirdPartyConfig(config), {
                emailVerificationInstance: recipes.emailVerificationInstance,
            }) || this;
        /*
         * Instance methods.
         */
        _this.getFeatures = function () {
            var features = {};
            if (_this.config.signInAndUpFeature.disableDefaultImplementation !== true) {
                var normalisedFullPath = _this.config.appInfo.websiteBasePath.appendPath(
                    new normalisedURLPath_1.default("/")
                );
                features[normalisedFullPath.getAsStringDangerous()] = {
                    matches: utils_1.matchRecipeIdUsingQueryParams(_this.config.recipeId),
                    component: function (prop) {
                        return _this.getFeatureComponent("signinup", prop);
                    },
                };
            }
            // Add callback route for each provider.
            _this.config.signInAndUpFeature.providers.forEach(function (provider) {
                var normalisedFullPath = _this.config.appInfo.websiteBasePath.appendPath(
                    new normalisedURLPath_1.default("/callback/" + provider.id)
                );
                features[normalisedFullPath.getAsStringDangerous()] = {
                    matches: function () {
                        return utils_2.matchRecipeIdUsingState(_this);
                    },
                    component: function (prop) {
                        return _this.getFeatureComponent("signinupcallback", prop);
                    },
                };
            });
            return __assign(__assign({}, features), _this.getAuthRecipeModuleFeatures());
        };
        _this.getFeatureComponent = function (componentName, props) {
            if (componentName === "signinup") {
                return react_1.default.createElement(
                    authWidgetWrapper_1.default,
                    { authRecipe: _this, history: props.history },
                    react_1.default.createElement(signInAndUp_1.default, __assign({ recipe: _this }, props))
                );
            } else if (componentName === "signinupcallback") {
                return react_1.default.createElement(signInAndUpCallback_1.default, __assign({ recipe: _this }, props));
            } else {
                return _this.getAuthRecipeModuleFeatureComponent(componentName, props);
            }
        };
        _this.getDefaultRedirectionURL = function (context) {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.getAuthRecipeModuleDefaultRedirectionURL(context)];
                });
            });
        };
        _this.recipeImpl = _this.config.override.functions(
            new recipeImplementation_1.default(_this.config.recipeId, _this.config.appInfo)
        );
        return _this;
    }
    ThirdParty.init = function (config) {
        return function (appInfo) {
            ThirdParty.instance = new ThirdParty(
                __assign(__assign({}, config), { appInfo: appInfo, recipeId: ThirdParty.RECIPE_ID }),
                {
                    emailVerificationInstance: undefined,
                }
            );
            return ThirdParty.instance;
        };
    };
    ThirdParty.getInstanceOrThrow = function () {
        if (ThirdParty.instance === undefined) {
            // TODO Use correct doc link.
            var error =
                "No instance of ThirdParty found. Make sure to call the ThirdParty.init method." +
                "See https://supertokens.io/docs/thirdparty/quick-setup/frontend";
            // eslint-disable-next-line supertokens-auth-react/no-direct-window-object
            if (typeof window === "undefined") {
                error = error + constants_1.SSR_ERROR;
            }
            throw Error(error);
        }
        return ThirdParty.instance;
    };
    /*
     * Tests methods.
     */
    ThirdParty.reset = function () {
        if (!utils_1.isTest()) {
            return;
        }
        ThirdParty.instance = undefined;
        return;
    };
    ThirdParty.RECIPE_ID = "thirdparty";
    return ThirdParty;
})(authRecipeModule_1.default);
exports.default = ThirdParty;
