document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelectorAll('[data-menu-open]');
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', openOrClose);
    }
})

function openOrClose() {
    const classe = 'header__menu--is-open';
    const nav = document.querySelector('.header__menu')
    nav.classList.toggle(classe);
}