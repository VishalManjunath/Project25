var engine, world;
var crumpledPaper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 850);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumpledPaper = new Paper(100,650,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  crumpledPaper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x:85,y:-85});
	}
}



