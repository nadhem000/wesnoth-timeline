// Variables globales pour l'initialisation
let currentTheme = 'light';

// Fonction pour initialiser la page
async function initializePage() {
    console.log('Initializing page...');
    
    // Récupérer la langue et le thème sauvegardés
    const savedLanguage = localStorage.getItem('wesnothLanguage');
    const savedTheme = localStorage.getItem('wesnothTheme');
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = currentLanguage;
    }
    
    if (savedTheme) {
        currentTheme = savedTheme;
        document.getElementById('themeToggle').checked = (currentTheme === 'dark');
        updateTheme();
    }
    
    // Initialize filters
    initializeFilters();
    
    // FIXED: Apply filters automatically on page load
    applyFilters();
    
    // Initialize icons manager first
    await WTLIconsManager.init(timelineData);
    
    // Apply translations (this won't affect timeline descriptions)
    applyTranslations();
    
    // Generate keywords from the rendered HTML
    generateKeywords();
    
    // Add event listeners
    addEventListeners();
    
    // Add highlight event listeners
    setTimeout(() => {
        console.log('Setting up highlight listeners...');
        addHighlightEventListeners();
    }, 500);
}

// Fonction pour ajouter les écouteurs d'événements pour les cases "All"
function addAllCheckboxListeners() {
    // Category "All" checkbox
    const categoryAll = document.querySelector('input[name="category"][value="all"]');
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:not([value="all"])');
    
    if (categoryAll) {
        categoryAll.addEventListener('change', function() {
            categoryCheckboxes.forEach(cb => {
                cb.checked = this.checked;
            });
        });
    }
    
    // Campaign "All" checkbox
    const campaignAll = document.querySelector('input[name="campaign"][value="all"]');
    const campaignCheckboxes = document.querySelectorAll('input[name="campaign"]:not([value="all"])');
    
    if (campaignAll) {
        campaignAll.addEventListener('change', function() {
            campaignCheckboxes.forEach(cb => {
                cb.checked = this.checked;
            });
        });
    }
    
    // Universe "All" checkbox
    const universeAll = document.querySelector('input[name="universe"][value="all"]');
    const universeCheckboxes = document.querySelectorAll('input[name="universe"]:not([value="all"])');
    
    if (universeAll) {
        universeAll.addEventListener('change', function() {
            universeCheckboxes.forEach(cb => {
                cb.checked = this.checked;
            });
        });
    }
}

// test function to verify highlighting works
function testHighlightFeature() {
    console.log('Testing highlight feature...');
    console.log('Keywords found:', keywords.size);
    console.log('Timeline items:', document.querySelectorAll('.WTL-timeline-manager-timeline-item').length);
    console.log('Highlight elements:', document.querySelectorAll('.WTL-timeline-manager-person, .WTL-timeline-manager-place, .WTL-timeline-manager-faction').length);
}

// Fonction pour mettre à jour le thème
function updateTheme() {
    if (currentTheme === 'dark') {
        document.body.classList.add('WTL-timeline-manager-dark-mode');
    } else {
        document.body.classList.remove('WTL-timeline-manager-dark-mode');
    }
    
    // Mettre à jour le texte du thème
    const themeText = document.getElementById('themeText');
    themeText.setAttribute('data-i18n', currentTheme === 'light' ? 'theme_light' : 'theme_dark');
    if (translations[currentLanguage]) {
        themeText.textContent = translations[currentLanguage][currentTheme === 'light' ? 'theme_light' : 'theme_dark'];
    }
}

// Fonction pour basculer le thème
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('wesnothTheme', currentTheme);
    updateTheme();
}

// Fonction pour ajouter les écouteurs d'événements
function addEventListeners() {
    // Sélecteur de langue
    document.getElementById('languageSelect').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Bouton de basculement de thème
    document.getElementById('themeToggle').addEventListener('change', toggleTheme);
}

// Initialiser la page lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', initializePage);