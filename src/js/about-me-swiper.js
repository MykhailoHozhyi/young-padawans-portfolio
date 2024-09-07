import Swiper from 'swiper';

const swiperBtnNext = document.querySelector('.js-swiper-button-next');

const swiperAboutMe = new Swiper('.swiper-about-me', {
  rewind: true,
  slidesPerGroup: 1,
  speed: 500,
  allowTouchMove: false,
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

const skills = swiperAboutMe.slides;

if (screen.width < 768) {
  const onNextSkill = () => {
    for (let i = 0; i <= skills.length - 1; i++) {
      if (skills[i].classList.contains('skill-active')) {
        if (i >= 1) {
          swiperAboutMe.slideNext(1000);
        }

        if (i === skills.length - 1) {
          skills[i].classList.remove('skill-active');
          skills[0].classList.add('skill-active');
          return;
        }

        skills[i].classList.remove('skill-active');
        skills[i + 1].classList.add('skill-active');
        return;
      }
    }
  };

  swiperBtnNext.addEventListener('click', onNextSkill);
} else if (screen.width < 1440) {
  const onNextSkill = () => {
    for (let i = 0; i <= skills.length - 1; i++) {
      if (skills[i].classList.contains('skill-active')) {
        if (i >= 2) {
          swiperAboutMe.slideNext(500);
        }

        if (i === skills.length - 1) {
          skills[i].classList.remove('skill-active');
          skills[0].classList.add('skill-active');
          return;
        }

        skills[i].classList.remove('skill-active');
        skills[i + 1].classList.add('skill-active');
        return;
      }
    }
  };

  swiperBtnNext.addEventListener('click', onNextSkill);
} else {
  const onNextSkill = () => {
    for (let i = 0; i <= skills.length - 1; i++) {
      if (skills[i].classList.contains('skill-active')) {
        if (i === skills.length - 1) {
          swiperAboutMe.slideNext(500);
          skills[i].classList.remove('skill-active');
          skills[0].classList.add('skill-active');
          return;
        }

        skills[i].classList.remove('skill-active');
        skills[i + 1].classList.add('skill-active');
        return;
      }
    }
  };

  swiperBtnNext.addEventListener('click', onNextSkill);
}
