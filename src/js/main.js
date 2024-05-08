
/// sliders settings


$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 2,
  });
  
  $(".prev-btn").click(function () {
		$(".slider").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".slider").slick("slickNext");
	});

	$(".prev-btn").addClass("slick-disabled");

	$(".slider").on("afterChange", function () {
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

  $('.slider2').slick({
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 2,
  });
  $(".prev-btn").click(function () {
		$(".slider2").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".slider2").slick("slickNext");
	});

	$(".prev-btn").addClass("slick-disabled");

	$(".slider2").on("afterChange", function () {
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

  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:false,
    asNavFor: '.slider-main',
    focusOnSelect: true,
    touchMove:true,
    responsive: [{
      breakpoint: 1460,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToScroll: 1,
        slidesToShow: 3,
      }
    }]
  });

});

$(function(){
  $("#phone").mask("+48(99) 999-9999");
});


// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     videoId: 'xQFVRC_qsv8',
//     playerVars: {
//       'autoplay': 1,
//       'controls': 0,
//       'loop': true,
//       'showinfo': 0,
//       'modestbranding': 0,
//       'disablekb': 1,
//       'rel': 0,
//       'mute': 1,
      
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//   event.target.mute();
// }

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//     player.playVideo(); // Почати відтворення відео знову, коли воно закінчується
//   }
// }