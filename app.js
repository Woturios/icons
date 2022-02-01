const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

function scrollToTop() {
  window.scrollTo(0, 0);
}

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
