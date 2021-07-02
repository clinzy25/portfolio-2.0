const darkModeBtn = document.querySelector('#dark-mode');
const fontIncBtn = document.querySelector('#font-inc');
const fontDecBtn = document.querySelector('#font-dec');
const grayScaleBtn = document.querySelector('#grayscale');
const contrastBtn = document.querySelector('#high-contrast');
const html = document.querySelector('html');
const accessibilityMenu = document.querySelector('.accessibility');
const accessibilityContent = document.querySelector('.dropdown-container');
// For Dark Mode
const aboutBackgroundImage = document.querySelector('.about-background');
const contactBackgroundImage = document.querySelector('.contact-container');
const menuBars = document.querySelector('.menu-bars');
const aboutText = document.querySelector('.about-text');
const skillHeader = document.querySelectorAll('h3');
const skillText = document.querySelectorAll('.skill-text');
const skillSection = document.querySelectorAll('.skill-section');
const tabsContainer = document.querySelector('.tabs-container');
const panel = document.querySelectorAll('.tab-content');
const paradigmText = document.querySelectorAll('.tab-text');
const projectDescription = document.querySelectorAll('.project-description');
const projectTitle = document.querySelectorAll('.project-title');
const projectBtn = document.querySelectorAll('.project-btn');
const formInput = document.querySelectorAll('.form-input');
const formMessage = document.querySelector('.text-area');
const submitBtn = document.querySelector('.submit-btn');
const resumeBtn = document.querySelector('.resume-btn');

accessibilityMenu.addEventListener('click', () => {
    accessibilityContent.classList.add('show-menu');
});

accessibilityContent.addEventListener('mouseover', () => {
    accessibilityContent.classList.add('show-menu');
});

accessibilityContent.addEventListener('mouseout', () => {
    accessibilityContent.classList.remove('show-menu');
});

let fontSize = 1;

const disableBtn = () => {
    if (fontSize === 0.8) {
        fontDecBtn.classList.add('disabled');
    }
    if (fontSize === 1.3) {
        fontIncBtn.classList.add('disabled');
    }
    /** Strange bug fixed by this explicitness */
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
    menuBars.classList.toggle('light-text');
    aboutBackgroundImage.classList.toggle('light-about-background');
    aboutText.classList.toggle('light-text');
    tabsContainer.classList.toggle('less-box-shadow');
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
    projectTitle.forEach((item) => {
        item.classList.toggle('light-text');
    });
    projectDescription.forEach((item) => {
        item.classList.toggle('light-text');
    });
    projectBtn.forEach((item) => {
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
    contactBackgroundImage.classList.toggle('light-contact-background');
    submitBtn.classList.toggle('light-text');
    resumeBtn.classList.toggle('light-text');
};

const toggleGreyScale = () => {
    html.classList.toggle('grayscale');
    grayScaleBtn.classList.toggle('active');
};

const toggleContrast = () => {
    html.classList.toggle('high-contrast');
    contrastBtn.classList.toggle('active');
};

fontIncBtn.addEventListener('click', () => increaseFontSize());
fontDecBtn.addEventListener('click', () => decreaseFontSize());
grayScaleBtn.addEventListener('click', () => toggleGreyScale());
contrastBtn.addEventListener('click', () => toggleContrast());
darkModeBtn.addEventListener('click', () => toggleDarkMode());
