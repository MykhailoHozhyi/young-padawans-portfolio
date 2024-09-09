import{A as p,S as h}from"./assets/vendor-CW-SYcy5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new p(".accordion-container-faq");document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-faq-button").forEach(n=>{n.addEventListener("click",()=>{const o=n.closest(".accordion-faq-item");document.querySelectorAll(".accordion-faq-item").forEach(c=>{c!==o&&c.classList.remove("active")}),o.classList.toggle("active")})})});document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("burger-menu"),n=document.getElementById("closeMenu"),o=document.getElementById("mobileMenu"),c=document.getElementById("order-project"),e=document.querySelectorAll(".mobile-navigation-item a");function t(){o.classList.remove("hidden"),document.body.style.overflow="hidden"}function i(){o.classList.add("hidden"),document.body.style.overflow=""}s.addEventListener("click",t),n.addEventListener("click",i),e.forEach(r=>{r.addEventListener("click",i)}),c.addEventListener("click",function(){i()}),document.addEventListener("click",function(r){const f=o.contains(r.target),j=s.contains(r.target);!f&&!j&&!o.classList.contains("hidden")&&i()})});new p([".about-accordion-container"],{openOnInit:[0]});const y=[{imgDeskTop:"/images/projects/projects-desktop-slide-1.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-1@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-1.jpg",imgMob2x:"/images/projects/projects-mobile-slide-1@2x.jpg",alt:"Project 1"},{imgDeskTop:"/images/projects/projects-desktop-slide-2.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-2@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-2.jpg",imgMob2x:"/images/projects/projects-mobile-slide-2@2x.jpg",alt:"Project 2"},{imgDeskTop:"/images/projects/projects-desktop-slide-3.jpg",imgDeskTop2x:"/images/projects/projects-desktop-slide-3@2x.jpg",imgMob:"/images/projects/projects-mobile-slide-3.jpg",imgMob2x:"/images/projects/projects-mobile-slide-3@2x.jpg",alt:"Project 3"}],v=document.querySelector(".projects-list"),b=y.map(({imgDeskTop:s,imgDeskTop2x:n,imgMob:o,imgMob2x:c,alt:e})=>`
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
                    ${o} 1x
                  "
                  media="(max-width: 767px)"
                />
                <source
                  srcset="
                    ${n} 2x,
                    ${s}    1x
                  "
                  media="(min-width: 768px)"
                />
                <img
                  src="${s}"
                  alt="${e}"
                />
              </picture>
            </div>
          </li>
  `).join("");v.innerHTML=b;const L=document.querySelectorAll(".projects-item-link");L.forEach(s=>{s&&s.addEventListener("click",()=>{s.blur(),window.open("https://github.com/MykhailoHozhyi/young-padawans-portfolio","_blank")})});document.addEventListener("DOMContentLoaded",()=>{new h(".projects-swiper",{initialSlide:0,loop:!1,spaceBetween:30,mousewheel:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1e3})});const w=document.querySelector(".footer-form"),l=document.querySelector(".modal-overlay"),x=document.querySelector(".close-btn"),d=document.querySelector(".title-footer-modal"),m=document.querySelector(".title-footer-message");x.addEventListener("click",k);w.addEventListener("submit",E);function k(s){l.classList.remove("is-open")}async function E(s){s.preventDefault();const n=s.target,o=new FormData(n),c={email:o.get("email"),comment:o.get("comment")};console.log(c);const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};try{const t=await fetch("https://portfolio-js.b.goit.study/api/requests",e);if(!t.ok){let r;switch(t.status){case 400:r="Invalid request. Please check your input and try again.";break;case 404:r="Resource not found. Please try again later.";break;case 500:r="Server error. Please try again later.";break;default:r="An unexpected error occurred. Please try again."}throw new Error(r)}const i=await t.json();d.textContent=i.title,m.textContent=i.message,l.classList.add("is-open"),n.reset()}catch(t){console.log(t),l.classList.add("is-open"),d.textContent="Something went wrong",m.textContent=t.message}}const a=document.querySelector(".scroll-up"),M=1,u=()=>window.scrollY||document.documentElement.scrollTop,g=()=>{const n=(document.documentElement.scrollHeight-window.innerHeight)/25;let o=u()/n;o=Math.max(0,Math.min(o,100)),a.style.boxShadow=`inset 0 0 0 ${o}px #01288d`},S=()=>{g(),u()>M?a.classList.add("scroll-up-active"):a.classList.remove("scroll-up-active")},q=()=>{window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("scroll",S);document.addEventListener("DOMContentLoaded",g);a.addEventListener("click",q);
//# sourceMappingURL=index.js.map
