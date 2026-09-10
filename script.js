// ============================================================
// CORE
// ============================================================
function getLang() {
  try { return localStorage.getItem("site-lang") || "fa"; }
  catch (e) { return "fa"; }
}
function setLang(l) {
  try { localStorage.setItem("site-lang", l); } catch (e) {}
}
function getTheme() {
  try { return localStorage.getItem("site-theme") || "dark"; }
  catch (e) { return "dark"; }
}
function setTheme(t) {
  try { localStorage.setItem("site-theme", t); } catch (e) {}
  document.documentElement.dataset.theme = t;
}

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

// small helper: run a render step in isolation so one broken
// section can never take down the whole page (this was the
// root cause of the empty-page bug — see renderHome projects loop)
function safe(label, fn) {
  try {
    fn();
  } catch (err) {
    console.error("❌ render step failed: " + label, err);
  }
}

// ============================================================
// ICON SYSTEM
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
    "github": "<path d='M4 13a8 8 0 1 1 16 0v4c0 1-1 2-2 2s-2-1-2-2v-2m-4 4v-5m-4 3v-3m-4 3v-3'/>",
    "coffee": "<path d='M4 9h13a3 3 0 0 1 0 6h-1M4 9v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9M4 9V6h13v3'/>",
    "target": "<circle cx='12' cy='12' r='9'/><circle cx='12' cy='12' r='5'/><circle cx='12' cy='12' r='1'/>"
  };
  var path = paths[key] || "<circle cx='12' cy='12' r='8'/><path d='M12 8v8M8 12h8'/>";
  return "<svg class='icon-svg' viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'>" + path + "</svg>";
}

function getIconFallback(key) {
  var map = {
    "python": "Py", "csharp": "C#", "linux": "Ln", "kali": "Kl", "html": "Ht",
    "js": "JS", "node": "Nd", "sql": "SQ", "wordpress": "WP", "security": "Sc",
    "book": "Bk", "tools": "Tl", "opensource": "OS", "internship": "In",
    "email": "Em", "phone": "Ph", "location": "Lc", "github": "Gh",
    "coffee": "☕", "target": "🎯"
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
  const section = data[page];
  const t = page === "about" ? data.meta.titleAbout : (section && section.title ? section.title + " | " + data.hero.name : data.meta.titleHome);
  const d = page === "about" ? data.meta.descAbout : (section && section.subtitle ? section.subtitle : data.meta.descHome);
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
    "data-nav-projects": ["projects", "projects.html"],
    "data-nav-contact": ["contact", page === "about" ? "index.html#contact" : "#contact"],
    "data-nav-about": ["about", "about.html"],
    "data-nav-blog": ["blog", "blog.html"],
    "data-nav-repos": ["repos", "repos.html"],
    "data-nav-resume": ["resume", "resume.html"]
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
    var icon = b.querySelector(".theme-icon");
    if (icon) icon.textContent = light ? "☾" : "☼";
  });
}

// ============================================================
// TYPEWRITER
// ============================================================
var twInterval = null;

