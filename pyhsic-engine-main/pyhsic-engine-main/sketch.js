var STARTER=1
var STORY=2
var TALK=3
var SHOP=4
var RULES=5
var PLAY=6
var END=7
var gameState=STARTER

 
var gamebannerImage
var gameBanner
var ribbon,ribbonImage
var ak,scar,woodpecker,m4a1
var akImage,scarImage,m4a1Image,woodpeckerImage
var hero,villan,villan1,villanGroup
var villanImage
var heroM4A1,heroAK,heroWOODPECKER,heroSCAR
var AMMO,AMMOIMAGE,ammoGroup
var score
var health

function preload() {
gamebannerImage=loadImage("wallpaper.jpg")
ribbonImage=loadImage("gameribbon.png")

akImage=loadImage("guns/AK47.png")
scarImage=loadImage("guns/SCAR.png")
m4a1Image=loadImage("guns/M4A1.png")
woodpeckerImage=loadImage("guns/woodpecker.png")

heroImage=loadImage("hero.png")
villanImage=loadImage("VILLAN.png")
villan1=loadImage("VILLAN1.png")

heroAK=loadImage("hero/heroAK.png")
heroM4A1=loadImage("hero/heroM4A1.png")
heroSCAR=loadImage("hero/heroSCAR.png")
heroWOODPECKER=loadImage("hero/heroWOODPECKER.png")

AMMOIMAGE=loadImage("ammo.png")

fireSound=loadSound("fireSound.mp3")
}







