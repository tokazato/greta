var galleryThumbs = new Swiper('.main-slider-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.main-slider-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });


const button = document.querySelector('.menu__mobile_button');

button.addEventListener('click', () => {
	button.classList.toggle('active');
})