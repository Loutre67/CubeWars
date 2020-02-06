var w=window.innerWidth ;
var h=window.innerHeight ;
var spd = w*0.0025;
var player;
var drops = [];
var rain = 99;
var score = 0;
let playing = true;
let pause = false;
var i;
var endtxt = document.getElementById("endtxt");
var restart = document.getElementById("restart");
var quit = document.getElementById("quit");

function setup() {

    createCanvas(w, h);
    player = new Player();
    drops.push(new Drop()); //crée une nouvelle drop

    for (var i = 0; i < rain; i++) { //Ajoute un drop au tableau des drops = push
        drops.push(new Drop);

    } 
    
}

function draw(){
    background(0, 0, 0, 20);  

    if(pause === true){ // si jeu en pause, afficher texte

        endtxt.innerHTML = "PAUSED!";
        restart.innerHTML = "Press y to restart";

    }else if(pause === false){ // cacher texte

        endtxt.innerHTML = "";
        restart.innerHTML = "";

    }
    for(i = drops.length-1; i>= 0; i--){

        if(drops[i].hits(player)){ //si un objet touche le joueur

            playing = false;//arrêter le jeu
            endtxt.innerHTML = "LOSER!";// afficher textes
            restart.innerHTML = "Press y to play again!";
            quit.innerHTML = "Press p to exit!";

        }

    }
    for (var j = 0; j <= drops.length-1; j++){

        if(drops[j].offscreen()){ // si les drops sont hors de l'écran, 

            score++;// ajouter 1 au score
            drops.splice(j, 1); // supprimer l'objet de l'array( eviter ralentissements du jeu)

        }

    }

    var scoretxt = document.getElementById("score");   
    scoretxt.innerHTML = score; // afficher le score
   
    if(score >= rain+1){

        playing = false;        // si le joueur gagne, arrêter le jeu
        endtxt.innerHTML = "WINNER!"; // afficher textes
        quit.innerHTML = "Press p to exit!";
        restart.innerHTML = "Press y to play again!";
        
    }

    if(playing === true){   //si en jeu, cacher textes restants

        restart.innerHTML = ""; 
        quit.innerHTML = "";
        noCursor(); // cacher pointeur souris

    }

    if(playing === false){

        cursor(); // montrer pointeur si arrêté

    }

    player.show();  

    if(playing === true){ // si je n'est pas arrêté, mettre le joueur a jour

        player.update();    

    }

    for (let drop of drops) { // Prend chaque var de drops et la met à jour 

        drop.show();

        if(playing === true){ // si le jeu n'est pas arrêté, mettre a jour objets

            drop.update();

        } 

    }

}

function keyPressed(){

    if(keyCode === 27){ // commande échap

        playing = !playing; 
        pause = !pause;

    }

    if (playing === true){ // si en jeu

        if (keyCode === LEFT_ARROW){ // affecter action a fleche gauche

            player.dir(-1, 0);

        }

        if (keyCode === RIGHT_ARROW){ // affecter action a fleche gauche

            player.dir(1, 0);

        }

    } 

    if(score>= 100 || playing === false){

        if(keyCode === 89){ // y pour recharger page

            location.reload();

        }

    }

    if(playing === false){

        if(keyCode === 80){ // p pour fermer la page

            window.close();

        }
        
    }

}