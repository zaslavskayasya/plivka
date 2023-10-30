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
