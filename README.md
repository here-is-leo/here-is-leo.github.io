
here-is-leo.ir Personal Developer Portfolio 

Python • C# • Linux • Cybersecurity • Web Security






01 · About 

here-is-leo.ir is my personal developer portfolio, technical playground and project showcase.

The website was designed and developed from scratch using Vanilla HTML, CSS and JavaScript.

No framework.
No build pipeline.
No unnecessary dependency tree.

Just a lightweight frontend engineered to be fast, customizable and completely under control.

The philosophy: understand the fundamentals before hiding them behind abstractions.

02 · What You'll Find Here ┌───────────────────────────────────────────────┐ │ HERE-IS-LEO │ ├───────────────────────────────────────────────┤ │ │ │ 👤 About Me │ │ 🧠 Skills & Technical Focus │ │ 💻 Projects │ │ 🐙 GitHub Repository Explorer │ │ 📝 Technical Blog │ │ 📄 Résumé │ │ 📬 Contact │ │ │ └───────────────────────────────────────────────┘ 

The site is available in:

🇮🇷 Persian · 🇬🇧 English

with complete:

RTL ↔ LTR

support.

03 · Features 🌍 Bilingual 

Complete Persian / English localization.

Runtime language switching RTL / LTR support Persian typography English typography Centralized content 🎨 Modern UI 

Custom interface with:

Typewriter animations Scroll reveal Spotlight effects Parallax interactions Animated counters Smooth transitions 🌙 Theme Engine 

Built-in:

DARK MODE

LIGHT MODE

User preferences are persisted using:

localStorage ⚡ Performance 

The project avoids unnecessary dependencies.

0 Frameworks 0 Build Steps 0 Bundlers 0 npm dependency tree 

Native browser APIs do the heavy lifting.

📝 Technical Blog 

Built-in blog system featuring:

Full articles Categories Tags Pagination Bilingual content 🔎 SEO Ready 

Includes:

Open Graph Twitter Cards JSON-LD sitemap.xml robots.txt Semantic HTML 04 · Architecture flowchart TD A[🌐 Browser] --> B[index.html] B --> C[script.js] B --> D[style.css] C --> E[content.js] C --> F[blog-data.js] E --> G[🇬🇧 English] E --> H[🇮🇷 Persian] C --> I[Theme Engine] C --> J[Animation Engine] C --> K[Language Engine] K --> L[RTL / LTR] I --> M[Dark / Light] Architecture Principles Centralized Content ↓ Separation of Concerns ↓ Native Browser APIs ↓ Minimal Dependencies ↓ Simple Deployment 05 · Animation System 

The interface uses lightweight browser-native techniques instead of relying on animation frameworks.

Typewriter Dynamic text ↓ Character animation ↓ Hero interaction Scroll Reveal IntersectionObserver ↓ Viewport detection ↓ Element reveal Interactive Cards Mouse movement ↓ Spotlight calculation ↓ Dynamic visual response Performance Mode 

Lower-powered devices can disable heavier visual effects through:

isLowPerformance 

Because making a portfolio consume 40% CPU to animate a card would be a slightly embarrassing engineering decision.

06 · Project Structure here-is-leo.github.io/ │ ├── index.html ├── about.html ├── projects.html ├── repos.html ├── blog.html ├── resume.html ├── admin.html │ ├── content.js ├── blog-data.js ├── script.js ├── style.css │ ├── sitemap.xml ├── robots.txt │ ├── logo.png ├── avatar.jpg │ └── LICENSE File Purpose index.html Main landing page about.html Personal information projects.html Project portfolio repos.html GitHub repositories blog.html Technical blog resume.html Printable résumé admin.html Internal dashboard content.js Bilingual content blog-data.js Blog database script.js Application logic style.css Complete visual system 07 · Tech Stack 

Layer Technology Structure HTML5 Styling CSS3 Logic Vanilla JavaScript Typography Vazirmatn + Inter Animation CSS + Web APIs Storage LocalStorage Contact Formspree Hosting GitHub Pages 

08 · Security 

Security is considered throughout the project architecture.

Frontend Minimal third-party dependencies Static deployment Semantic structure Honeypot anti-spam mechanism No sensitive credentials in client-side code Administration 

The administrative dashboard communicates with a separate backend service.

