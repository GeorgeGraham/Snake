


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
		

		console.log((Math.random()*10)+1);

		//let f = new Food();

		//game.entities.push(f);


	}
}