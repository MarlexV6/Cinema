document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let timerId = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }
    function nextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        showSlide(slideIndex);
 
        if (timerId) {
            clearInterval(timerId);
        }
        timerId = setInterval(nextSlide, 3000);
    }
    function prevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount; 
        showSlide(slideIndex);

        if (timerId) {
            clearInterval(timerId);
        }
        timerId = setInterval(nextSlide, 3000); 
    }
    showSlide(slideIndex);
    timerId = setInterval(nextSlide, 3000); 
     document.querySelector('#next-slide-button').addEventListener('click', nextSlide);
     document.querySelector('#prev-slide-button').addEventListener('click', prevSlide);
});




