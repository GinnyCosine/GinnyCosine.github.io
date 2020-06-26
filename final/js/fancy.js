// JavaScript Document
$(document).ready(function(){

    // 重新 load
    $(window).resize(function(){
        location.reload();
    });

    // fancy group
    $(".fancybox").fancybox({
        openEffect	: 'fade',
    	closeEffect	: 'fade'
    });

    // fancy single
    $(".subpic").fancybox({
    	openEffect	: 'fade',
        closeEffect	: 'fade',
        overlay : {
            speedOut   : 500
        },
    	helpers : {
    		title : {
    			type : 'float'
    		}
    	}
    });

})