function startTypewriter(words, container) {
  if (!container || !words || !words.length) return;
  if (twInterval) clearTimeout(twInterval);

  var textNode = container.childNodes[0];
  if (!textNode || textNode.nodeType !== Node.TEXT_NODE) {
    textNode = document.createTextNode("");
    container.insertBefore(textNode, container.firstChild);
  }
  var cursor = container.querySelector(".cursor");
  if (!cursor) {
    cursor = document.createElement("span");
    cursor.className = "cursor";
    container.appendChild(cursor);
  }

  var wordIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    var word = words[wordIdx] || "";
    if (!deleting) {
      charIdx++;
      textNode.textContent = word.substring(0, charIdx);
      if (charIdx >= word.length) {
        deleting = true;
        twInterval = setTimeout(tick, 1800);
        return;
      }
      twInterval = setTimeout(tick, 60 + Math.random() * 60);
    } else {
      charIdx--;
      textNode.textContent = word.substring(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        charIdx = 0;
        twInterval = setTimeout(tick, 300);
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
  document.querySelectorAll("[data-count]").forEach(function(node) {
    var target = parseInt(node.dataset.count, 10) || 0;
    var suffix = node.dataset.suffix || "";
    var duration = 1500;
    var start = performance.now();
    function frame(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

// ============================================================
// SPLIT-TEXT TITLES — words fly in on scroll
// ============================================================
function initSplitTitles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var heads = document.querySelectorAll(".section-head h2, .about-hero h1");
  heads.forEach(function(h) {
    if (h.dataset.split === "done" || !h.textContent.trim()) return;
    h.dataset.split = "done";
    var words = h.textContent.split(/\s+/).filter(Boolean);
    h.innerHTML = words.map(function(w, i) {
      return '<span class="split-word" style="transition-delay:' + (i * 0.045) + 's">' + w + '</span>';
    }).join(' ');
    h.classList.add("split-ready");
  });

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".split-ready").forEach(function(h) { h.classList.add("split-in"); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add("split-in");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".split-ready:not(.split-in)").forEach(function(h) { obs.observe(h); });
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function(node) { node.classList.add("visible"); });
    animateCounters();
    return;
  }
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

  document.querySelectorAll(".reveal").forEach(function(node) { observer.observe(node); });
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
      var x = (e.clientX || rect.left) - rect.left - size / 2;
      var y = (e.clientY || rect.top) - rect.top - size / 2;
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

// ============================================================
// CINEMATIC MOTION — Premium Cursor & Interactive Effects
// ============================================================
function initCinematicMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (isMobile()) return;
  if (isLowPerformance()) return;

  // Remove existing elements
  document.querySelectorAll(".particle-field,.cursor-glow,.custom-cursor,.cursor-trail").forEach(function(node) { node.remove(); });

  // ---- PARTICLES ----
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

  // ---- CUSTOM CURSOR ----
  document.body.classList.add("has-custom-cursor");
  var cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.innerHTML = '<span class="custom-cursor-ring"></span><span class="custom-cursor-dot"></span>';
  document.body.appendChild(cursor);
  var ring = cursor.querySelector(".custom-cursor-ring");
  var dot = cursor.querySelector(".custom-cursor-dot");

  // ---- GLOW ----
  var glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  // ---- TRAIL ----
  var TRAIL_COUNT = 6;
  var trailEls = [];
  var trailContainer = document.createElement("div");
  trailContainer.className = "cursor-trail";
  for (var t = 0; t < TRAIL_COUNT; t++) {
    var tEl = document.createElement("span");
    tEl.className = "cursor-trail-dot";
    tEl.style.setProperty("--i", t);
    trailContainer.appendChild(tEl);
    trailEls.push({ el: tEl, x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }
  document.body.appendChild(trailContainer);

  var px = window.innerWidth / 2, py = window.innerHeight / 2;
  var rx = px, ry = py;
  var gx = px, gy = py;
  var visible = false;

  // ---- POINTER MOVE ----
  document.addEventListener("pointermove", function(e) {
    px = e.clientX;
    py = e.clientY;
    document.documentElement.style.setProperty("--cursor-x", px + "px");
    document.documentElement.style.setProperty("--cursor-y", py + "px");

    if (!visible) {
      visible = true;
      cursor.classList.add("is-visible");
      glow.classList.add("is-visible");
      trailContainer.classList.add("is-visible");
    }

    // Dot tracks 1:1 (no lag)
    dot.style.transform = "translate3d(" + px + "px," + py + "px,0) translate(-50%,-50%)";
  });

  document.addEventListener("pointerleave", function() {
    visible = false;
    cursor.classList.remove("is-visible");
    glow.classList.remove("is-visible");
    trailContainer.classList.remove("is-visible");
  });

  // ---- FOLLOW LOOP ----
  function follow() {
    rx += (px - rx) * 0.10;
    ry += (py - ry) * 0.10;
    gx += (px - gx) * 0.045;
    gy += (py - gy) * 0.045;

    ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0) translate(-50%,-50%)";
    glow.style.left = gx + "px";
    glow.style.top = gy + "px";

    // Each trail dot chases the one before it, staggered
    var leadX = px, leadY = py;
    for (var i = 0; i < trailEls.length; i++) {
      var node = trailEls[i];
      node.x += (leadX - node.x) * 0.30;
      node.y += (leadY - node.y) * 0.30;
      node.el.style.transform = "translate3d(" + node.x + "px," + node.y + "px,0) translate(-50%,-50%)";
      leadX = node.x;
      leadY = node.y;
    }

    requestAnimationFrame(follow);
  }
  follow();

  // ---- HOVER DETECTION ----
  var interactiveSelectors = [
    "a", "button", ".btn", ".project-card", ".skill-card", ".focus-card",
    ".contact-card", "input", "textarea", ".repo-card", ".blog-post-card",
    ".timeline-item", ".nav-links a", ".brand", ".donate-btn", ".project-link"
  ].join(",");

  document.querySelectorAll(interactiveSelectors).forEach(function(node) {
    node.addEventListener("pointerenter", function() {
      glow.classList.add("is-hover");
      cursor.classList.add("is-hover");
    });
    node.addEventListener("pointerleave", function() {
      glow.classList.remove("is-hover");
      cursor.classList.remove("is-hover");
    });
  });

  // ---- TEXT HOVER DETECTION (reading cursor) ----
  var textSelectors = "p, h1, h2, h3, li, .form-field input, .form-field textarea";
  document.querySelectorAll(textSelectors).forEach(function(node) {
    node.addEventListener("pointerenter", function() {
      cursor.classList.add("is-text");
    });
    node.addEventListener("pointerleave", function() {
      cursor.classList.remove("is-text");
    });
  });

  // ---- ACTIVE STATE ----
  document.querySelectorAll("a, button, .btn, .donate-btn").forEach(function(node) {
    node.addEventListener("pointerdown", function() {
      cursor.classList.add("is-active");
    });
    node.addEventListener("pointerup", function() {
      cursor.classList.remove("is-active");
    });
  });

  // ---- MAGNETIC BUTTONS ----
  document.querySelectorAll(".btn, .donate-btn").forEach(function(node) {
    node.classList.add("is-magnetic");
    node.addEventListener("pointermove", function(e) {
      var r = node.getBoundingClientRect();
      var mx = (e.clientX - r.left - r.width / 2) * 0.25;
      var my = (e.clientY - r.top - r.height / 2) * 0.35;
      node.style.transform = "translate3d(" + mx + "px," + my + "px,0)";
    });
    node.addEventListener("pointerleave", function() {
      node.style.transform = "translate3d(0,0,0)";
    });
  });

  // ---- 3D TILT ON CARDS (+ subtle magnetic drift) ----
  var tiltableCards = document.querySelectorAll(".project-card,.skill-card,.focus-card,.contact-card");
  tiltableCards.forEach(function(card) {
    var cx = 0, cy = 0;
    var curX = 0, curY = 0;
    var mx = 0, my = 0;
    var curMx = 0, curMy = 0;
    var raf = null;

    function tick() {
      curX += (cx - curX) * 0.12;
      curY += (cy - curY) * 0.12;
      curMx += (mx - curMx) * 0.12;
      curMy += (my - curMy) * 0.12;

      card.style.transform = "perspective(800px) rotateX(" + curY + "deg) rotateY(" + curX + "deg) translate3d(" + curMx + "px," + (curMy - 5) + "px,0)";

      if (Math.abs(cx - curX) > 0.01 || Math.abs(cy - curY) > 0.01 || Math.abs(mx - curMx) > 0.05 || Math.abs(my - curMy) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }

    card.addEventListener("pointermove", function(e) {
      var r = card.getBoundingClientRect();
      cx = ((e.clientX - r.left) / r.width - 0.5) * 4;
      cy = ((e.clientY - r.top) / r.height - 0.5) * -4;
      mx = ((e.clientX - r.left) / r.width - 0.5) * 10;
      my = ((e.clientY - r.top) / r.height - 0.5) * 10;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    card.addEventListener("pointerleave", function() {
      cx = 0;
      cy = 0;
      mx = 0;
      my = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    });
  });
}

// ============================================================
// AMBIENT OPTIMIZATION
// ============================================================
function initAmbientOptimization() {
  if (isLowPerformance()) {
    document.querySelectorAll('.orb').forEach(function(orb) {
      orb.style.animationDuration = '30s';
      orb.style.filter = 'blur(80px)';
    });
  }
}

// ============================================================
// RENDER ICON
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
  if (!data) {
    console.error('❌ renderHome: data is undefined!');
    return;
  }

  // ====== HERO ======
  safe("hero", function() {
    var hero = document.getElementById("hero-content");
    if (!hero) return;
    hero.innerHTML = "";
    hero.style.display = "block";
    hero.style.width = "100%";
    hero.style.maxWidth = "100%";

    hero.appendChild(el("span", "eyebrow", "<span class=\"pulse-dot\"></span> " + data.hero.eyebrow));
    hero.appendChild(el("h1", null, data.hero.title1 + " <span class=\"accent-name\">" + data.hero.name + "</span> " + data.hero.title2));
    var tw = el("div", "typewriter", "<span></span>");
    hero.appendChild(tw);
    hero.appendChild(el("p", null, data.hero.subtitle));
    var cta = el("div", "hero-cta");
    var c1 = el("a", "btn btn-primary", data.hero.cta1);
    c1.href = "projects.html";
    var c2 = el("a", "btn btn-secondary", data.hero.cta2);
    c2.href = "about.html";
    cta.append(c1, c2);
    hero.appendChild(cta);

    setTimeout(function() { startTypewriter(data.hero.typewriter, tw); }, 600);
  });

  // ====== AVATAR ======
  safe("avatar", function() {
    var avatar = document.getElementById("hero-avatar");
    if (!avatar) return;
    avatar.innerHTML = "<img src=\"logo.png\" alt=\"Ilia Farahani profile logo\" decoding=\"async\"><span>" + data.hero.name.trim().charAt(0) + "</span>";
    var span = avatar.querySelector("span");
    if (span) span.style.display = "none";
  });

  // ====== STATS ======
  safe("stats", function() {
    var statsGrid = document.getElementById("stats-grid");
    if (!statsGrid || !data.stats) return;
    statsGrid.innerHTML = "";
    data.stats.forEach(function(s, i) {
      var card = el("div", "stat-card reveal reveal-delay-" + i, "");
      card.innerHTML = "<div class=\"number\" data-count=\"" + s.number + "\" data-suffix=\"" + s.suffix + "\">0" + s.suffix + "</div><div class=\"label\">" + s.label + "</div>";
      statsGrid.appendChild(card);
    });
  });

  // ====== SKILLS ======
  safe("skills", function() {
    if (!data.skills) return;
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
            <div class="bar" style="width: ${level}%;" data-level="${level}"></div>
          </div>
          <div class="level-label">
            <span>${data.lang === "fa" ? "مبتدی" : "Beginner"}</span>
            <span>${level}%</span>
            <span>${data.lang === "fa" ? "حرفه‌ای" : "Advanced"}</span>
          </div>
        `;
        skillsGrid.appendChild(card);
      });
    }
  });

  // ====== FOCUS ======
  safe("focus", function() {
    if (!data.focus) return;
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
  });

  // ====== PROJECTS ======
  safe("projects", function() {
    if (!data.projects) return;
    var projTag = document.getElementById("projects-tag");
    if (projTag) projTag.innerHTML = "<span class=\"dot\"></span> " + data.projects.tag;
    var projTitle = document.getElementById("projects-title");
    if (projTitle) projTitle.textContent = data.projects.title;
    var projSub = document.getElementById("projects-subtitle");
    if (projSub) projSub.textContent = data.projects.subtitle;
    var projGrid = document.getElementById("projects-grid");
    if (projGrid) {
      projGrid.innerHTML = "";
      data.projects.items.forEach(function(proj) {
        var card = el("div", "project-card reveal reveal-delay-" + 0);
        var head = el("div", "project-head");
        
        var titleLink = el("a", "project-title-link", (proj.icon ? proj.icon + " " : "") + proj.title);
        titleLink.href = "projects.html";
        titleLink.style.textDecoration = "none";
        titleLink.style.color = "inherit";
        head.appendChild(titleLink);
        
        if (proj.date) head.append(el("span", "project-date", proj.date));
        var desc = el("p", null, proj.desc);
        
        if (proj.bullets && proj.bullets.length > 0) {
          var bulletList = el("ul", "project-bullets");
          proj.bullets.forEach(function(bullet) {
            var li = el("li", null, bullet);
            bulletList.appendChild(li);
          });
          card.appendChild(bulletList);
        }
        
        var tags = el("div", "tech-tags");
        (proj.tech || []).forEach(function(t) { tags.appendChild(el("span", null, t)); });
        card.append(head, desc, tags);
        
        if (proj.url || proj.href) {
          var link = el("a", "project-link", "GitHub ↗");
          link.href = proj.url || proj.href;
          link.target = "_blank";
          link.rel = "noopener";
          card.appendChild(link);
        }
        projGrid.appendChild(card);
      });
    }
  });

  // ====== DONATION ======
  safe("donation", function() {
    if (!data.donation) return;
    var donationBadge = document.getElementById("donation-badge");
    if (donationBadge) donationBadge.innerHTML = "<span class=\"badge-dot\"></span> " + data.donation.badge;
    var donationTitle = document.getElementById("donation-title");
    if (donationTitle) donationTitle.innerHTML = data.donation.title1 + "<br><span class=\"highlight\">" + data.donation.title2 + "</span>";
    var donationSub = document.getElementById("donation-sub");
    if (donationSub) donationSub.innerHTML = data.donation.sub;
    var donateBtn = document.getElementById("donateBtn");
    if (donateBtn) donateBtn.innerHTML = `<span class="icon">${renderIcon("coffee", "icon")}</span><span class="btn-text">${data.donation.btnText}</span>`;
    var donateMsg = document.getElementById("donate-message");
    if (donateMsg) donateMsg.innerHTML = `<span class="emoji">${renderIcon("target", "icon")}</span><span>${data.donation.msg}</span>`;
  });

  // ====== ABOUT PREVIEW ======
  safe("aboutPreview", function() {
    if (!data.aboutPreview) return;
    var apTitle = document.getElementById("about-preview-title");
    if (apTitle) apTitle.textContent = data.aboutPreview.title;
    var apDesc = document.getElementById("about-preview-desc");
    if (apDesc) apDesc.textContent = data.aboutPreview.desc;
    var apCta = document.getElementById("about-preview-cta");
    if (apCta) apCta.textContent = data.aboutPreview.cta;
  });

  // ====== CONTACT ======
  safe("contact", function() {
    if (!data.contact) return;
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
        wrapper.innerHTML = `
          ${renderIcon(c.icon, "icon")}
          <div>
            <div class="label">${c.label}</div>
            <div class="value">${c.value}</div>
          </div>
        `;
        contactGrid.appendChild(wrapper);
      });
    }
  });

  safe("footer", function() {
    var footer = document.getElementById("footer-text");
    if (footer && data.footer) footer.textContent = data.footer;
  });
}

// ============================================================
// RENDER ABOUT
// ============================================================
function renderAbout(data) {
  if (!data) return;

  safe("about-hero", function() {
    var heroTitle = document.getElementById("about-hero-title");
    var heroSub = document.getElementById("about-hero-subtitle");
    var avatar = document.getElementById("hero-avatar");
    if (heroTitle) heroTitle.textContent = data.about.heroTitle;
    if (heroSub) heroSub.textContent = data.about.heroSubtitle;
    if (avatar) {
      avatar.innerHTML = "<img src=\"logo.png\" alt=\"Ilia Farahani profile logo\" decoding=\"async\"><span>" + data.hero.name.trim().charAt(0) + "</span>";
      var span = avatar.querySelector("span");
      if (span) span.style.display = "none";
    }
  });

  safe("about-intro", function() {
    var introTag = document.getElementById("intro-tag");
    var introText = document.getElementById("intro-text");
    if (introTag) introTag.innerHTML = "<span class=\"dot\"></span> " + data.about.introTag;
    if (introText) introText.textContent = data.about.intro;
  });

  safe("about-timeline", function() {
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
  });

  safe("about-skills", function() {
    var skillsTag = document.getElementById("about-skills-tag");
    var skillsTitle = document.getElementById("about-skills-title");
    if (skillsTag) skillsTag.innerHTML = "<span class=\"dot\"></span> " + data.about.skillsTag;
    if (skillsTitle) skillsTitle.textContent = data.about.skillsTitle;
    var skillsTags = document.getElementById("about-skills-tags");
    if (skillsTags) {
      skillsTags.innerHTML = "";
      data.about.skillsList.forEach(function(s) { skillsTags.appendChild(el("span", null, s)); });
    }
  });

  safe("about-lang", function() {
    var langTag = document.getElementById("lang-tag");
    var langTitle = document.getElementById("lang-title");
    if (langTag) langTag.innerHTML = "<span class=\"dot\"></span> " + data.about.langTag;
    if (langTitle) langTitle.textContent = data.about.langTitle;
    var langTags = document.getElementById("lang-tags");
    if (langTags) {
      langTags.innerHTML = "";
      data.about.langList.forEach(function(s) { langTags.appendChild(el("span", null, s)); });
    }
  });

  safe("about-github", function() {
    var githubTag = document.getElementById("github-tag");
    var githubText = document.getElementById("github-text");
    var githubLink = document.getElementById("github-link");
    if (githubTag) githubTag.innerHTML = "<span class=\"dot\"></span> " + data.about.githubTag;
    if (githubText) githubText.textContent = data.about.githubText;
    if (githubLink) {
      githubLink.textContent = data.about.githubLinkText;
      githubLink.href = "https://" + data.about.githubLinkText;
    }
  });

  safe("about-footer", function() {
    var footer = document.getElementById("footer-text");
    if (footer) footer.textContent = data.footer;
  });
}

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects(data) {
  if (!data) return;

  safe("projects-page", function() {
    var grid = document.getElementById("projects-grid-page");
    if (!grid) return;

    grid.innerHTML = "";
    (data.projects.items || []).forEach(function(proj) {
      var card = el("div", "project-card reveal");
      var head = el("div", "project-head");
      
      var titleLink = el("a", "project-title-link", (proj.icon ? proj.icon + " " : "") + proj.title);
      titleLink.href = proj.url || proj.href || "#";
      if (titleLink.href !== "#") {
        titleLink.target = "_blank";
        titleLink.rel = "noopener";
      }
      head.appendChild(titleLink);
      
      if (proj.date) head.appendChild(el("span", "project-date", proj.date));
      var desc = el("p", null, proj.desc);
      
      if (proj.bullets && proj.bullets.length) {
        var bulletList = el("ul", "project-bullets");
        proj.bullets.forEach(function(bullet) {
          bulletList.appendChild(el("li", null, bullet));
        });
        card.appendChild(bulletList);
      }
      
      var tags = el("div", "tech-tags");
      (proj.tech || []).forEach(function(t) { tags.appendChild(el("span", null, t)); });
      card.append(head, desc, tags);
      
      grid.appendChild(card);
    });
  });

  safe("projects-footer", function() {
    var footer = document.getElementById("footer-text");
    if (footer && data.footer) footer.textContent = data.footer;
  });
}

// ============================================================
// RENDER REPOS
// ============================================================
function renderRepos(data) {
  var page = data && data.repos;
  var title = document.getElementById("repos-title"), subtitle = document.getElementById("repos-subtitle"), grid = document.getElementById("repos-grid");
  if (!page || !grid) return;
  if (title) title.textContent = page.title;
  if (subtitle) subtitle.textContent = page.subtitle;
  var colors = {TypeScript:"#3178C6",Python:"#3572A5",PHP:"#4F5D95",HTML:"#E34F26",CSS:"#563D7C",JavaScript:"#F1E05A",C:"#555"};
  grid.innerHTML = (page.items || []).map(function(repo, i) {
    return `<div class="repo-card reveal reveal-delay-${i % 4}" style="background:linear-gradient(160deg,rgba(255,255,255,.035),rgba(255,255,255,.008));border:1px solid var(--border-default);border-radius:var(--radius);padding:24px 26px;backdrop-filter:blur(14px);transition:all .45s var(--transition)"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:8px"><h3 style="margin:0;font-size:1.05rem;font-weight:600"><a href="${repo.url}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">${repo.name}</a></h3><div style="font-size:.75rem;color:var(--foreground-muted)">⭐ ${repo.stars} &nbsp;⑂ ${repo.forks}</div></div><p style="color:var(--foreground-muted);font-size:.87rem;line-height:1.8;margin:0 0 14px">${repo.desc}</p><div style="display:flex;align-items:center;gap:8px"><span style="width:12px;height:12px;border-radius:50%;background:${colors[repo.lang] || '#888'};display:inline-block"></span><span style="font-size:.78rem;color:var(--foreground-muted)">${repo.lang}</span></div></div>`;
  }).join("");
}

// ============================================================
// RENDER RESUME
// ============================================================
function renderResume(data) {
  var page = data && data.resume, root = document.getElementById("resume-content");
  if (!page || !root) return;
  var set = function(id, value) { var n = document.getElementById(id); if (n) n.textContent = value; };
  set("resume-title", page.title); set("resume-subtitle", page.subtitle); set("resume-download", data.lang === "fa" ? "دانلود رزومه (PDF)" : "Download Resume (PDF)");
  var p = page.personal;
  var row = function(label, value) { return `<li><span class="label">${label}</span><span class="value">${value}</span></li>`; };
  root.innerHTML = `<div class="resume-section"><h2>👤 ${data.lang === "fa" ? "اطلاعات شخصی" : "Personal Information"}</h2><ul>${row(data.lang === "fa" ? "نام" : "Name", p.name)}${row(data.lang === "fa" ? "شغل" : "Role", p.job)}${row(data.lang === "fa" ? "موقعیت" : "Location", p.location)}${row(data.lang === "fa" ? "ایمیل" : "Email", p.email)}${row(data.lang === "fa" ? "تلفن" : "Phone", p.phone)}${row(data.lang === "fa" ? "گیت‌هاب" : "GitHub", `<a href="https://github.com/here-is-leo" target="_blank" rel="noopener" style="color:#b8bfff">${p.github}</a>`)}</ul></div><div class="resume-section"><h2>📖 ${data.lang === "fa" ? "درباره من" : "About Me"}</h2><p style="color:var(--foreground-muted);line-height:2.2;margin:0">${page.about}</p></div><div class="resume-section"><h2>🛠️ ${data.lang === "fa" ? "مهارت‌های فنی" : "Technical Skills"}</h2><div>${page.skills.map(function(s){return `<span class="skill-tag ${s.level >= 80 ? "high" : "medium"}">${s.name} (${s.level}%)</span>`}).join("")}</div></div><div class="resume-section"><h2>💼 ${data.lang === "fa" ? "پروژه‌های شاخص" : "Selected Projects"}</h2><ul>${page.projects.map(function(x){return row(x.icon + " " + x.title, x.desc)}).join("")}</ul></div><div class="resume-section"><h2>🎓 ${data.lang === "fa" ? "تحصیلات و دوره‌ها" : "Education & Courses"}</h2><ul>${page.education.map(function(x){return row(x.title,x.sub)}).join("")}</ul></div><div class="resume-section"><h2>🌍 ${data.lang === "fa" ? "زبان‌ها" : "Languages"}</h2><ul>${page.languages.map(function(x){return row(x.name,x.level)}).join("")}</ul></div><div class="resume-section"><h2>📊 ${data.lang === "fa" ? "فعالیت گیت‌هاب" : "GitHub Activity"}</h2><ul>${row(data.lang === "fa" ? "مشارکت (Commit)" : "Commits",page.github.commits)}${row(data.lang === "fa" ? "مخازن عمومی" : "Public repositories",page.github.repos)}${row(data.lang === "fa" ? "تمرکز فعالیت" : "Focus",page.github.focus)}</ul></div>`;
}

// ============================================================
// CONTACT FORM
// ============================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const isFa = () => getLang() === 'fa';

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');

    status.className = 'form-status is-visible is-pending';
    status.textContent = isFa() ? '⏳ در حال ارسال پیام...' : '⏳ Sending your message...';
    submitBtn.disabled = true;
    btnText.textContent = isFa() ? 'در حال ارسال...' : 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.className = 'form-status is-visible is-success';
        status.textContent = isFa() ? '✅ پیام شما با موفقیت ارسال شد!' : '✅ Your message was sent successfully!';
        form.reset();
        btnText.textContent = isFa() ? 'ارسال پیام' : 'Send message';
        submitBtn.disabled = false;
        setTimeout(() => { status.className = 'form-status'; }, 5000);
      } else {
        throw new Error('خطا در ارسال پیام');
      }
    } catch (error) {
      status.className = 'form-status is-visible is-error';
      status.textContent = isFa() ? '❌ خطا در ارسال پیام. لطفاً دوباره تلاش کنید.' : '❌ Something went wrong. Please try again.';
      btnText.textContent = isFa() ? 'ارسال پیام' : 'Send message';
      submitBtn.disabled = false;
    }
  });
}

// ============================================================
// RENDER
// ============================================================
function render(page) {
  var lang = getLang();
  var data = (typeof SITE !== "undefined") ? SITE[lang] : null;

  if (!data) {
    console.error('❌ SITE data not available for lang=' + lang + '. content.js may have failed to load.');
    document.dispatchEvent(new CustomEvent("site:render-failed", { detail: { page: page, lang: lang } }));
    return;
  }

  safe("applyMeta", function() { applyMeta(data, page); });
  safe("renderNav", function() { renderNav(data, page); });
  safe("renderContactForm", function() {
    var fa = data.lang === "fa";
    var copy = fa ? {
      tag: "✉️ ارسال پیام", title: "یک پیام برای من بفرستید",
      subtitle: "برای همکاری، پیشنهاد یا هر سوالی، خوشحال می‌شوم از شما بشنوم.",
      name: "نام شما", email: "ایمیل شما", message: "پیام شما", submit: "ارسال پیام"
    } : {
      tag: "✉️ Send a message", title: "Send me a message",
      subtitle: "For collaboration, suggestions, or any questions, I would be happy to hear from you.",
      name: "Your name", email: "Your email", message: "Your message", submit: "Send message"
    };
    var nodes = {
      tag: document.querySelector("[data-contact-form-tag]"), title: document.querySelector("[data-contact-form-title]"),
      subtitle: document.querySelector("[data-contact-form-subtitle]"), name: document.querySelector("[data-contact-form-name]"),
      email: document.querySelector("[data-contact-form-email]"), message: document.querySelector("[data-contact-form-message]"),
      submit: document.querySelector("[data-contact-form-submit]")
    };
    Object.keys(nodes).forEach(function(key) { if (nodes[key]) nodes[key].textContent = copy[key]; });
  });

  if (page === "about") {
    renderAbout(data);
  } else if (page === "projects") {
    renderProjects(data);
  } else if (page === "resume") {
    renderResume(data);
  } else if (page === "repos") {
    renderRepos(data);
  } else {
    renderHome(data);
  }

  setTimeout(function() {
    safe("initReveal", initReveal);
    safe("initSplitTitles", initSplitTitles);
    safe("initRipple", initRipple);
    safe("initSpotlights", initSpotlights);
    safe("initParallax", initParallax);
    safe("initCinematicMotion", initCinematicMotion);
    safe("initAmbientOptimization", initAmbientOptimization);
    safe("initialCounters", function() {
      var statsSec = document.getElementById("stats-section");
      if (statsSec && statsSec.getBoundingClientRect().top < window.innerHeight) {
        animateCounters();
      }
    });
  }, 100);

  document.dispatchEvent(new CustomEvent("site:rendered", { detail: { page: page, lang: lang } }));
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

// ============================================================
// BOOT
// ============================================================
function boot() {
  var page = document.body.dataset.page || "home";
  setTheme(getTheme());
  render(page);
  initLangToggle(page);
  initNavToggle();
  initContactForm();

  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function() { header.classList.toggle("scrolled", window.scrollY > 18); };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    var hTargetX = 50, hTargetY = 50, hCurX = 50, hCurY = 50, hRaf = null;
    function headerTick() {
      hCurX += (hTargetX - hCurX) * 0.08;
      hCurY += (hTargetY - hCurY) * 0.08;
      header.style.setProperty("--header-x", hCurX.toFixed(1) + "%");
      header.style.setProperty("--header-y", hCurY.toFixed(1) + "%");
      if (Math.abs(hTargetX - hCurX) > 0.05 || Math.abs(hTargetY - hCurY) > 0.05) {
        hRaf = requestAnimationFrame(headerTick);
      } else {
        hRaf = null;
      }
    }
    header.addEventListener("pointermove", function(e) {
      var r = header.getBoundingClientRect();
      hTargetX = (e.clientX - r.left) / r.width * 100;
      hTargetY = (e.clientY - r.top) / r.height * 100;
      if (!hRaf) hRaf = requestAnimationFrame(headerTick);
    }, { passive: true });
    header.addEventListener("pointerleave", function() {
      hTargetX = 50;
      hTargetY = 50;
      if (!hRaf) hRaf = requestAnimationFrame(headerTick);
    });
  }

  if (!document.querySelector('.mobile-subnav')) {
    var sub = document.createElement('div');
    sub.className = 'mobile-subnav';
    sub.innerHTML = '<a href="index.html" aria-label="Home">⌂</a><a href="projects.html" aria-label="Projects">✦</a><a href="blog.html" aria-label="Blog">▤</a><a href="resume.html" aria-label="Resume">◌</a>';
    document.body.appendChild(sub);
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      setTheme(getTheme() === "dark" ? "light" : "dark");
      render(page);
    });
  });
}
// ============================================================
// MOBILE DETECTION & OPTIMIZATION (اضافه شده به script.js)
// ============================================================

