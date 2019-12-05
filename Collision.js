





//COLLISSION

function Detector(){
	this.is_colliding = function(A,B){

		let smalla = [A.x,A.y];
		let biga = [A.x+A.width,A.y+A.height];
		let smallB = [B.x,B.y];
		let bigB = [B.x+B.width,B.y+B.height];

		return !(biga[0]<smallB[0]||bigB[0]<smalla[0]||biga[1]<smallB[1]||bigB[1]<smalla[1]);

	}
	this.colliding = function(rect1,rect2){
		
		
		if (rect1.x < rect2.x + rect2.width &&
   		rect1.x + rect1.width > rect2.x &&
   		rect1.y < rect2.y + rect2.height &&
   		rect1.y + rect1.height > rect2.y) {
    		// collision detected!
    		return true;
		}
	}
}