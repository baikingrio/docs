!function ($) {
    'use strict';
    // go-top
    function goTop() {
        $(window).scroll(function(e) {
            if ($(window).scrollTop() > 200) {
                $("#go-top").fadeIn(1000);
            } else {
                $("#go-top").fadeOut(1000);
            }
        });
    }

    $(function(){
        $("#go-top").click(function(e) {
            $('body, html').animate({
                scrollTop: 0
            }, 1000);
        });
        goTop();
    });

    // init tooltip plugin
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

}(jQuery);
