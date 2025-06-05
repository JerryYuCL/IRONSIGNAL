// Cookie banner logic + reusable scripts
document.addEventListener('DOMContentLoaded', function() {
  // Cookie Consent Banner
  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('accept-cookies');
  if (banner && btn) {
    if (!localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'block';
    }
    btn.onclick = function() {
      localStorage.setItem('cookiesAccepted', 'yes');
      banner.style.display = 'none';
    }
  }
});