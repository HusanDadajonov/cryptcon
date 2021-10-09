let elArrow = document.querySelector(".top");
let elMenuPage = document.querySelector(".menu-page");
let elHeaderMenu = document.querySelector(".header__menu");
window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    header.classList.toggle("header-bg",window.scrollY > 10);
    elArrow.classList.toggle("show-arrow",window.scrollY > 10);
})
elHeaderMenu.addEventListener("click",function(){
    elMenuPage.classList.toggle("open-menu");
})