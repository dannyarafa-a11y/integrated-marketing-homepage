'use strict';

// Nav scroll
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// How It Works scroll timeline
(function () {
  const timeline = document.getElementById('hiw-timeline');
  if (!timeline) return;

  const counterEl = document.getElementById('hiw-counter-now');
  const railFill  = document.getElementById('hiw-rail-fill');
  const steps     = timeline.querySelectorAll('.hiw-step');

  function update() {
    const anchor = window.innerHeight * 0.5;
    const box    = timeline.getBoundingClientRect();
    let active   = 0;

    steps.forEach(function (step, i) {
      const node = step.querySelector('.hiw-node');
      const nb   = node.getBoundingClientRect();
      if (nb.top + nb.height / 2 <= anchor) active = i;
    });

    steps.forEach(function (step, i) {
      step.classList.toggle('active',  i <= active);
      step.classList.toggle('current', i === active);
    });

    if (counterEl) {
      counterEl.textContent = String(active + 1).padStart(2, '0');
    }

    if (railFill) {
      const h    = timeline.scrollHeight;
      const fill = h > 0 ? Math.max(0, Math.min(1, (anchor - box.top) / h)) : 0;
      railFill.style.height = (fill * 100) + '%';
    }
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();

// Testimonials carousel
(function () {
  const pages = document.querySelectorAll('.testimonials-page');
  const dots  = document.querySelectorAll('.testimonials-dot');
  if (!pages.length || !dots.length) return;

  function show(idx) {
    pages.forEach(function (p, i) {
      p.style.display = i === idx ? '' : 'none';
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === idx);
    });
  }

  dots.forEach(function (d, i) {
    d.addEventListener('click', function () { show(i); });
  });

  show(0);
})();

// FAQ accordion
(function () {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      const wasOpen = item.classList.contains('open');
      items.forEach(function (it) { it.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  items[0].classList.add('open');
})();
