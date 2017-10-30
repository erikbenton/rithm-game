class BodyPiece {
	constructor(left, top) {
		this.piece = document.createElement("i");
		this.piece.className += " fa fa-square";
		this.piece.setAttribute("aria-hidden", "true");
		this.piece.style.position = "relative";
		this.piece.style.left = left;
		this.piece.style.right = right;
	}
}