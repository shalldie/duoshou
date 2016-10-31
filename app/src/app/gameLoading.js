var $ = require('jQuery');

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