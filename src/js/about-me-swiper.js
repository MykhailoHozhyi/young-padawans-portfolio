import Swiper from 'swiper/bundle';

const swiperAboutMe = new Swiper('.swiper-about-me', {
  rewind: true,
  slidesPerGroup: 1,
  speed: 500,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
