// ============================================================
// CORE
// ============================================================
function getLang() { return localStorage.getItem("site-lang") || "fa"; }
function setLang(l) { localStorage.setItem("site-lang", l); }
function getTheme() { return localStorage.getItem("site-theme") || "dark"; }
function setTheme(t) { localStorage.setItem("site-theme", t); document.documentElement.dataset.theme = t; }

// ============================================================
// DETECT MOBILE
// ============================================================
function isMobile() {
  return window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

// ============================================================
// PERFORMANCE OPTIMIZATION — Windows Detection
// ============================================================
function isLowPerformance() {
  const isWindows = navigator.platform.toLowerCase().includes('win');
  const isSlow = window.navigator.hardwareConcurrency <= 4;
  return isWindows || isSlow;
}

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
}

// ============================================================
// ICON SYSTEM — بدون اموجی
// ============================================================
function iconSVG(value) {
  var key = String(value || "");
  var paths = {
    "python": "<path d='M12 3c-3 0-3 2-3 3v2h4v1H7c-3 0-3 2-3 4s1 3 3 3h2v-2H7c-1 0-1-2 0-2h5c2 0 3-1 3-3V6c0-2-1-3-3-3Z'/><path d='M15 21c3 0 3-2 3-3v-2h-4v-1h6c3 0 3-2 3-4s-1-3-3-3h-2v2h2c1 0 1 2 0 2h-5c-2 0-3 1-3 3v4c0 2 1 3 3 3Z'/>",
    "csharp": "<path d='M9 3 7 21M17 3l-2 18M4 9h16M3 15h16'/>",
    "linux": "<rect x='3' y='4' width='18' height='13' rx='2'/><path d='M8 21h8M12 17v4'/>",
    "kali": "<path d='M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z'/><path d='m8 12 2.5 2.5L16 9'/>",
    "html": "<circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18'/>",
    "js": "<path d='M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z'/><path d='M5 18a2 2 0 0 1 2-2h12M9 8h6M9 12h6'/>",
    "node": "<path d='m14 6 4 4M13 7a4 4 0 0 0-5 5l-5 5a2 2 0 1 0 3 3l5-5a4 4 0 0 0 5-5l-3 3-3-3 3-3Z'/>",
    "sql": "<rect x='3' y='4' width='18' height='6' rx='1'/><rect x='3' y='14' width='18' height='6' rx='1'/><path d='M7 7h.01M7 17h.01'/>",
    "wordpress": "<circle cx='12' cy='12' r='9'/><path d='M12 3v18M3 12h18'/>",
    "security": "<path d='M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z'/><path d='m8 12 2.5 2.5L16 9'/>",
    "book": "<path d='M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z'/><path d='M5 18a2 2 0 0 1 2-2h12'/>",
    "tools": "<path d='m14 6 4 4M13 7a4 4 0 0 0-5 5l-5 5a2 2 0 1 0 3 3l5-5a4 4 0 0 0 5-5l-3 3-3-3 3-3Z'/>",
    "opensource": "<path d='M12 21V10M12 15c-5 0-7-3-7-7 4 0 7 2 7 7ZM12 12c0-5 3-7 7-7 0 4-2 7-7 7Z'/>",
    "internship": "<circle cx='12' cy='12' r='9'/><circle cx='12' cy='12' r='5'/><circle cx='12' cy='12' r='1'/>",
    "email": "<rect x='3' y='5' width='18' height='14' rx='2'/><path d='m3 7 9 6 9-6'/>",
    "phone": "<rect x='7' y='2' width='10' height='20' rx='2'/><path d='M11 18h2'/>",
    "location": "<path d='M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z'/><circle cx='12' cy='10' r='2'/>",
    "github": "<path d='M4 13a8 8 0 1 1 16 0v4c0 1-1 2-2 2s-2-1-2-2v-2m-4 4v-5m-4 3v-3m-4 3v-3'/>"
  };
  var path = paths[key] || "<circle cx='12' cy='12' r='8'/><path d='M12 8v8M8 12h8'/>";
  return "<svg class='icon-svg' viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'>" + path + "</svg>";
}

