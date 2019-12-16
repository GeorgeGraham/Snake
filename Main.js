// MAIN JS FILE
console.log("Main")

//CREATE OBJECTS

let d = new Detector();

let food = new Foodgen();

let renderer = new Renderer();

let game = new Game();


game.start();
var audio = new Audio("Music.mp3");
audio.play();

//let snake = new Snake();
//snake.initiate();
