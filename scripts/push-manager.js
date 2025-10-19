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
        this.permissionState = Notification.permission;
        
        // Load user preference from localStorage
        const userPreference = localStorage.getItem('wesnothNotificationsEnabled');
        this.notificationsEnabled = userPreference === 'true' && this.permissionState === 'granted';
        
        this.updateUIState(this.permissionState);
        
        return true;
    },
    
    // Request notification permission
    async requestPermission() {
        if (!this.isSupported) {
            this.showAlert('Not Supported', 'Notifications are not supported in your browser.');
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
                
                // Show welcome notification
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
                this.showAlert('Permission Denied', 'You need to allow notifications to receive alerts.');
                return false;
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            this.showAlert('Error', 'Failed to request notification permission.');
            return false;
        }
    },
    
    // Disable notifications
    async disableNotifications() {
        this.notificationsEnabled = false;
        localStorage.setItem('wesnothNotificationsEnabled', 'false');
        this.updateUIState(this.permissionState);
        this.showAlert('Notifications Disabled', 'You will no longer receive notification alerts.');
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
    
    // Show notification
    async showNotification(title, body, options = {}) {
        if (!this.notificationsEnabled || !this.isSupported || this.permissionState !== 'granted') {
            console.log('Cannot show notification: not enabled or permission not granted');
            return false;
        }
        
        try {
            // Try service worker first
            if (navigator.serviceWorker && navigator.serviceWorker.ready) {
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
            }
        } catch (error) {
            console.error('Service Worker notification failed, using fallback:', error);
        }
        
        // Fallback to basic Notification API
        try {
            const notification = new Notification(title, {
                body: body,
                icon: '/assets/icons/pwa-icons/icon-192x192.png',
                badge: '/assets/icons/pwa-icons/icon-72x72.png',
                ...options
            });
            
            notification.onclick = function() {
                console.log('Notification clicked');
                window.focus();
                this.close();
            };
            
            // Auto close after 5 seconds
            setTimeout(() => {
                notification.close();
            }, 5000);
            
            console.log('Fallback notification shown:', title);
            return true;
        } catch (fallbackError) {
            console.error('Fallback notification also failed:', fallbackError);
            return false;
        }
    },
    
    // Update UI based on permission state
    updateUIState(state) {
        const notificationToggle = document.getElementById('notificationToggle');
        const notificationStatus = document.getElementById('notificationStatus');
        
        if (!notificationToggle || !notificationStatus) return;
        
        notificationToggle.checked = this.notificationsEnabled;
        
        switch (state) {
            case 'granted':
                notificationStatus.textContent = this.notificationsEnabled ? 'Enabled' : 'Disabled';
                notificationStatus.className = 'WTL-timeline-manager-notification-status ' + 
                    (this.notificationsEnabled ? 'enabled' : 'disabled');
                break;
                
            case 'denied':
                notificationToggle.checked = false;
                notificationStatus.textContent = 'Blocked';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
                
            case 'unsupported':
                notificationToggle.checked = false;
                notificationToggle.disabled = true;
                notificationStatus.textContent = 'Not supported';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
                
            default:
                notificationToggle.checked = false;
                notificationStatus.textContent = 'Disabled';
                notificationStatus.className = 'WTL-timeline-manager-notification-status disabled';
                break;
        }
    },
    
    // Simple alert function
    showAlert(title, message) {
        alert(title + ': ' + message);
    },
    
    // Test notification
    async testNotification() {
        if (!this.isSupported) {
            this.showAlert('Not Supported', 'Notifications are not supported in your browser.');
            return false;
        }
        
        if (this.permissionState !== 'granted') {
            this.showAlert(
                'Enable Notifications First', 
                'Please enable notifications using the toggle switch above, then try the test again.'
            );
            return false;
        }
        
        const success = await this.showNotification(
            'Test Notification',
            'This is a test notification from Wesnoth Timeline.',
            { requireInteraction: true }
        );
        
        if (!success) {
            this.showAlert('Failed', 'Could not show test notification. Please try again.');
        }
        
        return success;
    }
};

// Make it globally available
window.WTLPushManager = WTLPushManager;