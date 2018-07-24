jQuery(function($) {
    $('.menu-item').on('click', function() {
        var index = $('.menu-item').index(this);

        $('.menu-item').removeClass('active');
        $(this).addClass('active');

        $('.tabs-contents div').removeClass('active').eq(index).addClass('active');
    });
});