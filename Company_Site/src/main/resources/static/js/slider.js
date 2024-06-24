let currentSlide = 0;

//use collections to implement galleries or sliders
function imgSlider(){
    const slides = document.getElementsByClassName("img_slide");
    slides[currentSlide].classList.remove('show');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('show');
}