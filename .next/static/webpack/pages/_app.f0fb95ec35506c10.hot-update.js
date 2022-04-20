"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\nfunction NavBar(param) {\n    var user = param.user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"nav-wrapper #fb8c00 orange darken-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"brand-logo\",\n                        children: \"Blogger\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                        lineNumber: 8,\n                        columnNumber: 32\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    id: \"nav-mobile\",\n                    className: \" right sidenav-trigger\",\n                    children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/posts/createblog\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Create Blog\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 64\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                lineNumber: 13,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/users/userinfo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"PROFILE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 62\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                lineNumber: 14,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn red\",\n                                        onClick: function() {\n                                            return _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signOut();\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 34\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                lineNumber: 15,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/login\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 53\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/signup\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Signup\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 54\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                                lineNumber: 21,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/components/NavBar.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNNO0FBQ25CLFNBQVNFLE1BQU0sQ0FBQyxLQUFRLEVBQUU7UUFBVixJQUFNLEdBQU4sS0FBUSxDQUFOQyxJQUFJO0lBRWpDLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxxQ0FBcUM7OzhCQUNoRCw4REFBQ04sa0RBQUk7b0JBQUNPLElBQUksRUFBQyxHQUFHOzhCQUFDLDRFQUFDQyxHQUFDO3dCQUFDRixTQUFTLEVBQUMsWUFBWTtrQ0FBQyxTQUFPOzs7Ozs0QkFBSTs7Ozs7d0JBQU87OEJBQzNELDhEQUFDRyxJQUFFO29CQUFDQyxFQUFFLEVBQUMsWUFBWTtvQkFBQ0osU0FBUyxFQUFDLHdCQUF3Qjs4QkFDakRILElBQUksaUJBQ0Q7OzBDQUVJLDhEQUFDUSxJQUFFOzBDQUFDLDRFQUFDWCxrREFBSTtvQ0FBQ08sSUFBSSxFQUFDLG1CQUFtQjs4Q0FBQyw0RUFBQ0MsR0FBQztrREFBQyxhQUFXOzs7Ozs0Q0FBSTs7Ozs7d0NBQU87Ozs7O29DQUFLOzBDQUNqRSw4REFBQ0csSUFBRTswQ0FBQyw0RUFBQ1gsa0RBQUk7b0NBQUNPLElBQUksRUFBQyxpQkFBaUI7OENBQUMsNEVBQUNDLEdBQUM7a0RBQUMsU0FBTzs7Ozs7NENBQUk7Ozs7O3dDQUFPOzs7OztvQ0FBSzswQ0FDM0QsOERBQUNHLElBQUU7O29DQUFDLEdBQUM7a0RBQUEsOERBQUNDLFFBQU07d0NBQUNOLFNBQVMsRUFBQyxTQUFTO3dDQUFDTyxPQUFPLEVBQUU7bURBQU1aLG1EQUFZLEVBQUU7eUNBQUE7a0RBQUUsUUFBTTs7Ozs7NENBQVM7Ozs7OztvQ0FBSzs7b0NBQ3JGLGlCQUdIOzswQ0FDSSw4REFBQ1UsSUFBRTswQ0FBQyw0RUFBQ1gsa0RBQUk7b0NBQUNPLElBQUksRUFBQyxRQUFROzhDQUFDLDRFQUFDQyxHQUFDO2tEQUFDLE9BQUs7Ozs7OzRDQUFJOzs7Ozt3Q0FBTzs7Ozs7b0NBQUs7MENBQ2hELDhEQUFDRyxJQUFFOzBDQUFDLDRFQUFDWCxrREFBSTtvQ0FBQ08sSUFBSSxFQUFDLFNBQVM7OENBQUMsNEVBQUNDLEdBQUM7a0RBQUMsUUFBTTs7Ozs7NENBQUk7Ozs7O3dDQUFPOzs7OztvQ0FBSzs7b0NBRW5EOzs7Ozt3QkFHTjs7Ozs7O2dCQUNIOzs7OztZQUNKLENBRVQ7Q0FDSjtBQTVCdUJOLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoeyB1c2VyIH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+QmxvZ2dlcjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cIiByaWdodCBzaWRlbmF2LXRyaWdnZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Bvc3RzL2NyZWF0ZWJsb2dcIj48YT5DcmVhdGUgQmxvZzwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi91c2Vycy91c2VyaW5mb1wiPjxhPlBST0ZJTEU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biByZWRcIiBvbkNsaWNrPXsoKSA9PiBhdXRoLnNpZ25PdXQoKX0+TG9nb3V0PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TG9naW48L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+U2lnbnVwPC9hPjwvTGluaz48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsImF1dGgiLCJOYXZCYXIiLCJ1c2VyIiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJ1bCIsImlkIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});