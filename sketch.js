var allewayImage, bg,count,obstacle,fenceImage;
var cat_sound,dog_sound;
var cat,dog;
var ObstaclesGroup;
function preload(){
  alleywayImage = loadImage("./assets/alleway(merged).jpg")
  catImage = loadImage("./assets/cat-removebg-preview.png")
  dogImage = loadImage("./assets/dog-removebg-preview.png")
  fenceImage = loadImage("./assets/fence-removebg-preview.png")
  cat_sound = loadSound("./assets/mixkit-cartoon-little-cat-meow-91.wav")
  dog_sound = loadSound("./assets/mixkit-dog-barking-twice-1.wav")
}

function setup() {
  createCanvas(1900,950);
   ObstaclesGroup = new Group();
 bg = createSprite(950,450)
 bg.scale = 1.80
 bg.addImage(alleywayImage)
 bg.velocityX = -6
 count = count + Math.round(World.frameRate/60);
  dog = createSprite(50,800,50,50)
 dog.addImage(dogImage)
cat = createSprite(920,820,50,50)
 cat.addImage(catImage)

 
}
function draw() {
  background("green");
  if (bg.x < 0){
    bg.x = bg.width/2;
  } 
  spawnObstacles();
  playSounds();
  catAutoJump();
  drawSprites();
  fill("green")
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function spawnObstacles(){
  if(frameCount % 100 === 0) {
    obstacle = createSprite(1300,850,10,40);
    obstacle.velocityX = -6 
    obstacle.addImage(fenceImage)
    ObstaclesGroup.add(obstacle)
  }
}

function playSounds(){
  if(frameCount % 200 === 0) {
    dog_sound.play()
    cat_sound.play()
  }
}

function catAutoJump(){
  if(cat.isTouching(ObstaclesGroup)){
    cat.velocityY = -10
    cat.velocityY = cat.velocityY + 10;
  }
}