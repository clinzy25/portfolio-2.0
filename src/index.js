import '../styles/index.scss';
import './images/ecommerce.jpg';
import './images/exercism.jpg';
import './images/github.jpg';
import './images/javascript.png';
import './images/logo-black.png';
import './images/logo-white.png';
import './images/metal-white.png';
import './images/small-web-projects.jpg';
import './images/time-blocker.jpg';

const menuBars = document.querySelector('.menu-bars');
const navbar = document.querySelector('#navbar');
const navLink = document.querySelectorAll('.nav-link');
const border = document.querySelector('.border');
const accessibilityMenu = document.querySelector('.dropdown-container');

AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
});

menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('change');
    navbar.classList.toggle('visibility');
    /** Reset mobile nav animation */
    border.style.animation = 'none';
    border.offsetHeight; /* trigger reflow */
    border.style.animation = null;
});

let recentClick = false;

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        clearInterval(clickTimeout);
        recentClick = true;
        if (window.innerWidth <= 800) {
            navbar.classList.toggle('visibility');
            menuBars.classList.toggle('change');
        }
        /**
         * Keep navbar while quickly switching between links,
         * then reenable hide on-scroll-down
         */
        // eslint-disable-next-line prefer-arrow-callback
        const clickTimeout = setTimeout(function () {
            recentClick = false;
        }, 2000);
    });
});

accessibilityMenu.addEventListener('click', () => {
    accessibilityMenu.classList.toggle('show-menu');
});
accessibilityMenu.addEventListener('mouseover', () => {
    accessibilityMenu.classList.toggle('show-menu');
});
accessibilityMenu.addEventListener('mouseout', () => {
    accessibilityMenu.classList.remove('show-menu');
});

let prev = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (!recentClick || scrollTop - prev > 100) {
        navbar.classList.toggle('hide-scroll-down', scrollTop > prev);
    }
    if (scrollTop < 100) navbar.classList.remove('hide-scroll-down');
    prev = scrollTop;
});
