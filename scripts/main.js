$(document).ready(function () {

// <============ Button Navigation ============> //

    $(".navbar-brand").click(function() {
        $('html,body').animate({
            scrollTop: $(".lander").offset().top},
            'slow');

    });

    $("#nav-about-me").click(function() {
        $('html,body').animate({
            scrollTop: $(".about-me").offset().top},
            'slow');
    });

    $("#nav-experience").click(function() {
        $('html,body').animate({
            scrollTop: $(".experience").offset().top},
            'slow');
    });

    $("#learnMore").click(function() {
        $('html,body').animate({
            scrollTop: $(".about-me").offset().top},
            'slow');
    });

});
