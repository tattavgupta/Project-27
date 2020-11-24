class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope)
    }
    display(){
        var point1=this.rope.bodyA.position
        var point2=this.rope.bodyB.position
        strokeWeight(3)
        line(point1.x,point1.y,point2.x+this.offsetX,point2.y+this.offsetY)
    }
}