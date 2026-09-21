/**
 * Asem Abdullah Najee - Dynamic Multi-Page Portfolio Engine
 * Supports:
 * - Dynamic loading of separate language files (e.g., data/ar.json, data/en.json, etc.)
 * - Config-driven language registry (add new languages in data/config.json)
 * - Skeleton/placeholder cleanup on render
 * - RTL/LTR & Theme persistence across all pages
 * - Filterable projects and books pages
 * - Un-translated testimonials from shared data
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
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    quote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 2v20"></path></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
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

  // Default config state (loaded dynamically from data/config.json)
  let appConfig = {
    defaultLanguage: 'ar',
    features: {
      skills: true,
      projects: true,
      articles: false,
      books: true,
      testimonials: true,
      contact: true
    },
    languages: [
      { code: 'ar', name: 'العربية', dir: 'rtl', font: 'Cairo' },
      { code: 'en', name: 'English', dir: 'ltr', font: 'Inter' }
    ]
  };

  let sharedData = {
    avatar: 'assets/images/logo.webp',
    socials: {},
    testimonials: []
  };

  const loadedLanguages = {};
  let currentLangCode = safeGetStorage('portfolio_lang', 'ar');

  // Filter states
  let currentProjectsFilter = 'all';
  let currentBooksFilter = 'all';
  let currentArticlesFilter = 'all';
  let articlesData = { categories: [] };

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = safeGetStorage('theme', 'system');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (savedTheme === 'system' && prefersDark);

    document.documentElement.classList.toggle('dark', isDark);

    window.toggleTheme = function () {
      const currentlyDark = document.documentElement.classList.contains('dark');
      const nextTheme = currentlyDark ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', !currentlyDark);
      safeSetStorage('theme', nextTheme);
    };

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.onclick = window.toggleTheme;
    }
  }

  // --- Font & Typography Configuration Engine ---
  const LOCAL_FONTS = [
    'Adobe Naskh',
    'KA Typical Naskh',
    'Muna',
    'Zain',
    'AlMohanad',
    'Milan Display',
    'AlJazeera'
  ];

  const PRELOADED_WEB_FONTS = ['Cairo', 'Almarai', 'Tajawal', 'Inter'];

  function ensureGoogleFontLoaded(fontFamily) {
    if (!fontFamily || typeof fontFamily !== 'string') return;
    const cleanFont = fontFamily.trim().replace(/^['"]|['"]$/g, '');
    if (LOCAL_FONTS.includes(cleanFont) || PRELOADED_WEB_FONTS.includes(cleanFont)) {
      return;
    }
    const linkId = `gfont-${cleanFont.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    if (document.getElementById(linkId)) return;

    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(cleanFont).replace(/%20/g, '+')}:wght@300;400;500;600;700;800&display=swap`;
    document.head.appendChild(link);
  }

  function applyConfiguredFont(langConfig) {
    if (!langConfig) return;
    const bodyFont = langConfig.font;
    const headingFont = langConfig.headingFont || bodyFont;

    if (bodyFont) {
      ensureGoogleFontLoaded(bodyFont);
      const fontStack = `'${bodyFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      if (langConfig.dir === 'rtl' || langConfig.code === 'ar') {
        document.documentElement.style.setProperty('--font-arabic', fontStack);
      } else {
        document.documentElement.style.setProperty('--font-sans', fontStack);
      }
    }

    if (headingFont) {
      ensureGoogleFontLoaded(headingFont);
      const headingStack = `'${headingFont}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      document.documentElement.style.setProperty('--font-heading', headingStack);
    }
  }

  // --- Article Reader Font Switcher (article.html) ---
  function initArticleReaderFontSwitcher(langCode) {
    const container = document.getElementById('reader-font-dropdown-container');
    const btn = document.getElementById('reader-font-btn');
    const menu = document.getElementById('reader-font-menu');
    const btnText = document.getElementById('current-reader-font-text');

    if (!container || !btn || !menu) return;

    const isAr = langCode === 'ar' || document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';

    const labels = {
      defaultBtnText: isAr ? 'خط القراءة' : 'Reading Font',
      defaultOption: isAr ? 'افتراضي الموقع' : 'Site Default',
      localGroup: isAr ? 'خطوط محلية' : 'Local Fonts',
      webGroup: isAr ? 'خطوط الويب' : 'Web Fonts'
    };

    const availableFonts = appConfig.availableFonts || {
      local: [
        { id: 'Adobe Naskh', name: 'خط أدوبي نسخ' },
        { id: 'KA Typical Naskh', name: 'خط النسخ النموذجي' },
        { id: 'Muna', name: 'خط منى' },
        { id: 'Zain', name: 'خط زين' },
        { id: 'AlMohanad', name: 'خط المهند' },
        { id: 'Milan Display', name: 'خط ميلان' },
        { id: 'AlJazeera', name: 'خط الجزيرة' }
      ],
      web: [
        { id: 'Cairo', name: 'Cairo (كايرو)' },
        { id: 'Almarai', name: 'Almarai (المراعي)' },
        { id: 'Tajawal', name: 'Tajawal (تجوال)' },
        { id: 'Readex Pro', name: 'Readex Pro (ريدكس برو)' },
        { id: 'Amiri', name: 'Amiri (أميري)' }
      ]
    };

    const savedFont = safeGetStorage('portfolio_reader_font', '');
    let currentScalePercent = parseInt(safeGetStorage('portfolio_reader_font_scale', '100'), 10);
    if (isNaN(currentScalePercent) || currentScalePercent < 80 || currentScalePercent > 150) {
      currentScalePercent = 100;
    }

    function applyReaderScale(pct) {
      currentScalePercent = Math.max(80, Math.min(150, pct));
      safeSetStorage('portfolio_reader_font_scale', String(currentScalePercent));
      document.documentElement.style.setProperty('--article-font-scale', String(currentScalePercent / 100));
      const valElem = menu.querySelector('#reader-size-val');
      if (valElem) valElem.textContent = `${currentScalePercent}%`;
      const decBtn = menu.querySelector('#reader-size-dec');
      const incBtn = menu.querySelector('#reader-size-inc');
      if (decBtn) decBtn.disabled = currentScalePercent <= 80;
      if (incBtn) incBtn.disabled = currentScalePercent >= 150;
    }

    // Apply saved scale immediately
    applyReaderScale(currentScalePercent);

    function applyReaderFont(fontId, fontName) {
      if (!fontId) {
        document.documentElement.style.removeProperty('--article-font');
        safeSetStorage('portfolio_reader_font', '');
        if (btnText) btnText.textContent = labels.defaultBtnText;
      } else {
        ensureGoogleFontLoaded(fontId);
        document.documentElement.style.setProperty('--article-font', `'${fontId}', var(--font-sans), var(--font-arabic)`);
        safeSetStorage('portfolio_reader_font', fontId);
        if (btnText) btnText.textContent = fontName || fontId;
      }

      menu.querySelectorAll('.reader-font-option').forEach(opt => {
        const optFont = opt.getAttribute('data-font');
        const isActive = (!fontId && !optFont) || (optFont === fontId);
        opt.classList.toggle('active', isActive);
      });
    }

    // Apply saved font if existing
    if (savedFont) {
      const allFonts = [...(availableFonts.local || []), ...(availableFonts.web || [])];
      const match = allFonts.find(f => f.id === savedFont);
      applyReaderFont(savedFont, match ? match.name : savedFont);
    } else {
      if (btnText) btnText.textContent = labels.defaultBtnText;
    }

    // Render dropdown menu items
    let menuHTML = `
      <div class="reader-size-bar" role="group" aria-label="${isAr ? 'حجم الخط' : 'Font Size'}">
        <span class="reader-size-title">${isAr ? 'حجم الخط' : 'Font Size'}</span>
        <div class="reader-size-controls">
          <button class="reader-size-btn" id="reader-size-dec" type="button" title="${isAr ? 'تصغير الخط' : 'Decrease size'}" ${currentScalePercent <= 80 ? 'disabled' : ''}>A-</button>
          <span class="reader-size-val" id="reader-size-val">${currentScalePercent}%</span>
          <button class="reader-size-btn" id="reader-size-inc" type="button" title="${isAr ? 'تكبير الخط' : 'Increase size'}" ${currentScalePercent >= 150 ? 'disabled' : ''}>A+</button>
        </div>
      </div>
      <div class="font-menu-divider"></div>
      <button class="reader-font-option ${!savedFont ? 'active' : ''}" data-font="" role="menuitem">
        <span>${labels.defaultOption}</span>
        <svg class="reader-font-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
      <div class="font-menu-divider"></div>
    `;

    if (availableFonts.local && availableFonts.local.length > 0) {
      menuHTML += `<div class="font-menu-group-title">${labels.localGroup}</div>`;
      availableFonts.local.forEach(f => {
        const isActive = savedFont === f.id;
        menuHTML += `
          <button class="reader-font-option ${isActive ? 'active' : ''}" data-font="${f.id}" data-name="${f.name}" role="menuitem" style="font-family: '${f.id}', sans-serif;">
            <span>${f.name}</span>
            <svg class="reader-font-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        `;
      });
    }

    if (availableFonts.web && availableFonts.web.length > 0) {
      menuHTML += `<div class="font-menu-divider"></div>`;
      menuHTML += `<div class="font-menu-group-title">${labels.webGroup}</div>`;
      availableFonts.web.forEach(f => {
        const isActive = savedFont === f.id;
        menuHTML += `
          <button class="reader-font-option ${isActive ? 'active' : ''}" data-font="${f.id}" data-name="${f.name}" role="menuitem" style="font-family: '${f.id}', sans-serif;">
            <span>${f.name}</span>
            <svg class="reader-font-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        `;
      });
    }

    menu.innerHTML = menuHTML;

    const decBtn = menu.querySelector('#reader-size-dec');
    const incBtn = menu.querySelector('#reader-size-inc');
    if (decBtn) {
      decBtn.onclick = (e) => {
        e.stopPropagation();
        applyReaderScale(currentScalePercent - 10);
      };
    }
    if (incBtn) {
      incBtn.onclick = (e) => {
        e.stopPropagation();
        applyReaderScale(currentScalePercent + 10);
      };
    }

    function closeReaderFontDropdown() {
      container.classList.remove('open');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    function toggleReaderFontDropdown() {
      const isOpen = menu.classList.contains('open');
      if (isOpen) {
        closeReaderFontDropdown();
      } else {
        container.classList.add('open');
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    }

    menu.querySelectorAll('.reader-font-option').forEach(opt => {
      opt.onclick = (e) => {
        e.stopPropagation();
        const fontId = opt.getAttribute('data-font');
        const fontName = opt.getAttribute('data-name') || fontId;
        applyReaderFont(fontId, fontName);
        closeReaderFontDropdown();
      };
    });

    if (!container.dataset.initialized) {
      container.dataset.initialized = 'true';

      btn.onclick = (e) => {
        e.stopPropagation();
        toggleReaderFontDropdown();
      };

      document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
          closeReaderFontDropdown();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeReaderFontDropdown();
        }
      });
    }
  }

  // --- Helper to Remove Skeleton Classes & Temporary Dimensions ---
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
      if (element.style.display !== 'none') {
        element.style.display = '';
      }
    }
  }

  // --- Card Render Helpers ---
  function renderProjectCardHtml(project, data) {
    const iconSvg = ICONS[project.icon] || ICONS.code;
    const tagsHtml = (project.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
    const categoryBadge = project.category ? `<span class="project-category-badge">${project.category}</span>` : '';

    const liveUrl = project.liveUrl || project.demo || project.website || '';
    const liveLabel = (data.projects && data.projects.liveDemo) ? data.projects.liveDemo : 'معاينة حية';
    const githubLabel = (data.projects && data.projects.viewGithub) ? data.projects.viewGithub : 'عرض على GitHub';

    let displayUrl = 'asemnajee.dev/project';
    if (liveUrl) {
      displayUrl = liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    } else if (project.github) {
      displayUrl = project.github.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }

    const screenContent = project.image
      ? `<img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">`
      : `
        <div class="project-preview-placeholder">
          <div class="project-preview-icon">${iconSvg}</div>
          <p class="project-preview-title">${project.title}</p>
          <span class="project-preview-badge">${project.category || ''}</span>
        </div>
      `;

    let actionsHtml = '';
    if (liveUrl) {
      actionsHtml += `
        <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" title="${liveLabel}">
          ${ICONS.globe}
          <span>${liveLabel}</span>
        </a>
      `;
    }
    if (project.github) {
      actionsHtml += `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn ${liveUrl ? 'btn-outline' : 'btn-primary'}" title="${githubLabel}">
          ${ICONS.github}
          <span>${githubLabel}</span>
        </a>
      `;
    }

    const urlBarHtml = liveUrl
      ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="browser-url-bar is-link" title="${liveUrl}">
           <svg class="url-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
           <span>${displayUrl}</span>
           <svg class="url-external" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
         </a>`
      : `<div class="browser-url-bar">${displayUrl}</div>`;

    return `
      <article class="project-item" data-category="${project.category || ''}">
        <div class="project-content">
          <div class="project-header-meta">
            ${categoryBadge}
            ${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="project-live-indicator" title="${liveLabel}"><span class="live-dot"></span>${liveLabel}</a>` : ''}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-actions">
            ${actionsHtml}
          </div>
        </div>
        <div class="project-preview">
          <div class="project-preview-frame">
            <div class="project-browser-bar">
              <div class="browser-dots">
                <span class="browser-dot"></span>
                <span class="browser-dot"></span>
                <span class="browser-dot"></span>
              </div>
              ${urlBarHtml}
            </div>
            <div class="project-preview-screen ${project.image ? 'has-image' : ''}">
              ${screenContent}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderBookCardHtml(book, data, langCode) {
    const pagesLabel = data.books && data.books.pages ? data.books.pages : (langCode === 'ar' ? 'صفحة' : 'Pages');
    const readLabel = data.books && data.books.readPdf ? data.books.readPdf : (langCode === 'ar' ? 'قراءة الكتاب' : 'Read Book');
    const downloadLabel = data.books && data.books.downloadPdf ? data.books.downloadPdf : (langCode === 'ar' ? 'تحميل PDF' : 'Download PDF');

    const coverHtml = book.cover
      ? `<img src="${book.cover}" alt="${book.title}" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 4px;">`
      : `
        <div class="book-cover-mockup">
          <span class="book-mockup-badge">PDF</span>
          <p class="book-mockup-title">${book.title}</p>
        </div>
      `;

    return `
      <article class="book-card" data-category="${book.category || ''}">
        <div class="book-cover-area">
          ${coverHtml}
        </div>
        <div class="book-card-body">
          <span class="book-category">${book.category || ''}</span>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-description">${book.description}</p>
          <div class="book-meta">
            <span class="book-meta-item">${ICONS.book} ${book.pages} ${pagesLabel}</span>
            <span class="book-meta-item">${ICONS.calendar} ${book.year}</span>
          </div>
          <div class="book-actions">
            <a href="${book.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              ${ICONS.eye}
              ${readLabel}
            </a>
            <a href="${book.pdfUrl}" download class="btn btn-primary">
              ${ICONS.download}
              ${downloadLabel}
            </a>
          </div>
        </div>
      </article>
    `;
  }

  // --- Markdown Parser & Renderer ---
  function parseMarkdown(md) {
    if (typeof window !== 'undefined' && window.marked && typeof window.marked.parse === 'function') {
      return window.marked.parse(md);
    }

    if (!md) return '';
    let html = md
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\> (.*$)/gim, '<blockquote><p>$1</p></blockquote>')
      .replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/gim, (match, lang, code) => {
        const safeCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<pre><code class="language-${lang}">${safeCode}</code></pre>`;
      })
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^---$/gim, '<hr>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1">')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/\n\s*\n/gim, '</p><p>');

    return `<p>${html}</p>`
      .replace(/<p><\/p>/g, '')
      .replace(/<p>(<h[1-6]>.*?<\/h[1-6]>)<\/p>/g, '$1')
      .replace(/<p>(<hr>)<\/p>/g, '$1')
      .replace(/<p>(<blockquote>.*?<\/blockquote>)<\/p>/g, '$1')
      .replace(/<p>(<pre>[\s\S]*?<\/pre>)<\/p>/g, '$1');
  }

  function enhanceMarkdownCodeBlocks(container) {
    if (!container) return;
    const pres = container.querySelectorAll('pre');
    pres.forEach(pre => {
      if (pre.parentElement && pre.parentElement.classList.contains('code-block-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-code-btn';
      copyBtn.type = 'button';
      copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> <span>نسخ</span>';

      copyBtn.onclick = () => {
        const codeText = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
          copyBtn.querySelector('span').textContent = 'تم النسخ!';
          setTimeout(() => {
            copyBtn.querySelector('span').textContent = 'نسخ';
          }, 2000);
        });
      };

      wrapper.appendChild(copyBtn);
    });
  }

  function enhanceMarkdownTables(container) {
    if (!container) return;
    const tables = container.querySelectorAll('table');
    tables.forEach(table => {
      if (table.parentElement && table.parentElement.classList.contains('table-responsive')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'table-responsive';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  // --- Relative Time Formatter (e.g. "منذ أسبوعين", "منذ شهر", "2 weeks ago") ---
  function getRelativeTimeString(dateStr, langCode) {
    if (!dateStr) return '';
    const now = new Date();
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    const diffMs = now.getTime() - date.getTime();
    const isAr = (langCode === 'ar');

    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays <= 0) {
      if (diffHours <= 1) return isAr ? 'منذ قليل' : 'Just now';
      return isAr ? `منذ ${diffHours} ساعات` : `${diffHours} hours ago`;
    }
    if (diffDays === 1) return isAr ? 'أمس' : 'Yesterday';
    if (diffDays === 2) return isAr ? 'منذ يومين' : '2 days ago';
    if (diffDays < 7) return isAr ? `منذ ${diffDays} أيام` : `${diffDays} days ago`;

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) return isAr ? 'منذ أسبوع' : '1 week ago';
    if (diffWeeks === 2) return isAr ? 'منذ أسبوعين' : '2 weeks ago';
    if (diffWeeks < 4) return isAr ? `منذ ${diffWeeks} أسابيع` : `${diffWeeks} weeks ago`;

    const diffMonths = Math.floor(diffDays / 30.4);
    if (diffMonths <= 1) return isAr ? 'منذ شهر' : '1 month ago';
    if (diffMonths === 2) return isAr ? 'منذ شهرين' : '2 months ago';
    if (diffMonths < 11) {
      return isAr ? `منذ ${diffMonths} أشهر` : `${diffMonths} months ago`;
    }

    const diffYears = Math.floor(diffDays / 365);
    if (diffYears <= 1) return isAr ? 'منذ سنة' : '1 year ago';
    if (diffYears === 2) return isAr ? 'منذ سنتين' : '2 years ago';
    return isAr ? `منذ ${diffYears} سنوات` : `${diffYears} years ago`;
  }

  function renderArticleCardHtml(article, category, data, langCode) {
    const catTitle = typeof category.title === 'object' ? (category.title[langCode] || category.title.ar || category.title.en) : category.title;
    const artTitle = typeof article.title === 'object' ? (article.title[langCode] || article.title.ar || article.title.en) : article.title;
    const artDesc = typeof article.description === 'object' ? (article.description[langCode] || article.description.ar || article.description.en) : article.description;
    const readTime = typeof article.readTime === 'object' ? (article.readTime[langCode] || article.readTime.ar || article.readTime.en) : article.readTime;
    const readMoreLabel = (data.articles && data.articles.readMore) ? data.articles.readMore : (langCode === 'ar' ? 'قراءة المقال' : 'Read Article');
    const catColor = category.color || '#3b82f6';
    const iconSvg = ICONS[category.icon] || ICONS.code;
    const relativeDate = getRelativeTimeString(article.date, langCode);

    const coverHtml = article.cover
      ? `<img src="${article.cover}" alt="${artTitle}" loading="lazy">`
      : `
        <div class="article-cover-mockup" style="--cat-color: ${catColor};">
          <div class="article-cover-icon">${iconSvg}</div>
        </div>
      `;

    const articleUrl = `article.html?folder=${category.folder}&file=${article.file}`;

    return `
      <article class="article-card" data-category="${category.folder}" style="--cat-color: ${catColor};">
        <a href="${articleUrl}" class="article-card-cover">
          ${coverHtml}
        </a>
        <div class="article-card-body">
          <div class="article-card-meta">
            <span class="article-category-badge">${catTitle}</span>
            <span class="article-date">${relativeDate}</span>
            <span class="article-readtime">• ${readTime}</span>
          </div>
          <h3 class="article-card-title">
            <a href="${articleUrl}">${artTitle}</a>
          </h3>
          <p class="article-card-desc">${artDesc}</p>
          <div class="article-card-footer">
            <a href="${articleUrl}" class="article-read-link">
              <span>${readMoreLabel}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  async function renderArticleReader(langCode, data) {
    const params = new URLSearchParams(window.location.search);
    const folder = params.get('folder');
    const file = params.get('file');
    const slug = params.get('slug');

    let targetCategory = null;
    let targetArticle = null;

    if (articlesData && Array.isArray(articlesData.categories)) {
      for (const cat of articlesData.categories) {
        for (const art of (cat.articles || [])) {
          if ((folder && file && cat.folder === folder && art.file === file) ||
              (slug && art.slug === slug)) {
            targetCategory = cat;
            targetArticle = art;
            break;
          }
        }
        if (targetArticle) break;
      }
    }

    if (!targetArticle && articlesData && articlesData.categories && articlesData.categories[0] && articlesData.categories[0].articles[0]) {
      targetCategory = articlesData.categories[0];
      targetArticle = targetCategory.articles[0];
    }

    if (!targetArticle) return;

    const catTitle = typeof targetCategory.title === 'object' ? (targetCategory.title[langCode] || targetCategory.title.ar || targetCategory.title.en) : targetCategory.title;
    const artTitle = typeof targetArticle.title === 'object' ? (targetArticle.title[langCode] || targetArticle.title.ar || targetArticle.title.en) : targetArticle.title;
    const artDesc = typeof targetArticle.description === 'object' ? (targetArticle.description[langCode] || targetArticle.description.ar || targetArticle.description.en) : targetArticle.description;
    const readTime = typeof targetArticle.readTime === 'object' ? (targetArticle.readTime[langCode] || targetArticle.readTime.ar || targetArticle.readTime.en) : targetArticle.readTime;
    const catColor = targetCategory.color || '#3b82f6';

    document.title = `${artTitle} | ${data.hero ? data.hero.title : 'Portfolio'}`;

    const breadcrumbHome = document.getElementById('breadcrumb-home');
    const breadcrumbArticles = document.getElementById('breadcrumb-articles');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');

    if (breadcrumbHome) breadcrumbHome.textContent = data.nav.home || (langCode === 'ar' ? 'الرئيسية' : 'Home');
    if (breadcrumbArticles) breadcrumbArticles.textContent = data.nav.articles || (langCode === 'ar' ? 'المقالات' : 'Articles');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = artTitle;

    const badge = document.getElementById('article-category-badge');
    const dateElem = document.getElementById('article-date');
    const readTimeElem = document.getElementById('article-readtime');
    const mainTitle = document.getElementById('article-main-title');
    const mainDesc = document.getElementById('article-main-desc');
    const tagsElem = document.getElementById('article-tags');

    if (badge) {
      badge.textContent = catTitle;
      badge.style.setProperty('--cat-color', catColor);
      removeSkeleton(badge);
    }
    if (dateElem) {
      dateElem.textContent = getRelativeTimeString(targetArticle.date, langCode);
      removeSkeleton(dateElem);
    }
    if (readTimeElem) {
      readTimeElem.textContent = `• ${readTime}`;
      removeSkeleton(readTimeElem);
    }
    if (mainTitle) {
      mainTitle.textContent = artTitle;
      removeSkeleton(mainTitle);
    }
    if (mainDesc) {
      mainDesc.textContent = artDesc;
      removeSkeleton(mainDesc);
    }
    if (tagsElem && Array.isArray(targetArticle.tags)) {
      tagsElem.innerHTML = targetArticle.tags.map(t => `<span class="tag">${t}</span>`).join('');
    }

    const backBtnText = document.getElementById('article-back-text');
    const copyBtnText = document.getElementById('article-copy-text');
    const copyLinkBtn = document.getElementById('article-copy-link-btn');

    if (backBtnText) backBtnText.textContent = data.articles && data.articles.backToArticles ? data.articles.backToArticles : (langCode === 'ar' ? 'العودة إلى المقالات' : 'Back to Articles');
    if (copyBtnText) copyBtnText.textContent = data.articles && data.articles.copyLink ? data.articles.copyLink : (langCode === 'ar' ? 'نسخ الرابط' : 'Copy Link');

    if (copyLinkBtn) {
      copyLinkBtn.onclick = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          if (copyBtnText) {
            copyBtnText.textContent = data.articles && data.articles.linkCopied ? data.articles.linkCopied : (langCode === 'ar' ? 'تم نسخ الرابط!' : 'Link Copied!');
            setTimeout(() => {
              copyBtnText.textContent = data.articles && data.articles.copyLink ? data.articles.copyLink : (langCode === 'ar' ? 'نسخ الرابط' : 'Copy Link');
            }, 2500);
          }
        });
      };
    }

    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const progress = docHeight > 0 ? (scrollPos / docHeight) * 100 : 0;
      const progressBar = document.getElementById('reading-progress-bar');
      if (progressBar) progressBar.style.width = `${progress}%`;
    });

    const contentElem = document.getElementById('article-content');
    if (contentElem) {
      let mdText = '';
      try {
        const mdRes = await fetch(`articles/${targetCategory.folder}/${targetArticle.file}?t=${Date.now()}`, { cache: 'no-store' });
        if (mdRes.ok) {
          mdText = await mdRes.text();
        }
      } catch (fetchErr) {
        console.error('[Portfolio] Error fetching markdown:', fetchErr);
      }

      if (mdText) {
        contentElem.innerHTML = parseMarkdown(mdText);
        if (typeof window.Prism !== "undefined" && typeof window.Prism.highlightAllUnder === "function") {
          window.Prism.highlightAllUnder(contentElem);
        }
        enhanceMarkdownCodeBlocks(contentElem);
        enhanceMarkdownTables(contentElem);
      } else {
        console.error('[Portfolio] Failed to load markdown article');
        contentElem.innerHTML = `
          <div class="article-error-state" style="padding: 2rem; text-align: center; color: var(--muted-foreground);">
            <p>${langCode === 'ar' ? 'تعذر تحميل ملف المقال. يرجى التأكد من تشغيل الموقع عبر خادم محلي.' : 'Could not load article markdown file. Please ensure the site is served via a web server.'}</p>
          </div>
        `;
      }
    }
  }

  
  // --- Feature Toggles Engine (Enable/Disable sections from config.json) ---
  function applyFeatureToggles(features) {
    if (!features || typeof features !== 'object') return;

    const featureMappings = {
      skills: { section: '#skills', nav: '#nav-skills' },
      projects: { section: '#projects', nav: '#nav-projects' },
      articles: { section: '#articles', nav: '#nav-articles', bnav: '#bottom-nav-bar [data-page="articles"], #bnav-articles' },
      books: { nav: '#nav-books', bnav: '#bottom-nav-bar [data-page="books"], #bnav-books' },
      testimonials: { section: '#testimonials', nav: '#nav-testimonials' },
      contact: { section: '#contact', nav: '#nav-contact' }
    };

    Object.keys(featureMappings).forEach(feat => {
      const isEnabled = features[feat] !== false;
      const mapping = featureMappings[feat];

      if (mapping.section) {
        document.querySelectorAll(mapping.section).forEach(secElem => {
          if (!isEnabled) {
            secElem.style.setProperty('display', 'none', 'important');
          } else {
            secElem.style.removeProperty('display');
          }
        });
      }
      if (mapping.nav) {
        document.querySelectorAll(mapping.nav).forEach(navElem => {
          if (!isEnabled) {
            navElem.style.setProperty('display', 'none', 'important');
          } else {
            navElem.style.removeProperty('display');
          }
        });
      }
      if (mapping.bnav) {
        document.querySelectorAll(mapping.bnav).forEach(bnavElem => {
          if (!isEnabled) {
            bnavElem.style.setProperty('display', 'none', 'important');
          } else {
            bnavElem.style.removeProperty('display');
          }
        });
      }

      if (feat === "articles" && !isEnabled && window.location.pathname.includes("article")) {
        const mainElem = document.querySelector("main");
        if (mainElem) {
          mainElem.innerHTML = `<div class="container" style="text-align: center; padding: 6rem 1rem;"><p style="font-size: 1.25rem; color: var(--muted-foreground); margin-bottom: 1.5rem;">${document.documentElement.lang === "ar" ? "هذا القسم غير مفعل حالياً في الإعدادات." : "This section is currently disabled."}</p><a href="index.html" class="btn btn-primary">${document.documentElement.lang === "ar" ? "العودة إلى الرئيسية" : "Return Home"}</a></div>`;
        }
      }
      if (feat === "books" && !isEnabled && window.location.pathname.includes("books")) {
        const mainElem = document.querySelector("main");
        if (mainElem) {
          mainElem.innerHTML = `<div class="container" style="text-align: center; padding: 6rem 1rem;"><p style="font-size: 1.25rem; color: var(--muted-foreground); margin-bottom: 1.5rem;">${document.documentElement.lang === "ar" ? "هذا القسم غير مفعل حالياً في الإعدادات." : "This section is currently disabled."}</p><a href="index.html" class="btn btn-primary">${document.documentElement.lang === "ar" ? "العودة إلى الرئيسية" : "Return Home"}</a></div>`;
        }
      }
      if (feat === "projects" && !isEnabled && window.location.pathname.includes("projects")) {
        const mainElem = document.querySelector("main");
        if (mainElem) {
          mainElem.innerHTML = `<div class="container" style="text-align: center; padding: 6rem 1rem;"><p style="font-size: 1.25rem; color: var(--muted-foreground); margin-bottom: 1.5rem;">${document.documentElement.lang === "ar" ? "هذا القسم غير مفعل حالياً في الإعدادات." : "This section is currently disabled."}</p><a href="index.html" class="btn btn-primary">${document.documentElement.lang === "ar" ? "العودة إلى الرئيسية" : "Return Home"}</a></div>`;
        }
      }
    });
  }

  // --- Profile Rendering Engine ---
  function renderProfile(langCode) {
    const langConfig = appConfig.languages.find(l => l.code === langCode) || appConfig.languages[0];
    const data = loadedLanguages[langCode];
    if (!data) return;

    // 1. Set HTML Lang and Direction
    document.documentElement.lang = langConfig.code;
    document.documentElement.dir = langConfig.dir;

    // Apply Site-Wide Font Configuration
    applyConfiguredFont(langConfig);

    if (data.meta) {
      document.title = data.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', data.meta.description);
    }

    // 2. Navigation
    applyFeatureToggles(appConfig.features);
    const navBrand = document.getElementById('nav-brand');
    const navHome = document.getElementById('nav-home');
    const navSkills = document.getElementById('nav-skills');
    const navProjects = document.getElementById('nav-projects');
    const navArticles = document.getElementById('nav-articles');
    const navBooks = document.getElementById('nav-books');
    const navTestimonials = document.getElementById('nav-testimonials');
    const navContact = document.getElementById('nav-contact');
    const langBtnText = document.getElementById('lang-btn-text');
    const currentLangText = document.getElementById('current-lang-text');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');

    if (navBrand) {
      navBrand.textContent = data.nav.brand;
      removeSkeleton(navBrand);
    }
    if (navHome) {
      navHome.textContent = data.nav.home || (langCode === 'ar' ? 'الرئيسية' : 'Home');
      removeSkeleton(navHome);
    }
    if (navSkills) {
      navSkills.textContent = data.nav.skills;
      removeSkeleton(navSkills);
    }
    if (navProjects) {
      navProjects.textContent = data.nav.projects;
      removeSkeleton(navProjects);
    }
    if (navArticles) {
      navArticles.textContent = data.nav.articles || (langCode === 'ar' ? 'المقالات' : 'Articles');
      removeSkeleton(navArticles);
    }
    if (navBooks) {
      navBooks.textContent = data.nav.books || (langCode === 'ar' ? 'الكتب' : 'Books');
      removeSkeleton(navBooks);
    }
    if (navTestimonials) {
      navTestimonials.textContent = data.nav.testimonials || (langCode === 'ar' ? 'التوصيات' : 'Testimonials');
      removeSkeleton(navTestimonials);
    }
    if (navContact) {
      navContact.textContent = data.nav.contact;
      removeSkeleton(navContact);
    }

    // Mobile Bottom Navigation Bar Labels & Active Indicator
    const bnavHome = document.getElementById('bnav-home');
    const bnavArticles = document.getElementById('bnav-articles');
    const bnavBooks = document.getElementById('bnav-books');
    if (bnavHome) bnavHome.textContent = data.nav.home || (langCode === 'ar' ? 'الرئيسية' : 'Home');
    if (bnavArticles) bnavArticles.textContent = data.nav.articles || (langCode === 'ar' ? 'المقالات' : 'Articles');
    if (bnavBooks) bnavBooks.textContent = data.nav.books || (langCode === 'ar' ? 'الكتب' : 'Books');

    const currentPath = window.location.pathname;
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      const page = item.getAttribute('data-page');
      const isHome = (page === 'home' && (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === ''));
      const isArticles = (page === 'articles' && (currentPath.includes('article')));
      const isBooks = (page === 'books' && currentPath.includes('books'));
      item.classList.toggle('active', isHome || isArticles || isBooks);
    });

    // Active Language Label on the Dropdown Button
    if (currentLangText) {
      currentLangText.textContent = langConfig.name;
      removeSkeleton(currentLangText);
    }

    // Next Language Label on the legacy Switcher Button (if present)
    if (langBtnText) {
      const currentIndex = appConfig.languages.findIndex(l => l.code === langCode);
      const nextIndex = (currentIndex + 1) % appConfig.languages.length;
      const nextLangConfig = appConfig.languages[nextIndex];
      langBtnText.textContent = nextLangConfig.name;
      removeSkeleton(langBtnText);
    }

    // Populate Language Dropdown Menu Items
    if (langDropdownMenu && Array.isArray(appConfig.languages)) {
      langDropdownMenu.innerHTML = appConfig.languages.map(l => {
        const isActive = l.code === langCode;
        return `
          <button type="button" class="lang-dropdown-item ${isActive ? 'active' : ''}" role="menuitem" data-code="${l.code}">
            <span>${l.name}</span>
            ${isActive ? '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
          </button>
        `;
      }).join('');

      langDropdownMenu.querySelectorAll('.lang-dropdown-item').forEach(item => {
        item.onclick = (e) => {
          e.stopPropagation();
          const code = item.getAttribute('data-code');
          if (code) {
            window.selectLanguage(code);
          }
        };
      });
    }

    // 3. Hero Section (Index Page)
    const heroBadgeText = document.getElementById('hero-badge-text') || document.getElementById('hero-badge');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroDesc = document.getElementById('hero-desc');
    const heroViewWork = document.getElementById('hero-view-work');
    const heroGetInTouch = document.getElementById('hero-get-in-touch');
    const heroImg = document.getElementById('hero-img') || document.getElementById('hero-avatar');

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

    // 4. Skills Section (Index Page)
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

    // 5. Projects Section (Index Page: Shows first 3 projects only)
    const projectsTitle = document.getElementById('projects-title');
    const projectsDesc = document.getElementById('projects-desc');
    const projectsWrapper = document.getElementById('projects-wrapper');
    const projectsViewAll = document.getElementById('projects-view-all');

    if (projectsTitle) {
      projectsTitle.textContent = data.projects.title;
      removeSkeleton(projectsTitle);
    }
    if (projectsDesc) {
      projectsDesc.textContent = data.projects.description;
      removeSkeleton(projectsDesc);
    }

    if (projectsWrapper && Array.isArray(data.projects.items)) {
      const topProjects = data.projects.items.slice(0, 3);
      projectsWrapper.innerHTML = topProjects.map(p => renderProjectCardHtml(p, data)).join('');
    }

    if (projectsViewAll) {
      projectsViewAll.textContent = data.projects.viewAll || (langCode === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects');
      removeSkeleton(projectsViewAll);
    }

    // 5b. Articles Section (Index Page: Shows first 3 articles only)
    const homeArticlesTitle = document.getElementById('articles-title');
    const homeArticlesDesc = document.getElementById('articles-desc');
    const homeArticlesWrapper = document.getElementById('home-articles-wrapper');
    const homeArticlesViewAll = document.getElementById('articles-view-all');

    if (homeArticlesTitle) {
      homeArticlesTitle.textContent = data.articles ? data.articles.title : (langCode === 'ar' ? 'أحدث المقالات التقنية' : 'Latest Articles');
      removeSkeleton(homeArticlesTitle);
    }
    if (homeArticlesDesc) {
      homeArticlesDesc.textContent = data.articles ? data.articles.description : '';
      removeSkeleton(homeArticlesDesc);
    }

    if (homeArticlesWrapper) {
      if (!articlesData || !articlesData.categories || articlesData.categories.length === 0) {
        if (window.I18N_DATA && window.I18N_DATA.articles) {
          articlesData = window.I18N_DATA.articles;
        }
      }
      if (articlesData && Array.isArray(articlesData.categories)) {
        const allArticlesList = [];
        articlesData.categories.forEach(cat => {
          (cat.articles || []).forEach(art => {
            allArticlesList.push({ article: art, category: cat });
          });
        });
        allArticlesList.sort((a, b) => new Date(b.article.date) - new Date(a.article.date));
        const topArticles = allArticlesList.slice(0, 3);
        homeArticlesWrapper.innerHTML = topArticles.map(item => renderArticleCardHtml(item.article, item.category, data, langCode)).join('');
      }
    }

    if (homeArticlesViewAll) {
      homeArticlesViewAll.textContent = data.articles && data.articles.allCategories ? (langCode === 'ar' ? 'عرض جميع المقالات' : 'View All Articles') : (langCode === 'ar' ? 'عرض جميع المقالات' : 'View All Articles');
      removeSkeleton(homeArticlesViewAll);
    }

    // 6. Testimonials Section (Index Page: Rendered without translations from sharedData)
    const testimonialsTitle = document.getElementById('testimonials-title');
    const testimonialsDesc = document.getElementById('testimonials-desc');
    const testimonialsWrapper = document.getElementById('testimonials-wrapper');

    if (testimonialsTitle) {
      testimonialsTitle.textContent = data.testimonials ? data.testimonials.title : (langCode === 'ar' ? 'شهادات وتوصيات' : 'Testimonials');
      removeSkeleton(testimonialsTitle);
    }
    if (testimonialsDesc) {
      testimonialsDesc.textContent = data.testimonials ? data.testimonials.description : '';
      removeSkeleton(testimonialsDesc);
    }

    if (testimonialsWrapper) {
      const testimonials = sharedData.testimonials || [];
      testimonialsWrapper.innerHTML = testimonials.map(t => {
        const stars = Array(t.rating || 5).fill(ICONS.star).join('');
        const avatarContent = t.avatar
          ? `<img src="${t.avatar}" alt="${t.name}">`
          : (t.name ? t.name.trim().charAt(0) : 'U');

        // Detect whether testimonial content is primarily Arabic or English/LTR
        const isArabic = /[\u0600-\u06FF]/.test(t.content || '');
        const dirAttr = isArabic ? 'rtl' : 'ltr';

        return `
          <div class="testimonial-card" dir="${dirAttr}">
            <div class="testimonial-quote-icon">${ICONS.quote}</div>
            <p class="testimonial-content">"${t.content}"</p>
            <div class="testimonial-footer">
              <div class="testimonial-avatar">
                ${avatarContent}
              </div>
              <div class="testimonial-info">
                <h4 class="testimonial-name">${t.name}</h4>
                <p class="testimonial-role">${t.role}${t.project ? ` • ${t.project}` : ''}</p>
                <div class="testimonial-rating">${stars}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 7. Dedicated Projects Page (projects.html)
    const allProjectsWrapper = document.getElementById('all-projects-wrapper');
    const categoryFilters = document.getElementById('category-filters');
    const projectsPageTitle = document.getElementById('projects-page-title');
    const projectsPageDesc = document.getElementById('projects-page-desc');

    if (projectsPageTitle) {
      projectsPageTitle.textContent = data.projects.title;
      removeSkeleton(projectsPageTitle);
    }
    if (projectsPageDesc) {
      projectsPageDesc.textContent = data.projects.description;
      removeSkeleton(projectsPageDesc);
    }

    if (allProjectsWrapper && Array.isArray(data.projects.items)) {
      const items = data.projects.items;
      const categories = ['all', ...Array.from(new Set(items.map(p => p.category).filter(Boolean)))];
      const allLabel = data.projects.allCategories || (langCode === 'ar' ? 'جميع المشاريع' : 'All Projects');

      if (categoryFilters) {
        categoryFilters.innerHTML = categories.map(cat => {
          const label = cat === 'all' ? allLabel : cat;
          const isActive = cat === currentProjectsFilter ? 'active' : '';
          return `<button class="filter-btn ${isActive}" data-category="${cat}">${label}</button>`;
        }).join('');

        categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
          btn.onclick = () => {
            currentProjectsFilter = btn.getAttribute('data-category');
            categoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects();
          };
        });
      }

      function filterProjects() {
        const filtered = currentProjectsFilter === 'all'
          ? items
          : items.filter(p => p.category === currentProjectsFilter);
        allProjectsWrapper.innerHTML = filtered.map(p => renderProjectCardHtml(p, data)).join('');
      }

      filterProjects();
    }

    // 8. Dedicated Books Page (books.html)
    const booksWrapper = document.getElementById('books-wrapper');
    const booksCategoryFilters = document.getElementById('books-category-filters');
    const booksPageTitle = document.getElementById('books-page-title');
    const booksPageDesc = document.getElementById('books-page-desc');

    if (booksPageTitle) {
      booksPageTitle.textContent = data.books ? data.books.title : (langCode === 'ar' ? 'كتبي ومؤلفاتي التقنية' : 'Technical Books');
      removeSkeleton(booksPageTitle);
    }
    if (booksPageDesc) {
      booksPageDesc.textContent = data.books ? data.books.description : '';
      removeSkeleton(booksPageDesc);
    }

    if (booksWrapper && data.books && Array.isArray(data.books.items)) {
      const items = data.books.items;
      const categories = ['all', ...Array.from(new Set(items.map(b => b.category).filter(Boolean)))];
      const allLabel = data.books.allCategories || (langCode === 'ar' ? 'جميع التصنيفات' : 'All Categories');

      if (booksCategoryFilters) {
        booksCategoryFilters.innerHTML = categories.map(cat => {
          const label = cat === 'all' ? allLabel : cat;
          const isActive = cat === currentBooksFilter ? 'active' : '';
          return `<button class="filter-btn ${isActive}" data-category="${cat}">${label}</button>`;
        }).join('');

        booksCategoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
          btn.onclick = () => {
            currentBooksFilter = btn.getAttribute('data-category');
            booksCategoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterBooks();
          };
        });
      }

      function filterBooks() {
        const filtered = currentBooksFilter === 'all'
          ? items
          : items.filter(b => b.category === currentBooksFilter);
        booksWrapper.innerHTML = filtered.map(b => renderBookCardHtml(b, data, langCode)).join('');
      }

      filterBooks();
    }

    // 10. Dedicated Articles Page (articles.html)
    const articlesPageTitle = document.getElementById('articles-page-title');
    const articlesPageDesc = document.getElementById('articles-page-desc');
    const categoriesShowcase = document.getElementById('categories-showcase');
    const articlesCategoryFilters = document.getElementById('articles-category-filters');
    const articlesWrapper = document.getElementById('articles-wrapper');

    if (articlesPageTitle) {
      articlesPageTitle.textContent = data.articles ? data.articles.title : (langCode === 'ar' ? 'المقالات والأبحاث التقنية' : 'Technical Articles');
      removeSkeleton(articlesPageTitle);
    }
    if (articlesPageDesc) {
      articlesPageDesc.textContent = data.articles ? data.articles.description : '';
      removeSkeleton(articlesPageDesc);
    }

    if (articlesWrapper) {
      if (articlesData && Array.isArray(articlesData.categories)) {
        const allCategories = articlesData.categories;
      const countLabel = data.articles && data.articles.articleCount ? data.articles.articleCount : (langCode === 'ar' ? 'مقالات' : 'Articles');
      const allLabel = data.articles && data.articles.allCategories ? data.articles.allCategories : (langCode === 'ar' ? 'جميع التصنيفات' : 'All Categories');

      // Category Filter Chips (UX Optimized)
      const activeCategoryInfo = document.getElementById('active-category-info');
      const activeCategoryDesc = document.getElementById('active-category-desc');

      if (articlesCategoryFilters) {
        let totalCount = 0;
        allCategories.forEach(c => { totalCount += (c.articles || []).length; });

        const filterItems = [
          { folder: 'all', title: allLabel, count: totalCount, icon: 'layers', color: 'var(--primary)', desc: '' },
          ...allCategories.map(c => ({
            folder: c.folder,
            title: typeof c.title === 'object' ? (c.title[langCode] || c.title.ar || c.title.en) : c.title,
            count: (c.articles || []).length,
            icon: c.icon,
            color: c.color || '#3b82f6',
            desc: typeof c.description === 'object' ? (c.description[langCode] || c.description.ar || c.description.en) : c.description
          }))
        ];

        articlesCategoryFilters.innerHTML = filterItems.map(f => {
          const isActive = f.folder === currentArticlesFilter ? 'active' : '';
          const iconSvg = ICONS[f.icon] || ICONS.code;
          return `
            <button class="category-chip ${isActive}" data-category="${f.folder}" style="--cat-color: ${f.color};">
              <span class="chip-icon">${iconSvg}</span>
              <span class="chip-title">${f.title}</span>
              <span class="chip-count">${f.count}</span>
            </button>
          `;
        }).join('');

        articlesCategoryFilters.querySelectorAll('.category-chip').forEach(btn => {
          btn.onclick = () => {
            currentArticlesFilter = btn.getAttribute('data-category');
            updateArticlesView();
          };
        });
      }

      function updateArticlesView() {
        if (articlesCategoryFilters) {
          articlesCategoryFilters.querySelectorAll('.category-chip').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-category') === currentArticlesFilter);
          });
        }

        // Show description of selected category if not 'all'
        if (activeCategoryInfo && activeCategoryDesc) {
          if (currentArticlesFilter !== 'all') {
            const selCat = allCategories.find(c => c.folder === currentArticlesFilter);
            if (selCat) {
              const d = typeof selCat.description === 'object' ? (selCat.description[langCode] || selCat.description.ar || selCat.description.en) : selCat.description;
              activeCategoryDesc.textContent = d;
              activeCategoryInfo.style.display = 'block';
            } else {
              activeCategoryInfo.style.display = 'none';
            }
          } else {
            activeCategoryInfo.style.display = 'none';
          }
        }

        const filteredList = [];
        allCategories.forEach(cat => {
          if (currentArticlesFilter === 'all' || cat.folder === currentArticlesFilter) {
            (cat.articles || []).forEach(art => {
              filteredList.push({ article: art, category: cat });
            });
          }
        });
        filteredList.sort((a, b) => new Date(b.article.date) - new Date(a.article.date));

        articlesWrapper.innerHTML = filteredList.length > 0
          ? filteredList.map(item => renderArticleCardHtml(item.article, item.category, data, langCode)).join('')
          : `<p class="text-muted" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">${langCode === 'ar' ? 'لا توجد مقالات في هذا التصنيف حالياً.' : 'No articles in this category yet.'}</p>`;
      }

      updateArticlesView();
    }
  }

    // 11. Dedicated Article Reader Page (article.html)
    const articleContentElem = document.getElementById('article-content');
    if (articleContentElem) {
      renderArticleReader(langCode, data);
      initArticleReaderFontSwitcher(langCode);
    }

    // 12. Contact Section
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

    // 10. Footer
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

    // 11. Apply Feature Toggles & Re-observe sections for scroll active state
    applyFeatureToggles(appConfig.features);
    setupScrollObserver();
  }

  // --- Helper to merge UI translations and personal content ---
  function mergeLanguageData(uiData, contentData) {
    const ui = uiData || {};
    const content = contentData || {};
    return {
      meta: content.meta || ui.meta || {},
      nav: ui.nav || {},
      hero: Object.assign({}, ui.hero, content.hero),
      skills: {
        title: (ui.skills && ui.skills.title) || '',
        description: (ui.skills && ui.skills.description) || '',
        categories: Array.isArray(content.skills) ? content.skills : ((content.skills && content.skills.categories) || [])
      },
      projects: {
        title: (ui.projects && ui.projects.title) || '',
        description: (ui.projects && ui.projects.description) || '',
        viewGithub: (ui.projects && ui.projects.viewGithub) || 'View on GitHub',
        liveDemo: (ui.projects && ui.projects.liveDemo) || 'Live Demo',
        viewAll: (ui.projects && ui.projects.viewAll) || 'View All',
        allCategories: (ui.projects && ui.projects.allCategories) || 'All Projects',
        items: Array.isArray(content.projects) ? content.projects : ((content.projects && content.projects.items) || [])
      },
      books: {
        title: (ui.books && ui.books.title) || '',
        description: (ui.books && ui.books.description) || '',
        allCategories: (ui.books && ui.books.allCategories) || 'All Categories',
        readPdf: (ui.books && ui.books.readPdf) || 'Read Book',
        downloadPdf: (ui.books && ui.books.downloadPdf) || 'Download PDF',
        pages: (ui.books && ui.books.pages) || 'Pages',
        items: Array.isArray(content.books) ? content.books : ((content.books && content.books.items) || [])
      },
      articles: ui.articles || {},
      testimonials: ui.testimonials || {},
      contact: Object.assign({}, ui.contact, content.contact),
      footer: ui.footer || {}
    };
  }

  // --- Fetch Language Files (Content + UI) or Use Inlined Fallback ---
  async function loadLanguage(langCode) {
    if (loadedLanguages[langCode]) {
      renderProfile(langCode);
      return;
    }

    // 1. Try loading separate data/{lang}/content.json & data/{lang}/ui.json
    try {
      const [contentRes, uiRes] = await Promise.all([
        fetch(`data/${langCode}/content.json?t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`data/${langCode}/ui.json?t=${Date.now()}`, { cache: 'no-store' })
      ]);
      if (contentRes.ok && uiRes.ok) {
        const contentData = await contentRes.json();
        const uiData = await uiRes.json();
        loadedLanguages[langCode] = mergeLanguageData(uiData, contentData);
        renderProfile(langCode);
        return;
      } else {
        console.error(`[Portfolio] Could not load content or ui for language: ${langCode}`);
      }
    } catch (err) {
      console.error(`[Portfolio] Failed to load language files for ${langCode}:`, err);
    }
  }

  // --- Language Selection & Dropdown Engine ---
  function closeLangDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const btn = document.getElementById('lang-dropdown-btn');
    if (dropdown) dropdown.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function toggleLangDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const btn = document.getElementById('lang-dropdown-btn');
    if (!dropdown || !btn) return;
    const isOpen = dropdown.classList.contains('open');
    if (isOpen) {
      closeLangDropdown();
    } else {
      dropdown.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  window.selectLanguage = function (code) {
    if (code === currentLangCode) {
      closeLangDropdown();
      return;
    }
    currentLangCode = code;
    safeSetStorage('portfolio_lang', currentLangCode);
    closeLangDropdown();
    loadLanguage(currentLangCode);
    console.log('[Portfolio] Selected language:', currentLangCode);
  };

  // Legacy cycle switch support
  window.switchLanguage = function () {
    const currentIndex = appConfig.languages.findIndex(l => l.code === currentLangCode);
    const nextIndex = (currentIndex + 1) % appConfig.languages.length;
    window.selectLanguage(appConfig.languages[nextIndex].code);
  };

  function initLanguage() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
      langBtn.onclick = window.switchLanguage;
    }

    const langDropdownBtn = document.getElementById('lang-dropdown-btn');
    const langDropdown = document.getElementById('lang-dropdown');

    if (langDropdownBtn && langDropdown) {
      langDropdownBtn.onclick = (e) => {
        e.stopPropagation();
        toggleLangDropdown();
      };

      document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
          closeLangDropdown();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeLangDropdown();
        }
      });
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
              } else if (!item.getAttribute('href').endsWith('.html')) {
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
    // 1. Load config.json, shared.json, & articles/categories.json from server
    try {
      const configRes = await fetch(`data/config.json?t=${Date.now()}`, { cache: 'no-store' }).catch(() => null);
      if (configRes && configRes.ok) {
        const fetchedConfig = await configRes.json();
        appConfig = Object.assign({}, appConfig, fetchedConfig);
      }
    } catch (_) {}

    try {
      const sharedRes = await fetch(`data/shared.json?t=${Date.now()}`, { cache: 'no-store' }).catch(() => null);
      if (sharedRes && sharedRes.ok) sharedData = await sharedRes.json();
    } catch (_) {}

    try {
      const articlesRes = await fetch(`articles/categories.json?t=${Date.now()}`, { cache: 'no-store' }).catch(() => null);
      if (articlesRes && articlesRes.ok) {
        articlesData = await articlesRes.json();
      }
    } catch (_) {}

    // Apply feature toggles right away so disabled elements are hidden immediately without layout shift
    applyFeatureToggles(appConfig.features);

    // Apply site font immediately for active language
    const initialLangConfig = appConfig.languages.find(l => l.code === currentLangCode) || appConfig.languages[0];
    applyConfiguredFont(initialLangConfig);

    // If on article page, apply saved reader font immediately to prevent flash
    const savedReaderFont = safeGetStorage('portfolio_reader_font', '');
    if (savedReaderFont && document.getElementById('article-content')) {
      ensureGoogleFontLoaded(savedReaderFont);
      document.documentElement.style.setProperty('--article-font', `'${savedReaderFont}', var(--font-sans), var(--font-arabic)`);
    }

    const savedReaderScale = safeGetStorage('portfolio_reader_font_scale', '100');
    if (savedReaderScale && document.getElementById('article-content')) {
      const scaleNum = parseInt(savedReaderScale, 10);
      if (!isNaN(scaleNum) && scaleNum >= 80 && scaleNum <= 150) {
        document.documentElement.style.setProperty('--article-font-scale', String(scaleNum / 100));
      }
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
