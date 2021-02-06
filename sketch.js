var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15;
var wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;
var player, playerImage, regieleki, regielekiImage, dugtrio, dugtrioImage, slowbro, slowbroImage, shedinja, shedinjaImage, beedrill, beedrillImage, vaporeon, vaporeonImage, hitmontop, hitmontopImage;
var score = 0, gameState = 0;

function preload() {
  playerImage = loadImage("Luigi.png")
  regielekiImage = loadImage("Regieleki.png")
  dugtrioImage = loadImage("Dugtrio.png")
  slowbroImage = loadImage("Slowbro.png")
  shedinjaImage = loadImage("Shedinja.png")
  beedrillImage = loadImage("Beedrill.png")
  vaporeonImage = loadImage("Vaporeon.png")
  hitmontopImage = loadImage("Hitmontop.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  wall1 = createSprite(50, 30, 10, 50);
  wall2 = createSprite(80, 60, 70, 10);
  wall3 = createSprite(50, 185, 10, 150);
  wall4 = createSprite(160, 135, 10, 250);
  wall5 = createSprite(270, 50, 120, 10);
  wall6 = createSprite(215, 120, 10, 136);
  wall7 = createSprite(255, 183, 70, 10);
  wall8 = createSprite(285, 213, 10, 50);
  wall9 = createSprite(250, 233, 70, 10);
  wall10 = createSprite(220, 253, 10, 50);
  wall11 = createSprite(268, 283, 105, 10);
  wall12 = createSprite(325, 208, 10, 160);
  wall13 = createSprite(285, 133, 70, 10);
  wall14 = createSprite(255, 115, 10, 40);
  wall15 = createSprite(285, 98, 70, 10);
  wall16 = createSprite(100, 110, 110, 10);
  wall17 = createSprite(80, 255, 65, 10);
  wall18 = createSprite(110, 210, 10, 100);
  wall19 = createSprite(80, 355, 65, 10);
  wall20 = createSprite(50, 335, 10, 50);
  wall21 = createSprite(30, 315, 40, 10);
  wall22 = createSprite(110, 335, 10, 50);
  wall23 = createSprite(160, 360, 10, 100);
  wall24 = createSprite(185, 315, 60, 10);
  wall25 = createSprite(210, 335, 10, 50);
  wall26 = createSprite(260, 355, 100, 10);
  wall27 = createSprite(5, 200, 10, 400);
  wall28 = createSprite(200, 5, 400, 10);
  wall29 = createSprite(395, 200, 10, 400);
  wall30 = createSprite(200, 395, 400, 10);

  player = createSprite(10, 10)
  player.addImage(playerImage)
  player.scale = 0.1

  regieleki = createSprite(300, 300)
  regieleki.addImage(regielekiImage)
  regieleki.scale = 0.08

  dugtrio = createSprite(100, 200)
  dugtrio.addImage(dugtrioImage)
  dugtrio.scale = 0.05

  slowbro = createSprite(350, 350)
  slowbro.addImage(slowbroImage)
  slowbro.scale = 0.08

  shedinja = createSprite(350, 150)
  shedinja.addImage(shedinjaImage)
  shedinja.scale = 0.06
  shedinja.velocityX = 7
  shedinja.velocityY = -6

  beedrill = createSprite(350, 150)
  beedrill.addImage(beedrillImage)
  beedrill.scale = 0.11
  beedrill.velocityX = 6
  beedrill.velocityY = -5 

  vaporeon = createSprite (50, 50)
  vaporeon.addImage(vaporeonImage)
  vaporeon.scale = 0.1
  
  hitmontop = createSprite(200, 200)
  hitmontop.addImage(hitmontopImage)
  hitmontop.scale = 0.01

  
}

function draw() {
  background(0);
  if (gameState === 0) {
    //Luigi's Controls
    if (keyDown(DOWN_ARROW)) {
      player.y = player.y + 5
    }
    if (keyDown(UP_ARROW)) {
      player.y = player.y - 5
    }
    if (keyDown(RIGHT_ARROW)) {
      player.x = player.x + 5
    }
    if (keyDown(LEFT_ARROW)) {
      player.x = player.x - 5
    }

    //gimicks
    regieleki.velocityX = Math.round(random(-15, 15))
    regieleki.velocityY = Math.round(random(-15, 15))
    if (frameCount % 10 === 0) {
      dugtrio.velocityX = Math.round(random(-15, 15))
      dugtrio.velocityY = Math.round(random(-15, 15))
    }
    if (frameCount % 150 === 0) {
      slowbro.x = Math.round(random(0, 400))
      slowbro.y = Math.round(random(0, 400))
    }
    hitmontop.x = Math.round(random(0, 400))
    hitmontop.y = Math.round(random(0, 400))
    
    
    textSize(50)
    text(score, 350, 50)

    //score and game over
    if (player.isTouching(regieleki)) {
      score = score + 3
      regieleki.visible = false
    }
    if (player.isTouching(dugtrio)) {
      score = score + 1
      dugtrio.visible = false
    }
    if (player.isTouching(slowbro)) {
      score = score + 4
      slowbro.visible = false
    }
    if (player.isTouching(shedinja)) {
      score = score + 2
      shedinja.visible = false
    }
    if (regieleki.visible === false && dugtrio.visible === false && slowbro.visible === false && shedinja.visible === false) {
      regieleki.visible = true
      dugtrio.visible = true
      slowbro.visible = true
      shedinja.visible = true
      score = score + 10
    }
    if (player.isTouching(vaporeon)){
      score = score + 4
      vaporeon.x = Math.round(random(0, 400))
      vaporeon.y = Math.round(random(0, 400))
    }
    if (player.isTouching(hitmontop)){
      player.x = Math.round(random(10,390))
      player.y = Math.round(random(10,390))
      score = score + 5
    }
    if (player.isTouching(beedrill)) {
      gameState = 1
    }
  }
  
  if (gameState === 1) {
    textSize(45)
    text("GAME OVER!", 75, 200)
    textSize(30)
    text("Your score was " + score, 100, 350)
    beedrill.velocityY = 0
    beedrill.velocityX = 0
    beedrill.velocityY = 0
    dugtrio.velocityX = 0
    dugtrio.velocityY = 0
    shedinja.velocityX = 0
    shedinja.velocityY = 0
    slowbro.x = slowbro.x
    slowbro.y = slowbro.y
    regieleki.velocityX = 0
    regieleki.velocityY = 0
    player.velocityX = 0
    player.velocityY = 0
    hitmontop.x = 400
    hitmontop.y = 400
  }
  //collision jazz
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);
  player.collide(wall24);
  player.collide(wall25);
  player.collide(wall26);
  player.collide(wall27);
  player.collide(wall28);
  player.collide(wall29);
  player.collide(wall30);

  regieleki.collide(wall27);
  regieleki.collide(wall28);
  regieleki.collide(wall29);
  regieleki.collide(wall30);
  regieleki.collide(slowbro)

  dugtrio.collide(wall1);
  dugtrio.collide(wall2);
  dugtrio.collide(wall3);
  dugtrio.collide(wall4);
  dugtrio.collide(wall5);
  dugtrio.collide(wall6);
  dugtrio.collide(wall7);
  dugtrio.collide(wall8);
  dugtrio.collide(wall9);
  dugtrio.collide(wall10);
  dugtrio.collide(wall11);
  dugtrio.collide(wall12);
  dugtrio.collide(wall13);
  dugtrio.collide(wall14);
  dugtrio.collide(wall15);
  dugtrio.collide(wall16);
  dugtrio.collide(wall17);
  dugtrio.collide(wall18);
  dugtrio.collide(wall19);
  dugtrio.collide(wall20);
  dugtrio.collide(wall21);
  dugtrio.collide(wall22);
  dugtrio.collide(wall23);
  dugtrio.collide(wall24);
  dugtrio.collide(wall25);
  dugtrio.collide(wall26);
  dugtrio.collide(wall27);
  dugtrio.collide(wall28);
  dugtrio.collide(wall29);
  dugtrio.collide(wall30);

  shedinja.bounceOff(wall1);
  shedinja.bounceOff(wall2);
  shedinja.bounceOff(wall3);
  shedinja.bounceOff(wall4);
  shedinja.bounceOff(wall5);
  shedinja.bounceOff(wall6);
  shedinja.bounceOff(wall7);
  shedinja.bounceOff(wall8);
  shedinja.bounceOff(wall9);
  shedinja.bounceOff(wall10);
  shedinja.bounceOff(wall11);
  shedinja.bounceOff(wall12);
  shedinja.bounceOff(wall13);
  shedinja.bounceOff(wall14);
  shedinja.bounceOff(wall15);
  shedinja.bounceOff(wall16);
  shedinja.bounceOff(wall17);
  shedinja.bounceOff(wall18);
  shedinja.bounceOff(wall19);
  shedinja.bounceOff(wall20);
  shedinja.bounceOff(wall21);
  shedinja.bounceOff(wall22);
  shedinja.bounceOff(wall23);
  shedinja.bounceOff(wall24);
  shedinja.bounceOff(wall25);
  shedinja.bounceOff(wall26);
  shedinja.bounceOff(wall27);
  shedinja.bounceOff(wall28);
  shedinja.bounceOff(wall29);
  shedinja.bounceOff(wall30);

  beedrill.bounceOff(wall27);
  beedrill.bounceOff(wall28);
  beedrill.bounceOff(wall29);
  beedrill.bounceOff(wall30);

  drawSprites();
}


