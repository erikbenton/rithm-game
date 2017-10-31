class BodyPiece {
	constructor(left, top, direction) {
		this.piece = document.createElement("i");
		this.piece.className += " fa fa-square body-piece";
		this.piece.setAttribute("aria-hidden", "true");
		this.piece.style.position = "absolute";
		this.piece.style.display = "block";
		this.piece.style.left = left;
		this.piece.style.top = top;
		this.direction = direction;
	}

	movePiece(left, top) {
		this.piece.style.left = left;
		this.piece.style.top = top;
	}

	changeDirection(direction) {
		this.direction = direction;
	}

	getLeft() {
		return parseInt(this.piece.style.left);
	}

	getTop() {
		return parseInt(this.piece.style.top);
	}
}

export default BodyPiece;