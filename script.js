let index = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;
let slideInterval;

function showSlide(i) {
    if (i >= totalSlides) index = 0;
    if (i < 0) index = totalSlides - 1;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${-index * 600}px)`; // Adjusts the carousel position
}

function moveSlide(n) {
    showSlide(index += n);
}

// Autoplay function
function startAutoplay() {
    slideInterval = setInterval(() => {
        showSlide(index += 1);
    }, 3000); // Change slide every 3 seconds
}

// Pause autoplay on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', () => {
    clearInterval(slideInterval); // Stops the autoplay when mouse hovers
});

carouselContainer.addEventListener('mouseleave', () => {
    startAutoplay(); // Resumes autoplay when mouse leaves
});

// Start the autoplay when the page loads
startAutoplay();
