const darkModeBtn = document.querySelector('.dark-mode');
const fontIncBtn = document.querySelector('.font-inc');
const fontDecBtn = document.querySelector('.font-dec');
const greyscaleBtn = document.querySelector('.greyscale');
const contrastBtn = document.querySelector('.high-contrast');
const html = document.querySelector('html');

let darkMode = true;
let fontSize = 1;
let greyScale = false;
let highContrast = false;

const increaseFontSize = () => {
    if (fontSize < 1.3) {
        fontSize += 0.1;
        html.style['font-size'] = `${fontSize}rem`;
    }
};

const decreaseFontSize = () => {
    if (fontSize > 0.8) {
        fontSize -= 0.1;
        html.style['font-size'] = `${fontSize}rem`;
    }
};

fontIncBtn.addEventListener('click', () => increaseFontSize());
fontDecBtn.addEventListener('click', () => decreaseFontSize());
