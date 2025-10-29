// Dynamic, data-driven rendering and interactions

var searchInput = document.getElementById("searchInput");
var searchButton = document.querySelector(".search-container button");
var searchForm = document.getElementById("searchForm");
var categoriesContainer = document.getElementById("categories");
var navLinksContainer = document.getElementById("primary-nav");
var categoriesTrigger = document.getElementById("categories-trigger");
var categoriesDropdown = document.getElementById("categories-dropdown");
var searchSuggestions = document.getElementById("searchSuggestions");

var siteCards = [];
var categories = [];

function createEl(tag, attrs, children) {
  if (!attrs) attrs = {};
  if (!children) children = [];
  var el = document.createElement(tag);
  for (var k in attrs) {
    if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
    var v = attrs[k];
    if (v === null || v === undefined) continue;
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else el.setAttribute(k, v);
  }
  for (var i = 0; i < children.length; i++) {
    el.appendChild(children[i]);
  }
  return el;
}

function getCatLabel(cat) {
  return cat.label || cat.title || cat.id;
}

function getCatTitle(cat) {
  return cat.title || cat.label || cat.id;
}

function renderFromData(data) {
  if (!data || !data.categories || !categoriesContainer) {
    console.error('Missing required data or elements for rendering');
    return;
  }

  // Sort categories by priority (lower first); fallback to 999
  var cats = data.categories.slice().sort(function(a, b){
    var pa = (typeof a.priority !== 'undefined') ? a.priority : 999;
    var pb = (typeof b.priority !== 'undefined') ? b.priority : 999;
    return pa - pb;
  });

  // Build nav links dynamically (mobile drawer)
  if (navLinksContainer) {
    navLinksContainer.innerHTML = "";
    cats.forEach(function(cat){
      var a = createEl("a", { href: "#" + cat.id, class: 'cat-item' });
      var iconWrap = createEl('span', { class: 'cat-icon' }, [ createEl('i', { class: cat.icon || '' }) ]);
      var label = createEl('span', { class: 'cat-label' }); label.textContent = getCatLabel(cat);
      var badge = createEl('span', { class: 'cat-badge' }); badge.textContent = (cat.items && cat.items.length) ? String(cat.items.length) : '0';
      a.appendChild(iconWrap); a.appendChild(label); a.appendChild(badge);
      navLinksContainer.appendChild(a);
    });
  }

  // Build desktop categories dropdown
  if (categoriesDropdown) {
    categoriesDropdown.innerHTML = "";
    // Filter box
    var filterBox = createEl('div', { class: 'filter-box' });
    var filterInput = createEl('input', { type: 'text', placeholder: 'Filter categories…', 'aria-label': 'Filter categories' });
    filterBox.appendChild(filterInput);
    categoriesDropdown.appendChild(filterBox);
    cats.forEach(function(cat){
      var a = createEl("a", { href: "#" + cat.id, role: "menuitem", class: 'cat-item' });
      var iconWrap = createEl('span', { class: 'cat-icon', 'data-cat': cat.id }, [ createEl('i', { class: cat.icon || '' }) ]);
      var label = createEl('span', { class: 'cat-label' }); label.textContent = getCatLabel(cat);
      var badge = createEl('span', { class: 'cat-badge' }); badge.textContent = (cat.items && cat.items.length) ? String(cat.items.length) : '0';
      a.appendChild(iconWrap); a.appendChild(label); a.appendChild(badge);
      categoriesDropdown.appendChild(a);
    });
    // Filter logic
    filterInput.addEventListener('input', function(){
      var q = (filterInput.value || '').toLowerCase();
      var items = categoriesDropdown.querySelectorAll('.cat-item');
      for (var i=0;i<items.length;i++){
        var t = (items[i].querySelector('.cat-label') && items[i].querySelector('.cat-label').textContent || '').toLowerCase();
        items[i].style.display = (q==='' || t.indexOf(q) !== -1) ? '' : 'none';
      }
    });
    // Keyboard nav
    categoriesDropdown.addEventListener('keydown', function(e){
      var items = Array.prototype.slice.call(categoriesDropdown.querySelectorAll('.cat-item')).filter(function(el){ return el.style.display !== 'none'; });
      if (!items.length) return;
      var idx = -1;
      for (var i=0;i<items.length;i++){ if (document.activeElement === items[i]) { idx = i; break; } }
      if (e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(idx+1, items.length-1)].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); items[Math.max(idx-1, 0)].focus(); }
      if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
      if (e.key === 'End') { e.preventDefault(); items[items.length-1].focus(); }
      if (e.key === 'Escape') { categoriesTrigger && categoriesTrigger.click(); }
    });
    // Focus first item when opening
    categoriesTrigger && categoriesTrigger.addEventListener('click', function(){
      setTimeout(function(){
        var first = categoriesDropdown.querySelector('.cat-item');
        if (first && categoriesDropdown.classList.contains('open')) { first.focus(); }
      }, 0);
    });
  }

  // Build categories and cards
  categoriesContainer.innerHTML = "";
  cats.forEach(function(cat){
    const h2 = createEl("h2");
    const icon = createEl("i", { class: cat.icon || "" });
    h2.appendChild(icon);
    h2.appendChild(document.createTextNode(" " + getCatTitle(cat)));

    const grid = createEl("div", { class: "sites-grid" });
    cat.items.forEach(function(item){
      var img = createEl("img", {
        src: item.icon,
        alt: item.title,
        loading: "lazy",
        decoding: "async",
        width: "48",
        height: "48",
      });
      var h3 = createEl("h3");
      h3.textContent = item.title;
      var p = createEl("p");
      p.textContent = item.desc;
      var card = createEl(
        "a",
        { href: item.href, class: "site-card" },
        [img, h3, p]
      );
      // Store fallback icon if available
      if (item.fallbackIcon) {
        card._fallbackIcon = item.fallbackIcon;
      }
      grid.appendChild(card);
    });

    const section = createEl(
      "div",
      { class: "category", id: cat.id, "data-category": cat.id },
      [h2, grid]
    );

    // initial animation state for observer
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.5s ease";

    categoriesContainer.appendChild(section);
  });

  // refresh references
  siteCards = Array.prototype.slice.call(document.querySelectorAll(".site-card"));
  categories = Array.prototype.slice.call(document.querySelectorAll(".category"));
  // Build link map for scrollspy
  buildCategoryLinkMap();
}

