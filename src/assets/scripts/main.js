'use strict';

$(document).ready(function() {

	//youtube video background
	$('#video').YTPlayer({
		fitToBackground: true,
		videoId: '9_9E2l0wXPM',
		playerVars: {
			modestbranding: 0,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			wmode: 'transparent',
			branding: 0,
			rel: 0,
			autohide: 0
	  }
	});

	// product image zoom-in
	function zoom() {
		if ($(window).width() > 640) {
			$('.product__image').magnificPopup({
				type: 'image',
				mainClass: 'mfp-with-zoom', // this class is for CSS animation below
				disableOn: function() {
					if($(window).width() >= 640) {
						return true;
					}
					return false;
				},

				zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
						// openerElement is the element on which popup was initialized, in this case its <a> tag
						// you don't need to add "opener" option if this code matches your needs, it's defailt one.
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});
		}
	}

	zoom();
	$(window).resize(zoom);

	// $('.product__image').magnificPopup({
	// 	type: 'image',
	// 	mainClass: 'mfp-with-zoom', // this class is for CSS animation below
	//
	// 	zoom: {
	// 		enabled: true, // By default it's false, so don't forget to enable it
	//
	// 		duration: 300, // duration of the effect, in milliseconds
	// 		easing: 'ease-in-out', // CSS transition easing function
	//
	// 		// The "opener" function should return the element from which popup will be zoomed in
	// 		// and to which popup will be scaled down
	// 		// By defailt it looks for an image tag:
	// 		opener: function(openerElement) {
	// 			// openerElement is the element on which popup was initialized, in this case its <a> tag
	// 			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
	// 			return openerElement.is('img') ? openerElement : openerElement.find('img');
	// 		}
	// 	}
	// });

	// smooth anchor navigation
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

	// sticky header reveal
	if ($('.header_sticky').length && $(window).width() > 1000) {
		(function () {

			var headerSticky = function headerSticky() {
				var showAt = void 0;
				var $el = $('.header_sticky');

				if ($('.promo').length) {
					showAt = $('.promo').outerHeight(true) + $('.promo').offset().top;
				} else {
					showAt = 600;
				}

				if ($(window).scrollTop() > showAt) {
					$el.addClass('-stick');
				} else {
					$el.removeClass('-stick');
				}
			};

			headerSticky();

			$(window).on('scroll', function (e) {

				headerSticky();
			});
		})();
	}

	// popup menus
	$('.header-socials__opener').on('click',function () {
		$('.popup_social').addClass('popup_opened');
	});

	$('.navigation__opener').on('click',function () {
		$('.popup_navigation').addClass('popup_opened');
	});

	$('.popup__close, .navigation-popup__link, .socials-popup__link').on('click',function () {
		$('.popup').removeClass('popup_opened');
	});

	$('.item').on('click',function () {
		$('.popup').removeClass('popup_opened');
	});

	$(window).on('keyup', function (e) {
		if (e.keyCode == 27) {
			$('.popup').removeClass('popup_opened');
		}
	});

	$('.popup').on('click',function () {
		$('.popup').removeClass('popup_opened');
	});

	//products slider
	// function runSlick() {
	// 	if ($(window).width() <= 640) {
	// 		if (!$('.product__slider').hasClass('slick-initialized')) {
	// 			$('.product__slider').slick({
	// 				arrows: false,
	// 				dots: true,
	// 				dotsClass: 'product__dots',
	// 				customPaging: function customPaging(slider, i) {
	// 					return '<button></button>';
	// 				}
	// 			});
	// 		}
	// 	} else {
	// 		if ($('.product__slider').hasClass('slick-initialized')) {
	// 			$('.product__slider').slick('unslick');
	// 		}
	// 	}
	// }
	// runSlick();
	// $(window).resize(runSlick);

	//instagram slider
	$('.instagram__item_slide').each(function(){
		$(this).slick({
			arrows: false,
			autoplay: true,
			draggable: false,
			speed: $(this).data('slick-speed')
		});
	});
});
