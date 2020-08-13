(function($) {
    
    // for scroll to top button
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        // If page is scrolled more than 50px
        if ($(this).scrollTop() >= 50) { 
            // Fade in the arrow       
            $('.scroll-top-btn').fadeIn(200);    
        } else {
            // Else fade out the arrow
            $('.scroll-top-btn').fadeOut(200);   
        }
    });
    // When arrow is clicked
    $('.scroll-top-btn').click(function() {      
        $('body,html').animate({
            // Scroll to top of body
            scrollTop : 0                       
        }, 500);
    });

})(jQuery);