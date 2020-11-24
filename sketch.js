
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	roof = new Roof(400,50,400,20);
	bob1 = new Bob(500,350,25);
	rope1 = new Rope(bob1.body,roof.body,100,0)
	bob2 = new Bob(450,350,25);
	rope2 = new Rope(bob2.body,roof.body,50,0)
	bob3 = new Bob(400,350,25)
	rope3 = new Rope(bob3.body,roof.body,0,0)
	bob4 = new Bob(350,350,25)
	rope4 = new Rope(bob4.body,roof.body,-50,0)
	bob5 = new Bob(300,350,25)
	rope5 = new Rope(bob5.body,roof.body,-100,0)
	//Create the Bodies Here.
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-90,y:0})
	}
  }



