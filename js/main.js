
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons (Lucide)
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavMenu = document.getElementById('mobileNavMenu');

  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('hidden');
    });
  }

  // 3. Active Navigation Highlighting
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    if (
      linkHref === currentPath ||
      (currentPath === '' && linkHref === 'index.html')
    ) {
      link.classList.add(
        'text-[#d4af37]',
        'border-b',
        'border-[#d4af37]'
      );
      link.classList.remove('text-neutral-300');
    }
  });

  // 4. Newsletter Submission
  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('newsletterEmail');

      alert(
        `Thank you for subscribing! Updates will be sent to ${emailInput.value}`
      );

      emailInput.value = '';
    });
  }

  // 5. Contact Form Submission
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      alert(
        'Thank you! Your table booking or query has been received. Our team will contact you shortly.'
      );

      contactForm.reset();
    });
  }
});
