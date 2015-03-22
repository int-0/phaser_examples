'use strict';
window.onload = function() {
    var game = new Phaser.Game(1024, 640,
			       Phaser.AUTO, 'space_travel',
			       { preload: preload,
				 create: create });

    function preload () {
	game.load.image('background', 'background_00.png');
	game.load.image('ground01',   'background_01.png');
	game.load.image('ground02',   'background_02.png');
	game.load.image('ground03',   'background_03.png');
	game.load.image('sky01',   'sky_01.png');
	game.load.image('sky02',   'sky_02.png');
    }

    function create () {
        this.background = game.add.sprite(0, 0, 'background');
	this.ground = [game.add.tileSprite(0, 640-169, 1024, 169, 'ground01'),
		       game.add.tileSprite(0, 640-121, 1024, 121, 'ground02'),
		       game.add.tileSprite(0, 640-81, 1024, 81, 'ground03')]
	this.ground[0].autoScroll(-100, 0);
	this.ground[1].autoScroll(-150, 0);
	this.ground[2].autoScroll(-200, 0);
	this.sky = [game.add.tileSprite(0, 0, 1024, 484, 'sky01'),
		    game.add.tileSprite(0, 0, 1024, 484, 'sky02')]	
	this.sky[0].autoScroll(-45, 0);
	this.sky[1].autoScroll(-15, 0);
    }
};

module.exports = Preload
