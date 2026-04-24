// тут рендерю блок контактов
function initContacts() {
    const el = document.getElementById('contactsContent');
    if (!el) return;

    el.innerHTML = `
        <div class="contacts-grid">
            <div class="contact-item">
                <div class="contact-icon"><i class="fab fa-telegram"></i></div>
                <div class="contact-info">
                    <a href="#">${CONFIG.contacts.telegram}</a>
                    <small>Telegram</small>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div class="contact-info">
                    <a href="mailto:${CONFIG.contacts.email}">${CONFIG.contacts.email}</a>
                    <small>Email</small>
                </div>
            </div>
        </div>
    `;
}

window.initContacts = initContacts;