function getIconFallback(key) {
  var map = {
    "python": "Py",
    "csharp": "C#",
    "linux": "Ln",
    "kali": "Kl",
    "html": "Ht",
    "js": "JS",
    "node": "Nd",
    "sql": "SQ",
    "wordpress": "WP",
    "security": "Sc",
    "book": "Bk",
    "tools": "Tl",
    "opensource": "OS",
    "internship": "In",
    "email": "Em",
    "phone": "Ph",
    "location": "Lc",
    "github": "Gh"
  };
  return map[key] || "•";
}

// ============================================================
// APPLY META
// ============================================================
function applyMeta(data, page) {
  document.documentElement.lang = data.lang;
  document.documentElement.dir = data.dir;
  document.body.dir = data.dir;
  const t = page === "about" ? data.meta.titleAbout : data.meta.titleHome;
  const d = page === "about" ? data.meta.descAbout : data.meta.descHome;
  document.title = t;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", d);
}

// ============================================================
// NAV
// ============================================================
function renderNav(data, page) {
  const homeHref = page === "about" ? "index.html" : "#home";
  document.querySelectorAll("[data-nav-home]").forEach(n => {
    n.textContent = data.nav.home;
    n.href = homeHref;
  });
  const map = {
    "data-nav-skills": ["skills", page === "about" ? "index.html#skills" : "#skills"],
    "data-nav-projects": ["projects", page === "about" ? "index.html#projects" : "#projects"],
    "data-nav-contact": ["contact", page === "about" ? "index.html#contact" : "#contact"],
    "data-nav-about": ["about", "about.html"],
    "data-nav-blog": ["blog", "blog.html"],
    "data-nav-repos": ["repos", "repos.html"]
  };
  Object.entries(map).forEach(([attr, [key, href]]) => {
    document.querySelectorAll("[" + attr + "]").forEach(n => { n.textContent = data.nav[key]; n.href = href; });
  });
  document.querySelectorAll("[data-lang-toggle]").forEach(b => {
    b.textContent = data.lang === "fa" ? "EN" : "fa";
  });
  document.querySelectorAll("[data-theme-toggle]").forEach(function(b) {
    var light = getTheme() === "light";
    b.setAttribute("aria-label", light ? "فعال‌سازی تم تاریک" : "فعال‌سازی تم روشن");
    b.querySelector(".theme-icon").textContent = light ? "☾" : "☼";
  });
}

// ============================================================
// TYPEWRITER
// ============================================================
var twInterval = null;

function startTypewriter(words, container) {
  if (twInterval) clearInterval(twInterval);
  var wordIdx = 0, charIdx = 0, deleting = false;
  var cursor = container.querySelector(".cursor");
  if (!cursor) {
    cursor = document.createElement("span");
    cursor.className = "cursor";
    container.appendChild(cursor);
  }

  function tick() {
    var word = words[wordIdx] || "";
    if (!deleting) {
      charIdx++;
      container.childNodes[0].textContent = word.substring(0, charIdx);
      if (charIdx >= word.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      twInterval = setTimeout(tick, 60 + Math.random() * 60);
    } else {
      charIdx--;
      container.childNodes[0].textContent = word.substring(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        charIdx = 0;
        setTimeout(tick, 300);
        return;
      }
      twInterval = setTimeout(tick, 30 + Math.random() * 30);
    }
  }
  tick();
}

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(function(el) {
    var target = parseInt(el.dataset.count);
    var suffix = el.dataset.suffix || "";
    var duration = 1500;
    var start = performance.now();
    function frame(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        if (e.target.id === "stats-section" || e.target.closest("#stats-section")) {
          animateCounters();
        }
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(function(el) { observer.observe(el); });
}

// ============================================================
// RIPPLE EFFECT
// ============================================================
function initRipple() {
  document.querySelectorAll(".btn, .donate-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      var ripple = document.createElement("span");
      ripple.className = "ripple";
      var rect = this.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var x = e.clientX - rect.left - size / 2;
      var y = e.clientY - rect.top - size / 2;
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      this.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 800);
    });
  });
}

