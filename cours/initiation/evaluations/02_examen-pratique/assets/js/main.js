$(document).keyup(function(e) {
	if(e.keyCode === 27) $('body').toggleClass('debug');
});


(function ($) {
	'use strict';
	var ready = function () {
		// ajouter livereload seulement si je suis en local
		if (window.location.href.indexOf(".local") > -1 || window.location.href.indexOf("localhost") > -1) {
			$('body').append('<script src="http://localhost:35729/livereload.js"></script>');
		}
	}

	$(ready);

})(jQuery);