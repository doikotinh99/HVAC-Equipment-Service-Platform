function initApp() {
  if (typeof initIcons === 'function') initIcons();
  if (typeof initNavigation === 'function') initNavigation();
  if (typeof initForms === 'function') initForms();
  if (typeof initIndexDynamicData === 'function') initIndexDynamicData();
  if (typeof initAccordions === 'function') initAccordions();

  if (document.getElementById('type-line-1') && typeof initTypewriter === 'function') {
    initTypewriter();
  }

  if ((document.getElementById('productsContainer') || document.getElementById('productsCatalogGrid')) && typeof initProductsCatalog === 'function') {
    initProductsCatalog();
  }

  if (document.getElementById('detailTitle') && typeof initProductDetail === 'function') {
    initProductDetail();
  }

  initFloatingHotline();
}

function initFloatingHotline() {
  const floating = document.getElementById('floatingHotline');
  if (!floating) return;

  const updateVisibility = () => {
    if (window.innerWidth <= 768) {
      if (window.scrollY < 200) {
        floating.style.opacity = '0';
        floating.style.pointerEvents = 'none';
        floating.style.transform = 'translateY(12px)';
      } else {
        floating.style.opacity = '1';
        floating.style.pointerEvents = 'auto';
        floating.style.transform = 'translateY(0)';
      }
    } else {
      floating.style.opacity = '1';
      floating.style.pointerEvents = 'auto';
      floating.style.transform = 'none';
    }
  };

  floating.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility, { passive: true });
  updateVisibility();
}

if (typeof window !== 'undefined') {
  window.initApp = initApp;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
