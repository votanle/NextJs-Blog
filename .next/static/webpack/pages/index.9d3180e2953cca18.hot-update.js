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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var user = param.user;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), name = ref2[0], setName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), userBlogs1 = ref3[0], setUserBlogs = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), blogs = ref4[0], setblogs = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.user.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n        return function() {\n            return getAllUserBlogs;\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-d578b65e5a85516\" + \" \" + \"center\",\n        children: [\n            \"return (\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-d578b65e5a85516\" + \" \" + \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-d578b65e5a85516\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \"card-title card #ffc107 amber\",\n                            children: [\n                                \"Title: \",\n                                blog.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-d578b65e5a85516\" + \" \" + \"card-content\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-d578b65e5a85516\",\n                            children: blog.content\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-d578b65e5a85516\" + \" \" + \"format\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"jsx-d578b65e5a85516\" + \" \" + \" #aeea00 lime accent-4\",\n                            children: [\n                                \"Author: \",\n                                blog.author.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, blog.createdAt, true, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this),\n            \"))\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d578b65e5a85516\",\n                children: \".card.jsx-d578b65e5a85516{max-width:500px;margin:22px auto}p.jsx-d578b65e5a85516{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}; // export async function getServerSideProps(context) {\n //   const querySnap = await db.collectionGroup('blog').orderBy('createdAt', \"desc\")\n //     .get()\n //   const Allblogs = querySnap.docs.map(docSnap => {\n //     return {\n //       ...docSnap.data(),\n //       createdAt: docSnap.data().createdAt.toMillis(),\n //       updatedAt: docSnap.data().updatedAt.toMillis(),\n //       id: docSnap.id,\n //     }\n //   })\n //   return {\n //     props: { Allblogs }, // will be passed to the page component as props\n //   }\n // }\n // const loadMore = async () => {\n //   const last = blogs[blogs.length - 1]\n //   const res = await db.collection('blogs')\n //     .orderBy('createdAt', 'desc')\n //     .startAfter(new Date(last.createdAt))\n //     .get()\n // const newblogs = res.docs.map(docSnap => {\n //   return {\n //     ...docSnap.data(),\n //     createdAt: docSnap.data().createdAt.toMillis(),\n //     id: docSnap.id\n //   }\n // })\n // setblogs(blogs.concat(newblogs))\n // if (newblogs.length < 3) {\n //   setEnd(true)\n // }\n_s(Home, \"wuoBl2LIbmI4BEO7koTEuNueTA8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDeEIsUUFBUTtDQUNSLE9BQU87Q0FDUCxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLE1BQU07Q0FDTixJQUFJO0NBRUosaUNBQWlDO0NBQy9CLHlDQUF5QztDQUN6Qyw2Q0FBNkM7Q0FDN0Msb0NBQW9DO0NBQ3BDLDRDQUE0QztDQUM1QyxhQUFhO0NBQ1gsNkNBQTZDO0NBQzdDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsc0RBQXNEO0NBQ3RELHFCQUFxQjtDQUNyQixNQUFNO0NBQ04sS0FBSztDQUNMLG1DQUFtQztDQUNuQyw2QkFBNkI7Q0FDN0IsaUJBQWlCO0NBQ2pCLElBQUk7R0E3RmdCOUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmaXJlYmFzZSBmcm9tJ2ZpcmViYXNlL2FwcCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt1c2VyfSApIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdXNlckJsb2dzLCBzZXRVc2VyQmxvZ3NdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtibG9ncywgc2V0YmxvZ3NdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgZGIuY29sbGVjdGlvbkdyb3VwKCdibG9nJylcbiAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywgJ2Rlc2MnKVxuICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IHVzZXJCbG9ncyA9IFtdXG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgdXNlckJsb2dzLnB1c2goe1xuICAgICAgICAgIHVpZDogZG9jLnVzZXIuaWQsXG4gICAgICAgICAgdXBpZDogZG9jLmlkLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsIGNvbnRlbnQ6IGRvYy5kYXRhKCkuY29udGVudCB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHNldFVzZXJCbG9ncyh1c2VyQmxvZ3MpXG4gICAgfSlcbiAgcmV0dXJuICgpID0+IGdldEFsbFVzZXJCbG9nc1xufSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17YmxvZy5jcmVhdGVkQXR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgY2FyZCAjZmZjMTA3IGFtYmVyXCI+VGl0bGU6IHtibG9nLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxwPntibG9nLmNvbnRlbnR9PC9wPlxuXG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hdFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiICNhZWVhMDAgbGltZSBhY2NlbnQtNFwiPkF1dGhvcjoge2Jsb2cuYXV0aG9yLm5hbWV9PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICBcblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgICAgXG4gICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDo1MDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG4gfSAgICAgICAgIFxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHF1ZXJ5U25hcCA9IGF3YWl0IGRiLmNvbGxlY3Rpb25Hcm91cCgnYmxvZycpLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsIFwiZGVzY1wiKVxuLy8gICAgIC5nZXQoKVxuLy8gICBjb25zdCBBbGxibG9ncyA9IHF1ZXJ5U25hcC5kb2NzLm1hcChkb2NTbmFwID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4vLyAgICAgICBjcmVhdGVkQXQ6IGRvY1NuYXAuZGF0YSgpLmNyZWF0ZWRBdC50b01pbGxpcygpLFxuLy8gICAgICAgdXBkYXRlZEF0OiBkb2NTbmFwLmRhdGEoKS51cGRhdGVkQXQudG9NaWxsaXMoKSxcbi8vICAgICAgIGlkOiBkb2NTbmFwLmlkLFxuLy8gICAgIH1cbi8vICAgfSlcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyBBbGxibG9ncyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zdCBsb2FkTW9yZSA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBjb25zdCBsYXN0ID0gYmxvZ3NbYmxvZ3MubGVuZ3RoIC0gMV1cbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpXG4gIC8vICAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywgJ2Rlc2MnKVxuICAvLyAgICAgLnN0YXJ0QWZ0ZXIobmV3IERhdGUobGFzdC5jcmVhdGVkQXQpKVxuICAvLyAgICAgLmdldCgpXG4gICAgLy8gY29uc3QgbmV3YmxvZ3MgPSByZXMuZG9jcy5tYXAoZG9jU25hcCA9PiB7XG4gICAgLy8gICByZXR1cm4ge1xuICAgIC8vICAgICAuLi5kb2NTbmFwLmRhdGEoKSxcbiAgICAvLyAgICAgY3JlYXRlZEF0OiBkb2NTbmFwLmRhdGEoKS5jcmVhdGVkQXQudG9NaWxsaXMoKSxcbiAgICAvLyAgICAgaWQ6IGRvY1NuYXAuaWRcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIHNldGJsb2dzKGJsb2dzLmNvbmNhdChuZXdibG9ncykpXG4gICAgLy8gaWYgKG5ld2Jsb2dzLmxlbmd0aCA8IDMpIHtcbiAgICAvLyAgIHNldEVuZCh0cnVlKVxuICAgIC8vIH1cblxuIl0sIm5hbWVzIjpbImRiIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiZmlyZWJhc2UiLCJIb21lIiwidXNlciIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm5hbWUiLCJzZXROYW1lIiwidXNlckJsb2dzIiwic2V0VXNlckJsb2dzIiwiYmxvZ3MiLCJzZXRibG9ncyIsImNvbGxlY3Rpb25Hcm91cCIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInVpZCIsImlkIiwidXBpZCIsImRhdGEiLCJnZXRBbGxVc2VyQmxvZ3MiLCJkaXYiLCJoMSIsImJsb2ciLCJwIiwiaDUiLCJhdXRob3IiLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});