/* PMA Ateliê Criativo - JavaScript separado do HTML original */

/* =========================================================
   PMA Ateliê Criativo - Interações da loja
   Componentes isolados: menu, busca, carrossel, carrinho,
   WhatsApp e animações de entrada.
   ========================================================= */

const storeConfig = {
  name: 'PMA Ateliê Criativo',
  whatsapp: '[COLOQUE O NÚMERO]',
  email: '[COLOQUE O E-MAIL]',
  defaultMessage: 'Olá! Vi o site da PMA Ateliê Criativo e quero fazer um produto personalizado. Pode me ajudar?'
};

const storeCategories = [
  {
    slug: 'canecas-personalizadas',
    label: 'Canecas personalizadas',
    summary: 'Foto, nome, profissão, frase e datas especiais.',
    image: 'assets/img/image_12_11e99f83fc.jpg'
  },
  {
    slug: 'copos-termicos',
    label: 'Copos térmicos',
    summary: 'Modelos premium para rotina, trabalho e presente.',
    image: 'assets/img/image_13_f3e21ce4a2.jpg'
  },
  {
    slug: 'garrafas-squeezes',
    label: 'Garrafas e squeezes',
    summary: 'Personalizados para academia, escola e escritório.',
    image: 'assets/img/image_14_e164289b97.jpg'
  },
  {
    slug: 'camisetas-personalizadas',
    label: 'Camisetas personalizadas',
    summary: 'Estampas criativas para datas, equipes e eventos.',
    image: 'assets/img/image_15_b73e9c1cd5.jpg'
  },
  {
    slug: 'bolsas-necessaires',
    label: 'Bolsas e nécessaires',
    summary: 'Acessórios elegantes com nome, iniciais ou arte.',
    image: 'assets/img/image_16_d2bd848410.jpg'
  },
  {
    slug: 'kits-caixas-presenteaveis',
    label: 'Kits e caixas presenteáveis',
    summary: 'Combinações completas para surpreender.',
    image: 'assets/img/image_17_c30e67d2be.jpg'
  },
  {
    slug: 'madeira-laser',
    label: 'Produtos em madeira gravados a laser',
    summary: 'Peças afetivas, sofisticadas e duráveis.',
    image: 'assets/img/image_18_e34fca8588.jpg'
  },
  {
    slug: 'ecobags-personalizadas',
    label: 'Ecobags personalizadas',
    summary: 'Bolsas versáteis para marca, evento e presente.',
    image: 'assets/img/image_19_129db25c22.jpg'
  }
];

