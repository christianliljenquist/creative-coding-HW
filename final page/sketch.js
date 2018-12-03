var img;

function preload(){
img = loadImage('fire.png');
}

function setup() {
  createCanvas(800, 800);
  textSize(50);
  textAlign(CENTER);
  angleMode(DEGREES);
}
//how i felt when i heard we had a project
function draw() {
  
  stroke(255);
  strokeWeight(2);
  noFill();
  text('WOOOHOOO',20,50,400);
image(img,o,o);
  text('1st Place!!', 100,500,300);
}
