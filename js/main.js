$(document).ready(function(){

	var slideWidth = $('.intro-slide').width();
	var slideAmount = $('.introslide-container').children();
	var leftShift = slideWidth;
	var currentSlideIndex = 0;

	for(var i = 1; i < slideAmount.length; i++){
		$(slideAmount[i]).css('left', leftShift);
		
		leftShift += leftShift;
	};

	$( window ).resize(function() {
		slideWidth = $('.intro-slide').width();
		slideAmount = $('.introslide-container').children();
		leftShift = slideWidth;

		for(var i = 1; i < slideAmount.length; i++){
			$(slideAmount[i]).css('left', leftShift);
			
			leftShift += leftShift;
		};
	});

	$('.intro').on('click', '.right', function(){
		var slideControl = parseInt($(slideAmount[slideAmount.length - 1]).css('left'), 10);
		if(slideControl > 0){
			$('.intro-slide').animate({
			    left: "-="+slideWidth
			});
			currentSlideIndex++
			var color = $(slideAmount[currentSlideIndex]).data('color');
			$('.intro-wrapper.cat').css('background-color', color);
		}
	});

	$('.intro').on('click', '.left', function(){
		var slideControl = parseInt($(slideAmount[0]).css('left'), 10);
		if(slideControl < 0){
			$('.intro-slide').animate({
			    left: "+="+slideWidth
			});
			currentSlideIndex--
			var color = $(slideAmount[currentSlideIndex]).data('color');
			$('.intro-wrapper.cat').css('background-color', color);
		}
	});

	//Product sliders (Slick)
	$('#slider1 .slider-fov').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		appendArrows: $('#slider1'),
  		prevArrow: '<div class="intro-move left"></div>',
  		nextArrow: '<div class="intro-move right"></div>'
	});
	$('#slider2 .slider-fov').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		appendArrows: $('#slider2'),
  		prevArrow: '<div class="intro-move left"></div>',
  		nextArrow: '<div class="intro-move right"></div>'
	});

	$(window).on('resize', function(){
		 var win = $(this); 
		 
		if (win.width() > 480) { 
			$('#slider1 .slider-fov').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				appendArrows: $('#slider1'),
				prevArrow: '<div class="intro-move left"></div>',
				nextArrow: '<div class="intro-move right"></div>'
			});
			$('#slider2 .slider-fov').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				appendArrows: $('#slider2'),
				prevArrow: '<div class="intro-move left"></div>',
				nextArrow: '<div class="intro-move right"></div>'
			});

		} else if (win.width() <= 480) { 
			$('#slider1 .slider-fov').slick('unslick');
			$('#slider2 .slider-fov').slick('unslick');
		}
	});	
});
