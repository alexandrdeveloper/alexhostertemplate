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



});
