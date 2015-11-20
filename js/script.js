$(document).ready(function(){

	//after user passed the header div fixed menu will appear
	$(window).scroll(function(){

		//page indicator dots
		if($(window).width() > 767 )
		{
			if($(this).scrollTop() > 1)
			{
				$('#fixed-menu').fadeIn('slow')
			}
			else
			{
				$('#fixed-menu').fadeOut('slow');
			}
		}

		if($(this).scrollTop() < $('#aboutus').offset().top-1)
		{
			// $('#navigation a').text('○');
			// $('#navigation a[href="#header"]').text('•');
			$('#fixed-menu a').removeClass('active');
			$('#fixed-menu a[href="#header"]').addClass('active');
		}
		else if($(this).scrollTop() < $('#products').offset().top-1)
		{
			// $('#navigation a').text('○');
			// $('#navigation a[href="#aboutus"]').text('•');
			$('#fixed-menu a').removeClass('active');
			$('#fixed-menu a[href="#aboutus"]').addClass('active');
		}
		else if($(this).scrollTop() < $('#contactus').offset().top-1)
		{
			// $('#navigation a').text('○');
			// $('#navigation a[href="#products"]').text('•');
			$('#fixed-menu a').removeClass('active');
			$('#fixed-menu a[href="#products"]').addClass('active');
		}
		// else if($(this).scrollTop() < $('#contactus').offset().top-1)
		// {
		// 	$('#navigation a').text('○');
		// 	$('#navigation a[href="#feedbacks"]').text('•');
		// }
		else
		{
			// $('#navigation a').text('○');
			// $('#navigation a[href="#contactus"]').text('•');
			$('#fixed-menu a').removeClass('active');
			$('#fixed-menu a[href="#contactus"]').addClass('active');
		}
	});


	//slide to navigate site
	$('#navigate-site').click(function(){
		$('body').animate({ scrollTop: $('#header')[0].scrollHeight }, 1000);	
	});
	//menu internal link transition
	$('#navigation a, .sidebar.menu a, #fixed-menu a').click(function(){
		$('body').animate({scrollTop : $($(this).attr('href')).offset().top}, 1000);
		return false;
	});
	//mobile menu
	$('#mobile-menu').click(function(){
		$('.ui.sidebar').sidebar({overlay: true, scrollLock: true}).sidebar('show');
	});

	//feedback slide
	// $('.testi:gt(0)').hide();
	// setInterval(function(){
	// 	$('.testi:first')
	// 	.fadeIn(1000)
	// 	.next()
	// 	.fadeOut(1000)
	// 	.end()
	// 	.appendTo('.feedback-holder');
	// }, 5000);


	//products description show when click the image (mobile mode)
	$('#products .row .column').hover(function(){
		if($(window).width() < 768)
		{
			$('.product-description').not($(this).find('.product-description')).slideUp();
			$(this).find('.product-description').slideDown();
		}
		else
		{
			$('.product-description').not($(this).find('.product-description')).slideUp();
			$(this).find('.segment').slideDown();

		}

	});

	

	
	
});