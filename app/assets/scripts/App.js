//import Player from "./Player.js";

//var player = new Player(document.querySelector(".player"));

class Player {
	constructor(els) {

		this.events(els);

	}

	events(els) {
		this.move(els);
	}

	move(els) {
		var that = els;
		console.log(els);
		window.addEventListener("keypress", function(e){
			
			// console.log(that);
			 var left = parseInt(that.offsetLeft);
			 that.style.left = left + "px";
			// console.log(that.offsetLeft);
			//that.style.left  = (left + 5) + "px";
			//console.log(e);
			// Left arrow
			//var left = parseInt(that.style.left);
			if(e.keyCode === 100){
				console.log(left);
				
				console.log(that.style.Left);
				that.style.left  = (left + 1) + "px";
			}
			// Right arrow
			if(e.keyCode === 97){

			}
		})
	}
}

document.addEventListener("DOMContentLoaded", function(){

	var player = new Player(document.querySelector(".player"));
});