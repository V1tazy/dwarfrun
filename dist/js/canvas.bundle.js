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

/***/ "./src/bgm.mp3":
/*!*********************!*\
  !*** ./src/bgm.mp3 ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "32fca1d4aeb3640ebbfdacb3a8a0dac0.mp3");

/***/ }),

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

/***/ "./src/image/beer.png":
/*!****************************!*\
  !*** ./src/image/beer.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4f597bcdb5f47f10f3c46bec8aaf5266.png");

/***/ }),

/***/ "./src/image/dwarf_right.png":
/*!***********************************!*\
  !*** ./src/image/dwarf_right.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1b85c1972c9d9b68a78b6f4494024252.png");

/***/ }),

/***/ "./src/image/dwarf_right1.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ed1a3c851d566b65f12e17eb9774ec2f.png");

/***/ }),

/***/ "./src/image/dwarf_right2.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8c89df473ea6d88dce6c25c235f75b16.png");

/***/ }),

/***/ "./src/image/dwarf_right3.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right3.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5769c60fc9d41270c3b0c66cce136c6.png");

/***/ }),

/***/ "./src/image/dwarf_right4.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right4.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bec227475dd7a17043df8eb85e97c1fe.png");

/***/ }),

/***/ "./src/image/dwarf_right5.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right5.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dc411adbb02fda73395ba46309c2d5d4.png");

/***/ }),

/***/ "./src/image/dwarf_right6.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right6.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "832573e38efa788c55653c58362a9a3f.png");

/***/ }),

/***/ "./src/image/dwarf_right7.png":
/*!************************************!*\
  !*** ./src/image/dwarf_right7.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "154cc5668d18e5de3eb3f6c9bcfdbe39.png");

/***/ }),

/***/ "./src/image/hptemplate.png":
/*!**********************************!*\
  !*** ./src/image/hptemplate.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a4abfe8c287499ad8f45962116b54bfa.png");

/***/ }),

/***/ "./src/image/logo.png":
/*!****************************!*\
  !*** ./src/image/logo.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1f41c16c05050d98555a17c14f078266.png");

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

/***/ "./src/image/spike.png":
/*!*****************************!*\
  !*** ./src/image/spike.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "493331223def1ecc10fc487331f6164e.png");

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
/* harmony import */ var _image_dwarf_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/dwarf_right.png */ "./src/image/dwarf_right.png");
/* harmony import */ var _image_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/logo.png */ "./src/image/logo.png");
/* harmony import */ var _image_hptemplate_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/hptemplate.png */ "./src/image/hptemplate.png");
/* harmony import */ var _image_spike_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/spike.png */ "./src/image/spike.png");
/* harmony import */ var _image_dwarf_right1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image/dwarf_right1.png */ "./src/image/dwarf_right1.png");
/* harmony import */ var _image_dwarf_right2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/dwarf_right2.png */ "./src/image/dwarf_right2.png");
/* harmony import */ var _image_dwarf_right3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image/dwarf_right3.png */ "./src/image/dwarf_right3.png");
/* harmony import */ var _image_dwarf_right4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image/dwarf_right4.png */ "./src/image/dwarf_right4.png");
/* harmony import */ var _image_dwarf_right5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image/dwarf_right5.png */ "./src/image/dwarf_right5.png");
/* harmony import */ var _image_dwarf_right6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image/dwarf_right6.png */ "./src/image/dwarf_right6.png");
/* harmony import */ var _image_dwarf_right7_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image/dwarf_right7.png */ "./src/image/dwarf_right7.png");
/* harmony import */ var _image_beer_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../image/beer.png */ "./src/image/beer.png");
/* harmony import */ var _bgm_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../bgm.mp3 */ "./src/bgm.mp3");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

















//Начнем с того, что мы хотели использовать некоторые приколы canvas и подрубили эмуляцию сервера, 
//но что-то пошло не так и у нас появилась проблема с модулями, так что радуемся жизни в одном файле

