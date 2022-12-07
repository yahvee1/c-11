
var trex ,trex_running,ground , ground1;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1= loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex= createSprite(60,150,10,10);
  trex.addAnimation("running",trex_running);
 trex.scale = 0.5;

 ground= createSprite(300,150,600,2);
ground.addImage("ground",ground1);
}

function draw(){
  background("white")
if(keyDown("space")){
  trex.velocityY=-10;
}
trex.velocityY=trex.velocityY+1;
trex.collide(ground);

  drawSprites();

}
