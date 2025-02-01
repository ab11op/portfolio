// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('dark-mode');
if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
}