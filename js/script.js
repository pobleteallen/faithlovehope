$(document).ready(function(){

	//after user passed the header div fixed menu will appear
	$(window).scroll(function(){

		// if($(this).scrollTop() < $('#header')[0].scrollHeight)
		// {
		// 	var percentage = Math.round(($(this).scrollTop() / $('#header')[0].scrollHeight)*100);
		// 	$('#aboutus > *').animate({opacity: percentage/100}, 20);
		// }

		// if($(this).scrollTop() < $('#contactus')[0].scrollHeight)
		// {
		// 	$('#navigation a').text('○');
		// 	$('#navigation a[href="#feedbacks"]').text('•');
		// }
		// else if($(this).scrollTop() < $('#feedbacks')[0].scrollHeight)
		// {
		// 	$('#navigation a').text('○');
		// 	$('#navigation a[href="#products"]').text('•');
		// }
		// else if($(this).scrollTop() < $('#products')[0].scrollHeight)
		// {
		// 	$('#navigation a').text('○');
		// 	$('#navigation a[href="#aboutus"]').text('•');
		// }
		// else if($(this).scrollTop() < $('#aboutus')[0].scrollHeight)
		// {
		// 	$('#navigation a').text('○');
		// 	$('#navigation a[href="#header"]').text('•');
		// }
		// else
		// {
		// 	$('#navigation a').text('○');
		// 	$('#navigation a[href="#contactus"]').text('•');
		// }
	});


	//slide to navigate site
	$('#navigate-site').click(function(){
		$('body').animate({ scrollTop: $('#header')[0].scrollHeight }, 1000);	
	});
	//menu internal link transition
	$('#navigation a, .sidebar.menu a').click(function(){
		$('html,body').animate({scrollTop : $($(this).attr('href')).offset().top}, 1000);
		return false;
	});

	//mobile menu
	$('#mobile-menu').click(function(){
		$('.ui.sidebar').sidebar({overlay: true, scrollLock: true}).sidebar('show');
	});


	//feedback slide
	$('.testi:gt(0)').hide();
	setInterval(function(){
		$('.testi:first')
		.fadeIn(1000)
		.next()
		.fadeOut(1000)
		.end()
		.appendTo('.feedback-holder');
	}, 5000);


	//products description show when click the image (mobile mode)
	$('#products .row .column').click(function(){
		if($(window).width() < 700)
		{
			$('.product-description').not($(this).find('.product-description')).slideUp('slow');
			$(this).find('.product-description').slideToggle('slow');
		}

	});

	

	
	
});