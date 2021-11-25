'use strict';

//navbar is changed when you scroll down
const navbar = document.querySelector('#navbar');
const menu = document.querySelectorAll('.navbar__menu__item');

window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//handle scrolling

const navbarMenu = document.querySelector('.navbar__menu');
console.log(navbarMenu);
navbarMenu.addEventListener('click', (e) => {
    if (!link) return;

    const link = e.target.dataset.link;

    document.querySelector(link).scrollIntoView();
});

//handle contactbtn
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    const link = contactBtn.dataset.link;
    document.querySelector(link).scrollIntoView();
});

function scrollViewing() {
    const link = e.target.dataset.link;

    document.querySelector(link).scrollIntoView();
}
