class Paper{
    constructor(x, y, radius) {
      var options = {
        isStatic: false, 
          'restitution':0.1,
          'friction':0.1 ,
          'density':1.0

         
      }
      this.body = Bodies.circle(x, y, radius, options);
     this.radius=radius;

     this.image = loadImage("Sprites/paper.png")

     
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("blue");
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();

      image(this.image,0,0,this,radius,this.radius);
    }
  }

 