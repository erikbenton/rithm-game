class Player {
	constructor(els, initLeft) {

		this.events(els);
		els.style.left = initLeft;

	}

	events(els, initLeft) {
		this.move(els, initLeft);
	}

	move(els, initLeft) {

		window.addEventListener("keypress", function(e){
			
			// Get left of the player
			var left = parseInt(els.style.left);

			if(e.keyCode === 100 || e.keyCode === 37){
				els.style.left  = (left + 3) + "px";
			}

			// Right arrow
			if(e.keyCode === 97 || e.keyCode === 39){
				els.style.left  = (left - 3) + "px";
			}

			if(e.keyCode === 32){

			}
		});
	}
}

export default Player;