PUBLIC WEBSITE │ │ ▼ GitHub Pages │ │ └───────────────┐ │ ▼ Separate Backend │ ▼ Admin System 

Public JavaScript is never a place to hide secrets. If it reaches the browser, assume the browser can read it.

09 · SEO 

The website includes a complete SEO foundation:

Open Graph Twitter Cards Schema.org JSON-LD sitemap.xml robots.txt Semantic HTML Bilingual Metadata 

Structured data is used to help search engines understand the website and its author.

10 · Local Development git clone https://github.com/here-is-leo/here-is-leo.github.io.git cd here-is-leo.github.io Python python3 -m http.server 8000 Node.js npx serve . 

Then:

http://localhost:8000 

Using a local HTTP server is recommended instead of opening index.html directly with file://.

11 · Customization Content 

Edit:

content.js 

All primary content is centralized there.

content.js │ ├── fa │ ├── hero │ ├── skills │ ├── projects │ ├── focus │ └── contact │ └── en ├── hero ├── skills ├── projects ├── focus └── contact Projects 

Add a project object to:

projects.items Blog 

Add articles to:

blogPosts 

inside:

blog-data.js Design 

Modify CSS variables inside:

style.css 12 · Roadmap [x] Personal portfolio [x] Responsive interface [x] Dark / Light mode [x] Persian / English [x] RTL / LTR [x] Project showcase [x] GitHub repositories [x] Technical blog [x] Printable résumé [x] SEO foundation [x] Contact system [x] Performance-aware animations [ ] Advanced project filtering [ ] More technical articles [ ] More GitHub integrations [ ] Additional performance improvements [ ] Expanded documentation 13 · Design Philosophy 

The project follows one principle:

Use technology because it solves a problem, not because everyone else is using it.

That is why this website deliberately avoids a framework.

Sometimes the best abstraction is:

HTML CSS JavaScript 

And yes, apparently three files are still legal in 2026.

14 · Contact 

🌐 Website 

https://www.here-is-leo.ir/

🐙 GitHub 

@here-is-leo

📧 Email 

ilyafarahanii@gmail.com

15 · License 

Released under the MIT License.

See LICENSE for the complete license.

BUILD • BREAK • LEARN • SECURE 

© 2026 Ilia Farahani



🇮🇷 نسخه فارسی 

here-is-leo.ir وب‌سایت شخصی و پورتفولیوی ایلیا فراهانی 

برنامه‌نویسی • امنیت سایبری • لینوکس • امنیت وب


🌐 مشاهده وب‌سایت

۰۱ · درباره پروژه 

here-is-leo.ir وب‌سایت شخصی، پورتفولیو و فضای آزمایش فنی من است.

این وب‌سایت کاملاً از صفر با استفاده از:

HTML CSS Vanilla JavaScript 

ساخته شده است.

بدون فریم‌ورک، بدون سیستم Build و بدون وابستگی‌های غیرضروری.

هدف اصلی پروژه ساخت یک وب‌سایت:

سریع، سبک، مدرن، قابل توسعه و کاملاً قابل کنترل

بوده است.

۰۲ · بخش‌های سایت 👤 معرفی 🧠 مهارت‌ها 💻 پروژه‌ها 🐙 ریپازیتوری‌های GitHub 📝 وبلاگ فنی 📄 رزومه 📬 تماس 

سایت کاملاً دوزبانه است:

🇮🇷 فارسی ↔ 🇬🇧 English

و از:

RTL ↔ LTR

پشتیبانی می‌کند.

۰۳ · قابلیت‌ها 🌐 سیستم دوزبانه فارسی و انگلیسی تغییر زبان بدون Reload پشتیبانی کامل RTL/LTR فونت مناسب هر زبان محتوای متمرکز در content.js 🎨 رابط کاربری Typewriter Animation Scroll Reveal Spotlight Parallax Animated Counters Transitionهای نرم طراحی Responsive 🌙 حالت تاریک و روشن 

سایت دارای Dark Mode و Light Mode است و انتخاب کاربر در:

localStorage 

ذخیره می‌شود.

⚡ عملکرد 

این پروژه عمداً از وابستگی‌های سنگین دوری می‌کند:

❌ React ❌ Vue ❌ Angular ❌ Webpack ❌ Vite 

و از قابلیت‌های Native مرورگر استفاده می‌کند.

