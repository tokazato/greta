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


const menuMobileButtton = document.querySelector('.menu__mobile_button');
menuMobileButtton.addEventListener('click', () => {
	menuMobileButtton.classList.toggle('active');
});


const cookiesButton = document.querySelector('#cookiesButton');
cookiesButton.addEventListener('click', () => {
  document.querySelector('.cookies').style.display = 'none';
})
