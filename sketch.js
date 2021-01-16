var fixedRect,movingRect

function setup() {

  createCanvas(1200,800);
 fixedRect= createSprite(600, 400, 50, 50);
 fixedRect.shapeColor="blue";
 movingRect=createSprite(400,200,80,30)
 movingRect.shapeColor="blue";
}

function draw() {
  background("black");
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
&&  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
&&movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2
&&  fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2  ){
      movingRect.shapeColor="green"
      fixedRect.shapeColor="green"
    }
    else{
      movingRect.shapeColor="red"
      fixedRect.shapeColor="red"
    }
  drawSprites();
}