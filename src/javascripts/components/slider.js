const slideCongig = {
    slideNav: '.js-slide-btn',
    lastVisitSlide: '.js-slide-visit',
    lastAddSlide: '.js-slide-last',
    popularSlide: '.js-slide-popular',
    projectSlide: '.js-slide-project'
}


if (exist(slideCongig.lastVisitSlide)) {
    $(slideCongig.lastVisitSlide).owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}


if (exist(slideCongig.lastAddSlide)) {
    $(slideCongig.lastAddSlide).owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}

if (exist(slideCongig.popularSlide)) {
    $(slideCongig.popularSlide).owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}

if(exist(slideCongig.projectSlide)){
    $(slideCongig.projectSlide).owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
}

$('body').on('click', slideCongig.slideNav, function () {
    const self = $(this)
    const slide = self.closest('.js-nav').attr('data-slider')
    const action = self.attr('data-action')

    $(slide).trigger(action + '.owl.carousel')

})