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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nfunction _throw(e) {\n    throw e;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ userBlogs1 = ref[0], setUserBlogs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), blogs = ref1[0], setBlogs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.ref.parent.parent.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        var getAllUsers = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var users = [];\n            querySnapshot.forEach(function(doc) {\n                users.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        getAllUsers.then(function(users) {\n            var uids = userBlogs1.map(function(userBlogs) {\n                return userBlogs.uid;\n            });\n            var resultUser = users.filter(function(user) {\n                return uids.includes(user.id);\n            });\n            var userBlogList = [];\n            userBlogs1.map(function(blog) {\n                var _$users = resultUser.find(function(user) {\n                    return user.id === blog.uid;\n                });\n                userBlogList.push({\n                    id: blog.upid,\n                    author: _$users.name,\n                    title: blog.data.title,\n                    content: blog.data.content\n                });\n            });\n            setBlogs(userBlogList);\n        });\n    }, [\n        userBlogs1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-df559523e7c424b9\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-df559523e7c424b9\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"jsx-df559523e7c424b9\",\n                                children: [\n                                    \"Title: \",\n                                    blog.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-df559523e7c424b9\",\n                                children: blog.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\" + \" \" + \"format\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"jsx-df559523e7c424b9\",\n                                children: [\n                                    \"Author: \",\n                                    blog.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\" + \" \" + \"row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"jsx-df559523e7c424b9\" + \" \" + \"col s12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-df559523e7c424b9\" + \" \" + \"row\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-df559523e7c424b9\" + \" \" + \"input-field col s12\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"textarea1\",\n                                            placeholder: \"Comment Here!!!\",\n                                            className: \"jsx-df559523e7c424b9\" + \" \" + \"materialize-textarea\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            name: \"action\",\n                            className: \"jsx-df559523e7c424b9\" + \" \" + \"btn waves-effect waves-light #fb8c00 orange darken-1\",\n                            children: [\n                                \"Submit\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"jsx-df559523e7c424b9\" + \" \" + \"material-icons right\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, blog.id, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"df559523e7c424b9\",\n                children: \".card.jsx-df559523e7c424b9{max-width:700px;margin:22px auto}p.jsx-df559523e7c424b9{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEwQzs7Ozs7NkNBQy9GOzs7Ozt5Q0FDRjs7Ozs7cUNBQ0Q7Ozs7O2lDQUNIO3NDQUNOLDhEQUFDQyxRQUFNOzRCQUFrRUMsSUFBSSxFQUFDLFFBQVE7NEJBQUNyQixJQUFJLEVBQUMsUUFBUTtzRUFBbEYsc0RBQXNEOztnQ0FBNkIsUUFDbkc7OENBQUEsOERBQUNzQixHQUFDOzhFQUFXLHNCQUFzQjs4Q0FBQyxNQUFJOzs7Ozt5Q0FBSTs7Ozs7O2lDQUNyQzs7bUJBdkJnQlosSUFBSSxDQUFDdEIsRUFBRTs7Ozt5QkE0QjVCO2FBQ1AsQ0FBQzs7Ozs7Ozs7OztZQWVFLENBQ1A7Q0FDRjtHQWpIdUJmLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgfSkge1xuICBjb25zdCBbdXNlckJsb2dzLCBzZXRVc2VyQmxvZ3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRiLmNvbGxlY3Rpb25Hcm91cCgnYmxvZycpXG4gICAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywgJ2Rlc2MnKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGxldCB1c2VyQmxvZ3MgPSBbXVxuICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICB1c2VyQmxvZ3MucHVzaCh7XG4gICAgICAgICAgICB1aWQ6IGRvYy5yZWYucGFyZW50LnBhcmVudC5pZCxcbiAgICAgICAgICAgIHVwaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsIGNvbnRlbnQ6IGRvYy5kYXRhKCkuY29udGVudCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNldFVzZXJCbG9ncyh1c2VyQmxvZ3MpXG4gICAgICB9KVxuXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyQmxvZ3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxVc2VycyA9IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IHVzZXJzID0gW11cbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIHVzZXJzLnB1c2goe1xuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgICB9KVxuXG4gICAgICB9KVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VycylcbiAgICB9KVxuICAgIGdldEFsbFVzZXJzLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICBsZXQgdWlkcyA9IHVzZXJCbG9ncy5tYXAoKHVzZXJCbG9ncykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckJsb2dzLnVpZFxuICAgICAgfSlcbiAgICAgIGxldCByZXN1bHRVc2VyID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgIHJldHVybiB1aWRzLmluY2x1ZGVzKHVzZXIuaWQpXG4gICAgICB9KVxuICAgICAgbGV0IHVzZXJCbG9nTGlzdCA9IFtdXG4gICAgICB1c2VyQmxvZ3MubWFwKChibG9nKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gcmVzdWx0VXNlci5maW5kKCh1c2VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IGJsb2cudWlkXG4gICAgICAgIH0pXG5cbiAgICAgICAgdXNlckJsb2dMaXN0LnB1c2goe1xuICAgICAgICAgIGlkOiBibG9nLnVwaWQsXG4gICAgICAgICAgYXV0aG9yOiB1c2Vycy5uYW1lLFxuICAgICAgICAgIHRpdGxlOiBibG9nLmRhdGEudGl0bGUsXG4gICAgICAgICAgY29udGVudDogYmxvZy5kYXRhLmNvbnRlbnQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgc2V0QmxvZ3ModXNlckJsb2dMaXN0KVxuICAgIH0pXG5cbiAgfSwgW3VzZXJCbG9nc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuXG4gICAgICB7YmxvZ3MubWFwKChibG9nKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5pZH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5UaXRsZToge2Jsb2cudGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXG4gICAgICAgICAgICA8cD57YmxvZy5jb250ZW50fTwvcD5cblxuICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hdFwiPlxuICAgICAgICAgICAgPGg1PkF1dGhvcjoge2Jsb2cuYXV0aG9yfTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRhcmVhMVwiIGNsYXNzTmFtZT1cIm1hdGVyaWFsaXplLXRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJDb21tZW50IEhlcmUhISFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgI2ZiOGMwMCBvcmFuZ2UgZGFya2VuLTFcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiPlN1Ym1pdFxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5zZW5kPC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLmlkfWB9PjxhPlJlYWQgTW9yZTwvYT48L0xpbms+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgICAgXG4gICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDo3MDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuIl0sIm5hbWVzIjpbImRiIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiSG9tZSIsInVzZXJCbG9ncyIsInNldFVzZXJCbG9ncyIsImJsb2dzIiwic2V0QmxvZ3MiLCJjb2xsZWN0aW9uR3JvdXAiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ1aWQiLCJyZWYiLCJwYXJlbnQiLCJpZCIsInVwaWQiLCJkYXRhIiwidGl0bGUiLCJjb250ZW50IiwibGVuZ3RoIiwiZ2V0QWxsVXNlcnMiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJ1c2VycyIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVpZHMiLCJtYXAiLCJyZXN1bHRVc2VyIiwiZmlsdGVyIiwidXNlciIsImluY2x1ZGVzIiwidXNlckJsb2dMaXN0IiwiYmxvZyIsImZpbmQiLCJhdXRob3IiLCJkaXYiLCJoMyIsInAiLCJoNSIsImZvcm0iLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});