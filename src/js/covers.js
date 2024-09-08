// export function initCoversAnimation() {

//   const coversSection = document.querySelector('.covers');

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         coversSection.classList.add('animate'); // Додає клас для запуску анімації
//       } else {
//         coversSection.classList.remove('animate'); // Видаляє клас, якщо секція виходить з видимості
//       }
//     });
//   });

//   observer.observe(coversSection);
// }




// import { initCoversAnimation } from "./js/covers";

// document.addEventListener('DOMContentLoaded', () => {
//   initCoversAnimation();
// })