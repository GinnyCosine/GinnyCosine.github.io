$(document).ready(function(){
    $('#menu_icon').click(function(){
        $('.menu').css('left','0');
        $('.menu').css('transition','0.8s');
        $('#menu_icon').hide();
    });

    $('#close_icon').click(function(){
        $('.menu').css('left','-12%');
        $('.menu').css('transition','0.8s');
        $('#menu_icon').fadeIn();
    });

    $('section').click(function(){
        var display = $('#menu_icon').css('display');
        if(display == 'none'){
            $('.menu').css('left','-12%');
            $('.menu').css('transition','0.8s');
            $('#menu_icon').fadeIn();
        }
    });

    $('#h1').click(function(){
        topage(2);
    });

    $('#h2').click(function(){
        topage(3);
    });

    $('#h3').click(function(){
        topage(4);
    });

    $('#c1').click(function(){
        $('#r1 header').css('width','0');
        $('#r1 header').css('transition','width 1s');
        $('#r1 .picture').hide();
        $('#r1 .detail').hide();
        $('#r1 .desp1').fadeIn();
        $('#r1 .desp2').fadeIn();
        $('#r1 .desp3').fadeIn();
        $('#c1').hide();
    });

    $('#c2').click(function(){
        $('#r2 header').css('width','0');
        $('#r2 header').css('transition','width 1s');
        $('#r2 .picture').hide();
        $('#r2 .detail').hide();
        $('#r2 .desp1').fadeIn();
        $('#r2 .desp2').fadeIn();
        $('#r2 .desp3').fadeIn();
        $('#c2').hide();
    });

    $('#c3').click(function(){
        $('#r3 header').css('width','0');
        $('#r3 header').css('transition','width 1s');
        $('#r3 .picture').hide();
        $('#r3 .detail').hide();
        $('#r3 .desp1').fadeIn();
        $('#r3 .desp2').fadeIn();
        $('#r3 .desp3').fadeIn();
        $('#c3').hide();
    });
    // Finn
    $('#p1_1').click(function(){
        $('#r1 header').css('width','100%');
        $('#r1 header').css('transition','width 1s');
        $('#pic1_1').fadeIn();
        $('#d1_1').fadeIn();
        $('#r1 .desp1').hide();
        $('#r1 .desp2').hide();
        $('#r1 .desp3').hide();
        $('#c1').fadeIn();
    });

    $('#p1_2').click(function(){
        $('#r1 header').css('width','100%');
        $('#r1 header').css('transition','width 1s');
        $('#pic1_2').fadeIn();
        $('#d1_2').fadeIn();
        $('#r1 .desp1').hide();
        $('#r1 .desp2').hide();
        $('#r1 .desp3').hide();
        $('#c1').fadeIn();
    });

    $('#p1_3').click(function(){
        $('#r1 header').css('width','100%');
        $('#r1 header').css('transition','width 1s');
        $('#pic1_3').fadeIn();
        $('#d1_3').fadeIn();
        $('#r1 .desp1').hide();
        $('#r1 .desp2').hide();
        $('#r1 .desp3').hide();
        $('#c1').fadeIn();
    });
    
    // Jake
    $('#p2_1').click(function(){
        $('#r2 header').css('width','100%');
        $('#r2 header').css('transition','width 1s');
        $('#pic2_1').fadeIn();
        $('#d2_1').fadeIn();
        $('#r2 .desp1').hide();
        $('#r2 .desp2').hide();
        $('#r2 .desp3').hide();
        $('#c2').fadeIn();
    });

    $('#p2_2').click(function(){
        $('#r2 header').css('width','100%');
        $('#r2 header').css('transition','width 1s');
        $('#pic2_2').fadeIn();
        $('#d2_2').fadeIn();
        $('#r2 .desp1').hide();
        $('#r2 .desp2').hide();
        $('#r2 .desp3').hide();
        $('#c2').fadeIn();
    });

    $('#p2_3').click(function(){
        $('#r2 header').css('width','100%');
        $('#r2 header').css('transition','width 1s');
        $('#pic2_3').fadeIn();
        $('#d2_3').fadeIn();
        $('#r2 .desp1').hide();
        $('#r2 .desp2').hide();
        $('#r2 .desp3').hide();
        $('#c2').fadeIn();
    });

    // BMO
    
    $('#p3_1').click(function(){
        $('#r3 header').css('width','100%');
        $('#r3 header').css('transition','width 1s');
        $('#pic3_1').fadeIn();
        $('#d3_1').fadeIn();
        $('#r3 .desp1').hide();
        $('#r3 .desp2').hide();
        $('#r3 .desp3').hide();
        $('#c3').fadeIn();
    });

    $('#p3_2').click(function(){
        $('#r3 header').css('width','100%');
        $('#r3 header').css('transition','width 1s');
        $('#pic3_2').fadeIn();
        $('#d3_2').fadeIn();
        $('#r3 .desp1').hide();
        $('#r3 .desp2').hide();
        $('#r3 .desp3').hide();
        $('#c3').fadeIn();
    });

    $('#p3_3').click(function(){
        $('#r3 header').css('width','100%');
        $('#r3 header').css('transition','width 1s');
        $('#pic3_3').fadeIn();
        $('#d3_3').fadeIn();
        $('#r3 .desp1').hide();
        $('#r3 .desp2').hide();
        $('#r3 .desp3').hide();
        $('#c3').fadeIn();
    });

    const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
      $section = $('section');

    var numOfPages = $section.length - 1, //取得section的數量
        curPage = 0, //初始頁
        scrollLock = false;
    $('body, html').scrollTop(0);

    function scrollPage() {
    //滑鼠滾動
    $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrollLock) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
        navigateUp();
        else
        navigateDown();
    });
    //鍵盤上下鍵
    $(document).on("keydown", function(e) {
        if (scrollLock) return;
        if (e.which === 38)
        navigateUp();
        else if (e.which === 40)
        navigateDown();
    });
    }

    $('#d1').hover(function(){
        $('#d1').css('background','#ffd700');
    },function(){
        if(curPage!=0)
            $('#d1').css('background','rgb(139, 112, 80)');
    });

    $('#d2').hover(function(){
        $('#d2').css('background','#ffd700');
    },function(){
        if(curPage!=1)
            $('#d2').css('background','rgb(139, 112, 80)');
    });

    $('#d3').hover(function(){
        $('#d3').css('background','#ffd700');
    },function(){
        if(curPage!=2)
            $('#d3').css('background','rgb(139, 112, 80)');
    });

    $('#d4').hover(function(){
        $('#d4').css('background','#ffd700');
    },function(){
        if(curPage!=3)
            $('#d4').css('background','rgb(139, 112, 80)');
    });

    $('#d5').hover(function(){
        $('#d5').css('background','#ffd700');
    },function(){
        if(curPage!=4)
            $('#d5').css('background','rgb(139, 112, 80)');
    });

    $('#d1').click(function(){
        topage(0);
    });
    
    $('#d2').click(function(){
        topage(1);
    });

    $('#d3').click(function(){
        topage(2);
    });

    $('#d4').click(function(){
        topage(3);
    });

    $('#d5').click(function(){
        topage(4);
    });

    function pagination() {
        scrollLock = true;
        $body.stop().animate({
            scrollTop: $section.eq(curPage).offset().top
        }, 1000, 'swing', function(){
            scrollLock = false;
        });
    };

    function topage(i) {
        scrollLock = true;
        $('#d'+(curPage+1)).css('background','rgb(139, 112, 80)');
        $body.stop().animate({
            scrollTop: $section.eq(i).offset().top
        }, 1000, 'swing', function(){
            scrollLock = false;
        });
        curPage = i;
        $('#d'+(curPage+1)).css('background','#ffd700');
    };

    function navigateUp () {
        if (curPage === 0) return;
        $('#d'+(curPage+1)).css('background','rgb(139, 112, 80)');
        curPage--;
        pagination();
        $('#d'+(curPage+1)).css('background','#ffd700');
    };

    function navigateDown() {
        if (curPage === numOfPages) return;
        $('#d'+(curPage+1)).css('background','rgb(139, 112, 80)');
        curPage++;
        pagination();
        $('#d'+(curPage+1)).css('background','#ffd700');
        };
        $(function() {
        scrollPage();
    });

    // 重新整理的時候回到最上面
    topage(0);    
});