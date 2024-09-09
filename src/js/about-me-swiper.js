import Swiper from 'swiper/bundle';

const swiperAboutMe = new Swiper('.swiper-about-me', {
  loop: true,
  slidesPerGroup: 1,
  speed: 1300,
  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.btn-skill-next',
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
