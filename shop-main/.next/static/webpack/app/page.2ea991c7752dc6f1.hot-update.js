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

/***/ "(app-pages-browser)/./src/app/components/Main.js":
/*!************************************!*\
  !*** ./src/app/components/Main.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/components/Spinner.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module.css */ \"(app-pages-browser)/./src/app/components/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listComplete, setListaComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products\");\n            const data = await response.json();\n            setListProduct(data);\n            setListaComplete(d);\n        };\n        getProduct();\n    }, []);\n    // Ordem alfabética crescente\n    const orderAZ = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    // Ordem alfabética decrecente\n    const orderZA = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListProduct(newList);\n    };\n    // Ordem de preco crescente\n    const minPreco = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    // Ordem de preco decrecente\n    const maxPrice = ()=>{\n        let newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        newList = newList.reverse();\n        setListProduct(newList);\n    };\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderAZ,\n                        children: \"a-Z\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderZA,\n                        children: \"z-A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: minPreco,\n                        children: \"Ordenar Pre\\xe7o Crescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: maxPrice,\n                        children: \"Ordenar Pre\\xe7o Decrescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: listProduct.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().cabecalho),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                                    src: products.image,\n                                    width: 350,\n                                    height: 200,\n                                    alt: \"imagem de produto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().corpoCard),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo),\n                                        children: products.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                                        children: products.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                                        children: [\n                                            \"R$\",\n                                            products.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().avaliacao),\n                                        children: [\n                                            \"Avalia\\xe7\\xf5es:\",\n                                            products.rating.count\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"/ahYox6Rk9ue1fJK68pWO8S+SQo=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDWjtBQUNPO0FBQ1I7QUFFaEIsU0FBU0s7O0lBR3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sY0FBY0MsaUJBQWtCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYTtZQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBR2hDUCxlQUFlTTtZQUNmSixpQkFBaUJNO1FBQ25CO1FBQ0FMO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNkJBQTZCO0lBQzdCLE1BQU1NLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlYO1NBQVksQ0FBQ1ksSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQ3hDRCxFQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsS0FBSztRQUUvQmQsZUFBZVU7SUFDakI7SUFFQSw4QkFBOEI7SUFDOUIsTUFBTU0sVUFBVTtRQUNkLE1BQU1OLFVBQVU7ZUFBSVg7U0FBWSxDQUFDWSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFDeENBLEVBQUVDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDSCxFQUFFRSxLQUFLO1FBRS9CZCxlQUFlVTtJQUNqQjtJQUVBLDJCQUEyQjtJQUMzQixNQUFNTyxXQUFXO1FBQ2YsTUFBTVAsVUFBVTtlQUFJWDtTQUFZLENBQUNZLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFTSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFFakVsQixlQUFlVTtJQUNqQjtJQUVBLDRCQUE0QjtJQUM1QixNQUFNUyxXQUFXO1FBQ2YsSUFBSVQsVUFBVTtlQUFJWDtTQUFZLENBQUNZLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFTSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFDL0RSLFVBQVVBLFFBQVFVLE9BQU87UUFDekJwQixlQUFlVTtJQUNqQjtJQUVBLElBQUlYLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBTTtRQUMxQixxQkFBTyw4REFBQ0osZ0RBQU9BOzs7OztJQUNqQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQzBCOztrQ0FDQyw4REFBQ0M7d0JBQU9DLFNBQVNkO2tDQUFTOzs7Ozs7a0NBQzFCLDhEQUFDYTt3QkFBT0MsU0FBU1A7a0NBQVM7Ozs7OztrQ0FDMUIsOERBQUNNO3dCQUFPQyxTQUFTTjtrQ0FBVTs7Ozs7O2tDQUMzQiw4REFBQ0s7d0JBQU9DLFNBQVNKO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBRzdCLDhEQUFDSztnQkFBS0MsV0FBVzdCLG1FQUFnQjswQkFDOUJHLFlBQVk0QixHQUFHLENBQUMsQ0FBQ0MseUJBQ2hCLDhEQUFDUDt3QkFBc0JJLFdBQVc3Qiw4REFBVzs7MENBQzNDLDhEQUFDeUI7Z0NBQUlJLFdBQVc3QixtRUFBZ0I7MENBRTVCLDRFQUFDQyxrREFBS0E7b0NBQ0o0QixXQUFXN0IsK0RBQVk7b0NBQ3ZCb0MsS0FBS0osU0FBU0csS0FBSztvQ0FDbkJFLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUlWLDhEQUFDZDtnQ0FBSUksV0FBVzdCLG1FQUFnQjs7a0RBQzlCLDhEQUFDeUM7d0NBQUdaLFdBQVc3QixnRUFBYTtrREFBR2dDLFNBQVNkLEtBQUs7Ozs7OztrREFDN0MsOERBQUN5Qjt3Q0FBRWQsV0FBVzdCLG1FQUFnQjtrREFBR2dDLFNBQVNhLFdBQVc7Ozs7OztrREFDckQsOERBQUNDO3dDQUFHakIsV0FBVzdCLCtEQUFZOzs0Q0FBRTs0Q0FBR2dDLFNBQVNWLEtBQUs7Ozs7Ozs7a0RBQzlDLDhEQUFDcUI7d0NBQUVkLFdBQVc3QixtRUFBZ0I7OzRDQUFFOzRDQUNsQmdDLFNBQVNpQixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7O3VCQWpCN0JsQixTQUFTbUIsRUFBRTs7Ozs7Ozs7Ozs7O0FBeUIvQjtHQXhGd0JqRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi5qcz9mZmU0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tYWluLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG5cclxuICBcclxuICBjb25zdCBbbGlzdFByb2R1Y3QsIHNldExpc3RQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdENvbXBsZXRlLCBzZXRMaXN0YUNvbXBsZXRlIF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgc2V0TGlzdFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgIHNldExpc3RhQ29tcGxldGUoZClcclxuICAgIH07XHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBPcmRlbSBhbGZhYsOpdGljYSBjcmVzY2VudGVcclxuICBjb25zdCBvcmRlckFaID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT5cclxuICAgICAgYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpXHJcbiAgICApO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT3JkZW0gYWxmYWLDqXRpY2EgZGVjcmVjZW50ZVxyXG4gIGNvbnN0IG9yZGVyWkEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSlcclxuICAgICk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICAvLyBPcmRlbSBkZSBwcmVjbyBjcmVzY2VudGVcclxuICBjb25zdCBtaW5QcmVjbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuXHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICAvLyBPcmRlbSBkZSBwcmVjbyBkZWNyZWNlbnRlXHJcbiAgY29uc3QgbWF4UHJpY2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QucmV2ZXJzZSgpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxpc3RQcm9kdWN0WzBdID09IG51bGwpIHtcclxuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJBWn0+YS1aPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclpBfT56LUE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pblByZWNvfT5PcmRlbmFyIFByZcOnbyBDcmVzY2VudGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21heFByaWNlfT5PcmRlbmFyIFByZcOnbyBEZWNyZXNjZW50ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2xpc3RQcm9kdWN0Lm1hcCgocHJvZHVjdHMpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0cy5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FiZWNhbGhvfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdHMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZW0gZGUgcHJvZHV0b1wiXHJcbiAgICAgICAgICAgICAgICA+PC9JbWFnZT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcnBvQ2FyZH0+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdHVsb30+e3Byb2R1Y3RzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpY2FvfT57cHJvZHVjdHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcmVjb30+UiR7cHJvZHVjdHMucHJpY2V9PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hdmFsaWFjYW99PlxyXG4gICAgICAgICAgICAgICAgQXZhbGlhw6fDtWVzOntwcm9kdWN0cy5yYXRpbmcuY291bnR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNwaW5uZXIiLCJzdHlsZXMiLCJJbWFnZSIsIk1haW4iLCJsaXN0UHJvZHVjdCIsInNldExpc3RQcm9kdWN0IiwibGlzdENvbXBsZXRlIiwic2V0TGlzdGFDb21wbGV0ZSIsImdldFByb2R1Y3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkIiwib3JkZXJBWiIsIm5ld0xpc3QiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclpBIiwibWluUHJlY28iLCJwcmljZSIsIm1heFByaWNlIiwicmV2ZXJzZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFwIiwicHJvZHVjdHMiLCJjYXJkIiwiY2FiZWNhbGhvIiwiaW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImNvcnBvQ2FyZCIsImgzIiwidGl0dWxvIiwicCIsImRlc2NyaWNhbyIsImRlc2NyaXB0aW9uIiwiaDIiLCJwcmVjbyIsImF2YWxpYWNhbyIsInJhdGluZyIsImNvdW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Main.js\n"));

/***/ })

});