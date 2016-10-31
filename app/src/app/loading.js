var $ = require('jQuery');
var imgArr = [
    "duoshou_bg_dot.png",
    "loading_bg.png",
    "index-bg.png"
];

var ele = $(".loading-info");
var num = 0; // 当前完成数量

function updateNum() {
    num++;
    var per = ~~(num / imgArr.length) + "%";
    ele.html(per);
}

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