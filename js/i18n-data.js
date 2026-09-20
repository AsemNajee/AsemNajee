/**
 * Fallback Data Store for Local file:// Protocol or Offline Use
 */
window.I18N_DATA = {
  "config": {
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
  },
  "shared": {
    "avatar": "assets/images/logo.webp",
    "socials": {
      "github": "https://github.com/Asemnajee",
      "linkedin": "https://www.linkedin.com/in/asemnajee",
      "telegram": "https://t.me/AsemNajee",
      "email": "asem.a.najee@gmail.com"
    },
    "testimonials": [
      {
        "id": "t1",
        "name": "م. أحمد الغامدي",
        "role": "مدير تقني - شركة حلول البرمجية",
        "avatar": "",
        "content": "عمل عاصم معنا على تطوير الـ Backend لأحد مشاريعنا الكبرى، وكان أداؤه ممتازاً جداً من ناحية سرعة التنفيذ ونظافة الكود والالتزام بالمواعيد.",
        "rating": 5,
        "project": "منصة إدارة الطلبات"
      },
      {
        "id": "t2",
        "name": "Sarah Jenkins",
        "role": "Product Manager, TechFlow",
        "avatar": "",
        "content": "Asem delivered our Flutter mobile app ahead of schedule with top-notch quality. His communication and technical skills are exceptional.",
        "rating": 5,
        "project": "E-Commerce App"
      },
      {
        "id": "t3",
        "name": "د. عبدالمجيد الراوي",
        "role": "مؤسس منصة تعليمية",
        "avatar": "",
        "content": "تجربتي مع عاصم كانت مميزة جداً، قام بهندسة نظام الـ API وقواعد البيانات بكفاءة عالية مما ساعدنا على التوسع السلس.",
        "rating": 5,
        "project": "نظام إدارة الطلاب"
      }
    ]
  },
  "languages": {
    "ar": {
      "meta": {
        "title": "عاصم عبدالله ناجي | معرض الأعمال والملف الشخصي",
        "description": "عاصم عبدالله ناجي - طالب هندسة برمجيات ومطور برمجيات متكامل"
      },
      "nav": {
        "brand": "عاصم",
        "home": "الرئيسية",
        "skills": "المهارات",
        "projects": "المشاريع",
        "articles": "المقالات",
        "books": "الكتب",
        "testimonials": "التوصيات",
        "contact": "تواصل معي"
      },
      "hero": {
        "badge": "مرحباً بك في ملفي الشخصي",
        "title": "عاصم عبدالله ناجي",
        "subtitle": "طالب هندسة برمجيات ومطور برمجيات",
        "description": "مهندس برمجيات شغوف ببناء تطبيقات الويب والموبايل الحديثة. أدرس حالياً في جامعة تعز، مع خبرة عملية في تطوير الواجهات والخلفيات البرمجية، والتقنيات السحابية، والحلول البرمجية المبتكرة.",
        "viewWork": "استعرض أعمالي",
        "getInTouch": "تواصل معي"
      },
      "skills": {
        "title": "المهارات التقنية",
        "description": "مجموعة متكاملة من التقنيات والأدوات التي أعتمد عليها في بناء تطبيقات قابلة للتوسع، عالية الكفاءة وسهلة الاستخدام.",
        "categories": [
          {
            "id": "backend",
            "title": "الواجهات الخلفية والـ API",
            "icon": "code",
            "items": [
              "Java",
              "Spring Boot",
              "PHP",
              "Laravel",
              "Express.js"
            ]
          },
          {
            "id": "frontend",
            "title": "الواجهات الأمامية والموبايل",
            "icon": "smartphone",
            "items": [
              "React.js",
              "Next.js",
              "TypeScript",
              "Flutter",
              "Dart"
            ]
          },
          {
            "id": "databases",
            "title": "قواعد البيانات",
            "icon": "database",
            "items": [
              "MySQL",
              "MongoDB",
              "SQLite",
              "Supabase",
              "Redis",
              "Firebase"
            ]
          },
          {
            "id": "design",
            "title": "التصميم وتجربة المستخدم",
            "icon": "palette",
            "items": [
              "Tailwind CSS",
              "Figma"
            ]
          },
          {
            "id": "tools",
            "title": "الأدوات والـ DevOps",
            "icon": "terminal",
            "items": [
              "Git",
              "GitHub",
              "Docker",
              "Jira",
              "Postman",
              "Linux"
            ]
          },
          {
            "id": "documentation",
            "title": "التوثيق والكتابة التقنية",
            "icon": "file-text",
            "items": [
              "Markdown",
              "الكتابة التقنية"
            ]
          }
        ]
      },
      "projects": {
        "title": "المشاريع المميزة",
        "description": "استعراض لأبرز المشاريع التي قمت بتطويرها في مجالات الويب، تطبيقات الموبايل والأنظمة الخلفية.",
        "viewGithub": "عرض على GitHub",
        "liveDemo": "معاينة مباشرة",
        "viewAll": "عرض جميع المشاريع",
        "allCategories": "جميع المشاريع",
        "items": [
          {
            "id": "student-api",
            "title": "Student Management API",
            "description": "واجهة برمجة تطبيقات REST شاملة لإدارة الطلاب والمواد والمعلمين. مبنية باستخدام Spring Boot وفق معمارية MVC مع دعم كامل لعمليات CRUD والتحقق من صحة البيانات.",
            "category": "الأنظمة الخلفية والـ APIs",
            "tags": [
              "Java",
              "Spring Boot",
              "MySQL",
              "MVC"
            ],
            "github": "https://github.com/Asemnajee/student-management-api",
            "icon": "code",
            "image": ""
          },
          {
            "id": "flutter-shop",
            "title": "تطبيق متجر إلكتروني (Flutter)",
            "description": "تطبيق متجر إلكتروني متكامل للهواتف الذكية مع ميزات تصفح المنتجات، إدارة السلة والمفضلة، وحسابات المستخدمين وفق أحدث معايير فلاتر.",
            "category": "تطبيقات الموبايل",
            "tags": [
              "Dart",
              "Flutter",
              "إدارة الحالة",
              "تجارة إلكترونية"
            ],
            "github": "https://github.com/Asemnajee/flutter-shopping-application",
            "icon": "smartphone",
            "image": ""
          },
          {
            "id": "javabase-orm",
            "title": "مكتبة JavaBase ORM",
            "description": "مكتبة ORM مخصصة لتطبيقات جافا تسهل التعامل مع قواعد بيانات MySQL و SQLite، مستوحاة من Eloquent في Laravel وتدعم التهجير (Migrations) وإدارة النماذج.",
            "category": "مكتبات وأدوات",
            "tags": [
              "Java",
              "ORM",
              "MySQL",
              "SQLite",
              "قواعد بيانات"
            ],
            "github": "https://github.com/AsemNajee/JavaBase",
            "icon": "database",
            "image": ""
          },
          {
            "id": "ftm-website",
            "title": "موقع معهد تقنيات المستقبل (FTM)",
            "description": "موقع تعريفي حديث لمعهد تقنيات المستقبل مبني باستخدام Next.js و React لعرض برامج المعهد وتسهيل التواصل بتصميم متجاوب بالكامل.",
            "category": "تطبيقات الويب",
            "tags": [
              "JavaScript",
              "Next.js",
              "React",
              "تصميم متجاوب"
            ],
            "github": "https://github.com/AsemNajee/FTM",
            "liveUrl": "https://ftm-yemen.com",
            "icon": "terminal",
            "image": ""
          },
          {
            "id": "task-manager-cli",
            "title": "أداة Task Manager CLI",
            "description": "أداة سطر أوامر تفاعلية وخفيفة الوزن لإدارة المهام والمشاريع مع دعم تصدير التقارير والتخزين المحلي السريع.",
            "category": "مكتبات وأدوات",
            "tags": [
              "Rust",
              "CLI",
              "أدوات المطورين"
            ],
            "github": "https://github.com/Asemnajee",
            "icon": "terminal",
            "image": ""
          },
          {
            "id": "finance-tracker-api",
            "title": "نظام Personal Finance API",
            "description": "واجهة برمجية RESTful لتتبع الميزانية الشخصية والمصروفات الشهرية مع توثيق تفاعلي عبر Swagger ومصادقة JWT.",
            "category": "الأنظمة الخلفية والـ APIs",
            "tags": [
              "Node.js",
              "Express",
              "TypeScript",
              "MongoDB"
            ],
            "github": "https://github.com/Asemnajee",
            "icon": "database",
            "image": ""
          }
        ]
      },
      "books": {
        "title": "كتبي ومؤلفاتي التقنية",
        "description": "مجموعة من الكتب والكتيبات البرمجية والتقنية بصيغة PDF أعددتها لمشاركة المعرفة مع مجتمع المطورين.",
        "allCategories": "جميع التصنيفات",
        "readPdf": "قراءة الكتاب",
        "downloadPdf": "تحميل PDF",
        "pages": "صفحة",
        "items": [
          {
            "id": "book-backend-arch",
            "title": "دليل هندسة الأنظمة الخلفية الحديثة",
            "description": "مرجع شامل لتصميم وتطوير واجهات برمجة التطبيقات (APIs)، معمارية الـ Microservices، وأفضل ممارسات إدارة قواعد البيانات والـ Caching.",
            "category": "هندسة البرمجيات والـ Backend",
            "cover": "",
            "pdfUrl": "#",
            "pages": 180,
            "year": 2025
          },
          {
            "id": "book-flutter-mastery",
            "title": "احتراف تطوير تطبيقات الموبايل باستخدام Flutter",
            "description": "كتاب تطبيقي يغطي بناء التطبيقات من الصفر حتى الإنتاج، إدارة الحالة المتقدمة، واستدعاء الواجهات الخلفية بأمان وكفاءة.",
            "category": "تطوير تطبيقات الموبايل",
            "cover": "",
            "pdfUrl": "#",
            "pages": 220,
            "year": 2024
          },
          {
            "id": "book-clean-code-java",
            "title": "أساسيات الكود النظيف في لغة Java",
            "description": "دليل عملي لكتابة شفرة برمجية قابلة للقراءة والصيانة، تطبيق مبادئ SOLID، وأنماط التصميم الأكثر استخداماً في بيئات العمل.",
            "category": "هندسة البرمجيات والـ Backend",
            "cover": "",
            "pdfUrl": "#",
            "pages": 140,
            "year": 2024
          },
          {
            "id": "book-db-design",
            "title": "مدخل إلى تصميم قواعد البيانات والـ ORM",
            "description": "شرح عملي ومبسط لنظرية قواعد البيانات العلائقية، تصميم المخططات، كتابة الاستعلامات المعقدة، وبناء مكتبات ORM مخصصة.",
            "category": "قواعد البيانات",
            "cover": "",
            "pdfUrl": "#",
            "pages": 160,
            "year": 2023
          }
        ]
      },
      "articles": {
        "title": "المقالات والأبحاث التقنية",
        "description": "شروحات وأدلة برمجية وهندسية معمقة في مجالات تطوير الويب وتطبيقات الموبايل وهندسة البرمجيات.",
        "allCategories": "جميع التصنيفات",
        "articleCount": "مقالات",
        "readMore": "قراءة المقال",
        "backToArticles": "العودة إلى المقالات",
        "copyLink": "نسخ الرابط",
        "linkCopied": "تم نسخ الرابط!"
      },
      "testimonials": {
        "title": "شهادات وتوصيات",
        "description": "آراء وانطباعات من عملت معهم على مشاريع تقنية مختلفة."
      },
      "contact": {
        "title": "دعنا نعمل معاً",
        "description": "أنا مهتم دائماً بسماع الأفكار والمشاريع الجديدة والفرص الواعدة. لا تتردد في التواصل معي!",
        "sendEmail": "راسلني عبر البريد",
        "visitGithub": "زيارة حسابي على GitHub"
      },
      "footer": {
        "copyright": "جميع الحقوق محفوظة."
      }
    },
    "en": {
      "meta": {
        "title": "Asem Abdullah Najee | Portfolio",
        "description": "Asem Abdullah Najee - Software Engineering Student & Full-Stack Developer Portfolio"
      },
      "nav": {
        "brand": "Asem",
        "home": "Home",
        "skills": "Skills",
        "projects": "Projects",
        "articles": "Articles",
        "books": "Books",
        "testimonials": "Testimonials",
        "contact": "Contact"
      },
      "hero": {
        "badge": "Welcome to my portfolio",
        "title": "Asem Abdullah Najee",
        "subtitle": "Software Engineering Student",
        "description": "Passionate software engineer building modern web and mobile applications. Currently studying at Taiz University, with expertise in full-stack development, cloud technologies, and innovative problem-solving.",
        "viewWork": "View My Work",
        "getInTouch": "Get in Touch"
      },
      "skills": {
        "title": "Technical Skills",
        "description": "A comprehensive toolkit of technologies and tools I use to build scalable, efficient, and user-friendly applications.",
        "categories": [
          {
            "id": "backend",
            "title": "Backend & API",
            "icon": "code",
            "items": [
              "Java",
              "Spring Boot",
              "PHP",
              "Laravel",
              "Express.js"
            ]
          },
          {
            "id": "frontend",
            "title": "Frontend & Mobile",
            "icon": "smartphone",
            "items": [
              "React.js",
              "Next.js",
              "TypeScript",
              "Flutter",
              "Dart"
            ]
          },
          {
            "id": "databases",
            "title": "Databases",
            "icon": "database",
            "items": [
              "MySQL",
              "MongoDB",
              "SQLite",
              "Supabase",
              "Redis",
              "Firebase"
            ]
          },
          {
            "id": "design",
            "title": "Design & Styling",
            "icon": "palette",
            "items": [
              "Tailwind CSS",
              "Figma"
            ]
          },
          {
            "id": "tools",
            "title": "Tools & DevOps",
            "icon": "terminal",
            "items": [
              "Git",
              "GitHub",
              "Docker",
              "Jira",
              "Postman",
              "Linux"
            ]
          },
          {
            "id": "documentation",
            "title": "Documentation",
            "icon": "file-text",
            "items": [
              "Markdown",
              "Technical Writing"
            ]
          }
        ]
      },
      "projects": {
        "title": "Featured Projects",
        "description": "Showcasing my best work across web development, mobile apps, and backend systems.",
        "viewGithub": "View on GitHub",
        "liveDemo": "Live Demo",
        "viewAll": "View All Projects",
        "allCategories": "All Projects",
        "items": [
          {
            "id": "student-api",
            "title": "Student Management API",
            "description": "Comprehensive REST API for managing students, subjects, and teachers. Built with Spring Boot following MVC architecture, featuring CRUD operations and validation annotations.",
            "category": "Backend & APIs",
            "tags": [
              "Java",
              "Spring Boot",
              "MySQL",
              "MVC"
            ],
            "github": "https://github.com/Asemnajee/student-management-api",
            "icon": "code",
            "image": ""
          },
          {
            "id": "flutter-shop",
            "title": "Flutter Shopping Application",
            "description": "Full-featured e-commerce mobile application with product browsing, cart management, favorites, and user profiles. Demonstrates modern Flutter development practices.",
            "category": "Mobile Applications",
            "tags": [
              "Dart",
              "Flutter",
              "State Management",
              "E-commerce"
            ],
            "github": "https://github.com/Asemnajee/flutter-shopping-application",
            "icon": "smartphone",
            "image": ""
          },
          {
            "id": "javabase-orm",
            "title": "JavaBase ORM Library",
            "description": "Custom ORM library for Java applications that simplifies database interactions with MySQL and SQLite. Inspired by Laravel's Eloquent, featuring migrations and model management.",
            "category": "Libraries & Tools",
            "tags": [
              "Java",
              "ORM",
              "MySQL",
              "SQLite",
              "Database"
            ],
            "github": "https://github.com/AsemNajee/JavaBase",
            "icon": "database",
            "image": ""
          },
          {
            "id": "ftm-website",
            "title": "FTM Institute Website",
            "description": "Modern website for Future Technologies Institute built with Next.js. Showcases institute programs and provides contact information with responsive design.",
            "category": "Web Applications",
            "tags": [
              "JavaScript",
              "Next.js",
              "React",
              "Responsive Design"
            ],
            "github": "https://github.com/AsemNajee/FTM",
            "liveUrl": "https://ftm-yemen.com",
            "icon": "terminal",
            "image": ""
          },
          {
            "id": "task-manager-cli",
            "title": "Task Manager CLI Tool",
            "description": "Lightweight and interactive command-line tool for managing projects and daily tasks with local storage and report export.",
            "category": "Libraries & Tools",
            "tags": [
              "Rust",
              "CLI",
              "Developer Tools"
            ],
            "github": "https://github.com/Asemnajee",
            "icon": "terminal",
            "image": ""
          },
          {
            "id": "finance-tracker-api",
            "title": "Personal Finance API",
            "description": "RESTful API system for tracking personal budget and expenses, featuring JWT authentication and Swagger documentation.",
            "category": "Backend & APIs",
            "tags": [
              "Node.js",
              "Express",
              "TypeScript",
              "MongoDB"
            ],
            "github": "https://github.com/Asemnajee",
            "icon": "database",
            "image": ""
          }
        ]
      },
      "books": {
        "title": "Technical Books & Publications",
        "description": "A collection of software engineering and tech books in PDF format authored to share knowledge with the developer community.",
        "allCategories": "All Categories",
        "readPdf": "Read Book",
        "downloadPdf": "Download PDF",
        "pages": "Pages",
        "items": [
          {
            "id": "book-backend-arch",
            "title": "Modern Backend Architecture Guide",
            "description": "A comprehensive reference for API design, microservices architecture, and database caching best practices.",
            "category": "Backend & Software Engineering",
            "cover": "",
            "pdfUrl": "#",
            "pages": 180,
            "year": 2025
          },
          {
            "id": "book-flutter-mastery",
            "title": "Mastering Mobile Apps with Flutter",
            "description": "A hands-on guide covering app development from scratch to production, advanced state management, and secure API integration.",
            "category": "Mobile Development",
            "cover": "",
            "pdfUrl": "#",
            "pages": 220,
            "year": 2024
          },
          {
            "id": "book-clean-code-java",
            "title": "Clean Code Fundamentals in Java",
            "description": "Practical guide to readable and maintainable code, SOLID principles, and commonly used design patterns in production environments.",
            "category": "Backend & Software Engineering",
            "cover": "",
            "pdfUrl": "#",
            "pages": 140,
            "year": 2024
          },
          {
            "id": "book-db-design",
            "title": "Introduction to Database Design & ORM",
            "description": "Hands-on explanation of relational database theory, schema design, complex query optimization, and building custom ORM libraries.",
            "category": "Databases",
            "cover": "",
            "pdfUrl": "#",
            "pages": 160,
            "year": 2023
          }
        ]
      },
      "articles": {
        "title": "Technical Articles & Research",
        "description": "In-depth engineering tutorials, best practices, and architecture guides across web, mobile, and software engineering.",
        "allCategories": "All Categories",
        "articleCount": "Articles",
        "readMore": "Read Article",
        "backToArticles": "Back to Articles",
        "copyLink": "Copy Link",
        "linkCopied": "Link Copied!"
      },
      "testimonials": {
        "title": "Testimonials & Endorsements",
        "description": "Recommendations and feedback from clients and collaborators I've worked with."
      },
      "contact": {
        "title": "Let's Work Together",
        "description": "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!",
        "sendEmail": "Send me an email",
        "visitGithub": "Visit my GitHub"
      },
      "footer": {
        "copyright": "All rights reserved."
      }
    }
  }
};
