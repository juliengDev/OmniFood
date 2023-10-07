const burgerMenuIcon = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
burgerMenuIcon.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
