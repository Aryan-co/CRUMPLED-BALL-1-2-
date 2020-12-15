

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body5
var paper;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200, 100, 10, 10);
ground = new Dustbin(200, 670, 1200, 20);
ground2 = new Dustbin(700, 600, 30, 120);
ground3 = new Dustbin(500, 600, 30, 120);
ground4 = new Dustbin(600, 650, 230, 30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:200, y:-670});
  }
}



