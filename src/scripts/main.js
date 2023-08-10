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

const containerCarousel = document.getElementById('carousel');
const image = document.querySelectorAll('#carousel img ');

let idx = 0;

function carousel() {
    idx++;
    if (idx > image.length - 1) {
        idx = 0;
    }

    containerCarousel.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carousel, 2000);