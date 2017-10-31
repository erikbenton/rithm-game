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

export default BodyPiece;