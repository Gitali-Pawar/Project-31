class dropsClass{
    constructor(x,y){
        var options = {
         isStatic: false,
         "friction":0.1,
         "restitution":0.05,
         "density":0.1
        }

        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,10,options);
        this.trajectory = []
       //  this.dropImage = loadImage("")
        World.add(world,this.body);

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y);
       
        push()
        var position = [this.body.position.x,this.body.position.y];
        this.trajectory.push(position);

        var maxDrops=100;
        for(var i=0;i<maxDrops;i++){
            drops.push(new createDrop(random(0,400),random(0,400)));
        }

     

        fill("blue");
        pop();
       
    }
}