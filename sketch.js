var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(30,100);

  bullet = createSprite(100,200,50,10);
  bullet.scale = 0.5;
  bullet.shapeColor = "white";

  wall = createSprite(700,200,thickness,400);

  
}

function draw() {
  background(0);  

  bullet.velocityX = speed;

  bullet.depth = wall.depth;
  bullet.depth = bullet.depth+1;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>10){
      wall.shapeColor = "green";
      textSize(20);
      text("low quality bullets,rejected",400,200);
      textSize(15);
      text("refresh the page to do another bullet test",400,100);
    }else if(deformation<10){
      wall.shapeColor = "red";
      textSize(20);
      text("yes,the bullet is amazing",400,200);
      textSize(15);
      text("refresh the page to do another bullet test",400,100);
    }
  }
  
  drawSprites();
}