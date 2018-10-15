


function setup() {
  createCanvas(400, 400);
  textSize(50);
  textAlign(CENTER);
  angleMode(DEGREES);
}
//how i felt when i heard we had a project
function draw() {
  background(255,0,0);
  stroke(255);
  strokeWeight(8);
  noFill();
  ellipse(150, 150, 40, 40);
  ellipse(250, 150, 40, 40);
  if (mouseIsPressed) {
    rect(100, 250, 200, 50);
    fill(0);
    text('AHHH',70,100,100);

  }
  else {
    line(100, 275, 300, 275);
  }

  //black background its okay
  if(keyCode==UP_ARROW){
    background(0);
    stroke(255);
    strokeWeight(8);
    noFill();
    ellipse(150, 150, 40, 40);
    ellipse(250, 150, 40, 40);
    if (mouseIsPressed) {
      ellipse(200,300,120,120);
      fill(255,0,0);
      text('ITS OKAY',20,50,400);
    }
    else {
      line(100, 275, 300, 275);
    }
  }
//pink background// stressed
if(keyCode==LEFT_ARROW){
  background(255, 0, 191);
  stroke(255);
  strokeWeight(8);
  noFill();
  ellipse(150, 150, 40, 40);
  ellipse(250, 150, 40, 40);
  if (mouseIsPressed) {
    arc(200,300,200,180,180,360);
    fill(102, 255, 102);
    text('STRESSED',20,50,400);
  }
  else {
    line(100, 275, 300, 275);
  }
}
//happy that its over
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
  }
  else {
    line(100, 275, 300, 275);
  }
}

}
