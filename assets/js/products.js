let currentCategory = 'all';
let currentBtu = 'all';
let currentBrand = 'all';
let currentProductId = 'all';
let currentSearch = '';
let currentSort = 'default';
let currentViewMode = 'grid';
let currentPage = 1;
const itemsPerPage = 6;
let openBranches = new Set();

const CATEGORY_META = {
  'hvac-systems': { title: 'Complete HVAC Systems', icon: '#icon-shield' },
  'steam-boilers': { title: 'Steam Boilers', icon: '#icon-fire' },
  'hot-water-boilers': { title: 'Hot Water Boilers', icon: '#icon-droplet' },
  'tankless-boilers': { title: 'Tankless & Combi', icon: '#icon-sparkles' },
  'radiators-radiant': { title: 'Radiant In-Floor & Radiators', icon: '#icon-home' },
  'commercial': { title: 'Commercial Boilers', icon: '#icon-building' },
  'controls': { title: 'Smart Controls & Automation', icon: '#icon-sliders' }
};

const CATEGORY_TREE_CONFIG = [
  {
    id: 'node-cat-hvac-systems',
    category: 'hvac-systems',
    title: 'Complete HVAC Systems',
    icon: '#icon-shield',
    subsections: [
      {
        id: 'node-hvac-split',
        title: 'Factory-Matched Split Systems (Gas & AC)',
        btus: ['80,000 BTU / 4.0 Ton']
      }
    ]
  },
  {
    id: 'node-cat-steam-boilers',
    category: 'steam-boilers',
    title: 'Steam Boilers',
    icon: '#icon-fire',
    subsections: [
      {
        id: 'node-steam-sectional',
        title: 'Cast Iron Sectional (82-86% AFUE)',
        btus: ['50,000 BTU', '70,000 BTU', '75,000 BTU', '90,000 BTU', '105,000 BTU', '135,000 BTU']
      }
    ]
  },
  {
    id: 'node-cat-hot-water-boilers',
    category: 'hot-water-boilers',
    title: 'Hot Water Boilers',
    icon: '#icon-droplet',
    subsections: [
      {
        id: 'node-hw-condensing',
        title: 'Condensing High-Efficiency (95%+ AFUE)',
        btus: ['55,000 BTU', '80,000 BTU', '100,000 BTU', '110,000 BTU', '120,000 BTU', '199,000 BTU']
      }
    ]
  },
  {
    id: 'node-cat-tankless-boilers',
    category: 'tankless-boilers',
    title: 'Tankless & Combi Boilers',
    icon: '#icon-sparkles',
    subsections: [
      {
        id: 'node-tankless-combi',
        title: 'Wall-Hung Condensing Combi (95% AFUE)',
        btus: ['85,000 BTU', '100,000 BTU', '120,000 BTU', '125,000 BTU', '151,000 BTU', '160,000 BTU', '199,000 BTU']
      }
    ]
  },
  {
    id: 'node-cat-radiators-radiant',
    category: 'radiators-radiant',
    title: 'Radiant In-Floor & Radiators',
    icon: '#icon-home',
    subsections: [
      {
        id: 'node-radiant-hydronic',
        title: 'Hydronic Manifolds & Mixing Stations',
        btus: ['50,000 BTU', '80,000 BTU', '85,000 BTU', '120,000 BTU']
      }
    ]
  },
  {
    id: 'node-cat-commercial',
    category: 'commercial',
    title: 'Commercial Boilers',
    icon: '#icon-building',
    subsections: [
      {
        id: 'node-comm-highoutput',
        title: 'Commercial High-Output (96-97% Thermal Eff.)',
        btus: ['500,000 BTU', '750,000 BTU', '1,500,000 BTU', '2,000,000 BTU']
      }
    ]
  },
  {
    id: 'node-cat-controls',
    category: 'controls',
    title: 'Smart Controls & Automation',
    icon: '#icon-sliders',
    subsections: [
      {
        id: 'node-controls-hubs',
        title: 'Hydronic Automation & Reset Hubs',
        btus: ['Single Boiler', '4-Zone Control', 'Universal 120V', 'Multi-Boiler Hub']
      }
    ]
  }
];

function formatBtuLabel(btuStr) {
  if (!btuStr) return 'Standard Capacity';
  if (btuStr.includes('BTU')) {
    return btuStr.endsWith("'s") ? btuStr : `${btuStr}'s`;
  }
  return btuStr;
}

