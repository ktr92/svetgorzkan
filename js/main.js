$(document).ready(function () {
	
	try {
		$('.mainslider__slider').each(function () {
			$(this).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				/* autoplay: true,
				  autoplaySpeed: 3000,*/
				arrows: false,
				dots: true,
				fade: true,
				responsive: [{
											
				}]
			});
		});
	} catch (err) {
	}
	
	
	
	// position the div
	var tbox = $('.search input[type="text"]'),
		   pholder = $('.search__placeholder')

	pholder		
		.on('mousedown', 'a', function() {
			pholder.hide();
			var text = $(this).text();
			setTimeout(function() {
				tbox.val(text).focus();
			}, 50);
			return false;
		})
		.on('mousedown', function() {
			pholder.hide();
			setTimeout(function() {
				tbox.val('').focus();
			}, 50);
		});

	tbox.on('blur', function() {
		if($(this).val() === '') pholder.show(); 
	});
	
	
	/* new WOW().init(); */
	try {
		$('.productslider__slider').each(function () {
			$(this).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				/* autoplay: true,
				  autoplaySpeed: 3000,*/
				arrows: false,
				dots: true,
				/* dotsClass: 'mainslider__dots_slick',*/
				responsive: [{
											
				}]
			});
		});
	} catch (err) {
	}
	/* new WOW().init(); */
	try {
		$('.productslider__slider-five').each(function () {
			$(this).slick({
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				centerPadding: 20,
				responsive: [
				 {
				  breakpoint: 1385,
				  settings: {
					slidesToShow: 3,
					
				  }
				},
				{
				  breakpoint: 1023,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 720,
				  settings: {
					slidesToShow: 2,
					}
				}
				]
			});
		});
	} catch (err) {
	}
	
	
	$(".productslider__right").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickNext");
	});
	$(".productslider__left").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickPrev");
	});
	
	$("input[type=tel]").mask("+7 (999) 999-99-99");
	/* if ($(window).width() > 767) {
		$(window).scroll(function () {
			scroll = $(window).scrollTop();
			if (scroll >= 250) {
				$('#header').addClass('fixed');
				$('#header.fixed .header__menu').hide();
			} else {
				$('#header').removeClass('fixed');
				$('.header__menu').show();
				$('#header.fixed .header__menu').hide();
			}
		});
	} else {
		$(window).scroll(function () {
			scroll = $(window).scrollTop();
			if (scroll >= 104) {
				$('.header__menu').addClass('fixed');
				$('#header').addClass('body_scroll');
			} else {
				$('.header__menu').removeClass('fixed');
				$('#header').removeClass('body_scroll');
			}
		});
	} */
	$('.accordeon-titlejs').click(function (event) {
		/* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
		$(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$(this).next('.accordeon-contentjs').slideToggle();
	});
});
$(function () {
	
	$('.location__content').click(function (event) {
		$(this).toggleClass('active');
		$('.location_tooltip').slideToggle();
	});
	
	$('.login__content>a').click(function (event) {
		event.preventDefault;
		$(this).toggleClass('active');
		$('.login_tooltip').slideToggle();
	});
	
	function showSlider() {
		$('.productslider__container .slick-slider').css('opacity', '1');
	} 
	function hideSlider() {
		$('.productslider__container .slick-slider').css('opacity', '0');
	} 
	
	$(".mainmenu__links ul li").on({
		'mouseenter': function () {
			$(this).find('.productslider__slider').slick('refresh');
			
			setTimeout(showSlider,	'600');
			
						
			$(this).addClass('active');
			if ($(this).find('.mainmenu__wrapper').length) {
				$(this).find('.mainmenu__wrapper').addClass('active');
				if ($('.mainmenu__wrapper').hasClass('active')) {
					$('.mainmenu__content').css('width', '100%');
					
				}				
			}
		},
		'mouseleave': function () {
			$(this).removeClass('active');
			$(this).find('.mainmenu__wrapper').removeClass('active');
			if ($('.mainmenu__wrapper').hasClass('active')) {
					$('.mainmenu__content').css('width', '100%');
				}	
				else {
					$('.mainmenu__content').css('width', 'initial');
					 hideSlider();
				}
		}
	});
	
	$(".menubtn").on({
		'mouseenter': function () {
			$('.mainmenu').css('z-index', '3').addClass('active');		
			
		},
		'mouseleave': function () {
			$('.mainmenu').css('z-index', '-1').removeClass('active');		
		}
	});

	
	
	
	
	$('.menumobile').click(function (event) {
		$(this).toggleClass('active');
		$('.mainmenu').slideToggle();
	});
	$('.closemenu').click(function (event) {
		$('.topmenu').slideToggle();
	});
	$('.menufixed').click(function (event) {
		$('.header__menu').slideToggle();
	});
	$('.topmenumobile').click(function (event) {
		$('.topmenu').slideToggle();
	});
	$('.mainmenu ul > li .fa-angle-down').click(function (e) {
		if ($(window).width() < 1024) {
			e.preventDefault();
			$(this).parent().parent().find('.mainmenu__child').stop(true, true).slideToggle(250).end().siblings().find('.mainmenu__child').slideUp(250);
		}
	});
	
	
	(function($) {
$(function() {

	$('ul.tabs__caption_js').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);
	
	
});