'use strict';

//navbar is changed when you scroll down
const navbar = document.querySelector("#navbar");

window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add("navbar--dark");

    } else {
        navbar.classList.remove("navbar--dark");
    }
});
