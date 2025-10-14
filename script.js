let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    document.documentElement.setAttribute('lang', lang);
    
    document.querySelectorAll('[data-en]').forEach(element => {
        if (lang === 'ar' && element.getAttribute('data-ar')) {
            element.textContent = element.getAttribute('data-ar');
        } else if (lang === 'en' && element.getAttribute('data-en')) {
            element.textContent = element.getAttribute('data-en');
        }
    });
    
    localStorage.setItem('preferredLanguage', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLanguage);
});
