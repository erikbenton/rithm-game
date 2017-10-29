class Shot {
	constructor(position){
		var shot = document.createElement("i");
		shot.classList.add("fa fa-angle-up");
		shot.setAttribute("aria-hidden","true");
		shot.style.position = "relative";
		shot.style.left = position[0];
		shot.style.top = position[1];
	}
}