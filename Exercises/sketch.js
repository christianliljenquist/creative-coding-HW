function setup(){
  createCanvas(2000,1000);
  textSize(20);
  textAlign(CENTER);
  background(204);
}

function draw(){
  background(0);
  if(keyIsPressed){
    if(key=="C"){
fill(255,255,0);
textSize(75);
text('A NEW HOPE',400,300);
textSize(30);
text('it is a period of civil war.',400,350);
textSize(30);
text('Revel spaceshipsm striking',400,380);
textSize(40);
text('from a hidden base, have won', 400,430);
textSize(60);
text('Galactic EMpire..',500,500);
}

else{
  text('Take me away', 500,500);
}
}
}
