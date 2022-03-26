const hamburger = document.querySelector(".hamburger");
const hamburgerBtn = document.querySelector(".hamburger__btn");
const navMenu = document.querySelector(".navbar__menu");
const cross = document.querySelector(".hamburger__cross");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    cross.classList.toggle("active");
    hamburger.classList.toggle("active");
})

document.querySelectorAll(".navbar__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    cross.classList.remove("active");
}))