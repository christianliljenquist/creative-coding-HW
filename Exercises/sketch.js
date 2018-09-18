var x= 240;
var y=60;
var d=10;


function setup(){
  createCanvas(500,500);
  background(204);
  noFill();
}


function draw(){
  for(var i=1; i<15; i++);
  ellipse(x,y,i*d,i*d);
}
