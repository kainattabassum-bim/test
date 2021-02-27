$(document).ready(function(){
    $(".time-dropdown").click(function(){
        $(".timer").toggleClass("show-time")
    });

    $(".lang-dropdown").click(function(){
        $(".language").toggleClass("show-lang")
    });

    $(".navbar-toggler").click(function(){
        $(".menu-aside").addClass("openSide");
    });
    $(".close").click(function(){
        $(".menu-aside").removeClass("openSide");
    });
})