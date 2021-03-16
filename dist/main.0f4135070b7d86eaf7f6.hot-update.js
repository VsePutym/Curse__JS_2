/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecurse_js_2"]("main",{

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup');\n  var popupContent = popup.querySelector('.popup-content');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var width = document.documentElement.clientWidth;\n  var count = 100;\n\n  if (width > 768) {\n    popupBtn.forEach(function (item) {\n      item.addEventListener('click', function () {\n        popup.style.display = 'block';\n        count = 100; // popupContent.style.top = 100 + '%';\n\n        popupInterval = requestAnimationFrame(showPopup);\n      });\n    });\n  } else {\n    popupBtn.forEach(function (item) {\n      item.addEventListener('click', function () {\n        popup.style.display = 'block';\n      });\n    });\n  }\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n  var popupInterval;\n\n  var showPopup = function showPopup() {\n    popupInterval = requestAnimationFrame(showPopup);\n    count--;\n\n    if (count === 10) {\n      popupContent.style.top = count + '%';\n    } else {\n      cancelAnimationFrame(popupInterval);\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/togglePopUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d2c06970f645081e5b5c")
/******/ })();
/******/ 
/******/ }
);