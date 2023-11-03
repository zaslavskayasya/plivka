
let menuButton = document.querySelector('.menu-lines');
let navigation = document.querySelector('.nav');

menuButton.addEventListener("click", ()=> {
    navigation.classList.toggle('active');
})

// menu swipe
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
    
  function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;  
    const deltaX = touchEndX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      toggleMenu();
    }
  }


document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);


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