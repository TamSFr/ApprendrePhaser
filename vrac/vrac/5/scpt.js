var game = new Phaser.Game(320,320, Phaser.AUTO, 'jeu', { preload: preload, create: create, update: update });
var map;
var layer;
var player;
var vitesse;
var gameV;
var sapce;

function preload() {
	game.load.tilemap('level1', 'tileP.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tileSet', 'img/tile.png');
	game.load.image('ball', 'img/ball_soccer.png');
	game.load.image('piece', 'img/smile.ico');
}

function create() {	
    gameV = 0;
	//Fond
	game.stage.backgroundColor = '#2d2d2d';
	
	//Les controle
	cursors = game.input.keyboard.createCursorKeys();
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	map.setCollisionBetween(1, 3);
}

function update() {
    if(gameV==0){
	   //Deplacement de la boule
		if (space.isDown){ 
			go();
            gameV = 1;
        }
    }
    else{
        gameU();
    }
}

function go (maBoule, bouleR){
	player = game.add.sprite(200, 200, 'ball');
}

function gameU(){
    //Deplacement de la boule
    if (cursors.left.isDown){ 
        player.x-=5;
    }

    if (cursors.right.isDown){ 
        player.x+=5;
    } 

    if (cursors.up.isDown){ 
        player.y-=5;;
    } 

    if (cursors.down.isDown){ 
        player.y+=5;
    } 
    //Fin de Deplacement
}












