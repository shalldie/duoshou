var $ = require('jQuery');
var imgArr = [
    'btn-line-bg.png',
    'btn-line-bg02.png',
    'btn-narrow.png',
    'btn-onemore.png',
    'btn-tigao.png',
    'duo_knife.png',
    'duo_styleA.png',
    'duo_styleB.png',
    'duo_styleC.png',
    'duoshou_bg_06.png',
    'duoshou_bg_dot.png',
    // 'img_guide_weixin.png',
    'index-bg.png',
    'index-title.png',
    'index_star_btn.png',
    'loading_bg.png',
    'logo.png',
    'music.png',
    'music_sel.png',
    'num_bg.png',
    'playPool_bg.png',
    'playPool_txt.png',
    'result-2code.png'
];

var ele = $(".loading-info");
var num = 0; // 当前完成数量

/**
 * 触发器，加载图片计数
 */
function updateNum() {
    num++;
    var per = ~~(num * 100 / imgArr.length) + "%"; // 取整
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

        img.onerror = function () {
            console.log('error:' + url);
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