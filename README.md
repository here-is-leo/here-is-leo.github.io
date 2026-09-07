<div align="center">

<img src="logo.png" alt="here-is-leo logo" width="96" />

# here-is-leo.ir

**صفحه شخصی ایلیا فراهانی (Ilia Farahani)**
برنامه‌نویس Python و C# · متخصص لینوکس و امنیت وب · Kali Linux Pentester

[![Website](https://img.shields.io/badge/website-here--is--leo.ir-5e6ad2?style=flat-square)](https://www.here-is-leo.ir/)
![Vanilla JS](https://img.shields.io/badge/stack-vanilla%20HTML%2FCSS%2FJS-f7df1e?style=flat-square&logo=javascript&logoColor=black)
![Bilingual](https://img.shields.io/badge/i18n-fa%20%2F%20en-blue?style=flat-square)
![No build step](https://img.shields.io/badge/build-none%20required-success?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)

[مشاهده سایت](https://www.here-is-leo.ir/) · [گزارش باگ](../../issues) · [پیشنهاد](../../issues)

</div>

---

## درباره پروژه

این ریپازیتوری کد منبع سایت شخصی من است؛ روی دامنه **[here-is-leo.ir](https://www.here-is-leo.ir/)** میزبانی شده و از طریق **GitHub Pages** سرو می‌شود. سایت به‌صورت کامل با **HTML, CSS و JavaScript خالص** ساخته شده — بدون فریمورک، بدون باندلر، بدون مرحله‌ی build. هدف این بود که یک سایت شخصی سریع، سبک و کاملاً قابل کنترل بسازم که همزمان تجربه‌ی کاربری مدرنی هم ارائه بدهد.

سایت دوزبانه است (فارسی/انگلیسی، با پشتیبانی کامل RTL/LTR) و شامل صفحاتی برای معرفی، مهارت‌ها، پروژه‌ها، رزومه، وبلاگ و لیست ریپوهای گیت‌هاب است.

## ✨ ویژگی‌ها

- **بدون وابستگی به فریمورک** — HTML/CSS/JS خالص، بدون npm build، مستقیماً روی GitHub Pages سرو می‌شود.
- **دوزبانه (فارسی/انگلیسی)** — تمام محتوا در [`content.js`](content.js) به‌صورت ساختاریافته برای هر دو زبان تعریف شده و سوییچ زبان real-time و بدون رفرش انجام می‌شود؛ جهت صفحه (RTL/LTR) و فونت (Vazirmatn / Inter) هم به‌طور خودکار تغییر می‌کند.
- **حالت تیره/روشن (Dark/Light Mode)** — با ذخیره‌ی ترجیح کاربر در `localStorage`.
- **رندر داینامیک محتوا** — بخش‌های Hero، آمار، مهارت‌ها، فوکوس فعلی، پروژه‌ها و تماس همگی از `content.js` توسط `script.js` رندر می‌شوند؛ یک مکانیزم **Fallback** هم داخل `index.html` تعبیه شده تا اگر رندر اصلی fail شد، نسخه‌ی ساده‌تری از محتوا نمایش داده شود.
- **جلوه‌های بصری سبک و بهینه**:
  - افکت تایپ‌رایتر (Typewriter) برای عنوان‌های هیرو
  - شمارنده‌ی انیمیشنی برای آمار (Animated Counters)
  - Reveal-on-scroll با `IntersectionObserver`
  - افکت Spotlight و پارالاکس روی کارت‌ها
  - تشخیص خودکار موبایل/دستگاه کم‌توان برای غیرفعال‌سازی افکت‌های سنگین (`isLowPerformance`)
- **فرم تماس واقعی** — با [Formspree](https://formspree.io/) به‌صورت بدون بک‌اند اختصاصی، همراه با honeypot ضدِ اسپم.
- **وبلاگ کامل** — مقالات با محتوای کامل در [`blog-data.js`](blog-data.js)، دسته‌بندی، تگ و صفحه‌بندی (Pagination).
- **سئو حرفه‌ای** — متادیتای Open Graph و Twitter Card، `schema.org` JSON-LD برای Person، `sitemap.xml` و `robots.txt`.
- **رزومه قابل چاپ** — صفحه‌ی [`resume.html`](resume.html) که با یک کلیک به PDF قابل چاپ/ذخیره است.

## 🗂 ساختار پروژه

```
here-is-leo.github.io/
├── index.html        # صفحه اصلی (هیرو، آمار، مهارت‌ها، پروژه‌ها، تماس)
├── about.html         # درباره من (بیوگرافی، تحصیلات، دوره‌ها)
├── projects.html      # لیست کامل پروژه‌ها
├── repos.html         # لیست ریپوهای گیت‌هاب
├── blog.html          # وبلاگ (لیست مقالات + صفحه‌بندی)
├── blog-data.js        # داده و متن کامل مقالات وبلاگ
├── resume.html        # رزومه قابل چاپ
├── admin.html          # داشبورد مدیریتی (متصل به سرویس بک‌اند جداگانه)
├── content.js          # منبع واحد محتوای دوزبانه (fa/en) کل سایت
├── script.js           # منطق رندر، تم، زبان، انیمیشن‌ها و فرم تماس
├── style.css           # تمام استایل‌ها (متغیرهای CSS برای تم/رنگ)
├── sitemap.xml / robots.txt
└── logo.png / avatar.png
```

> صفحه‌ی `admin.html` به یک سرویس بک‌اند مجزا (خارج از این ریپو) وصل می‌شود و صرفاً برای مدیریت داخلی سایت است.

## 🛠 تکنولوژی‌ها

| بخش | فناوری |
|---|---|
| ساختار و استایل | HTML5، CSS3 (Custom Properties برای تم) |
| منطق | JavaScript خالص (Vanilla, ES5+) — بدون فریمورک |
| فونت‌ها | [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) (فارسی) و [Inter](https://fonts.google.com/specimen/Inter) (انگلیسی) از Google Fonts |
| فرم تماس | [Formspree](https://formspree.io/) |
| میزبانی | GitHub Pages |

## 🚀 اجرای محلی

چون هیچ مرحله‌ی build ای وجود ندارد، کافیست ریپو را کلون کنید و با یک سرور استاتیک ساده باز کنید:

```bash
git clone https://github.com/here-is-leo/here-is-leo.github.io.git
cd here-is-leo.github.io

# با پایتون
python3 -m http.server 8000

# یا با Node.js
npx serve .
```

سپس آدرس `http://localhost:8000` را در مرورگر باز کنید.

> باز کردن مستقیم فایل `index.html` با پروتکل `file://` ممکن است به‌دلیل محدودیت‌های امنیتی مرورگر در بارگذاری اسکریپت‌ها با مشکل مواجه شود؛ استفاده از یک سرور محلی توصیه می‌شود.

## ✏️ شخصی‌سازی و افزودن محتوا

- **ویرایش متن‌های سایت (فارسی/انگلیسی)** → در [`content.js`](content.js)، هر بخش (hero، skills، projects، focus، contact و...) هم برای `fa` و هم `en` تعریف شده است.
- **افزودن پروژه جدید** → آبجکتی به آرایه‌ی `projects.items` در `content.js` (برای هر دو زبان) اضافه کنید: `icon`، `title`، `date`، `desc`، `tech` و `url`.
- **افزودن پست وبلاگ** → آبجکتی به آرایه‌ی `blogPosts` در [`blog-data.js`](blog-data.js) اضافه کنید.
- **تغییر رنگ‌بندی/تم** → متغیرهای CSS در ابتدای [`style.css`](style.css).

## 📬 راه‌های ارتباطی

- وب‌سایت: [www.here-is-leo.ir](https://www.here-is-leo.ir/)
- گیت‌هاب: [@here-is-leo](https://github.com/here-is-leo)
- ایمیل: ilyafarahanii@gmail.com

## 📄 لایسنس

این پروژه تحت مجوز [MIT](LICENSE) منتشر شده است — استفاده، کپی و تغییر آن با ذکر منبع آزاد است.

---

<div align="center">

<sub>English summary</sub>

**here-is-leo.ir** is the source code of my personal website, built with plain HTML/CSS/JavaScript (no framework, no build step) and hosted on GitHub Pages. It's fully bilingual (Persian/English, RTL/LTR aware), theme-switchable (dark/light), and includes a home page, about, projects, blog, résumé, and a GitHub repos listing. All copy lives in `content.js`, blog posts in `blog-data.js`, and the contact form is powered by Formspree. Clone it and serve it with any static file server — see above for details.

</div>
