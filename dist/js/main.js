
let menuButton = document.querySelector('.menu-lines');
let navigation = document.querySelector('.nav');

menuButton.addEventListener("click", ()=> {
    navigation.classList.toggle('active');
})

// menu swipe
let menuOpen = false;

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
const threshold = 50; // Пороговое значение для срабатывания свайпа

const elementO = document.querySelector('body'); 

elementO.addEventListener('touchstart', function (e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

elementO.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].clientX;
  touchEndY = e.changedTouches[0].clientY;

  //difference
  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = touchEndY - touchStartY;

  // check
  if (Math.abs(swipeDistanceX) > threshold && Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
    if (swipeDistanceX > 0) {
      navigation.classList.add('active');
    } else if (swipeDistanceX < 0) {
      navigation.classList.remove('active');
    }
    menuOpen = !menuOpen;
  }
});

elementO.addEventListener('touchmove', function (e) {
  // e.preventDefault();
});

// margin for container width full width
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

/// header images 
const backElelementWithBackground = document.querySelector('[data-image]');

let resizeWindowImage = function(){
  const imageResponsive = backElelementWithBackground.getAttribute('data-responsive');
  backElelementWithBackground.style.backgroundImage = `url(${imageResponsive})`;
}

let pastImage = function(){
  if (backElelementWithBackground) {
    const imageUrl = backElelementWithBackground.getAttribute('data-image');
    backElelementWithBackground.style.backgroundImage = `url(${imageUrl})`;
  } else {
    console.error('Элемент с data-атрибутом "data-image" не найден.');
  }
}

let chectSize = function(){
  if(window.width < 760){
    pastImage()
  } else {
    resizeWindowImage()
  }
}

chectSize();

window.addEventListener('resize', ()=> {
  chectSize();
});






/// sliders settings


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


// hide/show hwader

const headerElement = document.querySelector('.header');
const mainScreen = document.querySelector('.l-main');

const headerHeight = headerElement.offsetHeight;
const mainHeight = mainScreen.offsetHeight;

let lastScrollTop = 0;

window.addEventListener('scroll', () => {

  let scrollDistanse = window.scrollY;

  if(scrollDistanse > lastScrollTop){
    headerElement.classList.add('hidden');
    headerElement.classList.remove('sticky');
  } else {
    headerElement.classList.remove('hidden');
    headerElement.classList.add('sticky');
  }

  if(scrollDistanse === 0){
    headerElement.classList.remove('sticky', 'hidden');
  }

   lastScrollTop = scrollDistanse;

})

// animation

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}
//# sourceMappingURL=main.js.map