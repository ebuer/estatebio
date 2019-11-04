$(document).ready(function(){
    $('body').preloader('show', {full:true})
    $('.owl-carousel').owlCarousel();



    $.each($('[data-bg]'), function (key, val) {
        const self = $(val)
        self.css('background-image', 'url(' + self.attr('data-bg') + ')')
    })

    let headerHeight = $('#app-navbar').height();
    let footerHeight = $('#app-footer').height()
    $('#app-content').css('min-height', 'calc(100vh - ' + headerHeight + 'px - ' + footerHeight + 'px)')

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('SADASDsa')
    }

    setTimeout(function () {
        $('body').preloader('hide')
    })

});