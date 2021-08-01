
var runner, path, invisibleBoundarie1, invisibleBoundarie2, edges;

var pathImage, runnerImage;
function preload(){
  //pre-load images
runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
pathImage=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2;

  runner=createSprite(180,330,30,30);
  runner.addAnimation("running" ,runnerImage)
  runner.scale=0.15

  invisibleBoundarie1=createSprite(0,0,100,800);
  invisibleBoundarie1.visible=false;

  invisibleBoundarie2=createSprite(410,0,100,800);
  invisibleBoundarie2.visible=false;
}

function draw() {
  background(200);

edges=createEdgeSprites();

  runner.x=World.mouseX;

  runner.collide(invisibleBoundarie1);
  runner.collide(invisibleBoundarie2);
  runner.collide(edges[3]);

if(path.y > 400){
  path.y=height/2
}

drawSprites();
}
