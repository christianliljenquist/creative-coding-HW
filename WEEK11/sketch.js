  function Smiley(initX,initY,size){
    this.x =initX;
    this.y =initY;
    this.size = size;

    this.smile = function(){
      ellipse(this.x,this.y,this.size,this.size);
      ellipse(this.x+this.size/4,this.y-this.size/4,10,10);
      ellipse(this.x-this.size/4,this.y-this.size/4,10,10);
      arc(this.x,this.y,this.x/2,this.y/2,60,120);
    }
  }

var smiley1;

function setup() {
  createCanvas(480,240);
  background(0,0,128);
  angleMode(DEGREES);
  smiley1 = new Smiley(width/2,height/2,80);
}

function draw(){
  smiley1.smile();
}










//js stands for java script , set ups draw once while draw puts up 60 frames per second
