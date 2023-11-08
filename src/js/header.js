
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
const threshold = 50; 


const elementO = document.querySelector('body');

elementO.addEventListener('touchstart', function (e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

elementO.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].clientX;
  touchEndY = e.changedTouches[0].clientY;

  
  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = touchEndY - touchStartY;

  
  if (Math.abs(swipeDistanceX) > threshold && Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
    if (swipeDistanceX > 0) {
      navigation.classList.add('active');
    } else if (swipeDistanceX < 0) {
      navigation.classList.remove('active');
    }
    menuOpen = !menuOpen;
  }
});


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
    console.error('there is no such element ');
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



// hide/show header

const headerElement = document.querySelector('.header');
const mainScreen = document.querySelector('.l-main');
const headerContainer = document.querySelector('.header-container');

const headerHeight = headerElement.offsetHeight;
const mainHeight = mainScreen.offsetHeight;

let lastScrollTop = 0;
headerContainer.style.height = headerElement.clientHeight + "px";


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