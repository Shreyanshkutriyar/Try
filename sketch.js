var issImg,sc1ImG,sc2ImG,sc3ImG,sc4ImG,bgImg
var spacecraft 
var hasDocked = false;
var iss,spacecraft




function preload(){

  issImg=loadImage("iss.png")
  sc1ImG=loadImage("spacecraft1.png")
  sc2ImG=loadImage("spacecraft2.png")
  sc3ImG=loadImage("spacecraft3.png")
  sc4ImG=loadImage("spacecraft4.png")
  bgImg = loadImage("spacebg.jpg")

  
}

function setup() {
  createCanvas(1495,750);
    
  iss=createSprite(900,130);
	iss.addImage(issImg)
	iss.scale=0.50

  spacecraft=createSprite(850,650);
	spacecraft.addImage(sc1ImG)
	spacecraft.scale=0.25



}

function draw() {
  background(bgImg); 
  if(!hasDocked){
   // write code to set random x position for spacecraft
   spacecraft.x = spacecraft.position.x
  }
  if(keyDown(UP_Arrow)){


  }
  if(keyDown(Down_Arrow)){

  }
  if(keyDown(Left_Arrow)){
    
  }
  if(keyDown(Right_Arrow)){
    
  }
 

  
  
  drawSprites();
}