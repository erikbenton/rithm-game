import Snake from "./Snake.js";
import Apple from "./Apple.js"
import BodyPiece from "./BodyPiece.js";

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
		this.snake = new Snake();
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
		var newApple = new Apple(left, top);
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

					var newBodyPiece  = new BodyPiece((lastPiece.getLeft() + 50) + "px", lastPiece.getTop() + "px", "left");

					break;
				case "right":

					var newBodyPiece = new BodyPiece((lastPiece.getLeft() - 50) + "px", lastPiece.getTop() + "px", "right");

					break;
				case "up":

					var newBodyPiece = new BodyPiece(lastPiece.getLeft() + "px", (lastPiece.getTop() + 50) + "px", "up");

					break;
				case "down":

					var newBodyPiece = new BodyPiece(lastPiece.getLeft() + "px", (lastPiece.getTop() - 50) + "px", "down");

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

export default Game;