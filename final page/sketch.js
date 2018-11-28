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
  else {
    line(100, 275, 300, 275);
  }
