/*

Generate multiple datapoints & display them based on their similarities
using the tSNE algorithm

*/

var num = 1000;
var tsne;
var Y;
var stepCount = 0;
var data = [];
var features = [];

function setup() {
  createCanvas(displayWidth,displayHeight); 
  background(80);

  var opt = {}
  opt.epsilon = 30; // epsilon is learning rate (10 = default)
  opt.perplexity = 30; // roughly how many neighbors each point influences (30 = default)
  opt.dim = 2; // dimensionality of the embedding (2 = default)

  tsne = new tsnejs.tSNE(opt); // create a tSNE instance
  
  for(var i=0; i<num; i++) {
    
    // generating random data
    var f1 = random(255);
    var f2 = random(255);
    var f3 = random(255);

    // add generated data to an array of feature vectors
    features.push( [f1, f2, f3] ); // feature vector's length (components) can be selected freely

    var d = new DataPoint();
    // use data as color components for the datapoints
    d.setCol( f1, f2, f3, 255 ).setSize(4);
  	data.push(d);
  }
  
  tsne.initDataRaw(features);
  Y = tsne.getSolution(); // Y is an array of 2-D points that you can plot
}

function draw() {
	background(80); 
  
  stepCount++;
  if(stepCount<1000) {
    tsne.step();
  }

  for(var i=0; i< Y.length; i++) {
    data[i].setPos( createVector(Y[i][0] * 10 + width/2, Y[i][1] * 10 + height/2) ).drawPoint();
  }
}


