function DataPoint() {
  this.pos = createVector(0,0);
  this.label = "";
  this.color = color(255);
  this.size = 1;
  this.width = 1;
  this.height = 1;

  DataPoint.prototype.drawPoint = function() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);  
  }

  DataPoint.prototype.drawPointToTexture = function(t) {
    t.noStroke();
    t.fill(this.color);
    t.ellipse(this.pos.x, this.pos.y, this.size, this.size);  
  }

  DataPoint.prototype.drawRect = function() {
    noStroke();
    fill(this.color);
    rect(this.pos.x- this.size/2, this.pos.y-this.size/2, this.size, this.size);  
  }

  DataPoint.prototype.drawBar = function() {
    noStroke();
    fill(this.color);
    rect(this.pos.x- this.size/2, this.pos.y-this.size/2, this.width, -this.height);  
  }

  DataPoint.prototype.drawLabel = function() {
    noStroke();
    fill(this.color);
    textSize(18);
    text(this.label, this.pos.x, this.pos.y);  
  }

  DataPoint.prototype.setLabel = function(l) {
  	this.label = l;
  	return this;
  }

  DataPoint.prototype.setPos = function(p) {
  	this.pos = p;
  	return this;
  }

  DataPoint.prototype.setCol = function(r,g,b,a) {
  	this.color = color(r,g,b,a);
  	return this;
  }

  DataPoint.prototype.setSize = function(s) {
  	this.size = s;
  	return this;
  }

  DataPoint.prototype.setWidth = function(w) {
    this.width = w;
    return this;
  }

  DataPoint.prototype.setHeight = function(h) {
    this.height = h;
    return this;
  }
}


