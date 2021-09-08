var player,playerImg,enemy,enemyImg,bullet,bulletImg;

function preload(){
  playerImg = loadImage("player.png");
  enemyImg = loadImage("enemy.png");
  bulletImg = loadImage("bullet.png");
}

function setup() {
  createCanvas(1350,600);

  player = createSprite(700, 500, 50, 50);
  player.addImage(playerImg);
  player.scale = 1.5;
}

function draw() {
  background("black");

  textSize(20);
  fill("yellow");
  text("Press arrow keys to move",width/15,height/2);
  text("Press 'SPACE' to shoot",width/15,height-250);

  spawnEnemy();
  drawSprites();
}

function spawnEnemy(){
  if(frameCount % 50 === 0){
  enemy = createSprite(random(150,1200),100,50,50);
  enemy.addImage(enemyImg);
  enemy.lifetime = 1000;
  }

}