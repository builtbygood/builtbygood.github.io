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

        var app_link = $(this).attr('data-app');
        var site_link = $(this).attr('href');

        setTimeout(function(){
            window.location = site_link;
        },1000);
        window.location = app_link;

         e.preventDefault();

      });
     
    }

});



