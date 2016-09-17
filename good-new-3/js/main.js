$(function(){
    

     var $window = $(window);
         fsImg = $('.img-fs'),
         startwidth= 2500, 
         startheight= 1750,
         ratio = startheight/startwidth,
         imagewidth = $(this).width(),
         imageheight = $(this).height(),
         browserwidth = $('.project-hero').width(),
         browserheight = $('.project-hero').height();

    $window.on('resize', function(){ 
        
            imagewidth = $(this).width();
            imageheight = $(this).height();
            browserwidth = $('.project-hero').width();
            browserheight = $('.project-hero').height();
                        
            fsImage();          
            scrollStuff();
                        
    }); 

    function fsImage(){
     
        if ((browserheight/browserwidth) > ratio){
            fsImg.height(browserheight);
            fsImg.width(browserheight / ratio);
        } else {
            fsImg.width(browserwidth);
            fsImg.height(browserwidth * ratio);
        };
        fsImg.css('left', (browserwidth - fsImg.width())/2);
        fsImg.css('top', (browserheight - fsImg.height())/2);
       
    };
    fsImage();


    var scrollTime = 1.5;
    var scrollDistance = 100;

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

    $window.on('scroll', function(){

        var scrollTop   = $window.scrollTop();
        $('.project-hero img').css({ transform:'translateY('+ scrollTop*0.2 +'px)' });

    })

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



