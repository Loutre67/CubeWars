class Drop {

    constructor() {

        this.x = Math.floor(Math.random() * w ); //maths.floor arrondit le nombre décimal vers le bas, +10, ellipses pas coupées
        this.y = Math.floor((Math.random() * -3500) -300);
        this.yspeed = Math.random() * 5 + 2; // vitesse de chute aléatoire entre 2 et 7
        let touch = false; 

        this.dir = function (y) { //definit la fx dir

            this.yspeed = y;

        }

        this.update = function () { //definit la fx update

            this.y = this.y + this.yspeed;

        }
        this.hits = function(player) { // définir quand un drop touche le joueur

            if(this.y >= h-(h*0.108) && this.y <= h+(h*0.05)){

                if (player.x <= this.x + w*0.016 && player.x >= this.x-w*0.0268) {

                    touch = true;
                    return true;

                }

            }

            touch = false;
            return false;

        }

        this.show = function () { //definit la fx show
 
            fill(30, 125, 80);
            noStroke();
            
            if(touch){

                fill(255, 70, 30);

            }

            rect(this.x, this.y, h*0.03, h*0.05);

        }
        
        this.offscreen = function(){ //definit la fx offscreen

            if(this.y >= h){

                return true;

            }else{

                return false;

            }

        }

    }          
    
}