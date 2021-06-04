import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/index.scss';
import './project-images/ecommerce.jpeg';
import './project-images/exercism.jpg';
import './project-images/github.jpeg';
import './project-images/javascript.jpg';
import './images/logo-white.png';
import './images/metal-white.png';
import './project-images/small-web-projects.jpeg';
import './project-images/time-blocker.jpeg';
import './images/favicon.png';
import './conner-linzy-resume.pdf';

const menuBars = document.querySelector('.menu-bars');
const navbar = document.querySelector('#navbar');
const navLink = document.querySelectorAll('.nav-link');
const border = document.querySelector('.border');

AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-out-quart', // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
    offset: 200,
});

menuBars.addEventListener('click', () => {
    /** Transition menu bars to close icon */
    menuBars.classList.toggle('change');
    /** Show swipe up navbar */
    navbar.classList.toggle('visibility');
    /** Reset border animation */
    border.style.animation = 'none';
    border.offsetHeight; /* trigger reflow */
    border.style.animation = null;
});

let recentClick = false;

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        recentClick = true;
        if (window.innerWidth <= 800) {
            /** Hide mobile swipe-up nav on click of nav-link */
            navbar.classList.toggle('visibility');
            menuBars.classList.toggle('change');
        }
        /** For scroll event listener */
        // eslint-disable-next-line prefer-arrow-callback
        setTimeout(function () {
            recentClick = false;
        }, 2000);
    });
});

/**
 *  Only hide navbar if :
 *  NOT switching quickly between links
 *  NOT at the top of the page
 *  Scrolled more than 100px
 */
let prev = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (!recentClick || scrollTop - prev > 100) {
        navbar.classList.toggle('hide-scroll-down', scrollTop > prev);
    }
    if (scrollTop < 100) navbar.classList.remove('hide-scroll-down');
    prev = scrollTop;
});
