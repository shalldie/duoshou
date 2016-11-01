var $ = require('jQuery');

var gameLoading = require('./gameLoading');

class Game {
    constructor() {
        this.init();
        this.score = 0;
        this.timeLeft = 10;
        this.render();
        this.end = $.Callbacks();
    }

    /**
     * 初始化
     * 
     * 
     * @memberOf Game
     */
    init() {
        var self = this;
        this.bindEvents();
        this.render();
        gameLoading(function () {
            self.start();
            self.tick();
        });
    }

    /**
     * 事件绑定
     * 
     * 
     * @memberOf Game
     */
    bindEvents() {
        var wrap = $(".game-wrap").off();
        var self = this;

        wrap.on("touchstart", function () {
            $("#music_duo")[0].play();
        });

        wrap.on("touchstart", ".duo", function () { // 点击到无效区域
            var self = $(this);
            if (self.data("hasClick")) return;

            self.data("hasClick", true);
            self.attr("class", "duo duo—styleC");
            clearTimeout(self.data("timer"));
            setTimeout(function () {
                self.remove();
            }, 1000);
        });

        wrap.on("touchstart", ".duo-p", function () { // 点击到有效区域
            var eleP = $(this).parent();
            if (eleP.data("hasClick")) return;
            eleP.data("hasClick", true);

            eleP.attr("class", "duo duo—styleB");
            self.score++;
            self.render();

            clearTimeout(eleP.data("timer"));
            setTimeout(function () {
                eleP.remove();
            }, 1000);

            $("#music_success")[0].play();
            return false;
        });

    }

    newItem() {
        var content = `
        <div class="duo duo—styleA">
            <a href="javascript:void(0)" class="duo-p"></a>
            <div class="duo-knife"></div>
        </div>
        `;
        var ele = $(content).css({
            "left": ~~(Math.random() * 80) + "%",
            "top": ~~(Math.random() * 80) + "%",
            "transform": `scale(${1 + +Math.random().toFixed(2)})`
        });
        $(".game-box").append(ele);
        var timer = setTimeout(function () {
            ele.remove();
        }, 1000);
        ele.data("timer", timer);
    }

    /**
     * 开始游戏
     * 
     * @param {any} delay
     * @returns
     * 
     * @memberOf Game
     */
    start(delay) {
        if (this.timeLeft <= 0) {
            return;
        }

        var self = this;
        delay = delay || 1000;
        setTimeout(function () {
            self.newItem();
            self.start(delay - 48);
        }, delay)
    }

    tick() {
        var self = this;
        var timer = setInterval(function () {
            self.timeLeft--;
            self.render();
            if (self.timeLeft <= 0) {
                clearInterval(timer);
                setTimeout(function () {
                    self.end.fire(self.score);
                }, 1600);
            }
        }, 1000);
    }

    /**
     * 将积分和结果渲染到页面
     * 
     * 
     * @memberOf Game
     */
    render() {
        $(".game-score").html(this.score);
        $(".game-time").html(this.timeLeft);
    }
}

module.exports = Game;