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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var user1 = param.user;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref2[0], setName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userBlogs1 = ref3[0], setUserBlogs = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), blogs = ref4[0], setblogs = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var getAllUserBlogs = _firebase__WEBPACK_IMPORTED_MODULE_0__.db.collectionGroup(\"blog\").orderBy(\"createdAt\", \"desc\").onSnapshot(function(snapshot) {\n            var userBlogs = [];\n            snapshot.forEach(function(doc) {\n                userBlogs.push({\n                    uid: doc.id,\n                    upid: doc.id,\n                    data: {\n                        title: doc.data().title,\n                        content: doc.data().content\n                    }\n                });\n            });\n            setUserBlogs(userBlogs);\n        });\n        return function() {\n            return getAllUserBlogs;\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!userBlogs1.length) {\n            return;\n        }\n        _firebase__WEBPACK_IMPORTED_MODULE_0__.db.collection(\"users\").get().then(function(querySnapshot) {\n            var user = [];\n            querySnapshot.forEach(function(doc) {\n                user.push({\n                    id: doc.id,\n                    name: doc.data().name\n                });\n            });\n            return Promise.resolve(users);\n        });\n        ge;\n    });\n// return (\n//   <div className=\"center\">\n//     {blogs.map(blog => {\n//       return (\n//         <div className=\"card\" key={blog.createdAt}>\n//           <div>\n//             <h1 className=\"card-title card #ffc107 amber\">Title: {blog.title}</h1>\n//           </div>\n//           <div className=\"card-content\">\n//             <p>{blog.content}</p>\n//           </div >\n//           <div className=\"format\">\n//             <h5 className=\" #aeea00 lime accent-4\">Author: {blog.author.name}</h5>\n//           </div>\n//         </div>\n//       )\n//     })}\n//     <style jsx>\n//       {`    \n//             .card{\n//               max-width:500px;\n//               margin:22px auto;\n//             }\n//             p{\n//               display: -webkit-box;\n//               overflow: hidden;\n//               -webkit-line-clamp: 1;\n//               -webkit-box-orient: vertical;\n//             }\n//            `}\n//     </style>\n//   </div>\n// )\n}; // export async function getServerSideProps(context) {\n //   const querySnap = await db.collectionGroup('blog').orderBy('createdAt', \"desc\")\n //     .get()\n //   const Allblogs = querySnap.docs.map(docSnap => {\n //     return {\n //       ...docSnap.data(),\n //       createdAt: docSnap.data().createdAt.toMillis(),\n //       updatedAt: docSnap.data().updatedAt.toMillis(),\n //       id: docSnap.id,\n //     }\n //   })\n //   return {\n //     props: { Allblogs }, // will be passed to the page component as props\n //   }\n // }\n // const loadMore = async () => {\n //   const last = blogs[blogs.length - 1]\n //   const res = await db.collection('blogs')\n //     .orderBy('createdAt', 'desc')\n //     .startAfter(new Date(last.createdAt))\n //     .get()\n // const newblogs = res.docs.map(docSnap => {\n //   return {\n //     ...docSnap.data(),\n //     createdAt: docSnap.data().createdAt.toMillis(),\n //     id: docSnap.id\n //   }\n // })\n // setblogs(blogs.concat(newblogs))\n // if (newblogs.length < 3) {\n //   setEnd(true)\n // }\n_s(Home, \"+NX8vDmgnSWel+o9rDbMTnHr9iE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUZBQXFGO0FBQ3JGLG1CQUFtQjtBQUVuQixpQkFBaUI7QUFDakIsVUFBVTtBQUNWLFVBQVU7QUFFVixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsc0NBQXNDO0FBQ3RDLGtDQUFrQztBQUNsQyx1Q0FBdUM7QUFDdkMsOENBQThDO0FBQzlDLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLFdBQVc7QUFDWCxJQUFJO0NBQ0osRUFDRixzREFBc0Q7Q0FDdEQsb0ZBQW9GO0NBQ3BGLGFBQWE7Q0FDYixxREFBcUQ7Q0FDckQsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQix3REFBd0Q7Q0FDeEQsd0RBQXdEO0NBQ3hELHdCQUF3QjtDQUN4QixRQUFRO0NBQ1IsT0FBTztDQUNQLGFBQWE7Q0FDYiw0RUFBNEU7Q0FDNUUsTUFBTTtDQUNOLElBQUk7Q0FFSixpQ0FBaUM7Q0FDL0IseUNBQXlDO0NBQ3pDLDZDQUE2QztDQUM3QyxvQ0FBb0M7Q0FDcEMsNENBQTRDO0NBQzVDLGFBQWE7Q0FDWCw2Q0FBNkM7Q0FDN0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixzREFBc0Q7Q0FDdEQscUJBQXFCO0NBQ3JCLE1BQU07Q0FDTixLQUFLO0NBQ0wsbUNBQW1DO0NBQ25DLDZCQUE2QjtDQUM3QixpQkFBaUI7Q0FDakIsSUFBSTtHQWpIZ0JoQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20nZmlyZWJhc2UvYXBwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3VzZXJ9ICkge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1c2VyQmxvZ3MsIHNldFVzZXJCbG9nc10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Jsb2dzLCBzZXRibG9nc10gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBnZXRBbGxVc2VyQmxvZ3MgPSBkYi5jb2xsZWN0aW9uR3JvdXAoJ2Jsb2cnKVxuICAgIC5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXG4gICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICBsZXQgdXNlckJsb2dzID0gW11cbiAgICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICB1c2VyQmxvZ3MucHVzaCh7XG4gICAgICAgICAgdWlkOiBkb2MuaWQsXG4gICAgICAgICAgdXBpZDogZG9jLmlkLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsIGNvbnRlbnQ6IGRvYy5kYXRhKCkuY29udGVudCB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHNldFVzZXJCbG9ncyh1c2VyQmxvZ3MpXG4gICAgfSlcbiAgcmV0dXJuICgpID0+IGdldEFsbFVzZXJCbG9nc1xufSwgW10pXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmICghdXNlckJsb2dzLmxlbmd0aCl7XG4gICAgcmV0dXJuXG4gIH1cbiAgXG4gICBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+e1xuICAgICBsZXQgdXNlciA9IFtdXG4gICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgdXNlci5wdXNoKHtcbiAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWUsXG4gICAgICAgfSlcblxuICAgICB9KVxuICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXJzKVxuICAgfSlcbiAgIGdlXG59KVxuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgLy8gICAgIHtibG9ncy5tYXAoYmxvZyA9PiB7XG4gIC8vICAgICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtibG9nLmNyZWF0ZWRBdH0+XG4gIC8vICAgICAgICAgICA8ZGl2PlxuICAvLyAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBjYXJkICNmZmMxMDcgYW1iZXJcIj5UaXRsZToge2Jsb2cudGl0bGV9PC9oMT5cbiAgLy8gICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICBcbiAgLy8gICAgICAgICAgICAgPHA+e2Jsb2cuY29udGVudH08L3A+XG5cbiAgLy8gICAgICAgICAgIDwvZGl2ID5cbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWF0XCI+XG4gIC8vICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCIgI2FlZWEwMCBsaW1lIGFjY2VudC00XCI+QXV0aG9yOiB7YmxvZy5hdXRob3IubmFtZX08L2g1PlxuICAvLyAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgKVxuICAvLyAgICAgfSl9XG5cbiAgLy8gICAgIDxzdHlsZSBqc3g+XG4gIC8vICAgICAgIHtgICAgIFxuICAvLyAgICAgICAgICAgICAuY2FyZHtcbiAgLy8gICAgICAgICAgICAgICBtYXgtd2lkdGg6NTAwcHg7XG4gIC8vICAgICAgICAgICAgICAgbWFyZ2luOjIycHggYXV0bztcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICBwe1xuICAvLyAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvLyAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAvLyAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC8vICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICBgfVxuICAvLyAgICAgPC9zdHlsZT5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gKVxuIH0gICAgICAgICBcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCBxdWVyeVNuYXAgPSBhd2FpdCBkYi5jb2xsZWN0aW9uR3JvdXAoJ2Jsb2cnKS5vcmRlckJ5KCdjcmVhdGVkQXQnLCBcImRlc2NcIilcbi8vICAgICAuZ2V0KClcbi8vICAgY29uc3QgQWxsYmxvZ3MgPSBxdWVyeVNuYXAuZG9jcy5tYXAoZG9jU25hcCA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIC4uLmRvY1NuYXAuZGF0YSgpLFxuLy8gICAgICAgY3JlYXRlZEF0OiBkb2NTbmFwLmRhdGEoKS5jcmVhdGVkQXQudG9NaWxsaXMoKSxcbi8vICAgICAgIHVwZGF0ZWRBdDogZG9jU25hcC5kYXRhKCkudXBkYXRlZEF0LnRvTWlsbGlzKCksXG4vLyAgICAgICBpZDogZG9jU25hcC5pZCxcbi8vICAgICB9XG4vLyAgIH0pXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgQWxsYmxvZ3MgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgbG9hZE1vcmUgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc3QgbGFzdCA9IGJsb2dzW2Jsb2dzLmxlbmd0aCAtIDFdXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKVxuICAvLyAgICAgLm9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJylcbiAgLy8gICAgIC5zdGFydEFmdGVyKG5ldyBEYXRlKGxhc3QuY3JlYXRlZEF0KSlcbiAgLy8gICAgIC5nZXQoKVxuICAgIC8vIGNvbnN0IG5ld2Jsb2dzID0gcmVzLmRvY3MubWFwKGRvY1NuYXAgPT4ge1xuICAgIC8vICAgcmV0dXJuIHtcbiAgICAvLyAgICAgLi4uZG9jU25hcC5kYXRhKCksXG4gICAgLy8gICAgIGNyZWF0ZWRBdDogZG9jU25hcC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKCksXG4gICAgLy8gICAgIGlkOiBkb2NTbmFwLmlkXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgICAvLyBzZXRibG9ncyhibG9ncy5jb25jYXQobmV3YmxvZ3MpKVxuICAgIC8vIGlmIChuZXdibG9ncy5sZW5ndGggPCAzKSB7XG4gICAgLy8gICBzZXRFbmQodHJ1ZSlcbiAgICAvLyB9XG5cbiJdLCJuYW1lcyI6WyJkYiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImZpcmViYXNlIiwiSG9tZSIsInVzZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJuYW1lIiwic2V0TmFtZSIsInVzZXJCbG9ncyIsInNldFVzZXJCbG9ncyIsImJsb2dzIiwic2V0YmxvZ3MiLCJnZXRBbGxVc2VyQmxvZ3MiLCJjb2xsZWN0aW9uR3JvdXAiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ1aWQiLCJpZCIsInVwaWQiLCJkYXRhIiwibGVuZ3RoIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1c2VycyIsImdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});