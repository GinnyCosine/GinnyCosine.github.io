// JavaScript Document
$(document).ready(function(){

    // 重新 load
    $(window).resize(function(){
        location.reload();
    });

    $(".menu").click(function(){
        // Toggle會自己偵測打開或關起來 然後做相反的動作
        $("nav").slideToggle();
    });

    // fancy group
    $(".fancybox").fancybox({
        openEffect	: 'fade',
    	closeEffect	: 'fade'
    });

    // fancy single
    $("#s3").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
})