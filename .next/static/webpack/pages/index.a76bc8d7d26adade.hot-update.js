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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ userBlogs1 = ref[0], setUserBlogs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), blogs = ref1[0], setBlogs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getAllUserBlogs = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.ref.parent.parent.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        var getAllUser = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var user = [];\n            querySnapshot.forEach(function(doc) {\n                user.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(user);\n        });\n        getAllUser.then(function(users) {\n            var uids = userBlogs1.map(function(userBlogs) {\n                return userBlogs.uid;\n            });\n            var resultUser = users.filter(function(user) {\n                return uids.includes(user.id);\n            });\n            var userBlogList = [];\n            userBlogs1.map(function(blog) {\n                var _$users = resultUser.find(function(u) {\n                    return u.id === blog.uid;\n                });\n                userBlogList.push({\n                    id: blog.upid,\n                    author: _$users.name,\n                    title: blog.data.title,\n                    content: blog.data.content\n                });\n            });\n            setBlogs(userBlogList);\n        });\n        return getAllUser;\n    }, [\n        userBlogs1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d578b65e5a85516\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-d578b65e5a85516\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \"card-title card #ffc107 amber\",\n                                children: [\n                                    \"Title: \",\n                                    blog.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 16\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 14\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-d578b65e5a85516\",\n                                children: blog.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 16\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 14\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"format\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \" #aeea00 lime accent-4\",\n                                children: [\n                                    \"Author: \",\n                                    blog.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 16\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 14\n                        }, _this)\n                    ]\n                }, blog.id, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d578b65e5a85516\",\n                children: \".card.jsx-d578b65e5a85516{max-width:500px;margin:22px auto}p.jsx-d578b65e5a85516{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNXO0FBQ2Y7QUFDTTs7QUFHbkIsU0FBU0ssSUFBSSxHQUFHOzs7SUFDN0IsSUFBa0NKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBUGhELFVBT2tCLEdBQWtCQSxHQUFZLEdBQTlCLEVBUGxCLFlBT2dDLEdBQUlBLEdBQVksR0FBaEI7SUFDOUIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSeEMsS0FRYyxHQUFjQSxJQUFZLEdBQTFCLEVBUmQsUUFRd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUV0QkMsZ0RBQVMsQ0FBRSxXQUFNO1FBQ2YsSUFBTVEsZUFBZSxHQUFHVix5REFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FDakRZLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQzVCQyxVQUFVLENBQUMsU0FBQ0MsUUFBUSxFQUFLO1lBQ3hCLElBQUlSLFNBQVMsR0FBRyxFQUFFO1lBQ2xCUSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxTQUFDQyxHQUFHLEVBQUs7Z0JBQ3hCVixTQUFTLENBQUNXLElBQUksQ0FBQztvQkFDYkMsR0FBRyxFQUFFRixHQUFHLENBQUNHLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQSxNQUFNLENBQUNDLEVBQUU7b0JBQzdCQyxJQUFJLEVBQUVOLEdBQUcsQ0FBQ0ssRUFBRTtvQkFDWkUsSUFBSSxFQUFFO3dCQUFFQyxLQUFLLEVBQUVSLEdBQUcsQ0FBQ08sSUFBSSxFQUFFLENBQUNDLEtBQUs7d0JBQUVDLE9BQU8sRUFBRVQsR0FBRyxDQUFDTyxJQUFJLEVBQUUsQ0FBQ0UsT0FBTztxQkFBRTtpQkFDL0QsQ0FBQzthQUNILENBQUM7WUFDRmxCLFlBQVksQ0FBQ0QsU0FBUyxDQUFDO1NBQ3hCLENBQUM7S0FDTCxFQUFFLEVBQUUsQ0FBQztJQUVOSixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNJLFVBQVMsQ0FBQ29CLE1BQU0sRUFBQztZQUNwQixPQUFNO1NBQ1A7UUFFQyxJQUFNQyxVQUFVLEdBQUczQixvREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDNkIsR0FBRyxFQUFFLENBQUNDLElBQUksQ0FBQyxTQUFDQyxhQUFhLEVBQUk7WUFDdEUsSUFBSUMsSUFBSSxHQUFHLEVBQUU7WUFDYkQsYUFBYSxDQUFDaEIsT0FBTyxDQUFDLFNBQUNDLEdBQUcsRUFBSztnQkFDN0JnQixJQUFJLENBQUNmLElBQUksQ0FBQztvQkFDUkksRUFBRSxFQUFFTCxHQUFHLENBQUNLLEVBQUU7b0JBQ1ZZLElBQUksRUFBRWpCLEdBQUcsQ0FBQ08sSUFBSSxFQUFFLENBQUNVLElBQUk7aUJBQ3RCLENBQUM7YUFFSCxDQUFDO1lBQ0YsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNILElBQUksQ0FBQztTQUM3QixDQUFDO1FBQ0ZMLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLFNBQUNNLEtBQUssRUFBSTtZQUN6QixJQUFJQyxJQUFJLEdBQUcvQixVQUFTLENBQUNnQyxHQUFHLENBQUMsU0FBQ2hDLFNBQVMsRUFBSztnQkFDdEMsT0FBT0EsU0FBUyxDQUFDWSxHQUFHO2FBQ3JCLENBQUM7WUFDRixJQUFJcUIsVUFBVSxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxTQUFDUixJQUFJLEVBQUs7Z0JBQ3RDLE9BQU9LLElBQUksQ0FBQ0ksUUFBUSxDQUFDVCxJQUFJLENBQUNYLEVBQUUsQ0FBQzthQUM5QixDQUFDO1lBQ0YsSUFBSXFCLFlBQVksR0FBRyxFQUFFO1lBQ3JCcEMsVUFBUyxDQUFDZ0MsR0FBRyxDQUFDLFNBQUNLLElBQUksRUFBSztnQkFDdEIsSUFBTVAsT0FBSyxHQUFHRyxVQUFVLENBQUNLLElBQUksQ0FBQyxTQUFDQyxDQUFDLEVBQUs7b0JBQ25DLE9BQU9BLENBQUMsQ0FBQ3hCLEVBQUUsS0FBS3NCLElBQUksQ0FBQ3pCLEdBQUc7aUJBQ3pCLENBQUM7Z0JBQ0Z3QixZQUFZLENBQUN6QixJQUFJLENBQUM7b0JBQ2hCSSxFQUFFLEVBQUVzQixJQUFJLENBQUNyQixJQUFJO29CQUNid0IsTUFBTSxFQUFFVixPQUFLLENBQUNILElBQUk7b0JBQ2xCVCxLQUFLLEVBQUVtQixJQUFJLENBQUNwQixJQUFJLENBQUNDLEtBQUs7b0JBQ3RCQyxPQUFPLEVBQUVrQixJQUFJLENBQUNwQixJQUFJLENBQUNFLE9BQU87aUJBQzNCLENBQUM7YUFDSCxDQUFDO1lBQ0ZoQixRQUFRLENBQUNpQyxZQUFZLENBQUM7U0FDdEIsQ0FBQztRQUNMLE9BQU9mLFVBQVU7S0FDaEIsRUFBRTtRQUFDckIsVUFBUztLQUFDLENBQUM7SUFFYixxQkFDRSw4REFBQ3lDLEtBQUc7aURBQVcsUUFBUTs7WUFDckJ2QyxLQUFLLENBQUM4QixHQUFHLENBQUMsU0FBQ0ssSUFBSTtxQ0FDZiw4REFBQ0ksS0FBRzs2REFBVyxNQUFNOztzQ0FDZCw4REFBQ0EsS0FBRzs7c0NBQ0YsNEVBQUNDLElBQUU7eUVBQVcsK0JBQStCOztvQ0FBQyxTQUFPO29DQUFDTCxJQUFJLENBQUNuQixLQUFLOzs7Ozs7cUNBQU07Ozs7O2lDQUNsRTtzQ0FDTiw4REFBQ3VCLEtBQUc7cUVBQVcsY0FBYztzQ0FFM0IsNEVBQUNFLEdBQUM7OzBDQUFFTixJQUFJLENBQUNsQixPQUFPOzs7OztxQ0FBSzs7Ozs7aUNBRWhCO3NDQUNQLDhEQUFDc0IsS0FBRztxRUFBVyxRQUFRO3NDQUNyQiw0RUFBQ0csSUFBRTt5RUFBVyx3QkFBd0I7O29DQUFDLFVBQVE7b0NBQUNQLElBQUksQ0FBQ0csTUFBTTs7Ozs7O3FDQUFNOzs7OztpQ0FDN0Q7O21CQVhjSCxJQUFJLENBQUN0QixFQUFFOzs7O3lCQWF2QjthQUNYLENBQUM7Ozs7Ozs7Ozs7WUFlRyxDQUNQO0NBQ0Q7R0E5RnNCaEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmaXJlYmFzZSBmcm9tJ2ZpcmViYXNlL2FwcCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlckJsb2dzLCBzZXRVc2VyQmxvZ3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZ2V0QWxsVXNlckJsb2dzID0gZGIuY29sbGVjdGlvbkdyb3VwKCdibG9nJylcbiAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywgJ2Rlc2MnKVxuICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IHVzZXJCbG9ncyA9IFtdXG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgdXNlckJsb2dzLnB1c2goe1xuICAgICAgICAgIHVpZDogZG9jLnJlZi5wYXJlbnQucGFyZW50LmlkLFxuICAgICAgICAgIHVwaWQ6IGRvYy5pZCxcbiAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLCBjb250ZW50OiBkb2MuZGF0YSgpLmNvbnRlbnQgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBzZXRVc2VyQmxvZ3ModXNlckJsb2dzKVxuICAgIH0pXG59LCBbXSlcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYgKCF1c2VyQmxvZ3MubGVuZ3RoKXtcbiAgICByZXR1cm5cbiAgfVxuICBcbiAgICBjb25zdCBnZXRBbGxVc2VyID0gZGIuY29sbGVjdGlvbigndXNlcnMnKS5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PntcbiAgICAgbGV0IHVzZXIgPSBbXVxuICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgIHVzZXIucHVzaCh7XG4gICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgIH0pXG5cbiAgICAgfSlcbiAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyKVxuICAgfSlcbiAgIGdldEFsbFVzZXIudGhlbigodXNlcnMpPT4ge1xuICAgIGxldCB1aWRzID0gdXNlckJsb2dzLm1hcCgodXNlckJsb2dzKSA9PiB7XG4gICAgICByZXR1cm4gdXNlckJsb2dzLnVpZFxuICAgIH0pXG4gICAgbGV0IHJlc3VsdFVzZXIgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiB1aWRzLmluY2x1ZGVzKHVzZXIuaWQpXG4gICAgfSlcbiAgICBsZXQgdXNlckJsb2dMaXN0ID0gW11cbiAgICB1c2VyQmxvZ3MubWFwKChibG9nKSA9PiB7XG4gICAgICBjb25zdCB1c2VycyA9IHJlc3VsdFVzZXIuZmluZCgodSkgPT4ge1xuICAgICAgICByZXR1cm4gdS5pZCA9PT0gYmxvZy51aWRcbiAgICAgIH0pXG4gICAgICB1c2VyQmxvZ0xpc3QucHVzaCh7XG4gICAgICAgIGlkOiBibG9nLnVwaWQsXG4gICAgICAgIGF1dGhvcjogdXNlcnMubmFtZSxcbiAgICAgICAgdGl0bGU6IGJsb2cuZGF0YS50aXRsZSxcbiAgICAgICAgY29udGVudDogYmxvZy5kYXRhLmNvbnRlbnQsXG4gICAgICB9KVxuICAgIH0pXG4gICAgc2V0QmxvZ3ModXNlckJsb2dMaXN0KVxuICAgfSlcbnJldHVybiBnZXRBbGxVc2VyXG59LCBbdXNlckJsb2dzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5pZH0+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGNhcmQgI2ZmYzEwNyBhbWJlclwiPlRpdGxlOiB7YmxvZy50aXRsZX08L2gxPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8cD57YmxvZy5jb250ZW50fTwvcD5cblxuICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hdFwiPlxuICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIiAjYWVlYTAwIGxpbWUgYWNjZW50LTRcIj5BdXRob3I6IHtibG9nLmF1dGhvcn08L2g1PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgICAgIFxuICAgICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NTAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjIycHggYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuIH0gICAgICAgICBcblxuXG4iXSwibmFtZXMiOlsiZGIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJmaXJlYmFzZSIsIkhvbWUiLCJ1c2VyQmxvZ3MiLCJzZXRVc2VyQmxvZ3MiLCJibG9ncyIsInNldEJsb2dzIiwiZ2V0QWxsVXNlckJsb2dzIiwiY29sbGVjdGlvbkdyb3VwIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwidWlkIiwicmVmIiwicGFyZW50IiwiaWQiLCJ1cGlkIiwiZGF0YSIsInRpdGxlIiwiY29udGVudCIsImxlbmd0aCIsImdldEFsbFVzZXIiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJ1c2VyIiwibmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidXNlcnMiLCJ1aWRzIiwibWFwIiwicmVzdWx0VXNlciIsImZpbHRlciIsImluY2x1ZGVzIiwidXNlckJsb2dMaXN0IiwiYmxvZyIsImZpbmQiLCJ1IiwiYXV0aG9yIiwiZGl2IiwiaDEiLCJwIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});