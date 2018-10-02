var giraffe;
var panda;

function preload(){
  giraffe=loadImage('giraffe.jpg');
  panda=loadImage('panda.jpg');
}

function setup(){
  createCanvas(480,240);
  background(204);
}

function draw(){
  image(giraffe,mouseX-120,mouseY-60,240,120);
  image(panda,240,120,240,120)

}
