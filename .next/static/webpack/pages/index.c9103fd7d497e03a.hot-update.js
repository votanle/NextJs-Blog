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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var Allposts = param.Allposts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Allposts), /*#__PURE__*/ posts1 = ref[0], setposts = ref[1];\n    var createPost = _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"posts\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var getPosts = function() {\n            var _ref = _asyncToGenerator(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_firebase__WEBPACK_IMPORTED_MODULE_3__.getDoc)(createPost);\n                        case 2:\n                            data = _ctx.sent;\n                            console.log(data);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getPosts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getPosts();\n    });\n    //  const [end,setEnd] = useState(false)\n    //  const loadMore = async ()=>{\n    //    const last  = posts[posts.length-1]\n    //    const res = await  db.collection('posts')\n    //    .orderBy('createdAt','desc')\n    //    .limit(5)\n    //    .get()\n    //    const newposts = res.docs.map(docSnap=>{\n    //      return {\n    //       ...docSnap.data(),\n    //       createdAt:docSnap.data().createdAt.toMillis(),\n    //       id:docSnap.id\n    //     }\n    //    })\n    //    setposts(posts.concat(newposts))\n    //    if(newposts.length < 5){\n    //      setEnd(true)\n    //    }\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"center\",\n        children: [\n            posts1.map(function(posts) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-image\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-title\",\n                                children: posts.title\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"jsx-aeeeef7dbeb25dba\",\n                                children: posts.content\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-action\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/posts/\".concat(posts.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"jsx-aeeeef7dbeb25dba\",\n                                    children: \"Read More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 49\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, posts.createdAt, true, {\n                    fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"aeeeef7dbeb25dba\",\n                children: \".card.jsx-aeeeef7dbeb25dba{max-width:500px;margin:22px auto}p.jsx-aeeeef7dbeb25dba{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}; // export async function getServerSideProps(context) {\n //   const querySnap =await  db.collection('posts').orderBy('createdAt',\"desc\")\n //   .limit(3)\n //   .get()\n //   const Allposts =  querySnap.docs.map(docSnap=>{\n //     return {\n //       ...docSnap.data(),\n //       createdAt:docSnap.data().createdAt.toMillis(),\n //       id:docSnap.id\n //     }\n //   })\n // return {\n //   props: {Allposts}, // will be passed to the page component as props\n // }\n_s(Home, \"A+dvDlaKnpZlxPFKtPLXr3Bts+k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRjtBQUNhO0FBQ0w7O0FBR3JCLFNBQVNLLElBQUksQ0FBQyxLQUFVLEVBQUU7UUFBWixRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROzs7SUFDbkMsSUFBeUJKLEdBQWtCLEdBQWxCQSwrQ0FBUSxDQUFDSSxRQUFRLENBQUMsZ0JBUDlDLE1BT2UsR0FBYUosR0FBa0IsR0FBL0IsRUFQZixRQU93QixHQUFJQSxHQUFrQixHQUF0QjtJQUNyQixJQUFNTyxVQUFVLEdBQUdULG9EQUFhLENBQUMsT0FBTyxDQUFDO0lBRXpDRyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNUSxRQUFRO3VCQUFHLDZMQUFXO29CQUNwQkMsSUFBSTs7Ozs7bUNBQVNSLGlEQUFNLENBQUNLLFVBQVUsQ0FBQzs7NEJBQS9CRyxJQUFJLFlBQTJCOzRCQUNyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDOzs7Ozs7YUFDbkI7NEJBSEtELFFBQVE7OztXQUdiO1FBRURBLFFBQVEsRUFBRSxDQUFDO0tBQ1osQ0FBRTtJQUNKLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxrQ0FBa0M7SUFFbEMsZUFBZTtJQUNmLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQix1REFBdUQ7SUFDdkQsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixRQUFRO0lBQ1Isc0NBQXNDO0lBRXRDLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLEtBQUs7SUFDTCxxQkFDRSw4REFBQ0ksS0FBRztrREFBVyxRQUFROztZQUNsQlIsTUFBSyxDQUFDUyxHQUFHLENBQUNULFNBQUFBLEtBQUssRUFBRTtnQkFDaEIscUJBQ0UsOERBQUNRLEtBQUc7OERBQVcsTUFBTTs7c0NBQ3JCLDhEQUFDQSxLQUFHO3NFQUFXLFlBQVk7c0NBQ3pCLDRFQUFDRSxNQUFJOzBFQUFXLFlBQVk7MENBQUVWLEtBQUssQ0FBQ1csS0FBSzs7Ozs7cUNBQVE7Ozs7O2lDQUM3QztzQ0FDTiw4REFBQ0gsS0FBRztzRUFBVyxjQUFjO3NDQUMzQiw0RUFBQ0ksR0FBQzs7MENBQUVaLEtBQUssQ0FBQ2EsT0FBTzs7Ozs7cUNBQUs7Ozs7O2lDQUNsQjtzQ0FDTiw4REFBQ0wsS0FBRztzRUFBVyxhQUFhO3NDQUMxQiw0RUFBQ2Qsa0RBQUk7Z0NBQUNvQixJQUFJLEVBQUUsU0FBUSxDQUFXLE9BQVRkLEtBQUssQ0FBQ2UsRUFBRSxDQUFFOzBDQUFFLDRFQUFDQyxHQUFDOzs4Q0FBQyxXQUFTOzs7Ozt5Q0FBSTs7Ozs7cUNBQU87Ozs7O2lDQUNyRDs7bUJBVHFCaEIsS0FBSyxDQUFDaUIsU0FBUzs7Ozt5QkFVdEMsQ0FDTDthQUNGLENBQUM7Ozs7Ozs7Ozs7WUFzQkEsQ0FDUDtDQUNGLEVBR0Qsc0RBQXNEO0NBQ3RELCtFQUErRTtDQUMvRSxjQUFjO0NBQ2QsV0FBVztDQUNYLG9EQUFvRDtDQUNwRCxlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHVEQUF1RDtDQUN2RCxzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLE9BQU87Q0FHTCxXQUFXO0NBQ1gsd0VBQXdFO0NBQ3hFLElBQUk7R0EzRmtCbkIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYn0gZnJvbSAnLi4vZmlyZWJhc2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0RG9jIH0gZnJvbSAnLi4vZmlyZWJhc2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7QWxscG9zdHN9KSB7XG4gICBjb25zdCBbcG9zdHMsc2V0cG9zdHNdID0gdXNlU3RhdGUoQWxscG9zdHMpXG4gICBjb25zdCBjcmVhdGVQb3N0ID0gZGIuY29sbGVjdGlvbigncG9zdHMnKVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpPT4ge1xuICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2MoY3JlYXRlUG9zdClcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgfVxuXG4gICAgIGdldFBvc3RzKCk7XG4gICB9IClcbiAgLy8gIGNvbnN0IFtlbmQsc2V0RW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvLyAgY29uc3QgbG9hZE1vcmUgPSBhc3luYyAoKT0+e1xuICAvLyAgICBjb25zdCBsYXN0ICA9IHBvc3RzW3Bvc3RzLmxlbmd0aC0xXVxuICAvLyAgICBjb25zdCByZXMgPSBhd2FpdCAgZGIuY29sbGVjdGlvbigncG9zdHMnKVxuICAvLyAgICAub3JkZXJCeSgnY3JlYXRlZEF0JywnZGVzYycpXG4gICBcbiAgLy8gICAgLmxpbWl0KDUpXG4gIC8vICAgIC5nZXQoKVxuICAvLyAgICBjb25zdCBuZXdwb3N0cyA9IHJlcy5kb2NzLm1hcChkb2NTbmFwPT57XG4gIC8vICAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4gIC8vICAgICAgIGNyZWF0ZWRBdDpkb2NTbmFwLmRhdGEoKS5jcmVhdGVkQXQudG9NaWxsaXMoKSxcbiAgLy8gICAgICAgaWQ6ZG9jU25hcC5pZFxuICAvLyAgICAgfVxuICAvLyAgICB9KVxuICAvLyAgICBzZXRwb3N0cyhwb3N0cy5jb25jYXQobmV3cG9zdHMpKVxuXG4gIC8vICAgIGlmKG5ld3Bvc3RzLmxlbmd0aCA8IDUpe1xuICAvLyAgICAgIHNldEVuZCh0cnVlKVxuICAvLyAgICB9XG4gIC8vICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0cz0+e1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17cG9zdHMuY3JlYXRlZEF0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Bvc3RzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+e3Bvc3RzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0cy5pZH1gfT48YT5SZWFkIE1vcmU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cblxuICAgICAgICB7Lyoge2VuZD09ZmFsc2U/XG4gICAgICAgIC8vIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9PmxvYWRNb3JlKCl9PkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgICAgICAvLyAgOjxoMz5Zb3UgaGF2ZSByZWFjaGVkIGVuZDwvaDM+XG4gICAgICAgIC8vIH0gKi99XG4gICAgICAgIFxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCBxdWVyeVNuYXAgPWF3YWl0ICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsXCJkZXNjXCIpXG4vLyAgIC5saW1pdCgzKVxuLy8gICAuZ2V0KClcbi8vICAgY29uc3QgQWxscG9zdHMgPSAgcXVlcnlTbmFwLmRvY3MubWFwKGRvY1NuYXA9Pntcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4vLyAgICAgICBjcmVhdGVkQXQ6ZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4vLyAgICAgICBpZDpkb2NTbmFwLmlkXG4vLyAgICAgfVxuLy8gICB9KVxuXG5cbiAgLy8gcmV0dXJuIHtcbiAgLy8gICBwcm9wczoge0FsbHBvc3RzfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIC8vIH1cbiJdLCJuYW1lcyI6WyJkYiIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERvYyIsIkhvbWUiLCJBbGxwb3N0cyIsInBvc3RzIiwic2V0cG9zdHMiLCJjcmVhdGVQb3N0IiwiY29sbGVjdGlvbiIsImdldFBvc3RzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJzcGFuIiwidGl0bGUiLCJwIiwiY29udGVudCIsImhyZWYiLCJpZCIsImEiLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});