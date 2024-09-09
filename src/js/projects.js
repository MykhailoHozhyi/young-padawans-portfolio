import Swiper from 'swiper/bundle';

const projects = [
  {
    imgDeskTop: '/images/projects/projects-desktop-slide-1.jpg',
    imgDeskTop2x: '/images/projects/projects-desktop-slide-1@2x.jpg',
    imgMob: '/images/projects/projects-mobile-slide-1.jpg',
    imgMob2x: '/images/projects/projects-mobile-slide-1@2x.jpg',
    alt: 'Project 1'
  },
  {
    imgDeskTop: '/images/projects/projects-desktop-slide-2.jpg',
    imgDeskTop2x: '/images/projects/projects-desktop-slide-2@2x.jpg',
    imgMob: '/images/projects/projects-mobile-slide-2.jpg',
    imgMob2x: '/images/projects/projects-mobile-slide-2@2x.jpg',
    alt: 'Project 2'
  },
  {
    imgDeskTop: '/images/projects/projects-desktop-slide-3.jpg',
    imgDeskTop2x: '/images/projects/projects-desktop-slide-3@2x.jpg',
    imgMob: '/images/projects/projects-mobile-slide-3.jpg',
    imgMob2x: '/images/projects/projects-mobile-slide-3@2x.jpg',
    alt: 'Project 3'
  }
];

const slideContainer = document.querySelector('.projects-list');

const slideItemsMarkup = projects.map(({ imgDeskTop, imgDeskTop2x, imgMob, imgMob2x, alt}) => {
  return `
    <li class="project-item swiper-slide">
             <div class="projects-item-content">
              <div class="projects-item-technologies">
                <span class="projects-item-technologies-tag">#react</span>
                <span class="projects-item-technologies-tag">#js</span>
                <span class="projects-item-technologies-tag">#node js</span>
                <span class="projects-item-technologies-tag">#git</span>
              </div>
              <p class="projects-item-text">
                Programming Across Borders: Ideas, Technologies, Innovations
              </p>
              <button class="projects-item-link">See project</button>
            </div>
            <div class="project-item-image">
              <picture>
                <source
                  srcset="
                    ${imgMob2x}  2x,
                    ${imgMob} 1x
                  "
                  media="(max-width: 767px)"
                />
                <source
                  srcset="
                    ${imgDeskTop2x} 2x,
                    ${imgDeskTop}    1x
                  "
                  media="(min-width: 768px)"
                />
                <img
                  src="${imgDeskTop}"
                  alt="${alt}"
                />
              </picture>
            </div>
          </li>
  `;
 }).join('');

slideContainer.innerHTML = slideItemsMarkup;

const btnProjectLink = document.querySelectorAll('.projects-item-link');

btnProjectLink.forEach((button) => {
    if (button) {
      button.addEventListener('click', () => {
        button.blur();
        window.open('https://github.com/MykhailoHozhyi/young-padawans-portfolio', '_blank')
      });
    }
  });

//свайпер
let direction = 1; // 1 - вперед, -1 - назад

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.projects-swiper', {
    initialSlide: 0,
    loop: false,
    mousewheel: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    on: {
      slideChange: function () {
        if (swiper.isEnd) {
          direction = -1;
        }
        else if (swiper.isBeginning) {
          direction = 1;
        }
      },
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });

  setInterval(() => {
    if (direction === 1) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  }, 3000);
});






