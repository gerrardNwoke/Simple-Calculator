const theme1 = document.querySelector('[data-theme-1]');
const theme2 = document.querySelector('[data-theme-2]');
const theme3 = document.querySelector('[data-theme-3]');
const root = document.querySelector(':root');

const backgroundColorMain = document.querySelector('body');
const toggleBackground = document.querySelector('.toggle-div');
const calcScreen = document.querySelector('.calc-screen');
const keypad = document.querySelector('.calc-buttons');

const themeIndicator = document.querySelector('.toggle-div .indicator')


theme1.addEventListener('click', () => {
    backgroundColorMain.style.backgroundColor = 'hsl(222, 26%, 31%)';
    toggleBackground.style.backgroundColor = 'hsl(223, 31%, 20%)';

    keypad.style.backgroundColor = 'hsl(223, 37%, 19%)';
    keypad.style.color = 'hsl(221, 14%, 31%)';

    // Calculator Screen Styling
    calcScreen.style.backgroundColor = 'hsl(224, 36%, 15%)';
    document.documentElement.style.setProperty('--text-color-screen', 'white');

    document.documentElement.style.setProperty('--text-color-calc-top', 'white');

    // Numpad numbers
    document.documentElement.style.setProperty('--num-background-btn-color', 'hsl(30, 25%, 89%)');
    document.documentElement.style.setProperty('--num-background-shadow-color', 'hsl(28, 16%, 65%)');
    document.documentElement.style.setProperty('--text-color-numbers', 'hsl(221, 14%, 31%)');

    // del-reset keys styling
    document.documentElement.style.setProperty('--del-reset-background-btn-color', 'hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--del-reset-background-shadow-color', 'hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty('--text-color-del-reset', 'white');

    // Equals to styling
    document.documentElement.style.setProperty('--equal-toggle-background-btn-color', 'hsl(6, 63%, 50%)');
    document.documentElement.style.setProperty('--equal-background-shadow-color', 'hsl(6, 70%, 34%)');
    document.documentElement.style.setProperty('--text-color-equal', 'white');

    // Move indicator
    themeIndicator.style.transform = 'translateX(calc(-100% - 0.5em))';
})

theme2.addEventListener('click', () => {
    backgroundColorMain.style.backgroundColor = 'hsl(0, 0%, 90%)';
    toggleBackground.style.backgroundColor = 'hsl(0, 5%, 81%)';

    keypad.style.backgroundColor = 'hsl(0, 5%, 81%)';

    document.documentElement.style.setProperty('--text-color-calc-top', 'hsl(60, 10%, 19%)');

    calcScreen.style.backgroundColor = 'hsl(0, 0%, 93%)';
    document.documentElement.style.setProperty('--text-color-screen', 'hsl(60, 10%, 19%)')

    document.documentElement.style.setProperty('--num-background-btn-color', 'hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--num-background-shadow-color', 'hsl(35, 11%, 61%)');
    document.documentElement.style.setProperty('--text-color-numbers', 'hsl(221, 14%, 31%)');

    document.documentElement.style.setProperty('--del-reset-background-btn-color', 'hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--del-reset-background-shadow-color', 'hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty('--text-color-del-reset', 'white');

    document.documentElement.style.setProperty('--equal-toggle-background-btn-color', 'hsl(25, 98%, 40%)');
    document.documentElement.style.setProperty('--equal-background-shadow-color', 'hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--text-color-equal', 'white');

    // Move indicator
    themeIndicator.style.transform = 'translateX(0)';
})

theme3.addEventListener('click', () => {
    backgroundColorMain.style.backgroundColor = 'hsl(268, 75%, 9%)';
    toggleBackground.style.backgroundColor = 'hsl(268, 71%, 12%)';
    keypad.style.backgroundColor = 'hsl(268, 71%, 12%)';

    document.documentElement.style.setProperty('--text-color-calc-top', 'hsl(52, 100%, 62%)');

    calcScreen.style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.documentElement.style.setProperty('--text-color-screen', 'hsl(52, 100%, 62%)')

    document.documentElement.style.setProperty('--num-background-btn-color', 'hsl(268, 47%, 21%)');
    document.documentElement.style.setProperty('--num-background-shadow-color', ' hsl(290, 70%, 36%');
    document.documentElement.style.setProperty('--text-color-numbers', 'hsl(52, 100%, 62%)');

    document.documentElement.style.setProperty('--del-reset-background-btn-color', 'hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--del-reset-background-shadow-color', 'hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty('--text-color-del-reset', 'white');

    document.documentElement.style.setProperty('--equal-toggle-background-btn-color', 'hsl(176, 100%, 44%)');
    document.documentElement.style.setProperty('--equal-background-shadow-color', 'hsl(177, 92%, 70%)');
    document.documentElement.style.setProperty('--text-color-equal', 'hsl(198, 20%, 13%)');

    // Move indicator
    themeIndicator.style.transform = 'translateX(calc(100% + 0.5em))';
})