class PlayScene extends Phaser.Scene {

    constructor() {
        super({
            key: "play",
            physics: {
                system: "impact",
                gravity: 100
            }
        });
    }

    preload() {
        this.load.image("tile_image", "convert/jungle%20tileset.png");
        this.load.tilemapTiledJSON('map', 'convert/game_map.json');
        this.load.spritesheet('run', 'convert/run.png', {frameWidth: 21, frameHeight: 33});
    }

    create() {
        // this.add.text(100, 100, "Play", {fill: '#fff'});
        // this.scene.switch('menu');
        this.player = this.physics.add.sprite(100, 100, 'run');

        // this.player.scale.set(2);
        let map = this.add.tilemap('map');

        let tileset = map.addTilesetImage("Jungle Tiles", "tile_image");

        let layer = map.createStaticLayer('main', tileset);

        let items = map.createFromObjects('items', 9, {}, this);
        console.log(items);
        console.log(map);
    }
}