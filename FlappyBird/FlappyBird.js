var bird;
var pipes = [];
function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.Show();
  bird.Update();
  
 if(frameCount % 100 == 0){
   pipes.push(new Pipe());
 }
 
 
  for(var x = 0; x < pipes.length; x++){
    pipes[x].Show();
    pipes[x].Update();
  }
  
  
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    bird.Up();
  }
}
