$(function(){

    var $window = $(window);

    $window.on('scroll', scrollStuff);
   
    function scrollStuff(){
        var $top = $window.scrollTop();

        if( $top > 0 ){

            $('header').addClass('active');

        } else{

            $('header').removeClass('active');

        }
    }
    scrollStuff();


    $('#mobile-nav-btn').on('click', function(){
        $('#main, .mobile-nav, header').toggleClass('open');
        $(this).toggleClass('active');
    });

    $('.open-instagram').on('click', function(e){

        e.preventDefault();


        window.location = 'instgram://user?username=rafljxn';
        setTimeout("window.location = 'https://www.instagram.com/rafljxn/';", 2000);

    

    });

});



