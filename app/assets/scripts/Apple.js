class Apple {
	constructor(left, top) {
		this.apple = document.createElement("i");
		this.apple.className += " fa fa-apple apple";
		this.apple.setAttribute("aria-hidden", "true");
		this.apple.style.position = "relative";
		this.apple.style.display = "block";
		this.apple.style.left = left + "px";
		this.apple.style.top = top + "px";
	}

	getLeft() {
		return parseInt(this.apple.style.left);
	}

	getTop() {
		return parseInt(this.apple.style.top);
	}
}

export default Apple;