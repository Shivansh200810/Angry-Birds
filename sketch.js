const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,pig1,pig2,log1,log,log;

function setup(){
    var canvas = createCanvas(1100,750);
    engine = Engine.create();
    world = engine.world;

    log= new Log (885,690,270,7);
    log1= new Log (880,582,270,7);
    pig2=new Pigs (810,550);
    pig= new Pigs (800,620);
    pig1 =new Pigs (885,700);
    box1 = new Box(970,700,70,70);
    box2 = new Box(800,700,70,70);
    box3 = new Box(970,590,70,70);
    box4 = new Box(870,590,70,70);
    ground = new Ground(200,height,40000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig.display();
    pig2.display();
    log1.display();
    log.display();
    box3.display()
    box4.display()
}






















































