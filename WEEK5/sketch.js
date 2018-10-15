var x=60;
var y=40;
function setup() {
  createCanvas(720, 400);
 
}

function draw() {
background(0);
fill(0,255,0);
ellipse(500, 50, 50, 50);
fill(0,255,0);
ellipse(400, 50, 50, 50);
fill(0,255,0);
ellipse(300, 50, 50, 50);
fill(255,255,0);
arc(x,60,90,90,0.52,5.76);
if(keyIsPressed){
  if(keyCode ==LEFT_ARROW){
    x=x-5;
  }else if(keyCode==RIGHT_ARROW){
    x=x+5;
      }
    }



  }
