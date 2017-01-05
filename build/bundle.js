/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _height = __webpack_require__(1);
	
	var _height2 = _interopRequireDefault(_height);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(2);
	
	var date = new Date();
	var day = date.getDay();
	
	var body = document.body;
	var h3 = document.querySelector('h3');
	var div = document.querySelector('div');
	var winHeight = (0, _height2.default)();
	
	var iFrameDimensions = 600;
	
	if (winHeight < 700) {
	  iFrameDimensions = 480;
	}
	
	if (day === 3) {
	  body.removeChild(h3);
	  document.querySelector('div').innerHTML = '<iframe src=\'https://vine.co/v/iM0HnpBebd0/embed/simple\' width=\'' + iFrameDimensions + '\' height=\'' + iFrameDimensions + '\' frameborder=\'0\'></iframe>';
	} else {
	  body.removeChild(div);
	  h3.textContent = 'No.';
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = height;
	function height() {
	  return window.innerHeight;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDZlZGY5MjAxNGI5ZGQxNWNhNGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDcENBOzs7Ozs7QUFGQSxxQkFBUSxDQUFSOztBQUlBLEtBQU0sT0FBTyxJQUFJLElBQUosRUFBUDtBQUNOLEtBQU0sTUFBTSxLQUFLLE1BQUwsRUFBTjs7QUFFTixLQUFNLE9BQU8sU0FBUyxJQUFUO0FBQ2IsS0FBTSxLQUFLLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFMO0FBQ04sS0FBTSxNQUFNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQ04sS0FBTSxZQUFZLHVCQUFaOztBQUVOLEtBQUksbUJBQW1CLEdBQW5COztBQUVKLEtBQUksWUFBWSxHQUFaLEVBQWlCO0FBQ25CLHNCQUFtQixHQUFuQixDQURtQjtFQUFyQjs7QUFJQSxLQUFJLFFBQVEsQ0FBUixFQUFXO0FBQ2IsUUFBSyxXQUFMLENBQWlCLEVBQWpCLEVBRGE7QUFFYixZQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsU0FBOUIsMkVBQTZHLG9DQUE2QixtREFBMUksQ0FGYTtFQUFmLE1BR087QUFDTCxRQUFLLFdBQUwsQ0FBaUIsR0FBakIsRUFESztBQUVMLE1BQUcsV0FBSCxHQUFpQixLQUFqQixDQUZLOzs7Ozs7Ozs7Ozs7bUJDckJpQjtBQUFULFVBQVMsTUFBVCxHQUFrQjtBQUMvQixVQUFPLE9BQU8sV0FBUCxDQUR3Qjs7Ozs7OztBQ0FqQywwQyIsImZpbGUiOiIvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0NmVkZjkyMDE0YjlkZDE1Y2E0ZlxuICoqLyIsInJlcXVpcmUoJy4uL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MnKTtcblxuaW1wb3J0IEhlaWdodCBmcm9tICcuL2hlaWdodC5qcyc7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBoMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG5jb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbmNvbnN0IHdpbkhlaWdodCA9IEhlaWdodCgpO1xuXG5sZXQgaUZyYW1lRGltZW5zaW9ucyA9IDYwMDtcblxuaWYgKHdpbkhlaWdodCA8IDcwMCkge1xuICBpRnJhbWVEaW1lbnNpb25zID0gNDgwO1xufVxuXG5pZiAoZGF5ID09PSAzKSB7XG4gIGJvZHkucmVtb3ZlQ2hpbGQoaDMpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9J2h0dHBzOi8vdmluZS5jby92L2lNMEhucEJlYmQwL2VtYmVkL3NpbXBsZScgd2lkdGg9JyR7aUZyYW1lRGltZW5zaW9uc30nIGhlaWdodD0nJHtpRnJhbWVEaW1lbnNpb25zfScgZnJhbWVib3JkZXI9JzAnPjwvaWZyYW1lPmA7XG59IGVsc2Uge1xuICBib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gIGgzLnRleHRDb250ZW50ID0gJ05vLic7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvbWFpbi5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9oZWlnaHQuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=