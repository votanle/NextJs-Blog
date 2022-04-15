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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _throw(e) {\n    throw e;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), /*#__PURE__*/ userBlogs1 = ref[0], setUserBlogs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), blogs = ref1[0], setBlogs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collectionGroup(\"userPosts\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.ref.parent.parent.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        var getAllUsers = _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var users = [];\n            querySnapshot.forEach(function(doc) {\n                users.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        getAllUsers.then(function(users) {\n            var uids = userBlogs1.map(function(userBlogs) {\n                return userBlogs.uid;\n            });\n            var resultUser = users.filter(function(user) {\n                return uids.includes(user.id);\n            });\n            var userBlogList = [];\n            userBlogs1.map(function(blog) {\n                var _$users = resultUser.find(function(user) {\n                    return user.id === blog.uid;\n                });\n                userBlogList.push({\n                    id: blog.upid,\n                    author: _$users.name,\n                    title: blog.data.title,\n                    content: blog.data.content\n                });\n            });\n            setBlogs(userBlogList);\n        });\n    }, [\n        userBlogs1\n    ]);\n    var commentsSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"comments\").doc(blogs.id).collection(\"comment\").add({\n                            contentComments: contentComments,\n                            createdAt: new Date()\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function commentsSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-df559523e7c424b9\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-df559523e7c424b9\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"jsx-df559523e7c424b9\",\n                                children: [\n                                    \" \",\n                                    blog.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\" + \" \" + \"card-content\",\n                            children: blog.content\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-df559523e7c424b9\" + \" \" + \"format\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                className: \"jsx-df559523e7c424b9\",\n                                children: [\n                                    \"@\",\n                                    blog.author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, blog.id, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"df559523e7c424b9\",\n                children: \".card.jsx-df559523e7c424b9{max-width:700px;margin:22px auto}p.jsx-df559523e7c424b9{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUMsR0FBQztvQ0FBQ1gsSUFBSSxDQUFDRSxNQUFNOzs7Ozs7cUNBQU07Ozs7O2lDQUNuQjs7bUJBWG1CRixJQUFJLENBQUN0QixFQUFFOzs7O3lCQVk1QjthQUNQLENBQUM7Ozs7Ozs7Ozs7WUFlRSxDQUNQO0NBQ0Y7R0EzR3VCZixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IH0pIHtcbiAgY29uc3QgW3VzZXJCbG9ncywgc2V0VXNlckJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuICBcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYi5jb2xsZWN0aW9uR3JvdXAoJ3VzZXJQb3N0cycpXG4gICAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywgJ2Rlc2MnKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGxldCB1c2VyQmxvZ3MgPSBbXVxuICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICB1c2VyQmxvZ3MucHVzaCh7XG4gICAgICAgICAgICB1aWQ6IGRvYy5yZWYucGFyZW50LnBhcmVudC5pZCxcbiAgICAgICAgICAgIHVwaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsIGNvbnRlbnQ6IGRvYy5kYXRhKCkuY29udGVudCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNldFVzZXJCbG9ncyh1c2VyQmxvZ3MpXG4gICAgICB9KVxuXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyQmxvZ3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxVc2VycyA9IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IHVzZXJzID0gW11cbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIHVzZXJzLnB1c2goe1xuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgICB9KVxuXG4gICAgICB9KVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VycylcbiAgICB9KVxuICAgIGdldEFsbFVzZXJzLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICBsZXQgdWlkcyA9IHVzZXJCbG9ncy5tYXAoKHVzZXJCbG9ncykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckJsb2dzLnVpZFxuICAgICAgfSlcbiAgICAgIGxldCByZXN1bHRVc2VyID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgIHJldHVybiB1aWRzLmluY2x1ZGVzKHVzZXIuaWQpXG4gICAgICB9KVxuICAgICAgbGV0IHVzZXJCbG9nTGlzdCA9IFtdXG4gICAgICB1c2VyQmxvZ3MubWFwKChibG9nKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gcmVzdWx0VXNlci5maW5kKCh1c2VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IGJsb2cudWlkXG4gICAgICAgIH0pXG5cbiAgICAgICAgdXNlckJsb2dMaXN0LnB1c2goe1xuICAgICAgICAgIGlkOiBibG9nLnVwaWQsXG4gICAgICAgICAgYXV0aG9yOiB1c2Vycy5uYW1lLFxuICAgICAgICAgIHRpdGxlOiBibG9nLmRhdGEudGl0bGUsXG4gICAgICAgICAgY29udGVudDogYmxvZy5kYXRhLmNvbnRlbnQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgc2V0QmxvZ3ModXNlckJsb2dMaXN0KVxuICAgIH0pXG5cbiAgfSwgW3VzZXJCbG9nc10pXG5cbiAgY29uc3QgY29tbWVudHNTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgZGIuY29sbGVjdGlvbignY29tbWVudHMnKS5kb2MoYmxvZ3MuaWQpLmNvbGxlY3Rpb24oJ2NvbW1lbnQnKS5hZGQoe1xuICAgICAgICBjb250ZW50Q29tbWVudHMsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIH0pXG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuXG4gICAgICB7YmxvZ3MubWFwKChibG9nKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5pZH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz4ge2Jsb2cudGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXG4gICAgICAgICAgIHtibG9nLmNvbnRlbnR9XG5cbiAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYXRcIj5cbiAgICAgICAgICAgIDxoNT5Ae2Jsb2cuYXV0aG9yfTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YCAgICBcbiAgICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjcwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjoyMnB4IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4iXSwibmFtZXMiOlsiZGIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJIb21lIiwidXNlckJsb2dzIiwic2V0VXNlckJsb2dzIiwiYmxvZ3MiLCJzZXRCbG9ncyIsImNvbGxlY3Rpb25Hcm91cCIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInVpZCIsInJlZiIsInBhcmVudCIsImlkIiwidXBpZCIsImRhdGEiLCJ0aXRsZSIsImNvbnRlbnQiLCJsZW5ndGgiLCJnZXRBbGxVc2VycyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsInVzZXJzIiwibmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidWlkcyIsIm1hcCIsInJlc3VsdFVzZXIiLCJmaWx0ZXIiLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1c2VyQmxvZ0xpc3QiLCJibG9nIiwiZmluZCIsImF1dGhvciIsImNvbW1lbnRzU3VibWl0IiwiZSIsImFkZCIsImNvbnRlbnRDb21tZW50cyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkaXYiLCJoMyIsImg1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});