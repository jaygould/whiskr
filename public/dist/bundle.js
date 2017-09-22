/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************!*\
  !*** multi ./js/main.js ./sass/main.scss ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/main.js */1);
module.exports = __webpack_require__(/*! ./sass/main.scss */2);


/***/ }),
/* 1 */
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startup__ = __webpack_require__(/*! ./startup */ 6);\n\n\n//runs the animations\nObject(__WEBPACK_IMPORTED_MODULE_0__startup__[\"a\" /* startup */])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21haW4uanM/MWM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGFydHVwIH0gZnJvbSAnLi9zdGFydHVwJztcblxuLy9ydW5zIHRoZSBhbmltYXRpb25zXG5zdGFydHVwKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvbWFpbi5zY3NzP2UzZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Nhc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!***********************!*\
  !*** ./js/startup.js ***!
  \***********************/
/*! exports provided: startup */
/*! exports used: startup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards__ = __webpack_require__(/*! ./cards */ 7);\n\n\n//Todo: use startup to load images from DB?\n\nconst startup = () => {\n\tconst siteTitle = document.querySelector('.siteTitle');\n\tconst cards = document.getElementById('cardWrap');\n\tconst btnWrap = document.querySelector('.yesnoBtnWrap');\n\n\tconst setImgWrapHeight = () => {\n\t\tconst cards = document.getElementById('cardWrap');\n\t\tconst innerHeight = document.querySelector('.imgWrap').clientHeight;\n\t\tcards.style.height = innerHeight + 'px';\n\t};\n\n\tif (document.body.classList.contains('Home')) {\n\t\tObject(__WEBPACK_IMPORTED_MODULE_0__cards__[\"a\" /* randomRotateCards */])();\n\t\tcards.addEventListener(\n\t\t\t'transitionend',\n\t\t\t() => {\n\t\t\t\tsetImgWrapHeight();\n\t\t\t\tbtnWrap.classList.add('show');\n\t\t\t},\n\t\t\tfalse\n\t\t);\n\t\tsetTimeout(() => {\n\t\t\tsiteTitle.classList.add('top');\n\t\t}, 1000);\n\t\tsetTimeout(() => {\n\t\t\tcards.classList.add('show');\n\t\t}, 1200);\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = startup;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3N0YXJ0dXAuanM/NDUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb21Sb3RhdGVDYXJkcyB9IGZyb20gJy4vY2FyZHMnO1xuXG4vL1RvZG86IHVzZSBzdGFydHVwIHRvIGxvYWQgaW1hZ2VzIGZyb20gREI/XG5cbmV4cG9ydCBjb25zdCBzdGFydHVwID0gKCkgPT4ge1xuXHRjb25zdCBzaXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZVRpdGxlJyk7XG5cdGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRXcmFwJyk7XG5cdGNvbnN0IGJ0bldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVzbm9CdG5XcmFwJyk7XG5cblx0Y29uc3Qgc2V0SW1nV3JhcEhlaWdodCA9ICgpID0+IHtcblx0XHRjb25zdCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkV3JhcCcpO1xuXHRcdGNvbnN0IGlubmVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ1dyYXAnKS5jbGllbnRIZWlnaHQ7XG5cdFx0Y2FyZHMuc3R5bGUuaGVpZ2h0ID0gaW5uZXJIZWlnaHQgKyAncHgnO1xuXHR9O1xuXG5cdGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnSG9tZScpKSB7XG5cdFx0cmFuZG9tUm90YXRlQ2FyZHMoKTtcblx0XHRjYXJkcy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J3RyYW5zaXRpb25lbmQnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRzZXRJbWdXcmFwSGVpZ2h0KCk7XG5cdFx0XHRcdGJ0bldyYXAuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHRcdFx0fSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNpdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCd0b3AnKTtcblx0XHR9LCAxMDAwKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNhcmRzLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHR9LCAxMjAwKTtcblx0fVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvc3RhcnR1cC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************!*\
  !*** ./js/cards.js ***!
  \*********************/
/*! exports provided: randomRotateCards */
/*! exports used: randomRotateCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const randomRotateCards = () => {\n\tconst cards = document.getElementsByClassName('card');\n\tfor (var i = 0; i < cards.length; i++) {\n\t\tlet deg = Math.random() * (10 - -10) + -10;\n\t\tcards[i].style.transform = `rotate(${deg}deg)`;\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = randomRotateCards;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2NhcmRzLmpzPzUxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJhbmRvbVJvdGF0ZUNhcmRzID0gKCkgPT4ge1xuXHRjb25zdCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBkZWcgPSBNYXRoLnJhbmRvbSgpICogKDEwIC0gLTEwKSArIC0xMDtcblx0XHRjYXJkc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnfWRlZylgO1xuXHR9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);