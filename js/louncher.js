class louncher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10,
        }
this.pointB=pointB;
        this.louncher = Constraint.create(options);
        World.add(world, this.louncher);
    }
   
fly(){
    this.louncher.bodyA=null;
}
attach(body){
   this.louncher.bodyA=body;
}
    display(){

        if(this.louncher.bodyA){
            var pointA = this.louncher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

        }
        
}