۰۴ · معماری index.html │ ├── script.js │ │ │ ├── content.js │ ├── blog-data.js │ ├── Language Engine │ ├── Theme Engine │ └── Animation Engine │ └── style.css 

محتوا از منطق سایت جدا شده و محتوای فارسی و انگلیسی در یک ساختار مرکزی مدیریت می‌شود.

۰۵ · سیستم انیمیشن 

انیمیشن‌های سایت با استفاده از CSS و Web APIهای مرورگر ساخته شده‌اند.

Typewriter 

عنوان‌های Hero به‌صورت داینامیک نمایش داده می‌شوند.

Scroll Reveal 

با استفاده از:

IntersectionObserver 

المان‌ها هنگام ورود به Viewport انیمیشن می‌گیرند.

Interactive Cards 

کارت‌ها دارای افکت‌های:

Spotlight Parallax Hover 

هستند.

Performance Mode 

برای دستگاه‌های ضعیف‌تر، افکت‌های سنگین می‌توانند توسط:

isLowPerformance 

غیرفعال شوند.

۰۶ · ساختار پروژه here-is-leo.github.io/ │ ├── index.html ├── about.html ├── projects.html ├── repos.html ├── blog.html ├── resume.html ├── admin.html │ ├── content.js ├── blog-data.js ├── script.js ├── style.css │ ├── sitemap.xml ├── robots.txt │ ├── logo.png ├── avatar.jpg │ └── LICENSE ۰۷ · تکنولوژی‌ها بخش تکنولوژی ساختار HTML5 استایل CSS3 منطق Vanilla JavaScript فونت فارسی Vazirmatn فونت انگلیسی Inter انیمیشن CSS + Web APIs ذخیره تنظیمات LocalStorage فرم تماس Formspree هاست GitHub Pages ۰۸ · امنیت 

در طراحی پروژه به موارد امنیتی نیز توجه شده است.

حداقل وابستگی‌های خارجی میزبانی Static Honeypot ضد Spam عدم قرار دادن Secret در Frontend جداسازی سیستم مدیریت از سایت عمومی 

داشبورد admin.html به یک Backend جداگانه متصل است.

هر چیزی که به مرورگر ارسال شود، دیگر Secret نیست.

۰۹ · سئو 

سایت دارای:

Open Graph Twitter Cards Schema.org JSON-LD sitemap.xml robots.txt Semantic HTML Bilingual Metadata 

است.

۱۰ · اجرای محلی git clone https://github.com/here-is-leo/here-is-leo.github.io.git cd here-is-leo.github.io python3 -m http.server 8000 

سپس:

http://localhost:8000 

را باز کنید.

۱۱ · شخصی‌سازی تغییر محتوای سایت content.js افزودن پروژه projects.items افزودن مقاله blogPosts 

در:

blog-data.js تغییر ظاهر style.css ۱۲ · Roadmap [x] پورتفولیو شخصی [x] طراحی Responsive [x] Dark / Light Mode [x] فارسی / انگلیسی [x] RTL / LTR [x] نمایش پروژه‌ها [x] GitHub Repository Explorer [x] وبلاگ فنی [x] رزومه قابل چاپ [x] SEO [x] فرم تماس [x] انیمیشن‌های بهینه [ ] فیلتر پیشرفته پروژه‌ها [ ] مقالات فنی بیشتر [ ] امکانات بیشتر GitHub [ ] بهینه‌سازی بیشتر Performance [ ] مستندات گسترده‌تر ۱۳ · فلسفه طراحی 

اصل این پروژه ساده است:

از تکنولوژی برای حل مسئله استفاده کن، نه فقط چون بقیه استفاده می‌کنند.

به همین دلیل این وب‌سایت عمداً بدون Framework ساخته شده است.

گاهی تمام چیزی که لازم داری:

HTML + CSS + JavaScript 

است.

۱۴ · ارتباط 

🌐 Website

https://www.here-is-leo.ir/

🐙 GitHub

@here-is-leo

📧 Email

ilyafarahanii@gmail.com

۱۵ · License 

این پروژه تحت مجوز MIT منتشر شده است.

برای جزئیات کامل فایل LICENSE را مشاهده کنید.

BUILD • BREAK • LEARN • SECURE 

© 2026 Ilia Farahani

