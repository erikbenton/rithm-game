import BodyPiece from "./BodyPiece.js";

class Snake {
	constructor() {
		this.element = document.querySelector(".snake");
		
		this.bodyPiece1 = new BodyPiece("400px", "400px", "left");
		this.bodyPiece2 = new BodyPiece("450px", "400px", "left");
		this.bodyPiece3 = new BodyPiece("500px", "400px", "left");
		this.bodyPiece4 = new BodyPiece("550px", "400px", "left");

		this.numBodyPieces = 0;
		this.bodyPieces = [];
		this.moveInterval;
		this.direction = "left";
		this.speed = 200;

		this.addBodyPiece(this.bodyPiece1);
		this.addBodyPiece(this.bodyPiece2);
		this.addBodyPiece(this.bodyPiece3);
		this.addBodyPiece(this.bodyPiece4);

	}


	addBodyPiece(newBodyPiece) {
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