function updateVisibility() {
  var searchTerm = ((searchInput && searchInput.value) || "").trim().toLowerCase();

  siteCards.forEach(function(card){
    var titleNode = card.querySelector("h3");
    var descNode = card.querySelector("p");
    var title = (titleNode && titleNode.textContent || "").toLowerCase();
    var description = (descNode && descNode.textContent || "").toLowerCase();
    const matches =
      searchTerm === "" || title.includes(searchTerm) || description.includes(searchTerm);

    if (matches) {
      card.classList.remove("hidden");
      card.style.display = ""; // let CSS handle layout (defaults to flex)
      card.style.animation = "fadeIn 0.5s ease forwards";
    } else {
      card.classList.add("hidden");
      card.style.display = "none";
    }
  });

  // Hide categories that have no visible site-cards
  categories.forEach(function(category){
    const visible = category.querySelectorAll(".site-card:not(.hidden)");
    category.style.display = visible.length > 0 ? "" : "none";
  });

  // Show web/AI search suggestions if no local results
  if (searchSuggestions) {
    if (searchTerm && document.querySelectorAll('.site-card:not(.hidden)').length === 0) {
      var q = encodeURIComponent(searchTerm);
      var links = [
        { href: "https://www.google.com/search?q=" + q, label: "Google" },
        { href: "https://www.bing.com/search?q=" + q, label: "Bing" },
        { href: "https://duckduckgo.com/?q=" + q, label: "DuckDuckGo" },
        { href: "https://www.perplexity.ai/?q=" + q, label: "Perplexity (AI)" }
      ];
      searchSuggestions.innerHTML = links.map(function(l){
        return '<a href="' + l.href + '" target="_blank" rel="noopener noreferrer">Search "' + (searchInput && searchInput.value) + '" on ' + l.label + '</a>';
      }).join("");
      searchSuggestions.classList.add("show");
    } else {
      searchSuggestions.classList.remove("show");
      searchSuggestions.innerHTML = "";
    }
  }
}

// Smooth scroll for in-page anchors via event delegation
document.addEventListener("click", function(e){
  var anchor = e.target.closest && e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (!href) return;
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Intersection Observer for fade-in animations on categories
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      setActiveCategory(entry.target.id);
    }
  });
}, observerOptions);

function observeCategories() {
  categories.forEach(function(category){
    observer.observe(category);
  });
}

// Scrollspy mapping
var catLinkMap = {};
function buildCategoryLinkMap(){
  catLinkMap = {};
  // dropdown
  if (categoriesDropdown){
    var dlinks = categoriesDropdown.querySelectorAll('.cat-item');
    for (var i=0;i<dlinks.length;i++){
      var href = dlinks[i].getAttribute('href') || '';
      if (href.indexOf('#')===0){ catLinkMap[href.substring(1)] = catLinkMap[href.substring(1)] || {}; catLinkMap[href.substring(1)].dropdown = dlinks[i]; }
    }
  }
  // mobile drawer
  if (navLinksContainer){
    var nlinks = navLinksContainer.querySelectorAll('.cat-item');
    for (var j=0;j<nlinks.length;j++){
      var href2 = nlinks[j].getAttribute('href') || '';
      if (href2.indexOf('#')===0){ catLinkMap[href2.substring(1)] = catLinkMap[href2.substring(1)] || {}; catLinkMap[href2.substring(1)].nav = nlinks[j]; }
    }
  }
}

