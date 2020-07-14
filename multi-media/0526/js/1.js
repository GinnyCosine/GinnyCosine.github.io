//JavaScriptDocument
$(document).ready(function(){

    $('.box').eq(0).addClass('ch_bg');

    $('.box').click(function(){
        var idx = $(this).index();
        var atop = art_calculate(idx);
        $(this).addClass('ch_bg').siblings().removeClass('ch_bg');
        $('article').animate({top: atop},1000);
    });
	
	$(window).resize(function(){
        var r_index = $('div.ch_bg').index();
        var wtop = art_calculate(r_index);
        $('article').css({top: wtop},1000);
    });
});

function art_calculate(idx){
    var win_h = $(window).height(); // 100vh
    return win_h * idx * (-1);
}
