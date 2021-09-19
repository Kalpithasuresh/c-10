var trex,trex_running
var edges

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200);
  
  trex= createSprite(300,100,40,40);
  trex.addAnimation("trex",trex_running);
  trex.scale=0.6;
  edges=createEdgeSprites()
}


function draw(){
  //set background color 
  background(200);

  if(keyDown("space")){
    trex.velocityY=-10;
   
  }

  trex.velocityY=trex.velocityY+0.6;

  trex.collide(edges[3]);

  
  
  drawSprites();
}