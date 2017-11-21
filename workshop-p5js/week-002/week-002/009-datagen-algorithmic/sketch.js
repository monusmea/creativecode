/*

Generate multiple datapoints that can be extended according to different data types
(Note: DataPoint.js can be found in the commons folder, each example will use the same object)

Generating values for different datapoints can be done using different algorithms and 
distributions, as shown below

*/

var num = 500;
var data = [];

function setup() {
  createCanvas(displayWidth,displayHeight); 
  background(255);
  
  for(var i=0; i<num; i++) {
  	var d = new DataPoint();
    // random
    //d.setPos( createVector( random(width), random(height)) ).setSize( 5 ).setLabel( int( random(100) ).toString() );
    // sine
    d.setPos( createVector( i / num * width, sin(i/20) * i + height / 2 ) ).setSize( 5 ).setLabel( int( d.pos.x ).toString() );
  	data.push(d);
  }
}

function draw() {
	background(20); 
  var v = createVector(mouseX, mouseY);
  var area = 100;
  
  stroke(255,0,0,100);
  noFill();
  ellipse(v.x,v.y,area*2,area*2);

	for(var d in data) {
		data[d].drawPoint();
    if( v.dist(data[d].pos) < area) {
        data[d].drawLabel();
    }
	}
}


