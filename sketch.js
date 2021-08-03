var backg
var harry
var vold, vold_move
var ronald
var hermione
var level = 1



function preload() {
  bg_image = loadImage("HP_back.jpg");
  bg_image1 = loadImage("HP_back1.jpg");
  harryim = loadImage("main1.png");
  voldim = loadImage("voldy_s.png");
  voldmove = loadImage("voldy_move.png");
  voldat = loadImage("voldy_at.jpg");
  hermpic = loadImage("Herm.png");
  ronpic = loadImage("Ron.png");
  back_1 = loadImage("HP_back3.jpg");
  play = loadImage("Play.png");
  train = loadImage("HP_back4.jpg");
  train1 = loadImage("train.jpg");
  nextimg = loadImage("Next.png");
  hogins = loadImage("hogins.jpg");
  training = loadImage("Training.jpg");
  broom = loadImage("Broom.jpg");
  background_2 = loadImage("background_2.jpg")
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 20);
  //harry.visible = false
  //ronald.visible = false
  // hermione.visible = false
  //start=createImg("Play.png")
  //start.position(width/2,height/2)
  //start.mousePressed(()=>{
  // level = 1
  //})
  start = createSprite(width / 2 - 50, height / 2)
  start.addImage(play)
  broom = createSprite
}

function draw() {

  if (level == 1) {
    background(back_1);
    if (mousePressedOver(start)) {
      level = 2
    }
    // drawSprites();
  }
  if (level == 2) {
    background(back_1);
    start.destroy();
    level = 3
  }

  if (level == 3) {
    background(bg_image)
    //start.style.display = "none"
    harry = createSprite(width / 2 - 300, height / 2 + 100, 50, 50);
    harry.addImage(harryim);
    harry.scale = 0.7
    ronald = createSprite(width / 2, height / 2 - 200, 200, 200)
    ronald.addImage(ronpic);
    ronald.scale = 0.7
    hermione = createSprite(width / 2 + 300, height / 2 + 100, 200, 200)
    hermione.addImage(hermpic);
    hermione.scale = 0.7
    level = 4

  }
  if (level == 4) {
    background(bg_image);
    if (mousePressedOver(harry)) {
      harry.destroy();
      ronald.destroy();
      hermione.destroy();
      playerAnimation = 1
      level = 5
    }
    if (mousePressedOver(hermione)) {
      harry.destroy();
      ronald.destroy();
      hermione.destroy();
      playerAnimation = 2
      level = 5
    }
    if (mousePressedOver(ronald)) {
      harry.destroy();
      ronald.destroy();
      hermione.destroy();
      playerAnimation = 3
      level = 5
    }

  }
 
  if (level == 5) {
    background(train1);
    harry.destroy();
    ronald.destroy();
    next = createSprite(width-100, height/2+ 200)
    next.addImage(nextimg)
    next.scale = 0.45
    hermione.destroy();

    if(mousePressedOver(next)){
      level = 6
    }
  }

  if(level == 6) {
    background(hogins);
    player = createSprite(200, 500, 50, 50);

    if (playerAnimation == 1) {
      player.addImage(harryim)
      player.scale = 0.5
    }
   if (playerAnimation == 2) {
      player.addImage(hermpic)
      player.scale = 0.5
    }
    if (playerAnimation == 3) {
      player.addImage(ronpic)
      player.scale = 0.5
    }
    player.visible = true
    
    next.visible = false
    next.destroy();
  
    if(mousePressedOver(next)){
      level = 7
      
    }
     
  }

  if(level == 7) {
    background(background_2)
    next = createSprite(width-100, height/2+ 200)
    next.addImage(nextimg)
    next.scale = 0.45
    if(mousePressedOver(next)){
      level = 8
    }
  }

  if (level == 8) {
    background(training)
    next = createSprite(width-100, height/2+ 200)
    next.addImage(nextimg)
    next.scale = 0.45
    
  }



  

  
  drawSprites();
}