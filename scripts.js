// Slideshow Utama (mySlides dan dot)

var slideIndex = 0;

showSlides();

function showSlides() {

var i;

var slides = document.getElementsByClassName("mySlides");

var dots = document.getElementsByClassName("dot");

for (i = 0; i < slides.length; i++) {

slides[i].style.display = "none";

}

for (i = 0; i < dots.length; i++) {

dots[i].className = dots[i].className.replace(" active", "");

}

slideIndex++;

if (slideIndex > slides.length) {

slideIndex = 1

}

slides[slideIndex - 1].style.display = "block";

dots[slideIndex - 1].className += " active";

setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}
