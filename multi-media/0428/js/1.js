$(document).ready(function(){
    $('.box').click(function(){
        $(".content").fadeToggle(1000);

        if($(this).hasClass("ch_bg"))
            $(this).removeClass("ch_bg")
        else
            $(this).addClass("ch_bg");

    });
    $('li').eq(0).addClass('menu_here');
});