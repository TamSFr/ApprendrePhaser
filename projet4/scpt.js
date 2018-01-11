var game = new Phaser.Game(320,320, Phaser.AUTO, 'jeu', { preload: preload, create: create, update: update });
var map;
var layer;
var player;
var vitesse;

function preload() {
	game.load.tilemap('level1', 'tileP.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tileSet', 'img/tile.png');
	game.load.image('ball', 'img/ball_soccer.png');
	game.load.image('piece', 'img/smile.ico');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE)
	
	//Fond
	game.stage.backgroundColor = '#2d2d2d';
	
	//TileSet
	map = this.add.tilemap('level1');
	map.addTilesetImage("monTileSet", "tileSet");
	layer = map.createLayer("Calque de Tile 1");
	
	
	//player
	player = game.add.sprite(64, 200, 'ball');
	game.physics.enable(player, Phaser.Physics.ARCADE);
	player.body.bounce.y = 0.5;
    player.body.gravity.y = 300;
	player.anchor.setTo(0.5, 0.5);
	
	//victoire
	piece = game.add.sprite(32*2+7, 32+7, 'piece');
	game.physics.enable(piece, Phaser.Physics.ARCADE);
	
	//Les controle
	cursors = game.input.keyboard.createCursorKeys();
	
	map.setCollisionBetween(1, 3);
}

function update() {
	vitesse = 200;
	player.body.velocity.x = 0;
	
	//collisions
	game.physics.arcade.collide(player, layer);
	game.physics.arcade.overlap(player, piece, colli, null, this);
	
	
	//Deplacement de la boule
		if (cursors.left.isDown){ 
			player.body.velocity.x = -vitesse;
			player.angle-=5;
		}
		
		if (cursors.right.isDown){ 
			player.body.velocity.x = vitesse;
			player.angle+=5;
		} 
		
		if (cursors.up.isDown && player.body.onFloor()){
			player.body.velocity.y = -300;
		}
	//Fin de Deplacement
}

function colli(maBoule, bouleR){
	alert("Bien Joué :D !");
	javascript:window.location.reload()
}













