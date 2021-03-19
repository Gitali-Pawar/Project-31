const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain;
var rand;
function preload(){
    
}

function setup(){
    var canvas = createCanvas(500,1500);
    engine = Engine.create();
    world = engine.world;

    rain = new dropsClass(250,750);

}

function draw(){
    background(0);
    Engine.update(engine);
   
    rain.display();
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
    }

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        rainCreatedFrame = frameCount;
        rain = createSprites(random(10,370),random(10,30),10,10)
       rain.scale(random(0.3,0.6));
    }

  drawSprites();
}   

