class Box {
  constructor() {
    var options = {
        'restitution':0,
        'friction':0.3,
        'density':1.0,
        isStatic:true
    }
    this.image =loadImage("dustbingreen.png");
  }
  display(){

    imageMode(CENTER);
   image(this.image,width/2+292,585,200,210);
   push();
    pop();
  }
};

