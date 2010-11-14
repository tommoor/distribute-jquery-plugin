# jQuery Distribute Plugin

This plugin allows you to evenly distribute elements across the page whilst maintaining minimum and maximum margins between them.

_Documentation Here_
http://tommoor.github.com/distribute-jquery-plugin/

Perfect for displaying a grid of images within a fluid layout like google images. For best affect call on page load and resize, for example:


		$(window).resize(function(){
			$('#search-results ol').distribute();
		});

		$('#search-results ol').distribute();
