class Snake {
	constructor() {
		// var snake = document.querySelector(".snake");
		this.body = document.querySelector(".snake");
		
		this.bodyPiece1 = new BodyPiece("0px", "0px");
		this.bodyPiece2 = new BodyPiece("50px", "0px");
		this.bodyPiece3 = new BodyPiece("100px", "0px");
		this.bodyPiece4 = new BodyPiece("150px", "0px");

		this.numBodyPieces = 0;
		this.bodyPieces = [];
		this.moveInterval;
		this.direction = "left";
		this.speed = 200;

		this.addBodyPiece(this.bodyPiece1);
		this.addBodyPiece(this.bodyPiece2);
		this.addBodyPiece(this.bodyPiece3);
		this.addBodyPiece(this.bodyPiece4);

		this.events();
		//this.moveBody(this.direction);

	}

	events() {

		var that = this;

		window.addEventListener("keydown", function(e){

			//console.log(e.keyCode);
			if(e.keyCode === 65 && that.direction !== "right") {
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.moveBody("left");
				}, that.speed);

			} else if(e.keyCode === 68 && that.direction !== "left"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.moveBody("right");
				}, that.speed);

			} else if(e.keyCode === 87 && that.direction !== "down"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.moveBody("up");
				}, that.speed);

			} else if(e.keyCode === 83 && that.direction !== "up"){
				
				clearInterval(that.moveInterval);

				that.moveInterval = setInterval(function(){
					that.moveBody("down");
				}, that.speed);

			} 

		});
	}


	addBodyPiece(newBodyPiece) {
		this.body.appendChild(newBodyPiece.piece);
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


		this.checkBounds();

	}

	checkBounds() {
		var that = this;

		if(that.bodyPieces[0].getLeft() > 350
				|| that.bodyPieces[0].getLeft() < -400
				|| that.bodyPieces[0].getTop() > 350
				|| that.bodyPieces[0].getTop() < -400)
		{
			clearInterval(that.moveInterval);
			var answer = prompt("Game Over, Play again?");
		}
	}

}

class BodyPiece {
	constructor(left, top) {
		this.piece = document.createElement("i");
		this.piece.className += " fa fa-square body-piece";
		this.piece.setAttribute("aria-hidden", "true");
		this.piece.style.position = "absolute";
		this.piece.style.display = "block";
		this.piece.style.left = left;
		this.piece.style.top = top;
	}

	movePiece(left, top) {
		this.piece.style.left = left;
		this.piece.style.top = top;
	}

	getLeft() {
		return parseInt(this.piece.style.left);
	}

	getTop() {
		return parseInt(this.piece.style.top);
	}
}

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

class Apple {
	constructor(left, top) {
		this.apple = document.createElement("i");
		this.apple.className += " fa fa-apple apple";
		this.apple.setAttribute("aria-hidden", "true");
		this.apple.style.position = "relative";
		this.apple.style.display = "block";
		this.apple.style.left = left + "px";
		this.apple.style.top = top + "px";
	}
}

document.addEventListener("DOMContentLoaded", function(){

	var game = new Game();
	game.initiate();
	// var snake = new Snake();

});