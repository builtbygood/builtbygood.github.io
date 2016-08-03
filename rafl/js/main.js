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

    if( /Android|webOS|iPhone|iPad|iPod|IEMobile/i.test(navigator.userAgent) ) {
      
      $('.app-link').on('click', function(e){

        e.preventDefault();

        window.location = $(this).attr('data-app');

      });
     
    }

});



