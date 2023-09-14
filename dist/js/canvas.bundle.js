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

/***/ "./src/image/BG1.png":
/*!***************************!*\
  !*** ./src/image/BG1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "822c5ec560471ff7d172bcaf2e99ebd5.png");

/***/ }),

/***/ "./src/image/platform.png":
/*!********************************!*\
  !*** ./src/image/platform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c7d5c9ed44f78dc573b95eab26f6e08d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/platform.png */ "./src/image/platform.png");
/* harmony import */ var _image_BG1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/BG1.png */ "./src/image/BG1.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var cumvas = document.querySelector('canvas');
var ctx = cumvas.getContext('2d');
var gravity = 0.5;
cumvas.width = window.innerWidth - 50;
cumvas.height = window.innerHeight - 100;
console.log(screen);

//классы всех объектов от игрока до платформ
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.pos = {
      x: 100,
      y: 100
    };
    this.vel = {
      x: 0,
      y: 1
    };
    this.width = 100;
    this.height = 100;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.pos.y += this.vel.y;
      this.pos.x += this.vel.x;
      this.draw();
      if (this.pos.y + this.height + this.vel.y <= cumvas.height) {
        this.vel.y += gravity;
      } else {
        this.vel.y = 0;
      }
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(x, y) {
    _classCallCheck(this, Platform);
    this.pos = {
      x: x,
      y: y
    };
    this.image = PlatformImage;
    this.width = this.image.width;
    this.height = this.image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.pos.x, this.pos.y, this.image.width, this.image.height);
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return Platform;
}();
var GenObj = /*#__PURE__*/function () {
  function GenObj(x, y, image) {
    _classCallCheck(this, GenObj);
    this.pos = {
      x: x,
      y: y,
      image: backgr
    };
  }
  _createClass(GenObj, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.pos.image, this.pos.x, this.pos.y, cumvas.width, cumvas.height);
    }
  }]);
  return GenObj;
}();
function createImage(imgSrc) {
  var image = new Image();
  image.src = imgSrc;
  return image;
}
var PlatformImage = createImage(_image_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var backgr = createImage(_image_BG1_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var genobj = [new GenObj(-1, -1)];
var player = new Player();
var platform = [new Platform(-1, 750), new Platform(PlatformImage.width - 80, 750), new Platform(1200, 750)];
var keys = {
  rigth: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

//отсчет до босс комнаты
var scrolloff = 0;
//запуск loop
player.update();
function anim() {
  requestAnimationFrame(anim);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, cumvas.width, cumvas.height);
  genobj.forEach(function (genobj) {
    genobj.draw();
  });
  platform.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  // проверки управления, создание границ и не только
  if (keys.rigth.pressed && player.pos.x < 400) {
    player.vel.x = 5;
  } else if (keys.left.pressed && player.pos.x > 100) {
    player.vel.x = -5;
  } else player.vel.x = 0;
  if (keys.rigth.pressed) {
    platform.forEach(function (platform) {
      scrolloff += 5;
      platform.pos.x -= 10;
    });
  } else if (keys.left.pressed) {
    platform.forEach(function (platform) {
      scrolloff -= 5;
      platform.pos.x += 10;
    });
  }
  console.log(scrolloff);

  // проверка платформы
  platform.forEach(function (platform) {
    if (player.pos.y + player.height <= platform.pos.y && player.pos.y + player.height + player.vel.y >= platform.pos.y && player.pos.x + player.width >= platform.pos.x && player.pos.x <= platform.pos.x + platform.width) {
      player.vel.y = 0;
    }
  });
  // win moment
  if (scrolloff > 8000) {
    console.log('bosstime');
  }
}
anim();
addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;
  console.log(keyCode);
  switch (keyCode) {
    case 87:
      console.log('вверх');
      player.vel.y -= 10;
      break;
    case 83:
      console.log('вниз');
      break;
    case 65:
      console.log('влево');
      keys.left.pressed = true;
      break;
    case 68:
      console.log('вправо');
      keys.rigth.pressed = true;
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var keyCode = _ref2.keyCode;
  console.log(keyCode);
  switch (keyCode) {
    case 87:
      console.log('Вверх действие завершено');
      break;
    case 83:
      console.log('down end');
      break;
    case 65:
      console.log('left end');
      keys.left.pressed = false;
      break;
    case 68:
      console.log('right end');
      keys.rigth.pressed = false;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map