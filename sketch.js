var bob1,roofObject,rope1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);

	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(700,50,250,30);
	bob1 = new Bob(610,250,30);
	bob2 = new Bob(650,250,30);
	bob3 = new Bob(690,250,30);
	bob4 = new Bob(730,250,30);
	bob5 = new Bob(770,250,30);

	rope1 = new Chain(bob1.body,roofObject.body,-90,0);
	rope2 = new Chain(bob2.body,roofObject.body,-55,0);
	rope3 = new Chain(bob3.body,roofObject.body,-16,0);
	rope4 = new Chain(bob4.body,roofObject.body,25,0);
	rope5 = new Chain(bob5.body,roofObject.body,65,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){

	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:0})
	}
	if(keyWentUp(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0,y:60})
	}
	
}