function countMatches(criteria) {
  const products = window.BOILER_PRODUCTS || [];
  if (!criteria) return products.length;
  return products.filter(p => {
    if (criteria.category && criteria.category !== 'all' && p.category !== criteria.category) return false;
    if (criteria.btu && criteria.btu !== 'all' && p.btu !== criteria.btu) return false;
    if (criteria.brand && criteria.brand !== 'all' && p.brand.toLowerCase() !== criteria.brand.toLowerCase()) return false;
    if (criteria.search && criteria.search.trim()) {
      const q = criteria.search.toLowerCase().trim();
      const haystack = (p.name + ' ' + p.brand + ' ' + p.categoryName + ' ' + p.description + ' ' + (p.features || []).join(' ')).toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  }).length;
}

function isNodeActive(criteria) {
  if (!criteria) return false;
  if (currentBrand !== 'all') {
    if (criteria.brand) {
      if (criteria.brand.toLowerCase() !== currentBrand.toLowerCase()) return false;
      if (criteria.category && criteria.category !== currentCategory) return false;
      if (criteria.btu && criteria.btu !== currentBtu) return false;
      return true;
    }
    return false;
  }
  if (currentBtu !== 'all') {
    if (criteria.btu) {
      if (criteria.btu !== currentBtu) return false;
      if (criteria.category && criteria.category !== currentCategory) return false;
      return !criteria.brand;
    }
    return false;
  }
  if (currentCategory !== 'all') {
    return criteria.category === currentCategory && !criteria.btu && !criteria.brand;
  }
  return false;
}

function closeSiblings(node) {
  if (!node || !node.parentElement) return;
  const siblings = Array.from(node.parentElement.children);
  for (const sib of siblings) {
    if (sib !== node && sib.classList && sib.classList.contains('tree-node')) {
      sib.classList.remove('open');
      openBranches.delete(sib.id);
      sib.querySelectorAll('.tree-node.open').forEach(desc => {
        desc.classList.remove('open');
        openBranches.delete(desc.id);
      });
    }
  }
}

function renderTreeNode({ id, level, title, count, icon, criteria, children }) {
  const hasChildren = children && children.length > 0;
  const isOpen = openBranches.has(id);
  const isActive = isNodeActive(criteria);

  let childrenHtml = '';
  if (hasChildren) {
    childrenHtml = children.map(c => renderTreeNode(c)).join('');
  }

  const dataAttrs = Object.entries(criteria || {})
    .map(([k, v]) => `data-${k}="${String(v).replace(/"/g, '&quot;')}"`)
    .join(' ');

  return `
    <div class="tree-node tree-node-lvl-${level} ${isOpen ? 'open' : ''}" id="${id}">
      <div class="tree-row">
        ${hasChildren ? `
          <button type="button" class="tree-toggle-btn" data-toggle="${id}" aria-label="Toggle ${title}">
            &#9654;
          </button>
        ` : `
          <span class="tree-toggle-btn is-leaf-spacer"></span>
        `}
        <button type="button" class="tree-node-btn ${isActive ? 'active' : ''}" ${dataAttrs} data-node-id="${id}">
          <span class="tree-node-title">
            ${icon ? icon : ''}
            <span>${title}</span>
          </span>
          <span class="tree-badge">${count}</span>
        </button>
      </div>
      ${hasChildren ? `<div class="tree-children">${childrenHtml}</div>` : ''}
    </div>
  `;
}

function makeBrandNodes(baseId, baseCriteria, level) {
  const products = window.BOILER_PRODUCTS || [];
  const matched = products.filter(p => {
    if (baseCriteria.category && p.category !== baseCriteria.category) return false;
    if (baseCriteria.btu && p.btu !== baseCriteria.btu) return false;
    return true;
  });
  const brands = [...new Set(matched.map(p => p.brand).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  return brands.map(b => {
    const slug = b.toLowerCase().replace(/[^a-z0-9]/g, '');
    const crit = { ...baseCriteria, brand: b };
    return {
      id: `${baseId}-brand-${slug}`,
      level: level,
      title: b,
      icon: '<svg class="svg-icon" style="width:12px; height:12px; color:var(--cyan);"><use href="#icon-package"></use></svg>',
      criteria: crit,
      count: countMatches(crit),
      children: []
    };
  });
}

function makeBtuNodes(baseId, categoryId, btuList, level) {
  return btuList.map(btuVal => {
    const btuSlug = btuVal.toLowerCase().replace(/[^a-z0-9]/g, '');
    const crit = { category: categoryId, btu: btuVal };
    const btuId = `${baseId}-btu-${btuSlug}`;
    return {
      id: btuId,
      level: level,
      title: formatBtuLabel(btuVal),
      icon: '<svg class="svg-icon" style="width:12px; height:12px; color:var(--cyan);"><use href="#icon-sliders"></use></svg>',
      criteria: crit,
      count: countMatches(crit),
      children: makeBrandNodes(btuId, crit, level + 1)
    };
  });
}

function buildTreeData() {
  return CATEGORY_TREE_CONFIG.map(catCfg => {
    const catCrit = { category: catCfg.category };
    const subChildren = catCfg.subsections.map(subCfg => {
      const btuNodes = makeBtuNodes(subCfg.id, catCfg.category, subCfg.btus, 3);
      return {
        id: subCfg.id,
        level: 2,
        title: subCfg.title,
        criteria: catCrit,
        count: countMatches(catCrit),
        children: btuNodes
      };
    });

    return {
      id: catCfg.id,
      level: 1,
      title: catCfg.title,
      icon: `<svg class="svg-icon" style="width:14px; height:14px; color:var(--cyan);"><use href="${catCfg.icon}"></use></svg>`,
      criteria: catCrit,
      count: countMatches(catCrit),
      children: subChildren
    };
  });
}

function initRockAutoTree() {
  const treeContainer = document.getElementById('rockAutoTree');
  if (!treeContainer) return;

  const treeData = buildTreeData();
  treeContainer.innerHTML = treeData.map(node => renderTreeNode(node)).join('');

  treeContainer.querySelectorAll('.tree-toggle-btn[data-toggle]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-toggle');
      const node = document.getElementById(targetId);
      if (node) {
        const isOpening = !node.classList.contains('open');
        if (isOpening) {
          closeSiblings(node);
          node.classList.add('open');
          openBranches.add(targetId);
        } else {
          node.classList.remove('open');
          openBranches.delete(targetId);
          node.querySelectorAll('.tree-node.open').forEach(desc => {
            desc.classList.remove('open');
            openBranches.delete(desc.id);
          });
        }
      }
    });
  });

  treeContainer.querySelectorAll('.tree-node-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const category = btn.getAttribute('data-category') || 'all';
      const btu = btn.getAttribute('data-btu') || 'all';
      const brand = btn.getAttribute('data-brand') || 'all';

      currentCategory = category;
      currentBtu = btu;
      currentBrand = brand;
      currentPage = 1;

      let el = btn.closest('.tree-node');
      while (el) {
        closeSiblings(el);
        el.classList.add('open');
        openBranches.add(el.id);
        el = el.parentElement ? el.parentElement.closest('.tree-node') : null;
      }

      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  });

  const resetBtn = document.getElementById('treeResetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentBtu = 'all';
      currentBrand = 'all';
      currentProductId = 'all';
      currentSearch = '';
      currentPage = 1;
      openBranches.clear();

      const searchInput = document.getElementById('catalogSearchInput');
      const searchInputMobile = document.getElementById('catalogSearchInputMobile');
      if (searchInput) searchInput.value = '';
      if (searchInputMobile) searchInputMobile.value = '';

      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  }
}

