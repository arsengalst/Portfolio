// тут рендерю блок с навыками и прогресс-барами
function initSkills() {
    const skills = [
        { name: 'HTML5', level: 80 },
        { name: 'CSS3 / Flexbox / Grid', level: 75 },
        { name: 'JavaScript (ES6+)', level: 65 },
        { name: 'Git / GitHub', level: 60 },
        { name: 'Адаптивная верстка', level: 70 }
    ];

    const container = document.getElementById('skillsList');
    if (!container) return;

    container.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-fill" data-width="${skill.level}"></div>
            </div>
        </div>
    `).join('');
}

window.initSkills = initSkills;
