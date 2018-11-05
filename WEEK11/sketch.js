function setup () {
  createCanvas (480, 240);
  textSize(24);
  textAlign(CENTER);
  background(204);
  var number = rollDice();
  if(number == 1) {
    fill(255, 0, 0);
  } else if(number == 2) {
    fill(0, 0, 255);
  } else if(number == 3) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 255);
  }
  rect(100, 10, 50, 50);

  // text(face, 160, 60);
  // face = rollDice();
  // text(face, 320, 60)
}

function rollDice() {
  var number = 1+int(random(4));
  return number;
}
