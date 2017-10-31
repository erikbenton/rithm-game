import BodyPiece from "./BodyPiece.js";

class Snake {
	constructor() {
		// var snake = document.querySelector(".snake");
		this.body = document.querySelector(".snake");
		
		this.bodyPiece1 = new BodyPiece("400px", "400px", "left");
		this.bodyPiece2 = new BodyPiece("450px", "400px", "left");
		this.bodyPiece3 = new BodyPiece("500px", "400px", "left");
		this.bodyPiece4 = new BodyPiece("550px", "400px", "left");

		this.numBodyPieces = 4;
		this.bodyPieces = [];
		this.moveInterval;
		this.direction = "left";
		this.speed = 200;

		this.addBodyPiece(this.bodyPiece1);
		this.addBodyPiece(this.bodyPiece2);
		this.addBodyPiece(this.bodyPiece3);
		this.addBodyPiece(this.bodyPiece4);

		//this.events();
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

		this.bodyPieces[0].changeDirection(direction);


		//this.checkBounds();

	}

	// checkBounds() {
	// 	var that = this;

	// 	if(that.bodyPieces[0].getLeft() > 750
	// 			|| that.bodyPieces[0].getLeft() < 0
	// 			|| that.bodyPieces[0].getTop() > 750
	// 			|| that.bodyPieces[0].getTop() < 0)
	// 	{
	// 		clearInterval(that.moveInterval);
	// 		var answer = prompt("Game Over, Play again?");
	// 	}
	// }

}

export default Snake;