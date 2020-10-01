var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bar1, bar2, bar3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	

	//bar1Sprite=createSprite(width/2, 650,120,20);;
	//bar1Sprite.shapeColor=color("red")

	//bar2=createSprite(width/2.3, 600,20,120);
	//bar2.shapeColor=color("red")
	

	//bar3=createSprite(width/1.7, 600,20,120);
   //bar3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	
	
//var ground_options = {
	isStatic: true
//}


var bar1_options = {
	isStatic: true,
	restitution:0.2
	
}


var bar2_options = {
	isStatic: true,
	restitution:0.2
}

	
	
	fill("red");

	bar1 = Bodies.rectangle(width/2, 650,120,20 , bar1_options);
	World.add(world, bar1);


	bar2 = Bodies.rectangle(width/2.3, 600,20,120, bar2_options);
	World.add(world, bar2)
	

	bar3 = Bodies.rectangle(width/1.7, 600,20,120, bar2_options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //rect(ground.position.x,ground.position.y,800,30)

  rect(bar1.position.x,bar1.position.y,130,20);
  
  rect(bar2.position.x,bar2.position.y,20,120);

  rect(bar3.position.x,bar3.position.y,20,120);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



