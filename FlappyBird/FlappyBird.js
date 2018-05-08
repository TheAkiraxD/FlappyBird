var game;

function setup() {
  createCanvas(400,600);
  
  game = new Game();
  game.Start();
}

function draw() {
  background(0);
 
  game.Run();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    game.BirdUp();
  }
}
