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

        return this.each(function () {
            var elem = $(this),
                container = elem.parent(),
                elemHeight = elem.outerHeight(),
                containerHeight = container.height(),
                topMargin = (containerHeight - elemHeight) / 2;

            elem.css({marginTop: Math.floor(topMargin)}).addClass('valign');
        });

    };

})(jQuery);
