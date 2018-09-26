function setup(){
  createCanvas(480,120);
  background();
}

function draw(){
  if(mouseIsPressed && mouseButton== LEFT && mouseX>90 && mouseX<150 && mouseY>30 && mouseY<100){
    fill(255,0,0);
  } else {
    fill(255);
  }
  rect(90,30,60,60);

  if(mouseXIsPressed && mouseButton== RIGHT && mouseY>30 && mouseY<90 && mouseX>330 && mouseX<390){
    fill(0,255,0);
  } else{
    fill(255);
  }

  rect(330,30,60,60);
}