const storeProducts = [
  {
    id: 'caneca-foto-nome',
    title: 'Caneca com foto e nome',
    categorySlug: 'canecas-personalizadas',
    description: 'Modelo clássico com foto, nome e frase especial em alta definição.',
    price: 49.9,
    image: 'assets/img/image_12_11e99f83fc.jpg',
    tag: 'Mais pedido'
  },
  {
    id: 'caneca-profissao',
    title: 'Caneca profissão personalizada',
    categorySlug: 'canecas-personalizadas',
    description: 'Arte temática para professores, profissionais da saúde, escritório e equipe.',
    price: 54.9,
    image: 'assets/img/image_12_11e99f83fc.jpg',
    tag: 'Presente criativo'
  },
  {
    id: 'caneca-casal',
    title: 'Caneca casal e datas especiais',
    categorySlug: 'canecas-personalizadas',
    description: 'Opção romântica com data, nomes e mensagem personalizada.',
    price: 59.9,
    image: 'assets/img/image_12_11e99f83fc.jpg',
    tag: 'Afetivo'
  },
  {
    id: 'copo-termico-nome',
    title: 'Copo térmico com nome',
    categorySlug: 'copos-termicos',
    description: 'Copo com nome, inicial ou frase curta para uso diário.',
    price: 69.9,
    image: 'assets/img/image_13_f3e21ce4a2.jpg',
    tag: 'Premium'
  },
  {
    id: 'copo-termico-logo',
    title: 'Copo térmico corporativo',
    categorySlug: 'copos-termicos',
    description: 'Personalização com logo para equipes, brindes e eventos.',
    price: 74.9,
    image: 'assets/img/image_13_f3e21ce4a2.jpg',
    tag: 'Corporativo'
  },
  {
    id: 'copo-termico-presente',
    title: 'Copo térmico presenteável',
    categorySlug: 'copos-termicos',
    description: 'Modelo elegante com embalagem para aniversário, pais ou formatura.',
    price: 79.9,
    image: 'assets/img/image_13_f3e21ce4a2.jpg',
    tag: 'Elegante'
  },
  {
    id: 'garrafa-academia',
    title: 'Garrafa personalizada academia',
    categorySlug: 'garrafas-squeezes',
    description: 'Garrafa prática com nome, frase motivacional ou arte esportiva.',
    price: 79.9,
    image: 'assets/img/image_14_e164289b97.jpg',
    tag: 'Rotina'
  },
  {
    id: 'squeeze-infantil',
    title: 'Squeeze infantil personalizado',
    categorySlug: 'garrafas-squeezes',
    description: 'Modelo escolar com nome, personagem, tema e identificação.',
    price: 64.9,
    image: 'assets/img/image_14_e164289b97.jpg',
    tag: 'Infantil'
  },
  {
    id: 'garrafa-premium',
    title: 'Garrafa premium com gravação',
    categorySlug: 'garrafas-squeezes',
    description: 'Acabamento sofisticado para presente pessoal ou corporativo.',
    price: 94.9,
    image: 'assets/img/image_14_e164289b97.jpg',
    tag: 'Sofisticado'
  },
  {
    id: 'camiseta-frase',
    title: 'Camiseta com frase personalizada',
    categorySlug: 'camisetas-personalizadas',
    description: 'Estampa autoral com frase, data, apelido ou referência visual.',
    price: 59.9,
    image: 'assets/img/image_15_b73e9c1cd5.jpg',
    tag: 'Sob encomenda'
  },
  {
    id: 'camiseta-evento',
    title: 'Camiseta para eventos',
    categorySlug: 'camisetas-personalizadas',
    description: 'Ideal para aniversários, viagens, empresas, turmas e equipes.',
    price: 64.9,
    image: 'assets/img/image_15_b73e9c1cd5.jpg',
    tag: 'Eventos'
  },
  {
    id: 'camiseta-presente',
    title: 'Camiseta presente criativo',
    categorySlug: 'camisetas-personalizadas',
    description: 'Criação personalizada com tema afetivo e acabamento de presente.',
    price: 69.9,
    image: 'assets/img/image_15_b73e9c1cd5.jpg',
    tag: 'Criativo'
  },
  {
    id: 'necessaire-nome',
    title: 'Nécessaire com nome',
    categorySlug: 'bolsas-necessaires',
    description: 'Peça funcional e elegante para rotina, viagem ou presente.',
    price: 64.9,
    image: 'assets/img/image_16_d2bd848410.jpg',
    tag: 'Elegante'
  },
  {
    id: 'bolsa-iniciais',
    title: 'Bolsa com iniciais',
    categorySlug: 'bolsas-necessaires',
    description: 'Personalização discreta para um visual sofisticado e útil.',
    price: 89.9,
    image: 'assets/img/image_16_d2bd848410.jpg',
    tag: 'Exclusivo'
  },
  {
    id: 'kit-necessaire',
    title: 'Kit nécessaire presenteável',
    categorySlug: 'bolsas-necessaires',
    description: 'Combinação prática com nome, cor e detalhe personalizado.',
    price: 99.9,
    image: 'assets/img/image_16_d2bd848410.jpg',
    tag: 'Kit'
  },
  {
    id: 'kit-cafe',
    title: 'Kit café personalizado',
    categorySlug: 'kits-caixas-presenteaveis',
    description: 'Caixa com caneca e complementos para um presente completo.',
    price: 129.9,
    image: 'assets/img/image_17_c30e67d2be.jpg',
    tag: 'Completo'
  },
  {
    id: 'caixa-presente-pai',
    title: 'Caixa presente especial',
    categorySlug: 'kits-caixas-presenteaveis',
    description: 'Kit com composição personalizada para datas comemorativas.',
    price: 149.9,
    image: 'assets/img/image_17_c30e67d2be.jpg',
    tag: 'Especial'
  },
  {
    id: 'kit-corporativo',
    title: 'Kit corporativo premium',
    categorySlug: 'kits-caixas-presenteaveis',
    description: 'Solução para empresas, clientes, equipes e ações promocionais.',
    price: 169.9,
    image: 'assets/img/image_17_c30e67d2be.jpg',
    tag: 'Empresa'
  },
  {
    id: 'tabua-madeira',
    title: 'Tábua em madeira gravada',
    categorySlug: 'madeira-laser',
    description: 'Gravação a laser com nome, brasão, frase ou homenagem.',
    price: 89.9,
    image: 'assets/img/image_18_e34fca8588.jpg',
    tag: 'Laser'
  },
  {
    id: 'porta-retrato-madeira',
    title: 'Porta-retrato em madeira',
    categorySlug: 'madeira-laser',
    description: 'Peça afetiva com gravação personalizada e acabamento rústico elegante.',
    price: 74.9,
    image: 'assets/img/image_18_e34fca8588.jpg',
    tag: 'Afetivo'
  },
  {
    id: 'chaveiro-madeira',
    title: 'Chaveiro em madeira gravado',
    categorySlug: 'madeira-laser',
    description: 'Lembrança personalizada para eventos, empresas e presentes simples.',
    price: 24.9,
    image: 'assets/img/image_18_e34fca8588.jpg',
    tag: 'Lembrança'
  },
  {
    id: 'ecobag-arte',
    title: 'Ecobag com arte personalizada',
    categorySlug: 'ecobags-personalizadas',
    description: 'Modelo versátil com arte, frase, ilustração, logo ou campanha.',
    price: 39.9,
    image: 'assets/img/image_19_129db25c22.jpg',
    tag: 'Sustentável'
  },
  {
    id: 'ecobag-evento',
    title: 'Ecobag para eventos',
    categorySlug: 'ecobags-personalizadas',
    description: 'Ótima para kits de evento, brindes, cursos e ações de marca.',
    price: 44.9,
    image: 'assets/img/image_19_129db25c22.jpg',
    tag: 'Evento'
  },
  {
    id: 'ecobag-presente',
    title: 'Ecobag presente criativo',
    categorySlug: 'ecobags-personalizadas',
    description: 'Personalização delicada para presentear com utilidade e estilo.',
    price: 49.9,
    image: 'assets/img/image_19_129db25c22.jpg',
    tag: 'Criativo'
  }
];


