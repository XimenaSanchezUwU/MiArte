// sketch.js
//let moverX = 10;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(237, 207, 224);
  frameRate(5);
}

function windowResized() {
  centerCanvas();
}

/*
function mousePressed(){
  moverX = 10;
  //moverY = 20;
}
*/

function draw() {
stroke(random (255), random (255), 111);
strokeWeight(10);
fill (random (255), 130, random (173));
rect(random (1500), 590, 80, 80);
rect(random (1500), 50, 80, 80);
stroke(random (255), random (255), random (255));
fill (random (255), random (255), random (255));
rect(635, 215, 220, 220);
}