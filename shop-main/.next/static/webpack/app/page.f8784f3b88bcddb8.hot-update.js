"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/product/[id]/page.js":
/*!**************************************!*\
  !*** ./src/app/product/[id]/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nasync function Product(param) {\n    let { params } = param;\n    const response = await fetch(\"https://fakestoreapi.com/products/\" + params.id);\n    const data = await response.json();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.price\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.rating.count\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: data.image,\n                        width: 350,\n                        height: 200,\n                        alt: \"imagem de produto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUVoQixlQUFlQyxRQUFRLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUNwQyxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHVDQUF1Q0YsT0FBT0csRUFBRTtJQUVsRCxNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDaEMscUJBQ0UsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUdILEtBQUtJLEtBQUs7Ozs7OzswQkFDZCw4REFBQ0Q7MEJBQUdILEtBQUtLLFdBQVc7Ozs7OzswQkFDcEIsOERBQUNGOzBCQUFHSCxLQUFLTSxLQUFLOzs7Ozs7MEJBQ2QsOERBQUNIOzBCQUFHSCxLQUFLTyxNQUFNLENBQUNDLEtBQUs7Ozs7OzswQkFDckIsOERBQUNMOztvQkFBRTtrQ0FDSyw4REFBQ1Qsa0RBQUtBO3dCQUNKZSxLQUFLVCxLQUFLVSxLQUFLO3dCQUNmQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7S0F0QjhCbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS5qcz81NzEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUHJvZHVjdCh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL1wiICsgcGFyYW1zLmlkXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwPntkYXRhLnRpdGxlfTwvcD5cclxuICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHA+e2RhdGEucHJpY2V9PC9wPlxyXG4gICAgICAgIDxwPntkYXRhLnJhdGluZy5jb3VudH08L3A+XHJcbiAgICAgICAgPHA+IHtcclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZW0gZGUgcHJvZHV0b1wiXHJcbiAgICAgICAgICAgICAgICA+PC9JbWFnZT5cclxuICAgICAgICAgICAgICB9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4gIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlByb2R1Y3QiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwiaWQiLCJkYXRhIiwianNvbiIsImRpdiIsInAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyYXRpbmciLCJjb3VudCIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[id]/page.js\n"));

/***/ })

});