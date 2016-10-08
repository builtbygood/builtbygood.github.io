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

    if( $window.width() >= 600 ){

        $window.on('scroll', scrollStuff);
        scrollStuff();

    } 

    ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"));
        
        function ajaxMailChimpForm($form, $resultElement){
            
            $form.submit(function(e) {

                e.preventDefault();

                 submitSubscribeForm($form, $resultElement);

                $('.loader').css('opacity', '1');
    
            });

        }
       
        function submitSubscribeForm($form, $resultElement) {

            $.ajax({
                type: "GET",
                url: $form.attr("action"),
                data: $form.serialize(),
                cache: false,
                dataType: "jsonp",
                jsonp: "c", 
                contentType: "application/json; charset=utf-8",
                error: function(error){
                    
                },
                success: function(data){
                    if (data.result != "success") {

                        var message = data.msg || "Oops! Unable to pre-register. Please try again later.";
                        
                        if (data.msg && data.msg.indexOf("already subscribed") >= 0) {

                            message = "Hey! You're already pre-registered.";

                        }
                        $resultElement.html(message);              

                    } else {

                        $resultElement.html("Thank You! Check your email for confirmation.");

                    }

                    $('.loader').css('opacity', '0');
                    $('#subscribe-result').fadeIn();
                    $("#subscribe-form input, #subscribe-form textarea").val('');
                  
                }
            });

        }

        $("#subscribe-form input").on('focus', function(){

            $('#subscribe-result').fadeOut();

        });

	
});


