class Player {

    constructor() {

        this.x = w/2;
        this.y = h-(w*0.025);
        this.xspeed = 0;

        this.dir = function (x) { //definit la fx dir

            this.xspeed = x;

        }

        this.update = function () { //definit la fx update

            this.x = this.x + this.xspeed * spd;

            if (this.x > w-30) { //si contact joueur-bord droit

                this.x = w-30;
                this.xspeed = -this.xspeed;

            }

            if (this.x < 0) { //si contact joueur-bord gauche

                this.xspeed = -this.xspeed;

            }
          
        }

        this.show = function () { //definit la fx show

            fill(255);
            noStroke();
            rect(this.x, this.y, w*0.025, w*0.025);

        }

    }

}