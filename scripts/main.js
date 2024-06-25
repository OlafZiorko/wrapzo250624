const toggleMenu = document.querySelector(".toggleMenu");
const headerNavigation = document.querySelector(".navigation__list");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNavigation.classList.toggle("show");
});

const showBtn = document.querySelector(".show-more");
const hiddenMenu = document.querySelector(".hidden__menu");

showBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("show-services");
  if (hiddenMenu.classList.contains("show-services")) {
    showBtn.textContent = "Pokaż mniej";
  } else {
    showBtn.textContent = "Pokaż więcej";
  }
});

let nextBtn = document.querySelector(".nextBtn");

nextBtn.addEventListener("click", () => {
  console.log("click");
});
