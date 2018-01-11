
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {
    game.load.image('phaser', 'ball.png');
}

var sprite;
var bullets;
var bullet;
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.setBoundsToWorld();

    sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
    sprite.anchor.set(0.5);
	
	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(300, 'phaser', 0, false);

	
	
	
    game.physics.arcade.enable(sprite);
	cursors = game.input.keyboard.createCursorKeys();

}

function update () {
    if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8)
    {
        game.physics.arcade.moveToPointer(sprite, 300);
    }
    else
    {
        sprite.body.velocity.set(0);
    }
	
	if (cursors.up.isDown){ 
			tire();
	}
}

function tire(){
	bullet = bullets.getFirstExists(false);
    bullet.reset(sprite.x, sprite.y);
	bullet.body.velocity.y = -400;
	bullet.checkWorldBounds = true;
	bullet.events.onOutOfBounds.add(dell, this);
}

function dell(bullet){
	bullet.kill();
}