const storeProductCollections = [
  {
    id: 'mais-vendidos',
    title: 'Mais vendidos',
    subtitle: 'Favoritos para presentear com carinho.',
    productIds: ['caneca-foto-nome', 'copo-termico-nome', 'kit-cafe', 'caixa-presente-pai', 'garrafa-premium', 'necessaire-nome', 'tabua-madeira', 'ecobag-arte']
  },
  {
    id: 'presentes-personalizados',
    title: 'Presentes personalizados',
    subtitle: 'Foto, nome ou frase especial.',
    productIds: ['caneca-profissao', 'caneca-casal', 'garrafa-academia', 'squeeze-infantil', 'camiseta-frase', 'camiseta-presente', 'ecobag-presente', 'porta-retrato-madeira']
  },
  {
    id: 'kits-e-caixas',
    title: 'Kits e caixas presenteáveis',
    subtitle: 'Kits prontos para surpreender.',
    productIds: ['kit-cafe', 'caixa-presente-pai', 'kit-corporativo', 'kit-necessaire', 'necessaire-nome', 'bolsa-iniciais', 'tabua-madeira', 'copo-termico-presente']
  },
  {
    id: 'novidades-da-loja',
    title: 'Novidades e destaques',
    subtitle: 'Ideias novas para cada ocasião.',
    productIds: ['copo-termico-logo', 'camiseta-evento', 'chaveiro-madeira', 'ecobag-evento', 'garrafa-premium', 'kit-corporativo', 'bolsa-iniciais', 'caneca-casal']
  }
];

const storeState = {
  cart: loadStoreCart(),
  searchTerm: '',
  activeCategory: 'all'
};

