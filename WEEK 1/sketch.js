var x = 20
var y = 20
var d = 100
var s = 300

function setup() {
createCanvas(480, 120);
strokeWeight(2);

}

function draw() {
  // put drawing code here
  background(204);
  for(var i=20; i<400; i+=20){
    line(i,0, i+i/2, 80)
    fill(255,0,0);
    ellipse(i+i/2, 80, 20,20);

  }
}
