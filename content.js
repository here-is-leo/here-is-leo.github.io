const SITE = {
  fa: {
    dir: "rtl", lang: "fa",
    meta: {
      titleHome: "ایلیا فراهانی | برنامه‌نویس Python و C# | متخصص لینوکس و امنیت وب",
      descHome: "صفحه شخصی ایلیا فراهانی (ایلیا عزیزابادی | here-is-leo)؛ برنامه‌نویس Python و C#، متخصص لینوکس و تست نفوذ با Kali. آماده همکاری در پروژه‌های امنیتی و توسعه.",
      titleAbout: "درباره ایلیا فراهانی | برنامه‌نویس، متخصص لینوکس و تست نفوذ",
      descAbout: "بیوگرافی، تخصص‌ها و مهارت‌های ایلیا فراهانی — برنامه‌نویس Python و C#، متخصص لینوکس، تست‌نفوذگر Kali. آماده همکاری و کارآموزی."
    },
    nav: { home: "خانه", skills: "مهارت‌ها", projects: "پروژه‌ها", contact: "تماس", about: "درباره من", blog: "نوشته‌ها" },
    
    hero: {
      eyebrow: "🚀 آماده همکاری در پروژه‌های چالش‌برانگیز",
      title1: "سلام، من",
      name: "ایلیا فراهانی (ایلیا عزیزابادی | here-is-leo)",
      title2: "هستم",
      typewriter: [
        "برنامه‌نویس Python و C#", 
        "متخصص لینوکس و Kali", 
        "تست‌نفوذگر امنیت وب",
        "آماده همکاری با شما"
      ],
      subtitle: "من با ترکیب **برنامه‌نویسی**، **لینوکس** و **امنیت**، راه‌حل‌هایی می‌سازم که فراتر از کدنویسی هستند. اگر به دنبال عضو تیمی هستید که هم کد بزند، هم امنیت را ببیند و هم عاشق چالش باشد — من همان نفر هستم. بیایید با هم چیزی بزرگ بسازیم.",
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
      tag: "🧠 توانمندی‌های من",
      title: "با این ابزارها، مشکلات را حل می‌کنم",
      subtitle: "هر مهارت من، یک راه‌حل برای چالش‌های شماست. از توسعه تا امنیت، از لینوکس تا وب — من اینجا هستم تا تیم شما را قدرتمندتر کنم.",
      items: [
        { 
          icon: "🐍", 
          title: "Python — توسعه و امنیت", 
          desc: "توسعه ابزارهای امنیتی، اسکریپت‌های اتوماسیون، بک‌اند API و راه‌حل‌های سفارشی. اگر به توسعه‌دهنده‌ای نیاز دارید که امنیت را هم ببیند، من انتخاب شما هستم." 
        },
        { 
          icon: "#️⃣", 
          title: "C# (MVC) — وب حرفه‌ای", 
          desc: "توسعه وب‌اپلیکیشن‌های مقیاس‌پذیر با معماری MVC، Entity Framework و RESTful API. آماده همکاری در پروژه‌های دات‌نت." 
        },
        { 
          icon: "🐧", 
          title: "لینوکس — از صفر تا صد", 
          desc: "مدیریت سرور، شبکه‌سازی، bash scripting، امنیت و عیب‌یابی. اگر تیم شما به متخصص لینوکس نیاز دارد، من بیش از ۱۰ توزیع را حرفه‌ای کار کرده‌ام." 
        },
        { 
          icon: "🛡️", 
          title: "Kali Linux — تست نفوذ تخصصی", 
          desc: "شناسایی آسیب‌پذیری‌ها با Nmap، بهره‌برداری با Metasploit، تحلیل ترافیک با Wireshark و تست نفوذ وب با Burp Suite. امنیت برای من یک تخصص است، نه یک علاقه." 
        },
        { 
          icon: "🗄️", 
          title: "پایگاه داده — طراحی و مدیریت", 
          desc: "طراحی دیتابیس، بهینه‌سازی کوئری، مدیریت داده با SQL Server و SQLite. داده‌های شما در دستان امن." 
        },
        { 
          icon: "🌐", 
          title: "امنیت وب — از Natas تا PWK", 
          desc: "تکمیل ۳۵ مرحله چالش Natas، آشنایی با OWASP Top 10، تحلیل آسیب‌پذیری و راهکارهای مقابله. وب شما را امن می‌کنم." 
        }
      ]
    },
    
    focus: {
      tag: "🔥 الان روی چه چیزی کار می‌کنم؟",
      title: "پروژه‌هایی که ارزش سرمایه‌گذاری دارند",
      subtitle: "من به دنبال پروژه‌های چالش‌برانگیز و تیم‌های حرفه‌ای هستم. اگر به دنبال همکاری هستید، همین الان با من تماس بگیرید.",
      items: [
        { 
          icon: "📘", 
          title: "امنیت وب پیشرفته", 
          desc: "مطالعه آسیب‌پذیری‌های روز و شرکت در چالش‌های CTF. اگر تیم امنیتی دارید، من آماده همکاری هستم." 
        },
        { 
          icon: "🔧", 
          title: "ساخت ابزارهای امنیتی", 
          desc: "توسعه ابزارهای خط فرمان با Python برای تست نفوذ. اگر به ابزارساز نیاز دارید، من می‌سازم." 
        },
        { 
          icon: "🌱", 
          title: "مشارکت در متن‌باز", 
          desc: "کمک به پروژه‌های امنیتی متن‌باز. اگر پروژه‌ای دارید که نیاز به همکار دارد، من هستم." 
        },
        { 
          icon: "🎯", 
          title: "جستجوی همکاری حرفه‌ای", 
          desc: "به دنبال فرصت‌های همکاری، کارآموزی و پروژه‌های چالش‌برانگیز هستم. اگر به تیم خود نیاز به یک عضو قوی دارید، با من تماس بگیرید." 
        }
      ]
    },
    
    projects: {
      tag: "📂 نمونه‌کارهای من",
      title: "پروژه‌هایی که حرف می‌زنند",
      subtitle: "این پروژه‌ها نشان می‌دهند که من چه کسی هستم و چه می‌توانم بسازم. اگر به دنبال همکاری هستید، اینها فقط شروع کار من هستند.",
      items: [
        {
          title: "overthewire-natas",
          date: "۱۴۰۵",
          desc: "یک راهنمای کامل و دوزبانه برای آموزش امنیت وب از طریق ۳۵ مرحله چالش Natas — یکی از معروف‌ترین سری چالش‌های امنیتی OverTheWire. این پروژه نشان می‌دهد که من تحلیلگر و مدرس خوبی هستم.",
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
          desc: "Telegram Mini App برای مدیریت اتصالات امن و پروکسی — یک ابزار کاربردی برای ارتباطات امن که نشان می‌دهد من هم برنامه‌نویسم و هم به امنیت اهمیت می‌دهم.",
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
          desc: "راهنمای جامع (بیش از ۴۰ صفحه) ابزارهای Kali Linux — یک دانشنامه فشرده برای تست‌نفوذگران که نشان می‌دهد من در لینوکس و امنیت تخصص دارم.",
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
          desc: "ربات پیام‌رسان هوشمند برای پلتفرم بله — یک پروژه در حال توسعه که نشان می‌دهد من عاشق چالش‌های جدید هستم و از یادگیری نمی‌ترسم.",
          bullets: [
            "پیاده‌سازی نسخه ابتدایی ربات با قابلیت پاسخگویی خودکار",
            "توسعه و اضافه کردن ماژول‌های جدید در حال انجام"
          ],
          tech: ["Python", "Bale API"],
          href: "https://github.com/here-is-leo"
        }
      ]
    },
    
    donation: {
      badge: "🎉 حمایت از تولید محتوا",
      title1: "اگر از محتوای من",
      title2: "لذت می‌برید",
      sub: "با <strong>یک قهوه ☕</strong> از من حمایت کنید تا بتوانم محتوای باکیفیت‌تری تولید کنم. هر حمایت شما، انگیزه‌ای برای ساخت محتوای بهتر است.",
      btnText: "برای من قهوه بخر",
      msg: "🎊 هر قهوه = یک جشن تازه"
    },
    
    aboutPreview: {
      title: "آماده همکاری هستم",
      desc: "اگر به دنبال یک برنامه‌نویس، متخصص لینوکس یا تست‌نفوذگر برای تیم خود هستید — من اینجا هستم. مهارت‌ها، پروژه‌ها و مسیر یادگیری من را ببینید و با من تماس بگیرید.",
      cta: "درباره من"
    },
    
    contact: {
      tag: "📞 بیایید با هم کار کنیم",
      title: "همین الان با من تماس بگیرید",
      subtitle: "من به دنبال همکاری، کارآموزی و پروژه‌های چالش‌برانگیز هستم. اگر فکر می‌کنید می‌توانم به تیم شما کمک کنم — یک پیام بفرستید. منتظر شما هستم.",
      items: [
        { icon: "✉️", label: "ایمیل", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "📱", label: "تماس", value: "۰۹۰۳۰۸۳۹۷۹۰", href: "tel:+989030839790" },
        { icon: "📍", label: "موقعیت", value: "تهران، ایران — آماده همکاری آنلاین", href: null },
        { icon: "🐙", label: "گیت‌هاب", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    
    footer: "© " + new Date().getFullYear() + " ایلیا فراهانی (ایلیا عزیزابادی | here-is-leo). ساخته شده با ☕ و عشق به کد — آماده همکاری با شما",
    
    about: {
      heroTitle: "درباره من — بیایید با هم کار کنیم",
      heroSubtitle: "برنامه‌نویس Python و C# | متخصص لینوکس | تست‌نفوذگر امنیت وب | آماده همکاری",
      
      introTag: "💡 من کی هستم و چه می‌خواهم؟",
      intro: "من **ایلیا فراهانی** هستم، برنامه‌نویس و متخصص امنیت سایبری. اما بیشتر از هر چیز، من یک **حل‌کننده مشکل** هستم. اگر تیم شما به کسی نیاز دارد که:\n\n🔹 با **Python** ابزارهای امنیتی بسازد و بک‌اند توسعه دهد\n🔹 با **C# (MVC)** وب‌اپلیکیشن‌های حرفه‌ای طراحی کند\n🔹 **لینوکس** را از صفر تا صد مدیریت کند و سرورها را امن نگه دارد\n🔹 با **Kali Linux** تست نفوذ انجام دهد و آسیب‌پذیری‌ها را شناسایی کند\n\nپس من همان نفر هستم. من به دنبال **همکاری، کارآموزی و پروژه‌های چالش‌برانگیز** هستم. اگر فکر می‌کنید می‌توانم به تیم شما اضافه شوم — همین الان با من تماس بگیرید.",
      
      eduTag: "🎓 تخصص‌های من — چرا من را انتخاب کنید؟",
      eduTitle: "مسیری که من را به اینجا رساند",
      timeline: [
        { 
          title: "🐧 تسلط کامل بر لینوکس", 
          sub: "مدیریت سرور و ابزارهای حرفه‌ای — بیش از ۱۰ توزیع", 
          desc: "کار با توزیع‌های مختلف لینوکس از جمله Ubuntu، Debian، CentOS، Fedora و تخصص ویژه روی **Kali Linux**. تسلط کامل بر خط فرمان، bash scripting، مدیریت فرآیندها، شبکه‌سازی، فایروال و امنیت لینوکس. اگر تیم شما به یک متخصص لینوکس نیاز دارد، من آماده‌ام." 
        },
        { 
          title: "🛡️ تست نفوذ تخصصی با Kali Linux", 
          sub: "آسیب‌پذیری‌یابی و امنیت تهاجمی — ابزارهای حرفه‌ای", 
          desc: "آشنایی عمیق با ابزارهای پیشرفته Kali شامل **Nmap** (اسکن شبکه)، **Metasploit** (بهره‌برداری)، **Wireshark** (تحلیل ترافیک)، **John the Ripper** (کرک پسورد)، **Burp Suite** (تست نفوذ وب) و **Aircrack-ng** (امنیت وای‌فای). انجام تست نفوذ در محیط‌های کنترل‌شده و شبیه‌سازی حملات واقعی. اگر به دنبال تست‌نفوذگر هستید که حرفه‌ای کار کند، من انتخاب شما هستم." 
        },
        { 
          title: "#️⃣ برنامه‌نویسی C# (MVC)", 
          sub: "توسعه وب با معماری مدرن — پروژه‌های مقیاس‌پذیر", 
          desc: "طراحی و پیاده‌سازی وب‌اپلیکیشن‌های پویا با معماری MVC در **C#**. تسلط بر Entity Framework، LINQ، Razor Pages و ساخت APIهای RESTful. تجربه عملی در توسعه پروژه‌های مقیاس‌پذیر با دات‌نت. اگر تیم شما به توسعه‌دهنده C# نیاز دارد، من آماده همکاری هستم." 
        },
        { 
          title: "🎯 دوره‌های تخصصی امنیت", 
          sub: "از شبکه تا وب اپلیکیشن — آموزش دیده و آماده", 
          desc: "**دوره PWK** (Penetration Testing with Kali Linux) — متدولوژی‌های تست نفوذ استاندارد. **دوره Network+** — مفاهیم پیشرفته شبکه، پروتکل‌ها و امنیت زیرساخت. **دوره فناوری‌های پیشرفته** — آکادمی دانشگاه شریف و تکنو شریف. من نه تنها خودآموز هستم، بلکه دوره‌های تخصصی را هم گذرانده‌ام." 
        }
      ],
      
      skillsTag: "🧰 مهارت‌های من — همان چیزی که تیم شما نیاز دارد",
      skillsTitle: "خلاصه توانمندی‌های حرفه‌ای",
      skillsList: [
        "🐍 Python — توسعه ابزارهای امنیتی، بک‌اند و اتوماسیون",
        "#️⃣ C# (MVC) — توسعه وب حرفه‌ای و API",
        "🐧 لینوکس — تسلط کامل (مدیریت، شبکه، امنیت، bash)",
        "🛡️ Kali Linux — تست نفوذ تخصصی و آسیب‌پذیری‌یابی",
        "🔍 Nmap — اسکن و شناسایی پیشرفته شبکه",
        "💥 Metasploit — بهره‌برداری و تست نفوذ حرفه‌ای",
        "🌐 Burp Suite — تحلیل و تست امنیت وب",
        "🗄️ SQL Server / SQLite — طراحی و مدیریت داده",
        "📡 Wireshark — تحلیل ترافیک و عیب‌یابی شبکه",
        "🔑 John the Ripper — کرک و امنیت پسورد",
        "📱 WordPress — توسعه، شخصی‌سازی و امنیت",
        "📂 Git / GitHub — کنترل نسخه و همکاری تیمی"
      ],
      
      langTag: "🌍 زبان‌ها — ارتباط بدون مرز",
      langTitle: "زبان‌های مسلط",
      langList: [
        "🇮🇷 فارسی — زبان مادری — ارتباط روان و حرفه‌ای",
        "🇬🇧 انگلیسی — سطح پیشرفته (B2+) — مطالعه مستندات تخصصی، منابع امنیتی و ارتباط با تیم‌های بین‌المللی"
      ],
      
      githubTag: "📊 فعالیت گیت‌هاب — تعهد و پشتکار",
      githubText: "۸۷ مشارکت (commit) در یک سال اخیر با تمرکز بر پروژه‌های امنیتی و آموزشی. بیشترین فعالیت در مرداد ۱۴۰۵ — ساخت ابزارهای تست نفوذ، راهنماهای امنیتی و اسکریپت‌های اتوماسیون لینوکس. اگر به دنبال کسی هستید که متعهد و پرکار باشد، من همان نفر هستم.",
      githubLinkText: "github.com/here-is-leo — مشاهده پروژه‌ها"
    }
  },
  
  // ============================================================
  // ENGLISH VERSION — PROFESSIONAL INVITATION
  // ============================================================
  
  en: {
    dir: "ltr", lang: "en",
    meta: {
      titleHome: "Ilia Farahani | Python & C# Developer | Linux Expert & Security Specialist",
      descHome: "Personal site of Ilia Farahani (Ilia Azizabadi | here-is-leo); Python & C# developer, Linux expert, Kali Linux pentester. Open for collaboration and internships.",
      titleAbout: "About Ilia Farahani | Developer, Linux Expert & Pentester — Open for Collaboration",
      descAbout: "Biography, expertise and skills of Ilia Farahani — Python & C# developer, Linux expert, Kali Linux penetration tester. Ready for collaboration and challenging projects."
    },
    nav: { home: "Home", skills: "Skills", projects: "Projects", contact: "Contact", about: "About", blog: "Blog" },
    
    hero: {
      eyebrow: "🚀 Open for Challenging Collaborations",
      title1: "Hi, I'm",
      name: "Ilia Farahani (Ilia Azizabadi | here-is-leo)",
      title2: "👋",
      typewriter: [
        "Python & C# Developer",
        "Linux & Kali Expert",
        "Web Security Pentester",
        "Ready to Collaborate"
      ],
      subtitle: "I combine **development**, **Linux**, and **security** to build solutions that go beyond code. If you're looking for a team member who codes, thinks about security, and loves challenges — I'm the one. Let's build something great together.",
      cta1: "View Projects",
      cta2: "About Me"
    },
    
    stats: [
      { number: 35, suffix: "+", label: "Security Challenges Solved" },
      { number: 87, suffix: "", label: "Commits in a Year" },
      { number: 4, suffix: "", label: "Hands-on Projects" },
      { number: 3, suffix: "", label: "Programming Languages" }
    ],
    
    skills: {
      tag: "🧠 My Skills",
      title: "Tools I use to solve problems",
      subtitle: "Every skill of mine is a solution to your challenges. From development to security, from Linux to web — I'm here to make your team stronger.",
      items: [
        { 
          icon: "🐍", 
          title: "Python — Development & Security", 
          desc: "Building security tools, automation scripts, backend APIs, and custom solutions. If you need a developer who also understands security, I'm your choice." 
        },
        { 
          icon: "#️⃣", 
          title: "C# (MVC) — Professional Web", 
          desc: "Developing scalable web applications with MVC architecture, Entity Framework, and RESTful APIs. Ready for .NET projects." 
        },
        { 
          icon: "🐧", 
          title: "Linux — From Zero to Hero", 
          desc: "Server administration, networking, bash scripting, security, and troubleshooting. If your team needs a Linux expert, I've worked professionally with 10+ distributions." 
        },
        { 
          icon: "🛡️", 
          title: "Kali Linux — Specialized Pentesting", 
          desc: "Vulnerability identification with Nmap, exploitation with Metasploit, traffic analysis with Wireshark, and web pentesting with Burp Suite. Security is my expertise, not just an interest." 
        },
        { 
          icon: "🗄️", 
          title: "Databases — Design & Management", 
          desc: "Database design, query optimization, data management with SQL Server and SQLite. Your data is in safe hands." 
        },
        { 
          icon: "🌐", 
          title: "Web Security — From Natas to PWK", 
          desc: "Completed all 35 levels of Natas challenges, familiar with OWASP Top 10, vulnerability analysis, and mitigation strategies. I'll keep your web secure." 
        }
      ]
    },
    
    focus: {
      tag: "🔥 What I'm Working On",
      title: "Projects worth investing in",
      subtitle: "I'm looking for challenging projects and professional teams. If you're interested in collaboration, contact me right now.",
      items: [
        { 
          icon: "📘", 
          title: "Advanced Web Security", 
          desc: "Studying latest vulnerabilities and participating in CTF challenges. If you have a security team, I'm ready to join." 
        },
        { 
          icon: "🔧", 
          title: "Building Security Tools", 
          desc: "Developing Python CLI tools for penetration testing. If you need a tool builder, I can create." 
        },
        { 
          icon: "🌱", 
          title: "Open Source Contributions", 
          desc: "Contributing to security-related open-source projects. If you have a project that needs a collaborator, I'm here." 
        },
        { 
          icon: "🎯", 
          title: "Seeking Professional Collaboration", 
          desc: "Looking for collaboration opportunities, internships, and challenging projects. If your team needs a strong member, contact me." 
        }
      ]
    },
    
    projects: {
      tag: "📂 My Portfolio",
      title: "Projects that speak for themselves",
      subtitle: "These projects show who I am and what I can build. If you're looking for collaboration, this is just the beginning.",
      items: [
        {
          title: "overthewire-natas",
          date: "2026",
          desc: "A complete bilingual guide for teaching web security through 35 levels of Natas challenges — one of the most famous OverTheWire security series. This project shows I'm a great analyst and teacher.",
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
          desc: "A Telegram Mini App for managing secure connections and proxies — a practical tool that shows I'm both a developer and security-conscious.",
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
          desc: "A comprehensive guide (40+ pages) covering Kali Linux tools — a compact encyclopedia for penetration testers that shows my Linux and security expertise.",
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
          desc: "An intelligent messaging bot for the Bale platform — a project in development that shows I love new challenges and never stop learning.",
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
      sub: "Support me with <strong>a coffee ☕</strong> so I can keep producing high-quality content. Your support motivates me to create better content.",
      btnText: "Buy me a coffee",
      msg: "🎊 Every coffee = a new celebration"
    },
    
    aboutPreview: {
      title: "Ready to Collaborate",
      desc: "If you're looking for a developer, Linux expert, or penetration tester for your team — I'm here. Check out my skills, projects, and learning path, then contact me.",
      cta: "About Me"
    },
    
    contact: {
      tag: "📞 Let's Work Together",
      title: "Contact Me Right Now",
      subtitle: "I'm looking for collaboration, internships, and challenging projects. If you think I can help your team — send me a message. I'm waiting for you.",
      items: [
        { icon: "✉️", label: "Email", value: "ilyafarahanii@gmail.com", href: "mailto:ilyafarahanii@gmail.com" },
        { icon: "📱", label: "Phone", value: "+98 903 083 9790", href: "tel:+989030839790" },
        { icon: "📍", label: "Location", value: "Tehran, Iran — Ready for Remote Work", href: null },
        { icon: "🐙", label: "GitHub", value: "github.com/here-is-leo", href: "https://github.com/here-is-leo" }
      ]
    },
    
    footer: "© " + new Date().getFullYear() + " Ilia Farahani (Ilia Azizabadi | here-is-leo). Made with ☕ and love for code — Ready to Collaborate",
    
    about: {
      heroTitle: "About Me — Let's Work Together",
      heroSubtitle: "Python & C# Developer | Linux Expert | Web Security Pentester | Open for Collaboration",
      
      introTag: "💡 Who I Am & What I Want",
      intro: "I'm **Ilia Farahani**, a developer and cybersecurity specialist. But more than anything, I'm a **problem solver**. If your team needs someone who:\n\n🔹 Builds security tools and develops backends with **Python**\n🔹 Designs professional web applications with **C# (MVC)**\n🔹 Manages **Linux** from zero to hero and keeps servers secure\n🔹 Performs penetration testing with **Kali Linux** and identifies vulnerabilities\n\nThen I'm the one. I'm looking for **collaboration, internships, and challenging projects**. If you think I can add value to your team — contact me right now.",
      
      eduTag: "🎓 My Expertise — Why Choose Me?",
      eduTitle: "The Path That Brought Me Here",
      timeline: [
        { 
          title: "🐧 Complete Linux Mastery", 
          sub: "Server Administration & Professional Tools — 10+ Distributions", 
          desc: "Working with various Linux distributions including Ubuntu, Debian, CentOS, Fedora, with specialized expertise in **Kali Linux**. Complete command-line fluency, bash scripting, process management, networking, firewalls, and Linux security hardening. If your team needs a Linux expert, I'm ready." 
        },
        { 
          title: "🛡️ Specialized Pentesting with Kali", 
          sub: "Vulnerability Assessment & Offensive Security — Professional Tools", 
          desc: "Deep familiarity with advanced Kali tools: **Nmap** (network scanning), **Metasploit** (exploitation), **Wireshark** (traffic analysis), **John the Ripper** (password cracking), **Burp Suite** (web pentesting), and **Aircrack-ng** (WiFi security). Conducting penetration tests in controlled environments and simulating real-world attacks. If you need a professional pentester, I'm your choice." 
        },
        { 
          title: "#️⃣ C# (MVC) Development", 
          sub: "Modern Web Architecture — Scalable Projects", 
          desc: "Designing and implementing dynamic web applications with **C#** MVC architecture. Expertise in Entity Framework, LINQ, Razor Pages, and building RESTful APIs. Practical experience in scalable .NET development. If your team needs a C# developer, I'm ready to collaborate." 
        },
        { 
          title: "🎯 Security Specialization Courses", 
          sub: "From Network to Web Application — Trained & Ready", 
          desc: "**PWK Course** (Penetration Testing with Kali Linux) — standard penetration testing methodologies. **Network+ Course** — advanced network concepts, protocols, and infrastructure security. **Advanced Technologies Course** — Sharif University Academy & Techno Sharif. I'm not just self-taught; I've completed professional courses too." 
        }
      ],
      
      skillsTag: "🧰 My Skills — What Your Team Needs",
      skillsTitle: "Professional Skills Summary",
      skillsList: [
        "🐍 Python — Security Tools, Backend & Automation",
        "#️⃣ C# (MVC) — Professional Web Development & API",
        "🐧 Linux — Complete Mastery (Admin, Networking, Security, Bash)",
        "🛡️ Kali Linux — Specialized Pentesting & Vulnerability Assessment",
        "🔍 Nmap — Advanced Network Scanning & Discovery",
        "💥 Metasploit — Professional Exploitation & Pentesting",
        "🌐 Burp Suite — Web Security Analysis & Testing",
        "🗄️ SQL Server / SQLite — Data Design & Management",
        "📡 Wireshark — Traffic Analysis & Network Troubleshooting",
        "🔑 John the Ripper — Password Security & Cracking",
        "📱 WordPress — Development, Customization & Security",
        "📂 Git / GitHub — Version Control & Team Collaboration"
      ],
      
      langTag: "🌍 Languages — Communication Without Borders",
      langTitle: "Languages",
      langList: [
        "🇮🇷 Persian — Native — Fluent & Professional Communication",
        "🇬🇧 English — Advanced (B2+) — Technical Documentation, Security Research & International Teams"
      ],
      
      githubTag: "📊 GitHub Activity — Commitment & Dedication",
      githubText: "87 commits in the past year focused on security and educational projects. Peak activity in August 2026 — building pentesting tools, security guides, and Linux automation scripts. If you need someone committed and hardworking, I'm the one.",
      githubLinkText: "github.com/here-is-leo — View My Projects"
    }
  }
};
