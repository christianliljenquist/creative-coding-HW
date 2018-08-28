function setup() {
createCanvas(1000, 1000);
background(204);
}

function draw() {
  // put drawing code here
  fill( 64, 255, 0);
  ellipse(100, 60, 80, 40); // the body
fill( 255, 0, 0);
  ellipse(80, 40, 10, 10);
  ellipse(120, 40, 10, 10);
  fill(0, 0, 255);
  ellipse(100, 65, 40, 10);


    fill(255,255,0);
    triangle(80,80,40,120,120,120);
    line(40,80,120,80);

  ellipse(550,450,100,100);
  rect(500,500,100,300);
  quad(300,300,500,500,500,800,300,950);
  quad(600,500,800,300,800,950,600,800);


}