function initSpotlights() {
  if (isMobile()) return;
  
  var cards = document.querySelectorAll(".skill-card,.focus-card,.project-card,.contact-card,.stat-card");
  cards.forEach(function(card) {
    card.addEventListener("pointermove", function(e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
}

function initParallax() {
  var hero = document.querySelector(".hero-text");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches || isMobile()) return;
  var ticking = false;
  window.addEventListener("scroll", function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var y = Math.min(window.scrollY, 520);
      hero.style.transform = "translateY(" + (y * 0.08) + "px) scale(" + (1 - y * 0.00008) + ")";
      hero.style.opacity = String(1 - y / 700);
      ticking = false;
    });
  }, { passive: true });
}

function initCinematicMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (isMobile()) return;
  if (isLowPerformance()) return;
  
  document.querySelectorAll(".particle-field,.cursor-glow").forEach(function(node) { node.remove(); });
  
  var field = document.createElement("div");
  field.className = "particle-field";
  for (var i = 0; i < 28; i++) {
    var p = document.createElement("span");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = (60 + Math.random() * 45) + "%";
    p.style.setProperty("--duration", (9 + Math.random() * 13) + "s");
    p.style.setProperty("--delay", (-Math.random() * 14) + "s");
    p.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    field.appendChild(p);
  }
  document.body.appendChild(field);

  var glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  var x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  document.addEventListener("pointermove", function(e) {
    tx = e.clientX; ty = e.clientY;
    document.documentElement.style.setProperty("--cursor-x", tx + "px");
    document.documentElement.style.setProperty("--cursor-y", ty + "px");
  });
  function follow() {
    x += (tx - x) * .16; y += (ty - y) * .16;
    glow.style.left = x + "px"; glow.style.top = y + "px";
    requestAnimationFrame(follow);
  }
  follow();
  
  document.querySelectorAll("a,button,.project-card,.skill-card,.focus-card").forEach(function(el) {
    el.addEventListener("pointerenter", function() { glow.classList.add("is-hover"); });
    el.addEventListener("pointerleave", function() { glow.classList.remove("is-hover"); });
  });
  
  document.querySelectorAll(".project-card,.skill-card,.focus-card,.contact-card").forEach(function(card) {
    card.addEventListener("pointermove", function(e) {
      var r = card.getBoundingClientRect();
      var ry = ((e.clientX - r.left) / r.width - .5) * 5;
      var rx = ((e.clientY - r.top) / r.height - .5) * -5;
      card.style.transform = "perspective(700px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-5px)";
    });
    card.addEventListener("pointerleave", function() { card.style.transform = ""; });
  });
}

function initAmbientOptimization() {
  if (isLowPerformance()) {
    document.querySelectorAll('.orb').forEach(orb => {
      orb.style.animationDuration = '30s';
      orb.style.filter = 'blur(80px)';
    });
  }
}

// ============================================================
// RENDER ICON — بدون اموجی
// ============================================================
function renderIcon(key, className) {
  if (isMobile()) {
    return `<span class="${className || 'icon'} icon-fallback">${getIconFallback(key)}</span>`;
  }
  return `<span class="${className || 'icon'}">${iconSVG(key)}</span>`;
}

