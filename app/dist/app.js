/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3); // 方法扩展
	__webpack_require__(5); // 音乐
	__webpack_require__(6); // 初始化swiper

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);

	$.fn.extend({
	    animateCss: function (animationName, callback) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function () {
	            $(this).removeClass('animated ' + animationName);
	            callback && callback();
	        });
	    }
	});

	$.fn.will = function (callback, type) {
	    //这里的this，表示jQuery对象
	    this.queue(type || "fx", function (next) {  // fx 表示默认的队列
	        //这里的this，是原生的对象
	        callback && typeof callback == "function" && callback.call($(this)); //使用call，方便回调函数使用this
	        next();
	    });
	    return this; //返回this，方便进行链式调用
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);

	// 背景音乐

	$(".music-bg-lbl").click(function () {
	    var self = $(this);
	    self.toggleClass('music-stop');
	    if (self.hasClass('music-stop')) {
	        $("#music_bg")[0].pause();
	    }
	    else {
	        $("#music_bg")[0].play();
	    }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	var Game = __webpack_require__(7);
	var game;

	// 最外部容器swiper
	var mainSwiper = new Swiper('#main_wrap', {
	    effect: 'fade',
	    // noSwiping: true
	    "": ""
	});

	// 结果页面上下滑动
	var resultSwiper = new Swiper('#result_wrap', {
	    direction: 'vertical',
	    "": ""
	});

	$(".btn-more").click(function () {
	    resultSwiper.slideTo(1);
	});

	$(".btn-ag").click(function () {
	    newGame();
	});

	__webpack_require__(9)().done(function () {
	    setTimeout(function () {
	        mainSwiper.slideTo(1);


	        $({})
	            .will(() => $(".index-title-wrap").animateCss("bounceIn"))
	            .delay(1000)
	            .will(() => $(".index-title-wrap").animateCss("bounceIn"));
	    }, 300);
	});

	// 第二屏，晃动
	setInterval(function () {
	    $(".slide-ready .start-btn").animateCss("wobble");
	}, 2000);

	// 第二屏，点击按钮跳转到第三屏
	$(".start-btn").click(function () {
	    mainSwiper.slideTo(2);
	    newGame();
	});

	function newGame() {
	    mainSwiper.slideTo(2);
	    game = new Game();
	    game.end.add(function (score) {  // 游戏结束
	        mainSwiper.slideTo(3);
	        showResult(score);
	    });
	}


	// 结果页面

	function showResult(score) {
	    var level = 4;
	    if (score > 12) {
	        level = 1;
	    } else if (score > 10) {
	        level = 2;
	    } else if (score > 8) {
	        level = 3;
	    } else {
	        level = 4;
	    }

	    var content = [
	        '<h2>骨灰级剁手党</h2><p>总在深夜想起<br/>诗和远方<br/>还有钱包空荡荡</p>',
	        '<h2>重度剁手党患者</h2><p>买买买时指点江山<br/>激扬文字<br/>却总在深夜听钱哭的声音</p>',
	        '<h2>中度剁手党患者</h2><p>买买买时残留<br/>一丝“人性”<br/>尚能顾虑到钱包的感受</p>',
	        '<h2>专业伪剁手党</h2><p>梦想成为一枚叱咤江湖<br/>的剁手党老大<br/>奈何金钱总是投奔他方</p>'
	    ][level - 1];

	    var src = `img/result-imgs0${level}.png`;
	    $(".result-img").attr("src", src);
	    $(".result-content").html(content);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);

	var gameLoading = __webpack_require__(8);

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

	        wrap.click(function () {
	            $("#music_duo")[0].play();
	        });

	        wrap.on("click", ".duo", function () { // 点击到无效区域
	            var self = $(this);
	            if (self.data("hasClick")) return;

	            self.data("hasClick", true);
	            self.attr("class", "duo duo—styleC");
	            clearTimeout(self.data("timer"));
	            setTimeout(function () {
	                self.remove();
	            }, 1000);
	        });

	        wrap.on("click", ".duo-p", function () { // 点击到有效区域
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
	            self.start(delay - 40);
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
	                }, 1100);
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);

	/**
	 * 去除原有样式
	 */
	function resetCss() {
	    $(".game-shadow,.num-left-wrap,.num-left").removeAttr('style');
	}

	var ele = $({});// 队列载体对象

	/**
	 * 加载动画
	 * 
	 * @param {any} callback
	 */
	function makeAnimate(callback) {
	    ele.stop(true, false);
	    resetCss();
	    
	    var eleWrap=$(".num-left-wrap").removeAttr("style");
	    var eleGo=$(".num-go").removeAttr("style");
	    var eleNum = $(".num-left").removeAttr('style');
	    ele.will(n => {
	        $(".game-shadow").show();
	        eleNum.removeClass("num-1 num-2 num-3")
	            .addClass("num-3")
	            .animateCss("bounceIn");
	    }).delay(1000)
	        .will(n => {
	            eleNum.removeClass("num-1 num-2 num-3")
	                .addClass("num-2")
	                .animateCss("bounceIn");
	        }).delay(1000)
	        .will(n => {
	            eleNum.removeClass("num-1 num-2 num-3")
	                .addClass("num-1")
	                .animateCss("bounceIn");
	        }).delay(1000)
	        .will(()=>{
	            eleNum.hide();
	            eleWrap.css("background","none");
	            eleGo.show().animateCss("bounceIn");
	        }).delay(1000)
	        .will(() => {
	            $(".game-shadow").hide();
	            callback&&callback();
	        });
	}

	module.exports = makeAnimate;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	var imgArr = [
	    "duoshou_bg_dot.png",
	    "loading_bg.png",
	    "index-bg.png"
	];

	var ele = $(".loading-info");
	var num = 0; // 当前完成数量

	/**
	 * 触发器，加载图片计数
	 */
	function updateNum() {
	    num++;
	    var per = ~~(num / imgArr.length) + "%"; // 取整
	    ele.html(per);
	}

	/**
	 * 预加载图片
	 * 
	 * @param {any} url 图片地址
	 * @returns Deferred
	 */
	function preloadImg(url) {
	    var dfd = $.Deferred();
	    var img = new Image();
	    img.src = url;
	    if (img.complete) {
	        updateNum()
	        dfd.resolve();
	    } else {
	        img.onload = function () {
	            updateNum()
	            dfd.resolve();
	        }
	    }
	    return dfd;
	}

	var cbs = imgArr.map(n => preloadImg('img/' + n));

	module.exports = function () {
	    // 预加载所有图片
	    return $.when.apply($, cbs).done(function () {
	        ele.html("100%");
	    });
	}

/***/ }
/******/ ]);