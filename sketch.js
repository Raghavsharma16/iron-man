var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg,bgImg;
var hero,heroImg;
var o1,o1Img,o2,o2Img,o3,o3Img,v1,v1Img,v2,Img;
var b,bImg;
var p,pImg;
var o1Group,o2Group,v1Group,v2Group,o3Group,bGroup;
var go,goImg;
var i1,i2,i3,i4;
var score;
function preload(){
    pImg=loadImage("p.png");
    bg1Img=loadImage("bg1.jpg");
    bgImg=loadImage("excited.gif");
    heroImg=loadImage("hero.png");
    o1Img=loadImage("o1.png");
    o2Img=loadImage("o2.png");
    o3Img=loadImage("o3.png");
    v1Img=loadImage("v1.png");
    v2Img=loadImage("v2.png");
    bImg=loadImage("bullet.png");
    goImg=loadImage("go.jpg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);

i1=createSprite(700,0,1600,2);
i2=createSprite(700,615,1600,2);
i3=createSprite(0,310,2,1600);
i4=createSprite(400,620,1600,2);



    hero=createSprite(250,470);
    hero.addImage(heroImg);
    hero.scale=0.7;
    hero.setCollider('circle',0,05,105);
 
    
score=0;

  o1Group = createGroup();
o2Group = createGroup();
o3Group = createGroup();
v1Group = createGroup();
v2Group = createGroup();
bGroup=createGroup();
}
function draw(){
   background(bgImg);
  
    

if(gameState === PLAY){
  if(keyDown(UP_ARROW)){
    hero.y=hero.y -6;
  }
  if(keyDown(DOWN_ARROW)){
    hero.y=hero.y +6;
  }
  if(keyDown(LEFT_ARROW)){
    hero.x=hero.x -6;
  }
  if(keyDown(RIGHT_ARROW)){
    hero.x=hero.x +6;
  }

  if(o1Group.isTouching(hero)){
    gameState = END;
}

 if(o2Group.isTouching(hero)){
    gameState = END;
}
if(o3Group.isTouching(hero)){
  gameState = END;
}
if(v1Group.isTouching(hero)){
  gameState = END;
}
if(v2Group.isTouching(hero)){
  gameState = END;
}

if(hero.x===1300){
  gameState = END;
}
if(hero.isTouching(i1)){
  gameState = END;
}
if(hero.isTouching(i2)){
  gameState = END;
}
if(hero.isTouching(i3)){
  gameState = END;
}
if(hero.isTouching(i4)){
  gameState = END;
}
if(keyWentDown("SPACE")){
  b=createSprite(250,470);
  b.addImage(bImg);
  b.y = hero.y;
  b.x = hero.x;
  b.velocityX=12;
  b.scale=0.05;
}
if(v1Group.isTouching(b)){
  v1.destroy();
  b.destroy();
}
if(v2Group.isTouching(b)){
  v2.destroy();
  b.destroy();
}

if(o2Group.isTouching(b)){
  o2.destroy();
  b.destroy();
}
if(o3Group.isTouching(b)){
  o3.destroy();
  b.destroy();
}

/*enemy1();
  enemy2();
  enemy3();
  enemy4();*/
  drawSprites();
} 
if(gameState === END){
  
end();

}
}

  function enemy1(){
    //making enemy random
    if(World.frameCount %90 === 0){
      o2 = createSprite(1200,500,20,20);
      o2.addImage(o2Img);
      o2.scale=0.4;
      o2.y = Math.round(random(100,300));
      o2.velocityX = -(12 + (score/10));
      o2.setLifetime = 50;
    
      
      o2Group.add(o2);
    }
  }
      
  function enemy2(){
    //making enemy random
    if(World.frameCount %500 === 0){
      o3 = createSprite(1200,700,20,20);
      o3.addImage(o3Img);
      o3.scale=0.4;
      o3.y = Math.round(random(100,300));
      o3.velocityX = -(12 + (score/10));
      o3.setLifetime = 50;
     
      
      o3Group.add(o3);
    }
  }
  function enemy3(){
    //making enemy random
    if(World.frameCount %700 === 0){
      v1 = createSprite(1200,1000,20,20);
      v1.addImage(v1Img);
      v1.scale=0.4;
      v1.y = Math.round(random(100,300));
      v1.velocityX = -(12 + (score/10));
      v1.setLifetime = 50;

      v1Group.add(v1);
    }
  }
  function enemy4(){
    //making enemy random
    if(World.frameCount %1000 === 0){
      v2 = createSprite(1400,1400,20,20);
      v2.addImage(v2Img);
      v2.scale=0.6;
      v2.y = Math.round(random(200,300));
      v2.velocityX = -(12 + (score/10));
      v2.setLifetime = 50;
 
    
      v2Group.add(v2);
    }
  }
  function end(){
    //go=createSprite(700,500,1400,800);
//go.addImage(goImg);

text("GAMEOVER",600,300);

textSize(300);
textColor("Black");
hero.visible=false;
  }
      
