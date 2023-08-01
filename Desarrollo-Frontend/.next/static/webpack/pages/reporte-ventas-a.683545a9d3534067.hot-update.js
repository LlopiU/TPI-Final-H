"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reporte-ventas-a",{

/***/ "./components/linea-reporte.js":
/*!*************************************!*\
  !*** ./components/linea-reporte.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar LineaReporte = function(props) {\n    var fechaFormateada = new Date(props.fecha).toLocaleDateString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"linea-reporte-fila reporte-fila bg-gray-100 rounded-lg p-4 mb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"reporte-fila-campos grid grid-cols-4 gap-2 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"reporte-fila-id font-bold\",\n                    children: props.id\n                }, void 0, false, {\n                    fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\linea-reporte.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"reporte-fila-fecha\",\n                    children: fechaFormateada\n                }, void 0, false, {\n                    fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\linea-reporte.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"reporte-fila-cliente\",\n                    children: props.cliente\n                }, void 0, false, {\n                    fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\linea-reporte.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"reporte-fila-importe font-bold\",\n                    children: [\n                        \"$\",\n                        props.importe\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\linea-reporte.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\linea-reporte.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\components\\\\linea-reporte.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = LineaReporte;\nLineaReporte.defaultProps = {\n    importe: \"$0,00\",\n    cliente: \"Nombre\",\n    id: \"ID\",\n    fecha: \"2023-07-31T00:08:32.000Z\"\n};\nLineaReporte.propTypes = {\n    importe: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    cliente: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    fecha: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineaReporte);\nvar _c;\n$RefreshReg$(_c, \"LineaReporte\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmVhLXJlcG9ydGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQjtBQUNTO0FBRW5DLElBQU1FLFlBQVksR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDOUIsSUFBTUMsZUFBZSxHQUFHLElBQUlDLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQ0Msa0JBQWtCLEVBQUU7SUFFbEUscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlFQUFpRTtrQkFDOUUsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7OEJBQ3JFLDhEQUFDQyxNQUFJO29CQUFDRCxTQUFTLEVBQUMsMkJBQTJCOzhCQUFFTixLQUFLLENBQUNRLEVBQUU7Ozs7O3lCQUFROzhCQUM3RCw4REFBQ0QsTUFBSTtvQkFBQ0QsU0FBUyxFQUFDLG9CQUFvQjs4QkFBRUwsZUFBZTs7Ozs7eUJBQVE7OEJBQzdELDhEQUFDTSxNQUFJO29CQUFDRCxTQUFTLEVBQUMsc0JBQXNCOzhCQUFFTixLQUFLLENBQUNTLE9BQU87Ozs7O3lCQUFROzhCQUM3RCw4REFBQ0YsTUFBSTtvQkFBQ0QsU0FBUyxFQUFDLGdDQUFnQzs7d0JBQUMsR0FBQzt3QkFBQ04sS0FBSyxDQUFDVSxPQUFPOzs7Ozs7eUJBQVE7Ozs7OztpQkFDcEU7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7QUFiS1gsS0FBQUEsWUFBWTtBQWVsQkEsWUFBWSxDQUFDWSxZQUFZLEdBQUc7SUFDMUJELE9BQU8sRUFBRSxPQUFPO0lBQ2hCRCxPQUFPLEVBQUUsUUFBUTtJQUNqQkQsRUFBRSxFQUFFLElBQUk7SUFDUkwsS0FBSyxFQUFFLDBCQUEwQjtDQUNsQyxDQUFDO0FBRUZKLFlBQVksQ0FBQ2EsU0FBUyxHQUFHO0lBQ3ZCRixPQUFPLEVBQUVaLDBEQUFnQjtJQUN6QlcsT0FBTyxFQUFFWCwwREFBZ0I7SUFDekJVLEVBQUUsRUFBRVYsMERBQWdCO0lBQ3BCSyxLQUFLLEVBQUVMLDBEQUFnQjtDQUN4QixDQUFDO0FBRUYsK0RBQWVDLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpbmVhLXJlcG9ydGUuanM/YWI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgTGluZWFSZXBvcnRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZmVjaGFGb3JtYXRlYWRhID0gbmV3IERhdGUocHJvcHMuZmVjaGEpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lYS1yZXBvcnRlLWZpbGEgcmVwb3J0ZS1maWxhIGJnLWdyYXktMTAwIHJvdW5kZWQtbGcgcC00IG1iLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvcnRlLWZpbGEtY2FtcG9zIGdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcnRlLWZpbGEtaWQgZm9udC1ib2xkXCI+e3Byb3BzLmlkfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcnRlLWZpbGEtZmVjaGFcIj57ZmVjaGFGb3JtYXRlYWRhfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcnRlLWZpbGEtY2xpZW50ZVwiPntwcm9wcy5jbGllbnRlfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXBvcnRlLWZpbGEtaW1wb3J0ZSBmb250LWJvbGRcIj4ke3Byb3BzLmltcG9ydGV9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5MaW5lYVJlcG9ydGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltcG9ydGU6ICckMCwwMCcsXHJcbiAgY2xpZW50ZTogJ05vbWJyZScsXHJcbiAgaWQ6ICdJRCcsXHJcbiAgZmVjaGE6ICcyMDIzLTA3LTMxVDAwOjA4OjMyLjAwMFonLFxyXG59O1xyXG5cclxuTGluZWFSZXBvcnRlLnByb3BUeXBlcyA9IHtcclxuICBpbXBvcnRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsaWVudGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZmVjaGE6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lYVJlcG9ydGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGluZWFSZXBvcnRlIiwicHJvcHMiLCJmZWNoYUZvcm1hdGVhZGEiLCJEYXRlIiwiZmVjaGEiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaWQiLCJjbGllbnRlIiwiaW1wb3J0ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/linea-reporte.js\n"));

/***/ })

});