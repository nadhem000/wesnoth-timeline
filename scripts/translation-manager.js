// Variables globales pour la gestion des traductions
let currentLanguage = 'fr';

// Combined translations object
const translations = {
    en: translations_en,
    fr: translations_fr,
    it: translations_it,
    ar: translations_ar
};

function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Skip translation for timeline item descriptions to preserve HTML structure
            if (element.classList.contains('WTL-timeline-manager-description') && 
                element.closest('.WTL-timeline-manager-timeline-content')) {
                return;
            }
            
            // For era description, use innerHTML to render the HTML tags
            if (element.classList.contains('WTL-timeline-manager-era-description')) {
                element.innerHTML = translations[currentLanguage][key];
            } 
            // For meta labels, update text content normally
            else if (element.classList.contains('WTL-timeline-manager-meta-label')) {
                element.textContent = translations[currentLanguage][key];
            }
            // For filter spans, update the text content
            else if (element.tagName === 'SPAN' && element.closest('.WTL-timeline-manager-checkbox-group')) {
                element.textContent = translations[currentLanguage][key];
            }
            // For other elements, apply translation normally with textContent
            else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update theme text
    const themeText = document.getElementById('themeText');
    themeText.setAttribute('data-i18n', currentTheme === 'light' ? 'theme_light' : 'theme_dark');
    if (translations[currentLanguage]) {
        themeText.textContent = translations[currentLanguage][currentTheme === 'light' ? 'theme_light' : 'theme_dark'];
    }
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('wesnothLanguage', lang);
    applyTranslations();
    generateTimeline();
    generateKeywords();
    
    // Update filter checkbox labels (including campaign names)
    updateFilterCheckboxLabels();
    
    // Reset highlight listeners flag
    highlightListenersAdded = false;
    setTimeout(() => {
        addHighlightEventListeners();
    }, 100);
}