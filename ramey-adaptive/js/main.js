$(function(){

    var $window = $(window);
   
    $('.capabilitiesModal').hide();
    
    $('.modalClose').on('click', function(){
        $(this).parent().fadeOut('fast');
    });

    $('.open-btn').on('click', function(){
        var heading     = $(this).parent().find('h3').text();

        $(this).parent().parent().find('.capabilitiesModal h3').html(heading);
        $(this).parent().parent().find('.capabilitiesModal').fadeIn('fast');
    });

    $('.open-bio').on('click', function(){

        if( $window.width() <= 768 ){
            $(this).parent().find('.bioModal').css({ display:'block' }).fadeIn('fast');
        } else{
            $(this).parent().find('.bioModal').css({ display:'flex' }).fadeIn('fast');
        }

    });

    if( $window.width() <= 480 ){

        $('.adaptiveClients .col-1-3').on('mouseenter', function(){
            $(this).addClass('active');
        });
        $('.adaptiveClients .col-1-3').on('mouseleave', function(){
            $(this).removeClass('active');
        });
    

    }

    $('.adaptive_email_capture input[type="email"]').attr("placeholder", "Your email...");

    $('.contact-eddie-btn').on('click', function(){

        $('.adaptive_email_capture').fadeIn('fast');

    });

});



