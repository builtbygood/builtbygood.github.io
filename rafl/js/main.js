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
        var store_link = 'https://itunes.apple.com/in/app/instagram/id389801252?m';

        setTimeout(function(){

            window.location = store_link;

            setTimeout(function(){

                window.location = site_link;

            }, 500);

        }, 500);

        window.location = app_link;

        e.preventDefault();

      });
     
    }
    

});



