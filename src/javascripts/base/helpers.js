$.fn.preloader = function (method, object = {}) {

    let self = $(this[0])

    let svg = '<svg class="img" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#848484" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(139.139 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>'

    let option = {
        delay: object.delay !== undefined && (object.delay !== '') ? object.delay : 500,
        full: object.full !== undefined && (object.full === true) ? object.full : false,
    }

    let selfPreloadClass = 'preloader-parent'


    let addClasses = '';

    if (option.full) addClasses += 'full';

    let template = $('' +
        '<div class="app-preloader ' + addClasses + '">\n' +
        '        <span class="pre-overlay"></span>\n' +
        '        <div class="pre-inner">\n' +
        svg +
        '        </div>\n' +
        '    </div>'
    );

    if (method === 'show') {

        self.addClass(selfPreloadClass)

        self.prepend(template)


    } else if (method === 'hide') {

        let preload = $(self.find('.app-preloader')[0])
        preload.fadeOut()
        setTimeout(function () {
            preload.remove()
            self.removeClass(selfPreloadClass)
        }, option.delay)
    }

    // return self;
};