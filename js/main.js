
document.addEventListener('DOMContentLoaded', () => {

    
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavMenu = document.getElementById('mobileNavMenu');

    if (mobileMenuBtn && mobileNavMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('hidden');
        });
    }

    //  Active Navigation Highlighting
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
                'border-b-2',
                'border-[#d4af37]'
            );

            link.classList.remove('text-neutral-400');
        }
    });

    //  Newsletter Submission
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('newsletterEmail');

            if (emailInput) {
                alert(
                    `Thank you for subscribing! Updates will be sent to ${emailInput.value}`
                );

                emailInput.value = '';
            }
        });
    }

    //  Contact Form Submission
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
