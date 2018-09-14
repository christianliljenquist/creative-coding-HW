var d=10

function setup() {
createCanvas(800, 800);
strokeWeight(2);

}

function draw() {
  // put drawing code here
  background(204);
  for(var i=1; i<21; i++){
    ellipse(x,y,i*d, i*d);

  }
}
