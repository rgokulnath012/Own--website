// Inject company name dynamically on elements with class 'company-name'
document.addEventListener('DOMContentLoaded', () => {
  const companyName = "The Nexus Solutions"; // Change company name here only
  document.querySelectorAll('.company-name').forEach(el => {
    el.textContent = companyName;
  });
});

// Keyboard accessibility: show focus styles only on keyboard nav
document.addEventListener('keyup', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
});

// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validate demo booking form before submission
const demoForm = document.querySelector('.demo-form');
if (demoForm) {
  demoForm.addEventListener('submit', function(e) {
    if (!this.name.value.trim() || !this._replyto.value.trim() || !this.company.value.trim()) {
      alert('Please complete all required fields');
      e.preventDefault();
    }
  });
}
