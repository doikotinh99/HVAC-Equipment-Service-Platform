function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  if (toggleBtn && mobileDrawer) {
    mobileDrawer.innerHTML = `
      <a href="index.html" class="mobile-nav-link">Home</a>
      <a href="services.html" class="mobile-nav-link">All Services</a>
      <a href="boiler-repair.html" class="mobile-nav-link mobile-sub-link">Boiler Repair</a>
      <a href="boiler-installation.html" class="mobile-nav-link mobile-sub-link">Boiler Installation</a>
      <a href="maintenance.html" class="mobile-nav-link mobile-sub-link">Maintenance Plans</a>
      <a href="commercial-boilers.html" class="mobile-nav-link mobile-sub-link">Commercial Boilers</a>
      <a href="products.html" class="mobile-nav-link">Equipment Catalog</a>
      <a href="about.html" class="mobile-nav-link">About Us</a>
      <a href="contact.html" class="mobile-nav-link">Contact & Emergency</a>
      <div class="mobile-drawer-cta">
        <a href="tel:8158461007" class="btn btn-cyan btn-wide">Call (815) 846-1007</a>
        <a href="contact.html" class="btn btn-primary btn-wide">Request Fast Dispatch</a>
      </div>
    `;

    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('menu-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      toggleBtn.innerHTML = isOpen
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.classList.remove('menu-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
        document.body.style.overflow = '';
      });
    });
  }

  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  initTopbarMarquee();
}

function initTopbarMarquee() {
  const topbar = document.querySelector('.topbar');
  if (!topbar || topbar.querySelector('.topbar-marquee-wrapper')) return;
  const container = topbar.querySelector('.container');
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'topbar-marquee-wrapper';

  const content = document.createElement('div');
  content.className = 'topbar-marquee-content';

  const items = container.querySelectorAll('.topbar-item');
  items.forEach(item => {
    content.appendChild(item.cloneNode(true));
  });

  const links = container.querySelectorAll('a');
  links.forEach(link => {
    content.appendChild(link.cloneNode(true));
  });

  const clone = content.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');

  wrapper.appendChild(content);
  wrapper.appendChild(clone);
  topbar.appendChild(wrapper);
  topbar.classList.add('has-marquee');
}

if (typeof window !== 'undefined') {
  window.initNavigation = initNavigation;
  window.initTopbarMarquee = initTopbarMarquee;
}
