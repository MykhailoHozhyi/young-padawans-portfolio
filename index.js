import{A as y}from"./assets/vendor-BaWhf9Kk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("burger-menu"),r=document.getElementById("closeMenu"),o=document.getElementById("mobileMenu"),i=document.getElementById("order-project"),t=document.querySelectorAll(".mobile-navigation-item a");function e(){o.classList.remove("hidden"),document.body.style.overflow="hidden"}function n(){o.classList.add("hidden"),document.body.style.overflow=""}s.addEventListener("click",e),r.addEventListener("click",n),t.forEach(c=>{c.addEventListener("click",n)}),i.addEventListener("click",function(){alert("Замовлення проекту"),n()}),document.addEventListener("click",function(c){const p=o.contains(c.target),g=s.contains(c.target);!p&&!g&&!o.classList.contains("hidden")&&n()})});new y([".about-accordion-container"],{openOnInit:[0]});const h=document.querySelector(".footer-form"),a=document.querySelector(".modal-overlay"),v=document.querySelector(".close-btn"),d=document.querySelector(".title-footer-modal"),u=document.querySelector(".title-footer-message");v.addEventListener("click",L);h.addEventListener("submit",b);function L(s){a.classList.remove("is-open")}async function b(s){s.preventDefault();const r=s.target,o=new FormData(r),i={email:o.get("email"),comment:o.get("comment")};console.log(i);const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)};try{const e=await fetch("https://portfolio-js.b.goit.study/api/requests",t);if(!e.ok){let c;switch(e.status){case 400:c="Invalid request. Please check your input and try again.";break;case 404:c="Resource not found. Please try again later.";break;case 500:c="Server error. Please try again later.";break;default:c="An unexpected error occurred. Please try again."}throw new Error(c)}const n=await e.json();d.textContent=n.title,u.textContent=n.message,a.classList.add("is-open"),r.reset()}catch(e){console.log(e),a.classList.add("is-open"),d.textContent="Something went wrong",u.textContent=e.message}}const l=document.querySelector(".scroll-up"),w=1,m=()=>window.scrollY||document.documentElement.scrollTop,f=()=>{const r=(document.documentElement.scrollHeight-window.innerHeight)/30;let o=m()/r;o=Math.max(0,Math.min(o,100)),l.style.boxShadow=`inset 0 0 0 ${o}px #0041E8`},E=()=>{f(),m()>w?l.classList.add("scroll-up-active"):l.classList.remove("scroll-up-active")},S=()=>{window.scrollTo({top:0,behavior:"smooth"})};window.addEventListener("scroll",E);document.addEventListener("DOMContentLoaded",f);l.addEventListener("click",S);
//# sourceMappingURL=index.js.map