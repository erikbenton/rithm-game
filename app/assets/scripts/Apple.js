class Apple {
	constructor(left, top) {
		this.apple = document.createElement("i");
		this.apple.className += " fa fa-apple apple";
		this.apple.setAttribute("aria-hidden", "true");
		this.apple.style.position = "absolute";
		this.apple.style.display = "block";
		this.apple.style.color = "white";
		this.apple.style.left = left;
		this.apple.style.top = top;
	}
}