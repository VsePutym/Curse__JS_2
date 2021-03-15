/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/command */ \"./src/modules/command.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_formValid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/formValid */ \"./src/modules/formValid.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* eslint-disable no-undef */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable semi */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-useless-escape */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable strict */\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('7 april 2021 19:40:00');\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_command__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)(100);\n(0,_modules_formValid__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://curse__js_2/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcItem = document.querySelectorAll('.calc-item');\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcDay = document.querySelector('.calc-day');\n  var totalValue = document.getElementById('total');\n  var calcCount = document.querySelector('.calc-count');\n\n  var countSum = function countSum() {\n    var total = 0;\n    var countValue = 1;\n    var dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    } else {\n      total = 0;\n    }\n\n    totalValue.textContent = Math.floor(total);\n  };\n\n  calcBlock.addEventListener('change', function (e) {\n    var target = e.target;\n\n    if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {\n      countSum();\n    }\n  });\n  calcItem.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/\\D\\./ig, ''); //? Ввод только цифр\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/command.js":
/*!********************************!*\
  !*** ./src/modules/command.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar command = function command() {\n  var img = document.querySelectorAll('.command__photo');\n  img.forEach(function (item) {\n    var standartImg = item.src;\n    item.addEventListener('mouseenter', function (e) {\n      e.target.src = e.target.dataset.img;\n    });\n    item.addEventListener('mouseleave', function (e) {\n      e.target.src = standartImg;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (command);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/command.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable arrow-parens */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000;\n    var seconds = Math.floor(timeRemaining % 60);\n    var minutes = Math.floor(timeRemaining / 60 % 60);\n    var hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.hours < 10 && timer.hours >= 0) {\n      timer.hours = '0' + timer.hours;\n    }\n\n    if (timer.minutes < 10 && timer.minutes >= 0) {\n      timer.minutes = '0' + timer.minutes;\n    }\n\n    if (timer.seconds < 10 && timer.seconds >= 0) {\n      timer.seconds = '0' + timer.seconds;\n    }\n\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n\n    if (timer.timeRemaining <= 0) {\n      clearInterval(idInterval);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  var idInterval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/formValid.js":
/*!**********************************!*\
  !*** ./src/modules/formValid.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable no-useless-escape */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar formValid = function formValid() {\n  var name = document.querySelectorAll('.form-name');\n  var email = document.querySelectorAll('.form-email');\n  var phone = document.querySelectorAll('.form-phone');\n  var message = document.querySelector('.mess');\n  name.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яА-ЯёЁ\\s\\-]/g, '');\n    });\n    item.addEventListener('blur', function () {\n      // eslint-disable-next-line max-len\n      item.value = item.value.replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, function (x) {\n        return x.toLowerCase();\n      }).replace(/^[а-я]/g, function (x) {\n        return x.toUpperCase();\n      }).trim();\n    });\n  });\n  email.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^a-zA-Z@_.!`*'\\-]/g, '').replace(/^[@_.!`*']/g, '');\n    });\n    item.addEventListener('bulr', function () {\n      // eslint-disable-next-line max-len\n      item.value = item.value.replace(/[^a-zA-Z@_.!`*'\\-]/g, '').replace(/\\s+/g, ' ').replace(/\\-+/g, '-').trim();\n    });\n  });\n  phone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/([^0-9()\\-\\+])/g, '').replace(/(^[\\(\\)])/g, '').trim();\n    });\n    item.addEventListener('blur', function () {\n      // eslint-disable-next-line max-len\n      item.value = item.value.replace(/^\\+?[78]+[\\-\\(]?(\\d{3})[\\-\\)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})$/gm, '+7($1)$2-$3-$4').trim();\n    });\n  });\n  message.addEventListener('input', function () {\n    message.value = message.value.replace(/[^а-яА-ЯёЁ\\s\\-\\,\\.\\!\\0-9]/g, '');\n  });\n  message.addEventListener('blur', function () {\n    // eslint-disable-next-line max-len\n    message.value = message.value.replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, function (x) {\n      return x.toLowerCase();\n    }).replace(/^[а-я]/g, function (x) {\n      return x.toUpperCase();\n    }).trim();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValid);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/formValid.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...';\n  var loadMessage = 'Загрузка...';\n  var successMessage = 'Спасибо! Мы скоро с вами свяжемся';\n  var form = document.querySelectorAll('form[name=\"user_form\"]');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 2rem;\\n    color: #fff;\";\n  form.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      item.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(item);\n      postData(formData).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200.');\n        }\n\n        console.log(response);\n        statusMessage.textContent = successMessage;\n        var inputs = document.querySelectorAll('input');\n        inputs.forEach(function (item) {\n          item.value = '';\n        });\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n    });\n  }); // eslint-disable-next-line arrow-body-style\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: formData\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item');\n  var slider = document.querySelector('.portfolio-content');\n  var portfolio = document.querySelector('#portfolio');\n  var ul = portfolio.querySelector('.portfolio-dots');\n\n  var AddDots = /*#__PURE__*/function () {\n    function AddDots(elem, newClass) {\n      _classCallCheck(this, AddDots);\n\n      this.elem = elem;\n      this.newClass = newClass;\n    }\n\n    _createClass(AddDots, [{\n      key: \"addNewClass\",\n      value: function addNewClass() {\n        this.elem = document.createElement('li');\n        this.elem.classList.add('dot');\n        ul.append(this.elem);\n      }\n    }]);\n\n    return AddDots;\n  }();\n\n  var appData = new AddDots();\n  slide.forEach(function (item) {\n    if (item) {\n      appData.addNewClass();\n    }\n  });\n  var dot = document.querySelectorAll('.dot');\n  dot[0].classList.add('dot-active');\n  var currentSlide = 0; //?  это номер слайда\n\n  var interval;\n\n  var prevSlide = function prevSlide(elem, i, strClass) {\n    elem[i].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, i, strClass) {\n    elem[i].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    var dot = document.querySelectorAll('.dot');\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (e) {\n    //? Слушаем слайдер\n    var dot = document.querySelectorAll('.dot');\n    e.preventDefault();\n    var target = e.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      //? минусуем или плюсуем счётчик\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (e) {\n    if (e.target.matches('.portfolio-btn') || //? matches(если евент таргет является так-то классом)\n    e.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (e) {\n    if (e.target.matches('.portfolio-btn') || //? matches(если евент таргет является так-то классом)\n    e.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header');\n  var tab = tabHeader.querySelectorAll('.service-header-tab');\n  var tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n  document.addEventListener('click', function (e) {\n    if (!e.target.classList.contains('menu')) {\n      var targetMenu = e.target.closest('.menu');\n\n      if (targetMenu) {\n        menu.classList.add('active-menu');\n      }\n\n      if (e.target.classList.contains('close-btn')) {\n        var closeTarget = e.target.closest('.close-btn');\n\n        if (closeTarget) {\n          menu.classList.remove('active-menu');\n        }\n      }\n\n      if (!e.target.matches('ul>li')) {\n        var liTarget = e.target.closest('ul>li');\n\n        if (liTarget) {\n          menu.classList.remove('active-menu');\n        }\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-undef */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable indent */\n\n/* eslint-disable strict */\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup');\n  var popupContent = popup.querySelector('.popup-content');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var width = document.documentElement.clientWidth;\n  var count = 100;\n\n  if (width > 768) {\n    popupBtn.forEach(function (item) {\n      item.addEventListener('click', function () {\n        popup.style.display = 'block';\n        count = 100;\n        popupInterval = requestAnimationFrame(showPopup);\n      });\n    });\n  } else {\n    popupBtn.forEach(function (item) {\n      item.addEventListener('click', function () {\n        popup.style.display = 'block';\n      });\n    });\n  }\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n  var popupInterval;\n\n  var showPopup = function showPopup() {\n    popupInterval = requestAnimationFrame(showPopup);\n    count--;\n\n    if (count !== 10) {\n      popupContent.style.top = count + '%';\n    } else {\n      cancelAnimationFrame(popupInterval);\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/togglePopUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;