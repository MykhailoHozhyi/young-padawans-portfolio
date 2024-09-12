import{A as j,S as y,a as S,O as m,I as E,E as M,D as T,N as D,b as P}from"./assets/vendor-Bl3yGGPp.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const C=document.getElementById("menuBtn"),a=document.getElementById("menuContent");C.addEventListener("click",function(){a.classList.contains("show")?(a.classList.remove("show"),setTimeout(()=>a.style.display="none",350)):(a.style.display="block",setTimeout(()=>a.classList.add("show"),0))});window.onclick=function(e){e.target.matches(".menu-btn")||(a.classList.remove("show"),setTimeout(()=>a.style.display="none",350))};document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-menu"),o=document.getElementById("closeMenu"),n=document.getElementById("mobileMenu"),r=document.getElementById("orderProject"),t=document.querySelectorAll(".mobile-navigation-item a");function s(){n.classList.remove("hidden"),document.body.style.overflow="hidden"}function i(){n.classList.add("hidden"),document.body.style.overflow=""}function c(l){l.preventDefault();const g=this.getAttribute("href"),p=document.querySelector(g);p&&window.scrollTo({top:p.offsetTop}),i()}e.addEventListener("click",s),o.addEventListener("click",i),t.forEach(l=>{l.addEventListener("click",c)}),r.addEventListener("click",c),document.addEventListener("click",function(l){const g=n.contains(l.target),p=e.contains(l.target);!g&&!p&&!n.classList.contains("hidden")&&i()})});new j([".about-accordion-container"],{openOnInit:[0]});const q=document.querySelector(".container-about-me-swiper"),f=new y(".swiper-about-me",{loop:!0,slidesPerGroup:1,speed:1300,grabCursor:!0,simulateTouch:!0,slideToClickedSlide:!0,navigation:{nextEl:".btn-skill-next"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}}),h=e=>{e.key==="ArrowRight"?f.slideNext(1300):e.key==="ArrowLeft"?f.slidePrev(1300):e.key==="Tab"&&(e.preventDefault(),f.slideNext(1300))},O={root:null,rootMargin:"0px 0px 0px 0px",threshold:1},$=e=>{e[0].isIntersecting?document.addEventListener("keydown",h):document.removeEventListener("keydown",h)},I=new IntersectionObserver($,O);I.observe(q);const B="/young-padawans-portfolio/assets/projects-desktop-slide-1-Df_oGpHS.jpg",A="/young-padawans-portfolio/assets/projects-desktop-slide-1@2x-BF-j6MFn.jpg",N="/young-padawans-portfolio/assets/projects-mobile-slide-1-Bh6YlRmz.jpg",H="/young-padawans-portfolio/assets/projects-mobile-slide-1@2x-BFQ9Pko0.jpg",R="/young-padawans-portfolio/assets/projects-desktop-slide-2-C4mxZzdi.jpg",F="/young-padawans-portfolio/assets/projects-desktop-slide-2@2x-CMg5mpbj.jpg",V="/young-padawans-portfolio/assets/projects-mobile-slide-2-DMSeTDz_.jpg",z="/young-padawans-portfolio/assets/projects-mobile-slide-2@2x-kPpVpNFN.jpg",K="/young-padawans-portfolio/assets/projects-desktop-slide-3-BZnD_WLd.jpg",_="/young-padawans-portfolio/assets/projects-desktop-slide-3@2x-C9rDjfpB.jpg",U="/young-padawans-portfolio/assets/projects-mobile-slide-3-D7ibM9wp.jpg",G="/young-padawans-portfolio/assets/projects-mobile-slide-3@2x-CFm300Qi.jpg",Q=[{imgDeskTop:`${B}`,imgDeskTop2x:`${A}`,imgMob:`${N}`,imgMob2x:`${H}`,alt:"Project 1"},{imgDeskTop:`${R}`,imgDeskTop2x:`${F}`,imgMob:`${V}`,imgMob2x:`${z}`,alt:"Project 2"},{imgDeskTop:`${K}`,imgDeskTop2x:`${_}`,imgMob:`${U}`,imgMob2x:`${G}`,alt:"Project 3"}],Y=document.querySelector(".projects-list"),Z=Q.map(({imgDeskTop:e,imgDeskTop2x:o,imgMob:n,imgMob2x:r,alt:t})=>`
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
              <a class="projects-item-link" rel="external noopener" href="https://github.com/MykhailoHozhyi/young-padawans-portfolio" target='_blank'>See project</a>
            </div>
            <div class="project-item-image">
              <picture>
                <source
                  srcset="
                    ${r}  2x,
                    ${n} 1x
                  "
                  media="(max-width: 767px)"
                />
                <source
                  srcset="
                    ${o} 2x,
                    ${e}    1x
                  "
                  media="(min-width: 768px)"
                />
                <img
                  src="${e}"
                  alt="${t}"
                  width="614"
                  height="385"
                  loading="lazy"
                />
              </picture>
            </div>
          </li>
  `).join("");Y.innerHTML=Z;document.addEventListener("DOMContentLoaded",()=>{const e=new y(".projects-swiper",{initialSlide:0,loop:!1,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev"},speed:1e3}),o=t=>{t.key==="ArrowRight"?e.slideNext(1e3):t.key==="ArrowLeft"?e.slidePrev(1e3):t.key==="Tab"&&(t.preventDefault(),t.shiftKey?e.slidePrev(1e3):e.slideNext(1e3))},n=document.querySelector(".projects-swiper");document.addEventListener("keydown",o),new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting?document.addEventListener("keydown",o):document.removeEventListener("keydown",o)})},{threshold:.1}).observe(n)});new j(".accordion-container-faq");document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-faq-button").forEach(o=>{o.addEventListener("click",()=>{const n=o.closest(".accordion-faq-item");document.querySelectorAll(".accordion-faq-item").forEach(r=>{r!==n&&r.classList.remove("active")}),n.classList.toggle("active")})})});const J=S.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function W(){const{data:e}=await J.get("/reviews");return e}const X=document.querySelector(".reviews-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");m.plugin(E);m.plugin(M);m.plugin(T);const ee={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-light",visibility:"auto",autoHide:"scroll",autoHideDelay:100,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}};async function te(){try{const e=await W();oe(e)}catch(e){console.error("error fetching:",e)}}function oe(e){const o=e.map(r=>`<li class="reviews-item  swiper-slide">
          <img src="${r.avatar_url}" alt="${r.author}"
          width="48"
                  height="48"
                  loading="lazy"
 />
          <h3>${r.author}</h3>
          <p>${r.review}</p>
        </li>`).join("");X.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".reviews-item p").forEach(r=>{m(r,ee)})}document.addEventListener("DOMContentLoaded",()=>{te();const e=new y(".reviews-swiper",{modules:[D,P],speed:1e3,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}}),o=t=>{t.key==="ArrowRight"?e.slideNext(1e3):t.key==="ArrowLeft"?e.slidePrev(1e3):t.key==="Tab"&&(t.preventDefault(),t.shiftKey?e.slidePrev(1e3):e.slideNext(1e3))},n=document.querySelector(".reviews-swiper");document.addEventListener("keydown",o),new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting?document.addEventListener("keydown",o):document.removeEventListener("keydown",o)})},{threshold:.1}).observe(n)});const se=document.querySelector(".form"),d=document.querySelector(".modal-overlay"),ne=document.querySelector(".close-btn"),b=document.querySelector(".title-footer-modal"),k=document.querySelector(".title-footer-message");ne.addEventListener("click",v);se.addEventListener("submit",ie);d.addEventListener("click",re);function v(e){d.classList.remove("is-open"),document.removeEventListener("keydown",w)}function re(e){e.target===d&&v()}function w(e){e.key==="Escape"&&v()}async function ie(e){e.preventDefault();const o=e.target,n=new FormData(o),r={email:n.get("email"),comment:n.get("comment")},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};try{const s=await fetch("https://portfolio-js.b.goit.study/api/requests",t);if(!s.ok){let c;switch(s.status){case 400:c="Invalid request. Please check your input and try again.";break;case 404:c="Resource not found. Please try again later.";break;case 500:c="Server error. Please try again later.";break;default:c="An unexpected error occurred. Please try again."}throw new Error(c)}const i=await s.json();b.textContent=i.title,k.textContent=i.message,d.classList.add("is-open"),o.reset(),document.addEventListener("keydown",w)}catch(s){console.log(s),d.classList.add("is-open"),b.textContent="Something went wrong",k.textContent=s.message,document.addEventListener("keydown",w)}}const u=document.querySelector(".scroll-up"),ce=1,L=()=>window.scrollY||document.documentElement.scrollTop,x=()=>{const o=(document.documentElement.scrollHeight-window.innerHeight)/25;let n=L()/o;n=Math.max(0,Math.min(n,100)),u.style.boxShadow=`inset 0 0 0 ${n}px #01288d`},ae=()=>{x(),L()>ce?u.classList.add("scroll-up-active"):u.classList.remove("scroll-up-active")},le=()=>{window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("scroll",ae);document.addEventListener("DOMContentLoaded",x);u.addEventListener("click",le);
//# sourceMappingURL=index.js.map
