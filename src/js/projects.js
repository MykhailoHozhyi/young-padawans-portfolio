import Swiper from 'swiper/bundle';

import prjDeskTopSl1 from '/images/projects/projects-desktop-slide-1.jpg';
import prjDeskTopSl12x from '/images/projects/projects-desktop-slide-1@2x.jpg';
import prjMobSl1 from '/images/projects/projects-mobile-slide-1.jpg';
import prjMobSl12x from '/images/projects/projects-mobile-slide-1@2x.jpg';

import prjDeskTopSl2 from '/images/projects/projects-desktop-slide-2.jpg';
import prjDeskTopSl22x from '/images/projects/projects-desktop-slide-2@2x.jpg';
import prjMobSl2 from '/images/projects/projects-mobile-slide-2.jpg';
import prjMobSl22x from '/images/projects/projects-mobile-slide-2@2x.jpg';

import prjDeskTopSl3 from '/images/projects/projects-desktop-slide-3.jpg';
import prjDeskTopSl32x from '/images/projects/projects-desktop-slide-3@2x.jpg';
import prjMobSl3 from '/images/projects/projects-mobile-slide-3.jpg';
import prjMobSl32x from '/images/projects/projects-mobile-slide-3@2x.jpg';


const projects = [
  {
    imgDeskTop: `${prjDeskTopSl1}`,
    imgDeskTop2x: `${prjDeskTopSl12x}`,
    imgMob: `${prjMobSl1}`,
    imgMob2x: `${prjMobSl12x}`,
    alt: 'Project 1'
  },
  {
    imgDeskTop: `${prjDeskTopSl2}`,
    imgDeskTop2x: `${prjDeskTopSl22x}`,
    imgMob: `${prjMobSl2}`,
    imgMob2x: `${prjMobSl22x}`,
    alt: 'Project 2'
  },
  {
    imgDeskTop: `${prjDeskTopSl3}`,
    imgDeskTop2x: `${prjDeskTopSl32x}`,
    imgMob: `${prjMobSl3}`,
    imgMob2x: `${prjMobSl32x}`,
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

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.projects-swiper', {
    initialSlide: 0,
    loop: false,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
      });
});






