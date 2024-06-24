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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/components/Spinner.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module.css */ \"(app-pages-browser)/./src/app/components/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setListProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listComplete, setListaComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products\");\n            const data = await response.json();\n            setListProduct(data);\n            setListaComplete(data);\n        };\n        getProduct();\n    }, []);\n    // Ordem alfabética crescente\n    const orderAZ = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListProduct(newList);\n    };\n    // Ordem alfabética decrecente\n    const orderZA = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListProduct(newList);\n    };\n    // Ordem de preco crescente\n    const minPreco = ()=>{\n        const newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setListProduct(newList);\n    };\n    // Ordem de preco decrecente\n    const maxPrice = ()=>{\n        let newList = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        newList = newList.reverse();\n        setListProduct(newList);\n    };\n    if (listProduct[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"\",\n                        value: textSer,\n                        placeholder: \"Pesquise Produto\",\n                        onChange: (event)=>search(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderAZ,\n                        children: \"a-Z\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: orderZA,\n                        children: \"z-A\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: minPreco,\n                        children: \"Ordenar Pre\\xe7o Crescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: maxPrice,\n                        children: \"Ordenar Pre\\xe7o Decrescente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: listProduct.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().cabecalho),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                                    src: products.image,\n                                    width: 350,\n                                    height: 200,\n                                    alt: \"imagem de produto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().corpoCard),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().titulo),\n                                        children: products.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                                        children: products.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                                        children: [\n                                            \"R$\",\n                                            products.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_3___default().avaliacao),\n                                        children: [\n                                            \"Avalia\\xe7\\xf5es:\",\n                                            products.rating.count\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jp160\\\\Desktop\\\\IFMS\\\\PTAC\\\\App Shopping\\\\shop-main\\\\Repository-AppShopping\\\\shop-main\\\\src\\\\app\\\\components\\\\Main.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"YXbYa7ejAo5q93BvUDyo5m4IS6A=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDWjtBQUNPO0FBQ1I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sY0FBY0MsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFcERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYTtZQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBRWhDUCxlQUFlTTtZQUNmSixpQkFBaUJJO1FBQ25CO1FBQ0FIO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNkJBQTZCO0lBQzdCLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlWO1NBQVksQ0FBQ1csSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQ3hDRCxFQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsS0FBSztRQUUvQmIsZUFBZVM7SUFDakI7SUFFQSw4QkFBOEI7SUFDOUIsTUFBTU0sVUFBVTtRQUNkLE1BQU1OLFVBQVU7ZUFBSVY7U0FBWSxDQUFDVyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFDeENBLEVBQUVDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDSCxFQUFFRSxLQUFLO1FBRS9CYixlQUFlUztJQUNqQjtJQUVBLDJCQUEyQjtJQUMzQixNQUFNTyxXQUFXO1FBQ2YsTUFBTVAsVUFBVTtlQUFJVjtTQUFZLENBQUNXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFTSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFFakVqQixlQUFlUztJQUNqQjtJQUVBLDRCQUE0QjtJQUM1QixNQUFNUyxXQUFXO1FBQ2YsSUFBSVQsVUFBVTtlQUFJVjtTQUFZLENBQUNXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFTSxLQUFLLEdBQUdMLEVBQUVLLEtBQUs7UUFDL0RSLFVBQVVBLFFBQVFVLE9BQU87UUFDekJuQixlQUFlUztJQUNqQjtJQUVBLElBQUlWLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBTTtRQUMxQixxQkFBTyw4REFBQ0osZ0RBQU9BOzs7OztJQUNqQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3lCOztrQ0FFQyw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQUdDLE9BQU9DO3dCQUFTQyxhQUFZO3dCQUFtQkMsVUFBVSxDQUFDQyxRQUFVQyxPQUFRRCxNQUFNRSxNQUFNLENBQUNOLEtBQUs7Ozs7OztrQ0FFN0csOERBQUNPO3dCQUFPQyxTQUFTdkI7a0NBQVM7Ozs7OztrQ0FDMUIsOERBQUNzQjt3QkFBT0MsU0FBU2hCO2tDQUFTOzs7Ozs7a0NBQzFCLDhEQUFDZTt3QkFBT0MsU0FBU2Y7a0NBQVU7Ozs7OztrQ0FDM0IsOERBQUNjO3dCQUFPQyxTQUFTYjtrQ0FBVTs7Ozs7Ozs7Ozs7OzBCQUc3Qiw4REFBQ2M7Z0JBQUtDLFdBQVdyQyxtRUFBZ0I7MEJBQzlCRyxZQUFZb0MsR0FBRyxDQUFDLENBQUNDLHlCQUNoQiw4REFBQ2hCO3dCQUFzQmEsV0FBV3JDLDhEQUFXOzswQ0FDM0MsOERBQUN3QjtnQ0FBSWEsV0FBV3JDLG1FQUFnQjswQ0FFNUIsNEVBQUNDLGtEQUFLQTtvQ0FDSm9DLFdBQVdyQywrREFBWTtvQ0FDdkI0QyxLQUFLSixTQUFTRyxLQUFLO29DQUNuQkUsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTs7Ozs7Ozs7Ozs7MENBSVYsOERBQUN2QjtnQ0FBSWEsV0FBV3JDLG1FQUFnQjs7a0RBQzlCLDhEQUFDaUQ7d0NBQUdaLFdBQVdyQyxnRUFBYTtrREFBR3dDLFNBQVN2QixLQUFLOzs7Ozs7a0RBQzdDLDhEQUFDa0M7d0NBQUVkLFdBQVdyQyxtRUFBZ0I7a0RBQUd3QyxTQUFTYSxXQUFXOzs7Ozs7a0RBQ3JELDhEQUFDQzt3Q0FBR2pCLFdBQVdyQywrREFBWTs7NENBQUU7NENBQUd3QyxTQUFTbkIsS0FBSzs7Ozs7OztrREFDOUMsOERBQUM4Qjt3Q0FBRWQsV0FBV3JDLG1FQUFnQjs7NENBQUU7NENBQ2xCd0MsU0FBU2lCLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7dUJBakI3QmxCLFNBQVNtQixFQUFFOzs7Ozs7Ozs7Ozs7QUF5Qi9CO0dBeEZ3QnpEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLmpzP2ZmZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21haW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0LCBzZXRMaXN0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RDb21wbGV0ZSwgc2V0TGlzdGFDb21wbGV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgc2V0TGlzdFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgIHNldExpc3RhQ29tcGxldGUoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0UHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gT3JkZW0gYWxmYWLDqXRpY2EgY3Jlc2NlbnRlXHJcbiAgY29uc3Qgb3JkZXJBWiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxyXG4gICAgKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIC8vIE9yZGVtIGFsZmFiw6l0aWNhIGRlY3JlY2VudGVcclxuICBjb25zdCBvcmRlclpBID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IFsuLi5saXN0UHJvZHVjdF0uc29ydCgoYSwgYikgPT5cclxuICAgICAgYi50aXRsZS5sb2NhbGVDb21wYXJlKGEudGl0bGUpXHJcbiAgICApO1xyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT3JkZW0gZGUgcHJlY28gY3Jlc2NlbnRlXHJcbiAgY29uc3QgbWluUHJlY28gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XHJcblxyXG4gICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT3JkZW0gZGUgcHJlY28gZGVjcmVjZW50ZVxyXG4gIGNvbnN0IG1heFByaWNlID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld0xpc3QgPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGEucHJpY2UgLSBiLnByaWNlKTtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0LnJldmVyc2UoKTtcclxuICAgIHNldExpc3RQcm9kdWN0KG5ld0xpc3QpO1xyXG4gIH07XHJcblxyXG4gIGlmIChsaXN0UHJvZHVjdFswXSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7LyogaW5wdXQgZGUgcGVzcXVpc2EgZGUgcHJvZHV0b3MgKi99XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJcIiB2YWx1ZT17dGV4dFNlcn0gcGxhY2Vob2xkZXI9XCJQZXNxdWlzZSBQcm9kdXRvXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gc2VhcmNoKCBldmVudC50YXJnZXQudmFsdWUgKX0gLz5cclxuICAgICAgICB7LyogYm90w7VlcyBkZSBmaWx0cmF6ZW0gKi99XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlckFafT5hLVo8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyWkF9PnotQTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWluUHJlY299Pk9yZGVuYXIgUHJlw6dvIENyZXNjZW50ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWF4UHJpY2V9Pk9yZGVuYXIgUHJlw6dvIERlY3Jlc2NlbnRlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdWN0cykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3RzLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWJlY2FsaG99PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0cy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlbSBkZSBwcm9kdXRvXCJcclxuICAgICAgICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29ycG9DYXJkfT5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGl0dWxvfT57cHJvZHVjdHMudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmljYW99Pntwcm9kdWN0cy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnByZWNvfT5SJHtwcm9kdWN0cy5wcmljZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmF2YWxpYWNhb30+XHJcbiAgICAgICAgICAgICAgICBBdmFsaWHDp8O1ZXM6e3Byb2R1Y3RzLnJhdGluZy5jb3VudH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3Bpbm5lciIsInN0eWxlcyIsIkltYWdlIiwiTWFpbiIsImxpc3RQcm9kdWN0Iiwic2V0TGlzdFByb2R1Y3QiLCJsaXN0Q29tcGxldGUiLCJzZXRMaXN0YUNvbXBsZXRlIiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQVoiLCJuZXdMaXN0Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJaQSIsIm1pblByZWNvIiwicHJpY2UiLCJtYXhQcmljZSIsInJldmVyc2UiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInRleHRTZXIiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZWFyY2giLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1hcCIsInByb2R1Y3RzIiwiY2FyZCIsImNhYmVjYWxobyIsImltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJjb3Jwb0NhcmQiLCJoMyIsInRpdHVsbyIsInAiLCJkZXNjcmljYW8iLCJkZXNjcmlwdGlvbiIsImgyIiwicHJlY28iLCJhdmFsaWFjYW8iLCJyYXRpbmciLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Main.js\n"));

/***/ })

});