var Score;
var RED;
var GREEN;
var BLUE;
  
function Game(SpacingMin, SpacingMax, Speed, Frequency){
  this.Finished = false;
  this.Difficulty = 1;
  this.Min = SpacingMin - (this.Difficulty*5);
  this.Max = SpacingMax - (this.Difficulty*5);
  this.Speed = Speed;
  this.Frequency = Frequency;
  var pipes = [];
  var bird;
  var TemporaryFCount;
  var FrequencyCount;
  var FrequencyBase;
  
  this.Start = function(){
    pipes.push(new Pipe(this.Min, this.Max, this.Speed));
    bird = new Bird();
    Score = 0;
    RED = 0;
    GREEN = 0;
    BLUE = 0;
    aux = 0;
    FrequencyCount = 0;
    FrequencyBase = 0;
    TemporaryFCount = FCount;
  }
  
  this.Run = function(){
    this.BirdRun();
    this.PipesRun();
    this.TextRun();
    this.DifficultyRun();
  }
  
  this.TextRun = function(){    
    textAlign(CENTER);
    textSize(42); 
    textFont("Arial Black");
    
    fill(255- RED,160 - GREEN,50 - BLUE);
    
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
    
     if(FrequencyCount == this.Frequency){
       pipes.push(new Pipe(this.Min, this.Max, this.Speed));
       FrequencyCount = FrequencyBase;
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
  
  this.DifficultyRun = function(){
    if(TemporaryFCount != FCount){
      FrequencyCount++;
      TemporaryFCount == FCount;
    }

    if(FCount % 280 == 0){
      this.Speed += 0.05;
    }
    if(this.Min > 60){
      if(FCount % 280 == 0){
        this.Min = this.Min -2;
        this.Max = this.Max -2;
        aux++;
      }
    }
    if(aux == 1 && FrequencyCount < (this.Frequency - 20)){
      FrequencyBase += 4;
      aux = 0;
      console.log(FrequencyBase);
    }
    
  }
  
}
