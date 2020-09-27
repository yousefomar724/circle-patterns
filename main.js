const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".header .menu-items");
const menuItem = document.querySelectorAll(".menu-item");
const section = document.querySelectorAll(".section");

menuBtn.addEventListener("click", () => toggle())

/* toggle of item click if open */
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        if(menuBtn.classList.contains("open")) {
            toggle();
        };
    });
});

section.forEach((item) => {
    item.addEventListener("click", () => {
        if(menuBtn.classList.contains("open")) {
            toggle();
        };
    });
});


function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
};