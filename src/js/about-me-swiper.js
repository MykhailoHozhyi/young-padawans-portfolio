import Swiper from 'swiper/bundle';

const containerAboutMeSwiper = document.querySelector(
  '.container-about-me-swiper'
);

const swiperAboutMe = new Swiper('.swiper-about-me', {
  loop: true,
  slidesPerGroup: 1,
  speed: 1300,
  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,
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

const onBtnSwiperKeydown = e => {
  if (e.key === 'ArrowRight') {
    swiperAboutMe.slideNext(1300);
  } else if (e.key === 'ArrowLeft') {
    swiperAboutMe.slidePrev(1300);
  } else if (e.key === 'Tab') {
    e.preventDefault();
    swiperAboutMe.slideNext(1300);
  }
};

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 1,
};

const observerCallBack = entries => {
  if (entries[0].isIntersecting) {
    document.addEventListener('keydown', onBtnSwiperKeydown);
  } else {
    document.removeEventListener('keydown', onBtnSwiperKeydown);
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(containerAboutMeSwiper);
