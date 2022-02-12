/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const columns = Array.from(\r\n  document.querySelectorAll(\".js-calendar-graph > svg > g > g\")\r\n).map((group) => Array.from(group.querySelectorAll(\"rect\")));\r\n\r\nconst img = new Image();\r\nimg.src = \"../bitcoin.jfif\";\r\nimg.onload = () => {\r\n  console.log(img.width);\r\n};\r\n\r\ncolumns.forEach((c, x) =>\r\n  c.forEach((rect, y) => (rect.style.fill = Color(interpolator(0.5)).hex()))\r\n);\r\n\n\n//# sourceURL=webpack://github-contribution-graph/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;