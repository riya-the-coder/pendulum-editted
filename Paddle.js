class Paddle{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.Paddle=Constraint.create(options);
        Engine.add(engine,this.Paddle);

    }
    fly(){
        this.Paddle.bodyA=null;
    }
    display(){
        if(this.Paddle.bodyA){

        
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
