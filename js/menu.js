const btnMenu = document.querySelector(".nav__icon-menu");
const navMenu = document.querySelector(".nav__links");

btnMenu.addEventListener("click", (e) => {
  navMenu.classList.toggle("active");
});
