import '../styles/index.scss';

const menuBars = document.querySelector('.menu-bars');
const navbar = document.querySelector('#navbar');
const navLink = document.querySelectorAll('.nav-link');

AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
});

menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('change');
    navbar.classList.toggle('visibility');
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

let prev = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (!recentClick) {
        navbar.classList.toggle('hide-scroll-down', scrollTop > prev);
    }
    prev = scrollTop;
});