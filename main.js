const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".header .menu-items");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
})