//Create variables here
var dog, dogSprite; 
var happyDog, happyDogSprite 
var database 
var foodS  
var foodStock

function preload()
{
   dog = loadImage("Dog.png")
   happydog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dogSprite=createSprite(250,300);
  dogSprite.addImage(dog)
  dogSprite.scale=0.5

  database=firebase.database();

  foodStock=database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dogSprite.addImage(happydog)
}
  drawSprites();
  fill("white")
  textSize(15);
  text(foodS, 250,100)
  fill("white")
  textSize(15);
  text("Note Press UP_ARROW Key To Feed Drago Milk!", 80,75)
}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x){

  if(x<=0) {
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



