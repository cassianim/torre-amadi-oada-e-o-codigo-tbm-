var torre, imagemTorre;
var porta,imagemPorta,portaGrupo;
var grade,imagemGrade,GradeGrupo;
var fantasma,imagemFantasma;
var blocoInvisivel, blocoGP;
var gameState = "play"


function preload(){
  imagemTorre = loadImage("tower.png");
  imagemPorta = loadImage("door.png");
  imagemGrade = loadImage("climber.png");
  imagemFantasma = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  //spookySound.loop();
  spookySound.setVolume(0.02)
  torre = createSprite(300,300);
  torre.addImage("tower",imagemTorre);
  torre.velocityY = 1;
  portaGrupo = new Group();
  GradeGrupo = new Group();
  blocoGP = new Group();

  fantasma = createSprite(300,350,50,50)
  fantasma.addImage(imagemFantasma)
  fantasma.scale = 0.3

 



}

function draw(){
  background(0);
  if(gameState == 'play'){




  
  
    
    if(torre.y > 400){
      torre.y = 300
    }
   fantasma.velocityY = fantasma.velocityY + 0.08
   if (keyDown('space')) {
    fantasma.velocityY = -5.5
   }
   if(keyDown('left')){
    fantasma.x = fantasma.x -3
   }
   if(keyDown('right')){
    fantasma.x = fantasma.x +3
   }

    
    //climbersGroup.collide(ghost);
   obstaculos();

   if(GradeGrupo.isTouching(fantasma)){
    fantasma.velocityY = 0
    


   }
   if( fantasma.y>600){
    fantasma.destroy();
    gameState = 'end'

   }
    
    drawSprites();  
  }
  if(gameState == 'end'){
    fill('black')
    textSize(30)
    text('FIM DE JOGO',300,300)




  }
  }
  function obstaculos(){
    if(frameCount%200 == 0){
    porta = createSprite(200,-50)
    grade = createSprite(200,10)
    blocoInvisivel = createSprite(200,15)
    blocoInvisivel.width = grade.width
    blocoInvisivel.height = 2

    blocoInvisivel.velocityY = 1
    porta.velocityY = 1
    grade.velocityY = 1

    porta.x  = Math.round(random(120,400)) 
    grade.x = porta.x
    blocoInvisivel.x = porta.x

    porta.lifetime = 800
    grade.lifetime = 800
    blocoInvisivel = 800

    portaGrupo.add(porta)
    GradeGrupo.add(grade)
    //blocoGP.add(blocoInvisivel)
    //blocoInvisivel.debug = true

    porta.addImage(imagemPorta)
    grade.addImage(imagemGrade)

    fantasma.depth = porta.depth
    fantasma.depth += 1
    }

  }
  



    
   
  


