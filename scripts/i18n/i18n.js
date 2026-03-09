/**
 * i18n - Internationalization System for Pokechill
 * A lightweight, non-intrusive translation system
 */

const i18n = {
    currentLocale: 'en',
    fallbackLocale: 'en',
    translations: {},

    /**
     * Load a locale file
     * @param {string} locale - Locale code (e.g., 'en', 'fr')
     * @param {object} data - Translation data object
     */
    load(locale, data) {
        this.translations[locale] = data;
    },

    /**
     * Get a translation by key
     * @param {string} key - Translation key (e.g., 'pkmn.bulbasaur')
     * @param {object} params - Optional parameters for interpolation
     * @returns {string} Translated string or fallback
     */
    t(key, params = {}) {
        if (!key) return key;
        
        // Try current locale first
        const translation = this.translations[this.currentLocale]?.[key];
        if (translation !== undefined) {
            return this.interpolate(translation, params);
        }
        
        // Fallback to default locale
        const fallbackTranslation = this.translations[this.fallbackLocale]?.[key];
        if (fallbackTranslation !== undefined) {
            return this.interpolate(fallbackTranslation, params);
        }
        
        // Return key as fallback
        return key;
    },

    /**
     * Interpolate variables in translation string
     * Supports {{variable}} syntax
     * @param {string} str - Translation string
     * @param {object} params - Parameters object
     * @returns {string} Interpolated string
     */
    interpolate(str, params) {
        if (typeof str !== 'string') return str;
        return str.replace(/\{\{(\w+)\}\}/g, (_, key) => {
            return params[key] !== undefined ? params[key] : `{{${key}}}`;
        });
    },

    /**
     * Change the current locale
     * @param {string} locale - Locale code to switch to
     * @returns {boolean} Success status
     */
    setLocale(locale) {
        if (this.translations[locale]) {
            this.currentLocale = locale;
            // Save to localStorage if available
            if (typeof saved !== 'undefined') {
                saved.locale = locale;
            }
            return true;
        }
        console.warn(`i18n: Locale '${locale}' not loaded`);
        return false;
    },

    /**
     * Get current locale
     * @returns {string} Current locale code
     */
    getLocale() {
        return this.currentLocale;
    },

    /**
     * Update DOM elements with data-i18n attributes
     * Should be called after locale change
     */
    updateDOM() {
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key && translated !== el.textContent) {
                el.textContent = translated;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Update titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });

        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', this.t(key));
        });
    },

    /**
     * Get description with interpolation helper
     * @param {string} category - Category (e.g., 'ability', 'move')
     * @param {string} id - Entity ID
     * @param {object} params - Interpolation parameters
     * @returns {string} Translated description
     */
    desc(category, id, params = {}) {
        const key = `${category}.${id}.desc`;
        return this.t(key, params);
    },

    /**
     * Helper for localized info functions
     * @param {string} category - Category
     * @param {string} id - Entity ID
     * @param {function|string} fallbackFn - Fallback function or string
     * @param {object} params - Parameters
     * @returns {string} Localized description
     */
    localizedInfo(category, id, fallbackFn, params = {}) {
        const translated = this.desc(category, id, params);
        // Check if we got an actual translation (not the key back)
        if (translated !== `${category}.${id}.desc`) {
            return translated;
        }
        // Fallback to original English
        return typeof fallbackFn === 'function' ? fallbackFn() : fallbackFn;
    },

    /**
     * Initialize i18n with saved locale
     * Call this after all locales are loaded
     */
    init() {
        // Try to load saved locale
        if (typeof saved !== 'undefined' && saved.locale && this.translations[saved.locale]) {
            this.currentLocale = saved.locale;
        }
        // Also update the selector if it exists
        const selector = document.getElementById('settings-language');
        if (selector) {
            selector.value = this.currentLocale;
        }
    }
};

// Auto-initialize when DOM is ready
(function initI18n() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => i18n.init());
    } else {
        i18n.init();
    }
})();
