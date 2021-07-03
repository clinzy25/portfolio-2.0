import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/index.scss';
import './project-images/ecommerce.png';
import './project-images/chat-app.png';
import './project-images/spacex.png';
import './project-images/github.png';
import './project-images/shopify.png';
import './images/logo.png';
import './images/metal-white.png';
import './project-images/small-web.png';
import './project-images/time-blocker.png';
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
    offset: 50,
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
        setTimeout(() => {
            recentClick = false;
        }, 2000);
    });
});

/**
 *  Only hide navbar if :
 *  NOT switching quickly between links
 *  NOT at the top of the page
 */
let prev = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (!recentClick) {
        navbar.classList.toggle('hide-scroll-down', scrollTop > prev);
    }
    
    if (scrollTop < 100) {
        navbar.classList.remove('hide-scroll-down');
    }
    prev = scrollTop;
});
