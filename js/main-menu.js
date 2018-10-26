/* Для работы должен быть подключен JQuery*/

$(function() {
    var pull = $('#pull'),
    menu = $('.js-main-menu'),
    menuHeight = menu.height();

    pull.on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();

        const ADAPTIVE_MOBILE_MAX = 320;
        const isDesktop = w > ADAPTIVE_MOBILE_MAX;

        if (isDesktop && menu.is(':hidden')) {
            menu.attr('style', 'display: block');
        }
    });
});