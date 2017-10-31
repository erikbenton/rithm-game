class BodyPiece {
	constructor(left, top, direction) {
		this.element = document.createElement("i");
		this.element.className += " fa fa-square body-piece";
		this.element.setAttribute("aria-hidden", "true");
		this.element.style.position = "absolute";
		this.element.style.display = "block";
		this.element.style.left = left;
		this.element.style.top = top;
		this.direction = direction;
	}

	movePiece(left, top) {
		this.element.style.left = left;
		this.element.style.top = top;
	}

	changeDirection(direction) {
		this.direction = direction;
	}

	getLeft() {
		return parseInt(this.element.style.left);
	}

	getTop() {
		return parseInt(this.element.style.top);
	}
}

export default BodyPiece;