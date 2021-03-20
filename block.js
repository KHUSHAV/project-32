class block{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0.5,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        this.image = loadImage("box1.png")
        World.add(world, this.body);
        

      }
      display(){ if(this.body.speed < 3){
          var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       
        
         }
         else{
     
          World.remove(world,this.body)
        push();
        this.visibility = this.visibility -3
        tint(255,this.visibility)
        pop();
      }
      }
      score(){
        if(this.visibility<0 &&  this.visibility>-105){
          score++;
        }
       }

      
}