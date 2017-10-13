/*
 * hasScrollbar
 * 1.1, October 13th, 2017
 *
 * Determines if your jQuery-selected elements have a scrollbar.
 *
 * Copyright 2014-2017 Thane Woidan, thanewoidan.com
 * Released under the MIT License
 */

(function ( $ ) {
  "use strict";

  $.fn.hasScrollbar = function (options) {
    var settings = $.extend({
      vertClass:  'hasVertScrollbar',
      horizClass: 'hasHorizScrollbar',
    }, options);

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

      hasVertScrollbar(this)  ? $this.addClass(settings.vertClass)  : $this.removeClass(settings.vertClass);
      hasHorizScrollbar(this) ? $this.addClass(settings.horizClass) : $this.removeClass(settings.horizClass);
    });
  };

}(jQuery));