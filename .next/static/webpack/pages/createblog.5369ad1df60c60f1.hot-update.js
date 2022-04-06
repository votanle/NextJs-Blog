"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createblog",{

/***/ "./pages/createblog.js":
/*!*****************************!*\
  !*** ./pages/createblog.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createblog; }\n/* harmony export */ });\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { storage, db, serverTimestamp } from '../firebase'\n\nvar _s = $RefreshSig$();\nfunction createblog(param) {\n    var user = param.user;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var createPost = function() {\n        var _ref = _asyncToGenerator(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(!title || !content)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        M.toast({\n                            html: \"please add all the fields\",\n                            classes: \"red\"\n                        });\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        try {\n                            _firebase__WEBPACK_IMPORTED_MODULE_4__.db.collection(\"posts\").add({\n                                title: title,\n                                content: content,\n                                author: {\n                                    name: _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.displayName,\n                                    id: _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.uid\n                                },\n                                createAt: new Date(),\n                                updateAt: new Date()\n                            });\n                            M.toast({\n                                html: \"Blog Created\",\n                                classes: \"green\"\n                            });\n                        } catch (err) {\n                            M.toast({\n                                html: \"error creating blog\",\n                                classes: \"red\"\n                            });\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createPost(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-c4243dcf0e813242\" + \" \" + \"input-field rootdiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"jsx-c4243dcf0e813242\",\n                children: \"Create A Blog !!\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: title,\n                placeholder: \"Title\",\n                onChange: function(e) {\n                    return setTitle(e.target.value);\n                },\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                value: content,\n                placeholder: \"content\",\n                onChange: function(e) {\n                    return setContent(e.target.value);\n                },\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return createPost();\n                },\n                className: \"jsx-c4243dcf0e813242\" + \" \" + \"btn #fb8c00 orange darken-1\",\n                children: \"Submit Post\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"c4243dcf0e813242\",\n                children: \".rootdiv.jsx-c4243dcf0e813242{margin:30px auto;max-width:600px;padding:20px;text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n};\n_s(createblog, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0MsNkRBQTZEO0FBRXpCOztBQUVyQixTQUFTSSxVQUFVLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDckMsSUFBMEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBTjFDLEtBTWdCLEdBQWNBLEdBQVksR0FBMUIsRUFOaEIsUUFNMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVA5QyxPQU9rQixHQUFnQkEsSUFBWSxHQUE1QixFQVBsQixVQU84QixHQUFJQSxJQUFZLEdBQWhCO0lBRTFCLElBQU1VLFVBQVU7bUJBQUcsMkxBQU9DLENBQUMsRUFBSzs7Ozs0QkFDeEIsR0FBQ0wsS0FBSyxJQUFJLENBQUNFLE9BQU87Ozs7d0JBQ2xCSSxDQUFDLENBQUNDLEtBQUssQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFLDJCQUEyQjs0QkFBQ0MsT0FBTyxFQUFDLEtBQUs7eUJBQUMsQ0FBQzs7O3dCQUc5RCxJQUFJOzRCQUNBWixvREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDYyxHQUFHLENBQUM7Z0NBQzFCWCxLQUFLLEVBQUxBLEtBQUs7Z0NBQ0xFLE9BQU8sRUFBUEEsT0FBTztnQ0FDUFUsTUFBTSxFQUFFO29DQUFDQyxJQUFJLEVBQUVqQixtRUFBNEI7b0NBQUVvQixFQUFFLEVBQUVwQiwyREFBb0I7aUNBQUM7Z0NBQ3RFc0IsUUFBUSxFQUFFLElBQUlDLElBQUksRUFBRTtnQ0FDcEJDLFFBQVEsRUFBRSxJQUFJRCxJQUFJLEVBQUU7NkJBQ3BCLENBQUM7NEJBRUZiLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO2dDQUFFQyxJQUFJLEVBQUUsY0FBYztnQ0FBRUMsT0FBTyxFQUFFLE9BQU87NkJBQUUsQ0FBQzt5QkFDOUMsQ0FBQyxPQUFPWSxHQUFHLEVBQUU7NEJBQ1ZmLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO2dDQUFFQyxJQUFJLEVBQUUscUJBQXFCO2dDQUFFQyxPQUFPLEVBQUUsS0FBSzs2QkFBRSxDQUFDO3lCQUMzRDs7Ozs7O1NBQ1o7d0JBbEJLTCxVQUFVLENBQVVDLENBQUM7OztPQWtCMUI7SUFFRCxxQkFDSSw4REFBQ2lCLEtBQUc7a0RBQVcscUJBQXFCOzswQkFDaEMsOERBQUNDLElBQUU7OzBCQUFDLGtCQUFnQjs7Ozs7b0JBQUs7MEJBQ3pCLDhEQUFDQyxPQUFLO2dCQUNGQyxJQUFJLEVBQUMsTUFBTTtnQkFDWEMsS0FBSyxFQUFFMUIsS0FBSztnQkFDWjJCLFdBQVcsRUFBQyxPQUFPO2dCQUNuQkMsUUFBUSxFQUFFLFNBQUN2QixDQUFDOzJCQUFLSixRQUFRLENBQUNJLENBQUMsQ0FBQ3dCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lCQUFBOzs7Ozs7b0JBRTNDOzBCQUNGLDhEQUFDSSxVQUFRO2dCQUNMTCxJQUFJLEVBQUMsTUFBTTtnQkFDWEMsS0FBSyxFQUFFeEIsT0FBTztnQkFDZHlCLFdBQVcsRUFBQyxTQUFTO2dCQUNyQkMsUUFBUSxFQUFFLFNBQUN2QixDQUFDOzJCQUFLRixVQUFVLENBQUNFLENBQUMsQ0FBQ3dCLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lCQUFBOzs7Ozs7b0JBRTdDOzBCQUNGLDhEQUFDSyxRQUFNO2dCQUF5Q0MsT0FBTyxFQUFFOzJCQUFNNUIsVUFBVSxFQUFFO2lCQUFBOzBEQUF6RCw2QkFBNkI7MEJBQThCLGFBQVc7Ozs7O29CQUFTOzs7Ozs7Ozs7O1lBYy9GLENBQ1Q7Q0FDSjtHQXpEdUJOLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlYmxvZy5qcz81NTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHN0b3JhZ2UsIGRiLCBzZXJ2ZXJUaW1lc3RhbXAgfSBmcm9tICcuLi9maXJlYmFzZSdcblxuaW1wb3J0IHthdXRoLCBkYn0gZnJvbSAnLi4vZmlyZWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZWJsb2coeyB1c2VyIH0pIHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGlmICghdGl0bGUgfHwgIWNvbnRlbnQpe1xuICAgICAgICAgICAgTS50b2FzdCh7aHRtbDogJ3BsZWFzZSBhZGQgYWxsIHRoZSBmaWVsZHMnLGNsYXNzZXM6XCJyZWRcIn0pICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJwb3N0c1wiKS5hZGQoe1xuICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgYXV0aG9yOiB7bmFtZTogYXV0aC5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSwgaWQ6IGF1dGguY3VycmVudFVzZXIudWlkfSxcbiAgICAgICAgICAgICBjcmVhdGVBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICB1cGRhdGVBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIE0udG9hc3QoeyBodG1sOiAnQmxvZyBDcmVhdGVkJywgY2xhc3NlczogXCJncmVlblwiIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIE0udG9hc3QoeyBodG1sOiAnZXJyb3IgY3JlYXRpbmcgYmxvZycsIGNsYXNzZXM6IFwicmVkXCIgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCByb290ZGl2XCI+XG4gICAgICAgICAgICA8aDM+Q3JlYXRlIEEgQmxvZyAhITwvaDM+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCkgPT4gY3JlYXRlUG9zdCgpfT5TdWJtaXQgUG9zdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAucm9vdGRpdntcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjozMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXV0aCIsImRiIiwiY3JlYXRlYmxvZyIsInVzZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJjcmVhdGVQb3N0IiwiZSIsIk0iLCJ0b2FzdCIsImh0bWwiLCJjbGFzc2VzIiwiY29sbGVjdGlvbiIsImFkZCIsImF1dGhvciIsIm5hbWUiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwiaWQiLCJ1aWQiLCJjcmVhdGVBdCIsIkRhdGUiLCJ1cGRhdGVBdCIsImVyciIsImRpdiIsImgzIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createblog.js\n");

/***/ })

});