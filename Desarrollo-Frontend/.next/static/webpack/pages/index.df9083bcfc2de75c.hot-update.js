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

/***/ "./components/producto.js":
/*!********************************!*\
  !*** ./components/producto.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/state */ \"./context/state.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Producto = function(props) {\n    _s();\n    var ref = (0,_context_state__WEBPACK_IMPORTED_MODULE_4__.useAppContext)(), showProductos = ref.showProductos, eliminarProducto = ref.eliminarProducto;\n    var _showProductos = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(showProductos, 2), showProducto = _showProductos[0], setShowProducto = _showProductos[1];\n    var _eliminarProducto = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(eliminarProducto, 2), showEliminarProducto = _eliminarProducto[0], setShowEliminarProducto = _eliminarProducto[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    setShowEliminarProducto(-1);\n                    setShowProducto(props.id);\n                },\n                className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-container list-item fila-tabla fila-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-container1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"textoIdListaProducto\",\n                                className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-text\",\n                                children: props.id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"textoNombreListaProducto\",\n                                className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-text1\",\n                                children: props.nombre\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"textoStockListaProducto\",\n                                className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-text2\",\n                                children: props.stock\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"textoPrecioListaProducto\",\n                                className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-text3\",\n                                children: props.precioVenta\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"botonEliminarProducto\",\n                        type: \"button\",\n                        onClick: function(e) {\n                            e.stopPropagation();\n                            setShowEliminarProducto(props.id);\n                        },\n                        className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-button button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: props.image_alt,\n                            src: props.image_src,\n                            className: \"jsx-734b76ca62ed4a08\" + \" \" + \"producto-image\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\producto.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"734b76ca62ed4a08\",\n                children: \".producto-container.jsx-734b76ca62ed4a08{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:100%;height:4rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:0;position:relative;-webkit-box-shadow:0px 0px 10px 0px rgba(0,0,0,0);-moz-box-shadow:0px 0px 10px 0px rgba(0,0,0,0);box-shadow:0px 0px 10px 0px rgba(0,0,0,0);-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-border-radius:0px;-moz-border-radius:0px;border-radius:0px;margin-bottom:0px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-decoration:none;background-color:transparent;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.producto-container1.jsx-734b76ca62ed4a08{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:90%;height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0}.producto-text.jsx-734b76ca62ed4a08{color:var(--dl-color-gray-white);width:8rem;font-size:1rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-style:normal;text-align:center;font-family:Poppins;font-weight:300;margin-left:2rem;margin-right:1rem}.producto-text1.jsx-734b76ca62ed4a08{color:var(--dl-color-gray-white);width:15rem;font-size:1rem;font-style:normal;text-align:center;font-family:Poppins;font-weight:300;margin-left:1rem;margin-right:1rem}.producto-text2.jsx-734b76ca62ed4a08{color:var(--dl-color-color-blanco);width:8rem;font-size:1rem;font-style:normal;text-align:center;font-family:Poppins;font-weight:300;margin-left:1rem;margin-right:1rem}.producto-text3.jsx-734b76ca62ed4a08{color:var(--dl-color-color-blanco);width:10rem;font-size:1rem;font-style:normal;text-align:center;font-family:Poppins;font-weight:300;margin-left:1rem;margin-right:1rem}.producto-button.jsx-734b76ca62ed4a08{width:auto;height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:1rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;border-color:rgba(0,0,0,0);margin-right:2rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background-color:transparent}.producto-button.jsx-734b76ca62ed4a08:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.producto-image.jsx-734b76ca62ed4a08{width:var(--dl-size-size-xsmall);height:var(--dl-size-size-xsmall);-o-object-fit:cover;object-fit:cover}@media(max-width:1200px){.producto-text.jsx-734b76ca62ed4a08{margin-left:1rem}.producto-text2.jsx-734b76ca62ed4a08{width:5rem}.producto-button.jsx-734b76ca62ed4a08{padding:1rem}}@media(max-width:991px){.producto-text.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-text1.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-text2.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-text3.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-image.jsx-734b76ca62ed4a08{width:12px;height:auto}}@media(max-width:767px){.producto-container.jsx-734b76ca62ed4a08{height:2rem}.producto-text.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-text1.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-text2.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-text3.jsx-734b76ca62ed4a08{font-size:.8rem}.producto-image.jsx-734b76ca62ed4a08{width:8px}}@media(max-width:530px){.producto-container.jsx-734b76ca62ed4a08{padding-top:0rem;padding-left:1rem;padding-right:1rem;padding-bottom:0rem}.producto-text.jsx-734b76ca62ed4a08{width:2rem;font-size:.6rem;margin-left:1rem}.producto-text1.jsx-734b76ca62ed4a08{width:5rem;font-size:.6rem;margin-left:.5rem;margin-right:.5rem}.producto-text2.jsx-734b76ca62ed4a08{width:4rem;font-size:.6rem;margin-left:.5rem;margin-right:.5rem}.producto-text3.jsx-734b76ca62ed4a08{width:3rem;font-size:.6rem}.producto-button.jsx-734b76ca62ed4a08{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-right:1rem}}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\n_s(Producto, \"TVFnbss0DMjGaqcU2RhaGDooGr0=\", false, function() {\n    return [\n        _context_state__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Producto;\nProducto.defaultProps = {\n    id: \"00\",\n    nombre: \"Nombre\",\n    precioVenta: \"0,00\",\n    stock: \"00\",\n    text21: \"$0,00\",\n    image_alt: \"image\",\n    image_src: \"/eliminar-white-200h.png\",\n    text111: \"Id\",\n    text7: \"0\"\n};\nProducto.propTypes = {\n    text21: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n    image_alt: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n    image_src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n    text111: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n    text7: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTdCLDBEQUFnQjtDQUN4QjtBQUVELCtEQUFlRSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdG8uanM/ZjdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUnXHJcblxyXG5jb25zdCBQcm9kdWN0byA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtzaG93UHJvZHVjdG9zLCBlbGltaW5hclByb2R1Y3RvfSA9IHVzZUFwcENvbnRleHQoKTtcclxuICBjb25zdCBbc2hvd1Byb2R1Y3RvLCBzZXRTaG93UHJvZHVjdG9dID0gc2hvd1Byb2R1Y3RvcztcclxuICBjb25zdCBbc2hvd0VsaW1pbmFyUHJvZHVjdG8sIHNldFNob3dFbGltaW5hclByb2R1Y3RvXSA9IGVsaW1pbmFyUHJvZHVjdG87XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PiB7LypBbCBoYWNlciBjbGljayBlbiBlbCBlbGVtZW50bywgc2UgaGFiaWxpdGEgbW9zdHJhciBlbCBwb3B1cCwgY29uIGVsIGlkIGRlbCBwcm9kdWN0byBxdWUgc2UgcXVpZXJlIG1vc3RyYXIqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0by1jb250YWluZXIgbGlzdC1pdGVtIGZpbGEtdGFibGEgZmlsYS1ncm93XCIgXHJcbiAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgIHNldFNob3dFbGltaW5hclByb2R1Y3RvKC0xKTtcclxuICAgICAgICAgIHNldFNob3dQcm9kdWN0byhwcm9wcy5pZCk7XHJcbiAgICAgICAgfX0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdG8tY29udGFpbmVyMVwiPlxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0ZXh0b0lkTGlzdGFQcm9kdWN0b1wiIGNsYXNzTmFtZT1cInByb2R1Y3RvLXRleHRcIj5cclxuICAgICAgICAgICAge3Byb3BzLmlkfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0ZXh0b05vbWJyZUxpc3RhUHJvZHVjdG9cIiBjbGFzc05hbWU9XCJwcm9kdWN0by10ZXh0MVwiPlxyXG4gICAgICAgICAgICB7cHJvcHMubm9tYnJlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0ZXh0b1N0b2NrTGlzdGFQcm9kdWN0b1wiIGNsYXNzTmFtZT1cInByb2R1Y3RvLXRleHQyXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdG9ja31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGlkPVwidGV4dG9QcmVjaW9MaXN0YVByb2R1Y3RvXCIgY2xhc3NOYW1lPVwicHJvZHVjdG8tdGV4dDNcIj5cclxuICAgICAgICAgICAge3Byb3BzLnByZWNpb1ZlbnRhfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGlkPVwiYm90b25FbGltaW5hclByb2R1Y3RvXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdG8tYnV0dG9uIGJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgc2V0U2hvd0VsaW1pbmFyUHJvZHVjdG8ocHJvcHMuaWQpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD17cHJvcHMuaW1hZ2VfYWx0fVxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlX3NyY31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdG8taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5wcm9kdWN0by1jb250YWluZXIge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcm9kdWN0by1jb250YWluZXIxIHtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RvLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGwtY29sb3ItZ3JheS13aGl0ZSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RvLXRleHQxIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRsLWNvbG9yLWdyYXktd2hpdGUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RvLXRleHQyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRsLWNvbG9yLWNvbG9yLWJsYW5jbyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0by10ZXh0MyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kbC1jb2xvci1jb2xvci1ibGFuY28pO1xyXG4gICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RvLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RvLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0by1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1kbC1zaXplLXNpemUteHNtYWxsKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1kbC1zaXplLXNpemUteHNtYWxsKTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by10ZXh0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdG8tdGV4dDIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by1idXR0b24ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICAucHJvZHVjdG8tdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RvLXRleHQxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdG8tdGV4dDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by10ZXh0MyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RvLWltYWdlIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAucHJvZHVjdG8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RvLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by10ZXh0MSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RvLXRleHQyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdG8tdGV4dDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by10ZXh0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdG8tdGV4dDEge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RvLXRleHQyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0by10ZXh0MyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RvLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RvLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpZDogJzAwJyxcclxuICBub21icmU6ICdOb21icmUnLFxyXG4gIHByZWNpb1ZlbnRhOiAnMCwwMCcsXHJcbiAgc3RvY2s6ICcwMCcsXHJcbiAgdGV4dDIxOiAnJDAsMDAnLFxyXG4gIGltYWdlX2FsdDogJ2ltYWdlJyxcclxuICBpbWFnZV9zcmM6ICcvZWxpbWluYXItd2hpdGUtMjAwaC5wbmcnLFxyXG4gIHRleHQxMTE6ICdJZCcsXHJcbiAgdGV4dDc6ICcwJyxcclxufVxyXG5cclxuUHJvZHVjdG8ucHJvcFR5cGVzID0ge1xyXG4gIHRleHQyMTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpbWFnZV9hbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaW1hZ2Vfc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRleHQxMTE6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGV4dDc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RvXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInVzZUFwcENvbnRleHQiLCJQcm9kdWN0byIsInByb3BzIiwic2hvd1Byb2R1Y3RvcyIsImVsaW1pbmFyUHJvZHVjdG8iLCJzaG93UHJvZHVjdG8iLCJzZXRTaG93UHJvZHVjdG8iLCJzaG93RWxpbWluYXJQcm9kdWN0byIsInNldFNob3dFbGltaW5hclByb2R1Y3RvIiwiZGl2Iiwib25DbGljayIsImlkIiwic3BhbiIsIm5vbWJyZSIsInN0b2NrIiwicHJlY2lvVmVudGEiLCJidXR0b24iLCJ0eXBlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImltZyIsImFsdCIsImltYWdlX2FsdCIsInNyYyIsImltYWdlX3NyYyIsImRlZmF1bHRQcm9wcyIsInRleHQyMSIsInRleHQxMTEiLCJ0ZXh0NyIsInByb3BUeXBlcyIsInN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/producto.js\n"));

/***/ })

});