$(document).ready(function(){

	//after user passed the header div fixed menu will appear
	$(window).scroll(function(){
		
		if($(window).scrollTop() > 0)
		{
			if($(window).width() > 700)
			{
				$('#fixed-menu').css('display','inline-block');
			}
			else
			{
				$('#fixed-menu').addClass('secondary');
				$('#fixed-menu .item:gt(0)').css('display','none');
				$('#fixed-menu, #fixed-menu .mobile.item').css('display','inline-block');
			}	
		}
		else
		{
			$('#fixed-menu').css('display','none');
		}
	});

	//everytime the viewport change this will trigger
	$(window).resize(function(){
		//when ever the viewport is changing style of menu change
		if($(window).width() > 700)
		{	
			$('#fixed-menu').removeClass('secondary');
			$('#fixed-menu .item:gt(0)').css('display','inline-block');
			$('#fixed-menu .mobile.item').css('display','none');			
		}
		else
		{
			$('#fixed-menu').addClass('secondary');
			$('#fixed-menu .item:gt(0)').css('display','none');
			$('#fixed-menu .mobile.item').css('display','inline-block');

			//for dashboard whenever it trigger mobile viewport it will hide the sidebar
			// $('.admin .content').css('margin-left','0');
			// $('.admin .ui.sidebar').sidebar('toggle'); 
		}
	});

	//slide to navigate site
	$('#navigate-site').click(function(){
		$('html,body').animate({ scrollTop: $('#header')[0].scrollHeight },'slow', function(){
			$('body').css('overflow','auto');
		});	
	});

	//menu internal link transition
	$('.menu .item').click(function(){
		$('html,body').animate({scrollTop : $($(this).attr('href')).offset().top},'slow');
		return false;
	});


	// feedback slide
	$('.testi:gt(0)').hide();
	setInterval(function(){
		$('.testi:first')
		.fadeIn(1000)
		.next()
		.fadeOut(1000)
		.end()
		.appendTo('.testimonial-holder');
	}, 5000);

	//mobile menu
	$('#fixed-menu').on('click','.mobile.item',function(){
		$('.ui.sidebar').sidebar({overlay: true, scrollLock: true}).sidebar('show');
	});

	
	
});