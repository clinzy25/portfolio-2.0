const darkModeBtn = document.querySelector('.dark-mode');
const fontIncBtn = document.querySelector('.font-inc');
const fontDecBtn = document.querySelector('.font-dec');
const grayScaleBtn = document.querySelector('.grayscale');
const contrastBtn = document.querySelector('.high-contrast');
const html = document.querySelector('html');

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
