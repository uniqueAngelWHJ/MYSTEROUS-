var canvasTop, canvasRight, canvasBottom, canvasLeft;
var pathWay;
var room1WallLeft,  room1WallTop, room1WallRight1, room1WallRight2 ;
var door1;

function setup()
{
  createCanvas(1500,700);

  canvasTop = createSprite(750,5,1500,10);
  canvasTop.shapeColor = "red";

  canvasRight = createSprite(1495,350,10,700);
  canvasRight.shapeColor = "red";

  canvasBottom = createSprite(750,695,1500,10);
  canvasBottom.shapeColor = "red";

  canvasLeft = createSprite(5,350,10,700);
  canvasLeft.shapeColor = "red";

  pathWay = createSprite(80,600,140,5);
  pathWay.shapeColor = "pink";

  room1WallLeft = createSprite(150,450,5,300);
  room1WallLeft.shapeColor = "pink";

  room1WallTop = createSprite(300,300,300,5);
  room1WallTop.shapeColor = "pink";
  
  room1WallRight1 = createSprite(450,360,5,120);
  room1WallRight1.shapeColor = "pink";

  room1WallRight2 = createSprite(450,605,5,170);
  room1WallRight2.shapeColor = "pink";
  
  door1 = createSprite(450,470,10,100);
  door1.shapeColor = "yellow";


}

function draw()
{
  background("black");
  text(mouseX + "," + mouseY, 1400,50);
  drawSprites();

}