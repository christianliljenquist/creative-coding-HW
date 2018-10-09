function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  ellipse(150, 150, 40, 40);
  ellipse(250, 150, 40, 40);
  if (mouseIsPressed) {
    rect(100, 250, 200, 50);
  }
  else {
    line(100, 275, 300, 275);
  }
}
