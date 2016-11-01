var $ = require('jQuery');

var gameLoading = require('./gameLoading');

class Game {
    constructor() {
        this.init();
    }

    /**
     * 初始化
     * 
     * 
     * @memberOf Game
     */
    init() {
        gameLoading(function () {

        });
    }
}

module.exports = Game;