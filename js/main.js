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
		$('.dropdown').each(function(){
	    	$(this).css({ marginTop: - $(this).outerHeight()/2 + 'px' });
	    });
							
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

    $('.input').on('click', function(){

    	if( !$(this).find('.dropdown').is(':visible') ){

    		$(this).find('.dropdown').fadeIn('fast');

    	}

    });

    $('.dropdown').each(function(){

    	$(this).css({ marginTop: - $(this).outerHeight()/2 + 'px' });

    });

    $('.dropdown li').on('click', function(){

        $(this).parent().parent().parent().find('.display').html($(this).text());
        $(this).parent().parent().parent().find('.dropdown').delay(250).fadeOut('fast');

        $(this).addClass('active').siblings().removeClass('active');

    });


    $(document).on("mousedown", function(e) {

	    var clicked = $(e.target);  
	    if (  $('.dropdown').is(':visible') && !clicked.is('.dropdown li') ) {
	        $('.dropdown').hide();
	    }


    });




	
});



