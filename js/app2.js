$(function init(){
    console.log("działa")

    var nav = $('nav');
    var ul = $('.main-nav');
    var positionUl = ul.offset().top;

    $(window).on('resize', function(){
        console.log($(window).width())
        positionUl = ul.offset().top;
       navItem();
    )};

)};
