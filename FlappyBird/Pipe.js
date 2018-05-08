function Pipe(min, max, speed){
  this.Spacing = random(min,max);
  this.Top = random(20, height - 20 - this.Spacing);
  this.Bottom = height - this.Top - this.Spacing;
  this.x = width;
  this.w = 30;
  
  this.Show = function(){
    fill(255);
    rect(this.x, 0, this.w, this.Top);
    rect(this.x, height-this.Bottom, this.w, this.Bottom);
  }
  
  this.Update = function(){
    this.x -= speed;
  }
  
  this.offScreen = function(){
    return this.x < -(this.w) ? true : false; 
  }
  
 }
