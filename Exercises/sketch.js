var x=120
var y=50
var d=10
var a=250

function setup(){
  createCanvas(480,120);
background(204);
  noFill();
}

function draw(){
  ellipse(x,y,d,d);
  ellipse(x,y,2*d,2*d);
  ellipse(x,y,3*d,3*d);
  ellipse(x,y,4*d,4*d);
  ellipse(x,y,5*d,5*d);
  ellipse(x,y,6*d,6*d);
  ellipse(a,y,d,d,);
  ellipse(a,y,2*d,2*d);
  ellipse(a,y,3*d,3*d);
  ellipse(a,y,4*d,4*d);
  ellipse(a,y,5*d,5*d);
  ellipse(a,y,6*d,6*d);
}
