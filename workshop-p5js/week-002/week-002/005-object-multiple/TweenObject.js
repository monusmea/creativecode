function TweenObject(valuex, valuey, damping, attraction) {
  this.valuex = valuex;
  this.valuey = valuey;
  this.damping = damping;
  this.attraction = attraction;
  this.velx = 0;
  this.vely = 0;
  this.accelx = 0;
  this.accely = 0;
  this.forcex = 0;
  this.forcey = 0;
  this.mass = 1;
  this.targeting;
  this.mytargetx;
  this.mytargety;
  this.r = random(255);
  this.s = random(20) + 5;
  
  TweenObject.prototype.set = function(v) {
    this.value = v;
  }

  TweenObject.prototype.update = function() {
    if (this.targeting) {
      this.forcex += this.attraction * (this.mytargetx - this.valuex);
      this.forcey += this.attraction * (this.mytargety - this.valuey);
    }

    this.accelx = this.forcex / this.mass;
    this.velx = (this.velx + this.accelx) * this.damping;
    this.valuex += this.velx;
    this.forcex = 0;

    this.accely = this.forcey / this.mass;
    this.vely = (this.vely + this.accely) * this.damping;
    this.valuey += this.vely;
    this.forcey = 0;
  }

  TweenObject.prototype.target = function(tx, ty) {
    this.targeting = true;
    this.mytargetx = tx;
    this.mytargety = ty;
  }


  TweenObject.prototype.noTarget = function() {
    this.targeting = false;
  }

  TweenObject.prototype.draw = function() {
    noStroke();
    fill(this.r,100,100,200);
    ellipse(this.valuex, this.valuey, this.s, this.s);
  }
}


