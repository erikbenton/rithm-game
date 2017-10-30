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

		this.addBodyPiece(this.bodyPiece1);
		this.addBodyPiece(this.bodyPiece2);
		this.addBodyPiece(this.bodyPiece3);
		this.addBodyPiece(this.bodyPiece4);

		this.events();
		this.moveBody("left");

	}

	events() {

		var that = this;

		window.addEventListener("keydown", function(e){
			
			if(that.moveInterval){
				console.log("here");
				clearInterval(that.moveInterval);
			}

			console.log(e.keyCode);
			if(e.keyCode === 65) {
				that.moveInterval = setInterval(function(){
					that.moveBody("left");
				}, 200);
			} else if(e.keyCode === 68){
				that.moveInterval = setInterval(function(){
					that.moveBody("right");
				}, 200);
			} else if(e.keyCode === 87){
				that.moveInterval = setInterval(function(){
					that.moveBody("up");
				}, 200);
			} else if(e.keyCode === 83){
				that.moveInterval = setInterval(function(){
					that.moveBody("down");
				}, 200);
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
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece((left-50) + "px", top + "px");
		}
		if(direction === "right") {
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece((left+50) + "px", top + "px");
		}
		if(direction === "up") {
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece(left + "px", (top - 50) + "px");
		}
		if(direction === "down") {
			this.bodyPieces.unshift(this.bodyPieces.pop());
			this.bodyPieces[0].movePiece(left + "px", (top + 50) + "px");
		}


		this.checkBounds();

	}

	checkBounds() {
		var that = this;

		if(Math.abs(that.bodyPieces[0].getLeft()) > 400 || Math.abs(that.bodyPieces[0].getTop()) > 400)
		{
			clearInterval(that.moveInterval);
			var answer = prompt("Game Over, Play again?");
		}
	}

}

class BodyPiece {
	constructor(left, top) {
		this.piece = document.createElement("i");
		this.piece.className += " fa fa-square";
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

document.addEventListener("DOMContentLoaded", function(){

	var snake = new Snake();

});