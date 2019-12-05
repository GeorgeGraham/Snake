




//GAME OBJECT CONTROLS GAME




function Game(){// defines the game
	
	this.time =0;

	this.entities = [];

	this.start = function(){
		

		
		console.log(food);
		//INITIATE SNAKE OBJECT , ADD TO GAME
		let s = new Snake();
		s.initiate();
		this.entities.push(s);



		window.requestAnimationFrame(this.update.bind(this));
	}
	this.update = function(){
		console.log("update");
		this.time++;

		renderer.clear_screen();

		//DO THINGS

		let snake = this.entities[0];

		if(this.time%5==0){
			snake.update_body();
		}
		if(this.time%5==0){
			food.generate();
		}
		

		//SNAKE KILL ITSELF..
		//if(d.colliding(snake.parts[0],snake.parts[2])==true){
		//	alert("collission");
		//}
		for(x=1;x<=this.entities.length-1;x++){
			if(d.colliding(snake.parts[0],this.entities[x])){
				
				this.entities.splice(x,1);
				
				snake.grow();// Make snake increase in size.

			}
			// RENDER ALL FOOD and entities apart from SNAKE
		}
		

		//console.log (this.entities.length);

		for(x=1;x<=this.entities.length-1;x++){
			renderer.draw_rect(this.entities[x]);
			// RENDER ALL FOOD and entities apart from SNAKE
		}

		renderer.render(snake);


		window.requestAnimationFrame(this.update.bind(this));
		
	}
}


document.addEventListener("keydown",function(e){
	console.log("key");
	game.entities[0].move(e);

});