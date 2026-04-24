// тут обновляю индикатор прокрутки страницы
function initScrollIndicator() {
    const indicator = document.getElementById('scrollIndicator');
    if (!indicator) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const total = document.body.scrollHeight - window.innerHeight;
        indicator.style.width = ((scrolled / total) * 100) + '%';
    });
}

window.initScrollIndicator = initScrollIndicator;
