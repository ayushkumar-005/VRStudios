// Hamburger Menu
const btn = document.getElementById("menu-btn");

// Mobile Menu
const menu = document.getElementById("menu");

// Mobile Toggle Function
btn.addEventListener("click", navToggle);

function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}
