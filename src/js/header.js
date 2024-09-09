const menuBtn = document.getElementById('menuBtn');
const menuContent = document.getElementById('menuContent');

menuBtn.addEventListener('click', function () {
  if (menuContent.classList.contains('show')) {
    menuContent.classList.remove('show');
    setTimeout(() => (menuContent.style.display = 'none'), 350);
  } else {
    menuContent.style.display = 'block';
    setTimeout(() => menuContent.classList.add('show'), 0);
  }
});

window.onclick = function (event) {
  if (!event.target.matches('.menu-btn')) {
    menuContent.classList.remove('show');
    setTimeout(() => (menuContent.style.display = 'none'), 350);
  }
};
