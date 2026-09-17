function renderQuickBenefits(containerId, items) {
  const cId = containerId || 'quick-benefits-container';
  const data = items || (window.siteData && window.siteData.quickBenefits);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(item => `
    <div class="quick-benefit-item">
      <div class="icon-box" style="margin:0;">
        <svg aria-hidden="true"><use href="${item.icon}"></use></svg>
      </div>
      <div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderServices(containerId, services) {
  const cId = containerId || 'services-container';
  const data = services || (window.siteData && window.siteData.services);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data) || !data.length) return;

  const featured = data.find(s => s.featured) || data[0];
  const listItems = data.filter(s => s !== featured);

  const highlightsHtml = (featured.highlights && featured.highlights.length)
    ? `<ul class="checklist" style="margin: 0.75rem 0 0.85rem 0; gap: 6px;">
        ${featured.highlights.map(h => `
          <li>
            <svg class="svg-icon" style="color:var(--cyan); flex-shrink:0;" aria-hidden="true"><use href="#icon-check"></use></svg>
            <span>${h}</span>
          </li>
        `).join('')}
       </ul>`
    : '';

  const featuredHtml = `
    <div class="service-featured-card">
      <div class="service-featured-thumb">
        <img src="${featured.img}" alt="${featured.alt}" loading="lazy">
        ${featured.badge ? `<span class="badge badge-pink service-featured-badge">${featured.badge}</span>` : ''}
      </div>
      <div class="service-featured-body">
        <h3>${featured.title}</h3>
        <p>${featured.desc}</p>
        ${highlightsHtml}
        <div class="service-featured-actions">
          <a href="${featured.link}" class="btn btn-primary btn-sm">
            <span>${featured.linkText || 'Learn More'}</span>
            <svg class="svg-icon" style="width:12px; height:12px; margin-left:4px;" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a href="tel:8158461007" class="btn btn-outline btn-sm" style="display:inline-flex; align-items:center; gap:6px;">
            <svg class="svg-icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
            (815) 846-1007
          </a>
        </div>
      </div>
    </div>
  `;

  const listHtml = `
    <div class="services-list-wrapper">
      ${listItems.map(item => `
        <a href="${item.link}" class="service-list-card">
          <div class="service-list-thumb">
            <img src="${item.img}" alt="${item.alt}" loading="lazy">
          </div>
          <div class="service-list-content">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
          <div class="service-list-arrow" aria-hidden="true">
            <svg class="svg-icon" style="width:14px; height:14px;" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </div>
        </a>
      `).join('')}
    </div>
  `;

  container.innerHTML = `
    <div class="services-showcase-grid">
      ${featuredHtml}
      ${listHtml}
    </div>
  `;
}

function renderPhotoGallery(containerId, photos) {
  const cId = containerId || 'gallery-container';
  const data = photos || (window.siteData && window.siteData.photoGallery);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  if (!container.children || container.children.length === 0) {
    container.innerHTML = data.map((photo, idx) => `
      <div class="gallery-project-card" data-index="${idx}" tabindex="0" role="button" aria-label="${photo.title}">
        <div class="gallery-project-thumb">
          <img src="${photo.img}" alt="${photo.alt}" loading="lazy">
          ${photo.badge ? `<span class="badge gallery-badge">${photo.badge}</span>` : ''}
          ${photo.metric ? `<span class="gallery-metric-pill">${photo.metric}</span>` : ''}
          <div class="gallery-hover-overlay">
            <span class="gallery-zoom-action">
              <svg class="svg-icon" style="width:16px; height:16px;" aria-hidden="true"><use href="#icon-search"></use></svg>
              <span>View Detail</span>
            </span>
          </div>
        </div>
        <div class="gallery-project-body">
          <div class="gallery-project-meta">
            <svg class="svg-icon" style="color:var(--cyan); width:13px; height:13px;" aria-hidden="true"><use href="#icon-map-pin"></use></svg>
            <span>${photo.location || 'Will County, IL'}</span>
          </div>
          <h4>
            <svg class="svg-icon" style="color:${photo.color || 'var(--cyan)'}; width:16px; height:16px; flex-shrink:0;" aria-hidden="true"><use href="${photo.icon}"></use></svg>
            <span>${photo.title || photo.caption}</span>
          </h4>
          <p>${photo.desc || ''}</p>
          ${photo.tags && photo.tags.length ? `
            <div class="gallery-tags">
              ${photo.tags.map(t => `<span class="gallery-tag">${t}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  let modalEl = document.getElementById('galleryModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'galleryModal';
    modalEl.className = 'gallery-modal';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.innerHTML = `
      <div class="gallery-modal-backdrop"></div>
      <div class="gallery-modal-content">
        <button class="gallery-modal-close" type="button" aria-label="Close modal">
          <svg class="svg-icon" style="width:20px; height:20px;" aria-hidden="true"><use href="#icon-close"></use></svg>
        </button>
        <div class="gallery-modal-media">
          <img id="galleryModalImg" src="" alt="">
        </div>
        <div class="gallery-modal-info">
          <div id="galleryModalMeta" class="gallery-project-meta"></div>
          <h3 id="galleryModalTitle"></h3>
          <p id="galleryModalDesc"></p>
          <div id="galleryModalDetails" class="gallery-modal-details"></div>
          <div id="galleryModalTags" class="gallery-tags"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }

  const closeModal = () => {
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const closeBtn = modalEl.querySelector('.gallery-modal-close');
  const backdrop = modalEl.querySelector('.gallery-modal-backdrop');
  if (closeBtn && !closeBtn._hasListener) {
    closeBtn.addEventListener('click', closeModal);
    closeBtn._hasListener = true;
  }
  if (backdrop && !backdrop._hasListener) {
    backdrop.addEventListener('click', closeModal);
    backdrop._hasListener = true;
  }
  if (!window._galleryModalEscBound) {
    document.addEventListener('keydown', (e) => {
      const activeModal = document.getElementById('galleryModal');
      if (e.key === 'Escape' && activeModal && activeModal.classList.contains('active')) {
        activeModal.classList.remove('active');
        activeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
    window._galleryModalEscBound = true;
  }

  container.querySelectorAll('.gallery-project-card').forEach(card => {
    const openCard = (e) => {
      if (e) e.preventDefault();
      const idxAttr = card.getAttribute('data-index');
      const idx = idxAttr !== null ? parseInt(idxAttr, 10) : 0;
      const galleryData = (window.siteData && window.siteData.photoGallery) || data;
      const item = galleryData[idx];
      if (!item) return;

      const modal = document.getElementById('galleryModal');
      const imgEl = document.getElementById('galleryModalImg');
      const metaEl = document.getElementById('galleryModalMeta');
      const titleEl = document.getElementById('galleryModalTitle');
      const descEl = document.getElementById('galleryModalDesc');
      const detailsEl = document.getElementById('galleryModalDetails');
      const tagsContainer = document.getElementById('galleryModalTags');

      if (imgEl) {
        imgEl.src = item.img;
        imgEl.alt = item.alt;
      }
      if (metaEl) {
        metaEl.innerHTML = `
          <svg class="svg-icon" style="color:var(--cyan); width:13px; height:13px;" aria-hidden="true"><use href="#icon-map-pin"></use></svg>
          <span>${item.location || 'Will County, IL'}</span>
          ${item.badge ? `<span class="badge" style="margin-left:8px;">${item.badge}</span>` : ''}
          ${item.metric ? `<span class="gallery-metric-pill" style="margin-left:6px;">${item.metric}</span>` : ''}
        `;
      }
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc;

      if (detailsEl) {
        if (item.details) {
          detailsEl.innerHTML = `
            <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--line); border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.25rem;">
              <div style="display:flex; flex-direction:column; gap:8px; font-size: 0.88rem; line-height: 1.5;">
                <div><strong style="color:var(--cyan);">Engineering Scope:</strong> <span style="color:var(--text-white);">${item.details.scope}</span></div>
                <div><strong style="color:var(--cyan);">Instrumentation &amp; Equipment:</strong> <span style="color:var(--text-white);">${item.details.equipment}</span></div>
                <div><strong style="color:var(--cyan);">Diagnostics Result:</strong> <span style="color:var(--text-white);">${item.details.result}</span></div>
              </div>
            </div>
          `;
        } else {
          detailsEl.innerHTML = '';
        }
      }

      if (tagsContainer) {
        tagsContainer.innerHTML = (item.tags || []).map(t => `<span class="gallery-tag">${t}</span>`).join('');
      }

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    card.style.cursor = 'pointer';
    card.onclick = openCard;
    const zoomAction = card.querySelector('.gallery-zoom-action');
    if (zoomAction) {
      zoomAction.onclick = (e) => {
        e.stopPropagation();
        openCard(e);
      };
    }
    card.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard(e);
      }
    };
  });
}

function renderAccordionModules(containerId, modules) {
  const cId = containerId || 'accordion-modules-container';
  const data = modules || (window.siteData && window.siteData.accordionModules);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(mod => {
    let innerContentHtml = '';

    if (mod.type === 'nested' && Array.isArray(mod.items)) {
      innerContentHtml = `
        ${mod.description ? `<p>${mod.description}</p>` : ''}
        ${mod.items.map(sub => `
          <div class="nested-accordion">
            <button class="nested-trigger" type="button">
              <span>${sub.trigger}</span>
              <span class="mini-symbol">+</span>
            </button>
            <div class="nested-content">
              <p>${sub.content}</p>
            </div>
          </div>
        `).join('')}
      `;
    } else if (mod.type === 'tags' && Array.isArray(mod.tags)) {
      innerContentHtml = `
        ${mod.description ? `<p>${mod.description}</p>` : ''}
        <div class="trust-tags" style="margin-top:10px;">
          ${mod.tags.map(tag => `<span class="trust-tag">${tag}</span>`).join('')}
        </div>
      `;
    } else if (mod.type === 'checklist' && Array.isArray(mod.items)) {
      innerContentHtml = `
        ${mod.description ? `<p>${mod.description}</p>` : ''}
        <ul class="checklist">
          ${mod.items.map(item => `
            <li>
              <svg class="svg-icon"><use href="#icon-check"></use></svg>
              ${item}
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      innerContentHtml = `<p>${mod.description || ''}</p>`;
    }

    return `
      <div class="master-accordion">
        <button class="master-trigger" type="button" aria-expanded="false">
          <span>${mod.title}</span>
          <span class="acc-symbol">+</span>
        </button>
        <div class="master-content">
          ${innerContentHtml}
        </div>
      </div>
    `;
  }).join('');
}

function renderPartners(containerId, partners) {
  const cId = containerId || 'partners-container';
  const data = partners || (window.siteData && window.siteData.partners);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(p => `
    <div class="partner-card">
      <span class="badge">${p.badge}</span>
      <h3 style="margin-top:10px;">${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

function renderFaq(containerId, faqs) {
  const cId = containerId || 'faq-container';
  const data = faqs || (window.siteData && window.siteData.faq);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(item => `
    <div class="faq-row">
      <div class="faq-q">
        <span>${item.q}</span>
        <b>+</b>
      </div>
      <div class="faq-a">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

function renderServicesGrid(containerId, services) {
  const cId = containerId || 'services-grid-container';
  const data = services || (window.siteData && window.siteData.services);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map((item, idx) => `
    <div class="service-row-card ${item.featured ? 'card-highlight' : ''}">
      <div class="service-row-thumb">
        <img src="${item.img}" alt="${item.alt}" loading="lazy">
        ${item.badge ? `<span class="badge service-row-badge">${item.badge}</span>` : ''}
        ${item.metric ? `<span class="service-row-metric">${item.metric}</span>` : ''}
      </div>
      <div class="service-row-body">
        <div class="service-row-header">
          <div class="service-row-icon-wrap">
            <svg class="svg-icon" aria-hidden="true"><use href="${item.icon || '#icon-tools'}"></use></svg>
          </div>
          <h2>${item.title}</h2>
        </div>
        <p class="service-row-desc">${item.desc}</p>
        ${item.specs && item.specs.length ? `
          <div class="service-specs-row">
            ${item.specs.map(s => `<span class="service-spec-pill">${s}</span>`).join('')}
          </div>
        ` : ''}
        ${item.checklist && item.checklist.length ? `
          <ul class="checklist service-row-checklist">
            ${item.checklist.map(c => `
              <li>
                <svg class="svg-icon" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
                <span>${c}</span>
              </li>
            `).join('')}
          </ul>
        ` : ''}
        <div class="service-row-actions">
          <a href="${item.link}" class="${item.btnClass || 'btn btn-outline'}">
            <span>${item.linkText || 'Learn More'}</span>
            <svg class="svg-icon" style="width:13px; height:13px; margin-left:4px;" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
          </a>
          <a href="tel:8158461007" class="service-grid-call" title="Emergency Hotline">
            <svg class="svg-icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
            <span>(815) 846-1007</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderAboutStats(containerId, stats) {
  const cId = containerId || 'about-stats-container';
  const data = stats || (window.siteData && window.siteData.aboutStats);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(item => `
    <div class="about-stat-card">
      <span class="stat-number">${item.number}</span>
      <div class="stat-label">${item.label}</div>
      <p class="stat-desc">${item.desc}</p>
    </div>
  `).join('');
}

function renderOperationalCommitments(containerId, commitments) {
  const cId = containerId || 'commitments-container';
  const data = commitments || (window.siteData && window.siteData.operationalCommitments);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map((item, idx) => `
    <div style="${idx < data.length - 1 ? 'padding-bottom: 16px; border-bottom: 1px solid var(--line);' : ''}">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
        <span style="color:var(--cyan); font-weight:900; font-size:1.1rem;">${item.num}</span>
        <strong style="color:var(--text-white); font-size:1.02rem;">${item.title}</strong>
      </div>
      <p style="font-size:0.88rem; color:var(--text-muted); margin:0; line-height:1.5;">${item.desc}</p>
    </div>
  `).join('');
}

function renderProcessSteps(containerId, steps) {
  const cId = containerId || 'process-steps-container';
  const data = steps || (window.siteData && window.siteData.processSteps);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(step => `
    <div class="process-card ${step.highlight ? 'process-card-highlight' : ''}">
      <div class="process-step-header">
        <div class="icon-box ${step.highlight ? 'icon-box-pink' : ''}" style="margin-bottom: 0;">
          <svg class="svg-icon" aria-hidden="true"><use href="${step.icon}"></use></svg>
        </div>
        <span class="step-num-badge">${step.num}</span>
      </div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
      <span class="badge ${step.highlight ? 'badge-pink' : ''}" style="align-self: flex-start;">${step.badge}</span>
    </div>
  `).join('');
}

function renderCoreStandards(containerId, standards) {
  const cId = containerId || 'core-standards-container';
  const data = standards || (window.siteData && window.siteData.coreStandards);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(item => `
    <div class="card">
      <div class="card-header-inline">
        <div class="icon-box">
          <svg class="svg-icon" aria-hidden="true"><use href="${item.icon}"></use></svg>
        </div>
        <h4>${item.title}</h4>
      </div>
      <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">${item.desc}</p>
    </div>
  `).join('');
}

function renderTeam(containerId, teamMembers) {
  const cId = containerId || 'team-container';
  const data = teamMembers || (window.siteData && window.siteData.team);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(member => `
    <div class="team-card">
      <div class="team-icon-box">
        <svg class="svg-icon svg-icon-lg" aria-hidden="true"><use href="${member.icon}"></use></svg>
      </div>
      <div class="team-role">${member.role}</div>
      <h3>${member.name}</h3>
      <p>${member.desc}</p>
      <div class="team-credentials">
        ${(member.badges || []).map(b => `<span class="badge">${b}</span>`).join('')}
      </div>
    </div>
  `).join('');
}


function renderServiceCities(containerId, cities) {
  const cId = containerId || 'cities-tag-container';
  const data = cities || (window.siteData && window.siteData.serviceCities);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(city => `
    <span class="city-badge"><svg class="svg-icon" aria-hidden="true"><use href="#icon-check"></use></svg> ${city}</span>
  `).join('');
}

function renderTestimonials(containerId, testimonials) {
  const cId = containerId || 'testimonials-container';
  const data = testimonials || (window.siteData && window.siteData.testimonials);
  const container = document.getElementById(cId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = data.map(item => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${Array(item.stars || 5).fill('').map(() => `
            <svg class="svg-icon" aria-hidden="true"><use href="#icon-star"></use></svg>
          `).join('')}
        </div>
        <p class="testimonial-quote">"${item.quote}"</p>
      </div>
      <div class="testimonial-author">
        <div class="author-avatar">${item.initials || 'RB'}</div>
        <div class="author-meta">
          <h4>${item.name}</h4>
          <span>
            <svg class="svg-icon" aria-hidden="true"><use href="${item.icon || '#icon-map-pin'}"></use></svg>
            ${item.location}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

function initIndexDynamicData() {
  if (document.getElementById('quick-benefits-container')) renderQuickBenefits();
  if (document.getElementById('services-container')) renderServices();
  if (document.getElementById('services-grid-container')) renderServicesGrid();
  if (document.getElementById('gallery-container')) renderPhotoGallery();
  if (document.getElementById('accordion-modules-container')) renderAccordionModules();
  if (document.getElementById('partners-container')) renderPartners();
  if (document.getElementById('faq-container')) renderFaq();
  if (document.getElementById('about-stats-container')) renderAboutStats();
  if (document.getElementById('commitments-container')) renderOperationalCommitments();
  if (document.getElementById('process-steps-container')) renderProcessSteps();
  if (document.getElementById('core-standards-container')) renderCoreStandards();
  if (document.getElementById('team-container')) renderTeam();
  if (document.getElementById('testimonials-container')) renderTestimonials();
  if (document.getElementById('cities-tag-container')) renderServiceCities();
}

if (typeof window !== 'undefined') {
  window.renderQuickBenefits = renderQuickBenefits;
  window.renderServices = renderServices;
  window.renderServicesGrid = renderServicesGrid;
  window.renderPhotoGallery = renderPhotoGallery;
  window.renderAccordionModules = renderAccordionModules;
  window.renderPartners = renderPartners;
  window.renderFaq = renderFaq;
  window.renderAboutStats = renderAboutStats;
  window.renderOperationalCommitments = renderOperationalCommitments;
  window.renderProcessSteps = renderProcessSteps;
  window.renderCoreStandards = renderCoreStandards;
  window.renderTeam = renderTeam;
  window.renderTestimonials = renderTestimonials;
  window.renderServiceCities = renderServiceCities;
  window.initIndexDynamicData = initIndexDynamicData;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIndexDynamicData);
  } else {
    initIndexDynamicData();
  }
}
