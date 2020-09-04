var movingRectangle, stationaryRectangle;

function setup() {
  createCanvas(800,400);
  
  movingRectangle=createSprite(400,300,10,50);
  movingRectangle.shapeColor="red";
 movingRectangle.velocityY=-5;
 
  stationaryRectangle=createSprite(400,100,50,10);
stationaryRectangle.shapeColor="blue";
stationaryRectangle.velocityY=5;
}


function draw() {
  background(255,255,255); 
 
 // movingRectangle.y=mouseY;
//movingRectangle.x=mouseX; 
if(movingRectangle.x - stationaryRectangle.x <= (movingRectangle.width + stationaryRectangle.width)/2 

&& stationaryRectangle.x - movingRectangle.x <= (movingRectangle.width + stationaryRectangle.width)/2  ){
  movingRectangle.velocityX = movingRectangle.velocityX*(-1);
  stationaryRectangle.velocityX *= (-1);

}
if(movingRectangle.y - stationaryRectangle.y <= (movingRectangle.width + stationaryRectangle.height)/2 

&& stationaryRectangle.y - movingRectangle.y <= (movingRectangle.width + stationaryRectangle.height)/2  ){
  movingRectangle.velocityY = movingRectangle.velocityY*(-1);
  stationaryRectangle.velocityY *= (-1);

}

if(movingRectangle.x - stationaryRectangle.x <= (movingRectangle.width + stationaryRectangle.width)/2 

&& stationaryRectangle.x - movingRectangle.x <= (movingRectangle.width + stationaryRectangle.width)/2  
&&  stationaryRectangle.y-movingRectangle.y<=(movingRectangle.height+stationaryRectangle.height)/2
&&  movingRectangle.y-stationaryRectangle.y<=(movingRectangle.height+stationaryRectangle.height )/2 
)

{
  stationaryRectangle.shapeColor="green";
  movingRectangle.shapeColor="yellow";
}
else{
  movingRectangle.shapeColor="red";
  stationaryRectangle.shapeColor="blue";


}
  drawSprites();
}