// ============================================================
// RENDER HOME
// ============================================================
function renderHome(data) {
  // Hero
  var hero = document.getElementById("hero-content");
  if (hero) {
    hero.innerHTML = "";
    hero.appendChild(el("span", "eyebrow", "<span class=\"pulse-dot\"></span> " + data.hero.eyebrow));
    var h1 = el("h1", null, data.hero.title1 + " <span class=\"accent-name\">" + data.hero.name + "</span> " + data.hero.title2);
    hero.appendChild(h1);
    var tw = el("div", "typewriter", "<span></span>");
    hero.appendChild(tw);
    hero.appendChild(el("p", null, data.hero.subtitle));
    var cta = el("div", "hero-cta");
    var c1 = el("a", "btn btn-primary", data.hero.cta1);
    c1.href = "#projects";
    var c2 = el("a", "btn btn-secondary", data.hero.cta2);
    c2.href = "about.html";
    cta.append(c1, c2);
    hero.appendChild(cta);
    setTimeout(function() { startTypewriter(data.hero.typewriter, tw); }, 600);
  }
  
  var avatar = document.getElementById("hero-avatar");
  if (avatar) avatar.innerHTML = "<img src=\"logo.png\" alt=\"Ilia Farahani logo\"><span>" + data.hero.name.trim().charAt(0) + "</span>";
  if (avatar) avatar.querySelector("span").style.display = "none";

  // Stats
  var statsGrid = document.getElementById("stats-grid");
  if (statsGrid) {
    statsGrid.innerHTML = "";
    data.stats.forEach(function(s, i) {
      var card = el("div", "stat-card reveal reveal-delay-" + i, "");
      card.innerHTML = "<div class=\"number\" data-count=\"" + s.number + "\" data-suffix=\"" + s.suffix + "\">0" + s.suffix + "</div><div class=\"label\">" + s.label + "</div>";
      statsGrid.appendChild(card);
    });
  }

  // Skills
  var skillsTag = document.getElementById("skills-tag");
  if (skillsTag) skillsTag.innerHTML = "<span class=\"dot\"></span> " + data.skills.tag;
  var skillsTitle = document.getElementById("skills-title");
  if (skillsTitle) skillsTitle.textContent = data.skills.title;
  var skillsSub = document.getElementById("skills-subtitle");
  if (skillsSub) skillsSub.textContent = data.skills.subtitle;
  var skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = "";
    data.skills.items.forEach(function(s, i) {
      var card = el("div", "skill-card reveal reveal-delay-" + (i % 4));
      var level = s.level || 0;
      card.innerHTML = `
        ${renderIcon(s.icon, "icon")}
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="skill-level">
          <div class="bar" style="--level: ${level}%;" data-level="${level}"></div>
        </div>
        <div class="level-label">
          <span>مبتدی</span>
          <span>${level}%</span>
          <span>حرفه‌ای</span>
        </div>
      `;
      skillsGrid.appendChild(card);
    });
    
    setTimeout(function() {
      document.querySelectorAll('.skill-level .bar').forEach(function(bar) {
        bar.classList.add('animate');
      });
    }, 500);
  }

  // Focus
  var focusTag = document.getElementById("focus-tag");
  if (focusTag) focusTag.innerHTML = "<span class=\"dot\"></span> " + data.focus.tag;
  var focusTitle = document.getElementById("focus-title");
  if (focusTitle) focusTitle.textContent = data.focus.title;
  var focusSub = document.getElementById("focus-subtitle");
  if (focusSub) focusSub.textContent = data.focus.subtitle;
  var focusGrid = document.getElementById("focus-grid");
  if (focusGrid) {
    focusGrid.innerHTML = "";
    data.focus.items.forEach(function(f, i) {
      var card = el("div", "focus-card reveal reveal-delay-" + (i % 4));
      card.innerHTML = `
        ${renderIcon(f.icon, "icon")}
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      `;
      focusGrid.appendChild(card);
    });
  }

  // Projects
  var projTag = document.getElementById("projects-tag");
  if (projTag) projTag.innerHTML = "<span class=\"dot\"></span> " + data.projects.tag;
  var projTitle = document.getElementById("projects-title");
  if (projTitle) projTitle.textContent = data.projects.title;
  var projSub = document.getElementById("projects-subtitle");
  if (projSub) projSub.textContent = data.projects.subtitle;
  var projGrid = document.getElementById("projects-grid");
  if (projGrid) {
    projGrid.innerHTML = "";
    data.projects.items.forEach(function(proj, i) {
      var card = el("div", "project-card reveal reveal-delay-" + (i % 3));
      var head = el("div", "project-head");
      head.append(el("h3", null, proj.title));
      if (proj.date) head.append(el("span", "project-date", proj.date));
      var desc = el("p", null, proj.desc);
      var ul = el("ul");
      proj.bullets.forEach(function(b) { ul.appendChild(el("li", null, b)); });
      var tags = el("div", "tech-tags");
      proj.tech.forEach(function(t) { tags.appendChild(el("span", null, t)); });
      var link = el("a", "project-link", "GitHub ↗");
      link.href = proj.href; link.target = "_blank"; link.rel = "noopener";
      card.append(head, desc, ul, tags, link);
      projGrid.appendChild(card);
    });
  }

  // Donation banner
  var donationBadge = document.getElementById("donation-badge");
  if (donationBadge) donationBadge.innerHTML = "<span class=\"badge-dot\"></span> " + data.donation.badge;
  var donationTitle = document.getElementById("donation-title");
  if (donationTitle) donationTitle.innerHTML = data.donation.title1 + "<br><span class=\"highlight\">" + data.donation.title2 + "</span>";
  var donationSub = document.getElementById("donation-sub");
  if (donationSub) donationSub.innerHTML = data.donation.sub;
  var donateBtn = document.getElementById("donateBtn");
  if (donateBtn) {
    donateBtn.innerHTML = `<span class="icon">${renderIcon("coffee", "icon")}</span><span class="btn-text">${data.donation.btnText}</span>`;
  }
  var donateMsg = document.getElementById("donate-message");
  if (donateMsg) donateMsg.innerHTML = `<span class="emoji">${renderIcon("target", "icon")}</span><span>${data.donation.msg}</span>`;

  // About preview
  var apTitle = document.getElementById("about-preview-title");
  var apDesc = document.getElementById("about-preview-desc");
  var apCta = document.getElementById("about-preview-cta");
  if (apTitle) apTitle.textContent = data.aboutPreview.title;
  if (apDesc) apDesc.textContent = data.aboutPreview.desc;
  if (apCta) apCta.textContent = data.aboutPreview.cta;

  // Contact
  var contactTag = document.getElementById("contact-tag");
  if (contactTag) contactTag.innerHTML = "<span class=\"dot\"></span> " + data.contact.tag;
  var contactTitle = document.getElementById("contact-title");
  if (contactTitle) contactTitle.textContent = data.contact.title;
  var contactSub = document.getElementById("contact-subtitle");
  if (contactSub) contactSub.textContent = data.contact.subtitle;
  var contactGrid = document.getElementById("contact-grid");
  if (contactGrid) {
    contactGrid.innerHTML = "";
    data.contact.items.forEach(function(c, i) {
      var wrapper = el(c.href ? "a" : "div", "contact-card reveal reveal-delay-" + (i % 4));
      if (c.href) {
        wrapper.href = c.href;
        if (c.href.startsWith("http")) { wrapper.target = "_blank"; wrapper.rel = "noopener"; }
      }
      var text = el("div");
      text.append(el("div", "label", c.label), el("div", "value", c.value));
      wrapper.innerHTML = `
        ${renderIcon(c.icon, "icon")}
        ${text.outerHTML}
      `;
      contactGrid.appendChild(wrapper);
    });
  }

  var footer = document.getElementById("footer-text");
  if (footer) footer.textContent = data.footer;
}

