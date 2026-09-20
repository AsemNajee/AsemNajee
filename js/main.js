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
      },
      testimonials: []
    },
    languages: {}
  };

  let appConfig = fallbackI18n.config;
  let sharedData = fallbackI18n.shared;
  const loadedLanguages = fallbackI18n.languages || {};
  let currentLangCode = safeGetStorage('portfolio_lang', appConfig.defaultLanguage || 'ar');

  // Filter states
  let currentProjectsFilter = 'all';
  let currentBooksFilter = 'all';

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
      element.style.display = '';
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
    const navHome = document.getElementById('nav-home');
    const navSkills = document.getElementById('nav-skills');
    const navProjects = document.getElementById('nav-projects');
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

    // 9. Contact Section
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

    // 11. Re-observe sections for scroll active state
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
