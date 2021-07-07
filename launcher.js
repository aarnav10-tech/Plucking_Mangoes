class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 10
        }
        this.pointB = pointB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.shot);
    }
    fly(){
        this.Launcher.bodyA = null;
    }
    attach(){
        this.Launcher.bodyA = stone.body;
    }
    display(){
        if(this.Launcher.bodyA){
        strokeWeight(2);
        line(this.Launcher.bodyA.position.x, this.Launcher.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
    }
}