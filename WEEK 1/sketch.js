function setup() {
createCanvas(800, 800);
background(204);
}

function draw() {
  // put drawing code here
  fill(0)
  beginShape();
  vertex(50,120)
  vertex(50,190);
  vertex(20,70);
  vertex(80,20);
  vertex(210,60);
  vertex(160,80);
  vertex(200,90);
  vertex(140,100);
  vertex(130,120);
  vertex(200,200);
  vertex(70,150);
  vertex(100,300);

  endShape();
  fill(255,0,0);
  ellipse(155,60,8,8);


}
