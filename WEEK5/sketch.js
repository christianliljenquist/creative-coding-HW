function setup(){
  createCanvas(480,120);
  background();
}

function draw(){
  if(mouseYIsPressed){
    fill(255,0,0);
  } else {
    fill(255);
  }
  rect(90,30,60,60);

  if(mouseXIsPressed){
    fill(0,255,0);
  } else{
    fill(255);
  }

  rect(330,30,60,60);
}