// تشخیص موبایل با دقت بالا
function isMobileDevice() {
  return window.innerWidth < 768 || 
         /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

// تشخیص تاچ دیوایس
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// بهینه‌سازی عملکرد در موبایل
function optimizeForMobile() {
  if (isMobileDevice()) {
    // غیرفعال کردن انیمیشن‌های سنگین
    document.querySelectorAll('.orb').forEach(function(orb) {
      orb.style.animation = 'none';
      orb.style.filter = 'blur(40px)';
    });
    
    // کاهش opacity پس‌زمینه
    document.querySelector('.bg-ambient')?.style.setProperty('opacity', '0.3');
    
    // غیرفعال کردن افکت‌های نشانگر
    document.body.classList.remove('has-custom-cursor');
    document.querySelectorAll('.cursor-glow, .custom-cursor, .cursor-trail').forEach(function(el) {
      if (el) el.style.display = 'none';
    });
  }
}

// مدیریت ناوبری موبایل
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggle || !navLinks) return;
  
  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  
  // بستن منو با کلیک بیرون
  document.addEventListener('click', function(e) {
    if (navLinks.classList.contains('open') && 
        !navLinks.contains(e.target) && 
        !toggle.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // بستن منو با کلیک روی لینک‌ها
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // بستن منو با کلید ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

// مدیریت ساف‌اری موبایل (fix 100vh)
function fixMobileViewport() {
  if (isMobileDevice()) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
    
    // تنظیم height برای hero
    document.querySelectorAll('.hero').forEach(function(el) {
      el.style.minHeight = 'calc(var(--vh, 1vh) * 85)';
    });
  }
}

// ============================================================
// اجرای بهینه‌سازی‌ها در زمان لود
// ============================================================
// ============================================================
// PRELOADER — logo intro splash
// ============================================================
(function initPreloader() {
  if (document.readyState !== "loading" && document.readyState !== "interactive") {
    // Too late to show a splash usefully
  }
  var pre = document.createElement("div");
  pre.className = "site-preloader";
  pre.innerHTML = '<div class="preloader-mark"><img src="logo.png" alt="" /><span class="preloader-ring"></span></div>';
  document.documentElement.appendChild(pre);
  document.body.classList.add("preload-lock");

  var removed = false;
  function finish() {
    if (removed) return;
    removed = true;
    pre.classList.add("is-leaving");
    document.body.classList.remove("preload-lock");
    setTimeout(function() { pre.remove(); }, 700);
  }

  // Reveal as soon as content is rendered, with a small minimum dwell so it doesn't just flash
  var minDwell = new Promise(function(res) { setTimeout(res, 500); });
  var rendered = new Promise(function(res) {
    document.addEventListener("site:rendered", res, { once: true });
    document.addEventListener("site:render-failed", res, { once: true });
    setTimeout(res, 2200); // hard safety cap
  });
  Promise.all([minDwell, rendered]).then(finish);
})();

document.addEventListener('DOMContentLoaded', function() {
  optimizeForMobile();
  initMobileNav();
  fixMobileViewport();
});

// به‌روزرسانی در زمان تغییر اندازه
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    if (isMobileDevice()) {
      fixMobileViewport();
    }
  }, 250);
});
// ============================================================
// START
// ============================================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
