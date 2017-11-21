/*

Create reusable complex objects that are organized in different files

*/

var obj;

function setup() {
  createCanvas(displayWidth,displayHeight); 
  background(255);
  
  //  TweenObject is the other file this sketch refers to
  obj = new TweenObject(width/2, height/2, .5,.9);   //  starting position, damping, attraction  
}

function draw() {
  obj.update();
  
  background(20); 
  
  obj.draw();
}

function mousePressed(){
  //  set new targets to tween to
  obj.target(mouseX, mouseY);
  
}