const storeSelectors = {
  header: '[data-store-main-header]',
  activeCategoryLabel: '[data-store-active-category-label]',
  productShowcase: '[data-store-product-showcase]',
  productCarousel: '[data-store-product-carousel]',
  productCarouselShell: '[data-store-product-carousel-shell]',
  carouselPrev: '[data-store-carousel-prev]',
  carouselNext: '[data-store-carousel-next]',
  carouselProgress: '[data-store-carousel-progress]',
  carouselIndex: '[data-store-carousel-index]',
  searchForm: '[data-store-search-form]',
  searchInput: '[data-store-search-input]',
  resultCount: '[data-store-result-count]',
  emptyState: '[data-store-empty-state]',
  cartDrawer: '[data-store-cart-drawer]',
  cartOpen: '[data-store-cart-open]',
  cartClose: '[data-store-cart-close]',
  cartItems: '[data-store-cart-items]',
  cartCount: '[data-store-cart-count]',
  cartTotal: '[data-store-cart-total]',
  checkoutWhatsapp: '[data-store-checkout-whatsapp]',
  mobileMenu: '[data-store-mobile-menu]',
  mobileMenuOpen: '[data-store-mobile-menu-open]',
  mobileMenuClose: '[data-store-mobile-menu-close]',
  whatsappLink: '[data-store-whatsapp-link]',
  currentYear: '[data-store-current-year]',
  heroCarousel: '[data-hero-carousel]',
  heroSlide: '.hero-slide',
  heroCopy: '[data-hero-copy]',
  heroTitleText: '[data-hero-title-text]',
  heroSubtitleText: '[data-hero-subtitle-text]'
};

const storeQuery = (selector, scope = document) => scope.querySelector(selector);
const storeQueryAll = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

let storeRevealObserver = null;
let storeResizeTimer = null;
let storeCarouselFrame = null;

function initStorefront() {
  renderStoreProducts();
  renderStoreCart();
  setupStoreSearch();
  setupStoreHeroCarousel();
  setupStoreProductCarousel();
  setupStoreCartDrawer();
  setupStoreMobileMenu();
  setupStoreWhatsAppLinks();
  setupStoreRevealAnimation();
  setupStoreHeaderState();
  setupStoreYear();
}

function getStoreCategory(slug) {
  return storeCategories.find((category) => category.slug === slug);
}

function formatStoreCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

