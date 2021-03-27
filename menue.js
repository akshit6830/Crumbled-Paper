function collide(x , y , w , h){
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h){
        return true;
    }
    else {
        return false;
    }
}

var i ;

class Menu {
    constructor(width  , height){
        this.finish = false;

        this.width = width;
        this.height = height;
        this.selected = ['My Version' , 0] ; 

        this.offset = [-10,-10,-20,-20];

        this.play_img = loadImage('menu/Play.png')
        this.my_img = loadImage('menu/Play.png')
        this.own_img = loadImage('menu/Play.png')
        this.back_img = loadImage('menu/Back.png')

        this.font = loadFont('menu/palamecia-titling.regular.ttf')
        this.buttons = [ [ this.my_img , this.width/2 - 200 , this.height/2  , 100 , 100 , 'My Version'] , [ this.own_img , this.width/2 + 200 , this.height/2 , 100 , 100  , 'Boring Version']];
    }

    check(name , i){
        if (this.buttons[i]!= null) {
            if (collide(this.buttons[i][1] , this.buttons[i][2] , this.buttons[i][3] , this.buttons[i][4] ) === true){
                this.selected = [name , i] ; 
            }
        }
    }

    display(){
        rectMode(CORNER);
        if (this.finish == false) {
            fill(150,0,255);
            this.draw_selected(this.selected[1]);
            this.draw_text(this.selected);
            for(i = 0 ; i < this.buttons.length ; i++){
                image(this.buttons[i][0] , this.buttons[i][1] , this.buttons[i][2] , this.buttons[i][3] , this.buttons[i][4] );
                this.check(this.buttons[i][5] , i);
                this.draw_button_text(this.buttons[i][5] ,this.buttons[i][1] , this.buttons[i][2] )
            }
        }
        else { 
            image(this.back_img , width - 60, 20 , 50 , 50);
            this.draw_button_text('Back' , width - 120 ,100);
            if (collide(width - 60, 20 , 50 , 50) === true){
                this.finish = false;
            }
        }
    }
    draw_selected(i){
        strokeWeight(5);
        // stroke(150,0,255);
        fill(150,0,255);
        rect( this.buttons[i][1] + this.offset[0] , this.buttons[i][2] + this.offset[1] , this.buttons[i][3] - this.offset[2] , this.buttons[i][4] - this.offset[3] )
    }
    draw_text(){
        textFont(this.font);
        textSize(40);
        // stroke(150,0,255);
        fill(0,0,0);
        text('Press Space to Start with the Selected input' , this.width/2- 385  , this.height/2 - 300);
        text('But before that Select the VERSION by Mouse' , this.width/2- 385  , this.height/2 - 250);
    }
    draw_button_text(w_text ,x , y){
        fill(0,0,0);
        textFont(this.font);
        textSize(40);
        text( w_text , x - 50 , y - 50);
    }
}
