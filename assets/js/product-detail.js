/**
 * HVAC Equipment & Boiler Platform - Product Detail Page Controller
 * Dynamically renders complete specifications, interactive gallery,
 * hardware bundle matrix, 2-tier telemetry tabs, and certified installer fulfillment
 * for all 35 catalog equipment models.
 */

(function () {
  'use strict';

  // State
  let currentProduct = null;
  let isAddonActive = false;
  let activeSpecTab = '';
  let isDeliveryIncluded = true;
  let currentBasePrice = 8450;
  let currentBaseFinance = 129;
  let addonPriceAdd = 0;
  let addonFinanceAdd = 0;

  function showToast(message, type = 'info') {
    let toast = document.getElementById('pdpToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pdpToast';
      toast.className = 'pdp-toast';
      document.body.appendChild(toast);
    }

    const iconId = type === 'error' ? 'icon-alert' : type === 'success' ? 'icon-check-circle' : 'icon-shield';
    toast.className = `pdp-toast ${type === 'error' ? 'toast-error' : type === 'success' ? 'toast-success' : ''} active`;
    toast.innerHTML = `
      <svg class="svg-icon" style="width:18px;height:18px;flex-shrink:0;" aria-hidden="true"><use href="#${iconId}"></use></svg>
      <span>${message}</span>
    `;

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  function initProductDetail() {
    if (window._pdpInitialized) return;
    window._pdpInitialized = true;

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 'carrier-infinity-98';
    const products = window.BOILER_PRODUCTS || (typeof BOILER_PRODUCTS !== 'undefined' ? BOILER_PRODUCTS : []);

    currentProduct = products.find(p => p.id === productId) || products[0];
    if (!currentProduct) return;

    currentBasePrice = currentProduct.price_from || 3950;
    currentBaseFinance = currentProduct.monthly_financing || Math.max(12, Math.round(currentBasePrice / 60));

    // Page title and breadcrumbs
    document.title = `${currentProduct.name} | HVAC Specifications & Turnkey Install`;
    
    const breadcrumbCurrent = document.getElementById('pdpBreadcrumbCurrent');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = currentProduct.name;

    const titleEl = document.getElementById('pdpProductTitle');
    if (titleEl) titleEl.textContent = currentProduct.name;

    const ratingEl = document.getElementById('pdpRatingVal');
    if (ratingEl) ratingEl.textContent = (currentProduct.rating || 4.9).toFixed(1);

    const reviewsEl = document.getElementById('pdpReviewsCount');
    if (reviewsEl) reviewsEl.textContent = `(${currentProduct.reviewsCount || 287} reviews)`;

    const efficiencyTag = document.getElementById('pdpEfficiencyTag');
    if (efficiencyTag) {
      efficiencyTag.textContent = currentProduct.efficiency
        ? `${currentProduct.efficiency} High Efficiency`
        : 'Certified High Efficiency';
    }

    initGallery();
    initTrustBadges();
    initHardwareMatrix();
    initSpecTabs();
    initFulfillment();
    initModal();
  }

  function initGallery() {
    const mainImg = document.getElementById('pdpMainImg');
    const strip = document.querySelector('.pdp-thumbnails-strip');
    if (!mainImg) return;

    mainImg.src = currentProduct.image || 'assets/images/boiler-img-1.jpg';
    mainImg.alt = currentProduct.name;

    const galleryImages = currentProduct.gallery && currentProduct.gallery.length > 0
      ? currentProduct.gallery
      : [currentProduct.image];

    if (strip) {
      strip.innerHTML = galleryImages.map((imgSrc, idx) => `
        <button type="button" class="pdp-thumb-btn ${idx === 0 ? 'active' : ''}" data-img="${imgSrc}" aria-label="View photo ${idx + 1}">
          <img src="${imgSrc}" onerror="this.src='assets/images/boiler-img-1.jpg'" alt="${currentProduct.name} Thumbnail ${idx + 1}">
        </button>
      `).join('');

      const thumbButtons = strip.querySelectorAll('.pdp-thumb-btn');
      thumbButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetSrc = btn.getAttribute('data-img');
          if (!targetSrc) return;

          thumbButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          mainImg.style.opacity = '0.3';
          setTimeout(() => {
            mainImg.src = targetSrc;
            mainImg.style.opacity = '1';
          }, 120);
        });
      });
    }
  }

  function initTrustBadges() {
    const badgesGrid = document.querySelector('.pdp-trust-badges-grid');
    if (!badgesGrid) return;

    const warranty = currentProduct.warranty || '10-Yr Parts Warranty';
    const tag2 = currentProduct.a2lReady
      ? 'A2L Low-GWP Ready'
      : (currentProduct.energyStar ? 'Energy Star Certified' : 'Low-NOx Certified');
    const tag2Icon = currentProduct.a2lReady ? 'icon-leaf' : 'icon-award';
    const tag3 = currentProduct.energyStar ? 'High Efficiency AHRI' : 'ASME CSD-1 Certified';
    const certNumber = currentProduct.specs && currentProduct.specs['AHRI Certified']
      ? currentProduct.specs['AHRI Certified']
      : (currentProduct.specs && currentProduct.specs['AHRI Certification'] ? currentProduct.specs['AHRI Certification'] : '#20849102');

    badgesGrid.innerHTML = `
      <div class="pdp-trust-badge-item">
        <svg class="svg-icon" style="color:var(--cyan);width:20px;height:20px;" aria-hidden="true"><use href="#icon-shield"></use></svg>
        <span class="pdp-trust-badge-label">${warranty}</span>
      </div>
      <div class="pdp-trust-badge-item">
        <svg class="svg-icon" style="color:var(--green);width:20px;height:20px;" aria-hidden="true"><use href="#${tag2Icon}"></use></svg>
        <span class="pdp-trust-badge-label">${tag2}</span>
      </div>
      <div class="pdp-trust-badge-item">
        <svg class="svg-icon" style="color:var(--cyan);width:20px;height:20px;" aria-hidden="true"><use href="#icon-award"></use></svg>
        <span class="pdp-trust-badge-label">${tag3}</span>
      </div>
      <div class="pdp-trust-badge-item">
        <svg class="svg-icon" style="color:var(--green);width:20px;height:20px;" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
        <span class="pdp-trust-badge-label">AHRI Certified ${certNumber}</span>
      </div>
    `;
  }

  function getAvatarMeta(key, code) {
    if (key === 'furnace') return { icon: 'icon-fire', color: 'var(--coral)', bgClass: 'pdp-avatar-furnace' };
    if (key === 'coil') return { icon: 'icon-snowflake', color: 'var(--cyan)', bgClass: 'pdp-avatar-coil' };
    if (key === 'condenser') return { icon: 'icon-fan', color: 'var(--green)', bgClass: 'pdp-avatar-condenser' };
    if (key === 'boiler') return { icon: 'icon-fire', color: 'var(--coral)', bgClass: 'pdp-avatar-furnace' };
    if (key === 'circulator' || key === 'pump') return { icon: 'icon-fan', color: 'var(--cyan)', bgClass: 'pdp-avatar-coil' };
    if (key === 'manifold' || key === 'mixing') return { icon: 'icon-tools', color: 'var(--cyan)', bgClass: 'pdp-avatar-coil' };
    if (key === 'control') return { icon: 'icon-cpu', color: 'var(--yellow)', bgClass: 'pdp-avatar-boiler' };
    if (key === 'trim' || key === 'neutralizer') return { icon: 'icon-tools', color: 'var(--green)', bgClass: 'pdp-avatar-water' };
    if (key === 'lwco' || key === 'sensor') return { icon: 'icon-shield', color: 'var(--cyan)', bgClass: 'pdp-avatar-coil' };
    return { icon: 'icon-check-circle', color: 'var(--green)', bgClass: 'pdp-avatar-water' };
  }

  function initHardwareMatrix() {
    const matrixStack = document.querySelector('.pdp-matrix-stack');
    const addonsRow = document.querySelector('.pdp-addons-row');
    if (!matrixStack || !currentProduct.bundleMatrix) return;

    const matrix = currentProduct.bundleMatrix;
    const optionalKeys = ['waterHeater', 'feeder', 'indirectTank', 'gateway', 'actuators', 'remoteSensor', 'recircKit'];
    const baseItems = Object.entries(matrix).filter(([k]) => !optionalKeys.includes(k));
    const optionalEntry = Object.entries(matrix).find(([k]) => optionalKeys.includes(k));

    matrixStack.innerHTML = baseItems.map(([key, item]) => {
      const meta = getAvatarMeta(key, item.code);
      return `
        <div class="pdp-matrix-item" id="pdpRow_${key}">
          <div class="pdp-matrix-left">
            <div class="pdp-unit-avatar ${meta.bgClass}" title="${item.name}">
              <svg class="svg-icon" style="width:16px;height:16px;color:${meta.color};" aria-hidden="true"><use href="#${meta.icon}"></use></svg>
            </div>
            <div class="pdp-unit-meta">
              <div class="pdp-unit-header">
                <span class="pdp-unit-model">${item.model}</span>
                <span class="pdp-unit-name">${item.name}</span>
              </div>
              <p class="pdp-unit-desc">${item.specs}</p>
            </div>
          </div>
          <span class="pdp-matrix-badge ${item.badgeClass || 'pdp-chip-teal'}">${item.badge}</span>
        </div>
      `;
    }).join('');

    if (optionalEntry) {
      const [optKey, optItem] = optionalEntry;
      addonPriceAdd = optItem.priceAdd || 500;
      addonFinanceAdd = optItem.financeAdd || 9;

      const optMeta = getAvatarMeta(optKey, optItem.code);
      const optHtml = `
        <div class="pdp-matrix-item" id="pdpRowOptional" style="display: none;">
          <div class="pdp-matrix-left">
            <div class="pdp-unit-avatar ${optMeta.bgClass}" title="${optItem.name}">
              <svg class="svg-icon" style="width:16px;height:16px;color:${optMeta.color};" aria-hidden="true"><use href="#${optMeta.icon}"></use></svg>
            </div>
            <div class="pdp-unit-meta">
              <div class="pdp-unit-header">
                <span class="pdp-unit-model">${optItem.model}</span>
                <span class="pdp-unit-name">${optItem.name}</span>
              </div>
              <p class="pdp-unit-desc">${optItem.specs}</p>
            </div>
          </div>
          <span class="pdp-matrix-badge ${optItem.badgeClass || 'pdp-chip-teal'}">${optItem.badge}</span>
        </div>
      `;
      matrixStack.insertAdjacentHTML('beforeend', optHtml);

      const isFurnace = currentProduct.category === 'hvac-systems';
      if (addonsRow) {
        addonsRow.innerHTML = `
          <button type="button" id="pdpBtnToggleAddon" class="pdp-addon-btn">
            <div class="pdp-addon-left">
              <svg class="svg-icon" style="width:16px;height:16px;color:var(--cyan);"><use href="#icon-sparkles"></use></svg>
              <span>+ ${optItem.name} (+$${addonPriceAdd})</span>
            </div>
            <svg class="svg-icon" style="width:14px;height:14px;color:var(--text-muted);"><use href="#icon-plus"></use></svg>
          </button>
          <button type="button" id="pdpBtnForbidden" class="pdp-addon-btn" title="${isFurnace ? 'Forbidden combination: Never mix Furnace with Boiler' : 'Forbidden combination: Never mix Hydronic Boiler with Forced-Air Furnace'}">
            <div class="pdp-addon-left">
              <svg class="svg-icon" style="width:16px;height:16px;color:var(--coral);"><use href="#icon-alert"></use></svg>
              <span>+ ${isFurnace ? 'Hydronic Boiler' : 'Forced-Air Furnace'}</span>
            </div>
            <svg class="svg-icon" style="width:14px;height:14px;color:var(--coral);"><use href="#icon-close"></use></svg>
          </button>
        `;

        const btnToggle = document.getElementById('pdpBtnToggleAddon');
        if (btnToggle) {
          btnToggle.addEventListener('click', () => toggleAddon(optKey, optItem));
        }

        const btnForbidden = document.getElementById('pdpBtnForbidden');
        if (btnForbidden) {
          btnForbidden.addEventListener('click', (e) => {
            e.preventDefault();
            showToast(
              isFurnace
                ? 'Forbidden Combination: HVAC engineering standard strictly forbids combining a Forced-Air Furnace with a Hydronic Boiler in the same mechanical system.'
                : 'Forbidden Combination: Hydronic heating equipment operates on a closed hydronic water loop and cannot be coupled with a forced-air furnace.',
              'error'
            );
          });
        }
      }
    }

    updatePriceAndFinance();
  }

  function toggleAddon(optKey, optItem) {
    isAddonActive = !isAddonActive;
    const btnToggle = document.getElementById('pdpBtnToggleAddon');
    const optRow = document.getElementById('pdpRowOptional');

    if (isAddonActive) {
      if (btnToggle) {
        btnToggle.classList.add('active');
        btnToggle.innerHTML = `
          <div class="pdp-addon-left">
            <svg class="svg-icon" style="width:16px;height:16px;color:var(--green);" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
            <span>${optItem.name} Added</span>
          </div>
          <svg class="svg-icon" style="width:14px;height:14px;color:var(--cyan);" aria-hidden="true"><use href="#icon-close"></use></svg>
        `;
      }
      if (optRow) optRow.style.display = 'flex';
      showToast(`Added ${optItem.name} to system configuration.`, 'success');
    } else {
      if (btnToggle) {
        btnToggle.classList.remove('active');
        btnToggle.innerHTML = `
          <div class="pdp-addon-left">
            <svg class="svg-icon" style="width:16px;height:16px;color:var(--cyan);"><use href="#icon-sparkles"></use></svg>
            <span>+ ${optItem.name} (+$${addonPriceAdd})</span>
          </div>
          <svg class="svg-icon" style="width:14px;height:14px;color:var(--text-muted);"><use href="#icon-plus"></use></svg>
        `;
      }
      if (optRow) optRow.style.display = 'none';
      showToast(`Removed ${optItem.name} from system configuration.`, 'info');
    }

    updatePriceAndFinance();
  }

  function updatePriceAndFinance() {
    const totalPrice = isAddonActive ? (currentBasePrice + addonPriceAdd) : currentBasePrice;
    const totalFinance = isAddonActive ? (currentBaseFinance + addonFinanceAdd) : currentBaseFinance;

    const totalPriceEl = document.getElementById('pdpTotalPrice');
    const financePriceEl = document.getElementById('pdpFinancePrice');
    const modalSummaryPrice = document.getElementById('pdpModalPrice');

    if (totalPriceEl) totalPriceEl.textContent = `$${totalPrice.toLocaleString()}`;
    if (financePriceEl) financePriceEl.textContent = `$${totalFinance}/mo`;
    if (modalSummaryPrice) modalSummaryPrice.textContent = `$${totalPrice.toLocaleString()}`;
  }

  function getTabIcon(tabKey) {
    if (tabKey === 'furnace' || tabKey === 'boiler') return 'icon-fire';
    if (tabKey === 'coil') return 'icon-snowflake';
    if (tabKey === 'condenser') return 'icon-fan';
    if (tabKey === 'waterHeater' || tabKey === 'hydronics') return 'icon-droplet';
    if (tabKey === 'circulator' || tabKey === 'pump') return 'icon-fan';
    if (tabKey === 'trim' || tabKey === 'manifold') return 'icon-tools';
    if (tabKey === 'control') return 'icon-cpu';
    return 'icon-sliders';
  }

  function initSpecTabs() {
    const scroller = document.querySelector('.pdp-tabs-scroller');
    if (!scroller || !currentProduct.componentSpecs) return;

    const tabKeys = Object.keys(currentProduct.componentSpecs);
    if (tabKeys.length === 0) return;

    activeSpecTab = tabKeys[0];

    scroller.innerHTML = tabKeys.map((key, idx) => {
      const spec = currentProduct.componentSpecs[key];
      const icon = getTabIcon(key);
      return `
        <button type="button" class="pdp-spec-tab ${idx === 0 ? 'active' : ''}" data-tab="${key}" role="tab" aria-selected="${idx === 0 ? 'true' : 'false'}">
          <svg class="svg-icon" style="width:14px;height:14px;margin-right:6px;" aria-hidden="true"><use href="#${icon}"></use></svg>
          <span>${spec.title || key}</span>
        </button>
      `;
    }).join('');

    const tabs = scroller.querySelectorAll('.pdp-spec-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        if (target) switchSpecTab(target);
      });
    });

    renderSpecsContent(activeSpecTab);
  }

  function switchSpecTab(tabKey) {
    activeSpecTab = tabKey;
    const tabs = document.querySelectorAll('.pdp-spec-tab');
    tabs.forEach(t => {
      if (t.getAttribute('data-tab') === tabKey) {
        t.classList.add('active');
        t.setAttribute('aria-selected', 'true');
      } else {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });

    renderSpecsContent(tabKey);
  }

  function renderSpecsContent(tabKey) {
    if (!currentProduct || !currentProduct.componentSpecs) return;
    const specData = currentProduct.componentSpecs[tabKey];
    if (!specData) return;

    // Render 2x2 Bento Tiles
    const bentoContainer = document.getElementById('pdpBentoGrid');
    if (bentoContainer && specData.bento) {
      bentoContainer.innerHTML = specData.bento.map(item => `
        <div class="pdp-bento-tile">
          <div class="pdp-bento-top">
            <span class="pdp-bento-label">${item.label}</span>
            ${item.icon ? `<svg class="svg-icon pdp-bento-icon" aria-hidden="true"><use href="#${item.icon}"></use></svg>` : ''}
          </div>
          <div class="pdp-bento-value" style="color: ${item.color || 'var(--cyan)'};">${item.value}</div>
          <span class="pdp-bento-sub">${item.sub}</span>
        </div>
      `).join('');
    }

    // Render Tier 2 Engineering Specs Table in Accordion
    const specsList = document.getElementById('pdpTechSpecsList');
    if (specsList && specData.techSpecs) {
      specsList.innerHTML = specData.techSpecs.map(row => `
        <div class="pdp-spec-row">
          <span class="pdp-spec-label">
            <svg class="svg-icon pdp-spec-bullet-icon" aria-hidden="true"><use href="#icon-check"></use></svg>
            <span>${row.label}</span>
          </span>
          <span class="pdp-spec-val" style="${row.highlight ? `color:${row.highlight};` : ''}">${row.val}</span>
        </div>
      `).join('');
    }
  }

  function initFulfillment() {
    const vendor = currentProduct.vendor || {
      name: "Blue Flame Heating & Air Solutions",
      subtitle: "Premier Factory Authorized Mechanical Dealer",
      rating: 4.9,
      reviews: 312,
      status: "Local Delivery Included",
      earliestInstall: "Thursday, Oct 19",
      phone: "(815) 556-0660",
      scope: "Includes municipal mechanical permits, certified install, old equipment haul-away & 1-year labor guarantee."
    };

    const nameEl = document.querySelector('.pdp-dealer-name span');
    if (nameEl) nameEl.textContent = vendor.name;

    const subEl = document.querySelector('.pdp-dealer-badge-sub');
    if (subEl) subEl.textContent = vendor.subtitle;

    const logoEl = document.querySelector('.pdp-dealer-logo-box img');
    if (logoEl && vendor.logo) logoEl.src = vendor.logo;

    const vendorRatingEl = document.querySelector('.pdp-partner-top-row .pdp-rating-stars span');
    if (vendorRatingEl) vendorRatingEl.textContent = (vendor.rating || 4.9).toFixed(1);

    const vendorReviewsEl = document.querySelector('.pdp-partner-top-row .pdp-rating-stars .pdp-mono');
    if (vendorReviewsEl) vendorReviewsEl.textContent = `(${vendor.reviews || 312} installs)`;

    const chips = document.querySelectorAll('.pdp-fulfillment-chips .pdp-status-pill');
    if (chips.length >= 2) {
      const installChipSpan = chips[1].querySelector('span');
      if (installChipSpan) installChipSpan.textContent = `Earliest Install: ${vendor.earliestInstall}`;
    }

    const dispatchLinks = document.querySelectorAll('.pdp-dispatch-link');
    dispatchLinks.forEach(link => {
      link.href = `tel:${(vendor.phone || '(815) 556-0660').replace(/[^0-9]/g, '')}`;
      const phoneStrong = link.querySelector('strong');
      if (phoneStrong) phoneStrong.textContent = vendor.phone || '(815) 556-0660';
    });

    const guaranteeEl = document.getElementById('pdpScopeGuarantee');
    if (guaranteeEl) {
      guaranteeEl.textContent = `1-Year ${vendor.name} craftsmanship & emergency labor guarantee`;
    }

    const protocolDesc = document.getElementById('pdpProtocolVendorDesc');
    if (protocolDesc) {
      protocolDesc.textContent = `Every system installed by ${vendor.name} includes municipal permits, factory commissioning, and comprehensive warranties.`;
    }

    const modalDistrict = document.getElementById('pdpModalVendorDistrict');
    if (modalDistrict) {
      modalDistrict.textContent = `${vendor.name} • ${vendor.subtitle || 'Greater Chicago Mechanical District'}`;
    }

    const deliveryPill = document.getElementById('pdpDeliveryPill');
    if (deliveryPill) {
      deliveryPill.addEventListener('click', () => {
        isDeliveryIncluded = !isDeliveryIncluded;
        if (isDeliveryIncluded) {
          deliveryPill.innerHTML = `
            <svg class="svg-icon" style="width:14px;height:14px;color:var(--green);" aria-hidden="true"><use href="#icon-truck"></use></svg>
            <span>Local Delivery Included</span>
          `;
          showToast('Updated: Local White-Glove Equipment Delivery Included', 'success');
        } else {
          deliveryPill.innerHTML = `
            <svg class="svg-icon" style="width:14px;height:14px;color:var(--cyan);" aria-hidden="true"><use href="#icon-building"></use></svg>
            <span>Warehouse Pickup Only (Will County Hub)</span>
          `;
          showToast('Updated: Warehouse Pickup Selected at Will County Hub', 'info');
        }
      });
    }
  }

  function initModal() {
    const openBtn = document.getElementById('pdpBtnOpenModal');
    const headerCta = document.getElementById('pdpHeaderCta');
    const modalOverlay = document.getElementById('pdpBookingModal');
    const closeBtn = document.getElementById('pdpBtnCloseModal');
    const bookingForm = document.getElementById('pdpBookingForm');

    function openModal(e) {
      if (e) e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.classList.add('pdp-modal-open');
        document.body.style.overflow = 'hidden';
      }
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (headerCta) headerCta.addEventListener('click', openModal);

    function closeModal() {
      if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('pdp-modal-open');
        document.body.style.overflow = '';
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });

    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateVal = document.getElementById('pdpInputDate')?.value || 'Thursday, Oct 19';
        const phoneVal = document.getElementById('pdpInputPhone')?.value || '(815) 556-0660';
        const vendorName = currentProduct.vendor ? currentProduct.vendor.name : 'Blue Flame Heating & Air Solutions';

        closeModal();
        showToast(
          `Confirmed! ${vendorName} dispatch has reserved your visit for ${dateVal}. Confirmation sent to ${phoneVal}.`,
          'success'
        );
      });
    }
  }

  // Auto-initialize
  if (typeof window !== 'undefined') {
    window.initProductDetail = initProductDetail;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProductDetail);
    } else {
      initProductDetail();
    }
  }
})();
