'use strict';


const navbar = document.querySelector('#navbar');
const menu = document.querySelectorAll('.navbar__menu__item');


window.addEventListener('scroll', () => {

    //navbar is changed when you scroll down

    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('navbar--dark');

    } else {
        navbar.classList.remove('navbar--dark');
    }

    //home faded when you scroll down
    const home = document.querySelector(".home__container");

    home.style.opacity = 1 - (window.scrollY / home.offsetHeight);


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


//arrow-up is showed when you scroll down

const arrow = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {

    if (window.scrollY > home.offsetHeight / 2) {
        arrow.classList.add("visible");

    } else {
        arrow.classList.remove("visible");

    }

})

arrow.addEventListener('click', (e) => {

    document.querySelector("#home").scrollIntoView();
});


// function scrollViewing() {
//     const link = e.target.dataset.link;

//     document.querySelector(link).scrollIntoView();
// }
