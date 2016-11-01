var $ = require('jQuery');
var Game = require('./game');
var game;

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
require('./loading')().done(function () {
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
    game = new Game();
});