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

	__webpack_require__(14); // 方法扩展
	__webpack_require__(18); // 音乐
	__webpack_require__(2); // 初始化swiper

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(11);
	// 最外部容器swiper
	var mainSwiper = new Swiper('#main_wrap', {
	    effect: 'fade',
	    noSwiping: true
	    // direction: 'vertical',
	    // loop: true,

	    // // 如果需要分页器
	    // pagination: '.swiper-pagination',

	    // // 如果需要前进后退按钮
	    // nextButton: '.swiper-button-next',
	    // prevButton: '.swiper-button-prev',

	    // // 如果需要滚动条
	    // scrollbar: '.swiper-scrollbar',
	});
	__webpack_require__(10)().done(function () {
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
	});

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(11);
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

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(11);

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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(11);

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

/***/ }
/******/ ]);