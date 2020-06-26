$(document).ready(function(){
    $('.box').eq(0).addClass("ch_bg");
    $('.content').eq(0).show();

    $('.box').click(function(){

        var _index = $(this).index();

        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        // 在 box 下面，所以 this 是 box
        // siblings: 不是前面被選到的其他子類 (水平同階級的)

        $('.content').eq(_index).fadeIn(2000).siblings().fadeOut(2000);
    });
    $('li').eq(1).addClass('menu_here');
});