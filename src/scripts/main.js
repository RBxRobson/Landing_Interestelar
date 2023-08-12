document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelectorAll('[data-menu-open]');
    const containerCarousel = document.getElementById('carousel');
    const image = document.querySelectorAll('#carousel img ');
    let x = 0;
    const criticasListItem = document.querySelectorAll('.criticas__list__item');

    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', menuOpenOrClose);
    }

    function carousel() {
        x++;
        if (x > image.length - 1) {
            x = 0;
        }
        containerCarousel.style.transform = `translateX(${-x * 100}%)`;
    }
    setInterval(carousel, 2000);

    criticasListItem.forEach((item) => {
        const autor = item.querySelector('.autor');

        autor.addEventListener('click', () => {
            const critica = item.querySelector('.critica');
            const criticaOpen = document.querySelector('.critica--is-open');

            verify(item, critica, criticaOpen);
        });
    });

})

function menuOpenOrClose() {
    const classe = 'header__menu--is-open';
    const nav = document.querySelector('.header__menu');
    nav.classList.toggle(classe);
}

function verify(item, critica, criticaOpen) {
    const iconItem = item.querySelector('.icon');
    const icons = document.querySelectorAll('.icon');
    icons.forEach((item) => (item.innerHTML = "+"));

    if (criticaOpen) {
        criticaOpen.style.height = 0;
        criticaOpen.classList.remove('critica--is-open');
    }

    if (critica !== criticaOpen) {
        iconItem.innerHTML = "-";
        critica.classList.add('critica--is-open');
        critica.style.height = critica.scrollHeight + 10 + "px";
    }
}