class SlingShot {
    constructor(x , y , body) {
        this.x = x;
        this.y = y;

        const options = {
            pointA : {
                x : x ,
                y : y ,
            },
            bodyB : body,
            stiffness : 0.1 ,
            length : 50
        };

        this.sling = Matter.Constraint.create(options);
        World.add(world , this.sling);
        
        this.posA = this.sling.pointA ;
        this.posB = this.sling.bodyB.position ;
    }

    display() {
        stroke(255);
        strokeWeight(10);
        if (this.sling.bodyB){
            this.posA = this.sling.pointA ;
            this.posB = this.sling.bodyB.position ;
            line (this.posA.x , this.posA.y , this.posB.x , this.posB.y);
        };
    }

    fly(){
        this.sling.bodyB = null;
    }
    attach ( body ) {
        this.sling.bodyB = body;
    }
}