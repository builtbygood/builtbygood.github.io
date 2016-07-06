$(function(){
	
	var $window = $(window);

	jQuery.fn.reverse = [].reverse;
	
	$('#menu-sandwich').on('click', function(){	
		
		if( !$(this).hasClass('active') ){

			$(this).addClass('active');
			menuUp();
			
		} else{
	
			$(this).removeClass('active');
      menuDown();   
			
		}		
		
	});
  $window.on('load', function(){
  	  
     $('.loader').delay(1000).fadeOut(function(){
       thumbsUp(); 
     });   
  	            
	});
	$window.on('resize', function(){
		 
		thumbsUp();	
							
	});	
	$window.on('scroll', function(){
		
		thumbsUp();
		
	});
	function thumbsUp(){

		if($('.loader').is(':hidden')) {
		
			$('.lifter').each(function(){

				var _top = $(this).offset().top;
				var _vp  = $window.scrollTop() + $window.height()-100;
				
				if( _vp > _top ){

					$(this).find('.lift').each(function(i){
									
						$(this).delay(72*i).queue( function(next){ 
							$(this).addClass('active');
							next(); 
						});

					});

				}
			
		  });

		}
		
	}
	function menuUp(){

		$('nav').fadeIn();
		$('nav li').reverse().each(function(i){
								
			$(this).delay(72*i).queue( function(next){ 
				$(this).addClass('active');
				next(); 
			});
			
		});
		
	}	
	function menuDown(){

		$('nav').fadeOut('fast');
    $('nav li').reverse().each(function(i){
							
			$(this).delay(72*i).queue( function(next){ 
				$(this).removeClass('active');
				next(); 
			});
			
		});
		
	}

    $('.input').on('focus', function(){
    	var val = $(this).text();
        //$(this).text('');
    });


	
});



