$(function(){
	
	var $window = $(window);
    var $header = $('header');

    $window.on('scroll', scrollStuff);
    $window.on('load', function(){

        scrollStuff();

    });

    function scrollStuff(){
        var $top = $window.scrollTop();

        if( $top > 0 ){

            $header.addClass('active');

        } else{

            $header.removeClass('active');

        }
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

    $('.modal-close-btn').on('click', function(){

        $('.modal').fadeOut('fast');

    });

    $('.hire-us-btn').on('click', function(){
        $('.modal').fadeIn('fast');
    });

	
	
});


