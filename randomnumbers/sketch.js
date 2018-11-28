var tblyllw;
var tblblue;
var yellow;
var blue;
var platey;
var plateb;
var napkiny;
var napkinb;
var forky;
var forkb;
var knifey;
var knifeb;
var milky;
var milkb;
var spoony;
var spoonb;
var coffeey;
var coffeeb;
var bfy;
var bfb;



function preload() {
  tblyllw = loadImage('tblyllw.png');
  tblblue = loadImage('tblblue.png');
  yellow = loadImage ('yellow.png');
  blue = loadImage ('blue.png');
  platey = loadImage ('plate.y.png');
  plateb = loadImage ('plate.b.png');
  napkiny = loadImage ('napkin.y.png');
  napkinb = loadImage ('napkin.b.png');
  forky = loadImage ('fork.y.png');
  forkb = loadImage ('fork.b.png');
  knifey = loadImage ('knife.y.png');
  knifeb = loadImage ('knife.b.png');
  milky = loadImage ('milk.y.png');
  milkb = loadImage ('milk.b.png');
  spoony = loadImage ('spoon.y.png');
  spoonb = loadImage ('spoon.b.png');
  coffeey = loadImage ('coffee.y.png');
  coffeeb = loadImage ('coffee.b.png');
  bfy = loadImage ('bf.y.png');
  bfb = loadImage ('bf.b.png');
}


function setup() {
  createCanvas(800, 700);
}

function draw () {
  image (yellow, 0, 0, 800, 400);
btn=createButton('Eggs and Toast?');
btn.position(100,50);
btn=createButton('Waffles?');
btn.position(100,100);

}
