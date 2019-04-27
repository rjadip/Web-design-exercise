$(document).ready(function () {

        /*For the sticky navigation*/
        $('.js--section-features').waypoint(function (direction) {
                if (direction == "down") {
                        $('nav').addClass('sticky')
                } else {
                        $('nav').removeClass('sticky')
                }
        }, {
                        offset: '25%'
                });
        /* Scroll on buttons */

        /*
        $('.js--scroll-to-plans').click(function () {
                $('html, body').animate({
                        scrolltop
                })

        });

        $('.js--scroll-to-start').click(function () {

        });
        */
});