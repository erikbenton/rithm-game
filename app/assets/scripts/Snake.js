class Snake {
	constructor() {
		// var snake = document.querySelector(".snake");
		this.body = document.querySelector(".snake");
		
		this.bodyPiece1 = new BodyPiece("400px", "400px");
		this.bodyPiece2 = new BodyPiece("410px", "400px");
		this.bodyPiece3 = new BodyPiece("420px", "400px");
		this.bodyPiece4 = new BodyPiece("430px", "400px");

		this.addBodyPiece(bodyPiece1);
		this.addBodyPiece(bodyPiece2);
		this.addBodyPiece(bodyPiece3);
		this.addBodyPiece(bodyPiece4);

	}


	addBodyPiece(newBodyPiece) {
		body.appendChild(newBodyPiece);
		bodyPieces.push(newBodyPiece);
	}

}

export default Snake;