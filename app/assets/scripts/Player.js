class Player {
	constructor(els) {

		this.events();

	}

	events() {
		this.move(els);
	}

	move(els) {
		var that = els;
		els.addEventListener("keypress", function(e){
			
			// Left arrow
			if(e.keyCode === 37){
				var left = parseInt(that.toElement.style.left);
				console.log(left);
				that.toElement.style.left  = (left + 5) + "px";
			}
			// Right arrow
			if(e.keyCode === 39){

			}
		})
	}
}

export default Player;