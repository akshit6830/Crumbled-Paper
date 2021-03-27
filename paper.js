class Paper {
    constructor(x, y) {
        var options = {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.img = loadImage('paper.png');
        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.width = 100
        this.height = 100;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        strokeWeight(4);
        stroke('green');
        fill(255);
        // rect(0, 0, this.width, this.height);
        image(this.img , 0, 0, this.width, this.height);
        pop();
    }

};