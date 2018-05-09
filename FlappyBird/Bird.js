function Bird(){
  this.y = height/2;
  this.x = 70;
  this.Velocity = 0;
  this.Gravity = 0.9;
  this.Lift = 14;
  this.Diameter = 40;
  var Stop = false;
  
  this.Show = function(){
    fill(255);
    ellipse(this.x, this.y, this.Diameter, this.Diameter);
  }

  this.Update = function(){
    this.Velocity += this.Gravity;
    this.Velocity *= 0.9;
    this.y += this.Velocity;
    
    if(this.y > height){
      this.y = height;
      this.Velocity = 0;
    }
    
    if(this.y < 0){
      this.y = 0;
      this.Velocity = 0;
    }
  }
  
  this.Up = function(){
    for(var x = 0; x < this.Lift; x++){
      this.Velocity--;
      if(Stop)
        break;
    }
  }
  
}
