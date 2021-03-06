/*
 * jQuery.distribute - Evenly space child elements horizontally in fluid layouts
 * Tom Moor, http://tommoor.com
 * Released into the public domain
 * Date: 14th Nov 2010
 * @author Tom Moor
 * @version 1.0
 */

(function($){
 $.fn.distribute = function(options) {

  var defaults = {
   margin: 10,
   width: null
  };
  var options = $.extend(defaults, options);

  return this.each(function() {

     var totalWidth = $(this).width();
     var itemWidth = options.width? options.width : $(this).children(0).outerWidth();
     var perRow = Math.floor(totalWidth/(itemWidth+options.margin));
     var widthItemsOnRow = itemWidth*perRow;
     var marginsWidth = totalWidth-widthItemsOnRow;

     var newMargin = Math.floor(marginsWidth/(perRow-1))-4; // why is this -4 needed?!

     $(this).children().each(function(index){

       var m = newMargin;

       if((index+1) % perRow == 0 && index !== 0) {
         m = 0; // last in a row, dont give a margin.
       }

       $(this).css('margin-right', m + 'px').css('display', 'inline-block');
     });
  });

 };
})(jQuery);
