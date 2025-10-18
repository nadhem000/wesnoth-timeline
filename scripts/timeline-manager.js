// Variables globales pour la gestion de la timeline
let keywords = new Set();
let highlightListenersAdded = false; // Flag to track if listeners are already added

// FIXED: Initialize activeFilters with 'all' values by default
let activeFilters = {
    categories: ['all'],
    campaigns: ['all'],
    universes: ['all']
};

// Mainline campaigns list
const mainlineCampaigns = [
    { key: "the_rise_of_wesnoth", value: "The Rise of Wesnoth" },
    { key: "legend_of_wesmere", value: "Legend of Wesmere" },
    { key: "a_tale_of_two_brothers", value: "A Tale of Two Brothers" },
    { key: "descent_into_darkness", value: "Descent into Darkness" },
    { key: "delfadors_memoirs", value: "Delfador's Memoirs" },
    { key: "liberty", value: "Liberty" },
    { key: "heir_to_the_throne", value: "Heir to the Throne" },
    { key: "northern_rebirth", value: "Northern Rebirth" },
    { key: "the_hammer_of_thursagan", value: "The Hammer of Thursagan" },
    { key: "eastern_invasion", value: "Eastern Invasion" },
    { key: "dead_water", value: "Dead Water" },
    { key: "under_the_burning_suns", value: "Under the Burning Suns" }
];

// Function to get translated campaign name
function getTranslatedCampaignName(campaignKey) {
    const translationKey = `campaign_${campaignKey}`;
    return translations[currentLanguage] && translations[currentLanguage][translationKey] 
        ? translations[currentLanguage][translationKey] 
        : mainlineCampaigns.find(c => c.key === campaignKey)?.value || campaignKey;
}

// Fonction pour initialiser les filtres
function initializeFilters() {
    // Generate category checkboxes with translated labels
    const categoryFilter = document.querySelector('.WTL-timeline-manager-checkbox-group');
    
    categoryFilter.innerHTML = `
        <label><input type="checkbox" name="category" value="all" checked> <span data-i18n="filter_all">Tous</span></label>
        <label><input type="checkbox" name="category" value="mainline" checked> <span data-i18n="filter_mainline">Principale</span></label>
        <label><input type="checkbox" name="category" value="umc" checked> <span data-i18n="filter_umc">UMC</span></label>
        <label><input type="checkbox" name="category" value="mainline uncannon" checked> <span data-i18n="filter_mainline_non_canon">Principale non-canon</span></label>
        <label><input type="checkbox" name="category" value="other" checked> <span data-i18n="filter_other">Autre</span></label>
    `;

    
    // Generate campaign checkboxes with translated labels
    const campaignFilter = document.getElementById('campaignFilter');
    campaignFilter.innerHTML = `
        <label><input type="checkbox" name="campaign" value="all" checked> <span data-i18n="filter_all">Tous</span></label>
    `;
    
    mainlineCampaigns.forEach(campaign => {
        const label = document.createElement('label');
        const translatedName = getTranslatedCampaignName(campaign.key);
        label.innerHTML = `<input type="checkbox" name="campaign" value="${campaign.value}" checked> ${translatedName}`;
        campaignFilter.appendChild(label);
    });
    
    const otherCampaignLabel = document.createElement('label');
    otherCampaignLabel.innerHTML = `<input type="checkbox" name="campaign" value="other" checked> <span data-i18n="filter_other">Autre</span>`;
    campaignFilter.appendChild(otherCampaignLabel);
    
    // Generate universe checkboxes with translated labels
    const universeFilter = document.getElementById('universeFilter');
    universeFilter.innerHTML = `
        <label><input type="checkbox" name="universe" value="all" checked> <span data-i18n="filter_all">Tous</span></label>
        <label><input type="checkbox" name="universe" value="wesnoth" checked> <span data-i18n="filter_universe_wesnoth">Wesnoth</span></label>
        <label><input type="checkbox" name="universe" value="other" checked> <span data-i18n="filter_other">Autre</span></label>
    `;
    
    // Add event listeners
    addAllCheckboxListeners();
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    
    // Add filter toggle functionality
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersContent = document.getElementById('filtersContent');
    
    if (filtersToggle && filtersContent) {
        filtersToggle.addEventListener('click', function() {
            const isExpanded = filtersContent.classList.toggle('WTL-timeline-manager-expanded');
            filtersToggle.setAttribute('data-i18n', isExpanded ? 'filters_collapse' : 'filters_expand');
            
            if (translations[currentLanguage]) {
                filtersToggle.textContent = translations[currentLanguage][isExpanded ? 'filters_collapse' : 'filters_expand'];
            }
        });
    }
}

