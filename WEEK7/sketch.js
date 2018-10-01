var giraffe;
var panda;

function preload(){
  giraffe=loadImage('giraffe.JPG');
  panda=loadImage('panda.jpg');
}

function setup(){
  createCanvas(480,240);
}

function draw(){
  backgorund(240);
  image(giraffe,mouseX-120,mouseY-60, 240,120);
  image(panda,240,120,240,120)

}
