
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rect1,rect2,rect3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
  
    

   ground =new Ground(600,700,1200,20);

   rect2 =new Box();


   paper =new Paper(width/2-500,200,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

  paper.display();
  ground.display();

  rect2.display();

  drawSprites();
 
}

function keyPressed()
{

if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-2});
}

}