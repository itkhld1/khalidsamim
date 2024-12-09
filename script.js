// Smooth Scroll to Sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = event.target.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Smoothly scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Responsive Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav'); // Toggle class for showing navigation links
});

// Dynamic Year in Footer
const footerYear = document.querySelector('.footer-year');
footerYear.textContent = new Date().getFullYear(); // Set current year
