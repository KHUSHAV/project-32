class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        
        }


        this.pointB = pointB;

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    attach(body){
        this.chain.bodyA = body;
    }

    display(){

    if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        stroke(49,23,8)
        strokeWeight(7);
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
     fly(){
        this.chain.bodyA = null;
    }
}