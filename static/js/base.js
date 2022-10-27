import { GameMap } from '/static/js/game_map/base.js';
import { Kyo } from '/static/js/player/kyo.js';
import { Yagami } from '/static/js/player/Yagami.js'

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 300,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Yagami(this, {
                id: 1,
                x: 1210,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];
    }
}


export {
    KOF
}