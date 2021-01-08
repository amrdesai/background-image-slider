// Variables
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// Function: Set background to body
const setBackgroundToBody = () => {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

// Function: Set active slide to ui
const setActiveSlide = () => {
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
};

// Event listener: Right button click
rightBtn.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide > slides.length) {
        activeSlide = 0;
    }
    // set background image
    setBackgroundToBody();
    // set active slide image
    setActiveSlide();
});

// Event listener: Left button click
leftBtn.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    // set background image
    setBackgroundToBody();
    // set active slide image
    setActiveSlide();
});

// Set background to body
setBackgroundToBody();
