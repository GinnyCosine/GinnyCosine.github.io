//JavaScriptDocument
$(document).ready(function(){

    $('.box').eq(0).addClass("ch_bg");

    $('.box').click(function(){
        var idx = $(this).index();
        var atop = art_calculate(idx);
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        $('html ,body').animate({scrollTop: atop},1000);

        if (idx==1 && $('.moved').addClass("hid"))
            $('.moved').removeClass("hid");
    });
	
	$(window).on('resize', function(){
        var r_index = $('div.ch_bg').index();
        var wtop = art_calculate(r_index);
        $('html ,body').scrollTop(wtop);
    });

    $(window).on('scroll', function(){
        var win_h = $(window).height(); // 100vh
        var cur_h = $(window).scrollTop();
        var idx = Math.round(cur_h/win_h);
        $('.box').eq(idx).addClass("ch_bg").siblings().removeClass("ch_bg");

        $('aside').stop().animate({top: cur_h + 50}, 1000);

        if (cur_h >= win_h && cur_h <= win_h*2){
            $('.moved').removeClass("hid");
        }

        if (idx != 1 && !($('.moved').hasClass("hid")))
            $('.moved').addClass("hid");
    });

});

function art_calculate(idx){
    var win_h = $(window).height(); // 100vh
    return win_h * idx; //scrollTop 是正的
}
