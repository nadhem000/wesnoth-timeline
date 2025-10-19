const WTLPushManager = {
    permissionState: null,
    isSupported: false,
    
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
        this.updateUIState(this.permissionState);
        
        // If already granted, we're good to go
        if (this.permissionState === 'granted') {
            console.log('Notifications already enabled');
        }
        
        return true;
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
            this.updateUIState(permission);
            
            if (permission === 'granted') {
                console.log('Notification permission granted');
                
                // Show welcome notification through service worker
                this.showNotification(
                    'Welcome to Wesnoth Timeline!',
                    'You will now receive updates about timeline changes and new content.'
                );
                
                return true;
            } else {
                console.log('Notification permission denied:', permission);
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
        this.permissionState = 'default';
        this.updateUIState('default');
        this.showLocalAlert('Notifications Disabled', 'You will no longer receive notification alerts.');
        return true;
    },
    
    // Show notification using service worker
    async showNotification(title, body, options = {}) {
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
    
    // Show local alert (fallback when notifications are disabled)
    showLocalAlert(title, message) {
        // Remove any existing alerts first
        const existingAlert = document.querySelector('.WTL-timeline-manager-local-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create a simple modal alert
        const alertDiv = document.createElement('div');
        alertDiv.className = 'WTL-timeline-manager-local-alert';
        alertDiv.innerHTML = `
            <div class="WTL-timeline-manager-alert-content">
                <h4>${title}</h4>
                <p>${message}</p>
                <button class="WTL-timeline-manager-alert-btn">OK</button>
            </div>
        `;
        
        // Add styles if not already added
        if (!document.querySelector('#local-alert-styles')) {
            const styles = document.createElement('style');
            styles.id = 'local-alert-styles';
            styles.textContent = `
                .WTL-timeline-manager-local-alert {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease-out;
                }
                
                .WTL-timeline-manager-alert-content {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    max-width: 300px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }
                
                .WTL-timeline-manager-alert-content h4 {
                    margin: 0 0 10px 0;
                    color: #333;
                }
                
                .WTL-timeline-manager-alert-content p {
                    margin: 0 0 20px 0;
                    color: #666;
                    line-height: 1.4;
                }
                
                .WTL-timeline-manager-alert-btn {
                    background: var(--WTL-timeline-manager-primary-color, #4a90e2);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                }
                
                .WTL-timeline-manager-alert-btn:hover {
                    background: var(--WTL-timeline-manager-primary-hover, #357ae8);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(alertDiv);
        
        // Add click handler to close button
        const closeBtn = alertDiv.querySelector('.WTL-timeline-manager-alert-btn');
        closeBtn.addEventListener('click', () => {
            alertDiv.remove();
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentElement) {
                alertDiv.remove();
            }
        }, 5000);
    },
    
    // Update UI based on permission state
    updateUIState(state) {
        const notificationToggle = document.getElementById('notificationToggle');
        const notificationStatus = document.getElementById('notificationStatus');
        
        if (!notificationToggle || !notificationStatus) return;
        
        switch (state) {
            case 'granted':
                notificationToggle.checked = true;
                notificationStatus.textContent = this.getTranslation('notifications_enabled') || 'Enabled';
                notificationStatus.className = 'WTL-timeline-manager-notification-status enabled';
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
        const body = this.getTranslation('notification_update_body') || 'New historical events have been added to the timeline.';
        
        return await this.showNotification(title, body);
    },
    
    // Show daily digest
    async showDailyDigest() {
        const title = this.getTranslation('notification_digest_title') || 'Wesnoth History Digest';
        const body = this.getTranslation('notification_digest_body') || 'Explore today\'s featured events from Wesnoth history.';
        
        return await this.showNotification(title, body, {
            requireInteraction: true
        });
    }
};

// Make it globally available
window.WTLPushManager = WTLPushManager;