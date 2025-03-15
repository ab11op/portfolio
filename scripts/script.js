// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.log("Target element not found for", this.getAttribute('href'));
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference and apply it (only if found)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
} else if (savedTheme === 'dark') {
    body.classList.remove('light-mode'); // Ensure dark mode is applied if it was previously selected
}

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        console.log("Is light mode:", isLightMode);
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    });
} else {
    console.log("Theme toggle button not found!");
}

// Add hover effects to cards dynamically
const cards = document.querySelectorAll('.experience-card, .project-card');
if (cards.length > 0) {
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
} else {
    console.log("No cards found for hover effects.");
}

// Optional: Add animations on scroll
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
} else {
    console.log("No sections found for scroll animations.");
}
