class Bob{
    constructor(x,y,radius){
      var options = {
          isStatic: false,
          density:0.12
      } 
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("red");
      ellipse(pos.x,pos.y,this.radius)  
    }
}