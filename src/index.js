import '../styles/index.scss';

const menuBars = document.querySelector('.menu-bars');
const navbar = document.querySelector('#navbar');
const navLink = document.querySelectorAll('.nav-link');

menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('change');
    navbar.classList.toggle('visibility');
});

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.toggle('visibility');
        menuBars.classList.toggle('change');
    });
});
