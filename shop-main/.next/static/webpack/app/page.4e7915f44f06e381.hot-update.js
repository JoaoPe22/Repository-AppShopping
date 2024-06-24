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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/components/Spinner.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module.css */ \"(app-pages-browser)/./src/app/components/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listComplete, setListComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products\");\n            const data = await response.json();\n            setListProduct(data);\n            setListComplete(data);\n        };\n        getProduct();\n    }, []);\n    // Ordem alfabética crescente\n    const orderAZ = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    // Ordem alfabética decrecente\n    const orderZA = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListProduct(newList);\n    };\n    // Ordem de preco crescente\n    const minPreco = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    // Ordem de preco decrecente\n    const maxPrice = ()=>{\n        let newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        newList = newList.reverse();\n        setListProduct(newList);\n    };\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    const searchText = (text)=>{\n        setSearch(text);\n        if (text.trim() == \"\") {\n            setListProduct(listComplete);\n            return;\n        }\n        const newList = listProduct.filter((product)=>product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));\n        setListProduct(newList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: search,\n                        placeholder: \"Pesquise Produto\",\n                        onChange: (event)=>searchText(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderAZ,\n                        children: \"a-Z\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderZA,\n                        children: \"z-A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: minPreco,\n                        children: \"Ordenar Pre\\xe7o Crescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: maxPrice,\n                        children: \"Ordenar Pre\\xe7o Decrescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: listProduct.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().cabecalho),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                                    src: products.image,\n                                    width: 350,\n                                    height: 200,\n                                    alt: \"imagem de produto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().corpoCard),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo),\n                                        children: products.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                                        children: products.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                                        children: [\n                                            \"R$\",\n                                            products.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().avaliacao),\n                                        children: [\n                                            \"Avalia\\xe7\\xf5es:\",\n                                            products.rating.count\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"aYbSM0yhWXeqIztFClokY+4UDuI=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDWjtBQUNPO0FBQ1I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUVoQ1QsZUFBZVE7WUFDZk4sZ0JBQWdCTTtRQUNsQjtRQUNBSDtJQUNGLEdBQUcsRUFBRTtJQUVMLDZCQUE2QjtJQUM3QixNQUFNSyxVQUFVO1FBQ2QsTUFBTUMsVUFBVTtlQUFJWjtTQUFZLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUN4Q0QsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFFL0JmLGVBQWVXO0lBQ2pCO0lBRUEsOEJBQThCO0lBQzlCLE1BQU1NLFVBQVU7UUFDZCxNQUFNTixVQUFVO2VBQUlaO1NBQVksQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQ3hDQSxFQUFFQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsRUFBRUUsS0FBSztRQUUvQmYsZUFBZVc7SUFDakI7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTU8sV0FBVztRQUNmLE1BQU1QLFVBQVU7ZUFBSVo7U0FBWSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRU0sS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBRWpFbkIsZUFBZVc7SUFDakI7SUFFQSw0QkFBNEI7SUFDNUIsTUFBTVMsV0FBVztRQUNmLElBQUlULFVBQVU7ZUFBSVo7U0FBWSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRU0sS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQy9EUixVQUFVQSxRQUFRVSxPQUFPO1FBQ3pCckIsZUFBZVc7SUFDakI7SUFFQSxJQUFJWixXQUFXLENBQUMsRUFBRSxJQUFJLE1BQU07UUFDMUIscUJBQU8sOERBQUNKLGdEQUFPQTs7Ozs7SUFDakI7SUFFQSxNQUFNMkIsYUFBYSxDQUFDQztRQUNsQm5CLFVBQVVtQjtRQUVWLElBQUlBLEtBQUtDLElBQUksTUFBTSxJQUFHO1lBQ3BCeEIsZUFBZUM7WUFDZjtRQUNGO1FBRUEsTUFBTVUsVUFBVVosWUFBWTBCLE1BQU0sQ0FBQyxDQUFDQyxVQUNsQ0EsUUFBUVgsS0FBSyxDQUFDWSxXQUFXLEdBQUdILElBQUksR0FBR0ksUUFBUSxDQUFDekIsT0FBT3dCLFdBQVcsR0FBR0gsSUFBSTtRQUV2RXhCLGVBQWVXO0lBQ2pCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDa0I7O2tDQUVDLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBTzdCO3dCQUNQOEIsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxRQUFVYixXQUFXYSxNQUFNQyxNQUFNLENBQUNKLEtBQUs7Ozs7OztrQ0FJcEQsOERBQUNLO3dCQUFPQyxTQUFTNUI7a0NBQVM7Ozs7OztrQ0FDMUIsOERBQUMyQjt3QkFBT0MsU0FBU3JCO2tDQUFTOzs7Ozs7a0NBQzFCLDhEQUFDb0I7d0JBQU9DLFNBQVNwQjtrQ0FBVTs7Ozs7O2tDQUMzQiw4REFBQ21CO3dCQUFPQyxTQUFTbEI7a0NBQVU7Ozs7Ozs7Ozs7OzswQkFHN0IsOERBQUNtQjtnQkFBS0MsV0FBVzVDLG1FQUFnQjswQkFDOUJHLFlBQVkyQyxHQUFHLENBQUMsQ0FBQ0MseUJBQ2hCLDhEQUFDZDt3QkFBc0JXLFdBQVc1Qyw4REFBVzs7MENBQzNDLDhEQUFDaUM7Z0NBQUlXLFdBQVc1QyxtRUFBZ0I7MENBRTVCLDRFQUFDQyxrREFBS0E7b0NBQ0oyQyxXQUFXNUMsK0RBQVk7b0NBQ3ZCbUQsS0FBS0osU0FBU0csS0FBSztvQ0FDbkJFLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUlWLDhEQUFDckI7Z0NBQUlXLFdBQVc1QyxtRUFBZ0I7O2tEQUM5Qiw4REFBQ3dEO3dDQUFHWixXQUFXNUMsZ0VBQWE7a0RBQUcrQyxTQUFTNUIsS0FBSzs7Ozs7O2tEQUM3Qyw4REFBQ3VDO3dDQUFFZCxXQUFXNUMsbUVBQWdCO2tEQUFHK0MsU0FBU2EsV0FBVzs7Ozs7O2tEQUNyRCw4REFBQ0M7d0NBQUdqQixXQUFXNUMsK0RBQVk7OzRDQUFFOzRDQUFHK0MsU0FBU3hCLEtBQUs7Ozs7Ozs7a0RBQzlDLDhEQUFDbUM7d0NBQUVkLFdBQVc1QyxtRUFBZ0I7OzRDQUFFOzRDQUNsQitDLFNBQVNpQixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7O3VCQWpCN0JsQixTQUFTbUIsRUFBRTs7Ozs7Ozs7Ozs7O0FBeUIvQjtHQTdHd0JoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi5qcz9mZmU0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tYWluLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IFtsaXN0UHJvZHVjdCwgc2V0TGlzdFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0Q29tcGxldGUsIHNldExpc3RDb21wbGV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIHNldExpc3RQcm9kdWN0KGRhdGEpO1xyXG4gICAgICBzZXRMaXN0Q29tcGxldGUoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0UHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gT3JkZW0gYWxmYWLDqXRpY2EgY3Jlc2NlbnRlXHJcbiAgY29uc3Qgb3JkZXJBWiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxyXG4gICAgKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIC8vIE9yZGVtIGFsZmFiw6l0aWNhIGRlY3JlY2VudGVcclxuICBjb25zdCBvcmRlclpBID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT5cclxuICAgICAgYi50aXRsZS5sb2NhbGVDb21wYXJlKGEudGl0bGUpXHJcbiAgICApO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT3JkZW0gZGUgcHJlY28gY3Jlc2NlbnRlXHJcbiAgY29uc3QgbWluUHJlY28gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XHJcblxyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT3JkZW0gZGUgcHJlY28gZGVjcmVjZW50ZVxyXG4gIGNvbnN0IG1heFByaWNlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0LnJldmVyc2UoKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGlmIChsaXN0UHJvZHVjdFswXSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgIHNldFNlYXJjaCh0ZXh0KTtcclxuXHJcbiAgICBpZiggdGV4dC50cmltKCkgPT0gXCJcIil7XHJcbiAgICAgIHNldExpc3RQcm9kdWN0KGxpc3RDb21wbGV0ZSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0xpc3QgPSBsaXN0UHJvZHVjdC5maWx0ZXIoKHByb2R1Y3QpID0+XHJcbiAgICAgIHByb2R1Y3QudGl0bGUudG9VcHBlckNhc2UoKS50cmltKCkuaW5jbHVkZXMoc2VhcmNoLnRvVXBwZXJDYXNlKCkudHJpbSgpKVxyXG4gICAgKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHsvKiBpbnB1dCBkZSBwZXNxdWlzYSBkZSBwcm9kdXRvcyAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNlIFByb2R1dG9cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2VhcmNoVGV4dChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiBib3TDtWVzIGRlIGZpbHRyYXplbSAqL31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQVp9PmEtWjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJaQX0+ei1BPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW5QcmVjb30+T3JkZW5hciBQcmXDp28gQ3Jlc2NlbnRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttYXhQcmljZX0+T3JkZW5hciBQcmXDp28gRGVjcmVzY2VudGU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtsaXN0UHJvZHVjdC5tYXAoKHByb2R1Y3RzKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdHMuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhYmVjYWxob30+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3RzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VtIGRlIHByb2R1dG9cIlxyXG4gICAgICAgICAgICAgICAgPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Jwb0NhcmR9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXR1bG99Pntwcm9kdWN0cy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb30+e3Byb2R1Y3RzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucHJlY299PlIke3Byb2R1Y3RzLnByaWNlfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhbGlhY2FvfT5cclxuICAgICAgICAgICAgICAgIEF2YWxpYcOnw7Vlczp7cHJvZHVjdHMucmF0aW5nLmNvdW50fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTcGlubmVyIiwic3R5bGVzIiwiSW1hZ2UiLCJNYWluIiwibGlzdFByb2R1Y3QiLCJzZXRMaXN0UHJvZHVjdCIsImxpc3RDb21wbGV0ZSIsInNldExpc3RDb21wbGV0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImdldFByb2R1Y3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvcmRlckFaIiwibmV3TGlzdCIsInNvcnQiLCJhIiwiYiIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm9yZGVyWkEiLCJtaW5QcmVjbyIsInByaWNlIiwibWF4UHJpY2UiLCJyZXZlcnNlIiwic2VhcmNoVGV4dCIsInRleHQiLCJ0cmltIiwiZmlsdGVyIiwicHJvZHVjdCIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFwIiwicHJvZHVjdHMiLCJjYXJkIiwiY2FiZWNhbGhvIiwiaW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImNvcnBvQ2FyZCIsImgzIiwidGl0dWxvIiwicCIsImRlc2NyaWNhbyIsImRlc2NyaXB0aW9uIiwiaDIiLCJwcmVjbyIsImF2YWxpYWNhbyIsInJhdGluZyIsImNvdW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Main.js\n"));

/***/ })

});