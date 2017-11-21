/*

Introducing colors (RGB, HSB, etc), taken from github.com/northcoders/p5js-examples/

*/

var firstCol, firstRow;
var sw;
var horBottomDiv, verBottomDiv;
var r, g, b;

function setup() {
  createCanvas(displayWidth,displayHeight);  
  sw = 20;
}

function draw() {
  firstCol = mouseX;
  firstRow = mouseY;
  
  // function to map a value from numeric range to another range
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, height, 0, 0, 255);
  b = map((mouseX + mouseY) / 2, 0, width + height, 0, 255);
  
  // set fill to white
  fill(255);
  strokeWeight(sw);

  // first 2 white rectangles
  rect(-sw, -sw, firstCol, firstRow/2);
  rect(-sw, firstRow/2, firstCol, firstRow/2);
  
  // blue
  fill(r, g, 200);
  rect(-sw, firstRow, firstCol, height);
  
  // red
  fill(200, g, 10);
  rect(firstCol-sw, -sw, width, firstRow + sw);
  
  // white
  fill(255);
  horBottomDiv = (width - firstCol) * 3 / 4;
  verBottomDiv = (height - firstRow) / 2;
  rect(firstCol-sw, firstRow, horBottomDiv+sw, height);
  rect(firstCol + horBottomDiv, firstRow, width, verBottomDiv);
  
  // yellow
  fill(g, r, b);
  rect(firstCol + horBottomDiv, firstRow + verBottomDiv, width, height);
}
