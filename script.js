/* =========================================
   Accessible College Events – JavaScript
   No layout or content changes
========================================= */

/* 1. Smooth scrolling for navbar links */
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* 2. Make event cards keyboard accessible */
document.querySelectorAll(
    '.event1, .event2, .event3, .event4, .event5, .event6'
).forEach(eventCard => {

    eventCard.setAttribute('tabindex', '0');

    eventCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const link = eventCard.querySelector('a');
            if (link) {
                link.click();
            }
        }
    });
});

/* 3. Highlight active navigation link on scroll */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
