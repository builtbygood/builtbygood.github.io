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

    $('a[data-applink]').applink({
        desktop: false, 
        data: 'applink', 
        timeout: 1500 
    });

});



