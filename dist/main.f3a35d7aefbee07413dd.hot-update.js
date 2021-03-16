/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecurse_js_2"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/command */ \"./src/modules/command.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_formValid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/formValid */ \"./src/modules/formValid.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* eslint-disable no-undef */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable semi */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-useless-escape */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable strict */\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('7 april 2021 19:40:00');\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_command__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)(100);\n(0,_modules_formValid__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://curse__js_2/./src/index.js?");

/***/ }),

/***/ "./src/modules/formValid.js":
/*!**********************************!*\
  !*** ./src/modules/formValid.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable no-useless-escape */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar formValid = function formValid() {\n  var name = document.querySelectorAll('.form-name');\n  var email = document.querySelectorAll('.form-email');\n  var phone = document.querySelectorAll('.form-phone');\n  var message = document.querySelector('.mess');\n  name.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яА-ЯёЁ\\s\\-]/g, '');\n    });\n    item.addEventListener('blur', function () {\n      // eslint-disable-next-line max-len\n      item.value = item.value.replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, function (x) {\n        return x.toLowerCase();\n      }).replace(/^[а-я]/g, function (x) {\n        return x.toUpperCase();\n      }).trim();\n\n      if (item.value.length <= 1) {\n        item.value = '';\n      }\n    });\n  });\n  email.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^a-zA-Z@_.!`*'\\-]/g, '').replace(/^[@_.!`*']/g, '');\n    });\n    item.addEventListener('bulr', function () {\n      // eslint-disable-next-line max-len\n      item.value = item.value.replace(/[^a-zA-Z@_.!`*'\\-]/g, '').replace(/\\s+/g, ' ').replace(/\\-+/g, '-').trim();\n    });\n    item.setAttribute('required', true);\n  });\n  phone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/([^7-8()\\-\\+])/g, '').replace(/(^[\\(\\)])/g, '').trim();\n    });\n    item.addEventListener('blur', function () {\n      // eslint-disable-next-line max-len\n      item.value = item.value.replace(/^\\+?[78]+[\\-\\(]?(\\d{3})[\\-\\)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})$/gm, '+7($1)$2-$3-$4').trim();\n    });\n  });\n  message.addEventListener('input', function () {\n    message.value = message.value.replace(/[^а-яА-ЯёЁ\\s\\-\\,\\.\\!\\0-9]/g, '');\n  });\n  message.addEventListener('blur', function () {\n    // eslint-disable-next-line max-len\n    message.value = message.value.replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, function (x) {\n      return x.toLowerCase();\n    }).replace(/^[а-я]/g, function (x) {\n      return x.toUpperCase();\n    }).trim();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/formValid.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a074c0434dea689415ea")
/******/ })();
/******/ 
/******/ }
);