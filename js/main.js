$(document).ready(function(){
    $(".time-dropdown").click(function(){
        $(".timer").toggleClass("show-time")
    });

    $(".lang-dropdown").click(function(){
        $(".language").toggleClass("show-lang")
    });
})