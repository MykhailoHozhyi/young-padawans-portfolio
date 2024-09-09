import{A as f,S as v}from"./assets/vendor-CW-SYcy5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();new f(".accordion-container-faq");document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-faq-button").forEach(e=>{e.addEventListener("click",()=>{const n=e.closest(".accordion-faq-item");document.querySelectorAll(".accordion-faq-item").forEach(c=>{c!==n&&c.classList.remove("active")}),n.classList.toggle("active")})})});document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("burger-menu"),e=document.getElementById("closeMenu"),n=document.getElementById("mobileMenu"),c=document.getElementById("order-project"),o=document.querySelectorAll(".mobile-navigation-item a");function i(){n.classList.remove("hidden"),document.body.style.overflow="hidden"}function r(){n.classList.add("hidden"),document.body.style.overflow=""}s.addEventListener("click",i),e.addEventListener("click",r),o.forEach(l=>{l.addEventListener("click",r)}),c.addEventListener("click",function(){r()}),document.addEventListener("click",function(l){const L=n.contains(l.target),k=s.contains(l.target);!L&&!k&&!n.classList.contains("hidden")&&r()})});new f([".about-accordion-container"],{openOnInit:[0]});const m=document.querySelector(".btn-icon-right"),a=new v(".swiper-about-me",{rewind:!0,slidesPerGroup:1,speed:500,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}}),t=a.slides;if(screen.width<768){const s=()=>{for(let e=0;e<=t.length-1;e++)if(t[e].classList.contains("skill-active")){if(e===0){t[0].classList.remove("skill-active"),t[1].classList.add("skill-active");return}if(e>=1&&e<t.length-1&&(t[a.activeIndex].classList.remove("skill-active"),t[a.activeIndex+1].classList.add("skill-active"),a.slideNext(500)),e===t.length-1){t[e].classList.remove("skill-active"),t[0].classList.add("skill-active");return}t[e].classList.remove("skill-active"),t[e+1].classList.add("skill-active");return}};m.addEventListener("click",s)}else if(screen.width<1440){const s=()=>{for(let e=0;e<=t.length-1;e++)if(t[e].classList.contains("skill-active")){if(e>=2&&a.slideNext(500),e===t.length-1){t[e].classList.remove("skill-active"),t[0].classList.add("skill-active");return}t[e].classList.remove("skill-active"),t[e+1].classList.add("skill-active");return}};m.addEventListener("click",s)}else{const s=()=>{for(let e=0;e<=t.length-1;e++)if(t[e].classList.contains("skill-active")){if(e>=5&&a.slideNext(500),e===t.length-1){a.slideNext(500),t[e].classList.remove("skill-active"),t[0].classList.add("skill-active");return}t[e].classList.remove("skill-active"),t[e+1].classList.add("skill-active");return}};m.addEventListener("click",s)}const y=[{imgDeskTop:"/images/projects/projects-desktop-slide-1.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-1@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-1.jpg",imgMob2x:"/images/projects/projects-mobile-slide-1@2x.jpg",alt:"Project 1"},{imgDeskTop:"/images/projects/projects-desktop-slide-2.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-2@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-2.jpg",imgMob2x:"/images/projects/projects-mobile-slide-2@2x.jpg",alt:"Project 2"},{imgDeskTop:"/images/projects/projects-desktop-slide-3.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-3@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-3.jpg",imgMob2x:"/images/projects/projects-mobile-slide-3@2x.jpg",alt:"Project 3"}],b=document.querySelector(".projects-list"),w=y.map(({imgDeskTop:s,imgDeskTop2x:e,imgMob:n,imgMob2x:c,alt:o})=>`
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
                    ${c}  2x,
                    ${n} 1x
                  "
                  media="(max-width: 767px)"
                />
                <source
                  srcset="
                    ${e} 2x,
                    ${s}    1x
                  "
                  media="(min-width: 768px)"
                />
                <img
                  src="${s}"
                  alt="${o}"
                />
              </picture>
            </div>
          </li>
  `).join("");b.innerHTML=w;const x=document.querySelectorAll(".projects-item-link");x.forEach(s=>{s&&s.addEventListener("click",()=>{s.blur(),window.open("https://github.com/MykhailoHozhyi/young-padawans-portfolio","_blank")})});document.addEventListener("DOMContentLoaded",()=>{new v(".projects-swiper",{initialSlide:0,loop:!1,spaceBetween:30,mousewheel:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1e3})});const E=document.querySelector(".footer-form"),p=document.querySelector(".modal-overlay"),S=document.querySelector(".close-btn"),u=document.querySelector(".title-footer-modal"),g=document.querySelector(".title-footer-message");S.addEventListener("click",M);E.addEventListener("submit",q);function M(s){p.classList.remove("is-open")}async function q(s){s.preventDefault();const e=s.target,n=new FormData(e),c={email:n.get("email"),comment:n.get("comment")};console.log(c);const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};try{const i=await fetch("https://portfolio-js.b.goit.study/api/requests",o);if(!i.ok){let l;switch(i.status){case 400:l="Invalid request. Please check your input and try again.";break;case 404:l="Resource not found. Please try again later.";break;case 500:l="Server error. Please try again later.";break;default:l="An unexpected error occurred. Please try again."}throw new Error(l)}const r=await i.json();u.textContent=r.title,g.textContent=r.message,p.classList.add("is-open"),e.reset()}catch(i){console.log(i),p.classList.add("is-open"),u.textContent="Something went wrong",g.textContent=i.message}}const d=document.querySelector(".scroll-up"),P=1,j=()=>window.scrollY||document.documentElement.scrollTop,h=()=>{const e=(document.documentElement.scrollHeight-window.innerHeight)/25;let n=j()/e;n=Math.max(0,Math.min(n,100)),d.style.boxShadow=`inset 0 0 0 ${n}px #01288d`},O=()=>{h(),j()>P?d.classList.add("scroll-up-active"):d.classList.remove("scroll-up-active")},T=()=>{window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("scroll",O);document.addEventListener("DOMContentLoaded",h);d.addEventListener("click",T);
//# sourceMappingURL=index.js.map
