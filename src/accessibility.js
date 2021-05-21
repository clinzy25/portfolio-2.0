const darkModeBtn = document.querySelector('.dark-mode');
const fontIncBtn = document.querySelector('.font-inc');
const fontDecBtn = document.querySelector('.font-dec');
const grayScaleBtn = document.querySelector('.grayscale');
const contrastBtn = document.querySelector('.high-contrast');
const html = document.querySelector('html');
// For Dark Mode
const backgroundImage = document.querySelector('.about-image');
const navbar = document.querySelector('#navbar');
const menuBars = document.querySelector('.menu-bars');
const menuBar = document.querySelectorAll('.bar');
const logo = document.querySelector('#logo');
const navText = document.querySelectorAll('a');
const navLink = document.querySelectorAll('.nav-link');
const accessibility = document.querySelector('.accessibility');
const skillHeader = document.querySelectorAll('h3');
const skillText = document.querySelectorAll('.skill-text');
const skillSection = document.querySelectorAll('.skill-section');
const panel = document.querySelectorAll('.panel');
const paradigmText = document.querySelectorAll('.paradigm-text');
const formInput = document.querySelectorAll('.form-input');
const formMessage = document.querySelector('.text-area');
const submitBtn = document.querySelector('.submit-btn');
const footer = document.querySelector('#footer');

let darkMode = true;
let fontSize = 1;
let grayScale = false;
let highContrast = false;

const disableBtn = () => {
    if (fontSize === 0.8) {
        fontDecBtn.classList.add('disabled');
    }
    if (fontSize === 1.3) {
        fontIncBtn.classList.add('disabled');
    }
    if (fontSize !== 0.8) {
        fontDecBtn.classList.remove('disabled');
    }
    if (fontSize !== 1.3) {
        fontIncBtn.classList.remove('disabled');
    }
};

const increaseFontSize = () => {
    if (fontSize < 1.3) {
        fontSize += 0.1;
        fontSize = +fontSize.toFixed(1);
        html.style['font-size'] = `${fontSize}rem`;
    }
    disableBtn();
};

const decreaseFontSize = () => {
    if (fontSize > 0.8) {
        fontSize -= 0.1;
        fontSize = +fontSize.toFixed(1);
        html.style['font-size'] = `${fontSize}rem`;
    }
    disableBtn();
};

const toggleDarkMode = () => {
    html.classList.toggle('light-global');
    navbar.classList.toggle('light-global');
    menuBars.classList.toggle('light-global');
    accessibility.classList.toggle('light-text');
    accessibility.classList.toggle('light-global');
    navText.forEach((item) => {
        item.classList.toggle('light-text');
    });
    navLink.forEach((item) => {
        item.classList.toggle('light-border');
    });
    menuBar.forEach((item) => {
        item.classList.toggle('menu-bars-light');
    });

    backgroundImage.classList.toggle('light-about-image');

    skillHeader.forEach((item) => {
        item.classList.toggle('light-text');
    });
    skillText.forEach((item) => {
        item.classList.toggle('light-text');
    });
    skillSection.forEach((item) => {
        item.classList.toggle('light-border');
    });
    panel.forEach((item) => {
        item.classList.toggle('light-global');
    });
    paradigmText.forEach((item) => {
        item.classList.toggle('light-text');
    });
    formInput.forEach((item) => {
        item.classList.toggle('light-global');
        item.classList.toggle('light-text');
        item.classList.toggle('form-border');
    });
    formMessage.classList.toggle('light-global');
    formMessage.classList.toggle('light-text');
    formMessage.classList.toggle('form-border');
    submitBtn.classList.toggle('light-text');
    footer.classList.toggle('light-global');
    darkMode = !darkMode;
    if (darkMode) logo.src = './images/logo-white.png';
    if (!darkMode) logo.src = './images/logo-black.png';
};

const toggleGreyScale = () => {
    if (!grayScale) {
        html.classList.add('grayscale');
        grayScaleBtn.classList.add('active');
    }
    if (grayScale) {
        html.classList.remove('grayscale');
        grayScaleBtn.classList.remove('active');
    }
    grayScale = !grayScale;
};

const toggleContrast = () => {
    if (!highContrast) {
        html.classList.add('high-contrast');
        contrastBtn.classList.add('active');
    }
    if (highContrast) {
        html.classList.remove('high-contrast');
        contrastBtn.classList.remove('active');
    }
    highContrast = !highContrast;
};

fontIncBtn.addEventListener('click', () => increaseFontSize());
fontDecBtn.addEventListener('click', () => decreaseFontSize());
grayScaleBtn.addEventListener('click', () => toggleGreyScale());
contrastBtn.addEventListener('click', () => toggleContrast());
darkModeBtn.addEventListener('click', () => toggleDarkMode());