function setActiveCategory(id){
  if (!id) return;
  // clear all
  var all = document.querySelectorAll('.cat-item.active');
  for (var i=0;i<all.length;i++){ all[i].classList.remove('active'); }
  var m = catLinkMap[id];
  if (m){ if (m.dropdown) m.dropdown.classList.add('active'); if (m.nav) m.nav.classList.add('active'); }
}

// Hover effects
function bindHoverEffects() {
  siteCards.forEach(function(card){
    card.addEventListener("mouseenter", function() {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    });
    card.addEventListener("mouseleave", function() {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
    });
  });
}

// Image error fallback
function bindImageFallback() {
  Array.prototype.forEach.call(document.querySelectorAll(".site-card img"), function(img){
    img.addEventListener("error", function () {
      // Try to use fallback icon if available
      var card = this.closest('.site-card');
      if (card && card._fallbackIcon) {
        this.src = card._fallbackIcon;
      } else {
        this.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6IiBmaWxsPSIjODY4NjhiIi8+PC9zdmc+";
      }
    });
  });
}

// External link security
function secureExternalLinks() {
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="http"]'), function(a){
    try {
      var url = new URL(a.href);
      if (url.origin !== location.origin) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
    } catch (e) {
      // ignore invalid URLs
    }
  });
}

// Mobile nav toggle with event delegation for dynamic links
var menuToggle = document.querySelector(".menu-toggle");
var primaryNav = document.getElementById("primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", function() {
    var isOpen = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  primaryNav.addEventListener("click", function(e) {
    var link = e.target.closest ? e.target.closest("a") : null;
    if (link) {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Desktop categories dropdown toggle
if (categoriesTrigger && categoriesDropdown) {
  var closeDropdown = function() {
    categoriesDropdown.classList.remove("open");
    categoriesTrigger.setAttribute("aria-expanded", "false");
  };
  var openDropdown = function() {
    categoriesDropdown.classList.add("open");
    categoriesTrigger.setAttribute("aria-expanded", "true");
  };
  categoriesTrigger.addEventListener("click", function(e) {
    e.preventDefault();
    var isOpen = categoriesDropdown.classList.contains("open");
    if (isOpen) closeDropdown();
    else openDropdown();
  });
  document.addEventListener("click", function(e) {
    if (!categoriesDropdown.contains(e.target) && !categoriesTrigger.contains(e.target)) {
      closeDropdown();
    }
  });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeDropdown();
  });
}


function rerenderAll() {
  renderFromData(window.SITES_DATA);
  siteCards = Array.prototype.slice.call(document.querySelectorAll(".site-card"));
  categories = Array.prototype.slice.call(document.querySelectorAll(".category"));
  observeCategories();
  bindHoverEffects();
  bindImageFallback();
  secureExternalLinks();
  updateVisibility();
}


// Wire up search events
if (searchInput) searchInput.addEventListener("input", updateVisibility);
if (searchButton) searchButton.addEventListener("click", updateVisibility);
if (searchForm)
  searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    updateVisibility();
  });

// Bootstrapping: render from window.SITES_DATA if available
try {
  if (window.SITES_DATA) {
    renderFromData(window.SITES_DATA);
  }
} catch (error) {
  console.error('Error during auto-rendering:', error);
}

// After render, initialize behaviors
siteCards = Array.prototype.slice.call(document.querySelectorAll(".site-card"));
categories = Array.prototype.slice.call(document.querySelectorAll(".category"));
observeCategories();
bindHoverEffects();
bindImageFallback();
secureExternalLinks();
updateVisibility();
applyStaticTexts();

// Cookie consent handling with Google Consent Mode
(function(){
  var banner = document.getElementById('cookieBanner');
  var acceptBtn = document.getElementById('cookieAccept');
  var rejectBtn = document.getElementById('cookieReject');
  function setConsent(granted) {
    try {
      if (typeof gtag === 'function') {
        gtag('consent', 'update', {
          'analytics_storage': granted ? 'granted' : 'denied',
          'ad_storage': 'denied'
        });
      }
    } catch (e) {}
    try { localStorage.setItem('cookie_consent_analytics', granted ? 'granted' : 'denied'); } catch(e) {}
  }
  function initConsent() {
    var saved;
    try { saved = localStorage.getItem('cookie_consent_analytics'); } catch(e) { saved = null; }
    if (saved === 'granted') {
      setConsent(true);
      if (banner) banner.hidden = true;
    } else if (saved === 'denied') {
      setConsent(false);
      if (banner) banner.hidden = true;
    } else {
      if (banner) banner.hidden = false;
    }
  }
  if (acceptBtn) acceptBtn.addEventListener('click', function(){ setConsent(true); if (banner) banner.hidden = true; });
  if (rejectBtn) rejectBtn.addEventListener('click', function(){ setConsent(false); if (banner) banner.hidden = true; });
  initConsent();
})();
