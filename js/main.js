let elArrow = document.querySelector(".top");
let elMenuPage = document.querySelector(".menu-page");
let elHeaderMenu = document.querySelector(".header__menu");
let elLinethird =document.querySelector(".line2");
let elLineOne =document.querySelector(".line1");
let elLineThree =document.querySelector(".line3");
window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    header.classList.toggle("header-bg",window.scrollY > 10);
    elArrow.classList.toggle("show-arrow",window.scrollY > 10);
})
elHeaderMenu.addEventListener("click",function(){
    elMenuPage.classList.toggle("open-menu");
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1")
    elLineThree.classList.toggle("rotate-line3")
})