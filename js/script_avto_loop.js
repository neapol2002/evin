var galleryTop = new Swiper('.image-slider', {
      // spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //return '<span class="' + className + '">' + (index + 1) + '</span>';},
    type: 'fraction',
    //type: 'progressbar'
  },
            loop: true,
            loopedSlides: 4
    });
    