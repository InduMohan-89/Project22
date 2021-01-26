const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg,fairyImg,engine,world,star,fairy,starImg;
var starBody;

function preload()
{
   //preload the images here
bgImg = loadImage("images/starnight.png");
fairyImg = loadAnimation("images/fairy1.png","images/fairy1.png");
starImg = loadImage("images/star.png");
}

function setup() {
  createCanvas(800, 750);

  
  
  fairy = createSprite(190,520);
  fairy.addAnimation("fairyflying",fairyImg);
  fairy.scale=0.35;

  star = createSprite(650,30);
  star.addImage(starImg);
  star.scale= 0.2;

  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:0.5, 
    isStatic:true
  }

  starBody = Bodies.circle(650 , 30 , 5 , options);
  World.add(world, starBody);

  console.log(starBody);
  
  
}


function draw() {
  background(bgImg);
  Engine.update(engine);


  star.x= starBody.position.x; 
  star.y= starBody.position.y;

  if(starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

drawSprites();
}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === 32) {
		Matter.Body.setStatic(starBody,false); 
	}
}
