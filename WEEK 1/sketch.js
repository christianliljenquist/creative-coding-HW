var x=240;
var y=60;
var d=10;

function setup() {
createCanvas(800, 800);

noFill();

}

function draw() {
  // put drawing code here
  background(204);
  for(var i = 3; i < 21; i++){
    ellipse(x,y,i*d, i*d);

  }
}
