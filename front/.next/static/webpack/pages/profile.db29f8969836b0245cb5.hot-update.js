webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Applications/mampstack-7.4.8-0/apache2/htdocs/nodebird/front/components/LoginForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar LoginForm = function LoginForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      id = _useState[0],\n      setId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      passwordCheck = _useState3[0],\n      setPasswordCheck = _useState3[1];\n\n  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setId(e.target.value);\n  }, []);\n  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setPassword(e.target.value);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"user-id\",\n        children: \"\\uC544\\uC774\\uB514\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        name: \"user-id\",\n        value: id,\n        onChange: onChangeId,\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"user-password\",\n        children: \"\\uBE44\\uBC00\\uBC88\\uD638\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        name: \"user-id\",\n        value: password,\n        onChange: onChangePassword,\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(Button, {\n        type: \"primary\",\n        htmlFor: \"submit\",\n        loading: false,\n        children: \"\\uB85C\\uADF8\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/signup\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(Button, {\n            children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 42\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 39\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LoginForm, \"Las7aGKYbR3w5a9+unqoU4WNypY=\");\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDM0OCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJvbkNoYW5nZUlkIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxFQUFELENBRFI7QUFBQSxNQUNiQyxFQURhO0FBQUEsTUFDVEMsS0FEUzs7QUFBQSxtQkFFWUYsc0RBQVEsQ0FBQyxFQUFELENBRnBCO0FBQUEsTUFFYkcsUUFGYTtBQUFBLE1BRUhDLFdBRkc7O0FBQUEsbUJBR3NCSixzREFBUSxDQUFDLEVBQUQsQ0FIOUI7QUFBQSxNQUdiSyxhQUhhO0FBQUEsTUFHRUMsZ0JBSEY7O0FBS3BCLE1BQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDTixTQUFLLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDSCxHQUY2QixFQUUzQixFQUYyQixDQUE5QjtBQUlBLE1BQU1DLGdCQUFnQixHQUFHSix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUN4Q0wsZUFBVyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxzQkFDSSxxRUFBQyx5Q0FBRDtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsMENBQUQ7QUFBTyxZQUFJLEVBQUMsU0FBWjtBQUFzQixhQUFLLEVBQUVWLEVBQTdCO0FBQWlDLGdCQUFRLEVBQUVNLFVBQTNDO0FBQXVELGdCQUFRO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsMENBQUQ7QUFDSSxZQUFJLEVBQUMsU0FEVDtBQUVJLGFBQUssRUFBRUosUUFGWDtBQUdJLGdCQUFRLEVBQUVTLGdCQUhkO0FBSUksZ0JBQVE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFnQkk7QUFBQSw4QkFDSSxxRUFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZUFBTyxFQUFDLFFBQS9CO0FBQXdDLGVBQU8sRUFBRSxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUFzQjtBQUFBLGlDQUFHLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkosZUFvQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQXZDRDs7R0FBTWIsUzs7S0FBQUEsUztBQXlDU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCIgPuyVhOydtOuUlDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIiA+67mE67CA67KI7Zi4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCIgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbEZvcj1cInN1Ym1pdFwiIGxvYWRpbmc9e2ZhbHNlfSA+66Gc6re47J24PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiA+PGE+PEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj48L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})