hasScrollbar
============

A lil' jQuery plugin that will add classes if when an element has scrollbars.

## Usage
Just call .hasScrollbar() on your jQuery selected elements:

    $(document).ready(function() {
        $('.example-scrolling-area').hasScrollbar();
    });

...and the plugin will add `hasHorizScroll` or `hasVertScroll` classes if your element has those scrollbars.

If you want the classes to update on window resize or another event, make sure you do that on your own -- this plugin only runs when you tell it.

## How it Works
Basically, the plugin attempts to programmatically scroll the element down and over by one pixel.  Then it checks if it was actually scrolled, or if the scroll amount is still 0.  If the element was truly scrolled, it does indeed have a scrollbar, and it will add the appropriate class.

#### A small word of caution
You may be thinking 'wow, I don't want a plugin that scrolls my elements around, that'll be jumpy and look terrible'.  I shared your concerns, dear reader, and I tested it.  There is no noticeable jumping or blinking of the elements, so don't worry about that.  However... **if you are using this plugin on elements that are having their scroll levels altered with JS elsewhere, you may have conflicts**.  I do want there to be an option to use a math-only solution, but for now, I feel a truly functional and minimal approach ("can you actually scroll the element or not?") is more accurate and more performant.

## Options
None yet, but I want to add:

* horizClass, vertClass -- Custom class names, for the picky FED in us all
* dontMove -- Use a less intrusive, but slower and less accurate way to add the classes.