// тут инициализирую навигацию
function initNav() {
    const desktopNav = document.getElementById('mainNav');
    if (desktopNav) {
        desktopNav.innerHTML = '<a href="#projects" class="nav-link">Проекты</a>';
    }

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', e => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        document.addEventListener('click', e => {
            if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    document.addEventListener('click', e => {
        const link = e.target.closest('.nav-link, .mobile-nav-link');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            hamburgerBtn?.classList.remove('active');
            mobileNav?.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }, true);
}

window.initNav = initNav;
