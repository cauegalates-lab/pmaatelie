/* PMA Ateliê Criativo - JavaScript separado do HTML original */

(function(){
  const footer = document.querySelector('.footer-v2');
  if (footer) {
    const btn = footer.querySelector('.footer-v2__toggle');
    const extra = footer.querySelector('#footerV2Extra');
    const txt = footer.querySelector('.footer-v2__toggle-text');
    if (btn && extra && txt) {
      footer.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      extra.setAttribute('aria-hidden', 'true');
      txt.textContent = 'Ver mais informações';
      btn.addEventListener('click', function () {
        const isOpen = footer.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
        extra.setAttribute('aria-hidden', String(!isOpen));
        txt.textContent = isOpen ? 'Ver menos informações' : 'Ver mais informações';
      });
    }
  }

  const navLinks = Array.from(document.querySelectorAll('.store-desktop-nav__link[href^="#"]'));
  const sections = navLinks
    .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(item => item.section);

  function setActive(id) {
    navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === '#' + id));
  }

  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target.id) setActive(visible.target.id);
    }, { root: null, rootMargin: '-30% 0px -55% 0px', threshold: [0.08, 0.16, 0.32, 0.5] });
    sections.forEach(item => observer.observe(item.section));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href').replace('#', '');
      if (id) setActive(id);
    });
  });
})();
