webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/store */ "./stores/store.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
var _jsxFileName = "/Users/tyler/reactapp/youtube-geo/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = function App() {
  var isServer = false;
  var store = Object(_stores_store__WEBPACK_IMPORTED_MODULE_1__["initialiseStore"])(isServer);

  var add = function add(number) {
    if (store) {
      store.add(1);
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Total Count: ", store.total()), __jsx("button", {
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Add"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(App));

/***/ })

})
//# sourceMappingURL=index.js.51528c32398a33fc8804.hot-update.js.map