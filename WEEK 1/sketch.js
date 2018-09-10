var x = 50
var y = 50
var d = 150
var s = 80

function setup() {
createCanvas(800, 800);
background(204);
}

function draw() {
  // put drawing code here

  beginShape();
  rect(x,y,s, s);
  rect(x+d,y, 2*s,2*s);
  rect(x+2*d+s,y,3*s, 3*s);


}
