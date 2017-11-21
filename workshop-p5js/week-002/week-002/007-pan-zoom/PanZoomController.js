var PanZoomController = function(){
  this.DIR_UP = createVector(0, -1);
  this.DIR_DOWN = createVector(0, 1);
  this.DIR_LEFT = createVector(-1, 0);
  this.DIR_RIGHT = createVector(1, 0);

  this.panVelocity = 40;
  this.scaleVelocity = 0.01;
  this.minLogScale = -5;
  this.maxLogScale = 5;

  this.logScale = 0;
  this.scale = 1;
  this.pan = createVector(0,0);
}

PanZoomController.prototype.mouseDragged = function() {
  mouse = createVector(mouseX, mouseY);
  pmouse = createVector(pmouseX,pmouseY);
  this.pan.add(mouse.sub(pmouse));
}

PanZoomController.prototype.mouseWheel = function(step) {
  this.logScale = constrain(this.logScale + step * this.scaleVelocity,
    this.minLogScale,
    this.maxLogScale);
  var prevScale = this.scale;
  this.scale = pow(2, this.logScale);
  var mouse = createVector(mouseX, mouseY);
  //pan = PVector.add(mouse, PVector.mult(PVector.sub(pan, mouse), scale / prevScale));
  this.pan.add(mouse, this.pan.sub(mouse).mult(this.scale / prevScale));
}
PanZoomController.prototype.moveByKey = function(direction) {
  this.pan.add(direction.mult(this.panVelocity));
}
PanZoomController.prototype.getScale = function() {
  return this.scale;
}
PanZoomController.prototype.setScale = function(scale) {
  this.scale = scale;
}
PanZoomController.prototype.getPan = function() {
  return this.pan;
}
PanZoomController.prototype.setPan = function(pan) {
  this.pan = pan;
}
PanZoomController.prototype.setPanVelocity = function(panVelocity) {
  this.panVelocity = panVelocity;
}
PanZoomController.prototype.setScaleVelocity = function(scaleVelocity) {
  this.scaleVelocity = scaleVelocity;
}
PanZoomController.prototype.setMinLogScale = function(minLogScale) {
  this.minLogScale = minLogScale;
}
PanZoomController.prototype.setMaxLogScale = function(maxLogScale) {
  this.maxLogScale = maxLogScale;
}