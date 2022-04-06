"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createblog",{

/***/ "./pages/createblog.js":
/*!*****************************!*\
  !*** ./pages/createblog.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ createblog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\n\n\n// import { storage, db, serverTimestamp } from '../firebase/firestore'\n\n\nvar _s = $RefreshSig$();\nfunction createblog(param) {\n    var user = param.user;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), /*#__PURE__*/ title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    // const createPost = async (e) => {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        try {\n            _firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection(\"posts\").doc(user.uid).add({\n                title: title,\n                content: content,\n                author: {\n                    name: _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.currentUser.displayName,\n                    id: _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.currentUser.uid\n                },\n                createAt: new Date()\n            });\n            M.toast({\n                html: \"Blog Created\",\n                classes: \"green\"\n            });\n        } catch (err) {\n            M.toast({\n                html: \"error creating blog\",\n                classes: \"red\"\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-c4243dcf0e813242\" + \" \" + \"input-field rootdiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"jsx-c4243dcf0e813242\",\n                children: \"Create A Blog !!\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: title,\n                placeholder: \"Title\",\n                onChange: function(e) {\n                    return setTitle(e.target.value);\n                },\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                value: content,\n                placeholder: \"content\",\n                onChange: function(e) {\n                    return setContent(e.target.value);\n                },\n                className: \"jsx-c4243dcf0e813242\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return createPost();\n                },\n                className: \"jsx-c4243dcf0e813242\" + \" \" + \"btn #fb8c00 orange darken-1\",\n                children: \"Submit Post\"\n            }, void 0, false, {\n                fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c4243dcf0e813242\",\n                children: \".rootdiv.jsx-c4243dcf0e813242{margin:30px auto;max-width:600px;padding:20px;text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lifetech/Documents/GitHub/NextJs-Blog/pages/createblog.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n};\n_s(createblog, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ1A7QUFDUjtBQUM1Qix1RUFBdUU7QUFDN0I7QUFDTjs7QUFFckIsU0FBU1EsVUFBVSxDQUFDLEtBQVEsRUFBRTtRQUFWLElBQU0sR0FBTixLQUFRLENBQU5DLElBQUk7O0lBQ3JDLElBQTBCVCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLGdCQVIxQyxLQVFnQixHQUFjQSxHQUFZLEdBQTFCLEVBUmhCLFFBUTBCLEdBQUlBLEdBQVksR0FBaEI7SUFDdEIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUOUMsT0FTa0IsR0FBZ0JBLElBQVksR0FBNUIsRUFUbEIsVUFTOEIsR0FBSUEsSUFBWSxHQUFoQjtJQUUxQixvQ0FBb0M7SUFDcENDLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUk7WUFDQU0sb0RBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ1EsR0FBRyxDQUFDTixJQUFJLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUM7Z0JBQ3hDUCxLQUFLLEVBQUxBLEtBQUs7Z0JBQ0xFLE9BQU8sRUFBUEEsT0FBTztnQkFDUE0sTUFBTSxFQUFFO29CQUFDQyxJQUFJLEVBQUViLG1FQUE0QjtvQkFBRWdCLEVBQUUsRUFBRWhCLDJEQUFvQjtpQkFBQztnQkFDdEVpQixRQUFRLEVBQUUsSUFBSUMsSUFBSSxFQUFFO2FBRXBCLENBQUM7WUFFRkMsQ0FBQyxDQUFDQyxLQUFLLENBQUM7Z0JBQUVDLElBQUksRUFBRSxjQUFjO2dCQUFFQyxPQUFPLEVBQUUsT0FBTzthQUFFLENBQUM7U0FDOUMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFDVkosQ0FBQyxDQUFDQyxLQUFLLENBQUM7Z0JBQUVDLElBQUksRUFBRSxxQkFBcUI7Z0JBQUVDLE9BQU8sRUFBRSxLQUFLO2FBQUUsQ0FBQztTQUMzRDtLQUNaLENBQUM7SUFFRixxQkFDSSw4REFBQ0UsS0FBRztrREFBVyxxQkFBcUI7OzBCQUNoQyw4REFBQ0MsSUFBRTs7MEJBQUMsa0JBQWdCOzs7OztvQkFBSzswQkFDekIsOERBQUNDLE9BQUs7Z0JBQ0ZDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxLQUFLLEVBQUV4QixLQUFLO2dCQUNaeUIsV0FBVyxFQUFDLE9BQU87Z0JBQ25CQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQkFBSzFCLFFBQVEsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixLQUFLLENBQUM7aUJBQUE7Ozs7OztvQkFFM0M7MEJBQ0YsOERBQUNLLFVBQVE7Z0JBQ0xOLElBQUksRUFBQyxNQUFNO2dCQUNYQyxLQUFLLEVBQUV0QixPQUFPO2dCQUNkdUIsV0FBVyxFQUFDLFNBQVM7Z0JBQ3JCQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQkFBS3hCLFVBQVUsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixLQUFLLENBQUM7aUJBQUE7Ozs7OztvQkFFN0M7MEJBQ0YsOERBQUNNLFFBQU07Z0JBQXlDQyxPQUFPLEVBQUU7MkJBQU1DLFVBQVUsRUFBRTtpQkFBQTswREFBekQsNkJBQTZCOzBCQUE4QixhQUFXOzs7OztvQkFBUzs7Ozs7Ozs7OztZQWMvRixDQUNUO0NBQ0o7R0F0RHVCbEMsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVibG9nLmpzPzU1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG4vLyBpbXBvcnQgeyBzdG9yYWdlLCBkYiwgc2VydmVyVGltZXN0YW1wIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgYWRkRG9jfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQge2F1dGgsIGRifSBmcm9tICcuLi9maXJlYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlYmxvZyh7IHVzZXIgfSkge1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG5cbiAgICAvLyBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKGUpID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcInBvc3RzXCIpLmRvYyh1c2VyLnVpZCkuYWRkKHtcbiAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgIGF1dGhvcjoge25hbWU6IGF1dGguY3VycmVudFVzZXIuZGlzcGxheU5hbWUsIGlkOiBhdXRoLmN1cnJlbnRVc2VyLnVpZH0sXG4gICAgICAgICAgICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAvLyAgdXBkYXRlQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBNLnRvYXN0KHsgaHRtbDogJ0Jsb2cgQ3JlYXRlZCcsIGNsYXNzZXM6IFwiZ3JlZW5cIiB9KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBNLnRvYXN0KHsgaHRtbDogJ2Vycm9yIGNyZWF0aW5nIGJsb2cnLCBjbGFzc2VzOiBcInJlZFwiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIHJvb3RkaXZcIj5cbiAgICAgICAgICAgIDxoMz5DcmVhdGUgQSBCbG9nICEhPC9oMz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gI2ZiOGMwMCBvcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVQb3N0KCl9PlN1Ym1pdCBQb3N0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIC5yb290ZGl2e1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjMwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2NCIsInV1aWR2NCIsIkxpbmsiLCJhZGREb2MiLCJhdXRoIiwiZGIiLCJjcmVhdGVibG9nIiwidXNlciIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJhZGQiLCJhdXRob3IiLCJuYW1lIiwiY3VycmVudFVzZXIiLCJkaXNwbGF5TmFtZSIsImlkIiwiY3JlYXRlQXQiLCJEYXRlIiwiTSIsInRvYXN0IiwiaHRtbCIsImNsYXNzZXMiLCJlcnIiLCJkaXYiLCJoMyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjcmVhdGVQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createblog.js\n");

/***/ })

});