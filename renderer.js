var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


function Renderer(){

	this.cw = canvas.width;
	this.ch = canvas.height; // FOR NOW HAVE THESE ON THIS OBJECT

	this.draw_rect = function(object){
		context.beginPath();
		context.fillStyle = object.colour;
		context.rect(object.x,object.y,object.width,object.height);
		context.fill();
	}
	this.clear_screen = function(){
		context.clearRect(0,0,canvas.width,canvas.height);
	}
	this.render = function(object){
		for(i=0;i<object.parts.length;i++){
			this.draw_rect(object.parts[i]);
		}
	}
}