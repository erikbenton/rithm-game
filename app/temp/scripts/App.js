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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BodyPiece {
	constructor(left, top, direction) {
		this.element = document.createElement("i");
		this.element.className += " fa fa-square body-piece";
		this.element.setAttribute("aria-hidden", "true");
		this.element.style.position = "absolute";
		this.element.style.display = "block";
		this.element.style.left = left;
		this.element.style.top = top;
		this.direction = direction;
	}

	movePiece(left, top) {
		this.element.style.left = left;
		this.element.style.top = top;
	}

	changeDirection(direction) {
		this.direction = direction;
	}

	getLeft() {
		return parseInt(this.element.style.left);
	}

	getTop() {
		return parseInt(this.element.style.top);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (BodyPiece);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game_js__ = __webpack_require__(2);

// import Snake from "./Snake.js";
// import Apple from "./Apple.js";

document.addEventListener("DOMContentLoaded", function(){

	var game = new __WEBPACK_IMPORTED_MODULE_0__Game_js__["a" /* default */]();
	game.initiate();
	// var snake = new Snake();

});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Snake_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Apple_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BodyPiece_js__ = __webpack_require__(0);




class Game {
	constructor() {

		this.element = document.querySelector(".background");
		this.snake;
		this.apple;
		this.score;
		this.appleInPlay = false;
		this.isPlaying = false;
		this.moveInterval;
		this.gameSpeed = 200;

	}

	// Initiate the game
	initiate() {
		this.newSnake();
		this.score = 0;
		this.apple = this.newApple();
		this.isPlaying = true;
		this.events();
	}

	// Reset the game
	reset() {

		var that = this;
		for(var i = 0; i < this.snake.numBodyPieces; i++) {
			this.snake.element.removeChild(that.snake.bodyPieces[i].element);
		}
		this.element.removeChild(this.apple.element);

		this.initiate();

	}

	// Adding the event listeners
	events() {

		var that = this;

		window.addEventListener("keydown", function(e){

			if(e.keyCode === 65 && that.snake.direction !== "right") {
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.nextMove("left");
				}, that.gameSpeed);

			} else if(e.keyCode === 68 && that.snake.direction !== "left"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.nextMove("right");
				}, that.gameSpeed);

			} else if(e.keyCode === 87 && that.snake.direction !== "down"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.nextMove("up");
				}, that.gameSpeed);

			} else if(e.keyCode === 83 && that.snake.direction !== "up"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.nextMove("down");
				}, that.gameSpeed);

			}
		});
	}

	// Next move in the game
	nextMove(direction) {
		this.snake.moveBody(direction);
		this.checkBounds();
		this.checkCollision();
		this.appleEaten();
	}

	// Create a new snake and append to game object
	newSnake() {
		this.snake = new __WEBPACK_IMPORTED_MODULE_0__Snake_js__["a" /* default */]();
		this.element.appendChild(this.snake.element);
	}

	//Create new apple
	newApple() {

		var left;
		var top;

		// Check to make sure it isn't on top of snake
		do {

			left = Math.floor(Math.random() * 16) * 50;
			top = Math.floor(Math.random() * 16) * 50;

		} while(this.checkOverlap(left, top));

		// Create the apple and add it to the screen
		var newApple = new __WEBPACK_IMPORTED_MODULE_1__Apple_js__["a" /* default */](left, top);
		this.element.appendChild(newApple.element);
		this.apple = newApple;
		return newApple;

	}

	// Remove the apple from the game field
	removeApple() {

		this.element.removeChild(this.apple.element);
	
	}

	// What to do if an apple is eaten
	appleEaten() {
		var that = this;
		if(this.snake.bodyPieces[0].getTop() === this.apple.getTop()
			&& this.snake.bodyPieces[0].getLeft() === this.apple.getLeft()) {

			var lastPiece = this.snake.bodyPieces[(this.snake.bodyPieces.length-1)];
			switch(lastPiece.direction) {
				case "left":

					var newBodyPiece  = new __WEBPACK_IMPORTED_MODULE_2__BodyPiece_js__["a" /* default */]((lastPiece.getLeft() + 50) + "px", lastPiece.getTop() + "px", "left");

					break;
				case "right":

					var newBodyPiece = new __WEBPACK_IMPORTED_MODULE_2__BodyPiece_js__["a" /* default */]((lastPiece.getLeft() - 50) + "px", lastPiece.getTop() + "px", "right");

					break;
				case "up":

					var newBodyPiece = new __WEBPACK_IMPORTED_MODULE_2__BodyPiece_js__["a" /* default */](lastPiece.getLeft() + "px", (lastPiece.getTop() + 50) + "px", "up");

					break;
				case "down":

					var newBodyPiece = new __WEBPACK_IMPORTED_MODULE_2__BodyPiece_js__["a" /* default */](lastPiece.getLeft() + "px", (lastPiece.getTop() - 50) + "px", "down");

					break;
				default:
					break;
			}

			that.score++;
			that.snake.addBodyPiece(newBodyPiece);
			that.removeApple();
			that.newApple();

		}
	}

	// Checks to make sure snake is within bounds
	checkBounds() {
		var that = this;
		if(this.snake.bodyPieces[0].getLeft() > 750
				|| this.snake.bodyPieces[0].getLeft() < 0
				|| this.snake.bodyPieces[0].getTop() > 750
				|| this.snake.bodyPieces[0].getTop() < 0)
		{
			this.gameOver();
		}
	}

	// Checks for a collision between snake body pieces
	checkCollision() {
		
		var that = this;
		var left = that.snake.bodyPieces[0].getLeft();
		var top = that.snake.bodyPieces[0].getTop();
		
		if(that.checkOverlap(left, top)) {
			this.gameOver();
		}
	}

	// Displays game over screen
	// and asks if user wants to continue
	gameOver() {
		var that = this;
		clearInterval(that.moveInterval);
		if(confirm("Game over, play again?")) {
			this.reset();
		}
	}

	// Checks for overlap with snack body pieces
	checkOverlap(left, top) {
		for(var i = 1; i < this.snake.numBodyPieces; i++) {
			if(left === this.snake.bodyPieces[i].getLeft()
				&& top === this.snake.bodyPieces[i].getTop()) {
				return true;
			}
		}
		return false;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BodyPiece_js__ = __webpack_require__(0);


class Snake {
	constructor() {
		this.element = document.querySelector(".snake");

		this.numBodyPieces = 0;
		this.bodyPieces = [];
		this.moveInterval;
		this.direction = "left";

		this.addBodyPiece(new __WEBPACK_IMPORTED_MODULE_0__BodyPiece_js__["a" /* default */]("400px", "400px", "left"));
		this.addBodyPiece(new __WEBPACK_IMPORTED_MODULE_0__BodyPiece_js__["a" /* default */]("450px", "400px", "left"));
		this.addBodyPiece(new __WEBPACK_IMPORTED_MODULE_0__BodyPiece_js__["a" /* default */]("500px", "400px", "left"));
		this.addBodyPiece(new __WEBPACK_IMPORTED_MODULE_0__BodyPiece_js__["a" /* default */]("550px", "400px", "left"));

	}


	addBodyPiece(newBodyPiece) {
		this.element.appendChild(newBodyPiece.element);
		this.bodyPieces.push(newBodyPiece);
		this.numBodyPieces++;
	}

	moveBody(direction) {

		var left = this.bodyPieces[0].getLeft();
		var top = this.bodyPieces[0].getTop();

		if(direction === "left") {
			this.direction = "left";
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece((left-50) + "px", top + "px");
		}
		if(direction === "right") {
			this.direction = "right";
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece((left+50) + "px", top + "px");
		}
		if(direction === "up") {
			this.direction = "up";
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece(left + "px", (top - 50) + "px");
		}
		if(direction === "down") {
			this.direction = "down";
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece(left + "px", (top + 50) + "px");
		}

		this.bodyPieces[0].changeDirection(direction);

	}
}

/* harmony default export */ __webpack_exports__["a"] = (Snake);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Apple {
	constructor(left, top) {
		this.element = document.createElement("i");
		this.element.className += " fa fa-apple apple";
		this.element.setAttribute("aria-hidden", "true");
		this.element.style.position = "relative";
		this.element.style.display = "block";
		this.element.style.left = left + "px";
		this.element.style.top = top + "px";
	}

	// Gets the left for the apple
	getLeft() {
		return parseInt(this.element.style.left);
	}

	// Gets the top for the apple
	getTop() {
		return parseInt(this.element.style.top);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Apple);

/***/ })
/******/ ]);