
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,circle,engine,world
function preload()
{
 
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,350,800,15)
    circle=new Circle(50,30,10)
    bin1=new Dustbin(580,300,20,100)
    bin2=new Dustbin(650,335,120,20)
    bin3=new Dustbin(700,300,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  circle.display()
  ground.display()
  bin1.display()
  bin2.display()
  bin3.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW)

Matter.Body.applyForce(circle.body,circle.body.position,{x:15,y:-15})
}

