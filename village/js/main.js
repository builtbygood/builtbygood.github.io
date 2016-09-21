$(function(){

    var $window = $(window),
        $faqs   = $('.faqs .section-questions');

 
    $window.on('resize', function(){ 
                        
        resizeStuff();
        scrollStuff();      
                        
    });


    function resizeStuff(){

        var $faq_height = $faqs.outerHeight();

        if( $window.width() >= 600 ){

            $('.faqs .section-image').css('height', $faq_height + 'px');

        } else{

            $('.faqs .section-image').css('height','480px');

        }
       
    };
    resizeStuff();


    $window.on('scroll', scrollStuff);

    function scrollStuff(){

        var $scrollTop = $window.scrollTop();

        $('section').each(function(){

            var $offset = $(this).offset().top - $scrollTop;

            if( $offset <= 0){

                var $target = $(this).attr('id');

                $('nav li[data-id="' + $target + '"').addClass('active').siblings().removeClass('active');

                if( $target == 'hero' ){

                    $('nav li').removeClass('active');

                }
            }

        });
          
    };
    scrollStuff();


    var scrollTime = 1.2;
    var scrollDistance = 100

    $window.on("mousewheel", function(event){

        event.preventDefault();

        var delta       = event.originalEvent.wheelDelta/120;
        var scrollTop   = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance) * 3;  

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Expo.easeOut,
            overwrite: 5                            
        });

    });


    $('.scroll-to-link').on('click touchstart', function(e){

        var $target        = $(this).attr('data-id');
        var $target_offset = $('#' + $target).offset().top;

        TweenMax.to($window, 0.6, {
            scrollTo : { y: $target_offset},
            ease: Expo.easeOut                         
        });

    });

	
});


