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

  // 3. Smooth Active Nav Highlighting
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('text-[#d4af37]', 'border-b', 'border-[#d4af37]');
      link.classList.remove('text-neutral-300');
    }
  });

  // 4. Newsletter Submission Simulation
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      alert(`Thank you for subscribing! Updates will be sent to ${emailInput.value}`);
      emailInput.value = '';
    });
  }

  // 5. Contact Form Submission Simulation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your table booking or query has been received. Our team will contact you shortly.');
      contactForm.reset();
    });
  }

 

  // 7. Home Page Pop-up Modal (Strict close only on clicking ✕)
  const comingSoonModal = document.getElementById('comingSoonModal');
  const modalCard = document.getElementById('modalCard');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (comingSoonModal && modalCard && closeModalBtn) {
    setTimeout(() => {
      comingSoonModal.classList.remove('opacity-0', 'pointer-events-none');
      modalCard.classList.remove('scale-95');
      modalCard.classList.add('scale-100');
    }, 600);

    closeModalBtn.addEventListener('click', () => {
      comingSoonModal.classList.add('opacity-0', 'pointer-events-none');
      modalCard.classList.remove('scale-100');
      modalCard.classList.add('scale-95');
    });
  }
});







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

  // 3. Smooth Active Nav Highlighting
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('text-[#d4af37]', 'border-b', 'border-[#d4af37]');
      link.classList.remove('text-neutral-300');
    }
  });

  // 4. Newsletter Submission Simulation
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      alert(`Thank you for subscribing! Updates will be sent to ${emailInput.value}`);
      emailInput.value = '';
    });
  }

  // 5. Contact Form Submission Simulation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your table booking or query has been received. Our team will contact you shortly.');
      contactForm.reset();
    });
  }

  // 6. DYNAMIC POP-UP INJECTION (Final Selected Markup)
  const currentFile = window.location.pathname.split("/").pop() || 'index.html';
  const allowedPages = ['index.html', '', 'contact.html'];

  if (allowedPages.includes(currentFile)) {
    const modalMarkup = `
      <div id="comingSoonModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 opacity-0 pointer-events-none transition-opacity duration-300">
        <div id="modalCard" class="relative max-w-xl w-full bg-[#111111] border border-[#d4af37] p-8 sm:p-10 text-center rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.25)] transform scale-95 transition-transform duration-300">
          
          <!-- Close (✕) Button -->
          <button id="closeModalBtn" class="absolute top-4 right-4 text-neutral-400 hover:text-[#d4af37] border border-neutral-700 hover:border-[#d4af37] rounded-full w-8 h-8 flex items-center justify-center transition">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>

          
          <div class="flex justify-center mb-2">
            <img src="images/Sardarjisden.png" alt="Sardarji's Den Logo" class="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]" />
          </div>

          
          <div class="flex items-center justify-center gap-2 sm:gap-3 my-1.5">
            <img src="images/section_pin.png" alt="Decorative Pin" class="h-5 sm:h-6 w-auto object-contain rotate-180" />
            <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold whitespace-nowrap">Special Royal Additions</span>
            <img src="images/section_pin.png" alt="Decorative Pin" class="h-5 sm:h-6 w-auto object-contain" />
          </div>

          <h2 class="font-serif-gold text-2xl sm:text-3xl text-white font-bold mt-2 mb-3">
            Something Delicious <br /><span class="text-gold-gradient">Is Simmering & Coming Soon</span>
          </h2>

          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            Our Master Chefs are curated new signature slow-cooked biryanis and authentic heritage desserts.
            <br /><span class="text-gold-gradient">We will unveil the full new menu very soon.</span>
          </p>

          <!-- Synchronized Countdown -->
          <div class="grid grid-cols-4 gap-2.5 mb-6 max-w-md mx-auto">
            <div class="bg-[#181818] border border-neutral-800 p-2.5 rounded">
              <div class="text-lg sm:text-xl font-serif-gold font-bold text-[#d4af37] timer-days">00</div>
              <div class="text-[9px] text-neutral-400 uppercase">Days</div>
            </div>
            <div class="bg-[#181818] border border-neutral-800 p-2.5 rounded">
              <div class="text-lg sm:text-xl font-serif-gold font-bold text-[#d4af37] timer-hours">00</div>
              <div class="text-[9px] text-neutral-400 uppercase">Hours</div>
            </div>
            <div class="bg-[#181818] border border-neutral-800 p-2.5 rounded">
              <div class="text-lg sm:text-xl font-serif-gold font-bold text-[#d4af37] timer-mins">00</div>
              <div class="text-[9px] text-neutral-400 uppercase">Mins</div>
            </div>
            <div class="bg-[#181818] border border-neutral-800 p-2.5 rounded">
              <div class="text-lg sm:text-xl font-serif-gold font-bold text-[#d4af37] timer-secs">00</div>
              <div class="text-[9px] text-neutral-400 uppercase">Secs</div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="flex items-center justify-center gap-3">
            <a href="coming-soon.html" class="px-6 py-2.5 bg-[#d4af37] text-black text-xs font-serif-gold font-bold uppercase tracking-wider hover:bg-[#e4be49] transition">
              View Details
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalMarkup);
    if (window.lucide) {
      lucide.createIcons();
    }

    const comingSoonModal = document.getElementById('comingSoonModal');
    const modalCard = document.getElementById('modalCard');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Show popup after smooth delay
    setTimeout(() => {
      comingSoonModal.classList.remove('opacity-0', 'pointer-events-none');
      modalCard.classList.remove('scale-95');
      modalCard.classList.add('scale-100');
    }, 600);

    // Strictly close only on (✕) click
    closeModalBtn.addEventListener('click', () => {
      comingSoonModal.classList.add('opacity-0', 'pointer-events-none');
      modalCard.classList.remove('scale-100');
      modalCard.classList.add('scale-95');
    });
  }

  // 7. TIME COUNTDOWN (Target: 15 Sept 2026 )
  const targetTime = new Date('September 15, 2026 00:00:00').getTime();

  function runCountdown() {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      document.querySelectorAll('.timer-days, .timer-hours, .timer-mins, .timer-secs').forEach(el => el.textContent = '00');
      return;
    }

    const pad = (n) => String(n).padStart(2, '0');
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelectorAll('.timer-days').forEach(el => el.textContent = pad(days));
    document.querySelectorAll('.timer-hours').forEach(el => el.textContent = pad(hours));
    document.querySelectorAll('.timer-mins').forEach(el => el.textContent = pad(mins));
    document.querySelectorAll('.timer-secs').forEach(el => el.textContent = pad(secs));
  }

  setInterval(runCountdown, 1000);
  runCountdown();
});