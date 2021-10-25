var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var pelotas;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle = new particulas(400,20,10,4);
//multiplicacion de particulas
  if(frameCount%60===0){
    particles.push(new particulas(random(width/2-10,width/2+10),10,10));
    }

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 80; k <=160; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 160; k <=240; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 240; k <=320; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 320; k <=400; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 400; k <=480; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 480; k <=560; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 560; k <=640; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 640; k <=720; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 720; k <=800; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
for (var j = 75; j<=width; j=j+50){
  plinkos.push(new Plinko (j,275));
}
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  for (var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinko (j,475));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("puntuacion "+ score,650,20);

  text("100",17,600);
  text("100",100,600);
  text("100",180,600);
  text("100",260,600);
  text("500",340,600);
  text("500",420,600);
  text("200",500,600);
  text("200",580,600);
  text("200",660,600);
  text("200",740,600);

 
  Engine.update(engine);
  ground.display();

  particle.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }
  if(pelotas!=null){
  pelotas.display();
  if(pelotas.body.position.y>780){

  
  if(pelotas.body.position.x< 300){
    score = score+100;
    pelotas=null;
  }else
  
  if(pelotas.body.position.x>340 && pelotas.body.position.x<499){
    score = score+500;
    pelotas=null;
  }else
  if(pelotas.body.position.x>500 && pelotas.body.position.x<760){
    score = score+200;
    pelotas=null;
  }
  }
}

}
function mousePressed(){
  pelotas=new particulas(mouseX,10,10,10);
}