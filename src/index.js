import '../styles/index.scss';

const navIcon = document.querySelector('.fa-bars');
const navbar = document.querySelector('#navbar');

navIcon.addEventListener('click', () => {
    navbar.classList.toggle('visibility');
});
