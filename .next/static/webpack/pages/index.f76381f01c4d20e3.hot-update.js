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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var Allposts = param.Allposts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Allposts), /*#__PURE__*/ posts1 = ref[0], setposts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), end = ref1[0], setEnd = ref1[1];\n    //  const loadMore = async ()=>{\n    //    const last  = posts[posts.length-1]\n    //    const res = await  db.collection('posts')\n    //    .orderBy('createdAt','desc')\n    //    .limit(5)\n    //    .get()\n    //    const newposts = res.docs.map(docSnap=>{\n    //      return {\n    //       ...docSnap.data(),\n    //       createdAt:docSnap.data().createdAt.toMillis(),\n    //       id:docSnap.id\n    //     }\n    //    })\n    //    setposts(posts.concat(newposts))\n    //    if(newposts.length < 5){\n    //      setEnd(true)\n    //    }\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"center\",\n        children: [\n            posts1.map(function(posts) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-image\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-title\",\n                                children: posts.title\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-aeeeef7dbeb25dba\",\n                                children: posts.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, posts.createdAt, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"aeeeef7dbeb25dba\",\n                children: \".card.jsx-aeeeef7dbeb25dba{max-width:500px;margin:22px auto}p.jsx-aeeeef7dbeb25dba{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}; // export async function getServerSideProps(context) {\n //   const querySnap =await  db.collection('posts').orderBy('createdAt',\"desc\")\n //   .limit(3)\n //   .get()\n //   const Allposts =  querySnap.docs.map(docSnap=>{\n //     return {\n //       ...docSnap.data(),\n //       createdAt:docSnap.data().createdAt.toMillis(),\n //       id:docSnap.id\n //     }\n //   })\n // return {\n //   props: {Allposts}, // will be passed to the page component as props\n // }\n_s(Home, \"VI6GK6tnsBrM/+hgxa1gfNo38K4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQ0Y7QUFDRTs7QUFFZixTQUFTRyxJQUFJLENBQUMsS0FBVSxFQUFFO1FBQVosUUFBUyxHQUFULEtBQVUsQ0FBVEMsUUFBUTs7O0lBQ25DLElBQXlCRixHQUFrQixHQUFsQkEsK0NBQVEsQ0FBQ0UsUUFBUSxDQUFDLGdCQUw5QyxNQUtlLEdBQWFGLEdBQWtCLEdBQS9CLEVBTGYsUUFLd0IsR0FBSUEsR0FBa0IsR0FBdEI7SUFDckIsSUFBcUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFOdkMsR0FNYSxHQUFXQSxJQUFlLEdBQTFCLEVBTmIsTUFNb0IsR0FBSUEsSUFBZSxHQUFuQjtJQUNsQixnQ0FBZ0M7SUFDaEMseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxrQ0FBa0M7SUFFbEMsZUFBZTtJQUNmLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQix1REFBdUQ7SUFDdkQsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixRQUFRO0lBQ1Isc0NBQXNDO0lBRXRDLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLEtBQUs7SUFDTCxxQkFDRSw4REFBQ08sS0FBRztrREFBVyxRQUFROztZQUNsQkosTUFBSyxDQUFDSyxHQUFHLENBQUNMLFNBQUFBLEtBQUssRUFBRTtnQkFDaEIscUJBQ0UsOERBQUNJLEtBQUc7OERBQVcsTUFBTTs7c0NBQ3JCLDhEQUFDQSxLQUFHO3NFQUFXLFlBQVk7c0NBQ3pCLDRFQUFDRSxNQUFJOzBFQUFXLFlBQVk7MENBQUVOLEtBQUssQ0FBQ08sS0FBSzs7Ozs7cUNBQVE7Ozs7O2lDQUM3QztzQ0FDTiw4REFBQ0gsS0FBRztzRUFBVyxjQUFjO3NDQUMzQiw0RUFBQ0ksR0FBQzs7MENBQUVSLEtBQUssQ0FBQ1MsT0FBTzs7Ozs7cUNBQUs7Ozs7O2lDQUNsQjs7bUJBTnFCVCxLQUFLLENBQUNVLFNBQVM7Ozs7eUJBVXRDLENBQ0w7YUFDRixDQUFDOzs7Ozs7Ozs7O1lBc0JBLENBQ1A7Q0FDRixFQUdELHNEQUFzRDtDQUN0RCwrRUFBK0U7Q0FDL0UsY0FBYztDQUNkLFdBQVc7Q0FDWCxvREFBb0Q7Q0FDcEQsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQix1REFBdUQ7Q0FDdkQsc0JBQXNCO0NBQ3RCLFFBQVE7Q0FDUixPQUFPO0NBR0wsV0FBVztDQUNYLHdFQUF3RTtDQUN4RSxJQUFJO0dBakZrQlosSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYn0gZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7QWxscG9zdHN9KSB7XG4gICBjb25zdCBbcG9zdHMsc2V0cG9zdHNdID0gdXNlU3RhdGUoQWxscG9zdHMpXG4gICBjb25zdCBbZW5kLHNldEVuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgLy8gIGNvbnN0IGxvYWRNb3JlID0gYXN5bmMgKCk9PntcbiAgLy8gICAgY29uc3QgbGFzdCAgPSBwb3N0c1twb3N0cy5sZW5ndGgtMV1cbiAgLy8gICAgY29uc3QgcmVzID0gYXdhaXQgIGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcbiAgLy8gICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsJ2Rlc2MnKVxuICAgXG4gIC8vICAgIC5saW1pdCg1KVxuICAvLyAgICAuZ2V0KClcbiAgLy8gICAgY29uc3QgbmV3cG9zdHMgPSByZXMuZG9jcy5tYXAoZG9jU25hcD0+e1xuICAvLyAgICAgIHJldHVybiB7XG4gIC8vICAgICAgIC4uLmRvY1NuYXAuZGF0YSgpLFxuICAvLyAgICAgICBjcmVhdGVkQXQ6ZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4gIC8vICAgICAgIGlkOmRvY1NuYXAuaWRcbiAgLy8gICAgIH1cbiAgLy8gICAgfSlcbiAgLy8gICAgc2V0cG9zdHMocG9zdHMuY29uY2F0KG5ld3Bvc3RzKSlcblxuICAvLyAgICBpZihuZXdwb3N0cy5sZW5ndGggPCA1KXtcbiAgLy8gICAgICBzZXRFbmQodHJ1ZSlcbiAgLy8gICAgfVxuICAvLyAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdHM9PntcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3RzLmNyZWF0ZWRBdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwb3N0cy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwPntwb3N0cy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3RzLmlkfWB9PjxhPlJlYWQgTW9yZTwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cblxuICAgICAgICB7Lyoge2VuZD09ZmFsc2U/XG4gICAgICAgIC8vIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9PmxvYWRNb3JlKCl9PkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgICAgICAvLyAgOjxoMz5Zb3UgaGF2ZSByZWFjaGVkIGVuZDwvaDM+XG4gICAgICAgIC8vIH0gKi99XG4gICAgICAgIFxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCBxdWVyeVNuYXAgPWF3YWl0ICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsXCJkZXNjXCIpXG4vLyAgIC5saW1pdCgzKVxuLy8gICAuZ2V0KClcbi8vICAgY29uc3QgQWxscG9zdHMgPSAgcXVlcnlTbmFwLmRvY3MubWFwKGRvY1NuYXA9Pntcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4vLyAgICAgICBjcmVhdGVkQXQ6ZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4vLyAgICAgICBpZDpkb2NTbmFwLmlkXG4vLyAgICAgfVxuLy8gICB9KVxuXG5cbiAgLy8gcmV0dXJuIHtcbiAgLy8gICBwcm9wczoge0FsbHBvc3RzfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIC8vIH1cbiJdLCJuYW1lcyI6WyJkYiIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJBbGxwb3N0cyIsInBvc3RzIiwic2V0cG9zdHMiLCJlbmQiLCJzZXRFbmQiLCJkaXYiLCJtYXAiLCJzcGFuIiwidGl0bGUiLCJwIiwiY29udGVudCIsImNyZWF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});