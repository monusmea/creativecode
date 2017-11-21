/*

Load pre-processed audio files and listen to them based on their position in the similarity space.
The audio files are segmented based on Mel Frequency Cepstrum Coefficients (MFCC) a spectral processing method
that is oftenly used within speech recognition. Their similarity feature vectors are resulting from this data,
their positions are already iterated over on a t-SNE algorithm. The code translated from Processing to P5JS based 
on the following repository: https://github.com/genekogan/AudioTSNE

*/

var json;
var clips = [];

function preload() {
  json = loadJSON("data/bohemian.json");
}

function setup() {
  createCanvas(displayWidth,displayHeight); 
  background(80);

  var count = Object.keys(json).length;
  for(var i = 0; i<count; i++) {
    var x = json[i].x;
    var y = json[i].y;
    var path = json[i].path;
    clips.push( new SoundClip(path, x, y) );
  }

}

function draw() {
  background(20);
  for(var c in clips) {
    clips[c].draw();
  }
}

function mouseMoved() {
  for(var i=0; i<clips.length; i++) {
    var dx = mouseX - clips[i].x * width;
    var dy = mouseY - clips[i].y * height;
    var distToMouse = dx * dx + dy * dy;
    if( distToMouse < 500 && !clips[i].playing ) {
      clips[i].play();
    } else if( distToMouse > 500 && clips[i].playing) {
      clips[i].stop();
    }
  }
}

// SoundClip Prototype
function SoundClip(path, x, y) {
  this.path = path;
  this.x = x;
  this.y = y;;
  this.sound = loadSound("data/" + this.path);
  this.playing = false;

  SoundClip.prototype.play = function() {
    this.sound.loop();
    this.playing = true;  
  }
  SoundClip.prototype.stop = function() {
    this.sound.pause();
    this.playing = false;  
  }
  SoundClip.prototype.draw = function() {
    if(this.playing) {
      stroke(0,255,0);
    } else {
      stroke(255);
    }
    fill(255,0,0,120);
    ellipse(this.x * width, this.y * height, 5, 5);
  }
}


