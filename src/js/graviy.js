
$(document).ready(function(){   
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        thumbs: {
          swiper: swiper,
        },
      });
    // $('.slider-big ').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-prevs',
    // });
    // console.log('test');

    // $('.slider-prevs').slick({
    //     arrows: false,
    //     dots: false,
    //     asNavFor: '.slider-big',
    //     // rows: 2,
    //     slidesToScroll: 1,
    //     touchMove:true,
    //     slidesToShow: 3,        

    // });


    // $('.slider-big').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     fade: true,
    //     asNavFor: '.slider-prevs',
    //     infinite: false,
    //   });

    //   $('.slider-prevs').slick({      
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     mobileFirst: true,
    //     // rows: 2,
    //     arrows :false,
    //     asNavFor: '.slider-big',
    //     focusOnSelect: true,
    //     // centerMode: true,
    //     // touchMove:true,
    //     infinite: false,
    //     // centerMode: true,
    //     responsive: [{
    //       breakpoint: 970,
    //       settings: {           
    //         slidesToScroll: 1,
    //         slidesToShow:10,
    //         // rows:2,
    //         // slidesPerRow: 3,
    //       }
    //     }]
    //   });


      $('.slider-w').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        centerMode: true,
        adaptiveWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 970,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    adaptiveWidth: true,
                    centerMode: false,

                                    }
            },
        ]
      });
      $(".prev-btn").click(function () {
            $(".slider-w").slick("slickPrev");
        });
    
        $(".next-btn").click(function () {
            $(".slider-w").slick("slickNext");
        });
    
        $(".prev-btn").addClass("slick-disabled");
    
        $(".slider-w").on("afterChange", function () {
            if ($(".slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn").addClass("slick-disabled");
            } else {
                $(".prev-btn").removeClass("slick-disabled");
            }
            if ($(".slick-next").hasClass("slick-disabled")) {
                $(".next-btn").addClass("slick-disabled");
            } else {
                $(".next-btn").removeClass("slick-disabled");
            }
        });
  
  });
  
  