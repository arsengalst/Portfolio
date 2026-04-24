// тут храню список проектов прямо в коде - без fetch, работает без сервера
const PROJECTS = [
    {
        title: 'Пешеходный переход',
        description: 'Интерактивный светофор с таймером обратного отсчёта и кнопкой вызова перехода',
        link: '../project-1/index.html'
    },
    {
        title: 'Список задач',
        description: 'Менеджер задач с категориями - Работа, Личное, Учёба. Данные сохраняются в браузере',
        link: '../project-2/index.html'
    },
    {
        title: 'Часы и будильник',
        description: 'Будильник, таймер, секундомер и мировое время в четырёх часовых поясах',
        link: '../project-3/index.html'
    },
    {
        title: 'Шахматы',
        description: 'Полноценная игра с историей ходов, рокировкой и счётчиком взятых фигур',
        link: '../project-4/index.html'
    },
    {
        title: 'Калькулятор',
        description: 'Инженерный калькулятор, решатель уравнений, конвертер единиц и расчёт калорий',
        link: '../project-6/index.html'
    },
    {
        title: 'Генератор паролей',
        description: 'Создаёт надёжные случайные пароли с настройкой длины и набора символов',
        link: '../project-7/index.html'
    }
];

function initProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    // тут рендерю карточки проектов
    grid.innerHTML = PROJECTS.map(p => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <a href="${p.link}" class="project-link">Открыть проект &rarr;</a>
        </div>
    `).join('');
}

window.initProjects = initProjects;
