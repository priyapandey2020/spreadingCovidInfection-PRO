var home1,home2;
var wallL,wallR,wallU,wallD;
var wallL2,wallR2,wallU2,wallD2;

var red1,red2,edges;
var green1,green2,green3,green4,green5;

function preload(){
  image1=loadImage("images/redCircle.png");
  image2=loadImage("images/greenCircle.png");
}

function setup() {  

  createCanvas(500,500);

  home1=createSprite(90,400,210,150);
  home1.scale=1.15;

  home2=createSprite(400,400,210,150);
  home2.scale=1.15;

  red1=createSprite(25,380,25,25);  
  red1.shapeColor = color("red");
  red1.addImage(image1);
  red1.scale=0.06;
  red1.velocity.y = 5;
  red1.velocity.x =2;

  red2=createSprite(350, 380, 25, 25);  
  red2.shapeColor = color("red");
  red2.addImage(image1);
  red2.scale=0.06;
  red2.velocity.y = 5;
  red2.velocity.x =2;

  green1=createSprite(320, 120, 25, 25);  
  green1.shapeColor = color("green");
  green1.addImage(image2);
  green1.scale=0.06;
  
  green2=createSprite(100, 200, 25,25 );  
  green2.shapeColor = color("green");
  green2.addImage(image2);
  green2.scale=0.06;

  green3=createSprite(60, 60, 25, 25  );  
  green3.shapeColor = color("green");
  green3.addImage(image2);
  green3.scale=0.06;

  green4=createSprite(250, 70, 25, 25  );  
  green4.shapeColor = color("green");
  green4.addImage(image2);
  green4.scale=0.06;

  green5=createSprite(330, 230, 25, 25  );  
  green5.shapeColor = color("green");
  green5.addImage(image2);
  green5.scale=0.06;

  wallL=createSprite(1,400,9,175);
  wallL.shapeColor=color("white");
  
  wallU=createSprite(108,317,205,9);
  wallU.shapeColor=color("white");
    
  wallD=createSprite(108,483,205,9);
  wallD.shapeColor=color("white");

  wallR=createSprite(210,400,9,175);
  wallR.shapeColor=color("white");
  
  wallL2=createSprite(280,400,9,175);
  wallL2.shapeColor=color("white");
  
  wallU2=createSprite(420,317,160,9);
  wallU2.shapeColor=color("white");
    
  wallD2=createSprite(390,483,220,9);
  wallD2.shapeColor=color("white");

  wallR2=createSprite(500,400,9,175);
  wallR2.shapeColor=color("white");
  
  edges=createEdgeSprites();
}

// function to display UI
function draw() {
  background(255,250,149);
  drawSprites();
  red1.bounceOff(wallL);
  red1.bounceOff(wallD);
  red1.bounceOff(wallR);
  red1.bounceOff(wallU);


  red2.bounceOff(wallL2);
  red2.bounceOff(wallD2);
  red2.bounceOff(wallU2);
  red2.bounceOff(wallR2);
  red2.bounceOff(wallU);
  red2.bounceOff(wallR);

  green1.bounceOff(wallU2);
  green1.bounceOff(wallR2);
  green1.bounceOff(wallL2);
  green1.bounceOff(wallD2);
  green1.bounceOff(wallU);
  green1.bounceOff(wallR);

  green2.bounceOff(wallU2);
  green2.bounceOff(wallR2);
  green2.bounceOff(wallL2);
  green2.bounceOff(wallD2);
  green2.bounceOff(wallU);
  green2.bounceOff(wallR);

  green3.bounceOff(wallU2);
  green3.bounceOff(wallR2);
  green3.bounceOff(wallL2);
  green3.bounceOff(wallD2);
  green3.bounceOff(wallU);
  green3.bounceOff(wallR);

  green4.bounceOff(wallU2);
  green4.bounceOff(wallR2);
  green4.bounceOff(wallL2);
  green4.bounceOff(wallD2);
  green4.bounceOff(wallU);
  green4.bounceOff(wallR);

  green5.bounceOff(wallU2);
  green5.bounceOff(wallR2);
  green5.bounceOff(wallL2);
  green5.bounceOff(wallD2);
  green5.bounceOff(wallU);
  green5.bounceOff(wallR);
  
  red2.bounceOff(edges);
  green1.bounceOff(edges);
  green2.bounceOff(edges);
  green3.bounceOff(edges);
  green4.bounceOff(edges);
  green5.bounceOff(edges);

  strikeFnct();
}
 
function strikeFnct(){
  if(green1.bounce(red2)|| green1.bounce(green2)|| green1.bounce(green3)|| green1.bounce(green4)|| green1.bounce(green5)){
  green1.addImage(image1);
  }
  if(green2.bounce(red2)|| green2.bounce(green1)|| green2.bounce(green3)|| green2.bounce(green4)|| green2.bounce(green5)){
    green2.addImage(image1);

  }
  if(green3.bounce(red2)|| green3.bounce(green1)|| green3.bounce(green2)|| green3.bounce(green4)|| green3.bounce(green5)){
    green3.addImage(image1);

  }
  if(green4.bounce(red2)|| green4.bounce(green1)|| green4.bounce(green2)|| green4.bounce(green3)|| green4.bounce(green5)){
    green4.addImage(image1);

  }
  if(green5.bounce(red2)|| green5.bounce(green1)|| green5.bounce(green2)|| green5.bounce(green3)|| green5.bounce(green4)){
    green5.addImage(image1);
    green5.velocity.x=3;
    green5.velocity.y=5;

  }
}