var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,400);
  car=createSprite(50, 200, 50, 20);

  wall=createSprite(1200,200,60,height/2);

  speed=random(55,90);
  car.velocityX=speed ;
  weight=random(400,1500);


}
function draw() {
  background("black");
  if((wall.x-car.x)<(car.width+wall.width)/2)
  {
    console.log("hello");
    car.velocityX=0;
    var deformation=.6*weight*speed*speed/22509;
    //console.log(deformation);
    if(deformation>180)
    {
      console.log(deformation);
   car.shapeColor="red";
    }
    if(deformation<180 && deformation>100)
   {
    console.log(deformation);
     car.shapeColor="blue";
   }
   if(deformation<100)
   {
    console.log(deformation);
     car.shapeColor="green";
   }
  }

  drawSprites();
}