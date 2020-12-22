
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

	var boyimg,boyface,stone;

function preload()
{
	 boyimg=loadAnimation("nobita"boy.png);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //stone=new Stone(200,500,45,20);
	 boyface=new Boy(200,450,25,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



