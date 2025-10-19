const WTLPushManager = {
    
    permissionState: null,
    isSupported: false,
    notificationsEnabled: false,
    
    // Initialize push notifications
    async init() {
        console.log('Initializing Push Notifications...');
        
        // Check if notifications and service workers are supported
        if (!('Notification' in window) || !('serviceWorker' in navigator)) {
            console.log('Notifications are not supported in this browser');
            this.updateUIState('unsupported');
            return false;
        }
        
        this.isSupported = true;
        
        // Check current permission state
        this.permissionState = Notification.permission;
        
        // Load user preference from localStorage
        const userPreference = localStorage.getItem('wesnothNotificationsEnabled');
        this.notificationsEnabled = userPreference === 'true' && this.permissionState === 'granted';
        
        this.updateUIState(this.permissionState);
        
        // If already granted, we're good to go
        if (this.permissionState === 'granted') {
            console.log('Notifications already enabled');
        }
        
        return true;
    },
    
    // Show permission prompt
    showPermissionPrompt() {
        if (!this.isSupported) {
            return;
        }
        
        // Only show prompt if permission hasn't been decided yet and user hasn't disabled
        if (this.permissionState === 'default' && this.notificationsEnabled !== false) {
            console.log('Showing notification permission prompt');
            
            // Show a gentle prompt to encourage enabling notifications
            this.showLocalAlert(
                this.getTranslation('notification_prompt_title') || 'Stay Updated',
                this.getTranslation('notification_prompt_message') || 'Get notified about new timeline events and updates',
                [
                    {
                        text: this.getTranslation('notification_prompt_enable') || 'Enable',
                        action: () => this.requestPermission()
                    },
                    {
                        text: this.getTranslation('notification_prompt_later') || 'Later',
                        action: () => {
                            console.log('User deferred notification permission');
                            // Remember user choice for a while
                            localStorage.setItem('wesnothNotificationPromptDeferred', 'true');
                            setTimeout(() => {
                                localStorage.removeItem('wesnothNotificationPromptDeferred');
                            }, 7 * 24 * 60 * 60 * 1000); // 7 days
                        }
                    }
                ]
            );
        }
    },
    
    // Request notification permission
    async requestPermission() {
        if (!this.isSupported) {
            this.showLocalAlert('Not Supported', 'Notifications are not supported in your browser.');
            return false;
        }
        
        try {
            console.log('Requesting notification permission...');
            
            const permission = await Notification.requestPermission();
            this.permissionState = permission;
            
            if (permission === 'granted') {
                console.log('Notification permission granted');
                this.notificationsEnabled = true;
                localStorage.setItem('wesnothNotificationsEnabled', 'true');
                
                // Show welcome notification through service worker
                this.showNotification(
                    'Welcome to Wesnoth Timeline!',
                    'You will now receive updates about timeline changes and new content.'
                );
                
                this.updateUIState(permission);
                return true;
            } else {
                console.log('Notification permission denied:', permission);
                this.notificationsEnabled = false;
                localStorage.setItem('wesnothNotificationsEnabled', 'false');
                this.updateUIState(permission);
                this.showLocalAlert('Permission Denied', 'You need to allow notifications to receive alerts.');
                return false;
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            this.showLocalAlert('Error', 'Failed to request notification permission.');
            return false;
        }
    },
    
    // Disable notifications
    async disableNotifications() {
        this.notificationsEnabled = false;
        localStorage.setItem('wesnothNotificationsEnabled', 'false');
        this.updateUIState(this.permissionState);
        this.showLocalAlert('Notifications Disabled', 'You will no longer receive notification alerts.');
        return true;
    },
    
    // Enable notifications
    async enableNotifications() {
        if (this.permissionState === 'granted') {
            this.notificationsEnabled = true;
            localStorage.setItem('wesnothNotificationsEnabled', 'true');
            this.updateUIState(this.permissionState);
            return true;
        } else {
            return await this.requestPermission();
        }
    },
    
    // Show notification using service worker
    async showNotification(title, body, options = {}) {
        // Check if notifications are enabled by user
        if (!this.notificationsEnabled) {
            console.log('Notifications disabled by user');
            return false;
        }
        
        if (!this.isSupported || this.permissionState !== 'granted') {
            console.log('Cannot show notification: permission not granted or not supported');
            return false;
        }
        
        try {
            // Use service worker for notifications
            const registration = await navigator.serviceWorker.ready;
            
            await registration.showNotification(title, {
                body: body,
                icon: '/assets/icons/pwa-icons/icon-192x192.png',
                badge: '/assets/icons/pwa-icons/icon-72x72.png',
                tag: 'wesnoth-timeline',
                requireInteraction: false,
                ...options
            });
            
            console.log('Service Worker notification shown:', title);
            return true;
        } catch (error) {
            console.error('Error showing service worker notification:', error);
            
            // Fallback to basic Notification API
            try {
                const notification = new Notification(title, {
                    body: body,
                    icon: '/assets/icons/pwa-icons/icon-192x192.png'
                });
                
                notification.onclick = function() {
                    console.log('Fallback notification clicked');
                    window.focus();
                    this.close();
                };
                
                setTimeout(() => {
                    notification.close();
                }, 5000);
                
                console.log('Fallback notification shown:', title);
                return true;
            } catch (fallbackError) {
                console.error('Fallback notification also failed:', fallbackError);
                return false;
            }
        }
    },
    
    // Update UI based on permission state and user preference
    updateUIState(state) {
        const notificationToggle = document.getElementById('notificationToggle');
        const notificationStatus = document.getElementById('notificationStatus');
        
        if (!notificationToggle || !notificationStatus) return;
        
        // Set toggle based on user preference, not just permission
        notificationToggle.checked = this.notificationsEnabled;
        
        switch (state) {
            case 'granted':
                if (this.notificationsEnabled) {
                    notificationStatus.textContent = this.getTranslation('notifications_enabled') || 'Enabled';
                    notificationStatus.className = 'WTL-timeline-manager-notification-status enabled';
                } else {
                    notificationStatus.textContent = this.getTranslation('notifications_disabled') || 'Disabled';
                    notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                }
                break;
                
            case 'denied':
                notificationToggle.checked = false;
                notificationStatus.textContent = this.getTranslation('notifications_blocked') || 'Blocked';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
                
            case 'unsupported':
                notificationToggle.checked = false;
                notificationToggle.disabled = true;
                notificationStatus.textContent = this.getTranslation('notifications_unsupported') || 'Not supported';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
                
            default:
                notificationToggle.checked = false;
                notificationStatus.textContent = this.getTranslation('notifications_disabled') || 'Disabled';
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
        if (!this.isSupported) {
            this.showLocalAlert('Not Supported', 'Notifications are not supported in your browser.');
            return false;
        }
        
        if (this.permissionState !== 'granted') {
            this.showLocalAlert(
                'Enable Notifications First', 
                'Please enable notifications using the toggle switch above, then try the test again.'
            );
            return false;
        }
        
        const title = this.getTranslation('notification_test_title') || 'Test Notification';
        const body = this.getTranslation('notification_test_body') || 'This is a test notification from Wesnoth Timeline.';
        
        const success = await this.showNotification(title, body, {
            requireInteraction: true
        });
        
        if (success) {
            console.log('Test notification sent successfully');
        } else {
            this.showLocalAlert('Failed', 'Could not show test notification. Please try again.');
        }
        
        return success;
    },
    
    // Show timeline update notification
    async showTimelineUpdate(newEventsCount = 1) {
        const title = this.getTranslation('notification_update_title') || 'Timeline Updated';
        const body = this.getTranslation('notification_update_body') || 'New historical content is available';
        
        return await this.showNotification(title, body);
    },
    
    // Show daily digest
    async showDailyDigest() {
        const title = this.getTranslation('notification_digest_title') || 'Wesnoth Digest';
        const body = this.getTranslation('notification_digest_body') || 'Check out today\'s featured historical events';
        
        return await this.showNotification(title, body, {
            requireInteraction: true
        });
    }
};

// Make it globally available
window.WTLPushManager = WTLPushManager;