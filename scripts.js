let currentSlide = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot-item");

function changeSlide() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
        slide.style.opacity = "0";
    });
    
    currentSlide++;
    if (currentSlide > slides.length) { currentSlide = 1; }
    
    // Reset dots
    dots.forEach(dot => dot.classList.remove("active"));
    
    // Show current slide
    slides[currentSlide - 1].style.display = "block";
    setTimeout(() => {
        slides[currentSlide - 1].style.opacity = "1";
    }, 50);
    
    dots[currentSlide - 1].classList.add("active");
    
    setTimeout(changeSlide, 5000); 
}

// Start Slideshow
document.addEventListener("DOMContentLoaded", () => {
    changeSlide();
    
    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
