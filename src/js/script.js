$(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icons/right.svg"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1200,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }   

            }
        ]
    });
  });