// Function to update filter checkbox labels with translations
function updateFilterCheckboxLabels() {
    // Update category filter labels
    const categoryFilter = document.querySelector('.WTL-timeline-manager-checkbox-group');
    if (categoryFilter && translations[currentLanguage]) {
        const allLabel = categoryFilter.querySelector('label:first-child');
        if (allLabel) {
            allLabel.innerHTML = allLabel.innerHTML.replace('All', translations[currentLanguage]['filter_all'] || 'All');
        }
        
        const otherLabel = categoryFilter.querySelector('label:last-child');
        if (otherLabel) {
            otherLabel.innerHTML = otherLabel.innerHTML.replace('Other', translations[currentLanguage]['filter_other'] || 'Other');
        }
    }
    
    
    // Update campaign filter labels
    const campaignFilter = document.getElementById('campaignFilter');
    if (campaignFilter && translations[currentLanguage]) {
        const allLabel = campaignFilter.querySelector('label:first-child');
        if (allLabel) {
            allLabel.innerHTML = allLabel.innerHTML.replace('All', translations[currentLanguage]['filter_all'] || 'All');
        }
        
        // Update campaign names
        const campaignLabels = campaignFilter.querySelectorAll('label:not(:first-child):not(:last-child)');
        campaignLabels.forEach((label, index) => {
            if (index < mainlineCampaigns.length) {
                const campaign = mainlineCampaigns[index];
                const translatedName = getTranslatedCampaignName(campaign.key);
                const checkbox = label.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    label.innerHTML = `<input type="checkbox" name="campaign" value="${campaign.value}" ${checkbox.checked ? 'checked' : ''}> ${translatedName}`;
                }
            }
        });
        
        const otherLabel = campaignFilter.querySelector('label:last-child');
        if (otherLabel) {
            otherLabel.innerHTML = otherLabel.innerHTML.replace('Other', translations[currentLanguage]['filter_other'] || 'Other');
        }
    }
    
    // Update universe filter labels
    const universeFilter = document.getElementById('universeFilter');
    if (universeFilter && translations[currentLanguage]) {
        const allLabel = universeFilter.querySelector('label:first-child');
        if (allLabel) {
            allLabel.innerHTML = allLabel.innerHTML.replace('All', translations[currentLanguage]['filter_all'] || 'All');
        }
        
        const otherLabel = universeFilter.querySelector('label:last-child');
        if (otherLabel) {
            otherLabel.innerHTML = otherLabel.innerHTML.replace('Other', translations[currentLanguage]['filter_other'] || 'Other');
        }
    }
}


// Fonction pour appliquer les filtres (updated)
function applyFilters() {
    // Get selected categories (excluding "all" if other specific ones are selected)
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    let selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
    
    // Handle "all" logic for categories
    if (selectedCategories.includes('all') && selectedCategories.length > 1) {
        // If "all" is checked with other specific categories, remove "all"
        selectedCategories = selectedCategories.filter(cat => cat !== 'all');
    }
    activeFilters.categories = selectedCategories;
    
    // Get selected campaigns
    const campaignCheckboxes = document.querySelectorAll('input[name="campaign"]:checked');
    let selectedCampaigns = Array.from(campaignCheckboxes).map(cb => cb.value);
    
    // Handle "all" logic for campaigns
    if (selectedCampaigns.includes('all') && selectedCampaigns.length > 1) {
        selectedCampaigns = selectedCampaigns.filter(camp => camp !== 'all');
    }
    activeFilters.campaigns = selectedCampaigns;
    
    // Get selected universes
    const universeCheckboxes = document.querySelectorAll('input[name="universe"]:checked');
    let selectedUniverses = Array.from(universeCheckboxes).map(cb => cb.value);
    
    // Handle "all" logic for universes
    if (selectedUniverses.includes('all') && selectedUniverses.length > 1) {
        selectedUniverses = selectedUniverses.filter(univ => univ !== 'all');
    }
    activeFilters.universes = selectedUniverses;
    
    // Regenerate timeline with filters applied
    generateTimeline();
    
    console.log('Filters applied:', activeFilters);
}
// Fonction pour réinitialiser les filtres (updated)
function resetFilters() {
    // Check all "All" checkboxes and uncheck others
    document.querySelectorAll('input[name="category"][value="all"]').forEach(cb => {
        cb.checked = true;
    });
    document.querySelectorAll('input[name="category"]:not([value="all"])').forEach(cb => {
        cb.checked = false;
    });
    
    document.querySelectorAll('input[name="campaign"][value="all"]').forEach(cb => {
        cb.checked = true;
    });
    document.querySelectorAll('input[name="campaign"]:not([value="all"])').forEach(cb => {
        cb.checked = false;
    });
    
    document.querySelectorAll('input[name="universe"][value="all"]').forEach(cb => {
        cb.checked = true;
    });
    document.querySelectorAll('input[name="universe"]:not([value="all"])').forEach(cb => {
        cb.checked = false;
    });
    
    // FIXED: Reset active filters to show everything using 'all'
    activeFilters = {
        categories: ['all'],
        campaigns: ['all'],
        universes: ['all']
    };
    
    // Regenerate timeline
    generateTimeline();
    
    console.log('Filters reset');
}

