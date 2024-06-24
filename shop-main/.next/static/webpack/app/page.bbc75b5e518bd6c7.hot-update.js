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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/components/Spinner.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module.css */ \"(app-pages-browser)/./src/app/components/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listComplete, setListaComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products\");\n            const data = await response.json();\n            setListProduct(data);\n            setListaComplete(data);\n        };\n        getProduct();\n    }, []);\n    // Ordem alfabética crescente\n    const orderAZ = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    // Ordem alfabética decrecente\n    const orderZA = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListProduct(newList);\n    };\n    // Ordem de preco crescente\n    const minPreco = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    // Ordem de preco decrecente\n    const maxPrice = ()=>{\n        let newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        newList = newList.reverse();\n        setListProduct(newList);\n    };\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"\",\n                        placeholder: \"Pesquise Produto\",\n                        onChange: (event)=>sear\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderAZ,\n                        children: \"a-Z\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderZA,\n                        children: \"z-A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: minPreco,\n                        children: \"Ordenar Pre\\xe7o Crescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: maxPrice,\n                        children: \"Ordenar Pre\\xe7o Decrescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: listProduct.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().cabecalho),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                                    src: products.image,\n                                    width: 350,\n                                    height: 200,\n                                    alt: \"imagem de produto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().corpoCard),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo),\n                                        children: products.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                                        children: products.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                                        children: [\n                                            \"R$\",\n                                            products.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().avaliacao),\n                                        children: [\n                                            \"Avalia\\xe7\\xf5es:\",\n                                            products.rating.count\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"YXbYa7ejAo5q93BvUDyo5m4IS6A=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDWjtBQUNPO0FBQ1I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sY0FBY0MsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFcERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYTtZQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBRWhDUCxlQUFlTTtZQUNmSixpQkFBaUJJO1FBQ25CO1FBQ0FIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNkJBQTZCO0lBQzdCLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlWO1NBQVksQ0FBQ1csSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQ3hDRCxFQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsS0FBSztRQUUvQmIsZUFBZVM7SUFDakI7SUFFQSw4QkFBOEI7SUFDOUIsTUFBTU0sVUFBVTtRQUNkLE1BQU1OLFVBQVU7ZUFBSVY7U0FBWSxDQUFDVyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFDeENBLEVBQUVDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDSCxFQUFFRSxLQUFLO1FBRS9CYixlQUFlUztJQUNqQjtJQUVBLDJCQUEyQjtJQUMzQixNQUFNTyxXQUFXO1FBQ2YsTUFBTVAsVUFBVTtlQUFJVjtTQUFZLENBQUNXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFTSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFFakVqQixlQUFlUztJQUNqQjtJQUVBLDRCQUE0QjtJQUM1QixNQUFNUyxXQUFXO1FBQ2YsSUFBSVQsVUFBVTtlQUFJVjtTQUFZLENBQUNXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFTSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFDL0RSLFVBQVVBLFFBQVFVLE9BQU87UUFDekJuQixlQUFlUztJQUNqQjtJQUVBLElBQUlWLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBTTtRQUMxQixxQkFBTyw4REFBQ0osZ0RBQU9BOzs7OztJQUNqQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3lCOztrQ0FDQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQUdDLGFBQVk7d0JBQW1CQyxVQUFVLENBQUNDLFFBQVVDOzs7Ozs7a0NBQ25FLDhEQUFDQzt3QkFBT0MsU0FBU3BCO2tDQUFTOzs7Ozs7a0NBQzFCLDhEQUFDbUI7d0JBQU9DLFNBQVNiO2tDQUFTOzs7Ozs7a0NBQzFCLDhEQUFDWTt3QkFBT0MsU0FBU1o7a0NBQVU7Ozs7OztrQ0FDM0IsOERBQUNXO3dCQUFPQyxTQUFTVjtrQ0FBVTs7Ozs7Ozs7Ozs7OzBCQUc3Qiw4REFBQ1c7Z0JBQUtDLFdBQVdsQyxtRUFBZ0I7MEJBQzlCRyxZQUFZaUMsR0FBRyxDQUFDLENBQUNDLHlCQUNoQiw4REFBQ2I7d0JBQXNCVSxXQUFXbEMsOERBQVc7OzBDQUMzQyw4REFBQ3dCO2dDQUFJVSxXQUFXbEMsbUVBQWdCOzBDQUU1Qiw0RUFBQ0Msa0RBQUtBO29DQUNKaUMsV0FBV2xDLCtEQUFZO29DQUN2QnlDLEtBQUtKLFNBQVNHLEtBQUs7b0NBQ25CRSxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxLQUFJOzs7Ozs7Ozs7OzswQ0FJViw4REFBQ3BCO2dDQUFJVSxXQUFXbEMsbUVBQWdCOztrREFDOUIsOERBQUM4Qzt3Q0FBR1osV0FBV2xDLGdFQUFhO2tEQUFHcUMsU0FBU3BCLEtBQUs7Ozs7OztrREFDN0MsOERBQUMrQjt3Q0FBRWQsV0FBV2xDLG1FQUFnQjtrREFBR3FDLFNBQVNhLFdBQVc7Ozs7OztrREFDckQsOERBQUNDO3dDQUFHakIsV0FBV2xDLCtEQUFZOzs0Q0FBRTs0Q0FBR3FDLFNBQVNoQixLQUFLOzs7Ozs7O2tEQUM5Qyw4REFBQzJCO3dDQUFFZCxXQUFXbEMsbUVBQWdCOzs0Q0FBRTs0Q0FDbEJxQyxTQUFTaUIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozt1QkFqQjdCbEIsU0FBU21CLEVBQUU7Ozs7Ozs7Ozs7OztBQXlCL0I7R0F0RndCdEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4uanM/ZmZlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWFpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbbGlzdFByb2R1Y3QsIHNldExpc3RQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdENvbXBsZXRlLCBzZXRMaXN0YUNvbXBsZXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBzZXRMaXN0UHJvZHVjdChkYXRhKTtcclxuICAgICAgc2V0TGlzdGFDb21wbGV0ZShkYXRhKTtcclxuICAgIH07XHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBPcmRlbSBhbGZhYsOpdGljYSBjcmVzY2VudGVcclxuICBjb25zdCBvcmRlckFaID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT5cclxuICAgICAgYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpXHJcbiAgICApO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT3JkZW0gYWxmYWLDqXRpY2EgZGVjcmVjZW50ZVxyXG4gIGNvbnN0IG9yZGVyWkEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSlcclxuICAgICk7XHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICAvLyBPcmRlbSBkZSBwcmVjbyBjcmVzY2VudGVcclxuICBjb25zdCBtaW5QcmVjbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuXHJcbiAgICBzZXRMaXN0UHJvZHVjdChuZXdMaXN0KTtcclxuICB9O1xyXG5cclxuICAvLyBPcmRlbSBkZSBwcmVjbyBkZWNyZWNlbnRlXHJcbiAgY29uc3QgbWF4UHJpY2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QucmV2ZXJzZSgpO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxpc3RQcm9kdWN0WzBdID09IG51bGwpIHtcclxuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiXCIgcGxhY2Vob2xkZXI9XCJQZXNxdWlzZSBQcm9kdXRvXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2Vhcn0+PC9pbnB1dD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQVp9PmEtWjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJaQX0+ei1BPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW5QcmVjb30+T3JkZW5hciBQcmXDp28gQ3Jlc2NlbnRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttYXhQcmljZX0+T3JkZW5hciBQcmXDp28gRGVjcmVzY2VudGU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtsaXN0UHJvZHVjdC5tYXAoKHByb2R1Y3RzKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdHMuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhYmVjYWxob30+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3RzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VtIGRlIHByb2R1dG9cIlxyXG4gICAgICAgICAgICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Jwb0NhcmR9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG99Pntwcm9kdWN0cy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb30+e3Byb2R1Y3RzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucHJlY299PlIke3Byb2R1Y3RzLnByaWNlfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhbGlhY2FvfT5cclxuICAgICAgICAgICAgICAgIEF2YWxpYcOnw7Vlczp7cHJvZHVjdHMucmF0aW5nLmNvdW50fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTcGlubmVyIiwic3R5bGVzIiwiSW1hZ2UiLCJNYWluIiwibGlzdFByb2R1Y3QiLCJzZXRMaXN0UHJvZHVjdCIsImxpc3RDb21wbGV0ZSIsInNldExpc3RhQ29tcGxldGUiLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBWiIsIm5ld0xpc3QiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclpBIiwibWluUHJlY28iLCJwcmljZSIsIm1heFByaWNlIiwicmV2ZXJzZSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInNlYXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1hcCIsInByb2R1Y3RzIiwiY2FyZCIsImNhYmVjYWxobyIsImltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJjb3Jwb0NhcmQiLCJoMyIsInRpdHVsbyIsInAiLCJkZXNjcmljYW8iLCJkZXNjcmlwdGlvbiIsImgyIiwicHJlY28iLCJhdmFsaWFjYW8iLCJyYXRpbmciLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Main.js\n"));

/***/ })

});