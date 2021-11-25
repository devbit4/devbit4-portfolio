'use strict';


const navbar = document.querySelector('#navbar');
const menu = document.querySelectorAll('.navbar__menu__item');


window.addEventListener('scroll', () => {

    //navbar is changed when you scroll down

    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('navbar--trans');

    } else {
        navbar.classList.remove('navbar--trans');
    }

    //home faded when you scroll down
    const home = document.querySelector(".home__container");

    home.style.opacity = 1 - (window.scrollY / home.offsetHeight);


});




//handle scrolling

const navbarMenu = document.querySelector('.navbar__menu');
console.log(navbarMenu);
navbarMenu.addEventListener('click', (e) => {
    const link = e.target.dataset.link;
    if (!link) return;


    // console.log(link)

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


//projects

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

    if (filter == null) {
        return;
    }

    console.log(filter);

    projects.forEach(project => {

        const type = project.dataset.type;
        if (filter === "*" || filter === type) {
            project.classList.remove("invisible");
        } else {
            project.classList.add("invisible");
        }

    }
    )
})

const workCategories = document.querySelector(".work__categories")

//work btn
workCategories.addEventListener("click", (e) => {

    const activeBtn = document.querySelector(".category__btn.active");

    activeBtn.classList.remove("active");
    // for (let workBtn of workBtns) {

    //     workBtn.classList.remove("active");
    // }

    const target = e.target.nodeName == "BUTTON" ? e.target : e.target.parentNode;
    target.classList.add("active");


})

//if you click toggle button, menu is open

const toggleBtn = document.querySelector(".navbar__toggle-button");

console.log(toggleBtn);

toggleBtn.addEventListener("click", (e) => {
    const menu = document.querySelector(".navbar__menu");
    menu.classList.toggle("on");
})