




//GAME OBJECT CONTROLS GAME




function Game(){// defines the game
	
	this.time =0;

	this.entities = [];

	this.started = false; // ONLY WHEN KEY PRESSED START GAME , could be used for pause

	this.start = function(){
		

		
		console.log(food);
		//INITIATE SNAKE OBJECT , ADD TO GAME
		let s = new Snake();
		s.initiate();
		this.entities.push(s);
		food.generate();
		

		window.requestAnimationFrame(this.update.bind(this));
	}
	this.update = function(){
		console.log("update");
		this.time++;
		
		renderer.clear_screen();

		this.back = new Back();
		renderer.draw_rect(this.back);

		//DRAW BACKGROND
		let snake = this.entities[0];

		

		if(this.started == true){
			
			


			//DO THINGS , Generate food and update snake movement.

			if(this.time%5==0){
				snake.update_body();

			}

			if(this.entities.length<2){
				food.generate();
				//alert(this.entities);
			}
			if(this.entities.length>2){
				console.log("FOOD ERROR");
			}

			//////////////////////////////////////////////////////


			// Collision Checks//////////////////////////////////////
			if(snake.parts[0].x >= renderer.cw || snake.parts[0].x <= 0-snake.parts[0].width){
				// snake has died run reset code.
				snake.parts = [];
				snake.initiate();
				this.started = false;
			}
			if(snake.parts[0].y >= renderer.ch || snake.parts[0].y <= 0-snake.parts[0].height){
				// snake has died run reset code.
				snake.parts = [];
				snake.initiate();
				this.started = false;
			}



			for(x=1;x<=this.entities.length-1;x++){
				if(d.colliding(snake.parts[0],this.entities[x])){
					
					this.entities.splice(x,1);
					
					snake.grow();// Make snake increase in size.
					
				}
				// RENDER ALL FOOD and entities apart from SNAKE
			}


			for(x=1;x<snake.parts.length;x++){
				if(d.colliding(snake.parts[0],snake.parts[x])){
					// IF COLLIDING REMOVE SNAKE
					snake.parts = [];
					snake.initiate();
					this.started = false;

					//snake.parts.splice(1,snake.parts.length-2);

					
				}
				
			}
			/////////////////////////////////////////////////


			
			//console.log (this.entities.length);

			

		}

		for(x=1;x<=this.entities.length-1;x++){
				renderer.draw_rect(this.entities[x]);
				// RENDER ALL FOOD and entities apart from SNAKE
			}

			renderer.render(snake);


		window.requestAnimationFrame(this.update.bind(this));
		
	}
	this.key_handler = function(e){
		// take key input if run , start game.
		this.started = true;

	}

}


document.addEventListener("keydown",function(e){
	//console.log("key");
	game.entities[0].move(e);
	game.key_handler(e);

});