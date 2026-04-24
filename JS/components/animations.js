// тут анимирую появление секций при прокрутке
function initAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // тут запускаю анимацию прогресс-баров навыков
                entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                    bar.style.width = bar.dataset.width + '%';
                });
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
}

window.initAnimations = initAnimations;
