$(function () {



    $('.bc2top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {

        var $scrolling = $(this).scrollTop();

        if ($scrolling >= 200) {
            $('.bc2top').fadeIn();
        } else {
            $('.bc2top').fadeOut();
        }
    });




    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            800,
            'linear'
        )
    })

    $('.counter').counterUp();

    
    
    
        
        
        
        
    
    

    








});
