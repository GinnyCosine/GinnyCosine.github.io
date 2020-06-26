$(document).ready(function(){
    $('nav').load('menu.html');
    $('footer').load('footer.html');

    var pn = $("body").data('pagenum');
    switch(pn){
        case 0:
            getcon('js/about.json');
            break;
        case 1:
            getcon('js/art.json');
            break;
    }

    $('section').css({'display':'none'}).fadeIn();
});

function getcon(file_name){
    $.getJSON(file_name, function(data){
        // 把 section 清空
        $('section').empty();

        $.each(data, function(index, en){
            var html = '<div class="box">';
            html += '<div class="imgbox">';
            html += '<img src="' + en['pic'] + '"/>';
            html += '</div>';
            html += '<h3>' + en['title'] + '</h3>';
            html += '<p>' + en['detail'] + '</p>';
            html += '<div class="head">';
            html += '<img src="'+ en['head'] + '" alt="head"/>';
            html += '<span>' + en['wdate'] + '</span>';
            html += '</div>';
            html += '</div>';

            $('section').append(html);
        });
    });
    return false;
}