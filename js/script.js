var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides"); 
var dots = document.getElementsByClassName("dot");

function showSlide(n) {
  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length;
  }
  
  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for(var i = 0; i < dots.length; i++) {
    dots[i].className = "dot";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className = "dot active";
}

function currentImg(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(autoSlide, 3000); 
}

showSlide(slideIndex);
setTimeout(autoSlide, 3000);
