




//GAME OBJECT CONTROLS GAME




function Game(){// defines the game
	
	this.time =0;

	this.entities = [];

	this.start = function(){
		
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

		if(this.time%50==0){
			snake.update_body();
		}
		


		if(d.colliding(snake.parts[0],snake.parts[3])==true){
			alert("collission");
		}


		renderer.render(snake);


		


		window.requestAnimationFrame(this.update.bind(this));
		
	}
}


document.addEventListener("keydown",function(e){
	console.log("key");
	game.entities[0].move(e);

});