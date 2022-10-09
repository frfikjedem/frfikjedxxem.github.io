(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(3000); // set duration in brackets    
    });

    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: './assets/images/1.gif' },
     

        ],
        delay: 5000, // delay between slide transition
        timer: false, // disable timer
        shuffle: true, // shuffle images
        firstTransition: 'fade', // fade into first slide
        firstTransitionDuration: 5000, // ^ lasts five seconds
        transition: 'blur', // blur transition for rest of slides
        transitionDuration: 2000 // ^ lasts two seconds
    });

    // MUSIC
    $('#music').prop("volume", 0.1); // set music volume

    // PARALLAX
    $('.home-info').tilt({
      maxTilt: 20, // max tilt
      scale: 1.3, // zoom scale
      perspective: 700, // tilt agressiveness
      speed: 3000, // enter/exit anim speed
    });

})(jQuery);
