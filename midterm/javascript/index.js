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

    $("#block1_c").hover(function(){
        $("#block2").hide();
        $("#block3").hide();
        $('.banner').fadeIn();
        $('#block1').css('top','0');
        $('#block1').css('left','0');
        $('#block1').css('height','100vh');
        $('#block1').css('width','100%');
        $('#block1').css('border-radius','0');
        $('#block1').css('transition',' 1s ease');
    },function(){
        $("#block2").show();
        $("#block3").show();
        $('.banner').hide();
        $('#block1').css('width','53vh');
        $('#block1').css('height','53vh');
        $('#block1').css('left','5%');
        $('#block1').css('border-radius','50%');
        $('#block1').css('top','20%');
        $('#block1').css('transition',' 1s ease');

    });

    $("#block2_c").hover(function(){
        $("#block1").hide();
        $("#block3").hide();
        $('.banner').fadeIn();
        $('#block2').css('top','0');
        $('#block2').css('left','0');
        $('#block2').css('height','100vh');
        $('#block2').css('width','100%');
        $('#block2').css('border-radius','0');
        $('#block2').css('transition',' 1s ease');
        
    },function(){
        $("#block1").show();
        $("#block3").show();
        $('.banner').hide();
        $('#block2').css('width','60vh');
        $('#block2').css('height','60vh');
        $('#block2').css('left','35%');
        $('#block2').css('top','35%');
        $('#block2').css('border-radius','50%');
        $('#block2').css('transition',' 1s ease');
        
    });

    $("#block3_c").hover(function(){
        $("#block2").hide();
        $("#block1").hide();
        $('#block3').css('border-radius','0');
        $('#block3').css('top','0');
        $('#block3').css('left','0');
        $('#block3').css('height','100vh');
        $('#block3').css('width','100%');
        $('#block3').css('transition',' 1s ease');
        $('.banner').fadeIn();

    },function(){
        $("#block2").show();
        $("#block1").show();
        $('.banner').hide();
        $('#block3').css('width','47vh');
        $('#block3').css('height','47vh');
        $('#block3').css('left','70%');
        $('#block3').css('top','15%');
        $('#block3').css('border-radius','50%');
        $('#block3').css('transition',' 1s ease');
        
    });

    var score = 0;

    //$('.option1').hover(function(){
    //    $('.option1').css('background','rgb(255, 233, 105)');
    //},function(){
    //    $('.option1').css('background','white');
    //});
//
    //$('.option2').hover(function(){
    //    $('.option2').css('background','rgb(255, 233, 105)');
    //},function(){
    //    $('.option2').css('background','white');
    //});
