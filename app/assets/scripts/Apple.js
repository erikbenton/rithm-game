class Apple {
	constructor(left, top) {
		this.element = document.createElement("i");
		this.element.className += " fa fa-apple apple";
		this.element.setAttribute("aria-hidden", "true");
		this.element.style.position = "relative";
		this.element.style.display = "block";
		this.element.style.left = left + "px";
		this.element.style.top = top + "px";
	}

	// Gets the left for the apple
	getLeft() {
		return parseInt(this.element.style.left);
	}

	// Gets the top for the apple
	getTop() {
		return parseInt(this.element.style.top);
	}
}

export default Apple;