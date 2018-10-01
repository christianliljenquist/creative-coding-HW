var x=300
var y=300



function setup(){
  createCanvas(500,500);


}

function draw(){
background(0);
fill(255);
if(keyIsPressed){
  if(keyCode==LEFT_ARROW){
    x=x-5;
} else if(keyCode==RIGHT_ARROW){
  x=x+5;
} else if(keyCode==UP_ARROW){
  y=y-5;
} else if(keyCode==DOWN_ARROW){
  y=y+5;
} else if(key== 'd'){
  line(x+10,y,width,y);
  stroke(255,255,0);
}
}
rect(x,y,50,50);
}
