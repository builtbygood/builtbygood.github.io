$(function(){

    var $window = $(window),    
        fsImg = $('#slides img'),
        startwidth= 1920, 
        startheight= 1280,
        ratio = startheight/startwidth,
        imagewidth = $(this).width(),
        imageheight = $(this).height(),
        browserwidth = $(window).width(),
        browserheight = $('#slides').height();
            
    $window.on('resize', function(){ 
        
            imagewidth = $(this).width();
            imageheight = $(this).height();
            browserwidth = $(window).width();
            browserheight = $('#slides').height();
                        
            fsImage();          
                        
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


    $("#slides img:gt(0)").hide();

    setInterval(function() { 

      $('#slides img:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slides');

    },  3000);
	
});


