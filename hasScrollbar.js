/*
 * hasScrollbar
 * 1.0, March 13th, 2014
 *
 * Determines if your jQuery-selected elements have a scrollbar.
 *
 * Copyright 2014 Thane Woidan, thanewoidan.com
 * Released under the MIT License
 */

(function ( $ ) {
        "use strict";

        $.fn.hasScrollbar = function () {
            var HORIZ_CLASS = 'hasHorizScrollbar'
            var VERT_CLASS =  'hasVertScrollbar'

            var hasVertScrollbar = function (ele) {
                ele.scrollTop = 1;

                if (ele.scrollTop === 0 || ele.style.overflowY === 'hidden') {
                    return false;
                } else {
                    ele.scrollTop = 0;
                    return true;
                }
            };

            var hasHorizScrollbar = function (ele) {
                ele.scrollLeft = 1;

                if (ele.scrollLeft === 0 || ele.style.overflowX === 'hidden') {
                    ele.scrollLeft = 0;
                    return false;
                } else {
                    ele.scrollLeft = 0;
                    return true;
                }
            };

            return $(this).each(function() {
                var $this = $(this);

                hasVertScrollbar(this)  ? $this.addClass(VERT_CLASS)  : $this.removeClass(VERT_CLASS);
                hasHorizScrollbar(this) ? $this.addClass(HORIZ_CLASS) : $this.removeClass(HORIZ_CLASS);
            });
        };

}(jQuery));