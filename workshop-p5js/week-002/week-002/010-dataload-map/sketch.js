/*

Load CSV (comma separated value) file into array, visualize values using our custom DataPoints
We are using map based data, with locations this time

*/

var table;
var lat;
var lon;
var pops;
var lab;

var myFont;

function preload() {
  table = loadTable("../common/huncitiespop.csv", "csv", "header");
  myFont = loadFont('../common/DinBold.ttf');
}

var num = 500;
var data = [];

function setup() {
  createCanvas(displayWidth,displayHeight); 
  background(60);
  
  textFont(myFont);
  textSize(26);

  // get different columns from CSV, based on header names
  lat = table.getColumn("Latitude");
  lon = table.getColumn("Longitude");
  pops = table.getColumn("Population");
  lab = table.getColumn("AccentCity");

  // mapping values into useful boundaries
  var minLat = getMinOfArray(lat);
  var maxLat = getMaxOfArray(lat);

  var minLon = getMinOfArray(lon);
  var maxLon = getMaxOfArray(lon);

  var minPop = getMinOfArray(pops);
  var maxPop = getMaxOfArray(pops);

  for(var i=0; i<table.getRowCount(); i++) {
  	var d = new DataPoint();
    d.setPos( createVector( map( lon[i], minLon, maxLon, 0, width ), map(lat[i],maxLat,minLat,0,height ) ) ).setSize( map( pops[i], minPop, maxPop/10, 4, 10) ).setCol( map( pops[i], minPop, maxPop/100, 10, 200), 0, 0, 200 ) ; 
    d.setLabel( lab[i] );
  	data.push(d);
  }
}

function draw() {
	background(60); 
  var v = createVector(mouseX, mouseY);
  
	for(var d in data) {
		data[d].drawPoint();
  }

  // interact with the mouse, display the label on hover
  // not accurate, only proof of concept
  for(var d in data) {
    if(data[d].pos.dist(v) < 10) {
      var txt = data[d].label;
      var w = textWidth(txt);
      fill(0);
      rect(data[d].pos.x-10,data[d].pos.y-30,w*1.4,40);
      fill(255);
      text(txt, data[d].pos.x, data[d].pos.y);
      return;
    }
  }

  fill(255);
  text(int(frameRate()),30,30);
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}


