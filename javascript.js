$( document ).ready(function() {

    $(".burger-menu").on("click", function() {
        $(".burger-menu").addClass("hidden-burger-menu");
        $(".exit-menu").addClass("exit-menu-active");
        $(".fullscreen-menu").addClass("fullscreen-menu-active");
    });

    $(".exit-menu").on("click", function() {
        $(".exit-menu").removeClass("exit-menu-active");
        $(".burger-menu").removeClass("hidden-burger-menu");
        $(".fullscreen-menu").removeClass("fullscreen-menu-active");
    });



});