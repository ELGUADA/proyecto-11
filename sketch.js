var sea, seaImg
var ship, shipImg1
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation ("ship1.png", "ship2.png", "ship1.png", "ship1.png")
}

function setup(){
  createCanvas(400,400);
 sea = createSprite (400,200);
sea.addImage(seaImg);
sea.velocityX= -3
sea.scale = 0.3

 ship = createSprite (130,200,30,30);
 ship.addAnimation("moving-ship", shipImg1);
 ship.scale = 0.25
}

function draw() {
drawSprites()
 
}