"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var Allposts = param.Allposts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Allposts), /*#__PURE__*/ posts1 = ref[0], setposts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), end = ref1[0], setEnd = ref1[1];\n    var loadMore = function() {\n        var _ref = _asyncToGenerator(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var last, res, newposts;\n            return _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        last = posts1[posts1.length - 1];\n                        _ctx.next = 3;\n                        return _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"posts\").orderBy(\"createdAt\", \"desc\").startAfter(new Date(last.createdAt)).limit(5).get();\n                    case 3:\n                        res = _ctx.sent;\n                        newposts = res.docs.map(function(docSnap) {\n                            return _objectSpread({}, docSnap.data(), {\n                                createdAt: docSnap.data().createdAt.toMillis(),\n                                id: docSnap.id\n                            });\n                        });\n                        setposts(posts1.concat(newposts));\n                        if (newposts.length < 5) {\n                            setEnd(true);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function loadMore() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"center\",\n        children: [\n            posts1.map(function(posts) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-image\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-title\",\n                                children: posts.title\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"jsx-aeeeef7dbeb25dba\",\n                                children: posts.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-action\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/posts/\".concat(posts.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"jsx-aeeeef7dbeb25dba\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 49\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, posts.createdAt, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this);\n            }),\n            end == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return loadMore();\n                },\n                className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"btn #fb8c00 orange darken-1\",\n                children: \"Load more\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"jsx-aeeeef7dbeb25dba\",\n                children: \"You have reached end\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"aeeeef7dbeb25dba\",\n                children: \".card.jsx-aeeeef7dbeb25dba{max-width:500px;margin:22px auto}p.jsx-aeeeef7dbeb25dba{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"VI6GK6tnsBrM/+hgxa1gfNo38K4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNGO0FBQ0U7OztBQUVmLFNBQVNHLElBQUksQ0FBQyxLQUFVLEVBQUU7UUFBWixRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROzs7SUFDbkMsSUFBeUJGLEdBQWtCLEdBQWxCQSwrQ0FBUSxDQUFDRSxRQUFRLENBQUMsZ0JBTDlDLE1BS2UsR0FBYUYsR0FBa0IsR0FBL0IsRUFMZixRQUt3QixHQUFJQSxHQUFrQixHQUF0QjtJQUNyQixJQUFxQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQU52QyxHQU1hLEdBQVdBLElBQWUsR0FBMUIsRUFOYixNQU1vQixHQUFJQSxJQUFlLEdBQW5CO0lBQ2pCLElBQU1PLFFBQVE7bUJBQUcsNkxBQVU7Z0JBQ25CQyxJQUFJLEVBQ0pDLEdBQUcsRUFLSEMsUUFBUTs7Ozt3QkFOUkYsSUFBSSxHQUFJTCxNQUFLLENBQUNBLE1BQUssQ0FBQ1EsTUFBTSxHQUFDLENBQUMsQ0FBQzs7K0JBQ2hCYixvREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUN4Q2UsT0FBTyxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FDM0JDLFVBQVUsQ0FBQyxJQUFJQyxJQUFJLENBQUNQLElBQUksQ0FBQ1EsU0FBUyxDQUFDLENBQUMsQ0FDcENDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDUkMsR0FBRyxFQUFFOzt3QkFKQVQsR0FBRyxZQUlIO3dCQUNBQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBRTs0QkFDckMsT0FBTyxrQkFDSEEsT0FBTyxDQUFDQyxJQUFJLEVBQUU7Z0NBQ2pCTixTQUFTLEVBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFLENBQUNOLFNBQVMsQ0FBQ08sUUFBUSxFQUFFO2dDQUM3Q0MsRUFBRSxFQUFDSCxPQUFPLENBQUNHLEVBQUU7OEJBQ2Q7eUJBQ0QsQ0FBQzt3QkFDRnBCLFFBQVEsQ0FBQ0QsTUFBSyxDQUFDc0IsTUFBTSxDQUFDZixRQUFRLENBQUMsQ0FBQzt3QkFFaEMsSUFBR0EsUUFBUSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDOzRCQUNyQkwsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDYjs7Ozs7O1NBQ0Y7d0JBbkJLQyxRQUFROzs7T0FtQmI7SUFDRixxQkFDRSw4REFBQ21CLEtBQUc7a0RBQVcsUUFBUTs7WUFDbEJ2QixNQUFLLENBQUNpQixHQUFHLENBQUNqQixTQUFBQSxLQUFLLEVBQUU7Z0JBQ2hCLHFCQUNFLDhEQUFDdUIsS0FBRzs4REFBVyxNQUFNOztzQ0FDckIsOERBQUNBLEtBQUc7c0VBQVcsWUFBWTtzQ0FDekIsNEVBQUNDLE1BQUk7MEVBQVcsWUFBWTswQ0FBRXhCLEtBQUssQ0FBQ3lCLEtBQUs7Ozs7O3FDQUFROzs7OztpQ0FDN0M7c0NBQ04sOERBQUNGLEtBQUc7c0VBQVcsY0FBYztzQ0FDM0IsNEVBQUNHLEdBQUM7OzBDQUFFMUIsS0FBSyxDQUFDMkIsT0FBTzs7Ozs7cUNBQUs7Ozs7O2lDQUNsQjtzQ0FDTiw4REFBQ0osS0FBRztzRUFBVyxhQUFhO3NDQUMxQiw0RUFBQzNCLGtEQUFJO2dDQUFDZ0MsSUFBSSxFQUFFLFNBQVEsQ0FBVyxPQUFUNUIsS0FBSyxDQUFDcUIsRUFBRSxDQUFFOzBDQUFFLDRFQUFDUSxHQUFDOzs4Q0FBQyxXQUFTOzs7Ozt5Q0FBSTs7Ozs7cUNBQU87Ozs7O2lDQUNyRDs7bUJBVHFCN0IsS0FBSyxDQUFDYSxTQUFTOzs7O3lCQVV0QyxDQUNMO2FBQ0YsQ0FBQztZQUVEWCxHQUFHLElBQUUsS0FBSyxpQkFDWCw4REFBQzRCLFFBQU07Z0JBQXlDQyxPQUFPLEVBQUU7MkJBQUkzQixRQUFRLEVBQUU7aUJBQUE7MERBQXJELDZCQUE2QjswQkFBMEIsV0FBUzs7Ozs7b0JBQVMsaUJBQ3pGLDhEQUFDNEIsSUFBRTs7MEJBQUMsc0JBQW9COzs7OztvQkFBSzs7Ozs7Ozs7OztZQWtCN0IsQ0FDUDtDQUNGO0dBL0R1QmxDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGJ9IGZyb20gJy4uL2ZpcmViYXNlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe0FsbHBvc3RzfSkge1xuICAgY29uc3QgW3Bvc3RzLHNldHBvc3RzXSA9IHVzZVN0YXRlKEFsbHBvc3RzKVxuICAgY29uc3QgW2VuZCxzZXRFbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICBjb25zdCBsb2FkTW9yZSA9IGFzeW5jICgpPT57XG4gICAgIGNvbnN0IGxhc3QgID0gcG9zdHNbcG9zdHMubGVuZ3RoLTFdXG4gICAgIGNvbnN0IHJlcyA9IGF3YWl0ICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpXG4gICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCdkZXNjJylcbiAgICAgLnN0YXJ0QWZ0ZXIobmV3IERhdGUobGFzdC5jcmVhdGVkQXQpKVxuICAgICAubGltaXQoNSlcbiAgICAgLmdldCgpXG4gICAgIGNvbnN0IG5ld3Bvc3RzID0gcmVzLmRvY3MubWFwKGRvY1NuYXA9PntcbiAgICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kb2NTbmFwLmRhdGEoKSxcbiAgICAgICAgY3JlYXRlZEF0OmRvY1NuYXAuZGF0YSgpLmNyZWF0ZWRBdC50b01pbGxpcygpLFxuICAgICAgICBpZDpkb2NTbmFwLmlkXG4gICAgICB9XG4gICAgIH0pXG4gICAgIHNldHBvc3RzKHBvc3RzLmNvbmNhdChuZXdwb3N0cykpXG5cbiAgICAgaWYobmV3cG9zdHMubGVuZ3RoIDwgNSl7XG4gICAgICAgc2V0RW5kKHRydWUpXG4gICAgIH1cbiAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICB7cG9zdHMubWFwKHBvc3RzPT57XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtwb3N0cy5jcmVhdGVkQXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cG9zdHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD57cG9zdHMuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3RzLmlkfWB9PjxhPlJlYWQgTW9yZTwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuXG4gICAgICAgIHtlbmQ9PWZhbHNlP1xuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biAjZmI4YzAwIG9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9eygpPT5sb2FkTW9yZSgpfT5Mb2FkIG1vcmU8L2J1dHRvbj5cbiAgICAgICAgIDo8aDM+WW91IGhhdmUgcmVhY2hlZCBlbmQ8L2gzPlxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBxdWVyeVNuYXAgPWF3YWl0ICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsXCJkZXNjXCIpXG4gIC5saW1pdCgzKVxuICAuZ2V0KClcbiAgY29uc3QgQWxscG9zdHMgPSAgcXVlcnlTbmFwLmRvY3MubWFwKGRvY1NuYXA9PntcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4gICAgICBjcmVhdGVkQXQ6ZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4gICAgICBpZDpkb2NTbmFwLmlkXG4gICAgfVxuICB9KVxuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge0FsbHBvc3RzfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn0iXSwibmFtZXMiOlsiZGIiLCJMaW5rIiwidXNlU3RhdGUiLCJIb21lIiwiQWxscG9zdHMiLCJwb3N0cyIsInNldHBvc3RzIiwiZW5kIiwic2V0RW5kIiwibG9hZE1vcmUiLCJsYXN0IiwicmVzIiwibmV3cG9zdHMiLCJsZW5ndGgiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsInN0YXJ0QWZ0ZXIiLCJEYXRlIiwiY3JlYXRlZEF0IiwibGltaXQiLCJnZXQiLCJkb2NzIiwibWFwIiwiZG9jU25hcCIsImRhdGEiLCJ0b01pbGxpcyIsImlkIiwiY29uY2F0IiwiZGl2Iiwic3BhbiIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJocmVmIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});