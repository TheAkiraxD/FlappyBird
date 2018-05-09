var Score;

function Game(SpacingMin, SpacingMax, Speed, Frequency){
  this.Color = 0;
  this.Finished = false;
  this.Difficulty = 1;
  this.Min = SpacingMin - (this.Difficulty*5);
  this.Max = SpacingMax - (this.Difficulty*5);
  this.Speed = Speed;
  this.Frequency = Frequency;
  var pipes = [];
  var bird;
  
  
  this.Start = function(){
    pipes.push(new Pipe(this.Min, this.Max, this.Speed));
    bird = new Bird();
    Score = 0;
  }
  
  this.Run = function(){
    this.BirdRun();
    this.PipesRun();
    this.TextRun();
  }
  
  this.TextRun = function(){
    textAlign(CENTER);
    textSize(42); 
    textFont("Arial Black");
    fill(255, 160 - Score,50);
    text(Score, 250, 100);
  }
  
  this.BirdUp = function(){
    bird.Up();
  }
  
  this.BirdRun = function(){
    bird.Show();
    bird.Update();
  }
  
  this.PipesRun = function(){
     if(FCount % this.Frequency == 0){
       pipes.push(new Pipe(this.Min, this.Max, this.Speed));
     }
       
    for(var x = pipes.length-1; x >= 0 ; x--){
      pipes[x].Show();
      pipes[x].Update(bird);
      
      if(pipes[x].Hit(bird)){
        bird.Stop = true;
        alert("You lose.\nYour score: " + Score);
        Sketch();
      }
      
      if(pipes[x].offScreen()){
        pipes.splice(x, 1);
      }
    }  
  }
  
}
