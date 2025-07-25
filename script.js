// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Ensure it's an internal link
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.site-header').offsetHeight, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
            // Close mobile nav if open
            if (document.querySelector('.nav-links').classList.contains('active')) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Basic form submission example (prevent default and show alert)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We will contact you at ${email}.`);
                // In a real application, you would send this data to a server
                this.reset(); // Clear the form
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
