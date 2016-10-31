var $ = require('jQuery');

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