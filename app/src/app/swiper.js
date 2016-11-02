var $ = require('jQuery');
var Game = require('./game');
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

// $(".btn-more").click(function () {
//     resultSwiper.slideTo(1);
// });

$(".btn-ag").click(function () {
    newGame();
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