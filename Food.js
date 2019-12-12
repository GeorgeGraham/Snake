
function Back(){

	// Food for snake game

	this.x=0;
	this.y=0;
	this.width=600;
	this.height=600;
	this.colour = "Black";
	
}

function Food(ix,iy){

	// Food for snake game

	this.x=ix;
	this.y=iy;
	this.size = 30;
	this.width=this.size;
	this.height=this.size;
	this.colour = "Red";
	
}

function Foodgen(){
	this.generate = function(){
		
		//RANDOMLY PLACE FOOD IN CANVAS
		//console.log(Math.round(number / 10) * 10); //SIZE FFS FIX IDIOT

		let x = Math.round(Math.floor((Math.random()*canvas.width-1)-1)/30)*30;
		let y = Math.round(Math.floor((Math.random()*canvas.height-1)-1)/30)*30;
		
		let f = new Food(x,y);

		game.entities.push(f);

		//console.log(game.entities);
	}
}