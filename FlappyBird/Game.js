function Game(){
  this.Score = 0;
  this.Finished = false;
  this.Difficulty = 1;
  this.Min = 100 - (this.Difficulty*5);
  this.Max = 200 - (this.Difficulty*5);
  this.Speed = 1.7;
  this.Frequency = 130;
  var pipes = [];
  var bird;
  
  
   this.Start = function(){
     pipes.push(new Pipe(this.Min, this.Max, this.Speed));
     bird = new Bird();
   }
  
  this.Run = function(){
    this.BirdRun();
    this.PipesRun();
  }
  
  this.BirdUp = function(){
    bird.Up();
  }
  
  this.BirdRun = function(){
    bird.Show();
    bird.Update();
  }
  
  this.PipesRun = function(){
     if(frameCount % this.Frequency == 0){
       pipes.push(new Pipe(this.Min, this.Max, this.Speed));
     }
       
    for(var x = pipes.length-1; x >= 0 ; x--){
      pipes[x].Show();
      pipes[x].Update();
      if(pipes[x].offScreen()){
        pipes.splice(x, 1);
      }
    }  
  }
  
}