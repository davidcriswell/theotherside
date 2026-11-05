/* ==========================================
   THE OTHER SIDE - WEBSITE INTERACTIONS
   ========================================== */

// Navigation elements
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const dropdownButton = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.nav-dropdown');

// Toggle the mobile navigation menu.
menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute(
        'aria-label',
        open ? 'Close navigation' : 'Open navigation'
    );
});

// Toggle the guides dropdown.
dropdownButton.addEventListener('click', () => {
    const open = dropdown.classList.toggle('open');

    dropdownButton.setAttribute('aria-expanded', String(open));
});

// Close navigation menus after selecting a link.
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');

        dropdown.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded', 'false');
    });
});

// Allow visitors to dismiss menus with the Escape key.
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        dropdown.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded', 'false');

        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

// Close the guides dropdown when clicking elsewhere on the page.
document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded', 'false');
    }
});
