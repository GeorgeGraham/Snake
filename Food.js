


function Food(ix,iy){

	// Food for snake game

	this.x=ix;
	this.y=iy;
	this.width=10;
	this.height=10;
	this.colour = "Red";

}

function Foodgen(){
	this.generate = function(){
		
		//RANDOMLY PLACE FOOD IN CANVAS

		let x = Math.floor((Math.random()*canvas.width-1)-1);
		let y = Math.floor((Math.random()*canvas.height-1)-1);
		let f = new Food(x,y);

		game.entities.push(f);

		//console.log(game.entities);
	}
}