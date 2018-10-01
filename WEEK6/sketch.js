var angle=120
function setup(){
  createCanvas(500,500);
background(204);
angleMode(DEGREES);
strokeWeight(40);
}


function draw(){
  line(300,0,0,300);
  rotate(angle);
  line(200,200,200,200);



}
