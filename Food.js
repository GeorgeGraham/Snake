
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

		let x = Math.round(Math.floor((Math.random()*canvas.width-1)/30))*30;
		let y = Math.round(Math.floor((Math.random()*canvas.height+1)/30))*30;
		
		//console.log("X",x);
		//console.log("Y",y);

		var f = new Food(x,y);

		//alert(game.entities[0].parts);
		var check = false;

		for(a=0;a<=game.entities[0].parts.length-1;a++){
			if(d.colliding(generated,game.entities[a])){
				check = true;
			}
		}

		if(check !==false){
			this.generate();
		}else{
			game.entities.push(f);
		}
		

		

		//console.log(game.entities);
	}
}