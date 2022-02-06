let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

