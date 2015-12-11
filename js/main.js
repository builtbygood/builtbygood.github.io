$(function(){
	
	
	$('#menu-sandwich').on('click', function(){	
		
		if( !$(this).hasClass('active') ){
			
			$('.info-content').fadeIn('fast', function(){
				thumbsUp();
			});			
			$('.home-content').fadeOut('fast');
			$(this).addClass('active');
			
		} else{
			
			$('.info-content').fadeOut(function(){
				$('.col-1-2').removeClass('active');
			});			
			$('.home-content').fadeIn();
			$(this).removeClass('active');
			
		}		
		
	});
	
	function thumbsUp(){
		
		$('.col-1-2, .row').each(function(i){
								
			$(this).delay(150*i).queue( function(next){ 
				$(this).addClass('active');
				next(); 
			});
			
		});
		
	}	
	
	
});