function renderBreadcrumbs() {
  const trail = document.getElementById('breadcrumbTrail');
  if (!trail) return;

  const products = window.BOILER_PRODUCTS || [];
  let html = `
    <button type="button" class="crumb-root-indicator" id="crumbRootBtn">
      <svg class="svg-icon" style="width:12px; height:12px;"><use href="#icon-tools"></use></svg>
      Catalog Root (${products.length})
    </button>
  `;

  const isFiltered = currentCategory !== 'all' || currentBtu !== 'all' || currentBrand !== 'all' || currentSearch.trim() !== '';

  if (currentCategory !== 'all') {
    const meta = CATEGORY_META[currentCategory] || { title: currentCategory };
    html += `
      <span class="crumb-separator">&rsaquo;</span>
      <button type="button" class="crumb-link" id="crumbCatBtn">${meta.title}</button>
    `;
  }

  if (currentBtu !== 'all') {
    html += `
      <span class="crumb-separator">&rsaquo;</span>
      <button type="button" class="crumb-link" id="crumbBtuBtn">${formatBtuLabel(currentBtu)}</button>
    `;
  }

  if (currentBrand !== 'all') {
    html += `
      <span class="crumb-separator">&rsaquo;</span>
      <span class="crumb-current">${currentBrand}</span>
    `;
  }

  if (currentSearch.trim() !== '') {
    html += `
      <span class="crumb-separator">&rsaquo;</span>
      <span class="crumb-current">Search: "${currentSearch.trim()}"</span>
    `;
  }

  if (isFiltered) {
    html += `
      <button type="button" class="crumb-clear-btn" id="crumbClearBtn">Clear All</button>
    `;
  }

  trail.innerHTML = html;

  const rootBtn = document.getElementById('crumbRootBtn');
  if (rootBtn) {
    rootBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentBtu = 'all';
      currentBrand = 'all';
      currentProductId = 'all';
      currentSearch = '';
      currentPage = 1;
      openBranches.clear();
      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  }

  const catBtn = document.getElementById('crumbCatBtn');
  if (catBtn) {
    catBtn.addEventListener('click', () => {
      currentBtu = 'all';
      currentBrand = 'all';
      currentProductId = 'all';
      currentPage = 1;
      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  }

  const btuBtn = document.getElementById('crumbBtuBtn');
  if (btuBtn) {
    btuBtn.addEventListener('click', () => {
      currentBrand = 'all';
      currentProductId = 'all';
      currentPage = 1;
      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  }

  const clearBtn = document.getElementById('crumbClearBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentBtu = 'all';
      currentBrand = 'all';
      currentProductId = 'all';
      currentSearch = '';
      currentPage = 1;
      openBranches.clear();
      const searchInput = document.getElementById('catalogSearchInput');
      const searchInputMobile = document.getElementById('catalogSearchInputMobile');
      if (searchInput) searchInput.value = '';
      if (searchInputMobile) searchInputMobile.value = '';
      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  }
}

function renderCatalog() {
  const grid = document.getElementById('productsCatalogGrid') || document.getElementById('productsContainer');
  const countBadge = document.getElementById('catalogCountBadge');
  const emptyState = document.getElementById('catalogEmptyState');
  const products = window.BOILER_PRODUCTS || [];
  if (!grid) return;

  const filtered = products.filter(p => {
    if (currentProductId !== 'all') {
      return p.id === currentProductId;
    }
    if (currentBrand !== 'all' && p.brand.toLowerCase() !== currentBrand.toLowerCase()) return false;
    if (currentCategory !== 'all' && p.category !== currentCategory) return false;
    if (currentBtu !== 'all' && p.btu !== currentBtu) return false;
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase().trim();
      const haystack = (p.name + ' ' + p.brand + ' ' + p.categoryName + ' ' + p.description + ' ' + (p.features || []).join(' ')).toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (currentSort === 'price-asc') return (a.price_from || 0) - (b.price_from || 0);
    if (currentSort === 'price-desc') return (b.price_from || 0) - (a.price_from || 0);
    if (currentSort === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });

  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = sorted.slice(startIndex, startIndex + itemsPerPage);

  if (countBadge) {
    if (totalItems === 0) {
      countBadge.textContent = '0 products found';
    } else {
      const from = startIndex + 1;
      const to = Math.min(startIndex + itemsPerPage, totalItems);
      countBadge.textContent = `Showing ${from}-${to} of ${totalItems} products`;
    }
  }

  if (totalItems === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    renderPagination(0, 0);
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  if (currentViewMode === 'list') {
    grid.className = 'catalog-list-view';
    grid.innerHTML = paginated.map(p => {
      const priceFormatted = p.price_from ? '$' + Number(p.price_from).toLocaleString() : 'Call for Quote';
      const rebateHtml = p.rebateAmount ? `<span class="product-rebate-tag">Save $${p.rebateAmount} Rebate</span>` : '';
      const topFeatures = (p.features || []).slice(0, 2);

      return `
        <div class="product-list-row" data-category="${p.category}">
          <div class="list-row-thumb">
            <img src="${p.image}" alt="${p.name}" loading="lazy" width="220" height="150">
          </div>
          <div class="list-row-info">
            <div class="product-card-meta">
              <span class="badge ${p.tagClass || 'badge-cyan'}">${p.tag || p.categoryName}</span>
              <span class="badge badge-pink">${p.badge}</span>
            </div>
            <h3 class="product-card-title"><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
            <p class="product-card-desc">${p.description}</p>
            <ul class="product-card-features">
              ${topFeatures.map(f => `
                <li>
                  <svg class="svg-icon" style="color:var(--green); width:14px; height:14px; flex-shrink:0;" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="list-row-actions">
            <div class="product-pricing-bar">
              <div>
                <span style="font-size:0.75rem; color:var(--text-muted); display:block;">Estimate:</span>
                <span class="product-price-val">From ${priceFormatted}</span>
              </div>
              ${rebateHtml}
            </div>
            <div class="product-card-actions">
              <a href="product-detail.html?id=${p.id}" class="btn btn-outline btn-sm">View Specs</a>
              <button type="button" class="btn btn-primary btn-sm" data-quote-product="${p.name}">Get Quote</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    grid.className = 'grid grid-3';
    grid.innerHTML = paginated.map(p => {
      const priceFormatted = p.price_from ? '$' + Number(p.price_from).toLocaleString() : 'Call for Quote';
      const rebateHtml = p.rebateAmount ? `<span class="product-rebate-tag">Save $${p.rebateAmount} Rebate</span>` : '';
      const topFeatures = (p.features || []).slice(0, 2);

      return `
        <div class="card product-card" data-category="${p.category}">
          <div class="product-card-thumb">
            <img src="${p.image}" alt="${p.name}" loading="lazy" width="280" height="185">
          </div>
          <div class="product-card-meta">
            <span class="badge ${p.tagClass || 'badge-cyan'}">${p.tag || p.categoryName}</span>
            <span class="badge badge-pink">${p.badge}</span>
          </div>
          <h3 class="product-card-title"><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
          <p class="product-card-desc">${p.description}</p>
          <ul class="product-card-features">
            ${topFeatures.map(f => `
              <li>
                <svg class="svg-icon" style="color:var(--green); width:14px; height:14px; flex-shrink:0;" aria-hidden="true"><use href="#icon-check-circle"></use></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          <div class="product-pricing-bar">
            <div>
              <span style="font-size:0.75rem; color:var(--text-muted); display:block;">Estimate:</span>
              <span class="product-price-val">From ${priceFormatted}</span>
            </div>
            ${rebateHtml}
          </div>
          <div class="product-card-actions">
            <a href="product-detail.html?id=${p.id}" class="btn btn-outline btn-sm">View Specs</a>
            <button type="button" class="btn btn-primary btn-sm" data-quote-product="${p.name}">Get Quote</button>
          </div>
        </div>
      `;
    }).join('');
  }

  grid.querySelectorAll('[data-quote-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodName = btn.getAttribute('data-quote-product');
      openQuoteModal(prodName);
    });
  });

  renderPagination(totalItems, currentPage);
}

function renderPagination(totalItems, page) {
  const container = document.getElementById('catalogPagination');
  if (!container) return;

  if (totalItems <= itemsPerPage) {
    container.innerHTML = '';
    return;
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let html = `
    <button type="button" class="pagination-btn" ${page <= 1 ? 'disabled' : ''} data-page="${page - 1}">
      &larr; Prev
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button type="button" class="pagination-btn ${i === page ? 'active' : ''}" data-page="${i}">
        ${i}
      </button>
    `;
  }

  html += `
    <button type="button" class="pagination-btn" ${page >= totalPages ? 'disabled' : ''} data-page="${page + 1}">
      Next &rarr;
    </button>
  `;

  container.innerHTML = html;

  container.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const targetPage = parseInt(btn.getAttribute('data-page'), 10);
      if (targetPage && targetPage !== currentPage) {
        currentPage = targetPage;
        renderCatalog();
        const section = document.getElementById('productsCatalogSection');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initSearch() {
  const inputDesktop = document.getElementById('catalogSearchInput');
  const inputMobile = document.getElementById('catalogSearchInputMobile');
  const clearDesktop = document.getElementById('catalogSearchClear');
  const clearMobile = document.getElementById('catalogSearchClearMobile');

  function handleSearch(val) {
    currentSearch = val;
    currentPage = 1;
    if (clearDesktop) clearDesktop.style.display = val ? 'block' : 'none';
    if (clearMobile) clearMobile.style.display = val ? 'block' : 'none';
    renderBreadcrumbs();
    renderCatalog();
  }

  if (inputDesktop) {
    inputDesktop.addEventListener('input', (e) => {
      const v = e.target.value;
      if (inputMobile) inputMobile.value = v;
      handleSearch(v);
    });
  }

  if (inputMobile) {
    inputMobile.addEventListener('input', (e) => {
      const v = e.target.value;
      if (inputDesktop) inputDesktop.value = v;
      handleSearch(v);
    });
  }

  if (clearDesktop) {
    clearDesktop.addEventListener('click', () => {
      if (inputDesktop) inputDesktop.value = '';
      if (inputMobile) inputMobile.value = '';
      handleSearch('');
    });
  }

  if (clearMobile) {
    clearMobile.addEventListener('click', () => {
      if (inputDesktop) inputDesktop.value = '';
      if (inputMobile) inputMobile.value = '';
      handleSearch('');
    });
  }

  const resetEmptyBtn = document.getElementById('resetEmptyFiltersBtn');
  if (resetEmptyBtn) {
    resetEmptyBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentBtu = 'all';
      currentBrand = 'all';
      currentProductId = 'all';
      currentSearch = '';
      currentPage = 1;
      openBranches.clear();
      if (inputDesktop) inputDesktop.value = '';
      if (inputMobile) inputMobile.value = '';
      initRockAutoTree();
      renderBreadcrumbs();
      renderCatalog();
    });
  }
}

function initViewModeToggle() {
  const btnGrid = document.getElementById('viewBtnGrid');
  const btnList = document.getElementById('viewBtnList');

  const checkMobile = () => {
    if (window.innerWidth <= 768 && currentViewMode !== 'grid') {
      currentViewMode = 'grid';
      if (btnGrid) btnGrid.classList.add('active');
      if (btnList) btnList.classList.remove('active');
      renderCatalog();
    }
  };

  if (btnGrid) {
    btnGrid.addEventListener('click', () => {
      currentViewMode = 'grid';
      btnGrid.classList.add('active');
      if (btnList) btnList.classList.remove('active');
      renderCatalog();
    });
  }

  if (btnList) {
    btnList.addEventListener('click', () => {
      if (window.innerWidth <= 768) return;
      currentViewMode = 'list';
      btnList.classList.add('active');
      if (btnGrid) btnGrid.classList.remove('active');
      renderCatalog();
    });
  }

  checkMobile();
  window.addEventListener('resize', checkMobile);
}

function initSort() {
  const select = document.getElementById('catalogSortSelect');
  if (!select) return;

  select.addEventListener('change', (e) => {
    currentSort = e.target.value;
    currentPage = 1;
    renderCatalog();
  });
}

function initMobileFilterDrawer() {
  const toggleBtn = document.getElementById('mobileFilterToggle');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const applyBtn = document.getElementById('applyDrawerBtn');

  function openDrawer() {
    document.body.classList.add('rockauto-drawer-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    document.body.classList.remove('rockauto-drawer-open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      closeDrawer();
      const section = document.getElementById('productsCatalogSection');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('rockauto-drawer-open')) {
      closeDrawer();
    }
  });
}

function openQuoteModal(productName) {
  const modal = document.getElementById('quoteModal');
  const titleName = document.getElementById('modalProductName');
  const productField = document.getElementById('modalProductField');
  if (!modal) return;

  if (titleName) titleName.textContent = productName || 'Selected Boiler System';
  if (productField) productField.value = productName || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeQuoteModal');
  const form = document.getElementById('modalQuoteForm');
  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeQuoteModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQuoteModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeQuoteModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quoteName')?.value || 'Valued Customer';
      const phone = document.getElementById('quotePhone')?.value || '';
      const zip = document.getElementById('quoteZip')?.value || '';
      const prod = document.getElementById('modalProductField')?.value || 'Boiler Equipment';

      form.innerHTML = `
        <div style="text-align:center; padding: 24px 10px;">
          <svg class="svg-icon" style="width:48px; height:48px; color:var(--green); margin-bottom:12px;"><use href="#icon-check-circle"></use></svg>
          <h3 style="color:#fff; font-size:1.3rem; margin-bottom:8px;">Quote Request Dispatched!</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5; margin-bottom:18px;">
            Thank you, <strong>${name}</strong>. Our Joliet hydronic engineering specialist will call you at <strong>${phone}</strong> shortly to review local Nicor Gas rebates and sizing for <strong>${prod}</strong> (Zip: ${zip}).
          </p>
          <button type="button" class="btn btn-cyan btn-sm" id="quoteModalDoneBtn">Close Window</button>
        </div>
      `;

      document.getElementById('quoteModalDoneBtn')?.addEventListener('click', closeQuoteModal);
    });
  }
}

function initProductsCatalog() {
  initRockAutoTree();
  initSearch();
  initViewModeToggle();
  initSort();
  initMobileFilterDrawer();
  initQuoteModal();
  renderBreadcrumbs();
  renderCatalog();
}

if (typeof window !== 'undefined') {
  window.initProductsCatalog = initProductsCatalog;
  window.openQuoteModal = openQuoteModal;
}
