class PlayScene extends Phaser.Scene {

    //Construct new scene
    constructor() {
        super('play');
    }

    //Preload external game assets
    preload() {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png');
    }

    //Create game data
    create() {
        this.create_map();
    }

    //Update game data
    update() {
        this.add.image(640/2, 'background');
    }

}
