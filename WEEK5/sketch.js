var x=60;
function setup() {
  createCanvas(500, 500);
 
}

function draw() {
background(204);
fill(255,255,0);
arc(x,60,radius,radius,0.52,5.76);
if(keyIsPressed){
  if(keyCode ==LEFT_ARROW){
    x=x-5;
  }else if(keyCode==RIGHT_ARROW){
    x=x+5;
  }
}
}
