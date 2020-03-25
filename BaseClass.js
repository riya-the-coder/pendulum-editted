class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.ellipse(x, y, width,radiusX,radiusY);
        this.width = width;
         World.add(world, this.body);
      }
      display(){
          ground.display();
          ball.display();
          Paddle.display();
          
      }
    }
    