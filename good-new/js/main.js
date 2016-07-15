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
	
	
});


