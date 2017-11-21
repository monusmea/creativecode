/*

Loop (iterate) over elements

*/


function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
	background(20);

	// loop over 1000 elements
	for( var i = 0; i < 1000; i++) {
		// color is based on wether the actual index in the loop is odd or even  
		if(i%2==0) {
			fill(237,57,162);
		} else {
			fill(57,189,237);
		}
		// draw a rectangle within each iteration
		noStroke();
		rect(0,i*3,width,2);
	}
}

