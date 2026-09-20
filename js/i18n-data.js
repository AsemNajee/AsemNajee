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
},
  "articleContents": {
  "folder1/spring-boot-architecture.md": "# دليل بناء معمارية REST APIs متكاملة باستخدام Spring Boot\n\nتعد معمارية تطبيقات الويب والـ APIs حجر الزاوية في نجاح أي نظام برمجي. في هذا الدليل، سنتناول بالتفصيل كيفية بناء **RESTful API** قوية وقابلة للتوسع (Scalable) باستخدام إطار العمل **Spring Boot** مع تطبيق أفضل الممارسات والمعايير العالمية.\n\n---\n\n## 1. معمارية الطبقات (Layered Architecture)\n\nأفضل وأوضح طريقة لتنظيم مشاريع Spring Boot هي تقسيم الكود إلى أربع طبقات رئيسية:\n\n```\nsrc/main/java/com/asem/api/\n├── controller/     # استقبال الطلبات وإرجاع الردود (HTTP endpoints)\n├── service/        # منطق العمل وقواعد النظام (Business Logic)\n├── repository/     # التعامل المباشر مع قاعدة البيانات (Spring Data JPA)\n├── model/          # الكيانات (Entities) وجداول قاعدة البيانات\n├── dto/            # كائنات نقل البيانات (Data Transfer Objects)\n└── exception/      # التعامل المركزي مع الأخطاء والاستثناءات\n```\n\n> **ملاحظة مهمة:** لا تجعل طبقة الـ Controller تتعامل مع الـ Repository مباشرة أبداً. احتفظ بمنطق العمل دائماً داخل طبقة الـ Service لتحقيق مبدأ المسؤولية الواحدة (Single Responsibility Principle).\n\n---\n\n## 2. استخدام DTOs وفصلها عن Entities\n\nأحد الأخطاء الشائعة هو إرجاع كائنات `Entity` مباشرة للمستخدم في استجابات الـ API. هذا يسبب:\n1. تسريب حقول حساسة (مثل كلمات المرور أو التواريخ الداخلية).\n2. مشاكل التكرار اللانهائي في العلاقات (Circular Reference) أثناء تحويل JSON.\n3. صعوبة تغيير بنية قاعدة البيانات لاحقاً دون كسر الـ API لدى العملاء.\n\n### مثال تطبيقي على كائن DTO:\n\n```java\npackage com.asem.api.dto;\n\nimport jakarta.validation.constraints.Email;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\n\npublic record StudentRequestDto(\n    @NotBlank(message = \"الاسم الأول مطلوب\")\n    @Size(min = 2, max = 50, message = \"يجب أن يكون الاسم بين حرفين و50 حرفاً\")\n    String firstName,\n\n    @NotBlank(message = \"الاسم الأخير مطلوب\")\n    String lastName,\n\n    @NotBlank(message = \"البريد الإلكتروني مطلوب\")\n    @Email(message = \"صيغة البريد الإلكتروني غير صحيحة\")\n    String email\n) {}\n```\n\n---\n\n## 3. التعامل المركزي مع الأخطاء (Global Exception Handling)\n\nبدلاً من كتابة `try-catch` في كل مكان، نستخدم `@RestControllerAdvice` لتوحيد صيغة رسائل الخطأ في كامل التطبيق:\n\n```java\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ApiErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n        ApiErrorResponse error = new ApiErrorResponse(\n            HttpStatus.NOT_FOUND.value(),\n            ex.getMessage(),\n            LocalDateTime.now()\n        );\n        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getFieldErrors().forEach(err -> \n            errors.put(err.getField(), err.getDefaultMessage())\n        );\n        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);\n    }\n}\n```\n\n---\n\n## 4. نصائح للأداء في بيئات الإنتاج\n\n- **استخدم Connection Pooling:** مثل HikariCP المضمن افتراضياً في Spring Boot.\n- **تفعيل Pagination:** لا تقم بإرجاع آلاف السجلات دفعة واحدة، استخدم `Pageable` دائماً.\n- **التوثيق عبر Swagger/OpenAPI:** اجعل توثيق الـ API يتحدث تلقائياً مع كل تعديل على الكود.\n\n---\n\n### خاتمة\n\nاتباع هذه المعايير يضمن أن يكون نظامك قادراً على تحمل الضغط، سهل الاختبار (Testable)، وسهل الصيانة والتطوير لأي مطور ينضم إلى فريقك لاحقاً.\n",
  "spring-boot-architecture": "# دليل بناء معمارية REST APIs متكاملة باستخدام Spring Boot\n\nتعد معمارية تطبيقات الويب والـ APIs حجر الزاوية في نجاح أي نظام برمجي. في هذا الدليل، سنتناول بالتفصيل كيفية بناء **RESTful API** قوية وقابلة للتوسع (Scalable) باستخدام إطار العمل **Spring Boot** مع تطبيق أفضل الممارسات والمعايير العالمية.\n\n---\n\n## 1. معمارية الطبقات (Layered Architecture)\n\nأفضل وأوضح طريقة لتنظيم مشاريع Spring Boot هي تقسيم الكود إلى أربع طبقات رئيسية:\n\n```\nsrc/main/java/com/asem/api/\n├── controller/     # استقبال الطلبات وإرجاع الردود (HTTP endpoints)\n├── service/        # منطق العمل وقواعد النظام (Business Logic)\n├── repository/     # التعامل المباشر مع قاعدة البيانات (Spring Data JPA)\n├── model/          # الكيانات (Entities) وجداول قاعدة البيانات\n├── dto/            # كائنات نقل البيانات (Data Transfer Objects)\n└── exception/      # التعامل المركزي مع الأخطاء والاستثناءات\n```\n\n> **ملاحظة مهمة:** لا تجعل طبقة الـ Controller تتعامل مع الـ Repository مباشرة أبداً. احتفظ بمنطق العمل دائماً داخل طبقة الـ Service لتحقيق مبدأ المسؤولية الواحدة (Single Responsibility Principle).\n\n---\n\n## 2. استخدام DTOs وفصلها عن Entities\n\nأحد الأخطاء الشائعة هو إرجاع كائنات `Entity` مباشرة للمستخدم في استجابات الـ API. هذا يسبب:\n1. تسريب حقول حساسة (مثل كلمات المرور أو التواريخ الداخلية).\n2. مشاكل التكرار اللانهائي في العلاقات (Circular Reference) أثناء تحويل JSON.\n3. صعوبة تغيير بنية قاعدة البيانات لاحقاً دون كسر الـ API لدى العملاء.\n\n### مثال تطبيقي على كائن DTO:\n\n```java\npackage com.asem.api.dto;\n\nimport jakarta.validation.constraints.Email;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\n\npublic record StudentRequestDto(\n    @NotBlank(message = \"الاسم الأول مطلوب\")\n    @Size(min = 2, max = 50, message = \"يجب أن يكون الاسم بين حرفين و50 حرفاً\")\n    String firstName,\n\n    @NotBlank(message = \"الاسم الأخير مطلوب\")\n    String lastName,\n\n    @NotBlank(message = \"البريد الإلكتروني مطلوب\")\n    @Email(message = \"صيغة البريد الإلكتروني غير صحيحة\")\n    String email\n) {}\n```\n\n---\n\n## 3. التعامل المركزي مع الأخطاء (Global Exception Handling)\n\nبدلاً من كتابة `try-catch` في كل مكان، نستخدم `@RestControllerAdvice` لتوحيد صيغة رسائل الخطأ في كامل التطبيق:\n\n```java\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ApiErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n        ApiErrorResponse error = new ApiErrorResponse(\n            HttpStatus.NOT_FOUND.value(),\n            ex.getMessage(),\n            LocalDateTime.now()\n        );\n        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getFieldErrors().forEach(err -> \n            errors.put(err.getField(), err.getDefaultMessage())\n        );\n        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);\n    }\n}\n```\n\n---\n\n## 4. نصائح للأداء في بيئات الإنتاج\n\n- **استخدم Connection Pooling:** مثل HikariCP المضمن افتراضياً في Spring Boot.\n- **تفعيل Pagination:** لا تقم بإرجاع آلاف السجلات دفعة واحدة، استخدم `Pageable` دائماً.\n- **التوثيق عبر Swagger/OpenAPI:** اجعل توثيق الـ API يتحدث تلقائياً مع كل تعديل على الكود.\n\n---\n\n### خاتمة\n\nاتباع هذه المعايير يضمن أن يكون نظامك قادراً على تحمل الضغط، سهل الاختبار (Testable)، وسهل الصيانة والتطوير لأي مطور ينضم إلى فريقك لاحقاً.\n",
  "folder1/database-indexing-strategies.md": "# استراتيجيات الفهرسة (Indexing) المتقدمة في قواعد البيانات\n\nتعتبر الفهرسة (Indexing) من أقوى الأدوات المتاحة لمهندس البرمجيات لتحسين أداء قواعد البيانات العلائقية (Relational Databases) مثل MySQL و PostgreSQL. فهرس واحد مدروس جيداً يمكنه تحويل استعلام يستغرق عدة ثوانٍ إلى بضعة أجزاء من الألف من الثانية.\n\n---\n\n## 1. كيف يعمل الفهرس في قواعد البيانات؟\n\nبشكل افتراضي، عند البحث في جدول بدون فهرس، تقوم قاعدة البيانات بعمل **Full Table Scan**، أي فحص كل صف في الجدول واحداً تلو الآخر.\n\nباستخدام الفهرس (الذي يعتمد غالباً على بنية شجرة **B-Tree**)، يتم تنظيم المفاتيح بشكل هرمي متوازن، مما يقلل عدد عمليات القراءة من القرص (I/O Operations) من $O(N)$ إلى $O(\\log N)$.\n\n---\n\n## 2. أنواع الفهارس واستخداماتها\n\n### أ. الفهرس الفردي (Single-Column Index)\nمفيد للاستعلامات التي تبحث دائماً بناءً على عمود واحد:\n```sql\nCREATE INDEX idx_users_email ON users(email);\n```\n\n### ب. الفهرس المركب (Composite Index)\nعندما تحتوي استعلاماتك على عدة شروط معاً في `WHERE` أو `ORDER BY`:\n```sql\nCREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);\n```\n\n> **قاعدة أسبقية اليسار (Leftmost Prefix Rule):** في الفهرس المركب `(A, B, C)`، يستفيد الاستعلام من الفهرس إذا بحثت بـ `(A)` أو `(A, B)` أو `(A, B, C)`. لكنه لن يستفيد منه إذا بحثت بـ `(B)` أو `(C)` فقط!\n\n---\n\n## 3. متى تتجنب إنشاء فهارس إضافية؟\n\nالفهارس ليست مجانية؛ فكل فهرس إضافي:\n1. يستهلك مساحة تخزين إضافية على القرص والذاكرة (RAM).\n2. يبطئ عمليات الإدخال والتعديل والحذف (`INSERT`, `UPDATE`, `DELETE`) لأن قاعدة البيانات يجب أن تعيد ترتيب شجرة الفهرس مع كل تعديل.\n\n---\n\n## 4. فحص خطة تنفيذ الاستعلام (EXPLAIN)\n\nقبل أن تقرر إضافة فهرس، استخدم دائماً الأمر `EXPLAIN`:\n\n```sql\nEXPLAIN SELECT * FROM orders WHERE customer_id = 42 ORDER BY order_date DESC;\n```\n\nراقب قيمة `type`:\n- `ALL`: أسوأ نوع (Full Table Scan).\n- `index` أو `range`: استخدام جيد للفهرس.\n- `ref` أو `const`: أداء ممتاز ومثالي.\n",
  "database-indexing-strategies": "# استراتيجيات الفهرسة (Indexing) المتقدمة في قواعد البيانات\n\nتعتبر الفهرسة (Indexing) من أقوى الأدوات المتاحة لمهندس البرمجيات لتحسين أداء قواعد البيانات العلائقية (Relational Databases) مثل MySQL و PostgreSQL. فهرس واحد مدروس جيداً يمكنه تحويل استعلام يستغرق عدة ثوانٍ إلى بضعة أجزاء من الألف من الثانية.\n\n---\n\n## 1. كيف يعمل الفهرس في قواعد البيانات؟\n\nبشكل افتراضي، عند البحث في جدول بدون فهرس، تقوم قاعدة البيانات بعمل **Full Table Scan**، أي فحص كل صف في الجدول واحداً تلو الآخر.\n\nباستخدام الفهرس (الذي يعتمد غالباً على بنية شجرة **B-Tree**)، يتم تنظيم المفاتيح بشكل هرمي متوازن، مما يقلل عدد عمليات القراءة من القرص (I/O Operations) من $O(N)$ إلى $O(\\log N)$.\n\n---\n\n## 2. أنواع الفهارس واستخداماتها\n\n### أ. الفهرس الفردي (Single-Column Index)\nمفيد للاستعلامات التي تبحث دائماً بناءً على عمود واحد:\n```sql\nCREATE INDEX idx_users_email ON users(email);\n```\n\n### ب. الفهرس المركب (Composite Index)\nعندما تحتوي استعلاماتك على عدة شروط معاً في `WHERE` أو `ORDER BY`:\n```sql\nCREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);\n```\n\n> **قاعدة أسبقية اليسار (Leftmost Prefix Rule):** في الفهرس المركب `(A, B, C)`، يستفيد الاستعلام من الفهرس إذا بحثت بـ `(A)` أو `(A, B)` أو `(A, B, C)`. لكنه لن يستفيد منه إذا بحثت بـ `(B)` أو `(C)` فقط!\n\n---\n\n## 3. متى تتجنب إنشاء فهارس إضافية؟\n\nالفهارس ليست مجانية؛ فكل فهرس إضافي:\n1. يستهلك مساحة تخزين إضافية على القرص والذاكرة (RAM).\n2. يبطئ عمليات الإدخال والتعديل والحذف (`INSERT`, `UPDATE`, `DELETE`) لأن قاعدة البيانات يجب أن تعيد ترتيب شجرة الفهرس مع كل تعديل.\n\n---\n\n## 4. فحص خطة تنفيذ الاستعلام (EXPLAIN)\n\nقبل أن تقرر إضافة فهرس، استخدم دائماً الأمر `EXPLAIN`:\n\n```sql\nEXPLAIN SELECT * FROM orders WHERE customer_id = 42 ORDER BY order_date DESC;\n```\n\nراقب قيمة `type`:\n- `ALL`: أسوأ نوع (Full Table Scan).\n- `index` أو `range`: استخدام جيد للفهرس.\n- `ref` أو `const`: أداء ممتاز ومثالي.\n",
  "folder2/flutter-state-management.md": "# مقارنة شاملة لأنماط إدارة الحالة (State Management) في Flutter\n\nتعتبر إدارة الحالة (State Management) من أهم المواضيع التي يواجهها أي مطور Flutter. فاختيار الأسلوب المناسب يؤثر بشكل مباشر على أداء التطبيق، سهولة قراءة الكود، وإمكانية اختبار منطق العمل (Unit Testing).\n\nفي هذا المقال، سنقارن بين أشهر ثلاثة أنماط مستخدمة في مجتمع Flutter: **Provider**، **BLoC**، و **Riverpod**.\n\n---\n\n## 1. نمط Provider: البساطة وسهولة البداية\n\nيُعد **Provider** الأسلوب الموصى به من قبل فريق Flutter للمشاريع الصغيرة والمتوسطة. يعتمد على فكرة الـ InheritedWidget المضمنة في Flutter ولكن بواجهة أسهل بكثير.\n\n### المميزات:\n- منحنى تعلم سهل ومناسب للمبتدئين.\n- خفيف جداً ولا يحتاج إلى كود تمهيدي (Boilerplate) كبير.\n- كافٍ لأغلب التطبيقات المعتادة.\n\n### العيوب:\n- يعتمد على `BuildContext` للوصول إلى الحالة، مما قد يسبب مشاكل خارج شجرة الواجهات (Widgets Tree).\n\n---\n\n## 2. نمط BLoC (Business Logic Component): للمشاريع الضخمة والفرق الكبيرة\n\nيقوم نمط **BLoC** بفصل منطق العمل تماماً عن الواجهات من خلال معمارية قائمة على الأحداث (Event-Driven Architecture) والـ Streams.\n\n```dart\n// تعريف الأحداث (Events)\nabstract class CounterEvent {}\nclass IncrementEvent extends CounterEvent {}\n\n// تعريف الحالة (State)\nclass CounterState {\n  final int count;\n  CounterState(this.count);\n}\n\n// الـ Bloc\nclass CounterBloc extends Bloc<CounterEvent, CounterState> {\n  CounterBloc() : super(CounterState(0)) {\n    on<IncrementEvent>((event, emit) {\n      emit(CounterState(state.count + 1));\n    });\n  }\n}\n```\n\n### المميزات:\n- فصل تام ومثالي بين الـ UI والـ Logic.\n- إمكانية تتبع مسار الأحداث والحالات بالكامل (Traceability).\n- ممتاز جداً للاختبارات الآلية (Unit Testing).\n\n---\n\n## 3. نمط Riverpod: التطوير العصري للـ Provider\n\nتم إنشاء **Riverpod** بواسطة نفس مطور Provider (Remi Rousselet) لحل جميع التحديات ونقاط الضعف التي كانت موجودة في Provider.\n\n| الميزة | Provider | BLoC | Riverpod |\n| :--- | :--- | :--- | :--- |\n| **الاعتماد على Context** | نعم | نعم | لا (آمن عند الـ Compile Time) |\n| **كود البداية (Boilerplate)** | منخفض | متوسط إلى عالي | منخفض إلى متوسط |\n| **سهولة الاختبار** | متوسط | ممتاز جداً | ممتاز جداً |\n| **مناسب لـ** | مشاريع صغيرة/متوسطة | مشاريع المؤسسات الضخمة | جميع أنواع المشاريع |\n\n---\n\n## الخلاصة والتوصية\n\n- إذا كنت تبني تطبيقاً صغيراً أو تتعلم فلاتر: ابدأ بـ **Provider**.\n- إذا كنت تعمل في فريق كبير على تطبيق بنكي أو نظام ضخم: اختر **BLoC**.\n- إذا كنت تريد حلاً حديثاً وقوياً ومرناً لجميع الحالات: **Riverpod** هو خيارك الأفضل.\n",
  "flutter-state-management": "# مقارنة شاملة لأنماط إدارة الحالة (State Management) في Flutter\n\nتعتبر إدارة الحالة (State Management) من أهم المواضيع التي يواجهها أي مطور Flutter. فاختيار الأسلوب المناسب يؤثر بشكل مباشر على أداء التطبيق، سهولة قراءة الكود، وإمكانية اختبار منطق العمل (Unit Testing).\n\nفي هذا المقال، سنقارن بين أشهر ثلاثة أنماط مستخدمة في مجتمع Flutter: **Provider**، **BLoC**، و **Riverpod**.\n\n---\n\n## 1. نمط Provider: البساطة وسهولة البداية\n\nيُعد **Provider** الأسلوب الموصى به من قبل فريق Flutter للمشاريع الصغيرة والمتوسطة. يعتمد على فكرة الـ InheritedWidget المضمنة في Flutter ولكن بواجهة أسهل بكثير.\n\n### المميزات:\n- منحنى تعلم سهل ومناسب للمبتدئين.\n- خفيف جداً ولا يحتاج إلى كود تمهيدي (Boilerplate) كبير.\n- كافٍ لأغلب التطبيقات المعتادة.\n\n### العيوب:\n- يعتمد على `BuildContext` للوصول إلى الحالة، مما قد يسبب مشاكل خارج شجرة الواجهات (Widgets Tree).\n\n---\n\n## 2. نمط BLoC (Business Logic Component): للمشاريع الضخمة والفرق الكبيرة\n\nيقوم نمط **BLoC** بفصل منطق العمل تماماً عن الواجهات من خلال معمارية قائمة على الأحداث (Event-Driven Architecture) والـ Streams.\n\n```dart\n// تعريف الأحداث (Events)\nabstract class CounterEvent {}\nclass IncrementEvent extends CounterEvent {}\n\n// تعريف الحالة (State)\nclass CounterState {\n  final int count;\n  CounterState(this.count);\n}\n\n// الـ Bloc\nclass CounterBloc extends Bloc<CounterEvent, CounterState> {\n  CounterBloc() : super(CounterState(0)) {\n    on<IncrementEvent>((event, emit) {\n      emit(CounterState(state.count + 1));\n    });\n  }\n}\n```\n\n### المميزات:\n- فصل تام ومثالي بين الـ UI والـ Logic.\n- إمكانية تتبع مسار الأحداث والحالات بالكامل (Traceability).\n- ممتاز جداً للاختبارات الآلية (Unit Testing).\n\n---\n\n## 3. نمط Riverpod: التطوير العصري للـ Provider\n\nتم إنشاء **Riverpod** بواسطة نفس مطور Provider (Remi Rousselet) لحل جميع التحديات ونقاط الضعف التي كانت موجودة في Provider.\n\n| الميزة | Provider | BLoC | Riverpod |\n| :--- | :--- | :--- | :--- |\n| **الاعتماد على Context** | نعم | نعم | لا (آمن عند الـ Compile Time) |\n| **كود البداية (Boilerplate)** | منخفض | متوسط إلى عالي | منخفض إلى متوسط |\n| **سهولة الاختبار** | متوسط | ممتاز جداً | ممتاز جداً |\n| **مناسب لـ** | مشاريع صغيرة/متوسطة | مشاريع المؤسسات الضخمة | جميع أنواع المشاريع |\n\n---\n\n## الخلاصة والتوصية\n\n- إذا كنت تبني تطبيقاً صغيراً أو تتعلم فلاتر: ابدأ بـ **Provider**.\n- إذا كنت تعمل في فريق كبير على تطبيق بنكي أو نظام ضخم: اختر **BLoC**.\n- إذا كنت تريد حلاً حديثاً وقوياً ومرناً لجميع الحالات: **Riverpod** هو خيارك الأفضل.\n",
  "folder2/clean-code-dart.md": "# مبادئ الكود النظيف وأفضل الممارسات في لغة Dart\n\nتتميز لغة **Dart** بحداثتها ودعمها القوي للـ Type Safety والـ Sound Null Safety. ولكن كتابة كود بلغة قوية لا يعني بالضرورة أن الكود نظيف وسهل الصيانة.\n\nفي هذا الدليل، نستعرض أهم الممارسات لكتابة كود Dart احترافي وعالي الجودة.\n\n---\n\n## 1. الاستفادة الكاملة من Null Safety\n\nتجنب استخدام عامل التأكيد `!` (Bang operator) إلا في أضيق الحدود عندما تكون متأكداً 100% أن القيمة ليست `null`.\n\n```dart\n// ❌ تجنب هذا النمط\nString formatUserName(User? user) {\n  return user!.name.toUpperCase(); // قد يسبب Crash في وقت التشغيل!\n}\n\n// ✅ الأسلوب الصحيح والآمن\nString formatUserName(User? user) {\n  return user?.name.toUpperCase() ?? 'زائر';\n}\n```\n\n---\n\n## 2. استخدام Switch Expressions والـ Pattern Matching\n\nبدءاً من إصدار Dart 3، أصبحت ميزة الـ Pattern Matching والـ Switch Expressions أداة جبارة لتبسيط الكود:\n\n```dart\n// أسلوب switch expression العصري\nString getStatusMessage(OrderStatus status) => switch (status) {\n  OrderStatus.pending => 'الطلب قيد المراجعة',\n  OrderStatus.processing => 'جاري تجهيز الطلب',\n  OrderStatus.shipped => 'الطلب في الطريق إليك',\n  OrderStatus.delivered => 'تم تسليم الطلب بنجاح',\n  OrderStatus.cancelled => 'تم إلغاء الطلب',\n};\n```\n\n---\n\n## 3. تفضيل Records والـ Destructuring\n\nبدلاً من إنشاء كلاس كامل فقط لإرجاع قيمتين أو ثلاث من دالة:\n\n```dart\n// إرجاع زوج من القيم عبر Record\n(double lat, double lng) getCurrentCoordinates() {\n  return (15.3694, 44.1910);\n}\n\n// استخراج القيم مباشرة\nfinal (latitude, longitude) = getCurrentCoordinates();\n```\n\n---\n\n## 4. كتابة الـ Extension Methods لتحسين القراءة\n\nالـ Extensions تسمح لك بإضافة دوال مساعدة للكلاسات المدمجة دون تعديلها:\n\n```dart\nextension StringExtensions on String {\n  bool get isValidEmail => RegExp(r'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$').hasMatch(this);\n  \n  String get capitalizeFirst => isEmpty \n      ? this \n      : '${this[0].toUpperCase()}${substring(1)}';\n}\n```\n\n---\n\n## خلاصة\n\nالكود النظيف في Dart ليس مجرد اتباع لقواعد الـ Linter، بل هو أسلوب تفكير يركز على جعل الكود وثيقة حية وسهلة الفهم لأي مبرمج يقرأه بعدك.\n",
  "clean-code-dart": "# مبادئ الكود النظيف وأفضل الممارسات في لغة Dart\n\nتتميز لغة **Dart** بحداثتها ودعمها القوي للـ Type Safety والـ Sound Null Safety. ولكن كتابة كود بلغة قوية لا يعني بالضرورة أن الكود نظيف وسهل الصيانة.\n\nفي هذا الدليل، نستعرض أهم الممارسات لكتابة كود Dart احترافي وعالي الجودة.\n\n---\n\n## 1. الاستفادة الكاملة من Null Safety\n\nتجنب استخدام عامل التأكيد `!` (Bang operator) إلا في أضيق الحدود عندما تكون متأكداً 100% أن القيمة ليست `null`.\n\n```dart\n// ❌ تجنب هذا النمط\nString formatUserName(User? user) {\n  return user!.name.toUpperCase(); // قد يسبب Crash في وقت التشغيل!\n}\n\n// ✅ الأسلوب الصحيح والآمن\nString formatUserName(User? user) {\n  return user?.name.toUpperCase() ?? 'زائر';\n}\n```\n\n---\n\n## 2. استخدام Switch Expressions والـ Pattern Matching\n\nبدءاً من إصدار Dart 3، أصبحت ميزة الـ Pattern Matching والـ Switch Expressions أداة جبارة لتبسيط الكود:\n\n```dart\n// أسلوب switch expression العصري\nString getStatusMessage(OrderStatus status) => switch (status) {\n  OrderStatus.pending => 'الطلب قيد المراجعة',\n  OrderStatus.processing => 'جاري تجهيز الطلب',\n  OrderStatus.shipped => 'الطلب في الطريق إليك',\n  OrderStatus.delivered => 'تم تسليم الطلب بنجاح',\n  OrderStatus.cancelled => 'تم إلغاء الطلب',\n};\n```\n\n---\n\n## 3. تفضيل Records والـ Destructuring\n\nبدلاً من إنشاء كلاس كامل فقط لإرجاع قيمتين أو ثلاث من دالة:\n\n```dart\n// إرجاع زوج من القيم عبر Record\n(double lat, double lng) getCurrentCoordinates() {\n  return (15.3694, 44.1910);\n}\n\n// استخراج القيم مباشرة\nfinal (latitude, longitude) = getCurrentCoordinates();\n```\n\n---\n\n## 4. كتابة الـ Extension Methods لتحسين القراءة\n\nالـ Extensions تسمح لك بإضافة دوال مساعدة للكلاسات المدمجة دون تعديلها:\n\n```dart\nextension StringExtensions on String {\n  bool get isValidEmail => RegExp(r'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$').hasMatch(this);\n  \n  String get capitalizeFirst => isEmpty \n      ? this \n      : '${this[0].toUpperCase()}${substring(1)}';\n}\n```\n\n---\n\n## خلاصة\n\nالكود النظيف في Dart ليس مجرد اتباع لقواعد الـ Linter، بل هو أسلوب تفكير يركز على جعل الكود وثيقة حية وسهلة الفهم لأي مبرمج يقرأه بعدك.\n",
  "folder3/modern-css-architecture.md": "# معمارية CSS الحديثة: من Container Queries إلى :has() و Subgrid\n\nفي السنوات الأخيرة، شهدت لغة CSS ثورة حقيقية نقلتها من مجرد لغة لتنسيق النصوص والألوان إلى بيئة هندسية متطورة تُمكّن المطورين من بناء واجهات مستخدم معقدة ومرنة بأقل قدر ممكن من كود JavaScript.\n\n> **نقطة جوهرية:** مع إطلاق ميزات مثل Container Queries ومحدد الأب `:has()` وميزة `subgrid`، أصبح بإمكاننا الانتقال من التصميم المستجيب المتمركز حول الشاشة بأكملها (Viewport-driven) إلى **التصميم المستجيب المتمركز حول المكوّن ذاته (Component-driven Responsive Design)**.\n\n---\n\n## 1. نقلة نوعية: من Media Queries إلى Container Queries\n\nلطالما اعتمدنا على `media queries` لتحديد كيف يظهر المكون بناءً على عرض شاشة الجهاز بالكامل (`window.innerWidth`). لكن ماذا لو وضعنا نفس المكون داخل شريط جانبي ضيق (Sidebar) وداخل منطقة المحتوى الرئيسي (Main Content) في نفس الصفحة؟\n\n```\n+-------------------------------------------------------------+\n| Viewport Width: 1200px                                      |\n|                                                             |\n|  +--------------------+  +-------------------------------+  |\n|  | Sidebar (300px)    |  | Main Content (900px)          |  |\n|  |                    |  |                               |  |\n|  | [ Card Widget ]    |  | [ Card Widget ]               |  |\n|  | (يحتاج شكلاً عمودياً)|  | (يحتاج شكلاً أفقياً عريضاً)     |  |\n|  +--------------------+  +-------------------------------+  |\n+-------------------------------------------------------------+\n```\n\nباستخدام Container Queries، لا يهتم المكون بعرض الشاشة، بل يستجيب مباشرةً للمساحة المتوفرة داخل العنصر الحاوي له:\n\n```css\n/* 1. تعريف العنصر كحاوية */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card-container;\n}\n\n/* 2. التنسيق الافتراضي (عمودي) */\n.card-component {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n/* 3. الاستجابة عندما يتجاوز عرض الحاوية 450px */\n@container card-container (min-width: 450px) {\n  .card-component {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .card-thumbnail {\n    width: 140px;\n    height: 140px;\n    flex-shrink: 0;\n  }\n}\n```\n\n---\n\n## 2. محدد الأب السحري: `:has()` في الإنتاج\n\nظل مطورو الواجهات لسنوات طويلة يطالبون بطريقة لاستهداف العنصر الأب اعتماداً على حالة أبنائه دون الحاجة إلى JavaScript. أصبح ذلك واقعاً مدعوماً في جميع المتصفحات الحديثة عبر `:has()`.\n\n### أمثلة عملية وقوية:\n\n```css\n/* 1. تغيير خلفية البطاقة إذا كانت تحتوي على شارة مميزة (Featured Badge) */\n.card:has(.badge-featured) {\n  border-color: var(--primary-color);\n  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15);\n}\n\n/* 2. تظليل النموذج عند تفعيل حقل غير صالح */\n.form-group:has(input:invalid:focus) {\n  animation: shake 0.3s ease-in-out;\n}\n\n/* 3. تطبيق نمط Grid خاص إذا كانت المقالة تحتوي على صورة غلاف */\n.article-item:has(.article-cover) {\n  grid-template-columns: 200px 1fr;\n}\n```\n\n> **تحذير في الأداء:** لا تبالغ في تعشيش محددات `:has()` المعقدة في صفحات تحتوي على آلاف العناصر التفاعلية الثقيلة لتفادي استهلاك موارد إعادة الحساب (Style Recalculation).\n\n---\n\n## 3. محاذاة العناصر بدقة متناهية عبر `subgrid`\n\nعند بناء بطاقات (Cards) في شبكة `grid` ذات رؤوس وعناوين ونصوص متفاوتة الطول، كان من المستحيل محاذاة الأزرار السفلية وأسماء المؤلفين في نفس المستوى بدقة عبر جميع البطاقات. تحل ميزة `subgrid` هذه المشكلة بجعل شبكة العنصر الابن ترث مسارات شبكة العنصر الأب:\n\n```css\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n\n.card-item {\n  display: grid;\n  /* المكون يرث صفوف الأب بدلاً من حساب صفوفه الخاصة */\n  grid-template-rows: subgrid;\n  grid-row: span 3;\n}\n```\n\n---\n\n## 4. مقارنة سريعة بين أساليب التجاوب\n\n| المعيار | Media Queries التقليدية | Container Queries الحديثة |\n| :--- | :--- | :--- |\n| **نطاق القياس** | عرض شاشة المتصفح (`viewport`) | عرض العنصر الحاوي (`container`) |\n| **إمكانية إعادة الاستخدام** | ضعيفة إذا تغيّر موضع العنصر | ممتازة، المكون مستقل تماماً |\n| **التعقيد الهندسي** | كتابة شروط متعددة لكل صفحة | قاعدة تجاوب واحدة للمكوّن أينما وُضع |\n| **الدعم في المتصفحات** | 100% مدعوم | مدعوم في كافة المتصفحات الحديثة (+95%) |\n\n---\n\n## 5. توصيات لبناء معمارية CSS مستدامة\n\n1. **استخدم المتغيرات التفاعلية (CSS Custom Properties):** لتمرير الألوان والمسافات وجعل الثيم الداكن والفاتح سلساً وسريعاً.\n2. **اعتمد على الحجم السائل (Fluid Typography):** عبر دالة `clamp()`:\n   ```css\n   font-size: clamp(1rem, 0.8rem + 1vw, 1.75rem);\n   ```\n3. **فصل الهيكل عن السلوك:** لا تعتمد على أسماء فئات تعكس مظهراً ثابتاً، بل اجعل الأسماء تعكس وظيفة المكون (Component Semantics).\n\n> **خلاصة:** إن أدوات CSS الحديثة تمنحك اليوم القوة لبناء أنظمة تصميم (Design Systems) صلبة ومرنة تغنيك عن إرهاق كود الجافاسكريبت وتمنح المستخدم أداءً متفوقاً وتجربة تصفح غاية في السلاسة.\n",
  "modern-css-architecture": "# معمارية CSS الحديثة: من Container Queries إلى :has() و Subgrid\n\nفي السنوات الأخيرة، شهدت لغة CSS ثورة حقيقية نقلتها من مجرد لغة لتنسيق النصوص والألوان إلى بيئة هندسية متطورة تُمكّن المطورين من بناء واجهات مستخدم معقدة ومرنة بأقل قدر ممكن من كود JavaScript.\n\n> **نقطة جوهرية:** مع إطلاق ميزات مثل Container Queries ومحدد الأب `:has()` وميزة `subgrid`، أصبح بإمكاننا الانتقال من التصميم المستجيب المتمركز حول الشاشة بأكملها (Viewport-driven) إلى **التصميم المستجيب المتمركز حول المكوّن ذاته (Component-driven Responsive Design)**.\n\n---\n\n## 1. نقلة نوعية: من Media Queries إلى Container Queries\n\nلطالما اعتمدنا على `media queries` لتحديد كيف يظهر المكون بناءً على عرض شاشة الجهاز بالكامل (`window.innerWidth`). لكن ماذا لو وضعنا نفس المكون داخل شريط جانبي ضيق (Sidebar) وداخل منطقة المحتوى الرئيسي (Main Content) في نفس الصفحة؟\n\n```\n+-------------------------------------------------------------+\n| Viewport Width: 1200px                                      |\n|                                                             |\n|  +--------------------+  +-------------------------------+  |\n|  | Sidebar (300px)    |  | Main Content (900px)          |  |\n|  |                    |  |                               |  |\n|  | [ Card Widget ]    |  | [ Card Widget ]               |  |\n|  | (يحتاج شكلاً عمودياً)|  | (يحتاج شكلاً أفقياً عريضاً)     |  |\n|  +--------------------+  +-------------------------------+  |\n+-------------------------------------------------------------+\n```\n\nباستخدام Container Queries، لا يهتم المكون بعرض الشاشة، بل يستجيب مباشرةً للمساحة المتوفرة داخل العنصر الحاوي له:\n\n```css\n/* 1. تعريف العنصر كحاوية */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card-container;\n}\n\n/* 2. التنسيق الافتراضي (عمودي) */\n.card-component {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n/* 3. الاستجابة عندما يتجاوز عرض الحاوية 450px */\n@container card-container (min-width: 450px) {\n  .card-component {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .card-thumbnail {\n    width: 140px;\n    height: 140px;\n    flex-shrink: 0;\n  }\n}\n```\n\n---\n\n## 2. محدد الأب السحري: `:has()` في الإنتاج\n\nظل مطورو الواجهات لسنوات طويلة يطالبون بطريقة لاستهداف العنصر الأب اعتماداً على حالة أبنائه دون الحاجة إلى JavaScript. أصبح ذلك واقعاً مدعوماً في جميع المتصفحات الحديثة عبر `:has()`.\n\n### أمثلة عملية وقوية:\n\n```css\n/* 1. تغيير خلفية البطاقة إذا كانت تحتوي على شارة مميزة (Featured Badge) */\n.card:has(.badge-featured) {\n  border-color: var(--primary-color);\n  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15);\n}\n\n/* 2. تظليل النموذج عند تفعيل حقل غير صالح */\n.form-group:has(input:invalid:focus) {\n  animation: shake 0.3s ease-in-out;\n}\n\n/* 3. تطبيق نمط Grid خاص إذا كانت المقالة تحتوي على صورة غلاف */\n.article-item:has(.article-cover) {\n  grid-template-columns: 200px 1fr;\n}\n```\n\n> **تحذير في الأداء:** لا تبالغ في تعشيش محددات `:has()` المعقدة في صفحات تحتوي على آلاف العناصر التفاعلية الثقيلة لتفادي استهلاك موارد إعادة الحساب (Style Recalculation).\n\n---\n\n## 3. محاذاة العناصر بدقة متناهية عبر `subgrid`\n\nعند بناء بطاقات (Cards) في شبكة `grid` ذات رؤوس وعناوين ونصوص متفاوتة الطول، كان من المستحيل محاذاة الأزرار السفلية وأسماء المؤلفين في نفس المستوى بدقة عبر جميع البطاقات. تحل ميزة `subgrid` هذه المشكلة بجعل شبكة العنصر الابن ترث مسارات شبكة العنصر الأب:\n\n```css\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n\n.card-item {\n  display: grid;\n  /* المكون يرث صفوف الأب بدلاً من حساب صفوفه الخاصة */\n  grid-template-rows: subgrid;\n  grid-row: span 3;\n}\n```\n\n---\n\n## 4. مقارنة سريعة بين أساليب التجاوب\n\n| المعيار | Media Queries التقليدية | Container Queries الحديثة |\n| :--- | :--- | :--- |\n| **نطاق القياس** | عرض شاشة المتصفح (`viewport`) | عرض العنصر الحاوي (`container`) |\n| **إمكانية إعادة الاستخدام** | ضعيفة إذا تغيّر موضع العنصر | ممتازة، المكون مستقل تماماً |\n| **التعقيد الهندسي** | كتابة شروط متعددة لكل صفحة | قاعدة تجاوب واحدة للمكوّن أينما وُضع |\n| **الدعم في المتصفحات** | 100% مدعوم | مدعوم في كافة المتصفحات الحديثة (+95%) |\n\n---\n\n## 5. توصيات لبناء معمارية CSS مستدامة\n\n1. **استخدم المتغيرات التفاعلية (CSS Custom Properties):** لتمرير الألوان والمسافات وجعل الثيم الداكن والفاتح سلساً وسريعاً.\n2. **اعتمد على الحجم السائل (Fluid Typography):** عبر دالة `clamp()`:\n   ```css\n   font-size: clamp(1rem, 0.8rem + 1vw, 1.75rem);\n   ```\n3. **فصل الهيكل عن السلوك:** لا تعتمد على أسماء فئات تعكس مظهراً ثابتاً، بل اجعل الأسماء تعكس وظيفة المكون (Component Semantics).\n\n> **خلاصة:** إن أدوات CSS الحديثة تمنحك اليوم القوة لبناء أنظمة تصميم (Design Systems) صلبة ومرنة تغنيك عن إرهاق كود الجافاسكريبت وتمنح المستخدم أداءً متفوقاً وتجربة تصفح غاية في السلاسة.\n",
  "folder3/web-performance-core-vitals.md": "# دليل تحسين أداء الويب وتحقيق نتائج قياسية في Core Web Vitals\n\nتعد مؤشرات أداء الويب الأساسية (Core Web Vitals) المعيار الذهبي المعتمد من قِبل Google لقياس جودة وسرعة تجربة المستخدم على الويب. إذا كان موقعك بطيئاً، فلن تخسر فقط ترتيبك في محركات البحث (SEO)، بل ستفقد جزءاً كبيراً من زوارك ومعدل التحويل (Conversion Rate).\n\n> **القاعدة الذهبية للأداء:** كل 100 ميلي ثانية إضافية في زمن استجابة الموقع قد تكلف انخفاضاً بنسبة 1% في المبيعات، بينما تقليص وقت التحميل بثانية واحدة يزيد من تفاعل الزوار بنسبة تصل إلى 27%.\n\n---\n\n## 1. المؤشرات الثلاثة الرئيسية وأهدافها المستهدفة\n\n| المؤشر | الاسم الكامل | ما يقيسه فعلياً | النتيجة الجيدة (Good) | تحتاج تحسيناً (Needs Work) | سيئة (Poor) |\n| :---: | :--- | :--- | :---: | :---: | :---: |\n| **LCP** | Largest Contentful Paint | سرعة تحميل أكبر عنصر مرئي بالصفحة | `<= 2.5 ثانية` | `2.5 - 4.0 ثوانٍ` | `> 4.0 ثوانٍ` |\n| **INP** | Interaction to Next Paint | مدى سلاسة واستجابة الصفحة لنقر وتفاعل المستخدم | `<= 200 ميلي ثانية` | `200 - 500 ميلي ثانية` | `> 500 ميلي ثانية` |\n| **CLS** | Cumulative Layout Shift | الاستقرار البصري ومقدار القفزات غير المتوقعة للعناصر | `<= 0.1` | `0.1 - 0.25` | `> 0.25` |\n\n---\n\n## 2. قائمة التحقق الشاملة لتحسين LCP (سرعة التحميل)\n\nلتحقيق سرعة قصوى في تحميل العنصر الأساسي، اتبع هذه القائمة العملية:\n\n- [x] **تفعيل ضغط الصور الحديث:** تحويل كافة الصور إلى صيغ `WebP` أو `AVIF` الحديثة لتوفير 30-70% من الحجم.\n- [x] **إضافة أبعاد صريحة للصور:** تعيين `width` و `height` دائماً لمنع قفزات التخطيط.\n- [x] **تحديد أولوية تحميل صورة الغلاف:** استخدام خاصية `fetchpriority=\"high\"` لصورة الـ Hero.\n- [ ] **تحسين خطوط الويب:** استخدام خاصية `font-display: swap` واستضافة الخطوط محلياً إن أمكن.\n- [ ] **استخدام CDN فائق السرعة:** لتوزيع الأصول الثابتة وتقليل زمن وصول أول بايت (TTFB).\n\n### مقارنة كود تحميل صورة الغلاف (Hero Image):\n\n**قبل التحسين (غير محبذ):**\n```html\n<!-- تحميل متأخر وعرضة للقفزات البصرية -->\n<img src=\"large-hero-banner.png\" alt=\"بانر رئيسي\">\n```\n\n**بعد التحسين (الممارسة الفضلى):**\n```html\n<!-- تحميل فوري ذو أولوية فائقة بصيغة حديثة مع أبعاد ثابتة -->\n<link rel=\"preload\" as=\"image\" href=\"hero-banner.webp\" fetchpriority=\"high\">\n<img \n  src=\"hero-banner.webp\" \n  width=\"1200\" \n  height=\"600\" \n  fetchpriority=\"high\" \n  loading=\"eager\" \n  decoding=\"async\" \n  alt=\"بانر رئيسي محسن\">\n```\n\n---\n\n## 3. معالجة مشاكل التفاعل واستجابة الواجهة (INP)\n\nيقيس مؤشر INP الوقت بين نقر المستخدم على زر أو عنصر تفاعلي ووقت ظهور التحديث الفعلي على الشاشة. أكبر عائق أمام هذا المؤشر هو المهام الطويلة (Long Tasks) التي تحجز خيط المعالجة الرئيسي (Main Thread) لأكثر من 50 ميلي ثانية.\n\n### كسر المهام الطويلة باستخدام `scheduler.yield()`:\n\n```javascript\n// تقسيم العمليات الحسابية الضخمة حتى لا يتجمد المتصفح\nasync function processLargeBatch(items) {\n  for (let i = 0; i < items.length; i++) {\n    performHeavyCalculation(items[i]);\n\n    // إذا استغرقت الدورة وقتاً طويلاً، نترك المتصفح ليعالج نقرات المستخدم\n    if (i % 50 === 0 && 'scheduler' in window && 'yield' in scheduler) {\n      await scheduler.yield();\n    } else if (i % 50 === 0) {\n      // بديل للمتصفحات القديمة\n      await new Promise(resolve => setTimeout(resolve, 0));\n    }\n  }\n}\n```\n\n---\n\n## 4. القضاء التام على القفزات البصرية (CLS = 0.00)\n\nالقفزات البصرية المزعجة تحدث غالباً بسبب:\n1. إعلانات أو صور تظهر فجأة وتدفع المحتوى للأسفل.\n2. خطوط ويب تتأخر في التحميل ثم تبدل حجم النص فجأة (FOIT / FOUT).\n\n```css\n/* الحل: حجز مساحة مسبقة لأي محتوى ديناميكي عبر aspect-ratio */\n.media-container {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background-color: var(--surface-secondary);\n  overflow: hidden;\n}\n```\n\n---\n\n## 5. الأدوات الموصى بها للقياس المستمر\n\n1. **Lighthouse & PageSpeed Insights:** لفحص الصفحة بشكل مختبري (Lab Data).\n2. **Chrome User Experience Report (CrUX):** للحصول على بيانات الزوار الحقيقيين في الميدان (Field Data).\n3. **مكتبة `web-vitals` الرسمية من Google:**\n   ```javascript\n   import { onCLS, onINP, onLCP } from 'web-vitals';\n\n   onCLS(console.log);\n   onINP(console.log);\n   onLCP(console.log);\n   ```\n\n> **ملخص:** الأداء ليس ميزة ثانوية تضيفها بعد اكتمال المشروع، بل هو خيار معماري هندسي يبدأ من كتابة أول سطر كود ويستمر طوال دورة حياة المنتج.\n",
  "web-performance-core-vitals": "# دليل تحسين أداء الويب وتحقيق نتائج قياسية في Core Web Vitals\n\nتعد مؤشرات أداء الويب الأساسية (Core Web Vitals) المعيار الذهبي المعتمد من قِبل Google لقياس جودة وسرعة تجربة المستخدم على الويب. إذا كان موقعك بطيئاً، فلن تخسر فقط ترتيبك في محركات البحث (SEO)، بل ستفقد جزءاً كبيراً من زوارك ومعدل التحويل (Conversion Rate).\n\n> **القاعدة الذهبية للأداء:** كل 100 ميلي ثانية إضافية في زمن استجابة الموقع قد تكلف انخفاضاً بنسبة 1% في المبيعات، بينما تقليص وقت التحميل بثانية واحدة يزيد من تفاعل الزوار بنسبة تصل إلى 27%.\n\n---\n\n## 1. المؤشرات الثلاثة الرئيسية وأهدافها المستهدفة\n\n| المؤشر | الاسم الكامل | ما يقيسه فعلياً | النتيجة الجيدة (Good) | تحتاج تحسيناً (Needs Work) | سيئة (Poor) |\n| :---: | :--- | :--- | :---: | :---: | :---: |\n| **LCP** | Largest Contentful Paint | سرعة تحميل أكبر عنصر مرئي بالصفحة | `<= 2.5 ثانية` | `2.5 - 4.0 ثوانٍ` | `> 4.0 ثوانٍ` |\n| **INP** | Interaction to Next Paint | مدى سلاسة واستجابة الصفحة لنقر وتفاعل المستخدم | `<= 200 ميلي ثانية` | `200 - 500 ميلي ثانية` | `> 500 ميلي ثانية` |\n| **CLS** | Cumulative Layout Shift | الاستقرار البصري ومقدار القفزات غير المتوقعة للعناصر | `<= 0.1` | `0.1 - 0.25` | `> 0.25` |\n\n---\n\n## 2. قائمة التحقق الشاملة لتحسين LCP (سرعة التحميل)\n\nلتحقيق سرعة قصوى في تحميل العنصر الأساسي، اتبع هذه القائمة العملية:\n\n- [x] **تفعيل ضغط الصور الحديث:** تحويل كافة الصور إلى صيغ `WebP` أو `AVIF` الحديثة لتوفير 30-70% من الحجم.\n- [x] **إضافة أبعاد صريحة للصور:** تعيين `width` و `height` دائماً لمنع قفزات التخطيط.\n- [x] **تحديد أولوية تحميل صورة الغلاف:** استخدام خاصية `fetchpriority=\"high\"` لصورة الـ Hero.\n- [ ] **تحسين خطوط الويب:** استخدام خاصية `font-display: swap` واستضافة الخطوط محلياً إن أمكن.\n- [ ] **استخدام CDN فائق السرعة:** لتوزيع الأصول الثابتة وتقليل زمن وصول أول بايت (TTFB).\n\n### مقارنة كود تحميل صورة الغلاف (Hero Image):\n\n**قبل التحسين (غير محبذ):**\n```html\n<!-- تحميل متأخر وعرضة للقفزات البصرية -->\n<img src=\"large-hero-banner.png\" alt=\"بانر رئيسي\">\n```\n\n**بعد التحسين (الممارسة الفضلى):**\n```html\n<!-- تحميل فوري ذو أولوية فائقة بصيغة حديثة مع أبعاد ثابتة -->\n<link rel=\"preload\" as=\"image\" href=\"hero-banner.webp\" fetchpriority=\"high\">\n<img \n  src=\"hero-banner.webp\" \n  width=\"1200\" \n  height=\"600\" \n  fetchpriority=\"high\" \n  loading=\"eager\" \n  decoding=\"async\" \n  alt=\"بانر رئيسي محسن\">\n```\n\n---\n\n## 3. معالجة مشاكل التفاعل واستجابة الواجهة (INP)\n\nيقيس مؤشر INP الوقت بين نقر المستخدم على زر أو عنصر تفاعلي ووقت ظهور التحديث الفعلي على الشاشة. أكبر عائق أمام هذا المؤشر هو المهام الطويلة (Long Tasks) التي تحجز خيط المعالجة الرئيسي (Main Thread) لأكثر من 50 ميلي ثانية.\n\n### كسر المهام الطويلة باستخدام `scheduler.yield()`:\n\n```javascript\n// تقسيم العمليات الحسابية الضخمة حتى لا يتجمد المتصفح\nasync function processLargeBatch(items) {\n  for (let i = 0; i < items.length; i++) {\n    performHeavyCalculation(items[i]);\n\n    // إذا استغرقت الدورة وقتاً طويلاً، نترك المتصفح ليعالج نقرات المستخدم\n    if (i % 50 === 0 && 'scheduler' in window && 'yield' in scheduler) {\n      await scheduler.yield();\n    } else if (i % 50 === 0) {\n      // بديل للمتصفحات القديمة\n      await new Promise(resolve => setTimeout(resolve, 0));\n    }\n  }\n}\n```\n\n---\n\n## 4. القضاء التام على القفزات البصرية (CLS = 0.00)\n\nالقفزات البصرية المزعجة تحدث غالباً بسبب:\n1. إعلانات أو صور تظهر فجأة وتدفع المحتوى للأسفل.\n2. خطوط ويب تتأخر في التحميل ثم تبدل حجم النص فجأة (FOIT / FOUT).\n\n```css\n/* الحل: حجز مساحة مسبقة لأي محتوى ديناميكي عبر aspect-ratio */\n.media-container {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background-color: var(--surface-secondary);\n  overflow: hidden;\n}\n```\n\n---\n\n## 5. الأدوات الموصى بها للقياس المستمر\n\n1. **Lighthouse & PageSpeed Insights:** لفحص الصفحة بشكل مختبري (Lab Data).\n2. **Chrome User Experience Report (CrUX):** للحصول على بيانات الزوار الحقيقيين في الميدان (Field Data).\n3. **مكتبة `web-vitals` الرسمية من Google:**\n   ```javascript\n   import { onCLS, onINP, onLCP } from 'web-vitals';\n\n   onCLS(console.log);\n   onINP(console.log);\n   onLCP(console.log);\n   ```\n\n> **ملخص:** الأداء ليس ميزة ثانوية تضيفها بعد اكتمال المشروع، بل هو خيار معماري هندسي يبدأ من كتابة أول سطر كود ويستمر طوال دورة حياة المنتج.\n",
  "folder4/docker-production-best-practices.md": "# أفضل ممارسات Docker للإنتاج: تقليص الحجم وتأمين الحاويات\n\nيُعد بناء صور Docker خفيفة وآمنة من أهم متطلبات نشر التطبيقات في بيئات الإنتاج الحديثة (Production Environments). الصور الكبيرة لا تستهلك مساحات تخزين ونطاق ترددي (Bandwidth) فحسب، بل تحتوي في العادة على حزم وأدوات زائدة تزيد من مساحة الهجوم وسطح الثغرات الأمنية (Attack Surface).\n\n> **قاعدة أمنية حاسمة:** كل حزمة أو أداة لا يحتاجها تطبيقك أثناء التشغيل (مثل مترجمات `gcc` أو أدوات إدارة الحزم `apt`) هي ثغرة أمنية محتملة لا يجب أن تتواجد داخل صورة الإنتاج.\n\n---\n\n## 1. مقارنة أحجام الصور الأساسية (Base Images)\n\n| الصورة الأساسية | الحجم التقريبي | الميزات | بيئة الاستخدام المثالية |\n| :--- | :---: | :--- | :--- |\n| `ubuntu:latest` | ~78 MB | مألوفة، متوافقة مع كل الحزم | التطوير المحلي والاختبارات الشاملة |\n| `debian:bookworm-slim` | ~30 MB | متوافقة مع glibc، مستقرة جداً | تطبيقات C++ و Node و Python المعقدة |\n| `alpine:latest` | ~7 MB | بالغة الصغر، خفيفة وسريعة | الخدمات المصغرة، مجمعة مسبقاً (musl) |\n| `gcr.io/distroless/static` | ~2 MB | بدون شل أو مديري حزم، أمان فائق | خدمات Go و Rust والمخرجات الثابتة |\n\n---\n\n## 2. النمط الذهبي: البناء متعدد المراحل (Multi-Stage Builds)\n\nباستخدام Multi-Stage Builds، نقوم بفصل مرحلة الترجمة والتجميع (Build Stage) المحتوية على الأدوات الثقيلة، عن مرحلة التشغيل النهائية (Runtime Stage) التي لا تحتوي سوى على الملف التنفيذي فقط.\n\n### مثال متكامل لتطبيق Go أو Spring Boot:\n\n```dockerfile\n# -------------------------------------------------------------\n# المرحلة الأولى: البناء والتجميع (Builder Stage)\n# -------------------------------------------------------------\nFROM golang:1.22-alpine AS builder\n\nWORKDIR /app\n\n# 1. نسخ الاعتماديات أولاً للاستفادة القصوى من Docker Cache\nCOPY go.mod go.sum ./\nRUN go mod download\n\n# 2. نسخ الكود وتجميعه\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -ldflags=\"-w -s\" -o myapp .\n\n# -------------------------------------------------------------\n# المرحلة الثانية: التشغيل الإنتاجي (Production Stage)\n# -------------------------------------------------------------\nFROM alpine:3.19\n\n# إنشاء مستخدم محدود الصلاحيات للأمان (Non-root user)\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\n\nWORKDIR /home/appuser\n\n# نسخ الملف التنفيذي المترجم فقط من مرحلة البناء\nCOPY --from=builder --chown=appuser:appgroup /app/myapp .\n\n# تشغيل الحاوية تحت المستخدم العادي وليس root\nUSER appuser\n\nEXPOSE 8080\n\nENTRYPOINT [\"./myapp\"]\n```\n\n---\n\n## 3. التدقيق الأمني وفحص الثغرات (Vulnerability Scanning)\n\nلا ترفع صورتك أبداً إلى السجل (Docker Registry) قبل فحصها بحثاً عن الثغرات المعروفة (CVEs):\n\n```bash\n# 1. الفحص الفوري باستخدام Trivy\ntrivy image myapp:latest\n\n# 2. الفحص باستخدام Docker Scout المدمج\ndocker scout cves myapp:latest\n\n# 3. معرفة ما يحتويه كل مسار في الصورة وتحليل الطبقات\ndocker history myapp:latest\n```\n\n---\n\n## 4. قائمة ممارسات الإنتاج الإلزامية\n\n- [x] **عدم استخدام الوسم `:latest` أبداً في الإنتاج:** حدد إصداراً ثابتاً مثل `node:20.11-alpine` لضمان استقرار البناء.\n- [x] **تشغيل الحاوية بمستخدم غير root:** استخدم تعليمة `USER` دائماً لمنع اختراق النظام المضيف في حال حدوث ثغرة.\n- [x] **ترتيب أوامر Dockerfile بعناية:** ضع الأوامر الأقل تغييراً (مثل تثبيت الحزم الأساسية) في البداية للاستفادة من الـ Cache.\n- [x] **استخدام ملف `.dockerignore`:** لمنع تسريب ملفات `.git` ومفاتيح البيئة `.env` والملفات المؤقتة إلى الصورة.\n- [ ] **تشغيل الحاوية بنظام ملفات للقراءة فقط:** استخدام خيار `--read-only` في بيئة التشغيل.\n\n> **النتيجة:** باتباع هذه الخطوات، تتقلص صور الحاويات من مئات الميغابايتات إلى بضعة ميغابايتات، وتنخفض احتمالية التعرض للاختراق بنسبة تفوق 80%، وتتسارع عملية النشر والتوسع عبر السحابة بشكل مذهل.\n",
  "docker-production-best-practices": "# أفضل ممارسات Docker للإنتاج: تقليص الحجم وتأمين الحاويات\n\nيُعد بناء صور Docker خفيفة وآمنة من أهم متطلبات نشر التطبيقات في بيئات الإنتاج الحديثة (Production Environments). الصور الكبيرة لا تستهلك مساحات تخزين ونطاق ترددي (Bandwidth) فحسب، بل تحتوي في العادة على حزم وأدوات زائدة تزيد من مساحة الهجوم وسطح الثغرات الأمنية (Attack Surface).\n\n> **قاعدة أمنية حاسمة:** كل حزمة أو أداة لا يحتاجها تطبيقك أثناء التشغيل (مثل مترجمات `gcc` أو أدوات إدارة الحزم `apt`) هي ثغرة أمنية محتملة لا يجب أن تتواجد داخل صورة الإنتاج.\n\n---\n\n## 1. مقارنة أحجام الصور الأساسية (Base Images)\n\n| الصورة الأساسية | الحجم التقريبي | الميزات | بيئة الاستخدام المثالية |\n| :--- | :---: | :--- | :--- |\n| `ubuntu:latest` | ~78 MB | مألوفة، متوافقة مع كل الحزم | التطوير المحلي والاختبارات الشاملة |\n| `debian:bookworm-slim` | ~30 MB | متوافقة مع glibc، مستقرة جداً | تطبيقات C++ و Node و Python المعقدة |\n| `alpine:latest` | ~7 MB | بالغة الصغر، خفيفة وسريعة | الخدمات المصغرة، مجمعة مسبقاً (musl) |\n| `gcr.io/distroless/static` | ~2 MB | بدون شل أو مديري حزم، أمان فائق | خدمات Go و Rust والمخرجات الثابتة |\n\n---\n\n## 2. النمط الذهبي: البناء متعدد المراحل (Multi-Stage Builds)\n\nباستخدام Multi-Stage Builds، نقوم بفصل مرحلة الترجمة والتجميع (Build Stage) المحتوية على الأدوات الثقيلة، عن مرحلة التشغيل النهائية (Runtime Stage) التي لا تحتوي سوى على الملف التنفيذي فقط.\n\n### مثال متكامل لتطبيق Go أو Spring Boot:\n\n```dockerfile\n# -------------------------------------------------------------\n# المرحلة الأولى: البناء والتجميع (Builder Stage)\n# -------------------------------------------------------------\nFROM golang:1.22-alpine AS builder\n\nWORKDIR /app\n\n# 1. نسخ الاعتماديات أولاً للاستفادة القصوى من Docker Cache\nCOPY go.mod go.sum ./\nRUN go mod download\n\n# 2. نسخ الكود وتجميعه\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -ldflags=\"-w -s\" -o myapp .\n\n# -------------------------------------------------------------\n# المرحلة الثانية: التشغيل الإنتاجي (Production Stage)\n# -------------------------------------------------------------\nFROM alpine:3.19\n\n# إنشاء مستخدم محدود الصلاحيات للأمان (Non-root user)\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\n\nWORKDIR /home/appuser\n\n# نسخ الملف التنفيذي المترجم فقط من مرحلة البناء\nCOPY --from=builder --chown=appuser:appgroup /app/myapp .\n\n# تشغيل الحاوية تحت المستخدم العادي وليس root\nUSER appuser\n\nEXPOSE 8080\n\nENTRYPOINT [\"./myapp\"]\n```\n\n---\n\n## 3. التدقيق الأمني وفحص الثغرات (Vulnerability Scanning)\n\nلا ترفع صورتك أبداً إلى السجل (Docker Registry) قبل فحصها بحثاً عن الثغرات المعروفة (CVEs):\n\n```bash\n# 1. الفحص الفوري باستخدام Trivy\ntrivy image myapp:latest\n\n# 2. الفحص باستخدام Docker Scout المدمج\ndocker scout cves myapp:latest\n\n# 3. معرفة ما يحتويه كل مسار في الصورة وتحليل الطبقات\ndocker history myapp:latest\n```\n\n---\n\n## 4. قائمة ممارسات الإنتاج الإلزامية\n\n- [x] **عدم استخدام الوسم `:latest` أبداً في الإنتاج:** حدد إصداراً ثابتاً مثل `node:20.11-alpine` لضمان استقرار البناء.\n- [x] **تشغيل الحاوية بمستخدم غير root:** استخدم تعليمة `USER` دائماً لمنع اختراق النظام المضيف في حال حدوث ثغرة.\n- [x] **ترتيب أوامر Dockerfile بعناية:** ضع الأوامر الأقل تغييراً (مثل تثبيت الحزم الأساسية) في البداية للاستفادة من الـ Cache.\n- [x] **استخدام ملف `.dockerignore`:** لمنع تسريب ملفات `.git` ومفاتيح البيئة `.env` والملفات المؤقتة إلى الصورة.\n- [ ] **تشغيل الحاوية بنظام ملفات للقراءة فقط:** استخدام خيار `--read-only` في بيئة التشغيل.\n\n> **النتيجة:** باتباع هذه الخطوات، تتقلص صور الحاويات من مئات الميغابايتات إلى بضعة ميغابايتات، وتنخفض احتمالية التعرض للاختراق بنسبة تفوق 80%، وتتسارع عملية النشر والتوسع عبر السحابة بشكل مذهل.\n",
  "folder4/github-actions-cicd-pipeline.md": "# بناء خط أنابيب CI/CD متكامل واحترافي باستخدام GitHub Actions\n\nتعتبر الأتمتة (Automation) عصب هندسة البرمجيات الحديثة. لم يعد هناك مجال للنشر اليدوي عبر بروتوكولات FTP أو الاتصال المباشر بالخوادم عبر SSH ورفع الملفات يدوياً. يوفر GitHub Actions منصة مرنة وقوية تُمكّنك من أتمتة كل مرحلة: من فحص التنسيق والاختبارات الآلية إلى النشر على السحابة مع كل Pull Request أو Push.\n\n---\n\n## 1. مخطط تدفق خط الأنابيب (Pipeline Flow)\n\n```\n [ مطور يدفع الكود (Push / PR) ]\n               │\n               ▼\n ┌───────────────────────────────┐\n │   مرحلة الفحص والاختبار (CI)   │\n │   - فحص التنسيق ولغة الكود    │\n │   - تشغيل اختبارات Unit/Integration │\n │   - التدقيق الأمني وفحص الحزم │\n └──────────────┬────────────────┘\n                │ نجاح الاختبارات\n                ▼\n ┌───────────────────────────────┐\n │   مرحلة بناء الصورة (Build)    │\n │   - بناء صورة Docker          │\n │   - تفعيل الـ Cache للتسريع   │\n │   - رفع الصورة إلى السجل      │\n └──────────────┬────────────────┘\n                │ الدمج مع main\n                ▼\n ┌───────────────────────────────┐\n │    مرحلة النشر الحي (CD)      │\n │   - تحديث خوادم الإنتاج       │\n │   - إرسال إشعار للمطورين      │\n └───────────────────────────────┘\n```\n\n---\n\n## 2. إعداد ملف الـ Workflow الكامل (`.github/workflows/deploy.yml`)\n\nفيما يلي خط أنابيب جاهز لبيئات الإنتاج يحتوي على إدارة الكاش، والاختبار المتوازي، وحماية المفاتيح السرية:\n\n```yaml\nname: Production CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  # -------------------------------------------------------------\n  # المرحلة الأولى: الاختبار والتحليل الثابت\n  # -------------------------------------------------------------\n  lint-and-test:\n    name: Lint & Automated Tests\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js Environment\n        uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n\n      - name: Install Dependencies\n        run: npm ci\n\n      - name: Run Code Linter\n        run: npm run lint\n\n      - name: Execute Unit & Integration Tests\n        run: npm test -- --coverage\n\n  # -------------------------------------------------------------\n  # المرحلة الثانية: بناء الحاوية والنشر للإنتاج\n  # -------------------------------------------------------------\n  deploy:\n    name: Build & Deploy to Production\n    needs: lint-and-test\n    if: github.ref == 'refs/heads/main' && github.event_name == 'push'\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Set up Docker Buildx\n        uses: actions/setup-buildx-action@v3\n\n      - name: Login to DockerHub\n        uses: docker/login-action@v3\n        with:\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_TOKEN }}\n\n      - name: Build and Push Docker Image\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: ${{ secrets.DOCKERHUB_USERNAME }}/my-app:latest\n          cache-from: type=gha\n          cache-to: type=gha,mode=max\n\n      - name: Trigger Production Deployment Webhook\n        run: |\n          echo \"جاري النشر التلقائي عبر Webhook...\"\n          curl -X POST -H \"Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}\" \\\n            https://api.mycloud.com/deploy/v1/trigger\n```\n\n---\n\n## 3. ثلاث نصائح احترافية لتوفير الوقت والتكلفة\n\n### 1. استغلال GitHub Actions Cache بذكاء\nتنزيل الاعتماديات (Dependencies) مع كل تشغيل يهدر دقائق ثمينة. استخدم خاصية الـ Cache المدمجة مع أدوات مثل `actions/setup-node` أو `actions/setup-java` لتسريع البناء بنسبة تصل إلى 60%.\n\n### 2. تقسيم المهام عبر Jobs متوازية\nبدلاً من تشغيل الاختبارات بالتعاقب، شغل اختبارات الواجهة واختبارات الأنظمة الخلفية بالتوازي عبر وظائف منفصلة `jobs`.\n\n### 3. تقييد صلاحيات الأذونات (Permissions)\nطبق مبدأ الصلاحيات الأقل (Least Privilege) في ملف التكوين:\n\n```yaml\npermissions:\n  contents: read\n  packages: write\n```\n\n> **تنبيه أمني:** لا تقم أبداً بطباعة المتغيرات السرية (`secrets`) في سطر الأوامر أو استخدامها في صدى الشاشة (`echo $SECRET`) حتى لا تظهر في سجلات التشغيل المكشوفة للفريق.\n",
  "github-actions-cicd-pipeline": "# بناء خط أنابيب CI/CD متكامل واحترافي باستخدام GitHub Actions\n\nتعتبر الأتمتة (Automation) عصب هندسة البرمجيات الحديثة. لم يعد هناك مجال للنشر اليدوي عبر بروتوكولات FTP أو الاتصال المباشر بالخوادم عبر SSH ورفع الملفات يدوياً. يوفر GitHub Actions منصة مرنة وقوية تُمكّنك من أتمتة كل مرحلة: من فحص التنسيق والاختبارات الآلية إلى النشر على السحابة مع كل Pull Request أو Push.\n\n---\n\n## 1. مخطط تدفق خط الأنابيب (Pipeline Flow)\n\n```\n [ مطور يدفع الكود (Push / PR) ]\n               │\n               ▼\n ┌───────────────────────────────┐\n │   مرحلة الفحص والاختبار (CI)   │\n │   - فحص التنسيق ولغة الكود    │\n │   - تشغيل اختبارات Unit/Integration │\n │   - التدقيق الأمني وفحص الحزم │\n └──────────────┬────────────────┘\n                │ نجاح الاختبارات\n                ▼\n ┌───────────────────────────────┐\n │   مرحلة بناء الصورة (Build)    │\n │   - بناء صورة Docker          │\n │   - تفعيل الـ Cache للتسريع   │\n │   - رفع الصورة إلى السجل      │\n └──────────────┬────────────────┘\n                │ الدمج مع main\n                ▼\n ┌───────────────────────────────┐\n │    مرحلة النشر الحي (CD)      │\n │   - تحديث خوادم الإنتاج       │\n │   - إرسال إشعار للمطورين      │\n └───────────────────────────────┘\n```\n\n---\n\n## 2. إعداد ملف الـ Workflow الكامل (`.github/workflows/deploy.yml`)\n\nفيما يلي خط أنابيب جاهز لبيئات الإنتاج يحتوي على إدارة الكاش، والاختبار المتوازي، وحماية المفاتيح السرية:\n\n```yaml\nname: Production CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  # -------------------------------------------------------------\n  # المرحلة الأولى: الاختبار والتحليل الثابت\n  # -------------------------------------------------------------\n  lint-and-test:\n    name: Lint & Automated Tests\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js Environment\n        uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n\n      - name: Install Dependencies\n        run: npm ci\n\n      - name: Run Code Linter\n        run: npm run lint\n\n      - name: Execute Unit & Integration Tests\n        run: npm test -- --coverage\n\n  # -------------------------------------------------------------\n  # المرحلة الثانية: بناء الحاوية والنشر للإنتاج\n  # -------------------------------------------------------------\n  deploy:\n    name: Build & Deploy to Production\n    needs: lint-and-test\n    if: github.ref == 'refs/heads/main' && github.event_name == 'push'\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Set up Docker Buildx\n        uses: actions/setup-buildx-action@v3\n\n      - name: Login to DockerHub\n        uses: docker/login-action@v3\n        with:\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_TOKEN }}\n\n      - name: Build and Push Docker Image\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: ${{ secrets.DOCKERHUB_USERNAME }}/my-app:latest\n          cache-from: type=gha\n          cache-to: type=gha,mode=max\n\n      - name: Trigger Production Deployment Webhook\n        run: |\n          echo \"جاري النشر التلقائي عبر Webhook...\"\n          curl -X POST -H \"Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}\" \\\n            https://api.mycloud.com/deploy/v1/trigger\n```\n\n---\n\n## 3. ثلاث نصائح احترافية لتوفير الوقت والتكلفة\n\n### 1. استغلال GitHub Actions Cache بذكاء\nتنزيل الاعتماديات (Dependencies) مع كل تشغيل يهدر دقائق ثمينة. استخدم خاصية الـ Cache المدمجة مع أدوات مثل `actions/setup-node` أو `actions/setup-java` لتسريع البناء بنسبة تصل إلى 60%.\n\n### 2. تقسيم المهام عبر Jobs متوازية\nبدلاً من تشغيل الاختبارات بالتعاقب، شغل اختبارات الواجهة واختبارات الأنظمة الخلفية بالتوازي عبر وظائف منفصلة `jobs`.\n\n### 3. تقييد صلاحيات الأذونات (Permissions)\nطبق مبدأ الصلاحيات الأقل (Least Privilege) في ملف التكوين:\n\n```yaml\npermissions:\n  contents: read\n  packages: write\n```\n\n> **تنبيه أمني:** لا تقم أبداً بطباعة المتغيرات السرية (`secrets`) في سطر الأوامر أو استخدامها في صدى الشاشة (`echo $SECRET`) حتى لا تظهر في سجلات التشغيل المكشوفة للفريق.\n",
  "folder5/microservices-vs-monolith.md": "# الأنظمة الموزعة (Microservices) مقابل النواة الواحدة (Monolith): متى وكيف تختار؟\n\nفي عالم هندسة البرمجيات، تتكرر موجات من التوجهات التقنية التي تُصوَّر أحياناً كحلول سحرية لجميع المشاكل. كان التحول إلى الخدمات المصغرة (Microservices) أحد أبرز هذه التوجهات. ومع ذلك، اكتشفت العديد من الشركات أن استبدال نظام أحادي بسيط (Monolith) بشبكة معقدة من الخدمات الموزعة جلب تكلفة تشغيلية باهظة دون تحقيق الفائدة المرجوة.\n\n> **قاعدة مارتن فاولر الأولى في الخدمات المصغرة:** \"لا تبدأ أبداً ببناء نظام خدمات مصغرة من الصفر؛ ابدأ بنواة واحدة متماسكة، وتعلم حدود النطاقات (Domain Boundaries)، ثم قم بالتقسيم تدريجياً إذا اقتضت الضرورة فقط.\"\n\n---\n\n## 1. مقارنة شاملة بين الأنماط المعمارية\n\n| البُعد الهندسي | النواة الواحدة (Monolith) | النواة المنظمة (Modular Monolith) | الخدمات المصغرة (Microservices) |\n| :--- | :--- | :--- | :--- |\n| **سهولة التطوير الأولي** | سريعة جداً وبسيطة | ممتازة ومنظمة | تتطلب إعدادات بنية تحتية ثقيلة |\n| **الاتساق وقواعد البيانات** | معاملات ACID فورية | معاملات ACID محلية | اتساق نهائي (Eventual Consistency) |\n| **التعقيد التشغيلي** | خادم واحد أو حاوية مكررة | خادم أو حاوية مكررة | إدارة شبكات، DNS، وتتبع موزع |\n| **عزل الأعطال** | خطأ غير معالج قد يعطل التطبيق | خطأ قد يعطل التطبيق ما لم يُعزل | عزل طبيعي؛ عطل خدمة لا يوقف البقية |\n| **استقلالية الفرق البرمجية** | تضارب محتمل عند كثرة المطورين | حدود واضحة مع إمكانية التنسيق | استقلالية كاملة لكل فريق |\n| **التكلفة المالية للبنية** | منخفضة جداً | منخفضة | مرتفعة (خوادم متعددة، سجلات، شبكات) |\n\n---\n\n## 2. المخطط المعماري: أين تكمن الفروقات الحقيقية؟\n\n### أ. النواة الواحدة المنظمة (Modular Monolith)\nقاعدة بيانات واحدة، مستودع كود واحد، لكن الوحدات الوظيفية مفصولة داخلياً بصرامة:\n\n```\n┌─────────────────────────────────────────────────────────┐\n│                    Modular Monolith                     │\n│                                                         │\n│   ┌───────────────┐  ┌───────────────┐  ┌───────────┐   │\n│   │ Order Module  │  │ User Module   │  │ Payment   │   │\n│   │ (In-Process)  │  │ (In-Process)  │  │ Module    │   │\n│   └───────┬───────┘  └───────┬───────┘  └─────┬─────┘   │\n│           │                  │                │         │\n│           ▼                  ▼                ▼         │\n│               [ Single Shared Database ]                │\n└─────────────────────────────────────────────────────────┘\n```\n\n### ب. الخدمات المصغرة (Microservices)\nخدمات مستقلة تماماً، لكل منها قاعدة بياناتها الخاصة، وتتواصل عبر شبكة (gRPC / REST / Kafka):\n\n```\n ┌───────────────┐      ┌───────────────┐      ┌───────────────┐\n │ Order Service │      │ User Service  │      │Payment Service│\n └───────┬───────┘      └───────┬───────┘      └───────┬───────┘\n         │                      │                      │\n         ▼                      ▼                      ▼\n  [ Orders DB ]           [ Users DB ]           [ Payments DB ]\n         │                      ▲                      ▲\n         └──────── Event Bus ───┴──────────────────────┘\n                   (Kafka / RabbitMQ)\n```\n\n---\n\n## 3. شجرة اتخاذ القرار المعماري (Architectural Decision Tree)\n\nلتحديد المعمارية الملائمة لمشروعك، أجب عن الأسئلة التالية:\n\n```\nهل عدد المطورين في الفريق أقل من 20 مطوراً؟\n   ├── نعم ──> اختر [ Modular Monolith ] ووفر وقتك ومواردك لبناء المنتج.\n   └── لا\n        └── هل توجد أجزاء في النظام تحتاج موارد حاسوبية فائقة ومتفاوتة جداً؟\n             ├── نعم ──> افصل تلك الأجزاء فقط كخدمات مستقلة (Hybrid Architecture).\n             └── لا  ──> ابقَ مع [ Modular Monolith ] وحسّن الكفاءة الداخلية.\n```\n\n---\n\n## 4. معضلات الخدمات المصغرة التي يجب الاستعداد لها\n\nإذا قررت الانتقال إلى الخدمات المصغرة، فستحتاج إلى حل المشكلات التالية عبر أنماط معمارية متخصصة:\n\n1. **المعاملات الموزعة (Distributed Transactions):** لا يمكنك استخدام `BEGIN TRANSACTION` عبر خدمتين مختلفتين؛ ستحتاج لتطبيق **نمط Saga** للتعامل مع التراجع في حال الفشل.\n2. **اتساق البيانات:** استخدام نمط **Transactional Outbox** لضمان إرسال الرسائل إلى Message Broker دون فقدان.\n3. **المراقبة والتتبع (Distributed Tracing):** استخدام أدوات مثل OpenTelemetry و Jaeger لمعرفة مسار الطلب عبر عشرات الخدمات عند حدوث خطأ أو بطء.\n\n---\n\n## 5. الأسئلة الشائعة (FAQ)\n\n### س: هل بناء Monolith يعني أن الكود سيكون سيئاً وفوضوياً؟\n**ج:** إطلاقاً! الفوضى ناتجة عن غياب الانضباط الهندسي. يمكنك بناء Modular Monolith غاية في النظافة والانضباط يتيح لك الفصل المستقبلي لأي خدمة بسلاسة بالغة متى ما تطلبت الحاجة ذلك.\n\n### س: متى تكون الخدمات المصغرة ضرورة لا مفر منها؟\n**ج:** عندما تكبر المؤسسة إلى مئات المطورين المقسمين إلى فرق مستقلة وظيفياً، أو عندما تتطلب بعض الأجزاء معايير أمان خاصة (مثل خدمات الدفع PCI-DSS) أو تقنيات تشغيلية مختلفة كلياً.\n\n> **الخلاصة:** المعمارية الأفضل ليست الأكثر تعقيداً ولا الأكثر حداثة، بل هي التي تحل مشاكل العمل الحالية بأقل قدر ممكن من التعقيد والتكلفة الإضافية.\n",
  "microservices-vs-monolith": "# الأنظمة الموزعة (Microservices) مقابل النواة الواحدة (Monolith): متى وكيف تختار؟\n\nفي عالم هندسة البرمجيات، تتكرر موجات من التوجهات التقنية التي تُصوَّر أحياناً كحلول سحرية لجميع المشاكل. كان التحول إلى الخدمات المصغرة (Microservices) أحد أبرز هذه التوجهات. ومع ذلك، اكتشفت العديد من الشركات أن استبدال نظام أحادي بسيط (Monolith) بشبكة معقدة من الخدمات الموزعة جلب تكلفة تشغيلية باهظة دون تحقيق الفائدة المرجوة.\n\n> **قاعدة مارتن فاولر الأولى في الخدمات المصغرة:** \"لا تبدأ أبداً ببناء نظام خدمات مصغرة من الصفر؛ ابدأ بنواة واحدة متماسكة، وتعلم حدود النطاقات (Domain Boundaries)، ثم قم بالتقسيم تدريجياً إذا اقتضت الضرورة فقط.\"\n\n---\n\n## 1. مقارنة شاملة بين الأنماط المعمارية\n\n| البُعد الهندسي | النواة الواحدة (Monolith) | النواة المنظمة (Modular Monolith) | الخدمات المصغرة (Microservices) |\n| :--- | :--- | :--- | :--- |\n| **سهولة التطوير الأولي** | سريعة جداً وبسيطة | ممتازة ومنظمة | تتطلب إعدادات بنية تحتية ثقيلة |\n| **الاتساق وقواعد البيانات** | معاملات ACID فورية | معاملات ACID محلية | اتساق نهائي (Eventual Consistency) |\n| **التعقيد التشغيلي** | خادم واحد أو حاوية مكررة | خادم أو حاوية مكررة | إدارة شبكات، DNS، وتتبع موزع |\n| **عزل الأعطال** | خطأ غير معالج قد يعطل التطبيق | خطأ قد يعطل التطبيق ما لم يُعزل | عزل طبيعي؛ عطل خدمة لا يوقف البقية |\n| **استقلالية الفرق البرمجية** | تضارب محتمل عند كثرة المطورين | حدود واضحة مع إمكانية التنسيق | استقلالية كاملة لكل فريق |\n| **التكلفة المالية للبنية** | منخفضة جداً | منخفضة | مرتفعة (خوادم متعددة، سجلات، شبكات) |\n\n---\n\n## 2. المخطط المعماري: أين تكمن الفروقات الحقيقية؟\n\n### أ. النواة الواحدة المنظمة (Modular Monolith)\nقاعدة بيانات واحدة، مستودع كود واحد، لكن الوحدات الوظيفية مفصولة داخلياً بصرامة:\n\n```\n┌─────────────────────────────────────────────────────────┐\n│                    Modular Monolith                     │\n│                                                         │\n│   ┌───────────────┐  ┌───────────────┐  ┌───────────┐   │\n│   │ Order Module  │  │ User Module   │  │ Payment   │   │\n│   │ (In-Process)  │  │ (In-Process)  │  │ Module    │   │\n│   └───────┬───────┘  └───────┬───────┘  └─────┬─────┘   │\n│           │                  │                │         │\n│           ▼                  ▼                ▼         │\n│               [ Single Shared Database ]                │\n└─────────────────────────────────────────────────────────┘\n```\n\n### ب. الخدمات المصغرة (Microservices)\nخدمات مستقلة تماماً، لكل منها قاعدة بياناتها الخاصة، وتتواصل عبر شبكة (gRPC / REST / Kafka):\n\n```\n ┌───────────────┐      ┌───────────────┐      ┌───────────────┐\n │ Order Service │      │ User Service  │      │Payment Service│\n └───────┬───────┘      └───────┬───────┘      └───────┬───────┘\n         │                      │                      │\n         ▼                      ▼                      ▼\n  [ Orders DB ]           [ Users DB ]           [ Payments DB ]\n         │                      ▲                      ▲\n         └──────── Event Bus ───┴──────────────────────┘\n                   (Kafka / RabbitMQ)\n```\n\n---\n\n## 3. شجرة اتخاذ القرار المعماري (Architectural Decision Tree)\n\nلتحديد المعمارية الملائمة لمشروعك، أجب عن الأسئلة التالية:\n\n```\nهل عدد المطورين في الفريق أقل من 20 مطوراً؟\n   ├── نعم ──> اختر [ Modular Monolith ] ووفر وقتك ومواردك لبناء المنتج.\n   └── لا\n        └── هل توجد أجزاء في النظام تحتاج موارد حاسوبية فائقة ومتفاوتة جداً؟\n             ├── نعم ──> افصل تلك الأجزاء فقط كخدمات مستقلة (Hybrid Architecture).\n             └── لا  ──> ابقَ مع [ Modular Monolith ] وحسّن الكفاءة الداخلية.\n```\n\n---\n\n## 4. معضلات الخدمات المصغرة التي يجب الاستعداد لها\n\nإذا قررت الانتقال إلى الخدمات المصغرة، فستحتاج إلى حل المشكلات التالية عبر أنماط معمارية متخصصة:\n\n1. **المعاملات الموزعة (Distributed Transactions):** لا يمكنك استخدام `BEGIN TRANSACTION` عبر خدمتين مختلفتين؛ ستحتاج لتطبيق **نمط Saga** للتعامل مع التراجع في حال الفشل.\n2. **اتساق البيانات:** استخدام نمط **Transactional Outbox** لضمان إرسال الرسائل إلى Message Broker دون فقدان.\n3. **المراقبة والتتبع (Distributed Tracing):** استخدام أدوات مثل OpenTelemetry و Jaeger لمعرفة مسار الطلب عبر عشرات الخدمات عند حدوث خطأ أو بطء.\n\n---\n\n## 5. الأسئلة الشائعة (FAQ)\n\n### س: هل بناء Monolith يعني أن الكود سيكون سيئاً وفوضوياً؟\n**ج:** إطلاقاً! الفوضى ناتجة عن غياب الانضباط الهندسي. يمكنك بناء Modular Monolith غاية في النظافة والانضباط يتيح لك الفصل المستقبلي لأي خدمة بسلاسة بالغة متى ما تطلبت الحاجة ذلك.\n\n### س: متى تكون الخدمات المصغرة ضرورة لا مفر منها؟\n**ج:** عندما تكبر المؤسسة إلى مئات المطورين المقسمين إلى فرق مستقلة وظيفياً، أو عندما تتطلب بعض الأجزاء معايير أمان خاصة (مثل خدمات الدفع PCI-DSS) أو تقنيات تشغيلية مختلفة كلياً.\n\n> **الخلاصة:** المعمارية الأفضل ليست الأكثر تعقيداً ولا الأكثر حداثة، بل هي التي تحل مشاكل العمل الحالية بأقل قدر ممكن من التعقيد والتكلفة الإضافية.\n"
}
};
