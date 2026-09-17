function initForms() {
  const serviceForms = document.querySelectorAll('form[data-service-form], #quickEstimateForm, .lead-form');

  serviceForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = form.querySelector('.form-status, .form-alert') || document.getElementById('status');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('data-orig-text', submitBtn.innerHTML);
        submitBtn.innerHTML = 'Submitting Request...';
      }

      setTimeout(() => {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.className = 'form-status success';
          statusBox.innerHTML = '<strong>Request Received!</strong> Our Joliet dispatch team has logged your boiler request. A licensed technician will contact you shortly.';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitBtn.getAttribute('data-orig-text') || 'Request Service Now';
        }
      }, 700);
    });
  // Quick problem selector tile interaction
  document.querySelectorAll('.hero-quick-tile[data-preset]').forEach(tile => {
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      const preset = tile.getAttribute('data-preset');
      const form = document.querySelector('#quick-form form');
      if (form) {
        const select = form.querySelector('select');
        if (select && preset) {
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text.includes(preset) || select.options[i].value.includes(preset)) {
              select.selectedIndex = i;
              break;
            }
          }
        }
        const cardBox = document.getElementById('quick-form');
        if (cardBox) {
          cardBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          cardBox.classList.add('highlight-pulse');
          setTimeout(() => cardBox.classList.remove('highlight-pulse'), 1500);
        }
        const firstInput = form.querySelector('input');
        if (firstInput) setTimeout(() => firstInput.focus(), 500);
      }
    });
  });
}

if (typeof window !== 'undefined') {
  window.initForms = initForms;
}
