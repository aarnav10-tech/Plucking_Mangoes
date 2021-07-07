const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var boyImg, treeImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var launcher;

function preload(){
  boyImg = loadImage("boy.png");
  treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
  mango1 = new Mango(620, 330, 40);
  mango2 = new Mango(630, 250, 50);
  mango3 = new Mango(570, 370, 40);
  mango4 = new Mango(570, 280, 45);
  mango5 = new Mango(520, 325, 45);
  mango6 = new Mango(730, 340, 45);
  mango7 = new Mango(670, 360, 35);
  mango8 = new Mango(680, 290, 40);

	ground = new Ground();
	stone = new Stone();
  launcher = new Launcher(stone.body, {x:100, y:510});

	Engine.run(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  shot.fly();
}

function draw() {
  background("lightblue");

  Engine.update(engine);
  
  imageMode(CENTER);
  image(boyImg, 140, 575, 120, 220);

  push();
  translate(600, 400);
  image(treeImg, 20, 20, 350, 500);
  pop();

  ground.display();
  stone.display();
  shot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);

  textSize(20);
  fill(0);
  text("Press 'space' to get another chance", 30, 40);
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:85, y:500});
    launcher.attach();
  }
}

function detectCollision(a, b){
  var posA = a.body.position;
  var posB = b.body.position;
  let d = dist(posA.x, posA.y, posB.x, posB.y);
  if(d <= 20 + 20){
    Matter.Body.setStatic(b.body, false);
  }
}