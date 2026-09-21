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
        "articles": "المقالات",
        "books": "الكتب",
        "skills": "المهارات",
        "projects": "المشاريع",
        "testimonials": "التوصيات",
        "contact": "تواصل معي"
      },
      "hero": {
        "badge": "مرحباً بك في ملفي الشخصي",
        "viewWork": "استعرض أعمالي",
        "getInTouch": "تواصل معي",
        "title": "عاصم عبدالله ناجي",
        "subtitle": "طالب هندسة برمجيات ومطور برمجيات",
        "description": "مهندس برمجيات شغوف ببناء تطبيقات الويب والموبايل الحديثة. أدرس حالياً في جامعة تعز، مع خبرة عملية في تطوير الواجهات والخلفيات البرمجية، والتقنيات السحابية، والحلول البرمجية المبتكرة."
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
            "liveUrl": "",
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
            "liveUrl": "",
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
            "liveUrl": "",
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
            "liveUrl": "",
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
            "liveUrl": "",
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
        "sendEmail": "راسلني عبر البريد",
        "visitGithub": "زيارة حسابي على GitHub",
        "description": "أنا مهتم دائماً بسماع الأفكار والمشاريع الجديدة والفرص الواعدة. لا تتردد في التواصل معي!"
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
        "articles": "Articles",
        "books": "Books",
        "skills": "Skills",
        "projects": "Projects",
        "testimonials": "Testimonials",
        "contact": "Contact"
      },
      "hero": {
        "badge": "Welcome to my portfolio",
        "viewWork": "View My Work",
        "getInTouch": "Get in Touch",
        "title": "Asem Abdullah Najee",
        "subtitle": "Software Engineering Student",
        "description": "Passionate software engineer building modern web and mobile applications. Currently studying at Taiz University, with expertise in full-stack development, cloud technologies, and innovative problem-solving."
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
            "liveUrl": "",
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
            "liveUrl": "",
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
            "liveUrl": "",
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
            "liveUrl": "",
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
            "liveUrl": "",
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
        "sendEmail": "Send me an email",
        "visitGithub": "Visit my GitHub",
        "description": "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
      },
      "footer": {
        "copyright": "All rights reserved."
      }
    }
  },
  "articles": {
    "categories": [
      {
        "folder": "folder1",
        "title": {
          "ar": "هندسة الأنظمة الخلفية والـ APIs",
          "en": "Backend & API Engineering"
        },
        "description": {
          "ar": "مقالات متقدمة في معمارية الأنظمة الخلفية، بناء الـ REST APIs، وقواعد البيانات.",
          "en": "In-depth articles on backend architecture, scalable APIs, and database engineering."
        },
        "color": "#3b82f6",
        "icon": "database",
        "cover": "",
        "articles": [
          {
            "file": "spring-boot-architecture.md",
            "slug": "spring-boot-architecture",
            "title": {
              "ar": "دليل بناء معمارية REST APIs متكاملة باستخدام Spring Boot",
              "en": "Building Scalable REST APIs with Spring Boot"
            },
            "description": {
              "ar": "شرح معمارية الطبقات (Layered Architecture)، الـ DTOs، والتعامل الاحترافي مع الاستثناءات.",
              "en": "A practical guide to layered architecture, DTOs, and global exception handling."
            },
            "date": "2026-09-06",
            "readTime": {
              "ar": "7 دقائق قراءة",
              "en": "7 min read"
            },
            "cover": "",
            "tags": [
              "Java",
              "Spring Boot",
              "Backend",
              "REST API"
            ]
          },
          {
            "file": "database-indexing-strategies.md",
            "slug": "database-indexing-strategies",
            "title": {
              "ar": "استراتيجيات الفهرسة (Indexing) المتقدمة في قواعد البيانات",
              "en": "Advanced Database Indexing Strategies for Performance"
            },
            "description": {
              "ar": "كيفية تسريع استعلامات SQL المعقدة وتجنب أخطاء الفهرسة الشائعة في بيئات الإنتاج.",
              "en": "How to optimize complex SQL queries and avoid common indexing pitfalls in production."
            },
            "date": "2026-08-20",
            "readTime": {
              "ar": "5 دقائق قراءة",
              "en": "5 min read"
            },
            "cover": "",
            "tags": [
              "MySQL",
              "Database",
              "Performance",
              "SQL"
            ]
          }
        ]
      },
      {
        "folder": "folder2",
        "title": {
          "ar": "تطوير تطبيقات الموبايل",
          "en": "Mobile App Development"
        },
        "description": {
          "ar": "شروحات وخبرات عملية في بناء وتطوير تطبيقات الهواتف الذكية باستخدام Flutter و Dart.",
          "en": "Practical tutorials and insights into mobile application development with Flutter & Dart."
        },
        "color": "#06b6d4",
        "icon": "smartphone",
        "cover": "",
        "articles": [
          {
            "file": "flutter-state-management.md",
            "slug": "flutter-state-management",
            "title": {
              "ar": "مقارنة شاملة لأنماط إدارة الحالة (State Management) في Flutter",
              "en": "State Management Patterns in Flutter: A Deep Dive"
            },
            "description": {
              "ar": "تحليل عملي لاختيار النمط الأنسب لمشروعك بين BLoC و Provider و Riverpod.",
              "en": "Comprehensive evaluation to help you pick the right state management approach."
            },
            "date": "2026-08-05",
            "readTime": {
              "ar": "9 دقائق قراءة",
              "en": "9 min read"
            },
            "cover": "",
            "tags": [
              "Flutter",
              "Dart",
              "State Management",
              "BLoC"
            ]
          },
          {
            "file": "clean-code-dart.md",
            "slug": "clean-code-dart",
            "title": {
              "ar": "مبادئ الكود النظيف وأفضل الممارسات في لغة Dart",
              "en": "Clean Code Principles & Best Practices in Dart"
            },
            "description": {
              "ar": "قواعد كتابة كود قابل للقراءة والصيانة وإعادة الاستخدام في تطبيقات Flutter.",
              "en": "Guidelines for writing maintainable, readable, and reusable code in Flutter projects."
            },
            "date": "2026-04-20",
            "readTime": {
              "ar": "6 دقائق قراءة",
              "en": "6 min read"
            },
            "cover": "",
            "tags": [
              "Dart",
              "Clean Code",
              "Best Practices"
            ]
          }
        ]
      },
      {
        "folder": "folder3",
        "title": {
          "ar": "تطوير الواجهات وتجربة المستخدم",
          "en": "Frontend & UI Engineering"
        },
        "description": {
          "ar": "تقنيات وتطوير واجهات الويب الحديثة، أداء المتصفح، وأحدث مواصفات CSS و JavaScript.",
          "en": "Modern frontend architectures, responsive design, browser performance, and advanced CSS/JS."
        },
        "color": "#8b5cf6",
        "icon": "layout",
        "cover": "",
        "articles": [
          {
            "file": "modern-css-architecture.md",
            "slug": "modern-css-architecture",
            "title": {
              "ar": "معمارية CSS الحديثة: من Container Queries إلى :has() و Subgrid",
              "en": "Modern CSS Architecture: Container Queries, :has(), and Subgrid"
            },
            "description": {
              "ar": "كيف تعيد الميزات الحديثة في CSS تشكيل طريقة بناء مكونات الويب القابلة لإعادة الاستخدام.",
              "en": "How cutting-edge CSS features revolutionize component-driven responsive web design."
            },
            "date": "2026-08-30",
            "readTime": {
              "ar": "8 دقائق قراءة",
              "en": "8 min read"
            },
            "cover": "",
            "tags": [
              "CSS",
              "Frontend",
              "Responsive",
              "Web Standards"
            ]
          },
          {
            "file": "web-performance-core-vitals.md",
            "slug": "web-performance-core-vitals",
            "title": {
              "ar": "دليل تحسين أداء الويب وتحقيق نتائج قياسية في Core Web Vitals",
              "en": "Web Performance Optimization: Mastering Core Web Vitals"
            },
            "description": {
              "ar": "خطوات عملية وقوائم تدقيق تفصيلية لتحسين سرعة التحميل (LCP)، الاستجابة (INP)، وثبات العرض (CLS).",
              "en": "Actionable strategies and checklists to optimize LCP, INP, and CLS for stellar user experience."
            },
            "date": "2026-07-20",
            "readTime": {
              "ar": "10 دقائق قراءة",
              "en": "10 min read"
            },
            "cover": "",
            "tags": [
              "Performance",
              "Core Web Vitals",
              "LCP",
              "Frontend"
            ]
          }
        ]
      },
      {
        "folder": "folder4",
        "title": {
          "ar": "عمليات التطوير والسحابة (DevOps)",
          "en": "DevOps & Cloud Engineering"
        },
        "description": {
          "ar": "أتمتة خطوط النشر، بناء الحاويات، إدارة البنى التحتية، والممارسات السحابية الحديثة.",
          "en": "CI/CD automation, containerization with Docker, cloud infrastructure, and operational reliability."
        },
        "color": "#10b981",
        "icon": "terminal",
        "cover": "",
        "articles": [
          {
            "file": "docker-production-best-practices.md",
            "slug": "docker-production-best-practices",
            "title": {
              "ar": "أفضل ممارسات Docker للإنتاج: تقليص الحجم وتأمين الحاويات",
              "en": "Docker Production Best Practices: Slim & Secure Containers"
            },
            "description": {
              "ar": "كيفية كتابة Dockerfiles احترافية باستخدام Multi-stage builds وتقليل المخاطر الأمنية.",
              "en": "Writing production-grade Dockerfiles with multi-stage builds and minimal attack surfaces."
            },
            "date": "2026-09-13",
            "readTime": {
              "ar": "7 دقائق قراءة",
              "en": "7 min read"
            },
            "cover": "",
            "tags": [
              "Docker",
              "DevOps",
              "Containers",
              "Security"
            ]
          },
          {
            "file": "github-actions-cicd-pipeline.md",
            "slug": "github-actions-cicd-pipeline",
            "title": {
              "ar": "بناء خط أنابيب CI/CD متكامل واحترافي باستخدام GitHub Actions",
              "en": "Building Robust CI/CD Pipelines with GitHub Actions"
            },
            "description": {
              "ar": "دليل عملي خطوة بخطوة لأتمتة الاختبارات، الفحص الأمني، والنشر التلقائي للخدمات.",
              "en": "A hands-on guide to automating tests, security audits, and automated deployments."
            },
            "date": "2026-06-20",
            "readTime": {
              "ar": "8 دقائق قراءة",
              "en": "8 min read"
            },
            "cover": "",
            "tags": [
              "GitHub Actions",
              "CI/CD",
              "DevOps",
              "Automation"
            ]
          }
        ]
      },
      {
        "folder": "folder5",
        "title": {
          "ar": "تصميم ومعمارية الأنظمة (System Design)",
          "en": "System Design & Architecture"
        },
        "description": {
          "ar": "مفاهيم التوسع، مقارنة المعماريات، التعامل مع البيانات الضخمة، وتصميم الأنظمة الموزعة.",
          "en": "Scalability, architectural patterns, high-availability distributed systems, and trade-off analysis."
        },
        "color": "#f59e0b",
        "icon": "cpu",
        "cover": "",
        "articles": [
          {
            "file": "microservices-vs-monolith.md",
            "slug": "microservices-vs-monolith",
            "title": {
              "ar": "الأنظمة الموزعة (Microservices) مقابل النواة الواحدة (Monolith): متى وكيف تختار؟",
              "en": "Microservices vs Modular Monolith: The Pragmatic Architectural Guide"
            },
            "description": {
              "ar": "مقارنة متعمقة لتقييم المفاضلات (Trade-offs)، تكلفة الصيانة، ومعايير اتخاذ القرار التقني الصائب.",
              "en": "A deep dive into architectural trade-offs, operational complexity, and choosing the right fit."
            },
            "date": "2026-09-17",
            "readTime": {
              "ar": "11 دقيقة قراءة",
              "en": "11 min read"
            },
            "cover": "",
            "tags": [
              "System Design",
              "Microservices",
              "Architecture",
              "Monolith"
            ]
          }
        ]
      }
    ]
  }
};
