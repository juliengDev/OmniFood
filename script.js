const burgerMenuIcon = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
burgerMenuIcon.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
