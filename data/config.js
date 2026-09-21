/**
 * Global Configuration for Local (file://) and Fallback use.
 * This mirrors data/config.json so changes work even without a web server.
 */
window.APP_CONFIG = {
  "defaultLanguage": "ar",
  "features": {
    "skills": true,
    "projects": true,
    "articles": true,
    "books": true,
    "testimonials": true,
    "contact": true
  },
  "languages": [
    {
      "code": "ar",
      "name": "العربية",
      "dir": "rtl",
      "font": "Cairo",
      "file": "data/ar.json"
    },
    {
      "code": "en",
      "name": "English",
      "dir": "ltr",
      "font": "Inter",
      "file": "data/en.json"
    }
  ]
};

