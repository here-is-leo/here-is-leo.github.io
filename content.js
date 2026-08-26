const SITE = {
  fa: {
    dir: "rtl", lang: "fa",
    meta: {
      titleHome: "ایلیا فراهانی | برنامه‌نویس Python و علاقه‌مند به امنیت وب",
      descHome: "صفحه شخصی ایلیا فراهانی؛ برنامه‌نویس Python، علاقه‌مند به امنیت وب و لینوکس. مشاهده پروژه‌ها، مهارت‌ها و راه‌های ارتباطی.",
      titleAbout: "درباره ایلیا فراهانی",
      descAbout: "بیوگرافی، تحصیلات، دوره‌ها و مهارت‌های ایلیا فراهانی."
    },
    nav: { home: "خانه", skills: "مهارت‌ها", projects: "پروژه‌ها", contact: "تماس", about: "درباره من", blog: "نوشته‌ها" },
    hero: {
      eyebrow: "در دسترس برای یادگیری و همکاری",
      title1: "سلام، من",
      name: "ایلیا فراهانی",
      title2: "هستم",
      typewriter: ["برنامه‌نویس Python", "علاقه‌مند به امنیت وب", "عاشق لینوکس", "یادگیرنده پروژه‌محور"],
      subtitle: "برنامه‌نویسی راه فرار از محدودیت‌هاست. من با Python، لینوکس و چالش‌های امنیتی دنیای خودم رو می‌سازم. هر خط کد، یک قدم به جلو.",
      cta1: "مشاهده پروژه‌ها",
      cta2: "درباره من"
    },
    stats: [
      { number: 35, suffix: "+", label: "چالش امنیتی حل شده" },
      { number: 87, suffix: "", label: "مشارکت (commit) در یک سال" },
      { number: 4, suffix: "", label: "پروژه عملی ساخته شده" },
      { number: 2, suffix: "", label: "زبان برنامه‌نویسی" }
    ],
    skills: {
      tag: "مهارت‌ها",
      title: "چیزهایی که باهاش کار می‌کنم",
      subtitle: "ترکیبی از برنامه‌نویسی، سیستم‌عامل و امنیت که در پروژه‌های واقعی به کار می‌برم.",
      items: [
        { icon: "🐍", title: "Python", desc: "تسلط کامل به Python برای اسکریپت‌نویسی، ابزارسازی، بک‌اند و پروژه‌های امنیتی." },
        { icon: "🖥️", title: "لینوکس", desc: "تسلط کامل بر اکثر توزیع‌های لینوکس، کار حرفه‌ای با ترمینال و ابزارهای Kali." },
        { icon: "🛡️", title: "امنیت وب", desc: "تحلیل آسیب‌پذیری‌ها، تکمیل کامل ۳۵ مرحله چالش Natas، آشنایی با PWK." },
        { icon: "🗄️", title: "پایگاه داده", desc: "طراحی و مدیریت داده با SQL Server و SQLite." },
        { icon: "#️⃣", title: "C# (MVC)", desc: "توسعه وب با معماری MVC در C#." },
        { icon: "🌐", title: "وردپرس", desc: "ساخت، شخصی‌سازی و مدیریت وب‌سایت با WordPress." }
      ]
    },
    focus: {
      tag: "الان مشغولم به",
      title: "روی چه چیزی کار می‌کنم؟",
      subtitle: "هر روز یک قدم به جلو، یک خط کد بیشتر.",
      items: [
        { icon: "📘", title: "یادگیری عمیق امنیت وب", desc: "در حال مطالعه آسیب‌پذیری‌های پیشرفته و شرکت در چالش‌های CTF." },
        { icon: "🔧", title: "ساخت ابزارهای امنیتی", desc: "توسعه ابزارهای خط فرمان با Python برای تست نفوذ و اسکن شبکه." },
        { icon: "🌱", title: "مشارکت در متن‌باز", desc: "کمک به پروژه‌های امنیتی متن‌باز و ساخت Social Proof." },
        { icon: "🎯", title: "جستجوی کارآموزی", desc: "به دنبال فرصت‌های کارآموزی در حوزه امنیت سایبری و برنامه‌نویسی." }
      ]
    },
    projects: {
      tag: "پروژه‌ها",
      title: "نمونه‌کارها",
      subtitle: "پروژه‌هایی که با عشق و یادگیری خودآموز ساخته‌ام.",
      items: [
        {
          title: "overthewire-natas",
          date: "۱۴۰۵",
          desc: "راهنمای دوزبانه (فارسی/انگلیسی) آموزش امنیت وب از طریق ۳۵ مرحله چالش Natas — یکی از معروف‌ترین سری چالش‌های امنیتی OverTheWire.",
          bullets: [
            "تحلیل مرحله‌به‌مرحله هر چالش با توضیح دقیق آسیب‌پذیری (SQL Injection، Command Injection، Path Traversal، XSS و...)",
            "ارائه کد اکسپلویت عملی و راهکارهای مقابله برای هر نوع حمله",
            "طراحی رابط کاربری نئونی با شبیه‌ساز ترمینال و Progress Tracker"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Web Security"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "V-Tunnel",
          date: "مرداد ۱۴۰۵",
          desc: "Telegram Mini App برای مدیریت اتصالات امن و پروکسی — یک ابزار کاربردی برای ارتباطات امن.",
          bullets: [
            "مدیریت DNS عمومی (Google DNS، Cloudflare) و MTProto Proxies",
            "مدیریت کانفیگ‌های V2Ray برای ارتباطات امن",
            "طراحی با سبک Glassmorphism، تم تیره و پشتیبانی دوزبانه"
          ],
          tech: ["Python", "HTML/CSS/JS", "Telegram API"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "kali-linux-complete-guide",
          date: "مرداد ۱۴۰۵",
          desc: "راهنمای جامع (بیش از ۴۰ صفحه) ابزارهای Kali Linux — یک دانشنامه فشرده برای تست‌نفوذگران.",
          bullets: [
            "پوشش ابزارهای کلیدی: Nmap، Metasploit، Wireshark، John the Ripper",
            "فهرست مطالب تعاملی و پشتیبانی از حالت روشن/تاریک",
            "محتوای دوزبانه فارسی/انگلیسی"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Kali Linux"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "Bale-Bot",
          date: "مرداد ۱۴۰۵",
          desc: "ربات پیام‌رسان هوشمند برای پلتفرم بله — در حال توسعه با قابلیت‌های جدید.",
          bullets: ["پیاده‌سازی نسخه ابتدایی ربات با قابلیت پاسخگویی خودکار", "توسعه و اضافه کردن ماژول‌های جدید در حال انجام"],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo"
        }
      ]
    },
    donation: {
      badge: "🎉 حمایت از تولید محتوا",
      title1: "اگر از محتوای من",
      title2: "لذت می‌برید",
      sub: "با <strong>یک قهوه ☕</strong> از من حمایت کنید تا بتوانم محتوای باکیفیت‌تری تولید کنم.",
      btnText: "برای من قهوه بخر",
      msg: "🎊 هر قهوه = یک جشن تازه"
    },
    aboutPreview: {
      title: "بیشتر درباره من بدانید",
      desc: "تحصیلات، دوره‌ها، گواهی‌نامه‌ها، مهارت‌ها و مسیر یادگیری من رو در صفحه درباره من ببینید.",
      cta: "درباره من"
    },
    contact: {
      tag: "تماس",
      title: "بیایید در ارتباط باشیم",
      subtitle: "برای همکاری، فرصت‌های یادگیری، کارآموزی یا هر سوالی خوشحال می‌شوم باهام در تماس باشید.",
      items: [
        { icon: "✉️", label: "ایمیل", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "📱", label: "تماس", value: "۰۹۰۳۰۸۳۹۷۹۰", href: "tel:+989030839790" },
        { icon: "📍", label: "موقعیت", value: "تهران، ایران", href: null },
        { icon: "🐙", label: "گیت‌هاب", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    footer: "© " + new Date().getFullYear() + " ایلیا فراهانی. ساخته شده با ☕ و عشق به کد",
    about: {
      heroTitle: "درباره من",
      heroSubtitle: "دانش‌آموز و علاقه‌مند به برنامه‌نویسی Python، توسعه با لینوکس و امنیت وب.",
      introTag: "بیوگرافی",
      intro: "دانش‌آموز و علاقه‌مند به برنامه‌نویسی Python، توسعه با لینوکس و امنیت وب. با گذراندن کامل چالش‌های امنیتی Natas (سری OverTheWire) و ساخت چند پروژه عملی روی گیت‌هاب، دانش فنی خود را به‌صورت خودآموز و پروژه‌محور تقویت کرده‌ام. به‌دنبال فرصت‌های یادگیری، همکاری در پروژه‌های متن‌باز و کارآموزی برای رشد در مسیر برنامه‌نویسی و امنیت سایبری هستم.",
      eduTag: "تحصیلات و دوره‌ها",
      eduTitle: "مسیر یادگیری",
      timeline: [
        { title: "دانش‌آموز", sub: "تهران", desc: "در حال تحصیل، همراه با یادگیری خودآموز و پروژه‌محور در حوزه برنامه‌نویسی و امنیت." },
        { title: "دوره فناوری‌های پیشرفته", sub: "آکادمی دانشگاه شریف و تکنو شریف", desc: "دوره تخصصی فناوری‌های پیشرفته و تکنولوژی‌های نوین." },
        { title: "دوره PWK", sub: "Kali Linux — تست نفوذ", desc: "آشنایی عملی با تست نفوذ، ابزارهای Kali Linux و متدولوژی‌های امنیتی." },
        { title: "دوره امنیت شبکه", sub: "Network+", desc: "مبانی امنیت شبکه، پروتکل‌های ارتباطی و مفاهیم زیرساخت شبکه." }
      ],
      skillsTag: "مهارت‌ها",
      skillsTitle: "خلاصه مهارت‌ها",
      skillsList: ["Python", "لینوکس / Kali Linux", "SQL Server", "SQLite", "C# (MVC)", "وردپرس", "تحلیل آسیب‌پذیری", "تست نفوذ (PWK)", "گیت/GitHub", "HTML/CSS/JS"],
      langTag: "زبان‌ها",
      langTitle: "زبان‌های مسلط",
      langList: ["فارسی — زبان مادری", "انگلیسی — B2+"],
      githubTag: "فعالیت گیت‌هاب",
      githubText: "۸۷ مشارکت (commit) در یک سال اخیر، با تمرکز فعالیت در مرداد ۱۴۰۵. بیشترین فعالیت روی پروژه‌های امنیتی و آموزشی.",
      githubLinkText: "github.com/here-is-leo"
    }
  },
  en: {
    dir: "ltr", lang: "en",
    meta: {
      titleHome: "Ilia Farahani | Python Developer & Web Security Enthusiast",
      descHome: "Personal site of Ilia Farahani; Python developer, Linux user and web security enthusiast. Explore projects, skills and contact info.",
      titleAbout: "About Ilia Farahani",
      descAbout: "Biography, education, courses and skills of Ilia Farahani."
    },
    nav: { home: "Home", skills: "Skills", projects: "Projects", contact: "Contact", about: "About", blog: "Blog" },
    hero: {
      eyebrow: "Open to learning & collaboration",
      title1: "Hi, I'm",
      name: "Ilia Farahani",
      title2: "👋",
      typewriter: ["Python Developer", "Web Security Enthusiast", "Linux Lover", "Project-Driven Learner"],
      subtitle: "Coding is my escape from limits. I build my world with Python, Linux, and security challenges. Every line of code is a step forward.",
      cta1: "View Projects",
      cta2: "About Me"
    },
    stats: [
      { number: 35, suffix: "+", label: "Security Challenges Solved" },
      { number: 87, suffix: "", label: "Commits in the Past Year" },
      { number: 4, suffix: "", label: "Hands-on Projects Built" },
      { number: 2, suffix: "", label: "Programming Languages" }
    ],
    skills: {
      tag: "Skills",
      title: "What I work with",
      subtitle: "A mix of programming, systems, and security that I apply in real projects.",
      items: [
        { icon: "🐍", title: "Python", desc: "Strong command of Python for scripting, tooling, backend, and security projects." },
        { icon: "🖥️", title: "Linux", desc: "Comfortable across most Linux distributions, terminal-fu, and Kali Linux tools." },
        { icon: "🛡️", title: "Web Security", desc: "Vulnerability analysis; fully completed 35 levels of Natas challenges; familiar with PWK." },
        { icon: "🗄️", title: "Databases", desc: "Working with SQL Server and SQLite for data design and management." },
        { icon: "#️⃣", title: "C# (MVC)", desc: "MVC-based web development in C#." },
        { icon: "🌐", title: "WordPress", desc: "Building, customizing, and managing websites with WordPress." }
      ]
    },
    focus: {
      tag: "Currently focused on",
      title: "What I'm working on",
      subtitle: "One step forward, one more line of code, every single day.",
      items: [
        { icon: "📘", title: "Deep Web Security Learning", desc: "Studying advanced vulnerabilities and participating in CTF challenges." },
        { icon: "🔧", title: "Building Security Tools", desc: "Developing Python CLI tools for penetration testing and network scanning." },
        { icon: "🌱", title: "Open Source Contributions", desc: "Contributing to security-related open-source projects and building Social Proof." },
        { icon: "🎯", title: "Seeking an Internship", desc: "Looking for internship opportunities in cybersecurity and programming." }
      ]
    },
    projects: {
      tag: "Projects",
      title: "Portfolio",
      subtitle: "Projects I built with passion and self-driven learning.",
      items: [
        {
          title: "overthewire-natas",
          date: "2026",
          desc: "A bilingual (Persian/English) guide teaching web security through the 35 levels of the Natas challenge — one of the most famous OverTheWire security series.",
          bullets: [
            "Step-by-step analysis of each level with detailed vulnerability explanations (SQL Injection, Command Injection, Path Traversal, XSS, etc.)",
            "Practical exploit code and mitigation strategies for every attack type",
            "Neon-styled UI with terminal simulator and built-in Progress Tracker"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Web Security"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "V-Tunnel",
          date: "Aug 2026",
          desc: "A Telegram Mini App for managing secure connections and proxies — a practical tool for secure communications.",
          bullets: [
            "Manage public DNS servers (Google DNS, Cloudflare) and MTProto proxies",
            "Manage V2Ray configs for secure communication",
            "Glassmorphism dark-themed UI with bilingual support"
          ],
          tech: ["Python", "HTML/CSS/JS", "Telegram API"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "kali-linux-complete-guide",
          date: "Aug 2026",
          desc: "A comprehensive guide (40+ pages) covering Kali Linux tools — a compact encyclopedia for penetration testers.",
          bullets: [
            "Covers key tools: Nmap, Metasploit, Wireshark, John the Ripper",
            "Interactive table of contents and light/dark mode support",
            "Bilingual Persian/English content"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Kali Linux"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "Bale-Bot",
          date: "Aug 2026",
          desc: "An intelligent messaging bot for the Bale platform — in active development with new features.",
          bullets: ["Initial bot version with auto-reply capability implemented", "Adding new modules and features in progress"],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo"
        }
      ]
    },
    donation: {
      badge: "🎉 Support Content Creation",
      title1: "If you enjoy",
      title2: "my content",
      sub: "Support me with <strong>a coffee ☕</strong> so I can keep producing high-quality content.",
      btnText: "Buy me a coffee",
      msg: "🎊 Every coffee = a new celebration"
    },
    aboutPreview: {
      title: "Learn more about me",
      desc: "See my education, courses, certifications, skills, and learning path on the About page.",
      cta: "About Me"
    },
    contact: {
      tag: "Contact",
      title: "Let's get in touch",
      subtitle: "Happy to connect for collaboration, learning opportunities, internships, or just a friendly chat.",
      items: [
        { icon: "✉️", label: "Email", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "📱", label: "Phone", value: "+98 903 083 9790", href: "tel:+989030839790" },
        { icon: "📍", label: "Location", value: "Tehran, Iran", href: null },
        { icon: "🐙", label: "GitHub", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    footer: "© " + new Date().getFullYear() + " Ilia Farahani. Made with ☕ and love for code",
    about: {
      heroTitle: "About Me",
      heroSubtitle: "A student interested in Python programming, Linux, and web security.",
      introTag: "Biography",
      intro: "I'm a student interested in Python programming, Linux, and web security. Having fully completed the Natas security challenges (OverTheWire series) and built several hands-on projects on GitHub, I've strengthened my technical knowledge through self-study and project-based learning. I'm looking for learning opportunities, open-source collaboration, and internships to grow in programming and cybersecurity.",
      eduTag: "Education & Courses",
      eduTitle: "Learning Path",
      timeline: [
        { title: "Student", sub: "Tehran", desc: "Currently studying, alongside self-driven, project-based learning in programming and security." },
        { title: "Advanced Technologies Course", sub: "Sharif University Academy & Techno Sharif", desc: "Specialized course on advanced technologies and emerging tech." },
        { title: "PWK Course", sub: "Kali Linux — Penetration Testing", desc: "Hands-on introduction to penetration testing, Kali Linux tools, and security methodologies." },
        { title: "Network Security Course", sub: "Network+", desc: "Fundamentals of network security, communication protocols, and network infrastructure concepts." }
      ],
      skillsTag: "Skills",
      skillsTitle: "Skills Summary",
      skillsList: ["Python", "Linux / Kali Linux", "SQL Server", "SQLite", "C# (MVC)", "WordPress", "Vulnerability Analysis", "Penetration Testing (PWK)", "Git/GitHub", "HTML/CSS/JS"],
      langTag: "Languages",
      langTitle: "Languages",
      langList: ["Persian — Native", "English — B2+"],
      githubTag: "GitHub Activity",
      githubText: "87 commits in the past year, with focused activity in August 2026. Most active on security and educational projects.",
      githubLinkText: "github.com/here-is-leo"
    }
  }
};
