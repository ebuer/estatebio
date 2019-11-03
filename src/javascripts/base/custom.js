$(document).ready(function(){
    $('body').preloader('show', {full:true})
    $('.owl-carousel').owlCarousel();



    $.each($('[data-bg]'), function (key, val) {
        const self = $(val)
        self.css('background-image', 'url(' + self.attr('data-bg') + ')')
    })


    setTimeout(function () {
        $('body').preloader('hide')
    })

});