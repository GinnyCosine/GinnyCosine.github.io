$(document).ready(function(){
    $('.box').eq(0).addClass("ch_bg");
    $('.content').eq(0).show();

    $('.box').click(function(){

        var _index = $(this).index();

        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        // 在 box 下面，所以 this 是 box
        // siblings: 不是前面被選到的其他子類 (水平同階級的)

        var top_s = 480 * _index * (-1);
        $('.content').animate({top: top_s}, 1000);
    });
    $('li').eq(2).addClass('menu_here');
});