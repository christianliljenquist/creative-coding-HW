var giraffe;
var panda;

function preload(){
  giraffe=loadImage('giraffe.JPG');
  panda=loadImage('panda.jpg');
}

function setup(){
  createCanvas(480,240);
  background(204);
}

function draw(){
  image(giraffe,0,0,240,120);
  image(panda,240,100,100)

}
