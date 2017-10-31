import Snake from "./Snake.js";

class Game {
	constructor() {

		this.gameField = document.querySelector(".background");
		this.score;
		this.appleInPlay = false;

	}

	// Initiate the game
	initiate() {
		var snake = new Snake();
		this.gameField.appendChild(snake.body);
		this.score = 0;
		this.newApple();
	}

	// Reset the game
	reset() {

	}

	//Create new apple
	newApple() {

		var left = Math.floor(Math.random() * 16) * 50;
		var top = Math.floor(Math.random() * 16) * 50;

		var newApple = new Apple(left, top);
		this.gameField.appendChild(newApple.apple);

	}


}