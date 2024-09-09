import Accordion from 'accordion-js';
new Accordion('.accordion-container-faq');
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-faq-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-faq-item');

      // Close all other items
      document.querySelectorAll('.accordion-faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle the clicked item
      item.classList.toggle('active');
    });
  });
});
