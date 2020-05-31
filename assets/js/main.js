var galleryThumbs = new Swiper('.main-slider-thumbs', {
    spaceBetween: 10,
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