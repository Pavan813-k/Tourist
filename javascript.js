
  const carousel = document.querySelector('#imageCarousel');
  const carouselInner = carousel.querySelector('.carousel-inner');

  let startX = 0;
  let isDragging = false;

  carouselInner.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
  });

  carouselInner.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diffX = endX - startX;

    if (diffX > 50) {
      bootstrap.Carousel.getInstance(carousel).prev();
    } else if (diffX < -50) {
      bootstrap.Carousel.getInstance(carousel).next();
    }
    isDragging = false;
  });

  carouselInner.addEventListener('mouseleave', () => {
    isDragging = false;
  });

