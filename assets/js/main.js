"use strict";

// for menu click event variable
let menu = document.querySelector(".navbar-toggler-icon--img");
let btn = document.querySelector(".navbar-toggler");

btn.addEventListener('click', function () {
    console.log(menu.src);
    if (!btn.classList.contains("collapsed")) {
        menu.src = "assets/image/menu-open.svg";
    } else {
        menu.src = "assets/image/menu-close.svg";
    }
});

// for form placeholder hide event 
let labelAll = document.querySelectorAll('.form__label');
let inputAll = document.querySelectorAll('.form__input');

console.log(labelAll, inputAll);

function placeholderActive(el) {
    // console.log(el);
    const label = document.querySelector(`label[for="${el.target.id}"]`);
    if (el.target.value === '') {
        // console.log(el.getAttribute('placeholder'));
        // console.log(el.value === '');
        label.style.opacity = "0";
        label.style.visibility = "hidden";
        label.style.transform = "translateY(20PX)";
        
    } else {
        label.style.opacity = "1";
        label.style.visibility = "visible";
        label.style.transform = "translateY(0px)";   
    }
};

inputAll.forEach(input=> {
    input.addEventListener('input', placeholderActive);
    placeholderActive({ target: input})
});

