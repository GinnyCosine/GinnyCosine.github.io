// JavaScript Document

$(document).ready(function(){
	
	$(window).on('load resize', function(){
	bannerresize();
	vbannerresize();
	});
	
});


function bannerresize(){ //depends on your needs to change the ratio
	$fw = $("#s_pic").width();
	$fh = $fw/1600*668;
	$("#s_pic").height($fh);
	$("#m1 img").height($fh);
};

function vbannerresize(){ //depends on your needs to change the ratio
	$vw = $("#v_pic").width();
	$vh = $vw/900*1111;
	$("#v_pic").height($vh);
	$("#m2 img").height($vh);
}