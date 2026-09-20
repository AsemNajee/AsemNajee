/**
 * Asem Abdullah Najee - I18N Fallback Data
 * Bundled fallback to ensure the site works 100% offline or when opened via file:// protocol
 */
window.I18N_DATA = {
  "config": {
    "defaultLanguage": "ar",
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
    }
  },
  "languages": {
    "ar": {
      "meta": {
        "title": "عاصم عبدالله ناجي | معرض الأعمال والملف الشخصي",
        "description": "عاصم عبدالله ناجي - طالب هندسة برمجيات ومطور برمجيات متكامل"
      },
      "nav": {
        "brand": "عاصم",
        "skills": "المهارات",
        "projects": "المشاريع",
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
            "items": ["Java", "Spring Boot", "PHP", "Laravel", "Express.js"]
          },
          {
            "id": "frontend",
            "title": "الواجهات الأمامية والموبايل",
            "icon": "smartphone",
            "items": ["React.js", "Next.js", "TypeScript", "Flutter", "Dart"]
          },
          {
            "id": "databases",
            "title": "قواعد البيانات",
            "icon": "database",
            "items": ["MySQL", "MongoDB", "SQLite", "Supabase", "Redis", "Firebase"]
          },
          {
            "id": "design",
            "title": "التصميم وتجربة المستخدم",
            "icon": "palette",
            "items": ["Tailwind CSS", "Figma"]
          },
          {
            "id": "tools",
            "title": "الأدوات والـ DevOps",
            "icon": "terminal",
            "items": ["Git", "GitHub", "Docker", "Jira", "Postman", "Linux"]
          },
          {
            "id": "documentation",
            "title": "التوثيق والكتابة التقنية",
            "icon": "file-text",
            "items": ["Markdown", "الكتابة التقنية"]
          }
        ]
      },
      "projects": {
        "title": "المشاريع المميزة",
        "description": "استعراض لأبرز المشاريع التي قمت بتطويرها في مجالات الويب، تطبيقات الموبايل والأنظمة الخلفية.",
        "viewGithub": "عرض على GitHub",
        "items": [
          {
            "id": "student-api",
            "title": "Student Management API",
            "description": "واجهة برمجة تطبيقات REST شاملة لإدارة الطلاب والمواد والمعلمين. مبنية باستخدام Spring Boot وفق معمارية MVC مع دعم كامل لعمليات CRUD والتحقق من صحة البيانات.",
            "tags": ["Java", "Spring Boot", "MySQL", "MVC"],
            "github": "https://github.com/Asemnajee/student-management-api",
            "icon": "code",
            "image": ""
          },
          {
            "id": "flutter-shop",
            "title": "تطبيق متجر إلكتروني (Flutter)",
            "description": "تطبيق متجر إلكتروني متكامل للهواتف الذكية مع ميزات تصفح المنتجات، إدارة السلة والمفضلة، وحسابات المستخدمين وفق أحدث معايير فلاتر.",
            "tags": ["Dart", "Flutter", "إدارة الحالة", "تجارة إلكترونية"],
            "github": "https://github.com/Asemnajee/flutter-shopping-application",
            "icon": "smartphone",
            "image": ""
          },
          {
            "id": "javabase-orm",
            "title": "مكتبة JavaBase ORM",
            "description": "مكتبة ORM مخصصة لتطبيقات جافا تسهل التعامل مع قواعد بيانات MySQL و SQLite، مستوحاة من Eloquent في Laravel وتدعم التهجير (Migrations) وإدارة النماذج.",
            "tags": ["Java", "ORM", "MySQL", "SQLite", "قواعد بيانات"],
            "github": "https://github.com/AsemNajee/JavaBase",
            "icon": "database",
            "image": ""
          },
          {
            "id": "ftm-website",
            "title": "موقع معهد تقنيات المستقبل (FTM)",
            "description": "موقع تعريفي حديث لمعهد تقنيات المستقبل مبني باستخدام Next.js و React لعرض برامج المعهد وتسهيل التواصل بتصميم متجاوب بالكامل.",
            "tags": ["JavaScript", "Next.js", "React", "تصميم متجاوب"],
            "github": "https://github.com/AsemNajee/FTM",
            "icon": "terminal",
            "image": ""
          }
        ]
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
        "skills": "Skills",
        "projects": "Projects",
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
            "items": ["Java", "Spring Boot", "PHP", "Laravel", "Express.js"]
          },
          {
            "id": "frontend",
            "title": "Frontend & Mobile",
            "icon": "smartphone",
            "items": ["React.js", "Next.js", "TypeScript", "Flutter", "Dart"]
          },
          {
            "id": "databases",
            "title": "Databases",
            "icon": "database",
            "items": ["MySQL", "MongoDB", "SQLite", "Supabase", "Redis", "Firebase"]
          },
          {
            "id": "design",
            "title": "Design & Styling",
            "icon": "palette",
            "items": ["Tailwind CSS", "Figma"]
          },
          {
            "id": "tools",
            "title": "Tools & DevOps",
            "icon": "terminal",
            "items": ["Git", "GitHub", "Docker", "Jira", "Postman", "Linux"]
          },
          {
            "id": "documentation",
            "title": "Documentation",
            "icon": "file-text",
            "items": ["Markdown", "Technical Writing"]
          }
        ]
      },
      "projects": {
        "title": "Featured Projects",
        "description": "Showcasing my best work across web development, mobile apps, and backend systems.",
        "viewGithub": "View on GitHub",
        "items": [
          {
            "id": "student-api",
            "title": "Student Management API",
            "description": "Comprehensive REST API for managing students, subjects, and teachers. Built with Spring Boot following MVC architecture, featuring CRUD operations and validation annotations.",
            "tags": ["Java", "Spring Boot", "MySQL", "MVC"],
            "github": "https://github.com/Asemnajee/student-management-api",
            "icon": "code",
            "image": ""
          },
          {
            "id": "flutter-shop",
            "title": "Flutter Shopping Application",
            "description": "Full-featured e-commerce mobile application with product browsing, cart management, favorites, and user profiles. Demonstrates modern Flutter development practices.",
            "tags": ["Dart", "Flutter", "State Management", "E-commerce"],
            "github": "https://github.com/Asemnajee/flutter-shopping-application",
            "icon": "smartphone",
            "image": ""
          },
          {
            "id": "javabase-orm",
            "title": "JavaBase ORM Library",
            "description": "Custom ORM library for Java applications that simplifies database interactions with MySQL and SQLite. Inspired by Laravel's Eloquent, featuring migrations and model management.",
            "tags": ["Java", "ORM", "MySQL", "SQLite", "Database"],
            "github": "https://github.com/AsemNajee/JavaBase",
            "icon": "database",
            "image": ""
          },
          {
            "id": "ftm-website",
            "title": "FTM Institute Website",
            "description": "Modern website for Future Technologies Institute built with Next.js. Showcases institute programs and provides contact information with responsive design.",
            "tags": ["JavaScript", "Next.js", "React", "Responsive Design"],
            "github": "https://github.com/AsemNajee/FTM",
            "icon": "terminal",
            "image": ""
          }
        ]
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

