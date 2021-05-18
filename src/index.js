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
        if (window.innerWidth <= 800) {
            navbar.classList.toggle('visibility');
            menuBars.classList.toggle('change');
        }
    });
});

let prev = 0;
window.addEventListener('scroll', () => {
  console.log(window.innerWidth)
    let scrollTop = window.scrollY;
    if (scrollTop - prev < 100) {
        navbar.classList.toggle('hide-scroll-down', scrollTop > prev);
      }
      prev = scrollTop;
});
