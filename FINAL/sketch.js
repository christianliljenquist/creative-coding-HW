function setup() {
  createCanvas(400, 400);
  textSize(50);
  textAlign(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255,0,0);
  stroke(255);
  strokeWeight(8);
  noFill();
}

if(keyCode==RIGHT_ARROW){
  background(200, 255, 0);
  stroke(255);
  strokeWeight(8);
  noFill();
  ellipse(150, 150, 40, 40);
  ellipse(250, 150, 40, 40);
  if (mouseIsPressed) {
    arc(200,300,200,180,360,180);
    fill(102, 255, 102);
    text('WOOOHOOO',20,50,400);
    fill(255,0,0);
    text('YAY',50,200,20);
  }
