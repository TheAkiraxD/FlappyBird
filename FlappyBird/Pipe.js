function Pipe(){
  this.Spacing = random(60,120);
  this.Top = random(20, height - 20 - this.Spacing);
  this.Bottom = height - this.Top - this.Spacing;
  this.x = width;
  this.w = 20;
  
  this.Show = function(){
    fill(255);
    rect(this.x, 0, this.w, this.Top);
    rect(this.x, height-this.Bottom, this.w, this.Bottom);
  }
  
 }
