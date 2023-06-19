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
})