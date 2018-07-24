jQuery(function($) {
    var index = $('.menu-item').index(this);

    $('.menu-item').removeClass('active');
    $(this).addClass('active');

    $('.tabs-contents').removeClass('active').eq(index).addClass('active');
});