function normalizeStoreText(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function sanitizeStoreHtml(value) {
  const span = document.createElement('span');
  span.textContent = value;
  return span.innerHTML;
}

function getVisibleStoreProducts() {
  return storeProducts.filter((product) => {
    const matchesCategory = storeState.activeCategory === 'all' || product.categorySlug === storeState.activeCategory;
    const matchesSearch = !storeState.searchTerm || productMatchesStoreSearch(product);
    return matchesCategory && matchesSearch;
  });
}

function productMatchesStoreSearch(product) {
  const category = getStoreCategory(product.categorySlug);
  const searchable = normalizeStoreText([
    product.title,
    product.description,
    product.tag,
    category?.label || ''
  ].join(' '));

  return searchable.includes(storeState.searchTerm);
}

function renderStoreProducts() {
  const showcase = storeQuery(storeSelectors.productShowcase);
  const emptyState = storeQuery(storeSelectors.emptyState);
  const resultCount = storeQuery(storeSelectors.resultCount);
  const activeCategoryLabel = storeQuery(storeSelectors.activeCategoryLabel);

  if (!showcase) return;

  const visibleProducts = getVisibleStoreProducts();
  const category = getStoreCategory(storeState.activeCategory);
  const hasFocusedView = storeState.activeCategory !== 'all' || Boolean(storeState.searchTerm);

  const sections = hasFocusedView
    ? [{
        id: storeState.activeCategory === 'all' ? 'resultado-busca' : `categoria-${storeState.activeCategory}`,
        title: category ? category.label : 'Todos os produtos',
        subtitle: storeState.searchTerm
          ? 'Produtos encontrados conforme a busca realizada.'
          : (category ? category.summary : 'Vitrine completa de personalizados da loja.'),
        products: visibleProducts
      }]
    : storeProductCollections.map((collection) => ({
        ...collection,
        products: collection.productIds
          .map((productId) => storeProducts.find((product) => product.id === productId))
          .filter(Boolean)
      })).filter((collection) => collection.products.length > 0);

  showcase.innerHTML = sections.map(createStoreProductCarouselSection).join('');

  const hasItems = visibleProducts.length > 0;
  showcase.hidden = !hasItems;
  if (emptyState) emptyState.hidden = hasItems;

  if (resultCount) {
    resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`;
  }

  if (activeCategoryLabel) {
    const categoryText = category ? category.label : 'Todos os produtos';
    const searchText = storeState.searchTerm ? ` • busca: "${storeState.searchTerm}"` : '';
    activeCategoryLabel.textContent = `${categoryText}${searchText}`;
  }

  storeQueryAll('[data-store-add-to-cart]', showcase).forEach((button) => {
    button.addEventListener('click', () => addStoreProductToCart(button.dataset.storeAddToCart, button));
  });

  storeQueryAll(storeSelectors.productCarousel, showcase).forEach((carousel) => {
    carousel.addEventListener('scroll', () => scheduleStoreCarouselControlsUpdate(carousel), { passive: true });
  });

  resetStoreCarouselPosition();
  updateStoreCarouselControls();
}

function createStoreProductCarouselSection(collection, sectionIndex) {
  return `
    <section class="store-product-carousel-shell" data-store-product-carousel-shell>
      <div class="store-product-carousel-heading">
        <div>
          <h3>${sanitizeStoreHtml(collection.title)}</h3>
          <p>${sanitizeStoreHtml(collection.subtitle)}</p>
        </div>
        <span class="store-product-carousel-count">${collection.products.length} ${collection.products.length === 1 ? 'opção' : 'opções'}</span>
      </div>

      <div class="store-product-carousel" data-store-product-carousel tabindex="0" aria-label="Carrossel: ${sanitizeStoreHtml(collection.title)}">
        <div class="store-product-track">
          ${collection.products.map((product, index) => createStoreProductCard(product, index)).join('')}
        </div>
      </div>

      <div class="store-carousel-controls" aria-label="Controles do carrossel ${sanitizeStoreHtml(collection.title)}">
        <button class="store-carousel-control" type="button" data-store-carousel-prev aria-label="Itens anteriores de ${sanitizeStoreHtml(collection.title)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"/></svg>
        </button>
        <div class="store-carousel-meta" aria-live="polite">
          <span class="store-carousel-index" data-store-carousel-index>1 / 1</span>
          <span class="store-carousel-progress" aria-hidden="true"><span data-store-carousel-progress></span></span>
        </div>
        <button class="store-carousel-control" type="button" data-store-carousel-next aria-label="Próximos itens de ${sanitizeStoreHtml(collection.title)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
        </button>
      </div>
    </section>
  `;
}

function createStoreProductCard(product, index) {
  const category = getStoreCategory(product.categorySlug);
  return `
    <article class="store-product-card" style="--product-image-position: ${sanitizeStoreHtml(product.imagePosition || 'center')};" data-store-product-id="${sanitizeStoreHtml(product.id)}">
      <div class="store-product-card__image">
        <img src="${sanitizeStoreHtml(product.image)}" alt="${sanitizeStoreHtml(product.title)}" loading="lazy" width="1920" height="1826">
        <span class="store-product-card__tag">${sanitizeStoreHtml(product.tag)}</span>
      </div>
      <div class="store-product-card__body">
        <div>
          <p class="store-product-card__category">${sanitizeStoreHtml(category?.label || 'Personalizado')}</p>
          <h3>${sanitizeStoreHtml(product.title)}</h3>
          <p>${sanitizeStoreHtml(product.description)}</p>
        </div>
        <div class="store-product-card__bottom">
          <span class="store-product-price">a partir de ${formatStoreCurrency(product.price)}</span>
          <button class="store-product-add" type="button" data-store-add-to-cart="${sanitizeStoreHtml(product.id)}">Adicionar ao pedido</button>
        </div>
      </div>
    </article>
  `;
}

function setupStoreHeroCarousel() {
  const carousel = storeQuery(storeSelectors.heroCarousel);
  if (!carousel) return;

  const slides = storeQueryAll(storeSelectors.heroSlide, carousel);
  if (!slides.length) return;

  const copy = storeQuery(storeSelectors.heroCopy, carousel);
  const titleText = storeQuery(storeSelectors.heroTitleText, carousel);
  const subtitleText = storeQuery(storeSelectors.heroSubtitleText, carousel);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let copyTimer = null;

  const applyHeroCopy = (index, animate = true) => {
    const slide = slides[index];
    if (!slide || (!titleText && !subtitleText)) return;

    const updateCopy = () => {
      if (titleText && slide.dataset.heroTitle) {
        titleText.textContent = slide.dataset.heroTitle;
      }

      if (subtitleText && slide.dataset.heroSubtitle) {
        subtitleText.textContent = slide.dataset.heroSubtitle;
      }
    };

    window.clearTimeout(copyTimer);

    if (!animate || !copy || prefersReducedMotion) {
      copy?.classList.remove('is-copy-changing');
      updateCopy();
      return;
    }

    copy.classList.add('is-copy-changing');
    copyTimer = window.setTimeout(() => {
      updateCopy();
      window.requestAnimationFrame(() => copy.classList.remove('is-copy-changing'));
    }, 220);
  };

  let activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
  if (activeIndex < 0) activeIndex = 0;

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === activeIndex);
  });
  applyHeroCopy(activeIndex, false);

  if (slides.length === 1) return;

  const interval = Number(carousel.dataset.heroInterval) || 5000;

  window.setInterval(() => {
    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('active');
    applyHeroCopy(activeIndex);
  }, interval);
}

function setupStoreSearch() {
  const form = storeQuery(storeSelectors.searchForm);
  const input = storeQuery(storeSelectors.searchInput);
  if (!form || !input) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    storeState.searchTerm = normalizeStoreText(input.value);
    renderStoreProducts();
  });

  input.addEventListener('input', () => {
    storeState.searchTerm = normalizeStoreText(input.value);
    renderStoreProducts();
  });
}

function setupStoreProductCarousel() {
  document.addEventListener('click', (event) => {
    const prevButton = event.target.closest(storeSelectors.carouselPrev);
    const nextButton = event.target.closest(storeSelectors.carouselNext);

    if (prevButton || nextButton) {
      const shell = event.target.closest(storeSelectors.productCarouselShell);
      const carousel = shell?.querySelector(storeSelectors.productCarousel);
      scrollStoreCarousel(carousel, prevButton ? -1 : 1);
    }
  });

  window.addEventListener('resize', () => {
    window.clearTimeout(storeResizeTimer);
    storeResizeTimer = window.setTimeout(updateStoreCarouselControls, 120);
  });

  updateStoreCarouselControls();
}

function getStoreCarouselStep(carousel) {
  if (!carousel) return 260;
  const firstCard = carousel.querySelector('.store-product-card');
  if (!firstCard) return Math.max(240, carousel.clientWidth * 0.72);
  const trackStyle = window.getComputedStyle(carousel.querySelector('.store-product-track') || carousel);
  const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '18') || 18;
  return firstCard.getBoundingClientRect().width + gap;
}

function scrollStoreCarousel(carousel, direction) {
  if (!carousel) return;

  const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
  if (maxScroll <= 2) return;

  const current = carousel.scrollLeft;
  const step = getStoreCarouselStep(carousel);
  const nextPosition = current + direction * step;

  if (direction > 0 && nextPosition >= maxScroll - 4) {
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }

  if (direction < 0 && nextPosition <= 4) {
    carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
    return;
  }

  carousel.scrollTo({
    left: Math.max(0, Math.min(maxScroll, nextPosition)),
    behavior: 'smooth'
  });
}

function resetStoreCarouselPosition() {
  storeQueryAll(storeSelectors.productCarousel).forEach((carousel) => {
    carousel.scrollTo({ left: 0, behavior: 'auto' });
  });
}

function scheduleStoreCarouselControlsUpdate(targetCarousel) {
  if (storeCarouselFrame) window.cancelAnimationFrame(storeCarouselFrame);
  storeCarouselFrame = window.requestAnimationFrame(() => {
    updateStoreCarouselControls(targetCarousel);
    storeCarouselFrame = null;
  });
}

function updateStoreCarouselControls(targetCarousel) {
  const carousels = targetCarousel ? [targetCarousel] : storeQueryAll(storeSelectors.productCarousel);

  carousels.forEach((carousel) => {
    const shell = carousel.closest(storeSelectors.productCarouselShell);
    const prev = shell?.querySelector(storeSelectors.carouselPrev);
    const next = shell?.querySelector(storeSelectors.carouselNext);
    const progress = shell?.querySelector(storeSelectors.carouselProgress);
    const indexLabel = shell?.querySelector(storeSelectors.carouselIndex);

    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    const current = Math.max(0, carousel.scrollLeft);
    const cards = storeQueryAll('.store-product-card', carousel);
    const step = getStoreCarouselStep(carousel);
    const visibleCards = step > 0 ? Math.max(1, Math.round((carousel.clientWidth + 2) / step)) : 1;
    const totalPositions = Math.max(1, cards.length - visibleCards + 1);
    const currentPosition = maxScroll <= 2 ? 1 : Math.min(totalPositions, Math.max(1, Math.round(current / step) + 1));
    const percent = totalPositions === 1 ? 100 : Math.max(10, (currentPosition / totalPositions) * 100);

    if (prev) prev.disabled = maxScroll <= 2;
    if (next) next.disabled = maxScroll <= 2;
    if (progress) progress.style.width = `${percent}%`;
    if (indexLabel) indexLabel.textContent = `${currentPosition} / ${totalPositions}`;
  });
}

function addStoreProductToCart(productId, sourceButton = null) {
  const product = storeProducts.find((item) => item.id === productId);
  if (!product) return;

  const existing = storeState.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    storeState.cart.push({ id: productId, quantity: 1 });
  }

  persistStoreCart();
  renderStoreCart();
  showStoreAddedFeedback(sourceButton, productId);
}

function showStoreAddedFeedback(sourceButton, productId) {
  const button = sourceButton || storeQuery(`[data-store-add-to-cart="${CSS.escape(productId)}"]`);
  if (!button) return;

  const originalText = button.dataset.storeOriginalText || button.textContent.trim();
  button.dataset.storeOriginalText = originalText;
  button.classList.add('is-added');
  button.textContent = 'Selecionado';

  window.clearTimeout(button.storeAddedTimer);
  button.storeAddedTimer = window.setTimeout(() => {
    button.classList.remove('is-added');
    button.textContent = originalText;
  }, 1200);
}


function updateStoreCartQuantity(productId, change) {
  const item = storeState.cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    storeState.cart = storeState.cart.filter((cartItem) => cartItem.id !== productId);
  }

  persistStoreCart();
  renderStoreCart();
}

function removeStoreCartItem(productId) {
  storeState.cart = storeState.cart.filter((item) => item.id !== productId);
  persistStoreCart();
  renderStoreCart();
}

function renderStoreCart() {
  const itemsContainer = storeQuery(storeSelectors.cartItems);
  const countElements = storeQueryAll(storeSelectors.cartCount);
  const totalElement = storeQuery(storeSelectors.cartTotal);
  const checkoutLink = storeQuery(storeSelectors.checkoutWhatsapp);

  const totalItems = storeState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = storeState.cart.reduce((sum, item) => {
    const product = storeProducts.find((productItem) => productItem.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  countElements.forEach((element) => { element.textContent = totalItems; });
  if (totalElement) totalElement.textContent = formatStoreCurrency(totalValue);

  if (itemsContainer) {
    if (!storeState.cart.length) {
      itemsContainer.innerHTML = '<div class="store-cart-empty"><p>Seu carrinho está vazio.<br>Adicione um produto para montar seu pedido.</p></div>';
    } else {
      itemsContainer.innerHTML = storeState.cart.map(createStoreCartItem).join('');
      storeQueryAll('[data-store-cart-increase]', itemsContainer).forEach((button) => {
        button.addEventListener('click', () => updateStoreCartQuantity(button.dataset.storeCartIncrease, 1));
      });
      storeQueryAll('[data-store-cart-decrease]', itemsContainer).forEach((button) => {
        button.addEventListener('click', () => updateStoreCartQuantity(button.dataset.storeCartDecrease, -1));
      });
      storeQueryAll('[data-store-cart-remove]', itemsContainer).forEach((button) => {
        button.addEventListener('click', () => removeStoreCartItem(button.dataset.storeCartRemove));
      });
    }
  }

  if (checkoutLink) {
    checkoutLink.href = createStoreWhatsAppUrl(createStoreCheckoutMessage());
  }
}

function createStoreCartItem(item) {
  const product = storeProducts.find((productItem) => productItem.id === item.id);
  if (!product) return '';

  return `
    <article class="store-cart-item">
      <img src="${sanitizeStoreHtml(product.image)}" alt="${sanitizeStoreHtml(product.title)}" width="74" height="74">
      <div>
        <h3>${sanitizeStoreHtml(product.title)}</h3>
        <p>${formatStoreCurrency(product.price)} • ${sanitizeStoreHtml(getStoreCategory(product.categorySlug)?.label || 'Personalizado')}</p>
        <div class="store-cart-item__qty" aria-label="Quantidade">
          <button type="button" data-store-cart-decrease="${sanitizeStoreHtml(product.id)}" aria-label="Diminuir quantidade">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-store-cart-increase="${sanitizeStoreHtml(product.id)}" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <button class="store-cart-item__remove" type="button" data-store-cart-remove="${sanitizeStoreHtml(product.id)}" aria-label="Remover produto">×</button>
    </article>
  `;
}

function createStoreCheckoutMessage() {
  if (!storeState.cart.length) return storeConfig.defaultMessage;

  const lines = storeState.cart.map((item) => {
    const product = storeProducts.find((productItem) => productItem.id === item.id);
    return product ? `• ${item.quantity}x ${product.title} - ${formatStoreCurrency(product.price)}` : '';
  }).filter(Boolean);

  const total = storeState.cart.reduce((sum, item) => {
    const product = storeProducts.find((productItem) => productItem.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  return `Olá! Quero enviar este pedido personalizado:\n${lines.join('\n')}\nTotal estimado: ${formatStoreCurrency(total)}\n\nPode confirmar personalização, prazo e disponibilidade?`;
}

function setupStoreCartDrawer() {
  storeQueryAll(storeSelectors.cartOpen).forEach((button) => button.addEventListener('click', openStoreCartDrawer));
  storeQueryAll(storeSelectors.cartClose).forEach((button) => button.addEventListener('click', closeStoreCartDrawer));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeStoreCartDrawer();
      closeStoreMobileMenu();
    }
  });
}

function openStoreCartDrawer() {
  const drawer = storeQuery(storeSelectors.cartDrawer);
  if (!drawer) return;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('store-no-scroll');
}

function closeStoreCartDrawer() {
  const drawer = storeQuery(storeSelectors.cartDrawer);
  if (!drawer) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('store-no-scroll');
}

function setupStoreMobileMenu() {
  const menu = storeQuery(storeSelectors.mobileMenu);
  const openButton = storeQuery(storeSelectors.mobileMenuOpen);
  const closeButtons = storeQueryAll(storeSelectors.mobileMenuClose);

  if (!menu || !openButton) return;

  openButton.addEventListener('click', openStoreMobileMenu);
  closeButtons.forEach((button) => button.addEventListener('click', closeStoreMobileMenu));
}

function openStoreMobileMenu() {
  const menu = storeQuery(storeSelectors.mobileMenu);
  const openButton = storeQuery(storeSelectors.mobileMenuOpen);
  if (!menu) return;

  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  openButton?.setAttribute('aria-expanded', 'true');
  document.body.classList.add('store-no-scroll');
}

function closeStoreMobileMenu() {
  const menu = storeQuery(storeSelectors.mobileMenu);
  const openButton = storeQuery(storeSelectors.mobileMenuOpen);
  if (!menu) return;

  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  openButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('store-no-scroll');
}

function createStoreWhatsAppUrl(message = storeConfig.defaultMessage) {
  const digits = String(storeConfig.whatsapp).replace(/\D/g, '');
  const text = encodeURIComponent(message);
  if (!digits) return `https://wa.me/?text=${text}`;
  return `https://wa.me/${digits}?text=${text}`;
}

function setupStoreWhatsAppLinks() {
  storeQueryAll(storeSelectors.whatsappLink).forEach((link) => {
    const message = link.dataset.storeWhatsappMessage || storeConfig.defaultMessage;
    link.href = createStoreWhatsAppUrl(message);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

function setupStoreRevealAnimation() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    storeQueryAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  storeRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      storeRevealObserver.unobserve(entry.target);
    });
  }, {
    root: null,
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });

  observeStoreRevealElements(document);
}

function observeStoreRevealElements(scope = document) {
  const elements = storeQueryAll('.reveal', scope);
  if (!storeRevealObserver) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  elements.forEach((element) => {
    if (!element.classList.contains('is-visible')) {
      storeRevealObserver.observe(element);
    }
  });
}

function setupStoreHeaderState() {
  const header = storeQuery(storeSelectors.header);
  if (!header) return;

  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function setupStoreYear() {
  const year = storeQuery(storeSelectors.currentYear);
  if (year) year.textContent = new Date().getFullYear();
}

function loadStoreCart() {
  try {
    return JSON.parse(localStorage.getItem('storefront-cart') || '[]');
  } catch (error) {
    return [];
  }
}

function persistStoreCart() {
  localStorage.setItem('storefront-cart', JSON.stringify(storeState.cart));
}

document.addEventListener('DOMContentLoaded', initStorefront);
