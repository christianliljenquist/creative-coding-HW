var radius=40;
var x= 110;
var speed=8;
var direction=1;



function setup(){
  createCanvas(500,500);
  ellipseMode(RADIUS);
}

function draw(){
  background(204);


  x+= speed*direction;
  if ((x>width-radius)|| (x<radius)) {
    direction=-direction; //flip ndirectio
  }
  if (direction==1){
    fill(255,255,0);
    arc(x,60,radius,radius,0.52,5.76); //Face right
  }else{
    fill(255, 0, 0);
    arc(x,60,radius,radius,3.67,8.9); //Face left
  }


}
