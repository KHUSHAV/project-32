class tnt{
  constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.image = loadImage("tnt.png")
      World.add(world, this.body);
      

    }
    display(){ 
        var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 70, 70);
      pop();
     
      
       }
   
    }
 
