var bird;
var pipe;
function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipe = new Pipe();
}

function draw() {
  background(0);
  bird.Show();
  bird.Update();
  pipe.Show();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    bird.Up();
  }
}
