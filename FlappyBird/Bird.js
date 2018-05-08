function Bird(){
  this.y = height/2;
  this.x = 64;
  this.Velocity = 0;
  this.Gravity = 1;
  this.Lift = -15;

  this.Show = function(){
    fill(255);
    ellipse(this.x, this.y, 32, 32);
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
    this.Velocity += this.Lift;
  }
  
}
