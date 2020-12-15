$(document).ready(function () {
	
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
				slidesToShow: 5,
				slidesToScroll: 5,
				/* autoplay: true,
				  autoplaySpeed: 3000,*/
				arrows: true,
				dots: false,
				/* dotsClass: 'mainslider__dots_slick',*/
				responsive: [{
						breakpoint: 1280,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						}
					}
				]
			});
		});
	} catch (err) {
	}
	try {
		$('.productdetail__slider').each(function () {
			$(this).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				/* autoplay: true,
				  autoplaySpeed: 3000,*/
				arrows: true,
				dots: false,
				/* dotsClass: 'mainslider__dots_slick',*/
			});
		});
	} catch (err) {
	}
	$('.productdetail__slidernav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.productdetail__navitems'
	});
	$('.productdetail__navitems').slick({
		slidesToShow: 0,
		slidesToScroll: 1,
		asNavFor: '.productdetail__slidernav',
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});
	$(".productslider__right").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickNext");
	});
	$(".productslider__left").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickPrev");
	});
	$(".productdetail__arrright").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickNext");
	});
	$(".productdetail__arrleft").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickPrev");
	});
	$("input[type=tel]").mask("+7 (999) 999-99-99");
	if ($(window).width() > 767) {
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
	}
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
	
	$('.login__link>a').click(function (event) {
		event.preventDefault;
		$(this).toggleClass('active');
		$('.login_tooltip').slideToggle();
	});
	
	$(".mainmenu__links ul li").on({
		'mouseenter': function () {
			$(this).addClass('active');
			if ($(this).find('.mainmenu__wrapper').length) {
				$(this).find('.mainmenu__wrapper').addClass('active');
				if ($('.mainmenu__wrapper').hasClass('active')) {
					$('.mainmenu').css('width', '100%');
					
				}				
			}
		},
		/* 'mouseleave': function () {
			$(this).removeClass('active');
			$(this).find('.mainmenu__wrapper').removeClass('active');
			if ($('.mainmenu__wrapper').hasClass('active')) {
					$('.mainmenu').css('width', '100%');
				}	
				else {
					$('.mainmenu').css('width', 'initial');
				}
		} */
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
});