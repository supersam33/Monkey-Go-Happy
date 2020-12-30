
var monkey , monkey_running;
var bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(50, 180, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 250, 1200, 20);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
  obstacleGroup.collide(ground);
  
  ground.velocityX = -4;
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  if (keyDown("space") && monkey.y >= 209.3) {
    monkey.velocityY = -13;
  }
  
  survivalTime = survivalTime + Math.round(getFrameRate() / 60);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: " + survivalTime, 100, 50);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnBananas();
  
  spawnObstacles();
  
  drawSprites();
  
}


function spawnBananas(){
  if (frameCount%80 === 0) {
    var banana = createSprite(620, Math.round(random(120, 200)), 10, 10);
    banana.addImage(bananaImage);
    
    banana.velocityX = -6;
    
    banana.scale = 0.1;
    
    banana.lifetime = 300;
    
    bananaGroup.add(banana);
  }
}


function spawnObstacles() {
  if (frameCount%300 === 0) {
    var obstacle = createSprite(620, 211, 10, 10);
    obstacle.addImage(obstacleImage);
    
    obstacle.velocityX = -4;
    
    obstacle.scale = 0.1;
    
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}






