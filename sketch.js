
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse = Matter.Mouse;

var dustbinObj,groundObject	
var world;
var r ;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,350);
	menu = new Menu(1600 , 700);

	slingshot = new SlingShot(250 , 350 , paper.body);

    const mouse = Mouse.create(canvas.elt);
    const options = {
        mouse : mouse ,
    };
    mConstraint = Matter.MouseConstraint.create(engine , options);
    
	World.add(world,mConstraint);
	Engine.run(engine);
}

function keyPressed(){
	if (menu.finish == true){
		if (keyCode == UP_ARROW) {
			r = true ; 
			Matter.Body.applyForce(paper.body , paper.body.position, {x : 230, y : -300});
		}
		if (key == 'r'){
			if (menu.selected[0] == 'Boring Version'){
				r = false ;
				World.remove(world , paper.body);
				paper = new Paper(200,300);
			};
			if (menu.selected[0] == 'My Version'){
				r = false ;
				World.remove(world , paper.body);
				paper = new Paper(200,350);
				slingshot.attach(paper.body);
			}
		}  
	}
	if (key == ' ' && menu.finish != true) {
		menu.finish = true;
		if (menu.selected[0] == 'Boring Version'){
			r = false ;
			World.remove(world , paper.body);
			paper = new Paper(200,300);
		};
		if (menu.selected[0] == 'My Version'){
			r = false ;
			World.remove(world , paper.body);
			paper = new Paper(200,350);
			slingshot.attach(paper.body);
		}
	}
}

function mousePressed(){
	console.log('mousePressed');
}

function mouseReleased() {
	if (menu.selected[0] == 'My Version'){
		setTimeout( () => {
			if ((slingshot.posA.x - slingshot.posB.x) != 0 ) {
				if ((slingshot.posA.y - slingshot.posB.y) != 0 ) {
					slingshot.fly(); 
					r = true ;
				}
			}   
		} , 50);
	}
}

function draw() {
  rectMode(CENTER);
  background(230);

  if (menu.finish == true){
	if (r == true) {
		menu.draw_button_text('R to restart' , 1600/2 , 100);
	};
	groundObject.display();
	dustbinObj.display();
  };

  if (menu.finish == true && menu.selected[0] == 'Boring Version'){
	menu.draw_button_text('Press UP arrow' , 200 , 500 );
	paper.display();
  }
  if (menu.finish == true && menu.selected[0] == 'My Version'){
	menu.draw_button_text('Work in Progress !!!' , 600 , 350);
    slingshot.display();
	paper.display();
  }

  menu.display();
}

