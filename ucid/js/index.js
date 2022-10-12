$(document).ready(() => {
    $("#m1-2").hide();
    $("#m1-3").hide();


    $("#m1-1-btn").click(() => {
        $("#m1-1").fadeIn();
        $("#m1-2").hide();
        $("#m1-3").hide();
    });

    $("#m1-2-btn").click(() => {
        $("#m1-2").fadeIn();
        $("#m1-1").hide();
        $("#m1-3").hide();
    });

    $("#m1-3-btn").click(() => {
        $("#m1-3").fadeIn();
        $("#m1-1").hide();
        $("#m1-2").hide();
    });
})