/*

Generating data points by hand: each value has been added manually to 
data array

(Note: DataPoint.js can be found in the commons folder, each example 
will use the same object)

*/

var num = 500;
var data = [];

function setup() {
  createCanvas(displayWidth,displayHeight); 
  background(255);
  
  // create datapoints, manually

  var d1 = new DataPoint();
  d1.setPos( createVector( 100, height / 2 ) ).setHeight( 5 );
  data.push(d1);
  
  var d2 = new DataPoint();
  d2.setPos( createVector( 140, height / 2 ) ).setHeight( 10 );
  data.push(d2);

  var d3 = new DataPoint();
  d3.setPos( createVector( 180, height / 2 ) ).setHeight( 2 );
  data.push(d3);

  var d4 = new DataPoint();
  d4.setPos( createVector( 220, height / 2 ) ).setHeight( 80 );
  data.push(d4);

  var d5 = new DataPoint();
  d5.setPos( createVector( 260, height / 2 ) ).setHeight( 120 );
  data.push(d5);

  for( var d in data ) {
    data[d].setWidth(10);
  } 
}

function draw() {
	background(20); 
  var v = createVector(mouseX, mouseY);
  
	for(var d in data) {
		data[d].drawBar();
	}
}


