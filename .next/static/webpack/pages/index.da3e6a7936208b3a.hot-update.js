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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), /*#__PURE__*/ userBlogs1 = ref[0], setUserBlogs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), blogs = ref1[0], setBlogs = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getAllUserBlogs = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n        return function() {\n            return getAllUserBlogs;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        var getAllUser = _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var users = [];\n            querySnapshot.forEach(function(doc) {\n                users.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        getAllUser.then(function(users) {\n            var uids = userBlogs1.map(function(userBlogs) {\n                return userBlogs.uid;\n            });\n            var resultUser = users.filter(function(user) {\n                return uids.includes(user.id);\n            });\n            var userBlogList = [];\n            userBlogs1.map(function(blog) {\n                var _$users = resultUser.find(function(u) {\n                    return u.id === blog.uid;\n                });\n                userBlogList.push({\n                    id: blog.upid,\n                    author: _$users.name,\n                    title: blog.data.title,\n                    content: blog.data.content\n                });\n            });\n            setBlogs(userBlogList);\n        });\n        return getAllUsers;\n    }, [\n        userBlogs1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d578b65e5a85516\" + \" \" + \"center\",\n        children: [\n            blogs.map(function(blog) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-d578b65e5a85516\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \"card-title card #ffc107 amber\",\n                                children: [\n                                    \"Title: \",\n                                    blog.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 16\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 14\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-d578b65e5a85516\",\n                                children: blog.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 16\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 14\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"format\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"jsx-d578b65e5a85516\" + \" \" + \" #aeea00 lime accent-4\",\n                                children: [\n                                    \"Author: \",\n                                    blog.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 16\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 14\n                        }, _this)\n                    ]\n                }, blog.id, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d578b65e5a85516\",\n                children: \".card.jsx-d578b65e5a85516{max-width:500px;margin:22px auto}p.jsx-d578b65e5a85516{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}; // export async function getServerSideProps(context) {\n //   const querySnap = await db.collectionGroup('blog').orderBy('createdAt', \"desc\")\n //     .get()\n //   const Allblogs = querySnap.docs.map(docSnap => {\n //     return {\n //       ...docSnap.data(),\n //       createdAt: docSnap.data().createdAt.toMillis(),\n //       updatedAt: docSnap.data().updatedAt.toMillis(),\n //       id: docSnap.id,\n //     }\n //   })\n //   return {\n //     props: { Allblogs }, // will be passed to the page component as props\n //   }\n // }\n // const loadMore = async () => {\n //   const last = blogs[blogs.length - 1]\n //   const res = await db.collection('blogs')\n //     .orderBy('createdAt', 'desc')\n //     .startAfter(new Date(last.createdAt))\n //     .get()\n // const newblogs = res.docs.map(docSnap => {\n //   return {\n //     ...docSnap.data(),\n //     createdAt: docSnap.data().createdAt.toMillis(),\n //     id: docSnap.id\n //   }\n // })\n // setblogs(blogs.concat(newblogs))\n // if (newblogs.length < 3) {\n //   setEnd(true)\n // }\n_s(Home, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztDQUNQLGFBQWE7Q0FDYiw0RUFBNEU7Q0FDNUUsTUFBTTtDQUNOLElBQUk7Q0FFSixpQ0FBaUM7Q0FDL0IseUNBQXlDO0NBQ3pDLDZDQUE2QztDQUM3QyxvQ0FBb0M7Q0FDcEMsNENBQTRDO0NBQzVDLGFBQWE7Q0FDWCw2Q0FBNkM7Q0FDN0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixzREFBc0Q7Q0FDdEQscUJBQXFCO0NBQ3JCLE1BQU07Q0FDTixLQUFLO0NBQ0wsbUNBQW1DO0NBQ25DLDZCQUE2QjtDQUM3QixpQkFBaUI7Q0FDakIsSUFBSTtHQWpJZ0JkLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSdmaXJlYmFzZS9hcHAnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJCbG9ncywgc2V0VXNlckJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIGNvbnN0IGdldEFsbFVzZXJCbG9ncyA9IGRiLmNvbGxlY3Rpb25Hcm91cCgnYmxvZycpXG4gICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcbiAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgICAgIGxldCB1c2VyQmxvZ3MgPSBbXVxuICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIHVzZXJCbG9ncy5wdXNoKHtcbiAgICAgICAgICB1aWQ6IGRvYy5pZCxcbiAgICAgICAgICB1cGlkOiBkb2MuaWQsXG4gICAgICAgICAgZGF0YTogeyB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSwgY29udGVudDogZG9jLmRhdGEoKS5jb250ZW50IH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgc2V0VXNlckJsb2dzKHVzZXJCbG9ncylcbiAgICB9KVxuICByZXR1cm4gKCkgPT4gZ2V0QWxsVXNlckJsb2dzXG59LCBbXSlcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYgKCF1c2VyQmxvZ3MubGVuZ3RoKXtcbiAgICByZXR1cm5cbiAgfVxuICBcbiAgICBjb25zdCBnZXRBbGxVc2VyID0gZGIuY29sbGVjdGlvbigndXNlcnMnKS5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PntcbiAgICAgbGV0IHVzZXJzID0gW11cbiAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICB1c2Vycy5wdXNoKHtcbiAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWUsXG4gICAgICAgfSlcblxuICAgICB9KVxuICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXJzKVxuICAgfSlcbiAgIGdldEFsbFVzZXIudGhlbigodXNlcnMpPT4ge1xuICAgIGxldCB1aWRzID0gdXNlckJsb2dzLm1hcCgodXNlckJsb2dzKSA9PiB7XG4gICAgICByZXR1cm4gdXNlckJsb2dzLnVpZFxuICAgIH0pXG4gICAgbGV0IHJlc3VsdFVzZXIgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiB1aWRzLmluY2x1ZGVzKHVzZXIuaWQpXG4gICAgfSlcbiAgICBsZXQgdXNlckJsb2dMaXN0ID0gW11cbiAgICB1c2VyQmxvZ3MubWFwKChibG9nKSA9PiB7XG4gICAgICBjb25zdCB1c2VycyA9IHJlc3VsdFVzZXIuZmluZCgodSkgPT4ge1xuICAgICAgICByZXR1cm4gdS5pZCA9PT0gYmxvZy51aWRcbiAgICAgIH0pXG4gICAgICB1c2VyQmxvZ0xpc3QucHVzaCh7XG4gICAgICAgIGlkOiBibG9nLnVwaWQsXG4gICAgICAgIGF1dGhvcjogdXNlcnMubmFtZSxcbiAgICAgICAgdGl0bGU6IGJsb2cuZGF0YS50aXRsZSxcbiAgICAgICAgY29udGVudDogYmxvZy5kYXRhLmNvbnRlbnQsXG4gICAgICB9KVxuICAgIH0pXG4gICAgc2V0QmxvZ3ModXNlckJsb2dMaXN0KVxuICAgfSlcblxuICAgcmV0dXJuIGdldEFsbFVzZXJzXG59LCBbdXNlckJsb2dzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgIHtibG9ncy5tYXAoKGJsb2cpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5pZH0+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGNhcmQgI2ZmYzEwNyBhbWJlclwiPlRpdGxlOiB7YmxvZy50aXRsZX08L2gxPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8cD57YmxvZy5jb250ZW50fTwvcD5cblxuICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hdFwiPlxuICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIiAjYWVlYTAwIGxpbWUgYWNjZW50LTRcIj5BdXRob3I6IHtibG9nLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YCAgICBcbiAgICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjoyMnB4IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbiB9ICAgICAgICAgXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcXVlcnlTbmFwID0gYXdhaXQgZGIuY29sbGVjdGlvbkdyb3VwKCdibG9nJykub3JkZXJCeSgnY3JlYXRlZEF0JywgXCJkZXNjXCIpXG4vLyAgICAgLmdldCgpXG4vLyAgIGNvbnN0IEFsbGJsb2dzID0gcXVlcnlTbmFwLmRvY3MubWFwKGRvY1NuYXAgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAuLi5kb2NTbmFwLmRhdGEoKSxcbi8vICAgICAgIGNyZWF0ZWRBdDogZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4vLyAgICAgICB1cGRhdGVkQXQ6IGRvY1NuYXAuZGF0YSgpLnVwZGF0ZWRBdC50b01pbGxpcygpLFxuLy8gICAgICAgaWQ6IGRvY1NuYXAuaWQsXG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IEFsbGJsb2dzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGxvYWRNb3JlID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IGxhc3QgPSBibG9nc1tibG9ncy5sZW5ndGggLSAxXVxuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Jsb2dzJylcbiAgLy8gICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXG4gIC8vICAgICAuc3RhcnRBZnRlcihuZXcgRGF0ZShsYXN0LmNyZWF0ZWRBdCkpXG4gIC8vICAgICAuZ2V0KClcbiAgICAvLyBjb25zdCBuZXdibG9ncyA9IHJlcy5kb2NzLm1hcChkb2NTbmFwID0+IHtcbiAgICAvLyAgIHJldHVybiB7XG4gICAgLy8gICAgIC4uLmRvY1NuYXAuZGF0YSgpLFxuICAgIC8vICAgICBjcmVhdGVkQXQ6IGRvY1NuYXAuZGF0YSgpLmNyZWF0ZWRBdC50b01pbGxpcygpLFxuICAgIC8vICAgICBpZDogZG9jU25hcC5pZFxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gICAgLy8gc2V0YmxvZ3MoYmxvZ3MuY29uY2F0KG5ld2Jsb2dzKSlcbiAgICAvLyBpZiAobmV3YmxvZ3MubGVuZ3RoIDwgMykge1xuICAgIC8vICAgc2V0RW5kKHRydWUpXG4gICAgLy8gfVxuXG4iXSwibmFtZXMiOlsiZGIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJmaXJlYmFzZSIsIkhvbWUiLCJ1c2VyQmxvZ3MiLCJzZXRVc2VyQmxvZ3MiLCJibG9ncyIsInNldEJsb2dzIiwiZ2V0QWxsVXNlckJsb2dzIiwiY29sbGVjdGlvbkdyb3VwIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwidWlkIiwiaWQiLCJ1cGlkIiwiZGF0YSIsInRpdGxlIiwiY29udGVudCIsImxlbmd0aCIsImdldEFsbFVzZXIiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJ1c2VycyIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVpZHMiLCJtYXAiLCJyZXN1bHRVc2VyIiwiZmlsdGVyIiwidXNlciIsImluY2x1ZGVzIiwidXNlckJsb2dMaXN0IiwiYmxvZyIsImZpbmQiLCJ1IiwiYXV0aG9yIiwiZ2V0QWxsVXNlcnMiLCJkaXYiLCJoMSIsInAiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});