// ============================================================
// RENDER ABOUT
// ============================================================
function renderAbout(data) {
  var heroTitle = document.getElementById("about-hero-title");
  var heroSub = document.getElementById("about-hero-subtitle");
  var avatar = document.getElementById("hero-avatar");
  if (heroTitle) heroTitle.textContent = data.about.heroTitle;
  if (heroSub) heroSub.textContent = data.about.heroSubtitle;
  if (avatar) avatar.innerHTML = "<img src=\"logo.png\" alt=\"Ilia Farahani logo\"><span>" + data.hero.name.trim().charAt(0) + "</span>";
  if (avatar) avatar.querySelector("span").style.display = "none";

  var introTag = document.getElementById("intro-tag");
  var introText = document.getElementById("intro-text");
  if (introTag) introTag.innerHTML = "<span class=\"dot\"></span> " + data.about.introTag;
  if (introText) introText.textContent = data.about.intro;

  var eduTag = document.getElementById("edu-tag");
  var eduTitle = document.getElementById("edu-title");
  if (eduTag) eduTag.innerHTML = "<span class=\"dot\"></span> " + data.about.eduTag;
  if (eduTitle) eduTitle.textContent = data.about.eduTitle;
  var timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.innerHTML = "";
    data.about.timeline.forEach(function(t, i) {
      var item = el("div", "timeline-item reveal reveal-delay-" + (i % 3));
      item.append(el("h3", null, t.title), el("span", "sub", t.sub), el("p", null, t.desc));
      timeline.appendChild(item);
    });
  }

  var skillsTag = document.getElementById("about-skills-tag");
  var skillsTitle = document.getElementById("about-skills-title");
  if (skillsTag) skillsTag.innerHTML = "<span class=\"dot\"></span> " + data.about.skillsTag;
  if (skillsTitle) skillsTitle.textContent = data.about.skillsTitle;
  var skillsTags = document.getElementById("about-skills-tags");
  if (skillsTags) {
    skillsTags.innerHTML = "";
    data.about.skillsList.forEach(function(s) { skillsTags.appendChild(el("span", null, s)); });
  }

  var langTag = document.getElementById("lang-tag");
  var langTitle = document.getElementById("lang-title");
  if (langTag) langTag.innerHTML = "<span class=\"dot\"></span> " + data.about.langTag;
  if (langTitle) langTitle.textContent = data.about.langTitle;
  var langTags = document.getElementById("lang-tags");
  if (langTags) {
    langTags.innerHTML = "";
    data.about.langList.forEach(function(s) { langTags.appendChild(el("span", null, s)); });
  }

  var githubTag = document.getElementById("github-tag");
  var githubText = document.getElementById("github-text");
  var githubLink = document.getElementById("github-link");
  if (githubTag) githubTag.innerHTML = "<span class=\"dot\"></span> " + data.about.githubTag;
  if (githubText) githubText.textContent = data.about.githubText;
  if (githubLink) {
    githubLink.textContent = data.about.githubLinkText;
    githubLink.href = "https://" + data.about.githubLinkText;
  }

  var footer = document.getElementById("footer-text");
  if (footer) footer.textContent = data.footer;
}

