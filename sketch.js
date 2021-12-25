
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var engine;
var world;

var ground1;
var ground2;
var ground3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {

		restitution:0.9,
	}

	
    ball = Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);

    ground1 = new Ground(width/2,670,width,20);
	ground2 = new Ground(1100,600,20,120);
	ground3 = new Ground(1350,600,20,120);

	ellipseMode(RADIUS)
	
	Engine.run(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x: .035,y: -.035});
		ball.velocityX = 1;
		ball.velocityY = 1;
	}
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  
  drawSprites();
 
}