//
    //$('.option3').hover(function(){
    //    $('.option3').css('background','rgb(255, 233, 105)');
    //},function(){
    //    $('.option3').css('background','white');
    //});

    $('.again').click(function(){
        score = 0;
        $('.option').css('background','white');
        $('.score_bord').fadeOut();
        $('.encourage').fadeOut();
        $('.hello').fadeOut();
        setTimeout(function(){$('#q1').fadeIn()},1000);
    });

    $('.button').click(function(){
        score = 0;
        $('.option').css('background','white');
        $('.hello').fadeOut();
        setTimeout(function(){$('#q1').fadeIn()},1000);
    })

    // wrong
    $('#q1_1').click(function(){
        $('#q1_1').css('background','rgb(255, 116, 116)');
        $('#q1_1').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q1').fadeOut();
            $('#q2').fadeIn();
        },1000);
    });

    // correct
    $('#q1_2').click(function(){
        score = score + 20;
        $('#q1_2').css('background','rgb(176, 246, 130)');
        $('#q1_2').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q1').fadeOut();
            $('#q2').fadeIn();
        },1000);
    });

    $('#q1_3').click(function(){
        $('#q1_3').css('background','rgb(255, 116, 116)');
        $('#q1_3').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q1').fadeOut();
            $('#q2').fadeIn();
        },1000);
    });
    
    // correct
    $('#q2_1').click(function(){
        score = score + 20;
        $('#q2_1').css('background','rgb(176, 246, 130)');
        $('#q2_1').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q2').fadeOut();
            $('#q3').fadeIn();
        },1000);
    });

    $('#q2_2').click(function(){
        $('#q2_2').css('background','rgb(255, 116, 116)');
        $('#q2_2').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q2').fadeOut();
            $('#q3').fadeIn();
        },1000);
    });

    $('#q2_3').click(function(){
        $('#q2_3').css('background','rgb(255, 116, 116)');
        $('#q2_3').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q2').fadeOut();
            $('#q3').fadeIn();
        },1000);
    });


    $('#q3_1').click(function(){
        $('#q3_1').css('background','rgb(255, 116, 116)');
        $('#q3_1').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q3').fadeOut();
            $('#q4').fadeIn();
        },1000);
    });

    $('#q3_2').click(function(){
        $('#q3_2').css('background','rgb(255, 116, 116)');
        $('#q3_2').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q3').fadeOut();
            $('#q4').fadeIn();
        },1000);
    });

    // correct
    $('#q3_3').click(function(){
        score = score + 20;
        $('#q3_3').css('background','rgb(176, 246, 130)');
        $('#q3_3').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q3').fadeOut();
            $('#q4').fadeIn();
        },1000);
    });

    $('#q4_1').click(function(){
        $('#q4_1').css('background','rgb(255, 116, 116)');
        $('#q4_1').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q4').fadeOut();
            $('#q5').fadeIn();
        },1000);
    });

    $('#q4_2').click(function(){
        $('#q4_2').css('background','rgb(255, 116, 116)');
        $('#q4_2').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q4').fadeOut();
            $('#q5').fadeIn();
        },1000);
    });

    // correct
    $('#q4_3').click(function(){
        score = score + 20;
        $('#q4_3').css('background','rgb(176, 246, 130)');
        $('#q4_3').css('transition','background 0.4s');
        setTimeout(function(){
            $('#q4').fadeOut();
            $('#q5').fadeIn();
        },1000);
    });

    $('#q5_1').click(function(){
        $('#q5_1').css('background','rgb(255, 116, 116)');
        $('#q5_1').css('transition','background 0.4s');
        document.getElementById('score').innerHTML = score;
        if(score != 100)
            document.getElementById('en').innerHTML = '阿 看來還是不夠了解呢...<br>再去複習一下吧 !!!';
        else
        {
            document.getElementById('en').innerHTML = '!!! 恭喜 !!!<br>你離探險活寶大師不遠啦';
        }
        setTimeout(function(){
            $('#q5').fadeOut();
            $('.score_bord').fadeIn();
            $('.encourage').fadeIn();
        },1000);
    });

    $('#q5_2').click(function(){
        $('#q5_2').css('background','rgb(255, 116, 116)');
        $('#q5_2').css('transition','background 0.4s');
        document.getElementById('score').innerHTML = score;
        if(score != 100)
            document.getElementById('en').innerHTML = '阿 看來還是不夠了解呢...<br>再去複習一下吧 !!!';
        else
        {
            document.getElementById('en').innerHTML = '!!! 恭喜 !!!<br>你離探險活寶大師不遠啦';
        }
        setTimeout(function(){
            $('#q5').fadeOut();
            $('.score_bord').fadeIn();
            $('.encourage').fadeIn();
        },1000);
    });

    // correct
    $('#q5_3').click(function(){
        score = score + 20;
        $('#q5_3').css('background','rgb(176, 246, 130)');
        $('#q5_3').css('transition','background 0.4s');
        document.getElementById('score').innerHTML = score;
        if(score != 100)
            document.getElementById('en').innerHTML = '阿 看來還是不夠了解呢...<br>再去複習一下吧 !!!';
        else
        {
            document.getElementById('en').innerHTML = '!!! 恭喜 !!!<br>你離探險活寶大師不遠啦 ';
        }
        setTimeout(function(){
            $('#q5').fadeOut();
            $('.score_bord').fadeIn();
            $('.encourage').fadeIn();
        },1000);
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