
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,ball1;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball1= new Paper(90,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
 
  ball1.display();
  groundObject.display();
  dustbinObj.display();
 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:450,y:-300});
	}
}