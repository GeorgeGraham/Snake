


function Apple(inputx,inputy,inputwidth,inputheight){
	this.width = inputwidth;
	this.height = inputheight;
	this.x = inputx;
	this.y = inputy;
}

function Part(inputx,inputy,inputwidth,inputheight){
	this.width = inputwidth;
	this.height = inputheight;
	this.x = inputx;
	this.y = inputy;

	//Snake Customisability
	this.getRandomColor = function() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	this.colour = this.getRandomColor();

	//LASTPOS MOVE TESTING
	this.lx=0;
	this.ly=0;
	this.nx=0;
	this.ny=0;
}


function Snake(){

	this.parts = [];
	this.head = this.parts[0] || "undefined";

	this.direction = "up";
	this.size = 30;

	this.initiate = function(){
		let p1 = new Part(this.size*3,this.size*3,this.size,this.size);
		let p2 = new Part(this.size*3,(this.size*3)+this.size,this.size,this.size);

		// TEST
		let p3 = new Part(this.size*3,(this.size*3)+this.size*2,this.size,this.size);


		this.parts.push(p1);
		this.parts.push(p2);
		this.parts.push(p3);
		

	}
	this.move = function(event){
		console.log("Move");
		if(event.code=="KeyS"){
			this.direction="down";
		}
		if(event.code=="KeyA"){
			this.direction="left";
		}
		if(event.code=="KeyD"){
			this.direction="right";
		}
		if(event.code=="KeyW"){
			this.direction="up";
		}
	}
	
	this.update_body = function(){
		// for all body parts , make sure they move towards the next "linked" part.
		console.log("update body")

		this.head = this.parts[0] || "undefined";

		
		

		for(x=1;x<this.parts.length;x++){
			

			let infront = this.parts[x-1];
			let current = this.parts[x];

			current.lx = current.x;
			current.ly = current.y;
			infront.lx = infront.x;
			infront.ly = infront.y;

			//console.log(current.lx);
			//console.log(infront.lx);
			
			current.nx = infront.lx;
			current.ny = infront.ly;

		}
		if(this.direction=="up"){
			this.head.y -= this.size;
		}
		if(this.direction=="left"){
			this.head.x-=this.size;
		}
		if(this.direction=="right"){
			this.head.x+=this.size;
		}
		if(this.direction=="down"){
			this.head.y+=this.size;
		}
		for(x=1;x<this.parts.length;x++){

			let current = this.parts[x];
			current.x = current.nx
			current.y = current.ny
		}
		//SNAKE GROWING 
		this.grow = function(position){
				// difference between current and infront. run after snake updated movement.
				
				let x = this.parts[this.parts.length-1].x;
				let y = this.parts[this.parts.length-1].y;

				let part = new Part(x,y,this.size,this.size);
				this.parts.push(part);
		}
	}
}