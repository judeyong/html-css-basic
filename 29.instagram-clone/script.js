const togleThemeBtn = document.querySelector('.header__theme-button');

document.onload = setInitialTheme(localStorage.getItem('theme'));

function setInitialTheme(themekey) {
    if(themekey === 'dark') {
        document.documentElement.classList.add('darkTheme');
    } else {
        document.documentElement.classList.remove('darkTheme');
    }
    
}

togleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkTheme');

    if(document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme','dark');
    } else {
        localStorage.setItem('theme','light');
    }

})