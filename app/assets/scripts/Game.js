import Snake from "./Snake.js";
import Apple from "./Apple.js"
import BodyPiece from "./BodyPiece.js";

class Game {
	constructor() {

		this.gameField = document.querySelector(".background");
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
		this.snake = new Snake();
		this.gameField.appendChild(this.snake.body);
		this.score = 0;
		this.apple = this.newApple();
		this.isPlaying = true;
		this.events();
	}

	// Reset the game
	reset() {

	}

	events() {

		var that = this;

		window.addEventListener("keydown", function(e){

			//console.log(e.keyCode);
			if(e.keyCode === 65 && that.snake.direction !== "right") {
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.snake.moveBody("left");
					that.checkBounds();
					that.appleEaten();
				}, that.gameSpeed);

			} else if(e.keyCode === 68 && that.snake.direction !== "left"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.snake.moveBody("right");
					that.checkBounds();
					that.appleEaten();
				}, that.gameSpeed);

			} else if(e.keyCode === 87 && that.snake.direction !== "down"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.snake.moveBody("up");
					that.checkBounds();
					that.appleEaten();
				}, that.gameSpeed);

			} else if(e.keyCode === 83 && that.snake.direction !== "up"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.snake.moveBody("down");
					that.checkBounds();
					that.appleEaten();
				}, that.gameSpeed);

			}

			

		});
	}

	//Create new apple
	newApple() {

		var left = Math.floor(Math.random() * 16) * 50;
		var top = Math.floor(Math.random() * 16) * 50;

		var newApple = new Apple(left, top);
		this.gameField.appendChild(newApple.apple);
		return newApple;

	}

	appleEaten() {
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

			this.snake.addBodyPiece(newBodyPiece);

		}
	}

	checkBounds() {
		var that = this;
		if(this.snake.bodyPieces[0].getLeft() > 750
				|| this.snake.bodyPieces[0].getLeft() < 0
				|| this.snake.bodyPieces[0].getTop() > 750
				|| this.snake.bodyPieces[0].getTop() < 0)
		{
			clearInterval(this.moveInterval);
			var answer = prompt("Game Over, Play again?");
		}
	}

}

export default Game;