// Fonction pour vérifier si un élément passe les filtres (updated)
function passesFilters(item) {
    // Check category filter
    if (!activeFilters.categories.includes('all')) {
        const itemCategory = item.category || 'other';
        if (!activeFilters.categories.includes(itemCategory) && 
            !(activeFilters.categories.includes('other') && !['mainline', 'umc', 'mainline uncannon'].includes(itemCategory))) {
            return false;
        }
    }
    
    // Check universe filter
    if (!activeFilters.universes.includes('all')) {
        const itemUniverse = item.univers || 'other';
        if (!activeFilters.universes.includes(itemUniverse) && 
            !(activeFilters.universes.includes('other') && itemUniverse !== 'wesnoth')) {
            return false;
        }
    }
    
    // Check campaign filter
    if (!activeFilters.campaigns.includes('all')) {
        // If item has no related campaigns and we're filtering by campaigns
        if (!item.related_campaign_events || item.related_campaign_events === 'aucune') {
            // Check if "other" is selected for campaigns
            if (!activeFilters.campaigns.includes('other')) {
                return false;
            }
        } else {
            // Check if any of the item's campaigns match the selected campaigns
            const itemCampaigns = Array.isArray(item.related_campaign_events) 
                ? item.related_campaign_events 
                : [item.related_campaign_events];
            
            const hasMatchingCampaign = itemCampaigns.some(campaign => 
                activeFilters.campaigns.includes(campaign)
            );
            
            // Also check if "other" is selected and no mainline campaign matches
            const hasOtherCampaign = activeFilters.campaigns.includes('other') && 
                !itemCampaigns.some(campaign => mainlineCampaigns.includes(campaign));
            
            if (!hasMatchingCampaign && !hasOtherCampaign) {
                return false;
            }
        }
    }
    
    return true;
}

