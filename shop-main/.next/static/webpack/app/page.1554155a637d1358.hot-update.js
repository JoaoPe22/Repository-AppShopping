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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nasync function Product(param) {\n    let { params } = param;\n    const response = await fetch(\"https://fakestoreapi.com/products/\" + params.id);\n    const data = await response.json();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.corpoCard,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: styles.titulo,\n                children: products.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: styles.descricao,\n                children: products.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: styles.preco,\n                children: [\n                    \"R$\",\n                    products.price\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: styles.avaliacao\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\product\\\\[id]\\\\page.js\",\n        lineNumber: 4,\n        columnNumber: 23\n    }, this);\n}\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsZUFBZUEsUUFBUSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7SUFDcEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHVDQUF1Q0YsT0FBT0csRUFBRTtJQUM3RSxNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDaEMscUJBQW9CLDhEQUFDQztRQUFJQyxXQUFXQyxPQUFPQyxTQUFTOzswQkFDbEQsOERBQUNDO2dCQUFHSCxXQUFXQyxPQUFPRyxNQUFNOzBCQUFHQyxTQUFTQyxLQUFLOzs7Ozs7MEJBQzdDLDhEQUFDQztnQkFBRVAsV0FBV0MsT0FBT08sU0FBUzswQkFBR0gsU0FBU0ksV0FBVzs7Ozs7OzBCQUNyRCw4REFBQ0M7Z0JBQUdWLFdBQVdDLE9BQU9VLEtBQUs7O29CQUFFO29CQUFHTixTQUFTTyxLQUFLOzs7Ozs7OzBCQUM5Qyw4REFBQ0w7Z0JBQUVQLFdBQVdDLE9BQU9ZLFNBQVM7Ozs7Ozs7Ozs7OztBQUVsQztLQVQ4QnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UuanM/NTcxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQcm9kdWN0KHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL1wiICsgcGFyYW1zLmlkKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgcmV0dXJuKCAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcnBvQ2FyZH0+XHJcbiAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGl0dWxvfT57cHJvZHVjdHMudGl0bGV9PC9oMz5cclxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb30+e3Byb2R1Y3RzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcmVjb30+UiR7cHJvZHVjdHMucHJpY2V9PC9oMj5cclxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmF2YWxpYWNhb30+XHJcbiAgICAgICAgPC9wPjwvZGl2PilcclxufVxyXG4iXSwibmFtZXMiOlsiUHJvZHVjdCIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJpZCIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29ycG9DYXJkIiwiaDMiLCJ0aXR1bG8iLCJwcm9kdWN0cyIsInRpdGxlIiwicCIsImRlc2NyaWNhbyIsImRlc2NyaXB0aW9uIiwiaDIiLCJwcmVjbyIsInByaWNlIiwiYXZhbGlhY2FvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[id]/page.js\n"));

/***/ })

});