const SITE = {
  fa: {
    dir: "rtl", lang: "fa",
    meta: {
      titleHome: "ایلیا فراهانی | برنامه‌نویس Python و C# | متخصص لینوکس و امنیت وب",
      descHome: "صفحه شخصی ایلیا فراهانی؛ برنامه‌نویس Python و C#، متخصص لینوکس و تست نفوذ با Kali. مشاهده پروژه‌ها، مهارت‌ها و راه‌های ارتباطی.",
      titleAbout: "درباره ایلیا فراهانی",
      descAbout: "بیوگرافی، تحصیلات، دوره‌ها و مهارت‌های ایلیا فراهانی — برنامه‌نویس Python و C#، متخصص لینوکس و Kali Linux."
    },
    nav: { 
      home: "خانه", 
      skills: "مهارت‌ها", 
      projects: "پروژه‌ها", 
      contact: "تماس", 
      about: "درباره من", 
      blog: "وبلاگ",
      repos: "ریپوها",
      resume: "رزومه"
    },
    
    hero: {
      eyebrow: "در دسترس برای یادگیری و همکاری",
      title1: "سلام، من",
      name: "ایلیا فراهانی",
      title2: "هستم",
      typewriter: ["برنامه‌نویس Python و C#", "متخصص لینوکس", "تست‌نفوذگر Kali Linux"],
      subtitle: "برنامه‌نویسی و امنیت، دو روی یک سکه. با Python، C#، لینوکس و Kali، راه‌حل‌هایی می‌سازم که هم کارآمدند و هم امن.",
      cta1: "مشاهده پروژه‌ها",
      cta2: "درباره من"
    },

    stats: [
      { number: 35, suffix: "+", label: "چالش امنیتی حل شده" },
      { number: 113, suffix: "", label: "مشارکت در یک سال" },
      { number: 10, suffix: "", label: "پروژه عملی" },
      { number: 5, suffix: "", label: "زبان برنامه‌نویسی" }
    ],
    
    skills: {
      tag: "مهارت‌ها",
      title: "چیزهایی که باهاش کار می‌کنم",
      subtitle: "ترکیبی از برنامه‌نویسی، سیستم‌عامل و امنیت.",
      items: [
        { icon: "python", title: "Python", desc: "تسلط کامل — اسکریپت‌نویسی، ابزارسازی، بک‌اند و پروژه‌های امنیتی.", level: 95 },
        { icon: "csharp", title: "C# (MVC)", desc: "تسلط کامل — توسعه وب با معماری MVC، Entity Framework و RESTful API.", level: 90 },
        { icon: "linux", title: "لینوکس", desc: "تسلط کامل — مدیریت سرور، bash scripting، شبکه‌سازی و امنیت.", level: 95 },
        { icon: "kali", title: "Kali Linux", desc: "تسلط کامل — تست نفوذ با Nmap، Metasploit، Burp Suite و Wireshark.", level: 90 },
        { icon: "html", title: "HTML & CSS", desc: "تسلط کامل — طراحی رابط کاربری، ریسپانسیو و انیمیشن.", level: 90 },
        { icon: "js", title: "JavaScript", desc: "تسلط متوسط — DOM manipulation، رویدادها و کار با API.", level: 65 },
        { icon: "node", title: "Node.js / Next.js", desc: "تسلط متوسط — توسعه بک‌اند با Node.js و اپلیکیشن‌های React با Next.js.", level: 60 },
        { icon: "sql", title: "SQL Server / SQLite", desc: "تسلط کامل — طراحی دیتابیس، مدیریت داده و بهینه‌سازی کوئری.", level: 85 },
        { icon: "wordpress", title: "WordPress", desc: "تسلط کامل — توسعه، شخصی‌سازی و مدیریت وب‌سایت.", level: 80 },
        { icon: "security", title: "امنیت وب", desc: "تسلط کامل — تحلیل آسیب‌پذیری، چالش‌های Natas و آشنایی با PWK.", level: 85 }
      ]
    },
    
    focus: {
      tag: "الان مشغولم به",
      title: "روی چه چیزی کار می‌کنم؟",
      subtitle: "هر روز یک قدم به جلو.",
      items: [
        { icon: "book", title: "امنیت وب پیشرفته", desc: "مطالعه آسیب‌پذیری‌های جدید و شرکت در چالش‌های CTF." },
        { icon: "tools", title: "ابزارهای امنیتی", desc: "توسعه ابزارهای خط فرمان با Python." },
        { icon: "opensource", title: "متن‌باز", desc: "مشارکت در پروژه‌های امنیتی." },
        { icon: "internship", title: "کارآموزی", desc: "به دنبال فرصت‌های یادگیری و همکاری." }
      ]
    },
    
    projects: {
      tag: "پروژه‌ها",
      title: "پروژه‌های شاخص",
      subtitle: "پروژه‌هایی که با یادگیری خودآموز و عشق به کدنویسی ساخته‌ام.",
      items: [
        { icon: "🛒", title: "pos-system", date: "۱۴۰۵", desc: "سیستم جامع فروش و مدیریت انبار (POS) متشکل از ۴ اپلیکیشن جداگانه — بک‌اند API، پنل ادمین، سیستم فروشنده و سیستم انباردار.", tech: ["Node.js", "Express", "Prisma", "SQLite", "React", "Next.js", "TypeScript"], url: "https://github.com/here-is-leo/pos-system" },
        { icon: "🔍", title: "Paris", date: "۱۴۰۵", desc: "اسکنر خودکار و حرفه‌ای آسیب‌پذیری‌های وب، طراحی‌شده برای پژوهشگران امنیتی و تست‌کنندگان نفوذ. پیاده‌سازی بیش از ۱۲ نوع تست آسیب‌پذیری.", tech: ["Python", "FastAPI", "WebSocket"], url: "https://github.com/here-is-leo/Paris" },
        { icon: "🔒", title: "Moscow", date: "۱۴۰۵", desc: "پروژه تحقیقاتی و آموزشی در حوزه امنیت پلاگین‌های وردپرس. بررسی و تحلیل نقاط ضعف امنیتی رایج در پلاگین‌ها.", tech: ["PHP", "WordPress", "Security Research"], url: "https://github.com/here-is-leo/Moscow" },
        { icon: "🕸️", title: "overthewire-natas", date: "۱۴۰۵", desc: "راهنمای کامل و دوزبانه (فارسی/انگلیسی) برای آموزش امنیت وب از طریق ۳۵ مرحله چالش Natas.", tech: ["HTML", "CSS", "JavaScript", "Web Security"], url: "https://github.com/here-is-leo/overthewire-natas" },
        { icon: "🌐", title: "V-Tunnel", date: "مرداد ۱۴۰۵", desc: "Telegram Mini App برای مدیریت ابزارهای شبکه — سرورهای DNS عمومی، پروکسی‌های MTProto و کانفیگ‌های V2Ray.", tech: ["Python", "HTML", "CSS", "JavaScript", "Telegram API"], url: "https://github.com/here-is-leo/V-Tunnel" },
        { icon: "📚", title: "kali-linux-complete-guide", date: "مرداد ۱۴۰۵", desc: "راهنمای آموزشی جامع (بیش از ۴۰ صفحه) ابزارهای Kali Linux — Nmap، Metasploit، Wireshark، John the Ripper.", tech: ["HTML", "CSS", "JavaScript", "Kali Linux"], url: "https://github.com/here-is-leo/kali-linux-complete-guide" },
        { icon: "⚡", title: "N3XUS V7.1", date: "۱۴۰۵", desc: "سامانه کنترل پیشرفته مبتنی بر آردوینو (نسخه V7.1) با رابط کاربری تحت وب. طراحی رابط وب برای پایش و کنترل بلادرنگ سخت‌افزار.", tech: ["Arduino (C/C++)", "HTML"], url: "https://github.com/here-is-leo/N3XUS" },
        { icon: "🔧", title: "Marshall", date: "۱۴۰۵", desc: "سامانه کنترل ماژولار مبتنی بر آردوینو با پیکربندی قابل‌تنظیم. طراحی معماری ماژولار و مستندسازی جامع.", tech: ["Arduino (C/C++)", "HTML"], url: "https://github.com/here-is-leo/Marshall" },
        { icon: "🤖", title: "Bale-Bot", date: "مرداد ۱۴۰۵", desc: "پروژه اولیه ربات پیام‌رسان هوشمند برای پلتفرم بله — در حال توسعه با قابلیت‌های جدید.", tech: ["Python", "Bale API"], url: "https://github.com/here-is-leo/Bale-Bot" },
        { icon: "📦", title: "inventory-bot", date: "۱۴۰۵", desc: "ربات مدیریت موجودی و انبار — یک ابزار کاربردی برای پیگیری و مدیریت کالاها با گزارش‌گیری خودکار.", tech: ["Python"], url: "https://github.com/here-is-leo/inventory-bot" }
      ]
    },

    repos: {
      tag: "مخازن",
      title: "مخازن گیت‌هاب",
      subtitle: "همه پروژه‌های من در گیت‌هاب — از ابزارهای امنیتی تا سیستم‌های کنترل و اتوماسیون.",
      items: [
        { name: "pos-system", desc: "سیستم جامع فروش و مدیریت انبار (POS) با ۴ اپلیکیشن جداگانه — REST API، پنل ادمین، فروشنده و انباردار.", lang: "TypeScript", stars: 0, forks: 0, url: "https://github.com/here-is-leo/pos-system" },
        { name: "Paris", desc: "اسکنر آسیب‌پذیری وب — شناسایی و تحلیل آسیب‌پذیری‌های امنیتی در وب‌سایت‌ها.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Paris" },
        { name: "Moscow", desc: "پلاگین تحقیقاتی امنیت وردپرس — چندین نقطه ورود، Self-Destruct و Deface page.", lang: "PHP", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Moscow" },
        { name: "overthewire-natas", desc: "راهنمای کامل دوزبانه ۳۵ مرحله چالش Natas — تحلیل آسیب‌پذیری و کد اکسپلویت.", lang: "HTML", stars: 0, forks: 0, url: "https://github.com/here-is-leo/overthewire-natas" },
        { name: "V-Tunnel", desc: "Telegram Mini App برای مدیریت DNS عمومی، پروکسی‌های MTProto و کانفیگ‌های V2Ray.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/V-Tunnel" },
        { name: "kali-linux-complete-guide", desc: "راهنمای جامع ۴۰+ صفحه‌ای ابزارهای Kali Linux — Nmap، Metasploit، Wireshark و...", lang: "HTML", stars: 1, forks: 0, url: "https://github.com/here-is-leo/kali-linux-complete-guide" },
        { name: "N3XUS", desc: "سیستم کنترل پیشرفته آردوینو با رابط وب، مانیتورینگ سریال و یکپارچه‌سازی سخت‌افزار.", lang: "HTML", stars: 0, forks: 0, url: "https://github.com/here-is-leo/N3XUS" },
        { name: "Marshall", desc: "سیستم کنترل آردوینو با پیکربندی ماژولار، مستندسازی جامع و رابط کاربری آسان.", lang: "HTML", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Marshall" },
        { name: "Bale-Bot", desc: "ربات پیام‌رسان هوشمند برای پلتفرم بله — در حال توسعه با قابلیت‌های جدید.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Bale-Bot" },
        { name: "inventory-bot", desc: "ربات مدیریت موجودی و انبار — پیگیری و مدیریت کالاها با گزارش‌گیری خودکار.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/inventory-bot" }
      ]
    },

    resume: {
      tag: "رزومه",
      title: "رزومه",
      subtitle: "برنامه‌نویس Python و C# | متخصص لینوکس، امنیت وب و IoT",
      personal: {
        name: "ایلیا فراهانی (ایلیا عزیزآبادی)",
        job: "برنامه‌نویس Python و C#",
        location: "تهران، ایران",
        email: "ilyafarahanii@gmail.com",
        phone: "۰۹۰۳۰۸۳۹۷۹۰",
        github: "github.com/here-is-leo"
      },
      about: "دانش‌آموز و علاقه‌مند به برنامه‌نویسی Python، توسعه با لینوکس و امنیت وب. با گذراندن کامل چالش‌های امنیتی Natas (سری OverTheWire) و ساخت چند پروژه عملی روی گیت‌هاب، دانش فنی خود را به‌صورت خودآموز و پروژه‌محور تقویت کرده‌ام.",
      skills: [
        { name: "Python", level: 95 },
        { name: "C# (MVC)", level: 90 },
        { name: "لینوکس", level: 95 },
        { name: "Kali Linux", level: 90 },
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 65 },
        { name: "Node.js / Next.js", level: 60 },
        { name: "SQL Server / SQLite", level: 85 },
        { name: "WordPress", level: 80 },
        { name: "امنیت وب", level: 85 },
        { name: "Arduino (C/C++)", level: 80 },
        { name: "FastAPI", level: 75 }
      ],
      projects: [
        { icon: "🔍", title: "Paris", desc: "اسکنر آسیب‌پذیری وب با Python + FastAPI + WebSocket" },
        { icon: "🔒", title: "Moscow", desc: "پروژه تحقیقاتی امنیت پلاگین‌های وردپرس (PHP)" },
        { icon: "⚡", title: "N3XUS V7.1", desc: "سیستم کنترل مبتنی بر آردوینو با رابط وب" },
        { icon: "🔧", title: "Marshall", desc: "سیستم کنترل ماژولار آردوینو" },
        { icon: "🕸️", title: "overthewire-natas", desc: "راهنمای ۳۵ مرحله چالش Natas" },
        { icon: "🌐", title: "V-Tunnel", desc: "Telegram Mini App با Python" },
        { icon: "📚", title: "kali-linux-complete-guide", desc: "راهنمای ۴۰+ صفحه‌ای Kali Linux" }
      ],
      education: [
        { title: "دانش‌آموز", sub: "تهران" },
        { title: "دوره فناوری‌های پیشرفته", sub: "آکادمی دانشگاه شریف و تکنو شریف" },
        { title: "دوره PWK", sub: "Kali Linux — تست نفوذ" },
        { title: "دوره امنیت شبکه", sub: "Network+" }
      ],
      languages: [
        { name: "فارسی", level: "زبان مادری" },
        { name: "انگلیسی", level: "B2+" }
      ],
      github: {
        commits: "۲۳ در یک سال اخیر",
        repos: "۱۳ مخزن",
        focus: "مرداد ۱۴۰۵",
        type: "امنیتی، آموزشی، IoT"
      }
    },
    
    donation: {
      badge: "حمایت از من",
      title1: "اگر از محتوای من",
      title2: "خوشتان می‌آید",
      sub: "با <strong>یک قهوه</strong> از من حمایت کنید تا بتوانم محتوای باکیفیت‌تری تولید کنم.",
      btnText: "خرید قهوه برای من",
      msg: "هر قهوه = انرژی برای ساخت محتوای بهتر"
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
        { icon: "email", label: "ایمیل", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "phone", label: "تماس", value: "۰۹۰۳۰۸۳۹۷۹۰", href: "tel:+989030839790" },
        { icon: "location", label: "موقعیت", value: "تهران، ایران", href: null },
        { icon: "github", label: "گیت‌هاب", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
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
        "Python — ابزارسازی و بک‌اند (۹۵٪)",
        "C# (MVC) — توسعه وب (۹۰٪)",
        "لینوکس — مدیریت و شبکه (۹۵٪)",
        "Kali Linux — تست نفوذ (۹۰٪)",
        "HTML & CSS — طراحی رابط کاربری (۹۰٪)",
        "JavaScript — برنامه‌نویسی فرانت‌اند (۶۵٪)",
        "Node.js / Next.js — توسعه بک‌اند (۶۰٪)",
        "SQL Server / SQLite — دیتابیس (۸۵٪)",
        "WordPress — توسعه و مدیریت (۸۰٪)",
        "امنیت وب — تحلیل آسیب‌پذیری (۸۵٪)"
      ],
      
      langTag: "زبان‌ها",
      langTitle: "زبان‌های مسلط",
      langList: [
        "فارسی — زبان مادری",
        "انگلیسی — B2+"
      ],
      
      githubTag: "گیت‌هاب",
      githubText: "۱۱۳ مشارکت در یک سال اخیر، با تمرکز بر پروژه‌های امنیتی و آموزشی.",
      githubLinkText: "github.com/here-is-leo"
    }
  },
  
  // ============================================================
  // ENGLISH VERSION
  // ============================================================
  
  en: {
    dir: "ltr", lang: "en",
    meta: {
      titleHome: "Ilia Farahani | Python & C# Developer | Linux & Security Specialist",
      descHome: "Personal site of Ilia Farahani; Python & C# developer, Linux expert and Kali Linux pentester. Explore projects, skills and contact info.",
      titleAbout: "About Ilia Farahani",
      descAbout: "Biography, education, courses and skills of Ilia Farahani — Python & C# developer, Linux expert and Kali Linux specialist."
    },
    nav: { 
      home: "Home", 
      skills: "Skills", 
      projects: "Projects", 
      contact: "Contact", 
      about: "About", 
      blog: "Blog",
      repos: "Repos",
      resume: "Resume"
    },
    
    hero: {
      eyebrow: "Open to learning & collaboration",
      title1: "Hi, I'm",
      name: "Ilia Farahani",
      title2: "",
      typewriter: ["Python & C# Developer", "Linux Expert", "Kali Linux Pentester"],
      subtitle: "Programming and security, two sides of the same coin. With Python, C#, Linux and Kali, I build solutions that are both efficient and secure.",
      cta1: "View Projects",
      cta2: "About Me"
    },
    
    stats: [
      { number: 35, suffix: "+", label: "Security Challenges" },
      { number: 113, suffix: "", label: "Commits" },
      { number: 10, suffix: "", label: "Projects" },
      { number: 5, suffix: "", label: "Languages" }
    ],
    
    skills: {
      tag: "Skills",
      title: "What I work with",
      subtitle: "A mix of programming, systems and security.",
      items: [
        { icon: "python", title: "Python", desc: "Complete mastery — Scripting, tooling, backend and security projects.", level: 95 },
        { icon: "csharp", title: "C# (MVC)", desc: "Complete mastery — Web development with MVC, Entity Framework and RESTful API.", level: 90 },
        { icon: "linux", title: "Linux", desc: "Complete mastery — Server administration, bash scripting, networking and security.", level: 95 },
        { icon: "kali", title: "Kali Linux", desc: "Complete mastery — Pentesting with Nmap, Metasploit, Burp Suite and Wireshark.", level: 90 },
        { icon: "html", title: "HTML & CSS", desc: "Complete mastery — UI design, responsive and animations.", level: 90 },
        { icon: "js", title: "JavaScript", desc: "Intermediate — DOM manipulation, events and API integration.", level: 65 },
        { icon: "node", title: "Node.js / Next.js", desc: "Intermediate — Backend development with Node.js and React apps with Next.js.", level: 60 },
        { icon: "sql", title: "SQL Server / SQLite", desc: "Complete mastery — Database design, data management and query optimization.", level: 85 },
        { icon: "wordpress", title: "WordPress", desc: "Complete mastery — Development, customization and website management.", level: 80 },
        { icon: "security", title: "Web Security", desc: "Complete mastery — Vulnerability analysis, Natas challenges and PWK.", level: 85 }
      ]
    },
    
    focus: {
      tag: "Currently focused on",
      title: "What I'm working on",
      subtitle: "One step forward every day.",
      items: [
        { icon: "book", title: "Web Security", desc: "Studying vulnerabilities and CTF challenges." },
        { icon: "tools", title: "Security Tools", desc: "Building Python CLI tools." },
        { icon: "opensource", title: "Open Source", desc: "Contributing to security projects." },
        { icon: "internship", title: "Internship", desc: "Looking for learning opportunities." }
      ]
    },
    
    projects: {
      tag: "Projects",
      title: "Featured Projects",
      subtitle: "Projects built through self-driven learning and passion for coding.",
      items: [
        { icon: "🛒", title: "pos-system", date: "2026", desc: "Full-featured Point-of-Sale & inventory management system built as 4 separate apps — REST API backend, admin dashboard, cashier interface, and warehouse manager.", tech: ["Node.js", "Express", "Prisma", "SQLite", "React", "Next.js", "TypeScript"], url: "https://github.com/here-is-leo/pos-system" },
        { icon: "🔍", title: "Paris", date: "2026", desc: "Web Vulnerability Scanner — a powerful tool for identifying and analyzing security vulnerabilities in websites.", tech: ["Python", "FastAPI", "WebSocket"], url: "https://github.com/here-is-leo/Paris" },
        { icon: "🔒", title: "Moscow", date: "2026", desc: "Advanced WordPress Security Research Plugin — an educational tool for identifying security weaknesses in WordPress.", tech: ["PHP", "WordPress", "Security Research"], url: "https://github.com/here-is-leo/Moscow" },
        { icon: "🕸️", title: "overthewire-natas", date: "2026", desc: "Complete bilingual (Persian/English) walkthrough for all 35 levels of OverTheWire Natas — web & server-side security concepts, vulnerabilities, exploitation code, and defense strategies.", tech: ["HTML", "CSS", "JavaScript", "Web Security"], url: "https://github.com/here-is-leo/overthewire-natas" },
        { icon: "🌐", title: "V-Tunnel", date: "Aug 2026", desc: "Telegram Mini App for managing network tools — public DNS servers, MTProto proxies, and V2Ray configs.", tech: ["Python", "HTML", "CSS", "JavaScript", "Telegram API"], url: "https://github.com/here-is-leo/V-Tunnel" },
        { icon: "📚", title: "kali-linux-complete-guide", date: "Aug 2026", desc: "A comprehensive guide (40+ pages) covering Kali Linux tools — a compact encyclopedia for penetration testers.", tech: ["HTML", "CSS", "JavaScript", "Kali Linux"], url: "https://github.com/here-is-leo/kali-linux-complete-guide" },
        { icon: "⚡", title: "N3XUS V7.1", date: "2026", desc: "Advanced Arduino-based control system (V7.1) with web interface. Hardware monitoring and control through web UI.", tech: ["Arduino (C/C++)", "HTML"], url: "https://github.com/here-is-leo/N3XUS" },
        { icon: "🔧", title: "Marshall", date: "2026", desc: "Modular Arduino-based control system with customizable configuration. Modular architecture design and comprehensive documentation.", tech: ["Arduino (C/C++)", "HTML"], url: "https://github.com/here-is-leo/Marshall" },
        { icon: "🤖", title: "Bale-Bot", date: "Aug 2026", desc: "Early version of an intelligent messaging bot for the Bale platform — in active development with new features.", tech: ["Python", "Bale API"], url: "https://github.com/here-is-leo/Bale-Bot" },
        { icon: "📦", title: "inventory-bot", date: "2026", desc: "Inventory and warehouse management bot — a practical tool for tracking and managing products with automated reporting.", tech: ["Python"], url: "https://github.com/here-is-leo/inventory-bot" }
      ]
    },

    repos: {
      tag: "Repos",
      title: "GitHub Repositories",
      subtitle: "All my GitHub projects — from security tools to control systems and automation.",
      items: [
        { name: "pos-system", desc: "Full-featured Point-of-Sale & inventory management system with 4 separate apps — REST API, admin panel, cashier and warehouse manager.", lang: "TypeScript", stars: 0, forks: 0, url: "https://github.com/here-is-leo/pos-system" },
        { name: "Paris", desc: "Web Vulnerability Scanner — identifying and analyzing security vulnerabilities in websites.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Paris" },
        { name: "Moscow", desc: "WordPress security research plugin — multiple entry points, Self-Destruct and Deface page.", lang: "PHP", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Moscow" },
        { name: "overthewire-natas", desc: "Complete bilingual walkthrough for 35 levels of Natas challenge — vulnerability analysis and exploit code.", lang: "HTML", stars: 0, forks: 0, url: "https://github.com/here-is-leo/overthewire-natas" },
        { name: "V-Tunnel", desc: "Telegram Mini App for managing public DNS, MTProto proxies and V2Ray configs.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/V-Tunnel" },
        { name: "kali-linux-complete-guide", desc: "Comprehensive 40+ page guide to Kali Linux tools — Nmap, Metasploit, Wireshark and more.", lang: "HTML", stars: 1, forks: 0, url: "https://github.com/here-is-leo/kali-linux-complete-guide" },
        { name: "N3XUS", desc: "Advanced Arduino control system with web UI, serial monitoring and hardware integration.", lang: "HTML", stars: 0, forks: 0, url: "https://github.com/here-is-leo/N3XUS" },
        { name: "Marshall", desc: "Arduino control system with modular configuration, comprehensive documentation and easy-to-use UI.", lang: "HTML", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Marshall" },
        { name: "Bale-Bot", desc: "Intelligent messaging bot for Bale platform — in development with new features.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/Bale-Bot" },
        { name: "inventory-bot", desc: "Inventory management bot — product tracking and management with automated reporting.", lang: "Python", stars: 0, forks: 0, url: "https://github.com/here-is-leo/inventory-bot" }
      ]
    },

    resume: {
      tag: "Resume",
      title: "Resume",
      subtitle: "Python & C# Developer | Linux, Web Security & IoT Specialist",
      personal: {
        name: "Ilia Farahani (Ilia Azizabadi)",
        job: "Python & C# Developer",
        location: "Tehran, Iran",
        email: "ilyafarahanii@gmail.com",
        phone: "+98 903 083 9790",
        github: "github.com/here-is-leo"
      },
      about: "Student passionate about Python programming, Linux development and web security. Having completed all Natas security challenges (OverTheWire series) and built several practical projects on GitHub, I have strengthened my technical knowledge through self-learning and project-based development.",
      skills: [
        { name: "Python", level: 95 },
        { name: "C# (MVC)", level: 90 },
        { name: "Linux", level: 95 },
        { name: "Kali Linux", level: 90 },
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 65 },
        { name: "Node.js / Next.js", level: 60 },
        { name: "SQL Server / SQLite", level: 85 },
        { name: "WordPress", level: 80 },
        { name: "Web Security", level: 85 },
        { name: "Arduino (C/C++)", level: 80 },
        { name: "FastAPI", level: 75 }
      ],
      projects: [
        { icon: "🔍", title: "Paris", desc: "Web Vulnerability Scanner with Python + FastAPI + WebSocket" },
        { icon: "🔒", title: "Moscow", desc: "WordPress plugin security research project (PHP)" },
        { icon: "⚡", title: "N3XUS V7.1", desc: "Arduino-based control system with web interface" },
        { icon: "🔧", title: "Marshall", desc: "Modular Arduino control system" },
        { icon: "🕸️", title: "overthewire-natas", desc: "35-level Natas challenge walkthrough" },
        { icon: "🌐", title: "V-Tunnel", desc: "Telegram Mini App with Python" },
        { icon: "📚", title: "kali-linux-complete-guide", desc: "40+ page Kali Linux guide" }
      ],
      education: [
        { title: "High School Student", sub: "Tehran" },
        { title: "Advanced Technologies Course", sub: "Sharif University Academy & Techno Sharif" },
        { title: "PWK Course", sub: "Kali Linux — Penetration Testing" },
        { title: "Network Security Course", sub: "Network+" }
      ],
      languages: [
        { name: "Persian", level: "Native" },
        { name: "English", level: "B2+" }
      ],
      github: {
        commits: "23 in the past year",
        repos: "13 repositories",
        focus: "Aug 2026",
        type: "Security, Educational, IoT"
      }
    },
    
    donation: {
      badge: "Support Me",
      title1: "If you enjoy",
      title2: "my content",
      sub: "Support me with <strong>a coffee</strong> so I can keep producing high-quality content.",
      btnText: "Buy me a coffee",
      msg: "Every coffee = energy for better content"
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
        { icon: "email", label: "Email", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "phone", label: "Phone", value: "+98 903 083 9790", href: "tel:+989030839790" },
        { icon: "location", label: "Location", value: "Tehran, Iran", href: null },
        { icon: "github", label: "GitHub", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    
    footer: "© " + new Date().getFullYear() + " Ilia Farahani",
    
    about: {
      heroTitle: "About Me",
      heroSubtitle: "Python & C# Developer | Linux & Kali Linux Expert",
      
      introTag: "Biography",
      intro: "I'm **Ilia Farahani**, also known as **Ilia Azizabadi** and **here-is-leo**. From the very beginning, Linux was more than just an operating system for me. After completing all 35 levels of the Natas challenge, I became passionate about web security.\n\nToday, I build tools with Python and C#, test security with Linux and Kali, and learn something new every day.",
      
      eduTag: "Education & Courses",
      eduTitle: "Learning Path",
      timeline: [
        { 
          title: "Linux Mastery", 
          sub: "Server Administration", 
          desc: "Working with various Linux distributions, bash scripting, networking and security." 
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
        "Python — Tooling & Backend (95%)",
        "C# (MVC) — Web Development (90%)",
        "Linux — Administration & Networking (95%)",
        "Kali Linux — Penetration Testing (90%)",
        "HTML & CSS — UI Design (90%)",
        "JavaScript — Frontend Development (65%)",
        "Node.js / Next.js — Backend Development (60%)",
        "SQL Server / SQLite — Database (85%)",
        "WordPress — Development & Management (80%)",
        "Web Security — Vulnerability Analysis (85%)"
      ],
      
      langTag: "Languages",
      langTitle: "Languages",
      langList: [
        "Persian — Native",
        "English — B2+"
      ],
      
      githubTag: "GitHub",
      githubText: "113 commits in the past year, focused on security and educational projects.",
      githubLinkText: "github.com/here-is-leo"
    }
  }
};