// Update the generateTimeline function to apply filters
function generateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    // Filter timeline data based on active filters
    const filteredData = timelineData.filter(passesFilters);
    
    if (filteredData.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'WTL-timeline-manager-no-results';
        noResults.textContent = translations[currentLanguage] ? 
            (translations[currentLanguage]['no_filter_results'] || 'Aucun événement ne correspond aux filtres sélectionnés') : 
            'Aucun événement ne correspond aux filtres sélectionnés';
        timeline.appendChild(noResults);
        return;
    }
    
    filteredData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `WTL-timeline-manager-timeline-item ${index % 2 === 0 ? 'WTL-timeline-manager-left' : 'WTL-timeline-manager-right'}`;
        timelineItem.dataset.era = item.era;
        
        // Use translation keys for title
        const translationKey = item.translationKey;
        const title = getTranslatedTitle(translationKey, item.title);
            
        // Use translated description with proper HTML structure
        const description = getTranslatedDescription(translationKey, item.description);
        
        timelineItem.innerHTML = `
            <div class="WTL-timeline-manager-timeline-marker">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="WTL-timeline-manager-timeline-content">
                <div class="WTL-timeline-manager-year"><i class="fas ${item.icon}"></i> ${item.year}</div>
                <div class="WTL-timeline-manager-title">${title}</div>
                <div class="WTL-timeline-manager-description">${description}</div>
                <div class="WTL-timeline-manager-meta">
                    <span class="WTL-timeline-manager-meta-item">Catégorie: ${item.category}</span>
                    <span class="WTL-timeline-manager-meta-item">Univers: ${item.univers}</span>
                    ${item.related_campaign_events && item.related_campaign_events !== 'aucune' ? 
                        `<span class="WTL-timeline-manager-meta-item">Campagnes: ${Array.isArray(item.related_campaign_events) ? item.related_campaign_events.join(', ') : item.related_campaign_events}</span>` : 
                        ''
                    }
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    // Animation d'apparition progressive
    const timelineItems = document.querySelectorAll('.WTL-timeline-manager-timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('WTL-timeline-manager-visible');
        }, 100 * index);
    });

    console.log('Timeline generated with', timelineItems.length, 'filtered items');
}

// Fonction pour générer les mots-clés (mise à jour pour utiliser les données filtrées)
function generateKeywords() {
    const keywordsContainer = document.getElementById('keywordsContainer');
    keywordsContainer.innerHTML = '';
    
    // Réinitialiser l'ensemble des mots-clés
    keywords.clear();
    
    // Extraire tous les mots-clés des éléments de timeline générés (filtrés)
    const timelineItems = document.querySelectorAll('.WTL-timeline-manager-timeline-item');
    
    timelineItems.forEach(item => {
        const content = item.querySelector('.WTL-timeline-manager-timeline-content');
        if (content) {
            // Extraire les personnes
            const persons = content.querySelectorAll('.WTL-timeline-manager-person');
            persons.forEach(person => {
                const personName = person.getAttribute('data-person');
                if (personName) {
                    keywords.add(personName);
                }
            });
            
            // Extraire les lieux
            const places = content.querySelectorAll('.WTL-timeline-manager-place');
            places.forEach(place => {
                const placeName = place.getAttribute('data-place');
                if (placeName) {
                    keywords.add(placeName);
                }
            });
            
            // Extraire les factions
            const factions = content.querySelectorAll('.WTL-timeline-manager-faction');
            factions.forEach(faction => {
                const factionName = faction.getAttribute('data-faction');
                if (factionName) {
                    keywords.add(factionName);
                }
            });
        }
    });
    
    // Créer les boutons de mots-clés
    keywords.forEach(keyword => {
        const keywordElement = document.createElement('div');
        keywordElement.className = 'WTL-timeline-manager-keyword';
        keywordElement.textContent = keyword;
        keywordElement.dataset.keyword = keyword;
        keywordsContainer.appendChild(keywordElement);
    });

    console.log(`Generated ${keywords.size} keywords:`, Array.from(keywords));
}

// Simple function to get translated description
function getTranslatedDescription(translationKey, originalHtml) {
    return translations[currentLanguage] && translations[currentLanguage][translationKey + '_desc'] 
        ? translations[currentLanguage][translationKey + '_desc'] 
        : originalHtml;
}

// Simple function to get translated title
function getTranslatedTitle(translationKey, originalTitle) {
    return translations[currentLanguage] && translations[currentLanguage][translationKey + '_title'] 
        ? translations[currentLanguage][translationKey + '_title'] 
        : originalTitle;
}

// Fonction pour réinitialiser tous les surlignements
function resetHighlights() {
    console.log('Resetting highlights...');
    
    // Remove active class from keywords
    document.querySelectorAll('.WTL-timeline-manager-keyword.WTL-timeline-manager-active').forEach(item => {
        item.classList.remove('WTL-timeline-manager-active');
    });
    
    // Remove highlighted class from all elements
    document.querySelectorAll('.WTL-timeline-manager-highlighted').forEach(item => {
        item.classList.remove('WTL-timeline-manager-highlighted');
    });
    
    // Show all timeline items - FIXED: Remove inline styles and ensure all items are visible
    document.querySelectorAll('.WTL-timeline-manager-timeline-item').forEach(item => {
        item.style.display = 'flex';
        item.style.opacity = '1';
        item.classList.add('WTL-timeline-manager-visible');
    });
    
    // Remove any no-results message
    const noResults = document.querySelector('.WTL-timeline-manager-no-results');
    if (noResults) {
        noResults.remove();
    }
    
    console.log('Highlights reset successfully');
}

// Fonction pour surligner tous les éléments correspondants
function highlightRelatedElements(keyword) {
    console.log(`Highlighting keyword: "${keyword}"`);
    
    resetHighlights();
    
    // Activer le bouton du mot-clé
    const keywordButton = document.querySelector(`.WTL-timeline-manager-keyword[data-keyword="${keyword}"]`);
    if (keywordButton) {
        keywordButton.classList.add('WTL-timeline-manager-active');
        console.log(`Activated keyword button: ${keyword}`);
    }
    
    // Trouver tous les éléments de timeline qui contiennent ce mot-clé
    const timelineItems = document.querySelectorAll('.WTL-timeline-manager-timeline-item');
    let hasVisibleItems = false;
    
    timelineItems.forEach(item => {
        const content = item.querySelector('.WTL-timeline-manager-timeline-content');
        if (content) {
            // Check if content contains the keyword in any highlighted element
            const hasKeyword = content.querySelector(`[data-person="${keyword}"], [data-place="${keyword}"], [data-faction="${keyword}"]`);
            
            if (hasKeyword) {
                item.classList.add('WTL-timeline-manager-highlighted');
                item.classList.add('WTL-timeline-manager-visible');
                item.style.display = 'flex';
                item.style.opacity = '1';
                hasVisibleItems = true;
                console.log(`Highlighted timeline item: ${item.querySelector('.WTL-timeline-manager-title').textContent}`);
            } else {
                // FIXED: Use CSS class to hide instead of inline styles
                item.classList.remove('WTL-timeline-manager-visible');
                item.style.display = 'none';
            }
        }
    });
    
    // Surligner tous les éléments correspondants dans les descriptions
    const allMatching = document.querySelectorAll(`[data-person="${keyword}"], [data-place="${keyword}"], [data-faction="${keyword}"]`);
    console.log(`Found ${allMatching.length} matching elements for keyword: ${keyword}`);
    
    allMatching.forEach(item => {
        item.classList.add('WTL-timeline-manager-highlighted');
    });
    
    // Si aucun élément n'est visible, afficher un message
    if (!hasVisibleItems) {
        const timeline = document.getElementById('timeline');
        const noResults = document.createElement('div');
        noResults.className = 'WTL-timeline-manager-no-results';
        noResults.textContent = translations[currentLanguage] ? 
            (translations[currentLanguage]['no_results'] || 'Aucun résultat trouvé pour ce mot-clé') : 
            'Aucun résultat trouvé pour ce mot-clé';
        noResults.style.textAlign = 'center';
        noResults.style.padding = '40px 20px';
        noResults.style.color = 'var(--WTL-timeline-manager-text-color)';
        noResults.style.fontStyle = 'italic';
        noResults.style.gridColumn = '1 / -1';
        timeline.appendChild(noResults);
        console.log('No results message displayed');
    }
    
    console.log(`Highlighting completed for: ${keyword}`);
}

// Fonction pour ajouter les écouteurs d'événements pour le surlignement (une seule fois)
function addHighlightEventListeners() {
    // If listeners are already added, don't add them again
    if (highlightListenersAdded) {
        console.log('Highlight listeners already added, skipping...');
        return;
    }
    
    console.log('Adding highlight event listeners...');
    
    // Use event delegation for better performance and to handle dynamically created elements
    const keywordsContainer = document.getElementById('keywordsContainer');
    const timeline = document.getElementById('timeline');
    
    if (keywordsContainer) {
        keywordsContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('WTL-timeline-manager-keyword')) {
                highlightRelatedElements(event.target.dataset.keyword);
            }
        });
    }
    
    if (timeline) {
        timeline.addEventListener('click', function(event) {
            if (event.target.classList.contains('WTL-timeline-manager-person')) {
                highlightRelatedElements(event.target.dataset.person);
            } else if (event.target.classList.contains('WTL-timeline-manager-place')) {
                highlightRelatedElements(event.target.dataset.place);
            } else if (event.target.classList.contains('WTL-timeline-manager-faction')) {
                highlightRelatedElements(event.target.dataset.faction);
            }
        });
    }
    
    // Bouton de réinitialisation
    const resetButton = document.getElementById('resetHighlights');
    if (resetButton) {
        resetButton.addEventListener('click', resetHighlights);
    }
    
    // Bouton pour afficher/masquer tout
    const toggleButton = document.getElementById('toggleAll');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const timelineItems = document.querySelectorAll('.WTL-timeline-manager-timeline-item');
            const allVisible = Array.from(timelineItems).every(item => 
                item.style.display !== 'none' && item.classList.contains('WTL-timeline-manager-visible')
            );
            
            timelineItems.forEach(item => {
                if (allVisible) {
                    item.classList.remove('WTL-timeline-manager-visible');
                    item.style.display = 'none';
                } else {
                    item.classList.add('WTL-timeline-manager-visible');
                    item.style.display = 'flex';
                }
            });
            
            // Réinitialiser les surlignements
            resetHighlights();
        });
    }
    
    highlightListenersAdded = true;
    console.log('Highlight event listeners added successfully!');
}

// Make functions globally accessible
window.generateTimeline = generateTimeline;
window.generateKeywords = generateKeywords;
window.addHighlightEventListeners = addHighlightEventListeners;
window.resetHighlights = resetHighlights;
window.highlightRelatedElements = highlightRelatedElements;