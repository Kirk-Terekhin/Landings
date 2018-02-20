jQuery(document).ready(function($) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $($(this).attr('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		}
	});
	var headerwrap = $('nav');

	$(window).scroll(function() {

		var scroll = $(this).scrollTop();
		var topDist = 230;

		if (scroll > topDist) {
			headerwrap.addClass('sticky');
		} else {
			headerwrap.removeClass('sticky');
		}
	});

});
new WOW().init();
