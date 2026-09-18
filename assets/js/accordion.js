function initAccordions() {
  document.querySelectorAll('.master-trigger, .accordion-header').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const parent = btn.closest('.master-accordion, .accordion-item');
      if (!parent) return;

      const isOpen = parent.classList.contains('open') || parent.classList.contains('active');
      const content = parent.querySelector(':scope > .master-content, :scope > .accordion-content');
      const symbol = btn.querySelector('.acc-symbol, .accordion-icon');

      if (isOpen) {
        parent.classList.remove('open', 'active');
        if (content) content.style.maxHeight = null;
        if (symbol) symbol.innerHTML = '<svg class="svg-icon" style="width:16px;height:16px;" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        parent.classList.add('open', 'active');
        if (content) content.style.maxHeight = content.scrollHeight + 'px';
        if (symbol) symbol.innerHTML = '<svg class="svg-icon" style="width:16px;height:16px;transform:rotate(180deg);" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>';
        btn.setAttribute('aria-expanded', 'true');
      }
    };
  });

  document.querySelectorAll('.nested-trigger').forEach(nestedBtn => {
    nestedBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const nested = nestedBtn.closest('.nested-accordion');
      if (!nested) return;

      const isNestedOpen = nested.classList.contains('open');
      const nestedContent = nested.querySelector(':scope > .nested-content');
      const miniSymbol = nestedBtn.querySelector('.mini-symbol');
      const masterContent = nested.closest('.master-content, .accordion-content');

      if (isNestedOpen) {
        nested.classList.remove('open');
        if (nestedContent) nestedContent.style.maxHeight = null;
        if (miniSymbol) miniSymbol.innerHTML = '<svg class="svg-icon" style="width:14px;height:14px;" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>';
        nestedBtn.setAttribute('aria-expanded', 'false');

        if (masterContent) {
          setTimeout(() => {
            masterContent.style.maxHeight = masterContent.scrollHeight + 'px';
          }, 280);
        }
      } else {
        nested.classList.add('open');
        if (nestedContent) nestedContent.style.maxHeight = nestedContent.scrollHeight + 'px';
        if (miniSymbol) miniSymbol.innerHTML = '<svg class="svg-icon" style="width:14px;height:14px;transform:rotate(180deg);" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>';
        nestedBtn.setAttribute('aria-expanded', 'true');

        if (masterContent) {
          setTimeout(() => {
            masterContent.style.maxHeight = masterContent.scrollHeight + 'px';
          }, 50);
        }
      }
    };
  });

  document.querySelectorAll('.faq-q').forEach(q => {
    q.onclick = () => {
      const row = q.closest('.faq-row');
      if (!row) return;

      const isFaqOpen = row.classList.contains('open');
      const ans = row.querySelector('.faq-a');
      const icon = q.querySelector('b');

      if (isFaqOpen) {
        row.classList.remove('open');
        if (ans) ans.style.maxHeight = null;
        if (icon) icon.innerHTML = '<svg class="svg-icon" style="width:16px;height:16px;" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>';
      } else {
        row.classList.add('open');
        if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
        if (icon) icon.innerHTML = '<svg class="svg-icon" style="width:16px;height:16px;transform:rotate(180deg);" aria-hidden="true"><use href="#icon-chevron-down"></use></svg>';
      }
    };
  });

  // Automatically open the first accordion group item
  const firstAccordion = document.querySelector('.master-accordion');
  if (firstAccordion && !firstAccordion.classList.contains('open')) {
    const trigger = firstAccordion.querySelector('.master-trigger');
    if (trigger) trigger.click();
  }

  // Automatically open the first FAQ item
  const firstFaq = document.querySelector('.faq-row');
  if (firstFaq && !firstFaq.classList.contains('open')) {
    const trigger = firstFaq.querySelector('.faq-q');
    if (trigger) trigger.click();
  }
}

if (typeof window !== 'undefined') {
  window.initAccordions = initAccordions;
}
