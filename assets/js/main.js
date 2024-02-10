"use strict";

// for menu click event variable
let menu = document.querySelector(".navbar-toggler-icon--img");
let btn = document.querySelector(".navbar-toggler");
let navLink = document.querySelectorAll(".nav-link");

const menuIcon = function () {
  if (!btn.classList.contains("collapsed")) {
    menu.src = "assets/image/menu-open.svg";
  } else {
    menu.src = "assets/image/menu-close.svg";
  }
};

btn.addEventListener("click", menuIcon);
document.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("nav-link") &&
    !btn.classList.contains("collapsed")
  ) {
    btn.click();
  }
});

// for form placeholder hide event
let labelAll = document.querySelectorAll(".form__label");
let inputAll = document.querySelectorAll(".form__input");

console.log(labelAll, inputAll);

function placeholderActive(el) {
  // console.log(el);
  const label = document.querySelector(`label[for="${el.target.id}"]`);
  if (el.target.value === "") {
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
}

inputAll.forEach((input) => {
  input.addEventListener("input", placeholderActive);
  placeholderActive({ target: input });
});

// form submission prevent default

const btnModal = document.getElementById("btnModal");

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        if (resData.result === "success") {
          form.reset();
          btnModal.click();
        }
      })
      .catch(() =>
        alert(
          "Something went wrong! Please try again. Sorry for the inconvenience. 😔"
        )
      );
  });
});

/////////////////////////////////////////////////////////
/////////////////////////////

// form date sender
document.getElementById("date").value = Date();

//////////////////////////////////////////////////
////////////////////////

// section revealer

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

////////////////////////////////////////////////////////////////
/////////////////////////////

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
