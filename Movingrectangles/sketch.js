var x=240




function setup(){
  createCanvas(500,500);

  background(204);
}

function draw(){

if (keyIsPressed){
  if(keyCode==LEFT_ARROW){
    x=x-5;

  }
  if (keyCode==RIGHT_ARROW){
    x=x+5;
  }
}

  fill(255,0,0);
  //when the key is pressed the 3rd value has to be changed
  rect(0,0,x,height);
  fill(0,0,255);
  //when the key is pressed, the 1st and 3rd value have to be changed
  rect(x,0,width-x,height);
}
