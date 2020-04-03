const Engine= Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    ball=new ball(200,200,30,30)
    Paddle=new Paddle()
}

function draw(){
    background(255);
    ball.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function attach(body){
    this.sling.bodyA= body;
}

function display(){
    image(this.sling1,200,20);
    image(this.sling2,170,20);
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        
        stroke(48,22,8);
        if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling3,pointA.x -30, pointA.y -10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
        
        pop();
        }
    
        }
}
