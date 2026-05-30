/* ============================================================
   Andy Wang — Portfolio Landing Page
   main.js
   ============================================================ */

/* ── LANGUAGE SWITCHER ── */

/**
 * Switch the page language between English ('en') and Chinese ('zh').
 * Updates:
 *  - <html data-lang> attribute  → CSS shows/hides [data-i18n] elements
 *  - <html lang>  attribute      → accessibility / SEO
 *  - Active state on toggle buttons
 *  - Persists the choice to localStorage
 *
 * @param {string} lang  'en' or 'zh'
 */
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');

  try { localStorage.setItem('aw-lang', lang); } catch (e) {}
}

/** Restore saved language preference on page load */
function restoreLang() {
  let saved = 'en';
  try { saved = localStorage.getItem('aw-lang') || 'en'; } catch (e) {}
  setLang(saved);
}

/* ── SCROLL-REVEAL (IntersectionObserver) ── */

/**
 * Adds the class 'visible' to any element with class 'reveal'
 * once it enters the viewport, triggering its CSS transition.
 */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Once revealed, no need to keep observing */
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  restoreLang();
  initReveal();
});
