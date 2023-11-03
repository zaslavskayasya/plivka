console.log(`Loaded mrain.js`);

let menuButton = document.querySelector('.menu-lines');
let navigation = document.querySelector('.nav');

console.log(menuButton);
console.log(navigation);

menuButton.addEventListener("click", ()=> {
    navigation.classList.toggle('active');
})

// свайп

let menuOpen = false;
let touchStartX = 0;
let touchEndX = 0;


function toggleMenu() {
    if (menuOpen) {
        navigation.classList.remove('active');
    } else {
        navigation.classList.add('active');
    }
    menuOpen = !menuOpen;
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX; 
}
  
  // Обробник події для обробки закінчення касання (та визначення кінцевої координати X).
  function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;    
    // Визначте різницю між початковою та кінцеою координатою X.
    const deltaX = touchEndX - touchStartX;  
    // Якщо рух був достатньо великим, викличте функцію toggleMenu для відкриття або закриття меню.
    if (Math.abs(deltaX) > 50) {
      toggleMenu();
    }
  }

// Додайте обробники подій для касання на контенті.
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);


// 
let containerWithNoEnd = document.querySelectorAll('.container-no-end');

let sourceContainer = document.querySelector('.container');


const makeMargin = () => {
  const offsetLeftOfContainer = sourceContainer.offsetLeft;

  containerWithNoEnd.forEach((item) => {
    item.style.marginLeft = offsetLeftOfContainer + "px";
  });
};

makeMargin();

window.onresize = makeMargin;


$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    variableWidth: true
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
    variableWidth: true
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
    // variableWidth: true,
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
    // centerMode: true,
    responsive: [{
      breakpoint: 1460,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        // centerMode: true,
      }
    }]
  });

});
//# sourceMappingURL=main.js.map