// ============================================================
// CONTACT FORM — با Formspree
// ============================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    
    // نمایش وضعیت در حال ارسال
    status.style.display = 'block';
    status.style.color = '#b8bfff';
    status.textContent = '⏳ در حال ارسال پیام...';
    submitBtn.disabled = true;
    btnText.textContent = 'در حال ارسال...';
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        status.style.color = '#00FF41';
        status.textContent = '✅ پیام شما با موفقیت ارسال شد!';
        form.reset();
        btnText.textContent = 'ارسال پیام';
        submitBtn.disabled = false;
        
        setTimeout(() => {
          status.style.display = 'none';
        }, 5000);
      } else {
        throw new Error('خطا در ارسال پیام');
      }
    } catch (error) {
      status.style.color = '#ff6b6b';
      status.textContent = '❌ خطا در ارسال پیام. لطفاً دوباره تلاش کنید.';
      btnText.textContent = 'ارسال پیام';
      submitBtn.disabled = false;
    }
  });
}

// ============================================================
// RENDER
// ============================================================
function render(page) {
  var lang = getLang();
  var data = SITE[lang];
  applyMeta(data, page);
  renderNav(data, page);
  if (page === "about") renderAbout(data);
  else renderHome(data);
  setTimeout(function() {
    initReveal();
    initRipple();
    initSpotlights();
    initParallax();
    initCinematicMotion();
    initAmbientOptimization();
    var statsSec = document.getElementById("stats-section");
    if (statsSec && statsSec.getBoundingClientRect().top < window.innerHeight) {
      animateCounters();
    }
  }, 100);
}

// ============================================================
// INIT
// ============================================================
function initLangToggle(page) {
  document.querySelectorAll("[data-lang-toggle]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var next = getLang() === "fa" ? "en" : "fa";
      setLang(next);
      render(page);
    });
  });
}

function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function() { links.classList.toggle("open"); });
  links.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() { links.classList.remove("open"); });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var page = document.body.dataset.page || "home";
  setTheme(getTheme());
  render(page);
  initLangToggle(page);
  initNavToggle();
  initContactForm();
  document.querySelectorAll("[data-theme-toggle]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      setTheme(getTheme() === "dark" ? "light" : "dark");
      render(page);
    });
  });
});
