const Engine = Matter.Engine;
const World= Matter.World;

const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var poly,chain;
var Score = 0;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    //FRONT TOWER
    //Line1
  
   
   
    
    box1 = new Box(320,520,40,50);
    box2 = new Box(370,520,40,50);
    box3 = new Box(420,520,40,50);
    box4 = new Box(470,520,40,50);
    box5 = new Box(520,520,40,50);
    box6 = new Box(570,520,40,50);
    //Line2
    // Line For Intensity
    box7 = new Box(340,470,40,50);
    box8 = new Box(390,470,40,50);
    box9 = new Box(445,470,40,50);
    box10 = new Box(500,470,40,50);
    box11 = new Box(550,470,40,50);
    //Line3

    box12 = new Box(360,420,40,50);
    box13 = new Box(415,420,40,50);
    box14 = new Box(470,420,40,50);
    box15 = new Box(530,420,40,50);
    //Line4
    box16 = new Box(380,370,40,50);
    box17 = new Box(440,370,40,50);
    box18 = new Box(500,370,40,50);
    //Line5
    box19 = new Box(410,320,40,50);
    box20 = new Box(470,320,40,50);
    //Line6
    box21 = new Box(435,270,40,50);
    


    //BACK TOWER

    //Line1
    block1 = new Box(800,320,40,50);
    block2 = new Box(850,320,40,50);
    block3 = new Box(900,320,40,50);
    block4 = new Box(950,320,40,50);
    block5 = new Box(1000,320,40,50);
    //Line2
    block6 = new Box(820,270,40,50);
    block7 = new Box(870,270,40,50);
    block8 = new Box(920,270,40,50);
    block9 = new Box(970,270,40,50);
    //Line3
    block10 = new Box(840,220,40,50);
    block11 = new Box(890,220,40,50);
    block12 = new Box(940,220,40,50);
    //Line4
    block13 = new Box(860,170,40,50);
    block14 = new Box(910,170,40,50);
    //Line5
    block15 = new Box(885,120,40,50);

    poly = new Polygon(100,400);

    chain = new String(poly.body,{x:100,y:400})
    ground1 = new Ground(450,550,350,10);
    ground2 = new Ground(900,350,300,10);
}


function draw(){
    background("black");
   Engine.update(engine);
   fill("white")
   textSize(30)
   text("SCORE : "+ Score ,920,80)

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    poly.display();

    chain.display();
    
    ground1.display();
    ground2.display();
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();

    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    

}



function mouseDragged(){
Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})

}


function mouseReleased(){
chain.fly();

}


function keyPressed(){
if(keyCode===32){
    chain.attach(this.poly)
}

}


async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON =await response.json();
    var dt = responseJSON.datetime
    var hour = dt.slice(11,13)
    
    if(hour>=06 && hour<=18){
        background("yellow");

      }
    else{
    
        background("brown");
    }
   
    }