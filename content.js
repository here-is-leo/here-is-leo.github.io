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
        { icon: "🐍", title: "Python", desc: "تسلط کامل — اسکریپت‌نویسی، ابزارسازی، بک‌اند و پروژه‌های امنیتی.", level: 95 },
        { icon: "#️⃣", title: "C# (MVC)", desc: "تسلط کامل — توسعه وب با معماری MVC، Entity Framework و RESTful API.", level: 90 },
        { icon: "🐧", title: "لینوکس", desc: "تسلط کامل — مدیریت سرور، bash scripting، شبکه‌سازی و امنیت.", level: 95 },
        { icon: "🛡️", title: "Kali Linux", desc: "تسلط کامل — تست نفوذ با Nmap، Metasploit، Burp Suite و Wireshark.", level: 90 },
        { icon: "🌐", title: "HTML & CSS", desc: "تسلط کامل — طراحی رابط کاربری، ریسپانسیو و انیمیشن.", level: 90 },
        { icon: "📜", title: "JavaScript", desc: "تسلط متوسط — DOM manipulation، رویدادها و کار با API.", level: 65 },
        { icon: "⚛️", title: "Node.js / Next.js", desc: "تسلط متوسط — توسعه بک‌اند با Node.js و اپلیکیشن‌های React با Next.js.", level: 60 },
        { icon: "🗄️", title: "SQL Server / SQLite", desc: "تسلط کامل — طراحی دیتابیس، مدیریت داده و بهینه‌سازی کوئری.", level: 85 },
        { icon: "📱", title: "WordPress", desc: "تسلط کامل — توسعه، شخصی‌سازی و مدیریت وب‌سایت.", level: 80 },
        { icon: "🔒", title: "امنیت وب", desc: "تسلط کامل — تحلیل آسیب‌پذیری، چالش‌های Natas و آشنایی با PWK.", level: 85 }
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
          title: "pos-system",
          date: "۱۴۰۵",
          desc: "سیستم جامع فروش و مدیریت انبار (POS) متشکل از ۴ اپلیکیشن جداگانه — بک‌اند API، پنل ادمین، سیستم فروشنده و سیستم انباردار.",
          bullets: [
            "دسترسی نقش‌محور (Role-based access) برای مدیریت کاربران",
            "فاکتور‌گذاری با تخفیف و چاپ مستقیم",
            "مدیریت موجودی با لاگ تغییرات و تاریخچه",
            "تسویه‌حساب مشتریان و گزارش‌گیری Excel/PDF",
            "بک‌آپ خودکار از پایگاه داده"
          ],
          tech: ["Node.js", "Express", "Prisma", "SQLite", "React", "Next.js", "TypeScript"],
          href: "https://github.com/here-is-leo/pos-system"
        },
        {
          title: "Paris",
          date: "۱۴۰۵",
          desc: "اسکنر آسیب‌پذیری وب (Web Vulnerability Scanner) — یک ابزار قدرتمند برای شناسایی و تحلیل آسیب‌پذیری‌های امنیتی در وب‌سایت‌ها.",
          bullets: [
            "اسکن خودکار آسیب‌پذیری‌های رایج (SQLi، XSS، LFI و...)",
            "گزارش‌گیری دقیق از نتایج اسکن",
            "طراحی سبک و کارآمد برای استفاده حرفه‌ای"
          ],
          tech: ["Python", "Web Security", "Penetration Testing"],
          href: "https://github.com/here-is-leo/Paris"
        },
        {
          title: "Moscow",
          date: "۱۴۰۵",
          desc: "پلاگین پیشرفته تحقیقاتی امنیت وردپرس — یک ابزار آموزشی برای شناسایی نقاط ضعف امنیتی در وردپرس.",
          bullets: [
            "سیستم چندین نقطه ورود (۱۰+ Entry Points)",
            "قابلیت Self-Destruct پس از ۵۰ ساعت",
            "صفحه Deface و سیستم Backdoor چندگانه",
            "منحصراً برای اهداف آموزشی و تحقیقاتی"
          ],
          tech: ["PHP", "WordPress", "Security Research"],
          href: "https://github.com/here-is-leo/Moscow"
        },
        {
          title: "overthewire-natas",
          date: "۱۴۰۵",
          desc: "راهنمای کامل و دوزبانه برای آموزش امنیت وب از طریق ۳۵ مرحله چالش Natas — یکی از معروف‌ترین سری چالش‌های امنیتی OverTheWire.",
          bullets: [
            "تحلیل مرحله‌به‌مرحله هر چالش با توضیح آسیب‌پذیری",
            "ارائه کد اکسپلویت و راهکارهای مقابله",
            "رابط کاربری نئونی با شبیه‌ساز ترمینال و Progress Tracker"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Web Security"],
          href: "https://github.com/here-is-leo/overthewire-natas"
        },
        {
          title: "V-Tunnel",
          date: "مرداد ۱۴۰۵",
          desc: "Telegram Mini App برای مدیریت ابزارهای شبکه — سرورهای DNS عمومی، پروکسی‌های MTProto و کانفیگ‌های V2Ray.",
          bullets: [
            "مدیریت DNS عمومی (Google DNS، Cloudflare) و MTProto Proxies",
            "مدیریت کانفیگ‌های V2Ray برای ارتباطات امن",
            "طراحی با سبک Glassmorphism، تم تیره و پشتیبانی دوزبانه"
          ],
          tech: ["Python", "HTML", "CSS", "JavaScript", "Telegram API"],
          href: "https://github.com/here-is-leo/V-Tunnel"
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
          href: "https://github.com/here-is-leo/kali-linux-complete-guide"
        },
        {
          title: "N3XUS",
          date: "۱۴۰۵",
          desc: "سیستم کنترل پیشرفته مبتنی بر آردوینو با رابط وب، مانیتورینگ سریال و یکپارچه‌سازی سخت‌افزار. مناسب برای پروژه‌های IoT و اتوماسیون.",
          bullets: [
            "رابط وب برای کنترل و مانیتورینگ دستگاه",
            "پشتیبانی از ارتباط سریال برای ارتباط با سخت‌افزار",
            "پیکربندی ماژولار و مستندسازی کامل"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Arduino", "IoT"],
          href: "https://github.com/here-is-leo/N3XUS"
        },
        {
          title: "Marshall",
          date: "۱۴۰۵",
          desc: "سیستم کنترل مبتنی بر آردوینو با پیکربندی ماژولار، مستندسازی جامع و رابط کاربری آسان. مناسب برای سیستم‌های تعبیه‌شده و پروژه‌های اتوماسیون.",
          bullets: [
            "پیکربندی ماژولار برای پروژه‌های مختلف",
            "مستندسازی کامل و رابط کاربری آسان",
            "یکپارچه‌سازی با سخت‌افزارهای مختلف"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Arduino", "Embedded Systems"],
          href: "https://github.com/here-is-leo/Marshall"
        },
        {
          title: "Bale-Bot",
          date: "مرداد ۱۴۰۵",
          desc: "ربات پیام‌رسان هوشمند برای پلتفرم بله — در حال توسعه با قابلیت‌های جدید.",
          bullets: [
            "نسخه ابتدایی با قابلیت پاسخگویی خودکار",
            "توسعه و اضافه کردن ماژول‌های جدید در حال انجام"
          ],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo/Bale-Bot"
        },
        {
          title: "inventory-bot",
          date: "۱۴۰۵",
          desc: "ربات مدیریت موجودی و انبار — یک ابزار کاربردی برای پیگیری و مدیریت کالاها.",
          bullets: [
            "مدیریت موجودی کالاها",
            "پیگیری تغییرات و تاریخچه",
            "گزارش‌گیری و هشدارهای خودکار"
          ],
          tech: ["Python"],
          href: "https://github.com/here-is-leo/inventory-bot"
        }
      ]
    },
    
    donation: {
      badge: "☕ حمایت از من",
      title1: "اگر از محتوای من",
      title2: "خوشتان می‌آید",
      sub: "با <strong>یک قهوه ☕</strong> از من حمایت کنید تا بتوانم محتوای باکیفیت‌تری تولید کنم.",
      btnText: "خرید قهوه برای من",
      msg: "🎉 هر قهوه = انرژی برای ساخت محتوای بهتر"
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
    nav: { home: "Home", skills: "Skills", projects: "Projects", contact: "Contact", about: "About", blog: "Blog" },
    
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
        { icon: "🐍", title: "Python", desc: "Complete mastery — Scripting, tooling, backend and security projects.", level: 95 },
        { icon: "#️⃣", title: "C# (MVC)", desc: "Complete mastery — Web development with MVC, Entity Framework and RESTful API.", level: 90 },
        { icon: "🐧", title: "Linux", desc: "Complete mastery — Server administration, bash scripting, networking and security.", level: 95 },
        { icon: "🛡️", title: "Kali Linux", desc: "Complete mastery — Pentesting with Nmap, Metasploit, Burp Suite and Wireshark.", level: 90 },
        { icon: "🌐", title: "HTML & CSS", desc: "Complete mastery — UI design, responsive and animations.", level: 90 },
        { icon: "📜", title: "JavaScript", desc: "Intermediate — DOM manipulation, events and API integration.", level: 65 },
        { icon: "⚛️", title: "Node.js / Next.js", desc: "Intermediate — Backend development with Node.js and React apps with Next.js.", level: 60 },
        { icon: "🗄️", title: "SQL Server / SQLite", desc: "Complete mastery — Database design, data management and query optimization.", level: 85 },
        { icon: "📱", title: "WordPress", desc: "Complete mastery — Development, customization and website management.", level: 80 },
        { icon: "🔒", title: "Web Security", desc: "Complete mastery — Vulnerability analysis, Natas challenges and PWK.", level: 85 }
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
          title: "pos-system",
          date: "2026",
          desc: "Full-featured Point-of-Sale & inventory management system built as 4 separate apps — REST API backend, admin dashboard, cashier interface, and warehouse manager.",
          bullets: [
            "Role-based access control for user management",
            "Invoicing with discounts and direct printing",
            "Stock tracking with change logs and history",
            "Customer settlements and Excel/PDF reporting",
            "Automated database backups"
          ],
          tech: ["Node.js", "Express", "Prisma", "SQLite", "React", "Next.js", "TypeScript"],
          href: "https://github.com/here-is-leo/pos-system"
        },
        {
          title: "Paris",
          date: "2026",
          desc: "Web Vulnerability Scanner — a powerful tool for identifying and analyzing security vulnerabilities in websites.",
          bullets: [
            "Automated scanning for common vulnerabilities (SQLi, XSS, LFI, etc.)",
            "Detailed reporting of scan results",
            "Lightweight and efficient design for professional use"
          ],
          tech: ["Python", "Web Security", "Penetration Testing"],
          href: "https://github.com/here-is-leo/Paris"
        },
        {
          title: "Moscow",
          date: "2026",
          desc: "Advanced WordPress Security Research Plugin — an educational tool for identifying security weaknesses in WordPress.",
          bullets: [
            "Multiple entry points system (10+ Entry Points)",
            "Self-Destruct capability after 50 hours",
            "Deface page and multi-backdoor system",
            "Strictly for educational and research purposes"
          ],
          tech: ["PHP", "WordPress", "Security Research"],
          href: "https://github.com/here-is-leo/Moscow"
        },
        {
          title: "overthewire-natas",
          date: "2026",
          desc: "Complete bilingual (Persian/English) walkthrough for all 35 levels of OverTheWire Natas — web & server-side security concepts, vulnerabilities, exploitation code, and defense strategies.",
          bullets: [
            "Step-by-step analysis of each level with vulnerability explanations",
            "Exploit code and mitigation strategies",
            "Neon-styled UI with terminal simulator and Progress Tracker"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Web Security"],
          href: "https://github.com/here-is-leo/overthewire-natas"
        },
        {
          title: "V-Tunnel",
          date: "Aug 2026",
          desc: "Telegram Mini App for managing network tools — public DNS servers, MTProto proxies, and V2Ray configs.",
          bullets: [
            "Manage public DNS servers (Google DNS, Cloudflare) and MTProto proxies",
            "Manage V2Ray configs for secure communication",
            "Glassmorphism dark-themed UI with bilingual support"
          ],
          tech: ["Python", "HTML", "CSS", "JavaScript", "Telegram API"],
          href: "https://github.com/here-is-leo/V-Tunnel"
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
          href: "https://github.com/here-is-leo/kali-linux-complete-guide"
        },
        {
          title: "N3XUS",
          date: "2026",
          desc: "Advanced Arduino-based control system with web interface, serial monitoring, and hardware integration. Perfect for IoT and automation projects.",
          bullets: [
            "Web interface for device control and monitoring",
            "Serial communication support for hardware integration",
            "Modular configuration and complete documentation"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Arduino", "IoT"],
          href: "https://github.com/here-is-leo/N3XUS"
        },
        {
          title: "Marshall",
          date: "2026",
          desc: "Arduino-based control system with modular configuration, comprehensive documentation, and easy-to-use interface. Perfect for embedded systems and automation.",
          bullets: [
            "Modular configuration for different projects",
            "Complete documentation and easy-to-use interface",
            "Integration with various hardware"
          ],
          tech: ["HTML", "CSS", "JavaScript", "Arduino", "Embedded Systems"],
          href: "https://github.com/here-is-leo/Marshall"
        },
        {
          title: "Bale-Bot",
          date: "Aug 2026",
          desc: "An intelligent messaging bot for the Bale platform — in active development with new features.",
          bullets: [
            "Initial version with auto-reply capability",
            "Adding new modules and features in progress"
          ],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo/Bale-Bot"
        },
        {
          title: "inventory-bot",
          date: "2026",
          desc: "Inventory and warehouse management bot — a practical tool for tracking and managing products.",
          bullets: [
            "Product inventory management",
            "Change tracking and history",
            "Reporting and automated alerts"
          ],
          tech: ["Python"],
          href: "https://github.com/here-is-leo/inventory-bot"
        }
      ]
    },
    
    donation: {
      badge: "☕ Support Me",
      title1: "If you enjoy",
      title2: "my content",
      sub: "Support me with <strong>a coffee ☕</strong> so I can keep producing high-quality content.",
      btnText: "Buy me a coffee",
      msg: "🎉 Every coffee = energy for better content"
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
