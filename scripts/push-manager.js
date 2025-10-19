// Simple Push Notifications Manager for Wesnoth Timeline
const WTLPushManager = {
    permissionState: null,
    
    // Initialize push notifications
    async init() {
        console.log('Initializing Simple Push Notifications...');
        
        // Check if notifications are supported
        if (!('Notification' in window)) {
            console.log('Notifications are not supported in this browser');
            this.updateUIState('unsupported');
            return false;
        }
        
        // Check current permission state
        this.permissionState = Notification.permission;
        this.updateUIState(this.permissionState);
        
        // If already granted, we're good to go
        if (this.permissionState === 'granted') {
            console.log('Notifications already enabled');
            this.updateUIState('granted');
        }
        
        return true;
    },
    
    // Request notification permission (simplified)
    async requestPermission() {
        try {
            console.log('Requesting notification permission...');
            
            const permission = await Notification.requestPermission();
            this.permissionState = permission;
            this.updateUIState(permission);
            
            if (permission === 'granted') {
                console.log('Notification permission granted');
                
                // Show welcome notification
                this.showNotification(
                    'Welcome to Wesnoth Timeline!',
                    'You will now receive updates about timeline changes and new content.'
                );
                
                return true;
            } else {
                console.log('Notification permission denied:', permission);
                return false;
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            return false;
        }
    },
    
    // Disable notifications
    async disableNotifications() {
        // For local notifications, we just update the UI state
        // There's no subscription to cancel since we're not using push
        this.permissionState = 'default';
        this.updateUIState('default');
        
        this.showLocalAlert('Notifications Disabled', 'You will no longer receive notification alerts.');
        return true;
    },
    
    // Show local notification (this works without any server setup)
    async showNotification(title, body, options = {}) {
        if (this.permissionState !== 'granted') {
            console.log('Cannot show notification: permission not granted');
            return false;
        }
        
        try {
            const notification = new Notification(title, {
                body: body,
                icon: '/assets/icons/pwa-icons/icon-192x192.png',
                badge: '/assets/icons/pwa-icons/icon-72x72.png',
                tag: 'wesnoth-timeline',
                ...options
            });
            
            // Handle notification click
            notification.onclick = function() {
                console.log('Notification clicked');
                window.focus();
                this.close();
            };
            
            // Auto-close after 5 seconds
            setTimeout(() => {
                notification.close();
            }, 5000);
            
            console.log('Local notification shown:', title);
            return true;
        } catch (error) {
            console.error('Error showing notification:', error);
            return false;
        }
    },
    
    // Show local alert (fallback when notifications are disabled)
    showLocalAlert(title, message) {
        // Create a simple modal alert
        const alertDiv = document.createElement('div');
        alertDiv.className = 'WTL-timeline-manager-local-alert';
        alertDiv.innerHTML = `
            <div class="WTL-timeline-manager-alert-content">
                <h4>${title}</h4>
                <p>${message}</p>
                <button onclick="this.parentElement.parentElement.remove()">OK</button>
            </div>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (alertDiv.parentElement) {
                alertDiv.remove();
            }
        }, 3000);
    },
    
    // Update UI based on permission state
    updateUIState(state) {
        const notificationToggle = document.getElementById('notificationToggle');
        const notificationStatus = document.getElementById('notificationStatus');
        
        if (!notificationToggle || !notificationStatus) return;
        
        switch (state) {
            case 'granted':
                notificationToggle.checked = true;
                notificationStatus.textContent = this.getTranslation('notifications_enabled') || 'Notifications enabled';
                notificationStatus.className = 'WTL-timeline-manager-notification-status enabled';
                break;
                
            case 'denied':
                notificationToggle.checked = false;
                notificationStatus.textContent = this.getTranslation('notifications_blocked') || 'Notifications blocked';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
                
            case 'unsupported':
                notificationToggle.checked = false;
                notificationToggle.disabled = true;
                notificationStatus.textContent = this.getTranslation('notifications_unsupported') || 'Notifications not supported';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
                
            default:
                notificationToggle.checked = false;
                notificationStatus.textContent = this.getTranslation('notifications_disabled') || 'Notifications disabled';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
        }
    },
    
    // Get translation (simple fallback)
    getTranslation(key) {
        return window.translations && window.translations[currentLanguage] && window.translations[currentLanguage][key];
    },
    
    // Test notification
    async testNotification() {
        const title = this.getTranslation('notification_test_title') || 'Test Notification';
        const body = this.getTranslation('notification_test_body') || 'This is a test notification from Wesnoth Timeline.';
        
        return await this.showNotification(title, body, {
            requireInteraction: true // Keep open until user interacts
        });
    },
    
    // Show timeline update notification
    async showTimelineUpdate(newEventsCount = 1) {
        const title = this.getTranslation('notification_update_title') || 'Timeline Updated';
        const body = this.getTranslation('notification_update_body') || `New historical events have been added to the timeline.`;
        
        return await this.showNotification(title, body);
    },
    
    // Show daily digest
    async showDailyDigest() {
        const title = this.getTranslation('notification_digest_title') || 'Wesnoth History Digest';
        const body = this.getTranslation('notification_digest_body') || 'Explore today\'s featured events from Wesnoth history.';
        
        return await this.showNotification(title, body, {
            requireInteraction: true
        });
    },
    
    // Check if we should show notification prompt
    shouldShowPrompt() {
        // Only show prompt once per week
        const lastPrompt = localStorage.getItem('lastNotificationPrompt');
        if (lastPrompt) {
            const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
            if (parseInt(lastPrompt) > oneWeekAgo) {
                return false;
            }
        }
        
        return this.permissionState === 'default'; // Only if not decided yet
    },
    
    // Show permission prompt
    showPermissionPrompt() {
        if (!this.shouldShowPrompt()) return;
        
        const promptDiv = document.createElement('div');
        promptDiv.className = 'WTL-timeline-manager-notification-prompt';
        promptDiv.innerHTML = `
            <h4>${this.getTranslation('notification_prompt_title') || 'Stay Updated'}</h4>
            <p>${this.getTranslation('notification_prompt_message') || 'Enable notifications to receive updates about new timeline events and features.'}</p>
            <div class="WTL-timeline-manager-notification-prompt-buttons">
                <button class="WTL-timeline-manager-notification-prompt-btn secondary" onclick="this.closest('.WTL-timeline-manager-notification-prompt').remove(); localStorage.setItem('lastNotificationPrompt', Date.now());">
                    ${this.getTranslation('notification_prompt_later') || 'Later'}
                </button>
                <button class="WTL-timeline-manager-notification-prompt-btn primary" onclick="WTLPushManager.requestPermission().then(success => { if(success) this.closest('.WTL-timeline-manager-notification-prompt').remove(); });">
                    ${this.getTranslation('notification_prompt_enable') || 'Enable'}
                </button>
            </div>
        `;
        
        document.body.appendChild(promptDiv);
        
        // Record that we showed the prompt
        localStorage.setItem('lastNotificationPrompt', Date.now());
    }
};

// Make it globally available
window.WTLPushManager = WTLPushManager;