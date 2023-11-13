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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/ndraey/dwarfrun/src/js/canvas.js: Unexpected token (326:0)\n\n\u001b[0m \u001b[90m 324 |\u001b[39m         \u001b[36mnew\u001b[39m \u001b[33mSpike\u001b[39m(\u001b[35m2500\u001b[39m\u001b[33m,\u001b[39m cumvas\u001b[33m.\u001b[39mheight \u001b[33m-\u001b[39m \u001b[35m140\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 325 |\u001b[39m         \u001b[36mnew\u001b[39m \u001b[33mSpike\u001b[39m(\u001b[35m2600\u001b[39m\u001b[33m,\u001b[39m cumvas\u001b[33m.\u001b[39mheight \u001b[33m-\u001b[39m \u001b[35m140\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 326 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 327 |\u001b[39m         \u001b[36mnew\u001b[39m \u001b[33mSpike\u001b[39m(\u001b[35m2700\u001b[39m\u001b[33m,\u001b[39m cumvas\u001b[33m.\u001b[39mheight \u001b[33m-\u001b[39m \u001b[35m140\u001b[39m)]\u001b[0m\n\u001b[0m \u001b[90m 328 |\u001b[39m     \u001b[0m\n\u001b[0m \u001b[90m 329 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n    at constructor (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:348:19)\n    at Parser.raise (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:3202:19)\n    at Parser.unexpected (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:3232:16)\n    at Parser.parseExprAtom (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11233:16)\n    at Parser.parseExprSubscripts (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10839:23)\n    at Parser.parseUpdate (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10822:21)\n    at Parser.parseMaybeUnary (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10798:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10636:61)\n    at Parser.parseExprOps (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10641:23)\n    at Parser.parseMaybeConditional (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10618:23)\n    at Parser.parseMaybeAssign (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10579:21)\n    at /home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10549:39\n    at Parser.allowInAnd (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12229:12)\n    at Parser.parseMaybeAssignAllowIn (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10549:17)\n    at Parser.parseExprListItem (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11981:18)\n    at Parser.parseExprList (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11953:22)\n    at Parser.parseArrayLike (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11853:26)\n    at Parser.parseExprAtom (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11122:23)\n    at Parser.parseExprSubscripts (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10839:23)\n    at Parser.parseUpdate (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10822:21)\n    at Parser.parseMaybeUnary (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10798:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10636:61)\n    at Parser.parseExprOps (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10641:23)\n    at Parser.parseMaybeConditional (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10618:23)\n    at Parser.parseMaybeAssign (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10579:21)\n    at Parser.parseMaybeAssign (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10605:25)\n    at Parser.parseExpressionBase (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10533:23)\n    at /home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10529:39\n    at Parser.allowInAnd (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12224:16)\n    at Parser.parseExpression (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:10529:17)\n    at Parser.parseStatementContent (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12682:23)\n    at Parser.parseStatementLike (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12533:17)\n    at Parser.parseStatementListItem (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12513:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13134:61)\n    at Parser.parseBlockBody (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13127:10)\n    at Parser.parseBlock (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13115:10)\n    at Parser.parseFunctionBody (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11896:24)\n    at Parser.parseFunctionBodyAndFinish (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:11882:10)\n    at /home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13263:12\n    at Parser.withSmartMixTopicForbiddingContext (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12206:14)\n    at Parser.parseFunction (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13262:10)\n    at Parser.parseFunctionStatement (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12929:17)\n    at Parser.parseStatementContent (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12559:21)\n    at Parser.parseStatementLike (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12533:17)\n    at Parser.parseModuleItem (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12510:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13134:36)\n    at Parser.parseBlockBody (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:13127:10)\n    at Parser.parseProgram (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12409:10)\n    at Parser.parseTopLevel (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:12399:25)\n    at Parser.parse (/home/ndraey/dwarfrun/node_modules/@babel/parser/lib/index.js:14295:10)");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map