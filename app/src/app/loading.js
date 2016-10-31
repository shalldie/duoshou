var $ = require('jQuery');
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