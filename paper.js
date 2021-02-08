class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.5
        }
        this.body= Bodies.circle(90,400,60,options);
        this.image= loadImage("paper.png");
        //this.image.scale=2;
        World.add(world,this.body);

        
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        image(this.image,0,0,70,70);
        
        pop();
        
        
    }
}