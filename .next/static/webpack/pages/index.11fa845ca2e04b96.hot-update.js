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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        content: \"\"\n    }), userPost = ref1[0], setUserPost = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var db1 = firebase.firestore();\n        var getAllUserPosts = db1.collectionGroup(\"userPosts\").orderBy(\"createdAt\", \"desc\").get().then(function(querySnapshot) {\n            var userPosts = [];\n            querySnapshot.forEach(function(doc) {\n                userPosts.push({\n                    uid: doc.ref.parent.parent.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            return Promise.resolve(userPosts);\n        });\n        var getAllUsers = db1.collection(\"users\").get().then(function(querySnapshot) {\n            var users = [];\n            querySnapshot.forEach(function(doc) {\n                users.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        getAllUserPosts.then(function(userPosts) {\n            var uids = userPosts.map(function(usePost) {\n                return usePost.uid;\n            });\n            var getUserByUserPostId = getAllUsers.then(function(users) {\n                var resultUser = users.filter(function(user) {\n                    return uids.includes(user.id);\n                });\n                return Promise.resolve([\n                    resultUser,\n                    userPosts\n                ]);\n            });\n            getUserByUserPostId.then(function(param) {\n                var _param = _slicedToArray(param, 2), resultUser = _param[0], _$userPosts = _param[1];\n                var userPostList = [];\n                _$userPosts.map(function(post) {\n                    var user = resultUser.find(function(u) {\n                        return u.id === post.uid;\n                    });\n                    userPostList.push({\n                        id: post.upid,\n                        authour: user.name,\n                        title: post.data.title,\n                        content: post.data.content\n                    });\n                });\n                setPosts(userPostList);\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"card-image\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: blog.imageUrl,\n                                    className: \"jsx-6b74df9f3ac2e0f1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"card-title\",\n                                    children: blog.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-6b74df9f3ac2e0f1\",\n                                children: blog.body\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"card-action\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                href: \"/blogs/\".concat(blog.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"jsx-6b74df9f3ac2e0f1\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 50\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, _this1)\n                    ]\n                }, blog.createdAt, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 15\n                }, _this1);\n            }),\n            end == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return loadMore();\n                },\n                className: \"jsx-6b74df9f3ac2e0f1\" + \" \" + \"btn #fb8c00 orange darken-1\",\n                children: \"Load more\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"jsx-6b74df9f3ac2e0f1\",\n                children: \"You have reached end\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"6b74df9f3ac2e0f1\",\n                children: \".card.jsx-6b74df9f3ac2e0f1{max-width:500px;margin:22px auto}p.jsx-6b74df9f3ac2e0f1{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 73,\n        columnNumber: 7\n    }, _this);\n};\n_s(Home, \"Q52Jv7Yy2o3/VSTZPELkXg9eUTQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzswQ0FBRUwsSUFBSSxDQUFDTSxJQUFJOzs7OztzQ0FBSzs7Ozs7a0NBQ2Q7c0NBQ04sOERBQUNSLEtBQUc7c0VBQVcsYUFBYTtzQ0FDMUIsNEVBQUNTLElBQUk7Z0NBQUNDLElBQUksRUFBRSxTQUFRLENBQVUsT0FBUlIsSUFBSSxDQUFDeEIsRUFBRSxDQUFFOzBDQUFFLDRFQUFDaUMsR0FBQzs7OENBQUMsV0FBUzs7Ozs7MENBQUk7Ozs7O3NDQUFPOzs7OztrQ0FDcEQ7O21CQVZxQlQsSUFBSSxDQUFDVSxTQUFTOzs7OzBCQVdyQyxDQUNMO2FBQ0YsQ0FBQztZQUVEQyxHQUFHLElBQUUsS0FBSyxpQkFDWCw4REFBQ0MsUUFBTTtnQkFBeUNDLE9BQU8sRUFBRTsyQkFBSUMsUUFBUSxFQUFFO2lCQUFBOzBEQUFyRCw2QkFBNkI7MEJBQTBCLFdBQVM7Ozs7O3FCQUFTLGlCQUN6Riw4REFBQ0MsSUFBRTs7MEJBQUMsc0JBQW9COzs7OztxQkFBSzs7Ozs7Ozs7OzthQWtCN0IsQ0FDUDtDQUVKO0dBOUdPN0QsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBK0daLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYn0gZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG4gIGNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbdXNlclBvc3QsIHNldFVzZXJQb3N0XSA9IHVzZVN0YXRlKHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgIH0pXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpXG4gICAgICBjb25zdCBnZXRBbGxVc2VyUG9zdHMgPSBkYlxuICAgICAgICAuY29sbGVjdGlvbkdyb3VwKCd1c2VyUG9zdHMnKVxuICAgICAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywgJ2Rlc2MnKVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICBsZXQgdXNlclBvc3RzID0gW11cbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgdXNlclBvc3RzLnB1c2goe1xuICAgICAgICAgICAgICB1aWQ6IGRvYy5yZWYucGFyZW50LnBhcmVudC5pZCxcbiAgICAgICAgICAgICAgdXBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLCBjb250ZW50OiBkb2MuZGF0YSgpLmNvbnRlbnQgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXJQb3N0cylcbiAgICAgICAgfSlcbiAgXG4gICAgICBjb25zdCBnZXRBbGxVc2VycyA9IGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIGxldCB1c2VycyA9IFtdXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgIHVzZXJzLnB1c2goe1xuICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VycylcbiAgICAgICAgfSlcbiAgXG4gICAgICBnZXRBbGxVc2VyUG9zdHMudGhlbigodXNlclBvc3RzKSA9PiB7XG4gICAgICAgIGxldCB1aWRzID0gdXNlclBvc3RzLm1hcCgodXNlUG9zdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB1c2VQb3N0LnVpZFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBnZXRVc2VyQnlVc2VyUG9zdElkID0gZ2V0QWxsVXNlcnMudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0VXNlciA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHVpZHMuaW5jbHVkZXModXNlci5pZClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3Jlc3VsdFVzZXIsIHVzZXJQb3N0c10pXG4gICAgICAgIH0pXG4gIFxuICAgICAgICBnZXRVc2VyQnlVc2VyUG9zdElkLnRoZW4oKFtyZXN1bHRVc2VyLCB1c2VyUG9zdHNdKSA9PiB7XG4gICAgICAgICAgbGV0IHVzZXJQb3N0TGlzdCA9IFtdXG4gICAgICAgICAgdXNlclBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHJlc3VsdFVzZXIuZmluZCgodSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdS5pZCA9PT0gcG9zdC51aWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB1c2VyUG9zdExpc3QucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiBwb3N0LnVwaWQsXG4gICAgICAgICAgICAgIGF1dGhvdXI6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgdGl0bGU6IHBvc3QuZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgY29udGVudDogcG9zdC5kYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0UG9zdHModXNlclBvc3RMaXN0KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LCBbXSlcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAge2Jsb2dzLm1hcChibG9nPT57XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5jcmVhdGVkQXR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmxvZy5pbWFnZVVybH0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Jsb2cudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cD57YmxvZy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5pZH1gfT48YT5SZWFkIE1vcmU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICBcbiAgICAgICAgICB7ZW5kPT1mYWxzZT9cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biAjZmI4YzAwIG9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9eygpPT5sb2FkTW9yZSgpfT5Mb2FkIG1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgOjxoMz5Zb3UgaGF2ZSByZWFjaGVkIGVuZDwvaDM+XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICBcbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDo1MDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgXG59XG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiZGIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJwb3N0cyIsInNldFBvc3RzIiwidGl0bGUiLCJjb250ZW50IiwidXNlclBvc3QiLCJzZXRVc2VyUG9zdCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiZ2V0QWxsVXNlclBvc3RzIiwiY29sbGVjdGlvbkdyb3VwIiwib3JkZXJCeSIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwidXNlclBvc3RzIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ1aWQiLCJyZWYiLCJwYXJlbnQiLCJpZCIsInVwaWQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRBbGxVc2VycyIsImNvbGxlY3Rpb24iLCJ1c2VycyIsIm5hbWUiLCJ1aWRzIiwibWFwIiwidXNlUG9zdCIsImdldFVzZXJCeVVzZXJQb3N0SWQiLCJyZXN1bHRVc2VyIiwiZmlsdGVyIiwidXNlciIsImluY2x1ZGVzIiwidXNlclBvc3RMaXN0IiwicG9zdCIsImZpbmQiLCJ1IiwiYXV0aG91ciIsImRpdiIsImJsb2dzIiwiYmxvZyIsImltZyIsInNyYyIsImltYWdlVXJsIiwic3BhbiIsInAiLCJib2R5IiwiTGluayIsImhyZWYiLCJhIiwiY3JlYXRlZEF0IiwiZW5kIiwiYnV0dG9uIiwib25DbGljayIsImxvYWRNb3JlIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});