//import Player from "./Player.js";

//var player = new Player(document.querySelector(".player"));

class Shot {
	constructor(position){
		var shot = document.createElement("i");
		var background = document.querySelector(".background");
		shot.className += " fa fa-angle-up shot";
		shot.setAttribute("aria-hidden","true");
		shot.style.position = "relative";
		shot.style.left = position[0];
		shot.style.top = position[1];
		shot.style.zIndex = "10";
		shot.style.color = "white";
		
		background.appendChild(shot);
		this.move(shot);
	}

	move(shot) {
		var that = this;
		var moveShot = setInterval(function(){
			var top = parseInt(shot.style.top);
			if( top > -40)
			{
				shot.style.top = (top - 3) + "px";
			}
			else
			{
				clearInterval(moveShot);
				return false;
			}
		}, 10)
	}
}

class Player {

	constructor(els, initLeft, initTop) {

		this.events(els);
		els.style.left = initLeft;
		els.style.top = initTop;
		this.isShooting = false;
		//var shot;

	}

	events(els, initLeft) {
		this.move(els, initLeft);
	}

	move(els, initLeft) {

		var that = this;
		window.addEventListener("keypress", function(e){
			
			// Get left of the player
			var left = parseInt(els.style.left);

			// D or -> to go left
			if(e.keyCode === 100 || e.keyCode === 37){
				els.style.left  = (left + 3) + "px";
			}

			// A or <-to go right
			if(e.keyCode === 97 || e.keyCode === 39){
				els.style.left  = (left - 3) + "px";
			}

			// Hit space to fire a shot
			if(e.keyCode === 32 && !that.isShooting){
				console.log(that.getPosition(els));
				var shot = new Shot(that.getPosition(els));
				console.log(shot);
				that.isShooting = true;

			}
		});
	}

	getPosition(els){
		return [els.style.left, els.style.top]
	}
}

document.addEventListener("DOMContentLoaded", function(){

	var player = new Player(document.querySelector(".player"), "400px", "725px");
});