function setup () {
  createCanvas (480, 240);
  background (204);
  drawARubiks (10, 10);
  drawARubiks (70, 100);
  drawARubiks (250, 30);
  drawARubiks (360, 80);
}

function drawARubiks (x, y) {
  // red
  fill (255, 0, 0);
  rect (x, y, 50, 50);
  // green
  fill (0, 255, 0);
  rect (x+50, y, 50, 50);
  // blue
  fill (0, 0, 255);
  rect (x, y+50, 50, 50);
  // purple
  fill (255, 0, 255);
  rect (x+50, y+50, 50, 50);
}
