// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  navLinks.classList.toggle('open');
});
