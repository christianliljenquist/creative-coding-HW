var img;

function preload(){
  img=loadImage('giraffe.jpg');
}

function setup(){
  createCanvas(480,240);
  background(204);
}

function draw(){
  Image(img,0,0);
}
