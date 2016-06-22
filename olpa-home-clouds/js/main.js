$(function(){

    var $window = $(window);

    $window.on('scroll', function(){
        window.requestAnimationFrame(scrollStuff);  
    });

    var lastScrollTop = 0, delta = 5;
    function scrollStuff(){

        var nowScrollTop = $(this).scrollTop();

        var scrollTop   = $window.scrollTop();
        var $clouds_top = $('.clouds-top');
        var $clouds_bot = $('.clouds-bottom');
       
        
        
        $clouds_top.each(function(){

            var offset = $(this).offset().top;
      
            $(this).css({transform: 'translateY(' +  -Math.round(offset - scrollTop)*0.2 + 'px)'});
            
        }); 

        $clouds_bot.each(function(){

            var offset = $(this).offset().top;
      
            $(this).css({transform: 'translateY(' +  -Math.round(offset - scrollTop)*0.1 + 'px)'});
            
        }); 
            
        
            
           



        /*
        if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
            if (nowScrollTop > lastScrollTop && nowScrollTop > $window.height()/2){
             $('header').addClass('active');
            } else {
             $('header').removeClass('active');
            }
            lastScrollTop = nowScrollTop;
        }

        if( nowScrollTop > 0 ){
            $('header').addClass('shadow');
        } else{
            $('header').removeClass('shadow');
        }
        */
 
    }

    var menu_btn    = $('.menu-btn');
    var close_btn   = $('.close-btn');
    var mobile_menu = $('.mobile-menu');

    menu_btn.on('click', function(){
        mobile_menu.addClass('active');
    });
    close_btn.on('click', function(){
        mobile_menu.removeClass('active');
    });
    
    
    /* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    requestAnimationFrame polyfill

    ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
 
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
 
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());
	
	
});



