document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('burger-menu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const orderProjectBtn = document.getElementById('order-project');
    const mobileNavItems = document.querySelectorAll('.mobile-navigation-item a');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    }

    function closeMenuFunc() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = ''; 
    }

    menuToggle.addEventListener('click', openMenu);

    closeMenu.addEventListener('click', closeMenuFunc);

    mobileNavItems.forEach(item => {
        item.addEventListener('click', closeMenuFunc);
    });

    orderProjectBtn.addEventListener('click', function() {

        closeMenuFunc();
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnToggle && !mobileMenu.classList.contains('hidden')) {
            closeMenuFunc();
        }
    });
});