var offset = 0;
var easing = 0.05;
var tblyllw;
var tblblue;
var yellow;
var blue;
var plate.y;
var plate.b;
var napkin.y;
var napkin.b;
var fork.y;
var fork.b;
var knife.y;
var knife.b;
var milk.y;
var milk.b;
var spoon.y;
var spoon.b;
var coffee.y;
var coffee.b;
var bf.y;
var bf.b;



var btn;
var count = 0;
var count= 120;
var whichPic = 1;


var x = 60;
var y = 60;


function preload() {
  table = loadImage('bf-01.png');


}


function setup() {
  createCanvas(800, 700);


  btn = createButton('Click Me!');
  btn.position(100, 50);
  btn.mousePressed(restart);

}

function draw() {
  image(table, 0, 0, 800, 400);
  image(table, 0, 300, 800, 400);





  var dx= (mouseX-150)-offset;
  offset += dx*easing;
  if(whichPic == 1) {
    image(spoon, offset, mouseY, 300, 150);
  } else {
    image(spoon, offset, mouseY, 250, 150);
  }






  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
      image(spoon, x, 100, 100, 100);
    }  else if(keyCode == RIGHT_ARROW) {
      x = x + 5;
      image(bird, x, 100, 100, 100);
    }
    if(keyCode == UP_ARROW) {
      y = y - 5;
      image(spoon, 100, y, 100, 100);
    }

    if(keyCode == DOWN_ARROW) {
      y = y + 5;
      image(spoon, 100, y, 100, 100);
    }


    /*if(key == 'd') {
      stroke(250, 255, 0);
      line (x + 10, y + 5, width, y + 5);
  }*/
}
//   noStroke();
//   rect(x, y, 10, 10);
// }

}





/*function increaseCount() {
  count +=5;
}

function decreaseCount() {
  count -=5;
}*/

function restart() {
  if(whichPic == 1) {
    whichPic = 2;
  } else {
    whichPic = 1;
  }
}


var table;
var spoon;
