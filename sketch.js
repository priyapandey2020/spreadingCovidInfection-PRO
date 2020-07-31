var home1,home2;
var wallL,wallR,wallU,wallD;
var wallL2,wallR2,wallU2,wallD2;

var red1,red2,edges;
var blue1,blue2,blue3,blue4,blue5;

function setup() {  

  createCanvas(500,500);

  home1=createSprite(90,400,210,150);
  home1.scale=1.15;

  home2=createSprite(400,400,210,150);
  home2.scale=1.15;

  red1=createSprite(25,380,35,35);  
  red1.shapeColor = color("red");
  red1.velocity.y = 5;
  red1.velocity.x =2;

  red2=createSprite(350, 380, 35, 35  );  
  red2.shapeColor = color("red");
  red2.velocity.y = 5;
  red2.velocity.x =2;

  blue1=createSprite(320, 120, 35, 35  );  
  blue1.shapeColor = color("green");
  
  blue2=createSprite(100, 200, 35, 35  );  
  blue2.shapeColor = color("green");

  blue3=createSprite(60, 60, 35, 35  );  
  blue3.shapeColor = color("green");

  blue4=createSprite(250, 70, 35, 35  );  
  blue4.shapeColor = color("green");

  blue5=createSprite(330, 230, 35, 35  );  
  blue5.shapeColor = color("green");

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

  blue1.bounceOff(wallU2);
  blue1.bounceOff(wallR2);
  blue1.bounceOff(wallU);
  blue1.bounceOff(wallR);

  blue2.bounceOff(wallU2);
  blue2.bounceOff(wallR2);
  blue2.bounceOff(wallU);
  blue2.bounceOff(wallR);

  blue3.bounceOff(wallU2);
  blue3.bounceOff(wallR2);
  blue3.bounceOff(wallU);
  blue3.bounceOff(wallR);

  blue4.bounceOff(wallU2);
  blue4.bounceOff(wallR2);
  blue4.bounceOff(wallU);
  blue4.bounceOff(wallR);

  blue5.bounceOff(wallU2);
  blue5.bounceOff(wallR2);
  blue5.bounceOff(wallU);
  blue5.bounceOff(wallR);
  
  red2.bounceOff(edges);
  blue1.bounceOff(edges);
  blue2.bounceOff(edges);
  blue3.bounceOff(edges);
  blue4.bounceOff(edges);
  blue5.bounceOff(edges);

  strikeFnct();
}
 
function strikeFnct(){
  if(blue1.bounce(red2)|| blue1.bounce(blue2)|| blue1.bounce(blue3)|| blue1.bounce(blue4)|| blue1.bounce(blue5)){
  blue1.shapeColor = color("red");
  }
  if(blue2.bounce(red2)|| blue2.bounce(blue1)|| blue2.bounce(blue3)|| blue2.bounce(blue4)|| blue2.bounce(blue5)){
    blue2.shapeColor = color("red");
  }
  if(blue3.bounce(red2)|| blue3.bounce(blue1)|| blue3.bounce(blue2)|| blue3.bounce(blue4)|| blue3.bounce(blue5)){
    blue3.shapeColor = color("red");
  }
  if(blue4.bounce(red2)|| blue4.bounce(blue1)|| blue4.bounce(blue2)|| blue4.bounce(blue3)|| blue4.bounce(blue5)){
    blue4.shapeColor = color("red");
  }
  if(blue5.bounce(red2)|| blue5.bounce(blue1)|| blue5.bounce(blue2)|| blue5.bounce(blue3)|| blue5.bounce(blue4)){
    blue5.shapeColor = color("red");
  }
}