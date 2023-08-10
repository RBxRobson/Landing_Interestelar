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

let x = 0;

function carousel() {
    x++;
    if (x > image.length - 1) {
        x = 0;
    }

    containerCarousel.style.transform = `translateX(${-x * 100}%)`;
}

setInterval(carousel, 2000);