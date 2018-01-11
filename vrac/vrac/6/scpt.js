
var game = new Phaser.Game(800, 600, Phaser.AUTOS, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.spritesheet('ship', 'ball_soccer.png', 32, 32);
    game.load.spritesheet('ball', 'wall_block.png');

}

var ship;
var cursors;
var vitesse;
var ball;

function create() {

    game.physics.startSystem(Phaser.Physics.P2JS);

    game.physics.p2.restitution = 0.9;
	game.physics.p2.world.defaultContactMaterial.friction = 0.3;

    ball = game.add.sprite(100, 100, 'ball');
	game.physics.p2.enable(ball);
	ball.body.mass = 6;
	ball.body.applyDamping(0.1);

    ship = game.add.sprite(400,400, 'ship');
	
	game.physics.p2.enable(ship);
	ship.body.fixedRotation = true;
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
	ball.body.applyDamping(0.1);
	vitesse = 200;
	ship.body.velocity.x = 0;
	ship.body.velocity.y = 0;
	if (cursors.left.isDown){ 
		ship.body.velocity.x = -vitesse;
	}
	
	if (cursors.right.isDown){ 
		ship.body.velocity.x = vitesse;
	} 
	
	if (cursors.up.isDown){ 
		ship.body.velocity.y = -vitesse;
	} 
	
	if (cursors.down.isDown){ 
		ship.body.velocity.y = vitesse;
	} 
	//Fin de Deplacement
		

}
