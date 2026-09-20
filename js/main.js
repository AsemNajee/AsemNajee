/**
 * Asem Abdullah Najee - Dynamic Portfolio Engine
 * Supports:
 * - Dynamic loading of separate language files (e.g., data/ar.json, data/en.json, etc.)
 * - Config-driven language registry (add new languages in data/config.json)
 * - Skeleton/placeholder cleanup on render
 * - RTL/LTR & Theme persistence
 */

(function () {
  'use strict';

  // --- SVG Icons Library ---
  const ICONS = {
    code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>',
    smartphone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>',
    palette: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
    terminal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>',
    'file-text': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
    externalLink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
    email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>'
  };

  // --- Safe Storage Helpers ---
  function safeGetStorage(key, fallback) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeSetStorage(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }

  // --- Default Inlined Fallback (Config & Shared) ---
  const fallbackI18n = (typeof window !== 'undefined' && window.I18N_DATA) ? window.I18N_DATA : {
    config: {
      defaultLanguage: 'ar',
      languages: [
        { code: 'ar', name: 'العربية', dir: 'rtl', font: 'Cairo', file: 'data/ar.json' },
        { code: 'en', name: 'English', dir: 'ltr', font: 'Inter', file: 'data/en.json' }
      ]
    },
    shared: {
      avatar: 'assets/images/logo.webp',
      socials: {
        github: 'https://github.com/Asemnajee',
        linkedin: 'https://www.linkedin.com/in/asemnajee',
        telegram: 'https://t.me/AsemNajee',
        email: 'asem.a.najee@gmail.com'
      }
    },
    languages: {}
  };

  // --- State Variables ---
  let appConfig = fallbackI18n.config;
  let sharedData = fallbackI18n.shared;
  let loadedLanguages = fallbackI18n.languages || {};

  let currentLangCode = safeGetStorage('portfolio_lang', appConfig.defaultLanguage || 'ar');
  let currentTheme = safeGetStorage('portfolio_theme', null);
  if (!currentTheme) {
    try {
      currentTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    } catch (e) {
      currentTheme = 'light';
    }
  }

  // --- Theme Management ---
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    safeSetStorage('portfolio_theme', theme);
    currentTheme = theme;

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  };

  function initTheme() {
    applyTheme(currentTheme);
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.onclick = window.toggleTheme;
    }
  }

  // --- Helper to Remove Skeleton Classes ---
  function removeSkeleton(element) {
    if (element) {
      element.classList.remove(
        'skeleton',
        'skeleton-title',
        'skeleton-subtitle',
        'skeleton-desc',
        'skeleton-text',
        'skeleton-btn',
        'skeleton-badge',
        'skeleton-card'
      );
      element.style.width = '';
      element.style.minWidth = '';
      element.style.height = '';
      element.style.minHeight = '';
      element.style.display = '';
    }
  }

  // --- Profile Rendering Engine ---
  function renderProfile(langCode) {
    const langConfig = appConfig.languages.find(l => l.code === langCode) || appConfig.languages[0];
    const data = loadedLanguages[langCode];
    if (!data) return;

    // 1. Set HTML Lang and Direction
    document.documentElement.lang = langConfig.code;
    document.documentElement.dir = langConfig.dir;

    if (data.meta) {
      document.title = data.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', data.meta.description);
    }

    // 2. Navigation
    const navBrand = document.getElementById('nav-brand');
    const navSkills = document.getElementById('nav-skills');
    const navProjects = document.getElementById('nav-projects');
    const navContact = document.getElementById('nav-contact');
    const langBtnText = document.getElementById('lang-btn-text');

    if (navBrand) {
      navBrand.textContent = data.nav.brand;
      removeSkeleton(navBrand);
    }
    if (navSkills) {
      navSkills.textContent = data.nav.skills;
      removeSkeleton(navSkills);
    }
    if (navProjects) {
      navProjects.textContent = data.nav.projects;
      removeSkeleton(navProjects);
    }
    if (navContact) {
      navContact.textContent = data.nav.contact;
      removeSkeleton(navContact);
    }

    // Next Language Label on the Switcher Button
    if (langBtnText) {
      const currentIndex = appConfig.languages.findIndex(l => l.code === langCode);
      const nextIndex = (currentIndex + 1) % appConfig.languages.length;
      const nextLangConfig = appConfig.languages[nextIndex];
      langBtnText.textContent = nextLangConfig.name;
    }

    // 3. Hero Section
    const heroBadgeText = document.getElementById('hero-badge-text');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroDesc = document.getElementById('hero-desc');
    const heroViewWork = document.getElementById('hero-view-work');
    const heroGetInTouch = document.getElementById('hero-get-in-touch');
    const heroImg = document.getElementById('hero-img');

    if (heroBadgeText) {
      heroBadgeText.textContent = data.hero.badge;
      removeSkeleton(heroBadgeText);
    }
    if (heroTitle) {
      heroTitle.textContent = data.hero.title;
      removeSkeleton(heroTitle);
    }
    if (heroSubtitle) {
      heroSubtitle.textContent = data.hero.subtitle;
      removeSkeleton(heroSubtitle);
    }
    if (heroDesc) {
      heroDesc.textContent = data.hero.description;
      removeSkeleton(heroDesc);
    }
    if (heroViewWork) {
      heroViewWork.textContent = data.hero.viewWork;
      removeSkeleton(heroViewWork);
    }
    if (heroGetInTouch) {
      heroGetInTouch.textContent = data.hero.getInTouch;
      removeSkeleton(heroGetInTouch);
    }
    if (heroImg && sharedData.avatar) {
      heroImg.setAttribute('src', sharedData.avatar);
      heroImg.setAttribute('alt', data.hero.title);
      removeSkeleton(heroImg);
    }

    // 4. Skills Section
    const skillsTitle = document.getElementById('skills-title');
    const skillsDesc = document.getElementById('skills-desc');
    const skillsGrid = document.getElementById('skills-grid');

    if (skillsTitle) {
      skillsTitle.textContent = data.skills.title;
      removeSkeleton(skillsTitle);
    }
    if (skillsDesc) {
      skillsDesc.textContent = data.skills.description;
      removeSkeleton(skillsDesc);
    }

    if (skillsGrid && Array.isArray(data.skills.categories)) {
      skillsGrid.innerHTML = data.skills.categories.map(category => {
        const iconSvg = ICONS[category.icon] || ICONS.code;
        const tagsHtml = (category.items || []).map(item => `<span class="tag">${item}</span>`).join('');

        return `
          <div class="skill-card">
            <div class="skill-card-header">
              <div class="skill-icon-wrapper">
                ${iconSvg}
              </div>
              <h3 class="skill-card-title">${category.title}</h3>
            </div>
            <div class="skill-tags">
              ${tagsHtml}
            </div>
          </div>
        `;
      }).join('');
    }

    // 5. Projects Section
    const projectsTitle = document.getElementById('projects-title');
    const projectsDesc = document.getElementById('projects-desc');
    const projectsWrapper = document.getElementById('projects-wrapper');

    if (projectsTitle) {
      projectsTitle.textContent = data.projects.title;
      removeSkeleton(projectsTitle);
    }
    if (projectsDesc) {
      projectsDesc.textContent = data.projects.description;
      removeSkeleton(projectsDesc);
    }

    if (projectsWrapper && Array.isArray(data.projects.items)) {
      projectsWrapper.innerHTML = data.projects.items.map(project => {
        const iconSvg = ICONS[project.icon] || ICONS.code;
        const tagsHtml = (project.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');

        const previewContent = project.image
          ? `<img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">`
          : `<div class="project-preview-icon">${iconSvg}</div><p class="project-preview-title">${project.title}</p>`;

        return `
          <article class="project-item">
            <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-desc">${project.description}</p>
              <div class="project-tags">
                ${tagsHtml}
              </div>
              <div class="project-actions">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  ${data.projects.viewGithub}
                  ${ICONS.externalLink}
                </a>
              </div>
            </div>
            <div class="project-preview ${project.image ? 'has-image' : ''}">
              ${previewContent}
            </div>
          </article>
        `;
      }).join('');
    }

    // 6. Contact Section
    const contactTitle = document.getElementById('contact-title');
    const contactDesc = document.getElementById('contact-desc');
    const contactEmailBtn = document.getElementById('contact-email-btn');
    const contactGithubBtn = document.getElementById('contact-github-btn');

    if (contactTitle) {
      contactTitle.textContent = data.contact.title;
      removeSkeleton(contactTitle);
    }
    if (contactDesc) {
      contactDesc.textContent = data.contact.description;
      removeSkeleton(contactDesc);
    }
    if (contactEmailBtn) {
      contactEmailBtn.innerHTML = `${ICONS.email} ${data.contact.sendEmail}`;
      removeSkeleton(contactEmailBtn);
      if (sharedData.socials && sharedData.socials.email) {
        contactEmailBtn.setAttribute('href', `mailto:${sharedData.socials.email}`);
      }
    }
    if (contactGithubBtn) {
      contactGithubBtn.innerHTML = `${ICONS.github} ${data.contact.visitGithub}`;
      removeSkeleton(contactGithubBtn);
      if (sharedData.socials && sharedData.socials.github) {
        contactGithubBtn.setAttribute('href', sharedData.socials.github);
      }
    }

    // 7. Footer
    const footerAuthor = document.getElementById('footer-author');
    if (footerAuthor) {
      footerAuthor.textContent = data.hero ? data.hero.title : '';
      removeSkeleton(footerAuthor);
    }

    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) {
      footerCopyright.textContent = data.footer ? data.footer.copyright : '';
      removeSkeleton(footerCopyright);
    }

    const currentYearElem = document.getElementById('current-year');
    if (currentYearElem) {
      currentYearElem.textContent = new Date().getFullYear();
    }

    // 8. Re-observe sections for scroll active state
    setupScrollObserver();
  }

  // --- Fetch Language File or Use Inlined Fallback ---
  async function loadLanguage(langCode) {
    // 1. If already loaded in memory, render immediately
    if (loadedLanguages[langCode]) {
      renderProfile(langCode);
      return;
    }

    // 2. Find file path from config
    const langConfig = appConfig.languages.find(l => l.code === langCode);
    const filePath = langConfig ? langConfig.file : `data/${langCode}.json`;

    // 3. Attempt fetch
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      loadedLanguages[langCode] = data;
      renderProfile(langCode);
    } catch (err) {
      // If fetch fails (e.g. file:// protocol), check window.I18N_DATA
      if (window.I18N_DATA && window.I18N_DATA.languages && window.I18N_DATA.languages[langCode]) {
        loadedLanguages[langCode] = window.I18N_DATA.languages[langCode];
        renderProfile(langCode);
      } else {
        console.error('[Portfolio] Failed to load language:', langCode, err);
      }
    }
  }

  // --- Language Switcher (Cycles through all configured languages) ---
  window.switchLanguage = function () {
    const currentIndex = appConfig.languages.findIndex(l => l.code === currentLangCode);
    const nextIndex = (currentIndex + 1) % appConfig.languages.length;
    currentLangCode = appConfig.languages[nextIndex].code;

    safeSetStorage('portfolio_lang', currentLangCode);
    loadLanguage(currentLangCode);
    console.log('[Portfolio] Switched to language:', currentLangCode);
  };

  function initLanguage() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
      langBtn.onclick = window.switchLanguage;
    }
    loadLanguage(currentLangCode);
  }

  // --- Scroll Observer for Active Nav Links ---
  let scrollObserver = null;
  function setupScrollObserver() {
    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            navItems.forEach(item => {
              if (item.getAttribute('href') === `#${activeId}`) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(section => scrollObserver.observe(section));
    }
  }

  // --- Mobile Menu Toggle ---
  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.onclick = () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
      };

      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
          navLinks.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // --- Bootstrapping ---
  async function loadDataAndInit() {
    // 1. Try loading config.json & shared.json dynamically if on server
    try {
      const [configRes, sharedRes] = await Promise.all([
        fetch('data/config.json'),
        fetch('data/shared.json')
      ]);
      if (configRes.ok) appConfig = await configRes.json();
      if (sharedRes.ok) sharedData = await sharedRes.json();
    } catch (e) {
      // Use fallback config and shared if fetch is restricted
    }

    initTheme();
    initLanguage();
    initMobileMenu();
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDataAndInit);
  } else {
    loadDataAndInit();
  }
})();
