// JavaScript Document
$(document).ready(function(){

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