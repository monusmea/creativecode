/*

Example on zooming / panning using matrix transformations (push, translate, scale, pop)

*/

var panZoomController;
var scaler;
var pan; 

function setup() {
  createCanvas(displayWidth,displayHeight);
  panZoomController = new PanZoomController();
}
 
function draw() {
  pan = panZoomController.getPan();
  scaler = panZoomController.getScale();
  
  background(20);

  push();
  translate(pan.x, pan.y);
  scale(scaler, scaler);
  stroke(255,0,0,100);
  strokeWeight(1);
  drawGrid(40);
  drawScene();
  pop();
}

function drawScene() {
  noStroke();
  randomSeed(1);
  for (var i = 0; i < 500; i++) {
    stroke(255,150);
    noFill();
    rectMode(CENTER);
    if (random(1) < 0.5) {
      rect(random(0,width),random(0,height),12,12);
    } else {
      ellipse(random(0,width),random(0,height),12,12);
    } 
  }
}

function drawGrid(spacing) {
  for (var x = 0; x <= width; x += spacing) {
    line(x, 0, x, height);
  }
  for (var y = 0; y <= height; y += spacing) {
    line(0, y, width, y);
  }
}

function mouseDragged() {
  panZoomController.mouseDragged();
}
function mouseWheel(event) {
  panZoomController.mouseWheel(event.delta);
}

