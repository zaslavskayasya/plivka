

$(document).ready(function(){   
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


    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-prevs',
      });

      $('.slider-prevs').slick({      
        slidesToShow: 3,
        slidesToScroll: 2,
        mobileFirst: true,
        // rows: 2,
        arrows :false,
        asNavFor: '.slider-big',
        focusOnSelect: true,
        touchMove:true,
        responsive: [{
          breakpoint: 970,
          settings: {           
            slidesToScroll: 1,
            slidesToShow: 5,
            // rows:2,
            // slidesPerRow: 3,
          }
        }]
      });


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
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    adaptiveWidth: true,
                    centerMode: true,
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
  
  