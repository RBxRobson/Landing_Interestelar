document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelectorAll('[data-menu-open]');
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', openOrClose);
    }
})

function openOrClose() {
    const classe = 'content__menu--is-open';
    const nav = document.querySelector('.content__menu')
    nav.classList.toggle(classe);
}