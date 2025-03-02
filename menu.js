// menu.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav_links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show-menu');
        });
    } else {
        console.error("No se encontró el botón menú o el contenedor de enlaces.");
    }
});