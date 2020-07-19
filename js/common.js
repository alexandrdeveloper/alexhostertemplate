$(function() {


	let feedbackSlider = $('.feedback__content');
	let quoteSlider = $('.quote__content');


	feedbackSlider.on('afterChange', function(event, slick, currentSlide) {
	  if (currentSlide == 0) {
	    $(".feedback-carousel-current").text(currentSlide + 1);
	  } else {
	    $(".feedback-carousel-current").text(currentSlide + 1);
	  }
	});



	feedbackSlider.slick({
		slidesToShow: 3,
		centerMode: true,
		nextArrow: $('.feedback-carousel-next'),
		prevArrow: $('.feedback-carousel-prev'),
		responsive: [{
			breakpoint: 1439,
			settings: {
				centerMode: false
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: false
			}
		}]		
	});

	$('.feedback-carousel-full').text(feedbackSlider.slick("getSlick").slideCount);

	


	quoteSlider.slick({
		slidesToShow: 1,
		nextArrow: $('.quote-arrow-next'),
		prevArrow: $('.quote-arrow-prev')
	});


	let accordeonHead = $('.accordeon__section-head');
	let accordeonHeadActiveClass = 'accordeon__section-head_active';

	let accordeonClickToggle = function() {
	accordeonHead.not(this).removeClass(accordeonHeadActiveClass).next().slideUp(200);
	$(this).toggleClass(accordeonHeadActiveClass).next().slideToggle(200);
	};
	accordeonHead.filter(':first').toggleClass(accordeonHeadActiveClass).next().show();
	accordeonHead.on('click', accordeonClickToggle);

	$('.burger').on('click', function() {
		$('.menu-mobile').addClass('menu-mobile_visible');
		$('body').addClass('no-scroll');
	});

	$('.menu-mobile__close').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.menu-mobile').removeClass('menu-mobile_visible');
	
	});

	let footerAccHead = $('.mobile-accordeon').find('.footer__subtitle');
	let footerAccHeadActiveClass = 'mobile-accordeon_active'

	let footerClickToggle = function() {
	footerAccHead.not(this).removeClass(footerAccHeadActiveClass).next('ul').slideUp(200);
	$(this).toggleClass(footerAccHeadActiveClass).next().slideToggle(200);
	};
	if ($(window).innerWidth() < 767) {
		footerAccHead.filter(':first').toggleClass(footerAccHeadActiveClass).next().show();
		footerAccHead.on('click', footerClickToggle);
	}

	$(document).mouseup(function (e) {
	    let container = $(".menu-mobile");
	    if (container.has(e.target).length === 0){
	        $('.menu-mobile').removeClass('menu-mobile_visible');
	        $('body').removeClass('no-scroll');
	   }
	});

	$(document).mouseup(function (e) {
	    let container = $(".sidebar-categories");
	    if (container.has(e.target).length === 0){
	        $('.sidebar-categories').removeClass('sidebar-categories_visible');
	   }
	});

	$('.categories-btn').on('click', function(e) {
		e.preventDefault();
		$('.sidebar-categories').toggleClass('sidebar-categories_visible');
	});

	$('.categories-close').on('click', function(e) {
		e.preventDefault();
		$('.sidebar-categories').removeClass('sidebar-categories_visible');
	});

	$('.menu-mobile').find('.carret').on('click', function() {
		$(this).find('.sub-menu_mobile').slideToggle(300);
	});

	$('.certifications-grid').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

	
	


});
