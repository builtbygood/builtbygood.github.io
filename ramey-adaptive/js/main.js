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
	
});



