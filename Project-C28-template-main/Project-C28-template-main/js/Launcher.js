class Launcher 
{
constructor (BodyA,pointB){
var options ={
BodyA:BodyA,
pointB:pointB,
stiffness:0.04,
length:10,
}
this.pointB=pointB
this.launcher=Constraint.create(options);
World.add(world.this.launcher);
}

fly (){
    this.launcher.BodyA= null;
}

display(){
    if(this.launcher.bodyA) {
         var pointA=this.bodyA.position;
          var pointB=this.pointB 
          strokeWeight(2);
           line(pointA.x,pointA.y,pointB.x,pointB.y); } 


    }

}
