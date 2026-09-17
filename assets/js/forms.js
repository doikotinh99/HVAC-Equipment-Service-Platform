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
  });
}

if (typeof window !== 'undefined') {
  window.initForms = initForms;
}
