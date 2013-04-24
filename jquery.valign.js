(function ($) {

    /*  Vertically align elements inside their containers.
        Elements should probably be hidden via CSS until this function is complete.
        e.g 
        .element {
	        visibility:hidden;        
        }
        .valign {
	        visibility:visible;
        }
    */

    $.fn.valign = function (options) {
        var settings = $.extend({}, $.fn.valign.defaultOptions, options);

        return this.each(function () {
            var elem = $(this),
                container = elem.parent(),
                elemHeight = elem.outerHeight(),
                containerHeight = container.height(),
                topMargin = (containerHeight - elemHeight) / 2,
                spacingTop = settings.style;

            elem.css( spacingTop, Math.floor(topMargin) ).addClass('valign');
        });

    };

    $.fn.valign.defaultOptions = {
        style: 'padding-top'
    };

})(jQuery);
