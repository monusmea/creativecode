/*

Create multiple objects of the same type

*/

var num = 300;
var objects = [];

function setup() {
	createCanvas(displayWidth,displayHeight); 
	
	for(var i=0; i<num; i++) {
  		var o = new TweenObject(random(width),random(height),random(0.1)+0.01,random(0.4)+0.01);   //  starting position, damping, attraction 
  		objects.push(o);
  	}	 
}

function draw() {	
  background(20);
  for(o in objects) {
  		objects[o].update();
  		objects[o].draw();
  	}
}

function mousePressed(){
	for(var o in objects) {
      // change member parameters on mouse press
      objects[o].damping = random(0.1)+0.01;
  		objects[o].target(mouseX + random(100)-50, mouseY + random(100)-50);
  	}
}

