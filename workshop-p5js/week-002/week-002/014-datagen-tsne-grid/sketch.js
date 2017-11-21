/*

Generate multiple datapoints & display them based on their similarities
using the tSNE algorithm, apply grid alignment on them, using linear assignment
algorithm (lap-js)

*/

var num = 20 * 20;
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
    d.setCol( f1, f2, f3, 255 ).setSize(10);
  	data.push(d);
  }
  
  tsne.initDataRaw(features);
  Y = tsne.getSolution(); // Y is an array of 2-D points that you can plot
}

function draw() {
	background(20); 
  
  stepCount++;
  if(stepCount<1000) {
    tsne.step();
  }

  if(!showGrid) {
    for(var i=0; i< Y.length; i++) {
      data[i].setPos( createVector(Y[i][0] * 10 + width/2, Y[i][1] * 10 + height/2) ).drawPoint();
    }
  } else {
    osc = (sin(frameCount * 0.01)+1) / 2;
    for(var i=0; i<result.length; i++) {
      var v1 = createVector(data[i].pos.x, data[i].pos.y);
      var v2 = createVector(result[i][0] * 10 + width/2 - (m*m/4), result[i][1] * 10 + height/2 - (m*m/4));
      var v3 = createVector(v1.x,v1.y);
      v3.lerp(v2, osc);

      fill(data[i].color);
      rect(v3.x, v3.y, 10, 10);
    }
  }
}

const m = 20, n = m * m;// w = Math.ceil(440/m);
var result = [];
var solution;
var showGrid = false;
var osc;

function keyPressed() {
  if(key == 'G') {
    // align to grid
    for(var i=0; i<n; i++) {
      result.push([data[i].pos.x,data[i].pos.y]);
    }
    var costs = [];
    for(var d=0; d<n; d++) {
      var c = [];
      for (var k=0; k<n;k++) {
        const i = k % m, j = (k-i)/m;
        const dx = data[d].pos.x - i - 0.5, dy = data[d].pos.y - j - 0.5;
        c.push(dx * dx + dy * dy);
      } 
      costs.push(c);
    }
    solution = lap(n,costs);
  
    for(var c = 0; c < n; c++) {
      const i = c % m;
      const j = (c-i)/m;
      console.log(i);
      result[solution.col[c]][0] = i;
      result[solution.col[c]][1] = j;
    }
    showGrid = true;
  }
}


