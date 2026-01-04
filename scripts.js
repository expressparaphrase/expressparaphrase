let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot-item");

function playSlides() {
    slides.forEach(s => { s.style.display = "none"; s.style.opacity = "0"; });
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    
    dots.forEach(d => d.classList.remove("active"));
    
    slides[slideIndex-1].style.display = "block";
    setTimeout(() => { slides[slideIndex-1].style.opacity = "1"; }, 50);
    dots[slideIndex-1].classList.add("active");
    
    setTimeout(playSlides, 5000); 
}

document.addEventListener("DOMContentLoaded", playSlides);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
