const menu = document.querySelector(".menu-icon");
const links = document.querySelector("#mobile-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    links.classList.toggle("active");
})

document.querySelectorAll(".mobile-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    links.classList.remove("active");
}))