function setup() {
  createCanvas(800,400);

  gameBanner=createSprite(400,200)
  gameBanner.addImage(gamebannerImage)
  gameBanner.scale=0.5

ribbon=createSprite(400,60)
ribbon.addImage(ribbonImage)
ribbon.scale=0.6

ak=createSprite(150,130)
ak.addImage(akImage)
ak.scale=0.8


scar=createSprite(630,130)
scar.addImage(scarImage)
scar.scale=0.8


woodpecker=createSprite(150,330)
woodpecker.addImage(woodpeckerImage)
woodpecker.scale=0.8


m4a1=createSprite(630,330)
m4a1.addImage(m4a1Image)




hero=createSprite(80,300)
hero.scale=0.65

villan=createSprite(750,350)
  villan.scale=0.5

villanGroup=new Group()
ammoGroup=new Group();

dollar=1000
score=0;
health=100
  }
    
   
   
    function draw() {
      background(220);  

     



      if(gameState===PLAY) {
        hero.visible=true
       villan.visible=true
       
       if(World.frameCount%40===0) {
  
        v=Math.round(random(1,2))
        if( v == 1) {
          villan.addImage(villanImage)
        } else {
          villan.addImage(villan1)
        }
        villan.x=Math.round(random(150,780))
        villan.velocityX=-(4 + score/5)
        
        villanGroup.add(villan)
        
        if(villan.x>120) {
          health=health-2
        }

        }




       if(ammoGroup.isTouching(villan)) {
         villanGroup.destroyEach()
         ammoGroup.destroyEach()
         score=score+1
       }
       
     
       
       
       if(keyDown("f")) {
         AMMOS();
         fireSound.play()
       }
       
       text("SCORE=>"+score,710,20)
       text("HEALTH->"+health,300,20)
       
       if(keyDown("w")) {
        hero.y=hero.y-2
      }

      if(keyDown("s")) {
        hero.y=hero.y+2
      }

      if(keyDown("d")) {
        hero.x=hero.x+2
      }

      if(keyDown("a")) {
        hero.x=hero.x-2
      }
       


}
else if(gameState===END) {
  textSize(20)
  text("GAME OVER",400,200)
}
       




  drawSprites()

  ak.visible=false
  m4a1.visible=false
  woodpecker.visible=false
  scar.visible=false
 hero.visible=false
villan.visible=false

if(gameState===STARTER){

if(keyDown("1")) {
  gameState=STORY
}


}
else if(gameState===STORY) {
 background("red")
 gameBanner.destroy();
  ribbon.destroy();



fill("white")
textSize(15)
  text("HELLO THIS IS MY STORY OF GAME->",200,20)
  text("So there is a commissioner in city and he has a secret of police about there secret base and yesterday (19/11/2019)",10,50)
  text("some gangster came and stole the secret now you are only one in this city to save it from gangsters.Your role is of",10,70)
  text("a secret undercover police officer and our commissioner gave you the responsiblity to bring it back from gangsters",10,90)
  text("NOW GO AND TALK TO COMMISSIONER",250,110)
  text("PRESS (UP_ARROW) KEY TO MOVE FORWARD",250,210)

if(keyDown("up_Arrow")) {
  gameState=TALK
}

}
else if(gameState===TALK) {

  stroke("white")
  fill("black")
  textSize(14)
  text("<-COMMISSIONER",670,30)
  text("HI OFFICER",590,30)
  text("<-COMMISSIONER",670,110)
  text("I THINK YOU KNOW YOU MISSION",440,110)
  text("<-COMMISSIONER",670,190)
  text("NOW GO AND PURCHASE GUN THEN GO TO GANGSTER BASE AND BRING OUR SECRET BACK",25,190)
  
  stroke("white")
  fill("black")
  textSize(14)
  text("OFFICER->",10,70)
  text("HII SIR",95,70)
  text("OFFICER->",10,140)
  text("YES SIR OFCOURSE I KNOW MY MISSION",100,140)
  text("OFFICER->",10,240)
  text("OK SIR",95,240)
  text("PRESS (P) TO GO TO SHOP",290,380)

  if(keyDown("p")) {
      gameState=SHOP
      ak.visible=true
      m4a1.visible=true
      woodpecker.visible=true
      scar.visible=true
      
  }
}
else if(gameState===SHOP) {
    ak.visible=true
    m4a1.visible=true
    woodpecker.visible=true
    scar.visible=true
    
text("$550",125,200)
text("$650",600,200)
text("$500",600,390)
text("$800",100,390)


textSize(15)
text("$=>"+dollar,730,20)








if(mousePressedOver(ak)) {
    dollar=450
}

if(mousePressedOver(scar)) {
    dollar=350
}

if(mousePressedOver(woodpecker)) {
    dollar=200
}

if(mousePressedOver(m4a1)) {
  dollar=500
}



if(mousePressedOver(m4a1)||mousePressedOver(woodpecker)||mousePressedOver(scar)||mousePressedOver(ak)) {
  gameState=RULES
}

if(mousePressedOver(m4a1)) {
  hero.addImage(heroM4A1)
}

if(mousePressedOver(woodpecker)) {
  hero.addImage(heroWOODPECKER)
}

if(mousePressedOver(ak)) {
  hero.addImage(heroAK)
}

if(mousePressedOver(scar)) {
  hero.addImage(heroSCAR)
}




text("HI WELCOME TO OUR GUN SHOP",300,20)
    text("PRESS ON ANY GUN TO PURCHASE IT",280,40)
}
else if(gameState===RULES) {


fill("black")
text("1.USE FOLLOWING KEYS TO MOVE--",40,40)
text("2.PRESS (F) TO FIRE",40,190)

fill("red")
text("(1)W-->MOVE UPWARD",40,70)
text("(2)S-->MOVE DOWNWARD",40,100)
text("(3)A-->MOVE LEFT",40,130)
text("(4)D--> MOVE RGHT",40,160)
text("press (9) to play the game",40,350)
if(keyDown("9")) {
  gameState=PLAY
}

}











}


function AMMOS() {
  AMMO=createSprite(100,100,10,10)
  AMMO.addImage(AMMOIMAGE)
  AMMO.scale=0.15
  AMMO.x=hero.x+5
  AMMO.y=hero.y-53
  AMMO.velocityX=6
  AMMO.lifetime=50
  ammoGroup.add(AMMO)
}