var cumvas = document.querySelector('canvas');
var ctx = cumvas.getContext('2d');
var gravity = 0.5;
ctx.imageSmoothingEnabled = false;
cumvas.width = window.innerWidth;
cumvas.height = window.innerHeight;
var can_jump = false;
var main_sprites = [_image_dwarf_right_png__WEBPACK_IMPORTED_MODULE_2__["default"], _image_dwarf_right1_png__WEBPACK_IMPORTED_MODULE_6__["default"], _image_dwarf_right2_png__WEBPACK_IMPORTED_MODULE_7__["default"], _image_dwarf_right3_png__WEBPACK_IMPORTED_MODULE_8__["default"], _image_dwarf_right4_png__WEBPACK_IMPORTED_MODULE_9__["default"], _image_dwarf_right5_png__WEBPACK_IMPORTED_MODULE_10__["default"], _image_dwarf_right6_png__WEBPACK_IMPORTED_MODULE_11__["default"], _image_dwarf_right7_png__WEBPACK_IMPORTED_MODULE_12__["default"]];
var music = new Audio(_bgm_mp3__WEBPACK_IMPORTED_MODULE_14__["default"]);
console.log(music.src);
var Button = /*#__PURE__*/function () {
  function Button(label, color, width, height, x, y) {
    var textcolor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "#000000";
    var textsize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 24;
    _classCallCheck(this, Button);
    this.label = label;
    this.width = width;
    this.height = height;
    this.color = color;
    this.textcolor = textcolor;
    this.textsize = textsize;
    this.x = x;
    this.y = y;
    addEventListener('mouseup', this.mouseup.bind(this));
  }
  _createClass(Button, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.lineWidth = 1;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.textcolor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.textcolor;
      ctx.font = this.textsize + "px sans-serif";
      var rktmtx = ctx.measureText(this.label);
      ctx.fillText(this.label, this.x + (this.width - rktmtx.width) / 2, this.y + (rktmtx.actualBoundingBoxAscent + this.height) / 2);
    }
  }, {
    key: "onmouseup",
    value: function onmouseup(a) {}
  }, {
    key: "mouseup",
    value: function mouseup(a) {
      var x = a.clientX;
      var y = a.clientY;
      if (x > this.x && y > this.y && x < this.x + this.width && y < this.y + this.height) {
        this.onmouseup(a);
      }
    }
  }]);
  return Button;
}(); //классы всех объектов от игрока до платформ
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.pos = {
      x: 0,
      y: 1
    };
    this.vel = {
      x: 0,
      y: 1
    };
    this.frame = 0;
    this.frames = main_sprites.map(function (x) {
      return createImage(x);
    });
    console.log(this.frames);
    this.image = this.frames[this.frame];
    this.width = this.image.width * 4;
    this.height = this.image.height * 4;
    this.hp = 3;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.pos.x, this.pos.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.image = this.frames[this.frame];
      this.pos.y += this.vel.y;
      this.pos.x += this.vel.x;
      this.draw();
      if (this.pos.y + this.height + this.vel.y <= cumvas.height) {
        this.vel.y += gravity;
      }
    }
  }]);
  return Player;
}();
var Spike = /*#__PURE__*/function () {
  function Spike(x, y) {
    _classCallCheck(this, Spike);
    this.pos = {
      x: x,
      y: y
    };
    this.image = createImage(_image_spike_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
  _createClass(Spike, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.pos.x, this.pos.y, this.image.width, this.image.height);
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return Spike;
}();
var Heart = /*#__PURE__*/function () {
  function Heart(x, y) {
    _classCallCheck(this, Heart);
    this.pos = {
      x: x,
      y: y
    };
    this.image = createImage(_image_hptemplate_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.width = this.image.width;
    this.height = this.image.height;
  }
  _createClass(Heart, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.pos.x, this.pos.y, 50, 50);
    }
  }]);
  return Heart;
}();
var Enemy = /*#__PURE__*/function () {
  function Enemy() {
    _classCallCheck(this, Enemy);
    this.pos = {
      x: 400,
      y: 100
    };
    this.vel = {
      x: 0,
      y: 1
    };
    this.width = 100;
    this.height = 100;
    this.hp = 3;
  }
  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = 'blue';
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
  return Enemy;
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
var Beer = /*#__PURE__*/function () {
  function Beer(x, y) {
    var width_beer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 128;
    var height_beer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 128;
    var type = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, Beer);
    this.pos = {
      x: x,
      y: y,
      width: width_beer,
      height: height_beer
    };
    this.isUI = type;
    this.image = createImage(_image_beer_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
    this.beerCounter = 0;
    this.status = false;
  }
  _createClass(Beer, [{
    key: "draw",
    value: function draw() {
      if (this.isUI) {
        ctx.drawImage(this.image, this.pos.x, this.pos.y, this.pos.width, this.pos.height);
        ctx.fillText(this.beerCounter, this.pos.x - this.pos.width, this.pos.y + this.pos.height / 2);
      } else ctx.drawImage(this.image, this.pos.x + this.pos.width, this.pos.y, this.pos.width, this.pos.height);
    }
  }]);
  return Beer;
}();
var GenObj = /*#__PURE__*/function () {
  function GenObj(x, y) {
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
      ctx.drawImage(this.pos.image, cumvas.width + this.pos.x, this.pos.y, cumvas.width, cumvas.height);
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
var enemy;
var hp_i = [new Heart(100, cumvas.height / 15), new Heart(175, cumvas.height / 15), new Heart(250, cumvas.height / 15)];
;
var platform;
var spike;
var lastPlatformX;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
function getLastPlatformX() {
  if (platform.length > 0) {
    var lastPlatform = platform[platform.length - 1];
    var _lastPlatformX = lastPlatform.pos.x;
    return _lastPlatformX;
  }
  return 0;
}
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createPlatform(x, y) {
  platform.push(new Platform(x, y));
}

// Функция для создания шипа
function createSpike(x, y) {
  spike.push(new Spike(x, y));
}

// Функция для генерации платформы и шипа
function generateRandomPlatformsAndSpikes() {
  var distanceBetweenPlatforms = generateRandomNumber(100, 200);
  var lastPlatformX = getLastPlatformX(); // Получение координаты x последней платформы

  var platformX = lastPlatformX + distanceBetweenPlatforms + generateRandomNumber(100, 200);
  var platformY = generateRandomNumber(cumvas.height - 150, cumvas.height - 100); // Выберите ваше значение Y для платформы

  var spikesForPlatform = generateRandomNumber(1, 3); // Количество шипов для платформы

  createPlatform(platformX, platformY); // Создание платформы

  for (var i = 0; i < spikesForPlatform; i++) {
    var spikeX = platformX + generateRandomNumber(50, 200);
    var spikeY = platformY - 40; // Выберите ваше значение Y для шипа

    createSpike(spikeX, spikeY); // Создание шипов
  }
}

//отсчет до босс комнаты
var scrolloff = 0;
function initialize() {
  enemy = new Enemy();
  platform = [new Platform(0, cumvas.height - 100), new Platform(PlatformImage.width - 80, cumvas.height - 100), new Platform(1500, cumvas.height - 100), new Platform(2000, cumvas.height - 100), new Platform(2500, cumvas.height - 100), new Platform(3500, cumvas.height - 150), new Platform(4500, cumvas.height - 100), new Platform(5000, cumvas.height - 100), new Platform(6000, cumvas.height - 100)];
  spike = [new Spike(750, cumvas.height - 140), new Spike(1650, cumvas.height - 140), new Spike(2100, cumvas.height - 140), new Spike(2200, cumvas.height - 140), new Spike(2500, cumvas.height - 140), new Spike(2600, cumvas.height - 140), new Spike(2700, cumvas.height - 140), new Spike(2975, cumvas.height - 140)];
  player.pos = {
    x: 0,
    y: 1
  };
  player.vel = {
    x: 0,
    y: 1
  };

  //отсчет до босс комнаты

  scrolloff = 0;
}
function respawn() {
  PlatformImage = createImage(_image_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  hp_i.pop();
  player.hp--;
  initialize();
}
//запуск loop

function anim() {
  if (scrolloff < 56000) {
    if (player.hp > 0) {
      lastPlatformX = getLastPlatformX();
      console.log(lastPlatformX);
      // requestAnimationFrame(anim);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, cumvas.width, cumvas.height);
      genobj.forEach(function (genobj) {
        genobj.draw();
      });
      platform.forEach(function (platform) {
        platform.draw();
      });
      spike.forEach(function (spike) {
        spike.draw();
      });
      hp_i.forEach(function (hp_i) {
        hp_i.draw();
      });
      player.update();
      if (keys.left.pressed && player.pos.x > 8000) {
        player.vel.x = 0;
      }
      if (keys.right.pressed && player.pos.x < 400) {
        player.vel.x = 10;
      } else if (keys.left.pressed && player.pos.x > 100) {
        player.vel.x = -10;
      } else {
        player.vel.x = 0;
      }
      if (keys.right.pressed) {
        platform.forEach(function (platform) {
          scrolloff += 5;
          platform.pos.x -= 10;
        });
        spike.forEach(function (spike) {
          spike.pos.x -= 10;
        });
        genobj[0].pos.x -= 1;
      } else if (keys.left.pressed) {
        if (player.pos.x > platform[0].pos.x) {
          platform.forEach(function (platform) {
            scrolloff -= 5;
            platform.pos.x += 10;
          });
          spike.forEach(function (spike) {
            spike.pos.x += 10;
          });
        }
        genobj[0].pos.x += 1;
      }
      if (player.pos.y > cumvas.height) {
        respawn();
        console.log(player.hp);
      }

      // проверка платформы
      platform.forEach(function (platform) {
        if (player.pos.y + player.height <= platform.pos.y && player.pos.y + player.height + player.vel.y >= platform.pos.y && player.pos.x + player.width >= platform.pos.x && player.pos.x <= platform.pos.x + platform.width) {
          can_jump = true;
          player.vel.y = 0;
        }
      });
      spike.forEach(function (spike) {
        // console.log(spike)
        var intersects_by_x = player.pos.x + player.width - 20 >= spike.pos.x && player.pos.x <= spike.pos.x + spike.image.width;
        var intersects_by_y = cumvas.height - player.pos.y <= cumvas.height - spike.pos.y + spike.image.height * 2;

        //console.log([intersects_by_x, intersects_by_y, player.width, player.pos.x + player.width, spike.pos.x])
        if (intersects_by_x && intersects_by_y) {
          respawn();
          console.log(player.hp);
        }
      });
      if (player.pos.x > lastPlatformX - cumvas.width) {
        generateRandomPlatformsAndSpikes();
      }
    } else {
      ctx.clearRect(0, 0, cumvas.width, cumvas.height);
      ctx.fillStyle = 'white';
      var w = 300;
      var h = 100;
      var xa = (cumvas.width - w) / 2;
      var ya = (cumvas.height - h) / 2;
      ctx.fillRect(xa, ya, w, h);
      ctx.fillStyle = 'red';
      var text = ctx.measureText("Game over");
      ctx.fillText("Game over", xa + text.width / 1.5, ya + text.actualBoundingBoxAscent * 3);
      music.pause();
    }
  } else {
    ctx.clearRect(0, 0, cumvas.width, cumvas.height);
    var coords = ctx.measureText("You won!");
    ctx.fillText("You won!", (cumvas.width - coords.width) / 2, (cumvas.height - coords.actualBoundingBoxAscent) / 2);
    music.pause();
  }
}
var game_started = false;
var start_game = function start_game() {
  if (game_started) return;
  initialize();
  game_started = true;
  player.update();
  setInterval(anim, 1000 / 60);
  music.play();
  addEventListener('keydown', function (_ref) {
    var keyCode = _ref.keyCode;
    switch (keyCode) {
      case 32:
      case 87:
        console.log('вверх');
        if (can_jump) {
          player.vel.y = -15;
          can_jump = false;
        }
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
        keys.right.pressed = true;
        break;
    }
  });
  addEventListener('keyup', function (_ref2) {
    var keyCode = _ref2.keyCode;
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
        keys.right.pressed = false;
        break;
    }
  });
};
var startbtn = new Button("Start", "#ffffff", 300, 75, 0, 0);
var logo_img = createImage(_image_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
startbtn.x = (cumvas.width - startbtn.width) / 2;
startbtn.y = (cumvas.height - startbtn.height + 200) / 2;
startbtn.onmouseup = function (a) {
  removeEventListener('mouseup', this.onmouseup);
  removeEventListener('mouseup', this.mouseup);
  start_game();
};
logo_img.addEventListener("load", function () {
  console.log(logo_img);
  ctx.drawImage(logo_img, (cumvas.width - logo_img.width) / 2, 0);
  startbtn.draw(ctx);
});

/// Здесь у нас начались проблемы с меню и мы начали жестка хардкодить смотреть без регистрации и смс
// C# enjoyer и C++'ник фигачат как не в себя

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map