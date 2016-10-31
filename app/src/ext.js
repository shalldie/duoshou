var $ = require('jQuery');

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.will = function (callback, type) {
    type = type || 'fx';

    this.queue(function (next) {
        callback();
        next();
    }, type);

    return this;
}