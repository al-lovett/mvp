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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\laragon\\www\\mvp\\resources\\js\\app.js: Unexpected token, expected \",\" (42:8)\n\n  40 |         method: 'post',\n  41 |         url: '/add'\n> 42 |         data: service,\n     |         ^\n  43 |       }).then(function(response){\n  44 |         var_dump($methods);\n  45 |         die();\n    at Parser.raise (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:6930:17)\n    at Parser.unexpected (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8323:16)\n    at Parser.expect (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8309:28)\n    at Parser.parseObj (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9894:14)\n    at Parser.parseExprAtom (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9525:28)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9165:23)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9145:21)\n    at Parser.parseExprOps (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9011:23)\n    at Parser.parseMaybeConditional (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8984:23)\n    at Parser.parseMaybeAssign (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8930:21)\n    at Parser.parseExprListItem (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10252:18)\n    at Parser.parseCallExpressionArguments (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9362:22)\n    at Parser.parseSubscript (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9270:29)\n    at Parser.parseSubscripts (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9186:19)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9175:17)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9145:21)\n    at Parser.parseExprOps (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9011:23)\n    at Parser.parseMaybeConditional (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8984:23)\n    at Parser.parseMaybeAssign (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8930:21)\n    at Parser.parseExpression (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:8880:23)\n    at Parser.parseStatementContent (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10740:23)\n    at Parser.parseStatement (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10611:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:11187:25)\n    at Parser.parseBlockBody (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:11174:10)\n    at Parser.parseBlock (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:11158:10)\n    at Parser.parseFunctionBody (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10177:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10147:10)\n    at Parser.parseMethod (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10101:10)\n    at Parser.parseObjectMethod (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10017:19)\n    at Parser.parseObjPropValue (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:10059:23)\n    at Parser.parseObjectMember (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9983:10)\n    at Parser.parseObj (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9903:25)\n    at Parser.parseExprAtom (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9525:28)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9165:23)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9145:21)\n    at Parser.parseExprOps (C:\\laragon\\www\\mvp\\node_modules\\@babel\\parser\\lib\\index.js:9011:23)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\mvp\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\mvp\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });