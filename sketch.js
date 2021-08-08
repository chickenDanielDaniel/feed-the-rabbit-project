var garden,rabbit, apple, leaf;
var gardenImg,rabbitImg, appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  
  
  spawnApples()
  spawnLeafs()
  drawSprites();
}

 
function spawnApples(){
  
  if(frameCount%80 == 0){
    apple = createSprite(random(20 ,380),0,1,1)
    apple.addImage("apple", appleImg);
    apple.velocityY = 6

    apple.scale = 0.1

  }
}

function spawnLeafs(){
    if(frameCount%60 == 0){
  leaf = createSprite(random(20,380),0,1,1)
    leaf.addImage("leaf", leafImg);
    leaf.velocityY = 6

    leaf.scale = 0.1
  }

}
