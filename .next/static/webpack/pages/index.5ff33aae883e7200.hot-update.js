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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var Allposts = param.Allposts;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Allposts), /*#__PURE__*/ posts = ref[0], setposts = ref[1];\n    var createPost = _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"posts\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var getPosts = function() {\n            var _ref = _asyncToGenerator(_Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return _Users_lifetech_Documents_GitHub_NextJs_Blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_firebase__WEBPACK_IMPORTED_MODULE_3__.getDoc)(createPost);\n                        case 2:\n                            data = _ctx.sent;\n                            console.log(data);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getPosts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getPosts();\n    });\n    //  const [end,setEnd] = useState(false)\n    //  const loadMore = async ()=>{\n    //    const last  = posts[posts.length-1]\n    //    const res = await  db.collection('posts')\n    //    .orderBy('createdAt','desc')\n    //    .limit(5)\n    //    .get()\n    //    const newposts = res.docs.map(docSnap=>{\n    //      return {\n    //       ...docSnap.data(),\n    //       createdAt:docSnap.data().createdAt.toMillis(),\n    //       id:docSnap.id\n    //     }\n    //    })\n    //    setposts(posts.concat(newposts))\n    //    if(newposts.length < 5){\n    //      setEnd(true)\n    //    }\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-content\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"jsx-aeeeef7dbeb25dba\",\n                            children: posts.content\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-aeeeef7dbeb25dba\" + \" \" + \"card-action\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/posts/\".concat(posts.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"jsx-aeeeef7dbeb25dba\",\n                                children: \"Read More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 49\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            \")\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"aeeeef7dbeb25dba\",\n                children: \".card.jsx-aeeeef7dbeb25dba{max-width:500px;margin:22px auto}p.jsx-aeeeef7dbeb25dba{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}; // export async function getServerSideProps(context) {\n //   const querySnap =await  db.collection('posts').orderBy('createdAt',\"desc\")\n //   .limit(3)\n //   .get()\n //   const Allposts =  querySnap.docs.map(docSnap=>{\n //     return {\n //       ...docSnap.data(),\n //       createdAt:docSnap.data().createdAt.toMillis(),\n //       id:docSnap.id\n //     }\n //   })\n // return {\n //   props: {Allposts}, // will be passed to the page component as props\n // }\n_s(Home, \"A+dvDlaKnpZlxPFKtPLXr3Bts+k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRjtBQUNhO0FBQ0w7O0FBR3JCLFNBQVNLLElBQUksQ0FBQyxLQUFVLEVBQUU7UUFBWixRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROztJQUNuQyxJQUF5QkosR0FBa0IsR0FBbEJBLCtDQUFRLENBQUNJLFFBQVEsQ0FBQyxnQkFQOUMsS0FPZSxHQUFhSixHQUFrQixHQUEvQixFQVBmLFFBT3dCLEdBQUlBLEdBQWtCLEdBQXRCO0lBQ3JCLElBQU1PLFVBQVUsR0FBR1Qsb0RBQWEsQ0FBQyxPQUFPLENBQUM7SUFFekNHLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1RLFFBQVE7dUJBQUcsNkxBQVc7b0JBQ3BCQyxJQUFJOzs7OzttQ0FBU1IsaURBQU0sQ0FBQ0ssVUFBVSxDQUFDOzs0QkFBL0JHLElBQUksWUFBMkI7NEJBQ3JDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7Ozs7OzthQUNuQjs0QkFIS0QsUUFBUTs7O1dBR2I7UUFFREEsUUFBUSxFQUFFLENBQUM7S0FDWixDQUFFO0lBQ0osd0NBQXdDO0lBQ3hDLGdDQUFnQztJQUNoQyx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLGtDQUFrQztJQUVsQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHVEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFFBQVE7SUFDUixzQ0FBc0M7SUFFdEMsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsS0FBSztJQUNMLHFCQUNFLDhEQUFDSSxLQUFHO2tEQUFXLFFBQVE7OzBCQUVmLDhEQUFDQSxLQUFHOzBEQUFXLE1BQU07O2tDQUNyQiw4REFBQ0EsS0FBRztrRUFBVyxZQUFZO2tDQUN6Qiw0RUFBQ0MsTUFBSTtzRUFBVyxZQUFZOzs7OztnQ0FBVTs7Ozs7NEJBQ2xDO2tDQUNOLDhEQUFDRCxLQUFHO2tFQUFXLGNBQWM7a0NBQzNCLDRFQUFDRSxHQUFDOztzQ0FBRVYsS0FBSyxDQUFDVyxPQUFPOzs7OztnQ0FBSzs7Ozs7NEJBQ2xCO2tDQUNOLDhEQUFDSCxLQUFHO2tFQUFXLGFBQWE7a0NBQzFCLDRFQUFDZCxrREFBSTs0QkFBQ2tCLElBQUksRUFBRSxTQUFRLENBQVcsT0FBVFosS0FBSyxDQUFDYSxFQUFFLENBQUU7c0NBQUUsNEVBQUNDLEdBQUM7OzBDQUFDLFdBQVM7Ozs7O29DQUFJOzs7OztnQ0FBTzs7Ozs7NEJBQ3JEOzs7Ozs7b0JBQ0Y7WUFBQSxHQUlSOzs7Ozs7Ozs7O1lBb0JFLENBQ1A7Q0FDRixFQUdELHNEQUFzRDtDQUN0RCwrRUFBK0U7Q0FDL0UsY0FBYztDQUNkLFdBQVc7Q0FDWCxvREFBb0Q7Q0FDcEQsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQix1REFBdUQ7Q0FDdkQsc0JBQXNCO0NBQ3RCLFFBQVE7Q0FDUixPQUFPO0NBR0wsV0FBVztDQUNYLHdFQUF3RTtDQUN4RSxJQUFJO0dBMUZrQmhCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGJ9IGZyb20gJy4uL2ZpcmViYXNlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldERvYyB9IGZyb20gJy4uL2ZpcmViYXNlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe0FsbHBvc3RzfSkge1xuICAgY29uc3QgW3Bvc3RzLHNldHBvc3RzXSA9IHVzZVN0YXRlKEFsbHBvc3RzKVxuICAgY29uc3QgY3JlYXRlUG9zdCA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKT0+IHtcbiAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RG9jKGNyZWF0ZVBvc3QpXG4gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgIH1cblxuICAgICBnZXRQb3N0cygpO1xuICAgfSApXG4gIC8vICBjb25zdCBbZW5kLHNldEVuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgLy8gIGNvbnN0IGxvYWRNb3JlID0gYXN5bmMgKCk9PntcbiAgLy8gICAgY29uc3QgbGFzdCAgPSBwb3N0c1twb3N0cy5sZW5ndGgtMV1cbiAgLy8gICAgY29uc3QgcmVzID0gYXdhaXQgIGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcbiAgLy8gICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsJ2Rlc2MnKVxuICAgXG4gIC8vICAgIC5saW1pdCg1KVxuICAvLyAgICAuZ2V0KClcbiAgLy8gICAgY29uc3QgbmV3cG9zdHMgPSByZXMuZG9jcy5tYXAoZG9jU25hcD0+e1xuICAvLyAgICAgIHJldHVybiB7XG4gIC8vICAgICAgIC4uLmRvY1NuYXAuZGF0YSgpLFxuICAvLyAgICAgICBjcmVhdGVkQXQ6ZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4gIC8vICAgICAgIGlkOmRvY1NuYXAuaWRcbiAgLy8gICAgIH1cbiAgLy8gICAgfSlcbiAgLy8gICAgc2V0cG9zdHMocG9zdHMuY29uY2F0KG5ld3Bvc3RzKSlcblxuICAvLyAgICBpZihuZXdwb3N0cy5sZW5ndGggPCA1KXtcbiAgLy8gICAgICBzZXRFbmQodHJ1ZSlcbiAgLy8gICAgfVxuICAvLyAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+e3Bvc3RzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0cy5pZH1gfT48YT5SZWFkIE1vcmU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICBcblxuICAgICAgICB7Lyoge2VuZD09ZmFsc2U/XG4gICAgICAgIC8vIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9PmxvYWRNb3JlKCl9PkxvYWQgbW9yZTwvYnV0dG9uPlxuICAgICAgICAvLyAgOjxoMz5Zb3UgaGF2ZSByZWFjaGVkIGVuZDwvaDM+XG4gICAgICAgIC8vIH0gKi99XG4gICAgICAgIFxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46MjJweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCBxdWVyeVNuYXAgPWF3YWl0ICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsXCJkZXNjXCIpXG4vLyAgIC5saW1pdCgzKVxuLy8gICAuZ2V0KClcbi8vICAgY29uc3QgQWxscG9zdHMgPSAgcXVlcnlTbmFwLmRvY3MubWFwKGRvY1NuYXA9Pntcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4vLyAgICAgICBjcmVhdGVkQXQ6ZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4vLyAgICAgICBpZDpkb2NTbmFwLmlkXG4vLyAgICAgfVxuLy8gICB9KVxuXG5cbiAgLy8gcmV0dXJuIHtcbiAgLy8gICBwcm9wczoge0FsbHBvc3RzfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIC8vIH1cbiJdLCJuYW1lcyI6WyJkYiIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERvYyIsIkhvbWUiLCJBbGxwb3N0cyIsInBvc3RzIiwic2V0cG9zdHMiLCJjcmVhdGVQb3N0IiwiY29sbGVjdGlvbiIsImdldFBvc3RzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzcGFuIiwicCIsImNvbnRlbnQiLCJocmVmIiwiaWQiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});