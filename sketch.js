var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var cycleBell, pinkCG,yellowCG, redCG, pinkImg1, pinkImg2, yellowImg1, yellowImg2, redImg1,redImg2, randomY, gameOver,gameOverImg, restartText, obstacleGroup, obstacleImg1,obstacleImg2,obstacleImg3

var cyclists,bellSound;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
function reset(){
  gameState = PLAY
  pinkCG.destroyEach()
  yellowCG.destroyEach()
 redCG.destroyEach()
 obstacleGroup.destroyEach()
  distance = 0
  gameOver.visible = false;
}
function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  pinkImg1 = loadAnimation("images/opponent1.png","images/opponent2.png")
  yellowImg1 = loadAnimation("images/opponent4.png","images/opponent5.png")
  redImg1 = loadAnimation("images/opponent7.png","images/opponent8.png")
  pinkImg2 = loadAnimation("images/opponent3.png");
  yellowImg2 =  loadAnimation("images/opponent6.png");
  redImg2 =  loadAnimation("images/opponent9.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  bellSound = loadSound("sound/bell.mp3")
  gameOverImg = loadImage("images/gameOver.png")
  obstacleImg1 = loadImage("images/obstacle1.png")
   obstacleImg2 = loadImage("images/obstacle2.png")
   obstacleImg3 = loadImage("images/obstacle3.png")
}
function opponentCyclists() {
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: pinkCyclists()
              break;
      case 2: yellowCyclists()
              break;
      case 3: redCyclists()
              break;
      default: break;
    }
   
}
function obstacs(){
    var rand2 = Math.round(random(1,3));
    switch(rand2) {
      case 1: obstacle1()
              break;
      case 2: obstacle2()
              break;
      case 3: obstacle3()
              break;
      default: break;
    }
   
}
function obstacle1(){
    if (frameCount%120==0){
   randomY = Math.round(random(50,290)) 
       obstacles = createSprite(490,randomY,10,10);
   obstacles.velocityX = -(6 + 2*distance/150);
   obstacles.addImage(obstacleImg1); 
  obstacles.scale = 0.07;
   obstacles.lifetime = 250;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacles);
  }
}
function obstacle2(){
    if (frameCount%120==0){
   randomY = Math.round(random(50,290)) 
       obstacles = createSprite(490,randomY,10,10);
   obstacles.velocityX = -(6 + 2*distance/150);
   obstacles.addImage(obstacleImg2); 
  obstacles.scale = 0.07;
   obstacles.lifetime = 250;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacles);
  }
}
function obstacle3(){
    if (frameCount%120==0){
   randomY = Math.round(random(50,290)) 
       obstacles = createSprite(490,randomY,10,10);
   obstacles.velocityX = -(6 + 2*distance/150);
   obstacles.addImage(obstacleImg3); 
  obstacles.scale = 0.07;
   obstacles.lifetime = 250;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacles);
  }
}
function pinkCyclists(){
  if (frameCount%80==0){
   randomY = Math.round(random(50,290)) 
       cyclists = createSprite(490,randomY,10,10);
   cyclists.velocityX = -(6 + 2*distance/150);
   cyclists.addAnimation("Pink Cycle",pinkImg1); 
     cyclists.addAnimation("Pink Cycle 2",pinkImg2); 
   cyclists.scale = 0.07;
   cyclists.lifetime = 250;
   
   //add each obstacle to the group
    pinkCG.add(cyclists);
  }
}
function yellowCyclists(){
  if (frameCount%80==0){
     randomY = Math.round(random(50,290)) 
     cyclists = createSprite(490,randomY,10,10);
   cyclists.velocityX = -(6 + 2*distance/150);
   cyclists.addAnimation("Yellow Cycle",yellowImg1); 
    cyclists.addAnimation("Yellow Cycle 2",yellowImg2); 
   cyclists.scale = 0.07;
   cyclists.lifetime = 250;
   
   //add each obstacle to the group
    yellowCG.add(cyclists);
  }
}
function redCyclists(){
  if (frameCount%200==0){
 randomY = Math.round(random(50,290)) 
   cyclists = createSprite(490,randomY,10,10);
   
   cyclists.velocityX = -(6 + 2*distance/150);
   cyclists.addAnimation("Red Cycle",redImg1);  
       cyclists.addAnimation("Red Cycle 2",redImg2); 
   cyclists.scale = 0.07;
   cyclists.lifetime = 250;
   
   //add each obstacle to the group
    redCG.add(cyclists);
  }
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);


//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.addAnimation("Main Cycle 2",mainRacerImg2) 
mainCyclist.scale=0.07;
    gameOver = createSprite(280,150);
  gameOver.addImage(gameOverImg);
   gameOver.scale = 0.5;
  pinkCG = createGroup();
  yellowCG = createGroup();
  redCG = createGroup();
   obstacleGroup = createGroup();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
 
  if(gameState===PLAY){
  path.velocityX = -(6 + 2*distance/150)
    gameOver.visible = false;
   mainCyclist.y = World.mouseY;
  mainCyclist.changeAnimation("SahilRunning",mainRacerImg1)
   edges = createEdgeSprites();
   mainCyclist.collide(edges);
    
  distance = distance + Math.round(getFrameRate()/60);
     if(pinkCG.isTouching(mainCyclist)){
     cyclists.changeAnimation("Pink Cycle 2", pinkImg2);   
     pinkCG.setVelocityXEach(0)
     pinkCG.setLifetimeEach(-1);
      
        gameState = END;
        
      
    }
    if(yellowCG.isTouching( mainCyclist)){
       cyclists.changeAnimation("Yellow Cycle 2",yellowImg2); 
     yellowCG.setVelocityXEach(0)
     yellowCG.setLifetimeEach(-1);
    
        gameState = END;
     
      
    }
    if(redCG.isTouching( mainCyclist)){
   cyclists.changeAnimation("Red Cycle 2", redImg2); 
     redCG.setVelocityXEach(0)
     redCG.setLifetimeEach(-1);
    
        gameState = END;
      
      
    }
        if(obstacleGroup.isTouching( mainCyclist)){
   
     obstacleGroup.setVelocityXEach(0)
     obstacleGroup.setLifetimeEach(-1);
    
        gameState = END;
      
      
    }
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
     if(keyDown("space")) {
        
        bellSound.play();
    }
    
    opponentCyclists();
   obstacs();
 }
  
   if(gameState===END){
     
     gameOver.visible = true;
     restartText = text("Press Up Arrow to Restart the    game!",100,200);
     path.velocityX = 0
     mainCyclist.velocityX = 0
     mainCyclist.changeAnimation("Main Cycle 2",mainRacerImg2)
     
      if (keyDown("UP_ARROW")){
         reset();
       }
     
     
    
   }
}

