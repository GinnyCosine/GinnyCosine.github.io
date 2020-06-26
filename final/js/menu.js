$(document).ready(function(){
    var menu_open = 0;
    var pn = $("body").data('pagenum');
    var cur_scrollTop =  $(window).scrollTop();
    console.log(pn);

    $(window).load(function(){
        setTimeout(function (){$('.load').fadeOut(900)},600);
    });

    $(window).scroll(function(){
        var vw = $(window).width();
        if (vw <= 768){
            var tmp_scrollTop = $(window).scrollTop();
            if (tmp_scrollTop - cur_scrollTop >= 0){
                $(".menubtn").fadeOut();
                $(".menu_mobile").fadeOut();
            }
            else{
                $(".menubtn").fadeIn();
                $(".menu_mobile").fadeIn();
            }
            cur_scrollTop = tmp_scrollTop;
        }
        
    });

    var vw = $(window).width();
    var type;
    if (vw <= 768){
        type = 1;
    }
    else if (vw <= 1262){
        type = 2;
    }
    else{
        type = 3;
    }
    
    $(window).resize(function(){
        vw = $(window).width();
        var tmp = 0;
        if (vw <= 768){
            tmp = 1;
        }
        else if (vw <= 1262){
            tmp = 2;
        }
        else{
            tmp = 3;
        }

        if (tmp !== type){
            //alert('reshape: tmp '+tmp+" type "+type);
            type = tmp;
            location.reload();
        }
    });

    
    $(".sketch").hover(function(){
        console.log('132');
        vw = $(window).width();
        if (vw > 1262){
            $(".submenu").show();
            $(".sketchhome").hide();
        }
    },function(){
        vw = $(window).width();
        if (vw > 1262){
            $(".submenu").hide();
        }
    });

    $(".sketch_b").click(function(){
        $(".submenu").fadeIn();
        if (vw <= 768)
            $(".back2menu").fadeIn();
    });
    
    $(".back2menu").click(function(){
        $(".submenu").fadeOut();
    });

    $(".menubtn").click(function(){
        addMenuFlag();
        vw = $(window).width();
        if (menu_open == 0){
            $(".outerline").eq(0).css("transform","rotate(-45deg)");
            $(".outerline").eq(0).css("transition","0.5s ease-in-out");
            $(".outerline").eq(1).css("opacity","0");
            $(".outerline").eq(1).css("transition","0.5s ease-in-out");
            $(".outerline").eq(2).css("transform","rotate(45deg)");
            $(".outerline").eq(2).css("transition","0.5s ease-in-out");
            if (vw > 768){
                $('.menu').css('left','0');
            }
            else{
                $('.menu').css('top','0');
            }
            menu_open = 1;
            $('.menu').css('transition','0.6s ease-in-out');
            $(".menu_mobile").css("background","none")
        }
        else{
            $(".outerline").eq(0).css("transform","none");
            $(".outerline").eq(0).css("transition","0.5s ease-in-out");
            $(".outerline").eq(1).css("opacity","1");
            $(".outerline").eq(1).css("transition","0.5s ease-in-out");
            $(".outerline").eq(2).css("transform","none");
            $(".outerline").eq(2).css("transition","0.5s ease-in-out");
            if (vw > 1262){
                $('.menu').css('left','-20%');
            }
            else if (vw > 768){
                $('.menu').css('left','-300px');
            }
            else{
                $('.menu').css('top','-101%');
            }
            $(".submenu").fadeOut();
            $('.menu').css('transition','0.6s ease-in-out');
            menu_open = 0;
            $(".menu_mobile").css("background","rgba(255, 251, 247, 0.8)")
        }
    });

    
    
});

function addMenuFlag(){
    var pn = $("body").data('pagenum');
    if (pn == 1){
        $("#home").addClass("menu_flag");
    }
    else if (pn == 2){
        $(".sketch_a li").addClass("menu_flag");
        $(".sketch_b li").addClass("menu_flag");
        $(".sketchhome").addClass("menu_flag");
    }
    else if (pn == 3){
        $("#painting").addClass("menu_flag");
    }
    else if (pn == 4){
        $("#illustration").addClass("menu_flag");
    }
    else if (pn == 5){
        $("#other").addClass("menu_flag");
    }
    else{
        $(".sketch_a li").addClass("menu_flag");
        $(".sketch_b li").addClass("menu_flag");
        $(".submenu ul li").eq(pn-5).addClass("menu_flag");
    }
    
}