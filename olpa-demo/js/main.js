$(function(){

    var $window = $(window);

    $window.on('scroll', scrollStuff);

    function scrollStuff(){
        var scroll_top = $window.scrollTop();

        if( scroll_top > 50 ){
            $('header').addClass('active');
        } else{
            $('header').removeClass('active'); 
        }
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



