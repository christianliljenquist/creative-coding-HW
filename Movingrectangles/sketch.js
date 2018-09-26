var x=60
var y=80



function setup(){
  createCanvas(500,500);


}

function draw(){
background(0);
fill(255);
if(keyIsPressed){
  if(keyCode==LEFT_ARROW){
    x=x-5;

  }

 if(keyCode==RIGHT_ARROW){
    x=x+5;
  }

 if(keyCode==UP_ARROW){
   y=y+5
 }
if(keyCode==DOWN_ARROW){
   y=y-5
 }
}

rect(x,y,40,40);
if(keyCode=='C'){

  stroke(255,0,0);
  line(x,y,x+40,y);
}
}
