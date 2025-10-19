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
    
    // Initialize sync features
    initializeSyncFeatures();
}

// Initialize sync features
function initializeSyncFeatures() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        // Register background sync
        navigator.serviceWorker.ready.then(registration => {
            return registration.sync.register('background-sync-timeline');
        }).then(() => {
            console.log('Background Sync registered');
        }).catch(err => {
            console.log('Background Sync registration failed:', err);
        });
    }
    
    if ('serviceWorker' in navigator && 'periodicSync' in navigator) {
        // Register periodic sync (daily)
        navigator.serviceWorker.ready.then(registration => {
            return registration.periodicSync.register('periodic-sync-timeline', {
                minInterval: 24 * 60 * 60 * 1000 // 24 hours
            });
        }).then(() => {
            console.log('Periodic Sync registered');
        }).catch(err => {
            console.log('Periodic Sync registration failed:', err);
        });
    }
    
    // Listen for updates from service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', event => {
            if (event.data && event.data.type === 'DATA_UPDATED') {
                console.log('Data updated from background sync:', event.data);
                showSyncNotification('Timeline data updated in background');
                
                // Reload the updated data if it's timeline data
                if (event.data.file.includes('timeline-data.js') || event.data.file.includes('lang/')) {
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
            }
        });
    }
}

// Show sync notification
function showSyncNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'WTL-timeline-manager-sync-notification';
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#sync-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'sync-notification-styles';
        styles.textContent = `
            .WTL-timeline-manager-sync-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--WTL-timeline-manager-primary-color);
                color: white;
                padding: 12px 16px;
                border-radius: 4px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideIn 0.3s ease-out;
            }
            
            .WTL-timeline-manager-sync-notification button {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Manual sync function
async function manualSync() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.ready;
            
            // Create a message channel for response
            const channel = new MessageChannel();
            
            channel.port1.onmessage = event => {
                if (event.data.success) {
                    showSyncNotification('Manual sync completed successfully');
                } else {
                    showSyncNotification('Manual sync failed: ' + event.data.error);
                }
            };
            
            registration.active.postMessage({
                type: 'TRIGGER_SYNC'
            }, [channel.port2]);
            
            showSyncNotification('Starting manual sync...');
            
        } catch (error) {
            console.log('Manual sync failed:', error);
            showSyncNotification('Manual sync failed');
        }
    }
}

// Add sync button to controls
function addSyncButton() {
    const controls = document.querySelector('.WTL-timeline-manager-controls');
    if (controls && !document.getElementById('syncButton')) {
        const syncContainer = document.createElement('div');
        syncContainer.className = 'WTL-timeline-manager-sync-selector';
        syncContainer.innerHTML = `
            <button id="syncButton" class="WTL-timeline-manager-sync-btn" title="Sync timeline data">
                <i class="fas fa-sync-alt"></i>
                <span>Sync</span>
            </button>
        `;
        controls.appendChild(syncContainer);
        
        document.getElementById('syncButton').addEventListener('click', manualSync);
    }
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
    
    // Add sync button
    addSyncButton();
}

// Initialiser la page lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', initializePage);