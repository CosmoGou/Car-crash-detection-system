var car,wall;




function setup() {
  createCanvas(800,400);
 car = createSprite(50, 200, 90, 50);
car.scale = 0.5;
speed = random(10,90)
weight = random(400,1500)
car.velocityX = speed;
 wall = createSprite(550,200,60, height/2)
wall.shapeColor = "brown";
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/2250
}
if (deformation<80) {
car.shapeColor = "green";  
}
if (deformation>80 && deformation<180 ) {
  car.shapeColor = "yellow";  
  }
  if (deformation>180) {
    car.shapeColor = "red";  
    }
  drawSprites();
}