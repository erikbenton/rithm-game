import BodyPiece from "./BodyPiece.js";

class Snake {
	constructor() {
		this.element = document.querySelector(".snake");

		this.numBodyPieces = 0;
		this.bodyPieces = [];
		this.moveInterval;
		this.direction = "left";
		this.speed = 200;

		this.addBodyPiece(new BodyPiece("400px", "400px", "left"));
		this.addBodyPiece(new BodyPiece("450px", "400px", "left"));
		this.addBodyPiece(new BodyPiece("500px", "400px", "left"));
		this.addBodyPiece(new BodyPiece("550px", "400px", "left"));

	}


	addBodyPiece(newBodyPiece) {
		console.log(this);
		this.element.appendChild(newBodyPiece.piece);
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

export default Snake;