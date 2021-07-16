class Umbrella {
      
     constructor(){
          var options = {
               isStatic:true,
               restitution:0.5
          };
          var radius = 25;
          this.body = Bodies.circle(100,250, radius, options);
          this.width = radius;
          this.height = radius;
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          image(man_image, pos.x, pos.y);
     }
}