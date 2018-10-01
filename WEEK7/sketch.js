var bgImg;
var houseImg

function preload(){
  bgImg=loadImage('landscape.jpg');
  houseImg=loadImage('house.png');
}

function setup(){
  createCanvas(480,240);
  background(204);
}

function draw(){
  image(bgImg,0,0);
  tint(255,20);
  image(houseImg,20,100,400,200);

}
