$(function(){

    var $window = $(window);

    // On scroll – reveal project images, set nav links to active, animate header
    $window.on('scroll', scrollStuff);

    function scrollStuff(){

        var scrollTop = $window.scrollTop();

        $('.project-hero img').css({ transform:'translateY('+ scrollTop*0.2 +'px)' });
      
        $('.project-thumb').each(function(){

          var project_top = Math.round($(this).offset().top - $(window).scrollTop()) - $(window).height()/1.5;

          if( project_top <= 0 ){
            $(this).find('img').addClass('active');
          }

        });

        if( scrollTop > 0 ){

          $('header').addClass('active');

        } else{

          $('header').removeClass('active');

        }

        $('section').each(function(){

            var $offset = Math.round($(this).offset().top - scrollTop) -300;

            if( $offset <= 0){

                var $target = $(this).attr('id');

                $('nav li a').each(function(){

                    if( $(this).attr('data-id') == $target ){

                        $(this).parent().addClass('active').siblings().removeClass('active');

                    }

                });

                if( $target == 'home' ){

                    $('nav li').removeClass('active');

                }
            }

        });

    }
    scrollStuff();

    // Ease scrolling on mouse scroll
    var scrollTime = 1.6;
    var scrollDistance = 200;

    $window.on("mousewheel", function(event){

        event.preventDefault();

        var delta       = event.originalEvent.wheelDelta/120;
        var scrollTop   = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance) * 3;  

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power3.easeOut,
            overwrite: 5                            
        });

    });

    // scroll to sections on click
    $('.scroll-to-link').on('click', function(e){

        var $target        = $(this).attr('data-id');
        var $target_offset = $('#' + $target).offset().top -90;

        TweenMax.to($window, 1.6, {
            scrollTo : { y: $target_offset},
            ease:Power3.easeInOut                   
        });

        e.preventDefault();
        return false;

    });

    // animate phrases in hero
    var make = [
      'really awesome apps.',
      'equally awesome websites.', 
      'intuitive user experiences.',
      'lots and lots of coffee.',
      'this text change.',
      'stuff for screens.'
    ]

    count = -1;

    setInterval(function () {

        count++;

        $('.sliding_text').fadeOut('slow', function(){
            $('.sliding_text').text(make[count % make.length]);
            $('.sliding_text').fadeIn('slow');
        });

    }, 2500);
      
	
});



