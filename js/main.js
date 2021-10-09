let elArrow = document.querySelector(".top");
window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    header.classList.toggle("header-bg",window.scrollY > 10);
    elArrow.classList.toggle("show-arrow",window.scrollY > 10);
})