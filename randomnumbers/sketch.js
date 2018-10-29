function setup(){
  createCanvas(480,120);
  textSize(24);
  textAllign(CENTER);
  backgroun(204);
  var face= rollDice();
  text(face,160,60);
  face=rollDice();
  text(face, 320,60);
}
