const SITE = {
  fa: {
    dir: "rtl", lang: "fa",
    meta: {
      titleHome: "ایلیا فراهانی | برنامه‌نویس Python و C# | متخصص لینوکس و امنیت وب",
      descHome: "صفحه شخصی ایلیا فراهانی؛ برنامه‌نویس Python و C#، متخصص لینوکس و تست نفوذ با Kali. مشاهده پروژه‌ها، مهارت‌ها و راه‌های ارتباطی.",
      titleAbout: "درباره ایلیا فراهانی",
      descAbout: "بیوگرافی، تحصیلات، دوره‌ها و مهارت‌های ایلیا فراهانی — برنامه‌نویس Python و C#، متخصص لینوکس و Kali Linux."
    },
    nav: { home: "خانه", skills: "مهارت‌ها", projects: "پروژه‌ها", contact: "تماس", about: "درباره من", blog: "نوشته‌ها" },
    hero: {
      eyebrow: "در دسترس برای یادگیری و همکاری",
      title1: "سلام، من",
      name: "ایلیا فراهانی",
      title2: "هستم",
      typewriter: ["برنامه‌نویس Python", "متخصص لینوکس", "تست‌نفوذگر Kali Linux"],
      subtitle: "برنامه‌نویسی و امنیت، دو روی یک سکه. با Python، C#، لینوکس و Kali، راه‌حل‌هایی می‌سازم که هم کارآمدند و هم امن.",
      cta1: "مشاهده پروژه‌ها",
      cta2: "درباره من"
    },
    stats: [
      { number: 35, suffix: "+", label: "چالش امنیتی حل شده" },
      { number: 87, suffix: "", label: "مشارکت در یک سال" },
      { number: 4, suffix: "", label: "پروژه عملی" },
      { number: 3, suffix: "", label: "زبان برنامه‌نویسی" }
    ],
    skills: {
      tag: "مهارت‌ها",
      title: "چیزهایی که باهاش کار می‌کنم",
      subtitle: "ترکیبی از برنامه‌نویسی، سیستم‌عامل و امنیت.",
      items: [
        { icon: "🐍", title: "Python", desc: "اسکریپت‌نویسی، ابزارسازی، بک‌اند و پروژه‌های امنیتی." },
        { icon: "#️⃣", title: "C# (MVC)", desc: "توسعه وب با معماری MVC، Entity Framework و RESTful API." },
        { icon: "🐧", title: "لینوکس", desc: "مدیریت سرور، bash scripting، شبکه‌سازی و امنیت." },
        { icon: "🛡️", title: "Kali Linux", desc: "تست نفوذ با Nmap، Metasploit، Burp Suite و Wireshark." },
        { icon: "🗄️", title: "پایگاه داده", desc: "طراحی و مدیریت داده با SQL Server و SQLite." },
        { icon: "🌐", title: "امنیت وب", desc: "تحلیل آسیب‌پذیری، چالش‌های Natas و آشنایی با PWK." }
      ]
    },
    focus: {
      tag: "الان مشغولم به",
      title: "روی چه چیزی کار می‌کنم؟",
      subtitle: "هر روز یک قدم به جلو.",
      items: [
        { icon: "📘", title: "امنیت وب پیشرفته", desc: "مطالعه آسیب‌پذیری‌های جدید و شرکت در چالش‌های CTF." },
        { icon: "🔧", title: "ابزارهای امنیتی", desc: "توسعه ابزارهای خط فرمان با Python." },
        { icon: "🌱", title: "متن‌باز", desc: "مشارکت در پروژه‌های امنیتی." },
        { icon: "🎯", title: "کارآموزی", desc: "به دنبال فرصت‌های یادگیری و همکاری." }
      ]
    },
    projects: {
      tag: "پروژه‌ها",
      title: "نمونه‌کارها",
      subtitle: "پروژه‌هایی که با یادگیری خودآموز ساخته‌ام.",
      items: [
        {
          title: "overthewire-natas",
          date: "۱۴۰۵",
          desc: "راهنمای دوزبانه آموزش امنیت وب از طریق ۳۵ مرحله چالش Natas.",
          bullets: [
            "تحلیل مرحله‌به‌مرحله هر چالش با توضیح آسیب‌پذیری",
            "ارائه کد اکسپلویت و راهکارهای مقابله",
            "رابط کاربری نئونی با شبیه‌ساز ترمینال"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Web Security"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "V-Tunnel",
          date: "مرداد ۱۴۰۵",
          desc: "Telegram Mini App برای مدیریت اتصالات امن و پروکسی.",
          bullets: [
            "مدیریت DNS عمومی و MTProto Proxies",
            "مدیریت کانفیگ‌های V2Ray",
            "طراحی با سبک Glassmorphism و تم تیره"
          ],
          tech: ["Python", "HTML/CSS/JS", "Telegram API"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "kali-linux-complete-guide",
          date: "مرداد ۱۴۰۵",
          desc: "راهنمای جامع ابزارهای Kali Linux برای تست‌نفوذگران.",
          bullets: [
            "پوشش ابزارهای کلیدی: Nmap، Metasploit، Wireshark",
            "فهرست مطالب تعاملی و حالت روشن/تاریک",
            "محتوای دوزبانه فارسی/انگلیسی"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Kali Linux"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "Bale-Bot",
          date: "مرداد ۱۴۰۵",
          desc: "ربات پیام‌رسان هوشمند برای پلتفرم بله.",
          bullets: ["نسخه ابتدایی با قابلیت پاسخگویی خودکار", "در حال توسعه با ماژول‌های جدید"],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo"
        }
      ]
    },
    donation: {
      badge: "🎉 حمایت",
      title1: "اگر از محتوای من",
      title2: "لذت می‌برید",
      sub: "با <strong>یک قهوه ☕</strong> از من حمایت کنید.",
      btnText: "قهوه بخر",
      msg: "🎊 ممنون از حمایت شما"
    },
    aboutPreview: {
      title: "درباره من",
      desc: "تحصیلات، دوره‌ها، مهارت‌ها و مسیر یادگیری من را ببینید.",
      cta: "مشاهده"
    },
    contact: {
      tag: "تماس",
      title: "در ارتباط باشیم",
      subtitle: "برای همکاری، یادگیری یا هر سوالی خوشحال می‌شوم پاسخگو باشم.",
      items: [
        { icon: "✉️", label: "ایمیل", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "📱", label: "تماس", value: "۰۹۰۳۰۸۳۹۷۹۰", href: "tel:+989030839790" },
        { icon: "📍", label: "موقعیت", value: "تهران، ایران", href: null },
        { icon: "🐙", label: "گیت‌هاب", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    footer: "© " + new Date().getFullYear() + " ایلیا فراهانی",
    about: {
      heroTitle: "درباره من",
      heroSubtitle: "برنامه‌نویس Python و C# | متخصص لینوکس و Kali Linux",
      
      introTag: "بیوگرافی",
      intro: "من ایلیا فراهانی هستم. از همان روزهای اول، لینوکس برایم فراتر از یک سیستم‌عامل بود. با گذراندن ۳۵ مرحله چالش Natas، به امنیت وب علاقه‌مند شدم.\n\nامروز با Python و C# ابزار می‌سازم، با لینوکس و Kali امنیت را آزمایش می‌کنم و هر روز چیزی جدید یاد می‌گیرم.",
      
      eduTag: "تحصیلات و دوره‌ها",
      eduTitle: "مسیر یادگیری",
      timeline: [
        { 
          title: "تسلط بر لینوکس", 
          sub: "مدیریت سرور و ابزارهای حرفه‌ای", 
          desc: "کار با توزیع‌های مختلف لینوکس، bash scripting، شبکه‌سازی و امنیت." 
        },
        { 
          title: "تست نفوذ با Kali Linux", 
          sub: "ابزارهای حرفه‌ای امنیت", 
          desc: "کار با Nmap، Metasploit، Wireshark، John the Ripper و Burp Suite." 
        },
        { 
          title: "برنامه‌نویسی C# (MVC)", 
          sub: "توسعه وب با معماری مدرن", 
          desc: "طراحی وب‌اپلیکیشن با C#، Entity Framework و RESTful API." 
        },
        { 
          title: "دوره‌های تخصصی", 
          sub: "آکادمی شریف و PWK", 
          desc: "دوره فناوری‌های پیشرفته، PWK و Network+." 
        }
      ],
      
      skillsTag: "مهارت‌ها",
      skillsTitle: "خلاصه مهارت‌ها",
      skillsList: [
        "Python — ابزارسازی و بک‌اند",
        "C# (MVC) — توسعه وب",
        "لینوکس — مدیریت و شبکه",
        "Kali Linux — تست نفوذ",
        "SQL Server / SQLite",
        "امنیت وب — Natas و PWK"
      ],
      
      langTag: "زبان‌ها",
      langTitle: "زبان‌های مسلط",
      langList: [
        "فارسی — زبان مادری",
        "انگلیسی — B2+"
      ],
      
      githubTag: "گیت‌هاب",
      githubText: "۸۷ مشارکت در یک سال اخیر، با تمرکز بر پروژه‌های امنیتی و آموزشی.",
      githubLinkText: "github.com/here-is-leo"
    }
  },
  
  en: {
    dir: "ltr", lang: "en",
    meta: {
      titleHome: "Ilia Farahani | Python & C# Developer | Linux & Security Specialist",
      descHome: "Personal site of Ilia Farahani; Python & C# developer, Linux expert and Kali Linux pentester. Explore projects, skills and contact info.",
      titleAbout: "About Ilia Farahani",
      descAbout: "Biography, education, courses and skills of Ilia Farahani — Python & C# developer, Linux expert and Kali Linux specialist."
    },
    nav: { home: "Home", skills: "Skills", projects: "Projects", contact: "Contact", about: "About", blog: "Blog" },
    hero: {
      eyebrow: "Open to learning & collaboration",
      title1: "Hi, I'm",
      name: "Ilia Farahani",
      title2: "",
      typewriter: ["Python Developer", "Linux Expert", "Kali Linux Pentester"],
      subtitle: "Programming and security, two sides of the same coin. With Python, C#, Linux and Kali, I build solutions that are both efficient and secure.",
      cta1: "View Projects",
      cta2: "About Me"
    },
    stats: [
      { number: 35, suffix: "+", label: "Security Challenges" },
      { number: 87, suffix: "", label: "Commits" },
      { number: 4, suffix: "", label: "Projects" },
      { number: 3, suffix: "", label: "Languages" }
    ],
    skills: {
      tag: "Skills",
      title: "What I work with",
      subtitle: "A mix of programming, systems and security.",
      items: [
        { icon: "🐍", title: "Python", desc: "Scripting, tooling, backend and security projects." },
        { icon: "#️⃣", title: "C# (MVC)", desc: "Web development with MVC, Entity Framework and RESTful API." },
        { icon: "🐧", title: "Linux", desc: "Server administration, bash scripting, networking and security." },
        { icon: "🛡️", title: "Kali Linux", desc: "Pentesting with Nmap, Metasploit, Burp Suite and Wireshark." },
        { icon: "🗄️", title: "Databases", desc: "Design and management with SQL Server and SQLite." },
        { icon: "🌐", title: "Web Security", desc: "Vulnerability analysis, Natas challenges and PWK." }
      ]
    },
    focus: {
      tag: "Currently focused on",
      title: "What I'm working on",
      subtitle: "One step forward every day.",
      items: [
        { icon: "📘", title: "Web Security", desc: "Studying vulnerabilities and CTF challenges." },
        { icon: "🔧", title: "Security Tools", desc: "Building Python CLI tools." },
        { icon: "🌱", title: "Open Source", desc: "Contributing to security projects." },
        { icon: "🎯", title: "Internship", desc: "Looking for learning opportunities." }
      ]
    },
    projects: {
      tag: "Projects",
      title: "Portfolio",
      subtitle: "Projects built through self-driven learning.",
      items: [
        {
          title: "overthewire-natas",
          date: "2026",
          desc: "Bilingual guide for learning web security through 35 Natas challenges.",
          bullets: [
            "Step-by-step analysis with vulnerability explanations",
            "Exploit code and mitigation strategies",
            "Neon-styled UI with terminal simulator"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Web Security"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "V-Tunnel",
          date: "Aug 2026",
          desc: "Telegram Mini App for managing secure connections and proxies.",
          bullets: [
            "DNS and MTProto proxy management",
            "V2Ray configuration management",
            "Glassmorphism dark-themed UI"
          ],
          tech: ["Python", "HTML/CSS/JS", "Telegram API"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "kali-linux-complete-guide",
          date: "Aug 2026",
          desc: "Comprehensive guide to Kali Linux tools for penetration testers.",
          bullets: [
            "Covers Nmap, Metasploit, Wireshark",
            "Interactive TOC and light/dark mode",
            "Bilingual Persian/English content"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Kali Linux"],
          href: "https://github.com/here-is-leo"
        },
        {
          title: "Bale-Bot",
          date: "Aug 2026",
          desc: "Intelligent messaging bot for the Bale platform.",
          bullets: ["Initial version with auto-reply", "Adding new modules in progress"],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo"
        }
      ]
    },
    donation: {
      badge: "🎉 Support",
      title1: "If you enjoy",
      title2: "my content",
      sub: "Support me with <strong>a coffee ☕</strong>.",
      btnText: "Buy coffee",
      msg: "🎊 Thank you for your support"
    },
    aboutPreview: {
      title: "About Me",
      desc: "View my education, courses, skills and learning path.",
      cta: "View"
    },
    contact: {
      tag: "Contact",
      title: "Let's connect",
      subtitle: "Happy to connect for collaboration, learning or any questions.",
      items: [
        { icon: "✉️", label: "Email", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "📱", label: "Phone", value: "+98 903 083 9790", href: "tel:+989030839790" },
        { icon: "📍", label: "Location", value: "Tehran, Iran", href: null },
        { icon: "🐙", label: "GitHub", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    footer: "© " + new Date().getFullYear() + " Ilia Farahani",
    about: {
      heroTitle: "About Me",
      heroSubtitle: "Python & C# Developer | Linux & Kali Linux Expert",
      
      introTag: "Biography",
      intro: "I'm Ilia Farahani. From the early days, Linux was more than an OS to me. After completing 35 Natas challenges, I became passionate about web security.\n\nToday I build tools with Python and C#, test security with Linux and Kali, and learn something new every day.",
      
      eduTag: "Education & Courses",
      eduTitle: "Learning Path",
      timeline: [
        { 
          title: "Linux Mastery", 
          sub: "Server Administration", 
          desc: "Working with Linux distributions, bash scripting, networking and security." 
        },
        { 
          title: "Kali Linux Pentesting", 
          sub: "Security Tools", 
          desc: "Working with Nmap, Metasploit, Wireshark, John the Ripper and Burp Suite." 
        },
        { 
          title: "C# (MVC) Development", 
          sub: "Web Architecture", 
          desc: "Web development with C#, Entity Framework and RESTful API." 
        },
        { 
          title: "Specialized Courses", 
          sub: "Sharif Academy & PWK", 
          desc: "Advanced Technologies, PWK and Network+ courses." 
        }
      ],
      
      skillsTag: "Skills",
      skillsTitle: "Skills Summary",
      skillsList: [
        "Python — Tooling & Backend",
        "C# (MVC) — Web Development",
        "Linux — Administration & Networking",
        "Kali Linux — Penetration Testing",
        "SQL Server / SQLite",
        "Web Security — Natas & PWK"
      ],
      
      langTag: "Languages",
      langTitle: "Languages",
      langList: [
        "Persian — Native",
        "English — B2+"
      ],
      
      githubTag: "GitHub",
      githubText: "87 commits in the past year, focused on security and educational projects.",
      githubLinkText: "github.com/here-is-leo"
    }
  }
};
