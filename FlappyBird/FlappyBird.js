var game;

function setup() {
  createCanvas(400,600);
  
  game = new Game(100, 200, 1.7, 130);
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
