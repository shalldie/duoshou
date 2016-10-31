var $ = require('jQuery');

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