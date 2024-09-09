document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('burger-menu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const orderProject = document.getElementById('orderProject');
    const mobileNavItems = document.querySelectorAll('.mobile-navigation-item a');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    }

    function closeMenuFunc() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = ''; 
    }

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop
            });
        }

        closeMenuFunc();
    }

    menuToggle.addEventListener('click', openMenu);

    closeMenu.addEventListener('click', closeMenuFunc);

    mobileNavItems.forEach(item => {
        item.addEventListener('click', scrollToSection);
    });

    orderProject.addEventListener('click', scrollToSection);

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnToggle && !mobileMenu.classList.contains('hidden')) {
            closeMenuFunc();
        }
    });
});