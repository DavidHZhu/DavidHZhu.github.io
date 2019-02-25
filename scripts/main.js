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

    $("#nav-projects").click(function() {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top},
            'slow');
    });

    $("#learnMore").click(function() {
        $('html,body').animate({
            scrollTop: $(".about-me").offset().top},
            'slow');
    });

    $('body').scrollspy({ target: '#topMenu' })
    

});
