/* NIWA PILATES — interações (vanilla, leve) */
(function () {
  'use strict';

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Header sólido ao rolar ---- */
  var header = document.getElementById('topo');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Animações de scroll (reveal) ---- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Formulário -> WhatsApp ---- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target;
      var canal = f.canal ? f.canal.value : '-';
      var msg = 'Olá! Gostaria de mais informações.%0A'
        + '*Nome:* ' + encodeURIComponent(f.nome.value) + '%0A'
        + '*E-mail:* ' + encodeURIComponent(f.email.value) + '%0A'
        + '*Telefone:* ' + encodeURIComponent(f.telefone.value || '-') + '%0A'
        + '*Contato por:* ' + encodeURIComponent(canal) + '%0A'
        + '*Assunto:* ' + encodeURIComponent(f.assunto.value);
      window.open('https://api.whatsapp.com/send?phone=5511967002491&text=' + msg, '_blank');
    });
  }
})();
