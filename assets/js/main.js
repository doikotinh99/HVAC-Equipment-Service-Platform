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
