class Paper{
    constructor(x,y,radius)
    {
    var options ={
        density:500.5,
        mass:25,
        friction:800,
        isStatic:false,
    }
    this.body =Matter.Bodies.circle(x,y,(radius-20)/2,options);
    this.radius =radius;
    this.image =loadImage("paper.png")
    World.add(world, this.body);
    }
    
    display()
    {
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
    
          imageMode(CENTER);
         image(this.image, 0, 0, this.radius, this.radius);
          pop();
          
    }
    };