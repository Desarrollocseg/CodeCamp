document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const prevButton = carousel.querySelector('.carousel-control.prev');
  const nextButton = carousel.querySelector('.carousel-control.next');
  const inner = carousel.querySelector('.carousel-inner');

  let currentIndex = 0;
  const slides = inner.querySelectorAll('.carousel-item');

  const slideWidth = slides[0].offsetWidth;

  function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;
      inner.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
  }

  function nextSlide() {
      goToSlide(currentIndex + 1);
  }

  function prevSlide() {
      goToSlide(currentIndex - 1);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
});
