function FixedAnimation() {
    var headerH = $('#header').outerHeight(true);
    var scrool = $(window).scroolTop();
    if (scrool >= headerH){
        $('#header').addClass('fixed');
    }
    else{
        $('#header').removeClass('fixed');
    }
}

$(window).scrool(function() {
    FixedAnimation();
});

$(window).on('load', function() {
    FixedAnimation();
});