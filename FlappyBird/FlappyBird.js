var game;
var FCount;

function setup() {
  createCanvas(500,700);
  Sketch();
}

function draw() {
  FCount++;
  background(0);
  
  game.Run();
}

function Sketch(){
  FCount = 1;
  game = null;
  game = new Game(120, 240, 1.7, 140);
  game.Start();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    game.BirdUp();
  }
}
