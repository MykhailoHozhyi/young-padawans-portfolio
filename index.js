import{A as u,S as v}from"./assets/vendor-CW-SYcy5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();new u(".accordion-container-faq");document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-faq-button").forEach(n=>{n.addEventListener("click",()=>{const s=n.closest(".accordion-faq-item");document.querySelectorAll(".accordion-faq-item").forEach(c=>{c!==s&&c.classList.remove("active")}),s.classList.toggle("active")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-menu"),n=document.getElementById("closeMenu"),s=document.getElementById("mobileMenu"),c=document.getElementById("order-project"),t=document.querySelectorAll(".mobile-navigation-item a");function o(){s.classList.remove("hidden"),document.body.style.overflow="hidden"}function i(){s.classList.add("hidden"),document.body.style.overflow=""}e.addEventListener("click",o),n.addEventListener("click",i),t.forEach(r=>{r.addEventListener("click",i)}),c.addEventListener("click",function(){i()}),document.addEventListener("click",function(r){const j=s.contains(r.target),h=e.contains(r.target);!j&&!h&&!s.classList.contains("hidden")&&i()})});new u([".about-accordion-container"],{openOnInit:[0]});const y=[{imgDeskTop:"/images/projects/projects-desktop-slide-1.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-1@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-1.jpg",imgMob2x:"/images/projects/projects-mobile-slide-1@2x.jpg",alt:"Project 1"},{imgDeskTop:"/images/projects/projects-desktop-slide-2.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-2@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-2.jpg",imgMob2x:"/images/projects/projects-mobile-slide-2@2x.jpg",alt:"Project 2"},{imgDeskTop:"/images/projects/projects-desktop-slide-3.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-3@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-3.jpg",imgMob2x:"/images/projects/projects-mobile-slide-3@2x.jpg",alt:"Project 3"}],b=document.querySelector(".projects-list"),L=y.map(({imgDeskTop:e,imgDeskTop2x:n,imgMob:s,imgMob2x:c,alt:t})=>`
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
                    ${s} 1x
                  "
                  media="(max-width: 767px)"
                />
                <source
                  srcset="
                    ${n} 2x,
                    ${e}    1x
                  "
                  media="(min-width: 768px)"
                />
                <img
                  src="${e}"
                  alt="${t}"
                />
              </picture>
            </div>
          </li>
  `).join("");b.innerHTML=L;const w=document.querySelectorAll(".projects-item-link");w.forEach(e=>{e&&e.addEventListener("click",()=>{e.blur(),window.open("https://github.com/MykhailoHozhyi/young-padawans-portfolio","_blank")})});let a=1;document.addEventListener("DOMContentLoaded",()=>{const e=new v(".projects-swiper",{initialSlide:0,loop:!1,mousewheel:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1e3,on:{slideChange:function(){e.isEnd?a=-1:e.isBeginning&&(a=1)}}});setInterval(()=>{a===1?e.slideNext():e.slidePrev()},3e3)});const x=document.querySelector(".footer-form"),d=document.querySelector(".modal-overlay"),E=document.querySelector(".close-btn"),m=document.querySelector(".title-footer-modal"),p=document.querySelector(".title-footer-message");E.addEventListener("click",k);x.addEventListener("submit",M);function k(e){d.classList.remove("is-open")}async function M(e){e.preventDefault();const n=e.target,s=new FormData(n),c={email:s.get("email"),comment:s.get("comment")};console.log(c);const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};try{const o=await fetch("https://portfolio-js.b.goit.study/api/requests",t);if(!o.ok){let r;switch(o.status){case 400:r="Invalid request. Please check your input and try again.";break;case 404:r="Resource not found. Please try again later.";break;case 500:r="Server error. Please try again later.";break;default:r="An unexpected error occurred. Please try again."}throw new Error(r)}const i=await o.json();m.textContent=i.title,p.textContent=i.message,d.classList.add("is-open"),n.reset()}catch(o){console.log(o),d.classList.add("is-open"),m.textContent="Something went wrong",p.textContent=o.message}}const l=document.querySelector(".scroll-up"),S=1,g=()=>window.scrollY||document.documentElement.scrollTop,f=()=>{const n=(document.documentElement.scrollHeight-window.innerHeight)/30;let s=g()/n;s=Math.max(0,Math.min(s,100)),l.style.boxShadow=`inset 0 0 0 ${s}px #0041E8`},q=()=>{f(),g()>S?l.classList.add("scroll-up-active"):l.classList.remove("scroll-up-active")},O=()=>{window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("scroll",q);document.addEventListener("DOMContentLoaded",f);l.addEventListener("click",O);
//# sourceMappingURL=index.js.map
