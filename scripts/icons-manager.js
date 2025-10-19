// Icons Manager for Wesnoth Timeline
// Provides a fallback system for icons: Local assets -> Base64 icons -> FontAwesome

const WTLIconsManager = {
    // Base64 encoded icons as fallback
    base64Icons: {
        'tree': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjc1IDE4LjA2MjVDMTkuNzUgMTguMDYyNSAxOSAxOC44MTI1IDE5IDE5LjgxMjVDMTkgMjAuODEyNSAxOS43NSAyMS41NjI1IDIwLjc1IDIxLjU2MjVDMjEuNzUgMjEuNTYyNSAyMi41IDIwLjgxMjUgMjIuNSAxOS44MTI1QzIyLjUgMTguODEyNSAyMS43NSAxOC4wNjI1IDIwLjc1IDE4LjA2MjVaTTE2IDguMDYyNUMxNSA4LjA2MjUgMTQuMjUgOC44MTI1IDE0LjI1IDkuODEyNUMxNC4yNSAxMC44MTI1IDE1IDExLjU2MjUgMTYgMTEuNTYyNUMxNyAxMS41NjI1IDE3Ljc1IDEwLjgxMjUgMTcuNzUgOS44MTI1QzE3Ljc1IDguODEyNSAxNyA4LjA2MjUgMTYgOC4wNjI1Wk0xMC43NSAyQzkuNzUgMiA5IDIuNzUgOSAzLjc1QzkgNC43NSA5Ljc1IDUuNSAxMC43NSA1LjVDMTEuNzUgNS41IDEyLjUgNC43NSAxMi41IDMuNzVDMTIuNSAyLjc1IDExLjc1IDIgMTAuNzUgMlpNNi41IDE0LjA2MjVDNS41IDE0LjA2MjUgNC43NSAxNC44MTI1IDQuNzUgMTUuODEyNUM0Ljc1IDE2LjgxMjUgNS41IDE3LjU2MjUgNi41IDE3LjU2MjVDNy41IDE3LjU2MjUgOC4yNSAxYuODEyNSA4LjI1IDE1LjgxMjVDOC4yNSAxNC44MTI1IDcuNSAxNC4wNjI1IDYuNSAxNC4wNjI1Wk0xMi43NSAxMi4wNjI1QzExLjc1IDEyLjA2MjUgMTEgMTIuODEyNSAxMSAxMy44MTI1QzExIDE0LjgxMjUgMTEuNzUgMTUuNTYyNSAxMi43NSAxNS41NjI1QzEzLjc1IDE1LjNTYyNSAxNC41IDE0LjUgMTMuODEyNUMxNC41IDEyLjgxMjUgMTMuNzUgMTIuMDYyNSAxMi43NSAxMi4wNjI1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=',
        'skull': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDlDNSAxMS4zOCA2LjE5IDEzLjM3IDggMTQuMjRWMTZIMTZWMTAuMjRDMTcuODEgOS4zNyAxOSA3LjM4IDE5IDVDMTkgMi44NyAxNi4xMyAyIDEyIDJaTTkgMTBDOC40NSAxMCA4IDkuNTUgOCA5QzggOC40NSA4LjQ1IDggOSA4QzkuNTUgOCAxMCA4LjQ1IDEwIDlDMTAgOS41NSA5LjU1IDEwIDkgMTBaTTE1IDEwQzE0LjQ1IDEwIDE0IDkuNTUgMTQgOUMxNCA4LjQ1IDE0LjQ1IDggMTUgOEMxNS41NSA4IDE2IDguNDUgMTYgOUMxNiA5LjU1IDE1LjU1IDEwIDE1IDEwWk0xMCAxNkgxNFYxOEgxMFYxNloiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K',
        'ship': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDExSDZDMi42OSAxMSAwIDEzLjY5IDAgMTdWMTlIMTJWMTdIMTJWMTZIMTJWMTVIMTJWMTNIMTJWMTJIMTJWMTFIMTJWMTBIMTJWOUgxMlY4SDEyVjZIMTJWNUgxMlY0SDEyVjNIMTJWMTZIMjJWMTRDMjIgMTIuOSAyMS4xIDEyIDIwIDEySDE4VjExWk02IDEzSDhWMTdINlYxM1pNMTAgMTNIMTJWMTdIMTBWMTNaTTE0IDEzSDE2VjE3SDE0VjEzWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=',
        'crown': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTZMMyA1TDEwIDhMMTIgMkwxNCA4TDIxIDVMMTkgMTZINVpNNSAxOUgxOVYyMUg1VjE5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=',
        'users': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDRDMTAuNDggNCA2IDguNDggNiAxNEM2IDE5LjUyIDEwLjQ4IDI0IDE2IDI0QzIxLjUyIDI0IDI2IDE5LjUyIDI2IDE0QzI2IDguNDggMjEuNTIgNCAxNiA0Wk0xMCA1QzcuNzkgNSA2IDYuNzkgNiA5QzYgMTEuMjEgNy43OSAxMyAxMCAxM0MxMi4yMSAxMyAxNCAxMS4yMSAxNCA5QzE0IDYuNzkgMTIuMjEgNSAxMCA1Wk0yMiA1QzE5Ljc5IDUgMTggNi43OSAxOCA5QzE4IDExLjIxIDE5Ljc5IDEzIDIyIDEzQzI0LjIxIDEzIDI2IDExLjIxIDI2IDlDMjYgNi43OSAyNC4yMSA1IDIyIDVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==',
        'flag': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjQgNkwyMSA0VjIwTDE0LjQgMThWMTJMNyAxNFYwTDE0LjQgMlY2Wk0xNC40IDE4TDIxIDIwVjRMMTQuNCA2VjE4WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=',
        'helmet-battle': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgMjBDNy41OCAyMCA0IDE2LjQyIDQgMTJDNCA3LjU4IDcuNTggNCAxMiA0QzE2LjQyIDQgMjAgNy41OCAyMCAxMkMyMCAxNi40MiAxNi40MiAyMCAxMiAyMFpNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJDNiAxNS4zMSA4LjY5IDE4IDEyIDE4QzE1LjMxIDE4IDE4IDE1LjMxIDE4IDEyQzE4IDguNjkgMTUuMzEgNiAxMiA2Wk0xMiAxNkM5Ljc5IDE2IDggMTQuMjEgOCAxMkM4IDkuNzkgOS43OSA4IDEyIDhDMTQuMjEgOCAxNiA5Ljc5IDE2IDEyQzE2IDE0LjIxIDE0LjIxIDE2IDEyIDE2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=',
        'wind': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTVIMjFWMThIM1YxNVpNMyA3SDIxVjEwSDNWN1pNMTMgMTFIMjFWMTRIMTNWMTFaTTMgMTlIMjFWMjJIM1YxOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K',
        'shield-alt': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMiA3VjEyQzIgMTcgNS41IDIxLjM4IDEwLjUgMjIuOUwxMiAyM0wxMy41IDIyLjlDMTguNSAyMS4zOCAyMiAxNyAyMiAxMlY3TDEyIDJaTTEyIDIwQzcuNTggMTggNCAxNC40MiA0IDEwVjguNUwxMiA1TDIwIDguNVYxMEMyMCAxNC40MiAxNi40MiAxOCAxMiAyMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K',
        'monument': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDJIMTBWNEgxNFYyWk0xMiA2QzEwLjkgNiAxMCA2LjkgMTAgOEMxMCA5LjEgMTAuOSAxMCAxMiAxMEMxMy4xIDEwIDE0IDkuMSAxNCA4QzE0IDYuOSAxMy4xIDYgMTIgNlpNMTYgMTBIMThWMTJIMTZWMTBaTTYgMTBIOFYxMkg2VjEwWk0yMCAxNEg0VjE2SDIwVjE0Wk0xOCAxOEg2VjIwSDE4VjE4WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo='
	},
	
    // Icon mapping from FontAwesome classes to our icon system
    iconMapping: {
        'fa-tree': 'tree',
        'fa-skull': 'skull',
        'fa-ship': 'ship',
        'fa-crown': 'crown',
        'fa-users': 'users',
        'fa-flag': 'flag',
        'fa-helmet-battle': 'helmet-battle',
        'fa-wind': 'wind',
        'fa-shield-alt': 'shield-alt',
        'fa-monument': 'monument'
	},
	
    // Cache for loaded icons to avoid repeated requests
    iconCache: new Map(),
	
    /**
		* Get icon HTML based on the strategy: Local -> Base64 -> FontAwesome
		* @param {string} iconClass - The FontAwesome icon class
		* @param {string} fallbackText - Text to show if no icon is available
		* @returns {Promise<string>} HTML string for the icon
	*/
    async getIconHTML(iconClass, fallbackText = '') {
        // Check cache first
        if (this.iconCache.has(iconClass)) {
            return this.iconCache.get(iconClass);
		}
		
        const iconKey = this.iconMapping[iconClass] || iconClass.replace('fa-', '');
        let iconHTML = '';
		
        try {
            // Strategy 1: Check local assets
            iconHTML = await this.tryLocalIcon(iconKey);
            
            if (!iconHTML) {
                // Strategy 2: Check base64 icons
                iconHTML = this.tryBase64Icon(iconKey);
                
                if (!iconHTML) {
                    // Strategy 3: Fallback to FontAwesome
                    iconHTML = this.getFontAwesomeIcon(iconClass);
				}
			}
			} catch (error) {
            console.warn(`Failed to load icon ${iconClass}:`, error);
            iconHTML = this.getFallbackIcon(fallbackText);
		}
		
        // Cache the result
        this.iconCache.set(iconClass, iconHTML);
        return iconHTML;
	},
	
    /**
		* Try to load icon from local assets
		* @param {string} iconKey 
		* @returns {Promise<string>}
	*/
	async tryLocalIcon(iconKey) {
		const iconPath = `assets/icons/style-icons/${iconKey}.png`;
		
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				resolve(`<img src="${iconPath}" alt="${iconKey}" class="WTL-timeline-manager-custom-icon">`);
			};
			img.onerror = () => {
				resolve(''); // Return empty if local icon not found
			};
			img.src = iconPath;
		});
	},
	
    /**
		* Try to get base64 icon
		* @param {string} iconKey 
		* @returns {string}
	*/
    tryBase64Icon(iconKey) {
        const base64Icon = this.base64Icons[iconKey];
        if (base64Icon) {
            return `<img src="${base64Icon}" alt="${iconKey}" class="WTL-timeline-manager-custom-icon">`;
		}
        return '';
	},
	
    /**
		* Get FontAwesome icon as fallback
		* @param {string} iconClass 
		* @returns {string}
	*/
    getFontAwesomeIcon(iconClass) {
        return `<i class="fas ${iconClass}"></i>`;
	},
	
    /**
		* Get fallback icon with text
		* @param {string} text 
		* @returns {string}
	*/
    getFallbackIcon(text) {
        return `<span class="WTL-timeline-manager-fallback-icon">${text.charAt(0).toUpperCase()}</span>`;
	},
	
    /**
		* Preload all icons used in the timeline
		* @param {Array} timelineData 
	*/
    async preloadIcons(timelineData) {
        const uniqueIcons = [...new Set(timelineData.map(item => item.icon))];
        const preloadPromises = uniqueIcons.map(iconClass => 
            this.getIconHTML(iconClass)
		);
        
        await Promise.all(preloadPromises);
        console.log(`Preloaded ${uniqueIcons.length} icons`);
	},
	
    /**
		* Update timeline items with custom icons
	*/
    async updateTimelineIcons() {
        const timelineItems = document.querySelectorAll('.WTL-timeline-manager-timeline-item');
        
        for (const item of timelineItems) {
            const iconElement = item.querySelector('.fa-tree, .fa-skull, .fa-ship, .fa-crown, .fa-users, .fa-flag, .fa-helmet-battle, .fa-wind, .fa-shield-alt, .fa-monument');
            if (iconElement) {
                const iconClass = Array.from(iconElement.classList)
				.find(cls => cls.startsWith('fa-'));
                
                if (iconClass) {
                    const iconHTML = await this.getIconHTML(iconClass);
                    iconElement.outerHTML = iconHTML;
				}
			}
		}
	},
	
    /**
		* Initialize the icons manager
		* @param {Array} timelineData 
	*/
    async init(timelineData) {
        console.log('Initializing Icons Manager...');
        await this.preloadIcons(timelineData);
        await this.updateTimelineIcons();
        console.log('Icons Manager initialized successfully');
	}
};

// Make it globally available
window.WTLIconsManager = WTLIconsManager;