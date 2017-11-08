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
module.exports = __webpack_require__(/*! ./sass/main.scss */7);


/***/ }),
/* 1 */
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startup__ = __webpack_require__(/*! ./startup */ 2);\n\n\n//runs the animations\nObject(__WEBPACK_IMPORTED_MODULE_0__startup__[\"a\" /* startup */])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21haW4uanM/MWM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGFydHVwIH0gZnJvbSAnLi9zdGFydHVwJztcblxuLy9ydW5zIHRoZSBhbmltYXRpb25zXG5zdGFydHVwKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./js/startup.js ***!
  \***********************/
/*! exports provided: startup */
/*! exports used: startup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards__ = __webpack_require__(/*! ./cards */ 3);\n\n\nconst startup = () => {\n\tconst siteTitle = document.querySelector('.siteTitle');\n\tconst cards = document.getElementById('cardWrap');\n\tconst btnWrap = document.querySelector('.yesnoBtnWrap');\n\n\tconst setImgWrapHeight = () => {\n\t\tconst cards = document.getElementById('cardWrap');\n\n\t\tconst innerHeight = document.querySelector('.imgWrap')\n\t\t\t? document.querySelector('.imgWrap').clientHeight\n\t\t\t: 0;\n\t\tcards.style.height = innerHeight + 'px';\n\t};\n\n\tif (document.body.classList.contains('Home')) {\n\t\tObject(__WEBPACK_IMPORTED_MODULE_0__cards__[\"a\" /* loadInitialCards */])().then(() => {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__cards__[\"b\" /* randomRotateCards */])();\n\t\t\tsetImgWrapHeight();\n\t\t\tbtnWrap.classList.add('show');\n\t\t\tcards.classList.add('show');\n\t\t});\n\t\t//animate in the elements - used to listen to the opacity event but now the promise only returns when cards are loaded anyway\n\t\t// cards.addEventListener(\n\t\t// \t'transitionend',\n\t\t// \te => {\n\t\t// \t\tconsole.log(e);\n\t\t// \t\tsetImgWrapHeight();\n\t\t//\t\tbtnWrap.classList.add('show');\n\t\t// \t},\n\t\t// \tfalse\n\t\t// );\n\t\tsetTimeout(() => {\n\t\t\tsiteTitle.classList.add('top');\n\t\t}, 1000);\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = startup;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3N0YXJ0dXAuanM/NDUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkSW5pdGlhbENhcmRzLCByYW5kb21Sb3RhdGVDYXJkcyB9IGZyb20gJy4vY2FyZHMnO1xuXG5leHBvcnQgY29uc3Qgc3RhcnR1cCA9ICgpID0+IHtcblx0Y29uc3Qgc2l0ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVUaXRsZScpO1xuXHRjb25zdCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkV3JhcCcpO1xuXHRjb25zdCBidG5XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllc25vQnRuV3JhcCcpO1xuXG5cdGNvbnN0IHNldEltZ1dyYXBIZWlnaHQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFdyYXAnKTtcblxuXHRcdGNvbnN0IGlubmVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ1dyYXAnKVxuXHRcdFx0PyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nV3JhcCcpLmNsaWVudEhlaWdodFxuXHRcdFx0OiAwO1xuXHRcdGNhcmRzLnN0eWxlLmhlaWdodCA9IGlubmVySGVpZ2h0ICsgJ3B4Jztcblx0fTtcblxuXHRpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ0hvbWUnKSkge1xuXHRcdGxvYWRJbml0aWFsQ2FyZHMoKS50aGVuKCgpID0+IHtcblx0XHRcdHJhbmRvbVJvdGF0ZUNhcmRzKCk7XG5cdFx0XHRzZXRJbWdXcmFwSGVpZ2h0KCk7XG5cdFx0XHRidG5XcmFwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdGNhcmRzLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHR9KTtcblx0XHQvL2FuaW1hdGUgaW4gdGhlIGVsZW1lbnRzIC0gdXNlZCB0byBsaXN0ZW4gdG8gdGhlIG9wYWNpdHkgZXZlbnQgYnV0IG5vdyB0aGUgcHJvbWlzZSBvbmx5IHJldHVybnMgd2hlbiBjYXJkcyBhcmUgbG9hZGVkIGFueXdheVxuXHRcdC8vIGNhcmRzLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0Ly8gXHQndHJhbnNpdGlvbmVuZCcsXG5cdFx0Ly8gXHRlID0+IHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Ly8gXHRcdHNldEltZ1dyYXBIZWlnaHQoKTtcblx0XHQvL1x0XHRidG5XcmFwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHQvLyBcdH0sXG5cdFx0Ly8gXHRmYWxzZVxuXHRcdC8vICk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9wJyk7XG5cdFx0fSwgMTAwMCk7XG5cdH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL3N0YXJ0dXAuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************!*\
  !*** ./js/cards.js ***!
  \*********************/
/*! exports provided: loadInitialCards, randomRotateCards */
/*! exports used: loadInitialCards, randomRotateCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(/*! ./api */ 4);\n\n\n//keep global array of all cards that are being displayed in this session\nlet cardAccum = [];\n\nconst mainWrap = document.getElementsByClassName('mainWrap')[0];\nconst cardWrap = document.getElementById('cardWrap');\nconst yesnoBtn = document.querySelectorAll('.yesno');\n\nyesnoBtn.forEach(btn => {\n\tbtn.addEventListener('click', e => {\n\t\te.target.parentNode.classList.contains('yes') ? _clickYes() : _clickNo();\n\t});\n});\n\nconst _clickYes = () => {\n\tlet topCard = cardWrap.lastChild;\n\t__WEBPACK_IMPORTED_MODULE_0__api__[\"a\" /* default */].markCard(\n\t\ttopCard.getElementsByClassName('card')[0].getAttribute('data-id'),\n\t\t'yes'\n\t);\n\ttopCard.classList.add('spinOutYes');\n\tpopCard(topCard, 'yes');\n};\nconst _clickNo = () => {\n\tlet topCard = cardWrap.lastChild;\n\t__WEBPACK_IMPORTED_MODULE_0__api__[\"a\" /* default */].markCard(\n\t\ttopCard.getElementsByClassName('card')[0].getAttribute('data-id'),\n\t\t'no'\n\t);\n\ttopCard.classList.add('spinOutNo');\n\tpopCard(topCard, 'no');\n};\n\nconst popCard = (topCard, yesorno) => {\n\tapplyVoteCount(\n\t\ttopCard.getElementsByClassName('card')[0].getAttribute('data-votecount'),\n\t\tyesorno\n\t);\n\ttopCard.addEventListener('transitionend', e => {\n\t\tif (e.propertyName != 'transform') return;\n\t\tcardWrap.removeChild(topCard);\n\t\t_getNewCard();\n\t});\n};\nconst applyVoteCount = (voteCount, yesorno) => {\n\tlet voteString = yesorno == 'yes' ? 'yays' : 'nays';\n\tmainWrap.getElementsByClassName(\n\t\t'voteCount'\n\t)[0].innerHTML = `<span class=\"voteInner ${yesorno}\">${voteCount} ${voteString}</span>`;\n\tlet voteInner = mainWrap.getElementsByClassName('voteInner')[0];\n\tsetTimeout(() => {\n\t\tvoteInner.classList.add('popVote');\n\t\tvoteInner.addEventListener('transitionend', e => {\n\t\t\t//no need to hide the count anymore?\n\t\t});\n\t}, 100);\n};\n\nconst _getNewCard = () => {\n\t__WEBPACK_IMPORTED_MODULE_0__api__[\"a\" /* default */].getNextCard(cardAccum).then(response => {\n\t\tif (response.refresh) {\n\t\t\t//reached end of randomised images - empty local accum array and start again\n\t\t\tcardAccum = [];\n\t\t\t_getNewCard();\n\t\t\treturn;\n\t\t}\n\t\t_insertCard(response);\n\t\tlet newCard = cardWrap.firstChild.querySelector('.card');\n\t\t_randomRotateCard(newCard);\n\t});\n};\n\nconst _randomRotateCard = element => {\n\tlet deg = Math.random() * (4 - -4) + -4;\n\telement.style.transform = `rotate(${deg}deg)`;\n};\n\nconst _insertCard = (cardObj, isInitialLoad) => {\n\tcardWrap.insertAdjacentHTML(\n\t\t'afterbegin',\n\t\t`<div class=\"imgWrap\"><img class=\"card\" data-votecount=\"${cardObj.voteCount}\" data-id=\"${cardObj._id}\" src=\"${cardObj.url}\"></div>`\n\t);\n\t//if it's the first load, the cardaccum array is already populated, so only do it here on each new card insert\n\tif (isInitialLoad) return;\n\tcardAccum.push(cardObj);\n};\n\nconst loadInitialCards = () => {\n\treturn new Promise(resolve => {\n\t\t__WEBPACK_IMPORTED_MODULE_0__api__[\"a\" /* default */].getFirstCards().then(response => {\n\t\t\t//add to the global accum array with the initial loaded cards\n\t\t\t!cardAccum\n\t\t\t\t? (cardAccum = [cardAccum, ...response])\n\t\t\t\t: (cardAccum = [...response]);\n\n\t\t\t//loading delay to test SVG spinner\n\t\t\tsetTimeout(() => {\n\t\t\t\tmainWrap.querySelector('.spinner').style.display = 'none';\n\t\t\t\tresponse.forEach(card => {\n\t\t\t\t\t_insertCard(card, true);\n\t\t\t\t});\n\t\t\t\tresolve();\n\t\t\t}, 2000);\n\t\t});\n\t});\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = loadInitialCards;\n\nconst randomRotateCards = () => {\n\tconst cards = document.getElementsByClassName('card');\n\tfor (var i = 0; i < cards.length; i++) {\n\t\tlet deg = Math.random() * (4 - -4) + -4;\n\t\tcards[i].style.transform = `rotate(${deg}deg)`;\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = randomRotateCards;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2NhcmRzLmpzPzUxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRzQXBpIGZyb20gJy4vYXBpJztcblxuLy9rZWVwIGdsb2JhbCBhcnJheSBvZiBhbGwgY2FyZHMgdGhhdCBhcmUgYmVpbmcgZGlzcGxheWVkIGluIHRoaXMgc2Vzc2lvblxubGV0IGNhcmRBY2N1bSA9IFtdO1xuXG5jb25zdCBtYWluV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5XcmFwJylbMF07XG5jb25zdCBjYXJkV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkV3JhcCcpO1xuY29uc3QgeWVzbm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVzbm8nKTtcblxueWVzbm9CdG4uZm9yRWFjaChidG4gPT4ge1xuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygneWVzJykgPyBfY2xpY2tZZXMoKSA6IF9jbGlja05vKCk7XG5cdH0pO1xufSk7XG5cbmNvbnN0IF9jbGlja1llcyA9ICgpID0+IHtcblx0bGV0IHRvcENhcmQgPSBjYXJkV3JhcC5sYXN0Q2hpbGQ7XG5cdENhcmRzQXBpLm1hcmtDYXJkKFxuXHRcdHRvcENhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuXHRcdCd5ZXMnXG5cdCk7XG5cdHRvcENhcmQuY2xhc3NMaXN0LmFkZCgnc3Bpbk91dFllcycpO1xuXHRwb3BDYXJkKHRvcENhcmQsICd5ZXMnKTtcbn07XG5jb25zdCBfY2xpY2tObyA9ICgpID0+IHtcblx0bGV0IHRvcENhcmQgPSBjYXJkV3JhcC5sYXN0Q2hpbGQ7XG5cdENhcmRzQXBpLm1hcmtDYXJkKFxuXHRcdHRvcENhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuXHRcdCdubydcblx0KTtcblx0dG9wQ2FyZC5jbGFzc0xpc3QuYWRkKCdzcGluT3V0Tm8nKTtcblx0cG9wQ2FyZCh0b3BDYXJkLCAnbm8nKTtcbn07XG5cbmNvbnN0IHBvcENhcmQgPSAodG9wQ2FyZCwgeWVzb3JubykgPT4ge1xuXHRhcHBseVZvdGVDb3VudChcblx0XHR0b3BDYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdm90ZWNvdW50JyksXG5cdFx0eWVzb3Jub1xuXHQpO1xuXHR0b3BDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlID0+IHtcblx0XHRpZiAoZS5wcm9wZXJ0eU5hbWUgIT0gJ3RyYW5zZm9ybScpIHJldHVybjtcblx0XHRjYXJkV3JhcC5yZW1vdmVDaGlsZCh0b3BDYXJkKTtcblx0XHRfZ2V0TmV3Q2FyZCgpO1xuXHR9KTtcbn07XG5jb25zdCBhcHBseVZvdGVDb3VudCA9ICh2b3RlQ291bnQsIHllc29ybm8pID0+IHtcblx0bGV0IHZvdGVTdHJpbmcgPSB5ZXNvcm5vID09ICd5ZXMnID8gJ3lheXMnIDogJ25heXMnO1xuXHRtYWluV3JhcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdCd2b3RlQ291bnQnXG5cdClbMF0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidm90ZUlubmVyICR7eWVzb3Jub31cIj4ke3ZvdGVDb3VudH0gJHt2b3RlU3RyaW5nfTwvc3Bhbj5gO1xuXHRsZXQgdm90ZUlubmVyID0gbWFpbldyYXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZUlubmVyJylbMF07XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHZvdGVJbm5lci5jbGFzc0xpc3QuYWRkKCdwb3BWb3RlJyk7XG5cdFx0dm90ZUlubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlID0+IHtcblx0XHRcdC8vbm8gbmVlZCB0byBoaWRlIHRoZSBjb3VudCBhbnltb3JlP1xuXHRcdH0pO1xuXHR9LCAxMDApO1xufTtcblxuY29uc3QgX2dldE5ld0NhcmQgPSAoKSA9PiB7XG5cdENhcmRzQXBpLmdldE5leHRDYXJkKGNhcmRBY2N1bSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0aWYgKHJlc3BvbnNlLnJlZnJlc2gpIHtcblx0XHRcdC8vcmVhY2hlZCBlbmQgb2YgcmFuZG9taXNlZCBpbWFnZXMgLSBlbXB0eSBsb2NhbCBhY2N1bSBhcnJheSBhbmQgc3RhcnQgYWdhaW5cblx0XHRcdGNhcmRBY2N1bSA9IFtdO1xuXHRcdFx0X2dldE5ld0NhcmQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0X2luc2VydENhcmQocmVzcG9uc2UpO1xuXHRcdGxldCBuZXdDYXJkID0gY2FyZFdyYXAuZmlyc3RDaGlsZC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xuXHRcdF9yYW5kb21Sb3RhdGVDYXJkKG5ld0NhcmQpO1xuXHR9KTtcbn07XG5cbmNvbnN0IF9yYW5kb21Sb3RhdGVDYXJkID0gZWxlbWVudCA9PiB7XG5cdGxldCBkZWcgPSBNYXRoLnJhbmRvbSgpICogKDQgLSAtNCkgKyAtNDtcblx0ZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnfWRlZylgO1xufTtcblxuY29uc3QgX2luc2VydENhcmQgPSAoY2FyZE9iaiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuXHRjYXJkV3JhcC5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0J2FmdGVyYmVnaW4nLFxuXHRcdGA8ZGl2IGNsYXNzPVwiaW1nV3JhcFwiPjxpbWcgY2xhc3M9XCJjYXJkXCIgZGF0YS12b3RlY291bnQ9XCIke2NhcmRPYmoudm90ZUNvdW50fVwiIGRhdGEtaWQ9XCIke2NhcmRPYmouX2lkfVwiIHNyYz1cIiR7Y2FyZE9iai51cmx9XCI+PC9kaXY+YFxuXHQpO1xuXHQvL2lmIGl0J3MgdGhlIGZpcnN0IGxvYWQsIHRoZSBjYXJkYWNjdW0gYXJyYXkgaXMgYWxyZWFkeSBwb3B1bGF0ZWQsIHNvIG9ubHkgZG8gaXQgaGVyZSBvbiBlYWNoIG5ldyBjYXJkIGluc2VydFxuXHRpZiAoaXNJbml0aWFsTG9hZCkgcmV0dXJuO1xuXHRjYXJkQWNjdW0ucHVzaChjYXJkT2JqKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkSW5pdGlhbENhcmRzID0gKCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Q2FyZHNBcGkuZ2V0Rmlyc3RDYXJkcygpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0Ly9hZGQgdG8gdGhlIGdsb2JhbCBhY2N1bSBhcnJheSB3aXRoIHRoZSBpbml0aWFsIGxvYWRlZCBjYXJkc1xuXHRcdFx0IWNhcmRBY2N1bVxuXHRcdFx0XHQ/IChjYXJkQWNjdW0gPSBbY2FyZEFjY3VtLCAuLi5yZXNwb25zZV0pXG5cdFx0XHRcdDogKGNhcmRBY2N1bSA9IFsuLi5yZXNwb25zZV0pO1xuXG5cdFx0XHQvL2xvYWRpbmcgZGVsYXkgdG8gdGVzdCBTVkcgc3Bpbm5lclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1haW5XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0cmVzcG9uc2UuZm9yRWFjaChjYXJkID0+IHtcblx0XHRcdFx0XHRfaW5zZXJ0Q2FyZChjYXJkLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0sIDIwMDApO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5leHBvcnQgY29uc3QgcmFuZG9tUm90YXRlQ2FyZHMgPSAoKSA9PiB7XG5cdGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGRlZyA9IE1hdGgucmFuZG9tKCkgKiAoNCAtIC00KSArIC00O1xuXHRcdGNhcmRzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtkZWd9ZGVnKWA7XG5cdH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2NhcmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(/*! ../../config */ 5);\n\n\nclass CardsApi {\n\tstatic getFirstCards() {\n\t\treturn fetch('/api/card/getFirstCards', {\n\t\t\tmethod: 'POST',\n\t\t\t//body: JSON.stringify({ cardid: cardid, yesorno: yesorno }),\n\t\t\theaders: __WEBPACK_IMPORTED_MODULE_0__config__[\"a\" /* default */].configHeaders\n\t\t})\n\t\t\t.then(response => {\n\t\t\t\treturn response.json();\n\t\t\t})\n\t\t\t.catch(error => {\n\t\t\t\tthrow error;\n\t\t\t});\n\t}\n\tstatic getNextCard(cardAccum) {\n\t\treturn fetch('/api/card/getNextCard', {\n\t\t\tmethod: 'POST',\n\t\t\tbody: JSON.stringify({ cardAccum: cardAccum }),\n\t\t\theaders: __WEBPACK_IMPORTED_MODULE_0__config__[\"a\" /* default */].configHeaders\n\t\t})\n\t\t\t.then(response => {\n\t\t\t\treturn response.json();\n\t\t\t})\n\t\t\t.catch(error => {\n\t\t\t\tthrow error;\n\t\t\t});\n\t}\n\tstatic markCard(cardid, yesorno) {\n\t\treturn fetch('/api/card/markCard', {\n\t\t\tmethod: 'POST',\n\t\t\tbody: JSON.stringify({ cardid: cardid, yesorno: yesorno }),\n\t\t\theaders: __WEBPACK_IMPORTED_MODULE_0__config__[\"a\" /* default */].configHeaders\n\t\t})\n\t\t\t.then(response => {\n\t\t\t\treturn response.json();\n\t\t\t})\n\t\t\t.catch(error => {\n\t\t\t\tthrow error;\n\t\t\t});\n\t}\n}\n/* harmony default export */ __webpack_exports__[\"a\"] = (CardsApi);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwaS5qcz8yNTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQ2FyZHNBcGkge1xuXHRzdGF0aWMgZ2V0Rmlyc3RDYXJkcygpIHtcblx0XHRyZXR1cm4gZmV0Y2goJy9hcGkvY2FyZC9nZXRGaXJzdENhcmRzJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHQvL2JvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FyZGlkOiBjYXJkaWQsIHllc29ybm86IHllc29ybm8gfSksXG5cdFx0XHRoZWFkZXJzOiBjb25maWcuY29uZmlnSGVhZGVyc1xuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0fVxuXHRzdGF0aWMgZ2V0TmV4dENhcmQoY2FyZEFjY3VtKSB7XG5cdFx0cmV0dXJuIGZldGNoKCcvYXBpL2NhcmQvZ2V0TmV4dENhcmQnLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FyZEFjY3VtOiBjYXJkQWNjdW0gfSksXG5cdFx0XHRoZWFkZXJzOiBjb25maWcuY29uZmlnSGVhZGVyc1xuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0fVxuXHRzdGF0aWMgbWFya0NhcmQoY2FyZGlkLCB5ZXNvcm5vKSB7XG5cdFx0cmV0dXJuIGZldGNoKCcvYXBpL2NhcmQvbWFya0NhcmQnLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FyZGlkOiBjYXJkaWQsIHllc29ybm86IHllc29ybm8gfSksXG5cdFx0XHRoZWFkZXJzOiBjb25maWcuY29uZmlnSGVhZGVyc1xuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNBcGk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************!*\
  !*** ../config.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/* harmony default export */ __webpack_exports__[\"a\"] = ({\n\tinitialCardCount: 3,\n\turl: process.env.API_URL,\n\tconfigHeaders: {\n\t\tAccept: 'application/json',\n\t\t'Content-Type': 'application/json'\n\t}\n});\n\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./node_modules/process/browser.js */ 6)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb25maWcuanM/MjMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdGluaXRpYWxDYXJkQ291bnQ6IDMsXG5cdHVybDogcHJvY2Vzcy5lbnYuQVBJX1VSTCxcblx0Y29uZmlnSGVhZGVyczoge1xuXHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzP2E0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvbWFpbi5zY3NzP2UzZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Nhc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);