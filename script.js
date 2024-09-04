const menuOpenBtn = document.getElementById("menuOpenBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuCloseBtn = document.getElementById("menuCloseBtn");

menuOpenBtn.addEventListener("click", (e) => {
  //open menu
  mobileMenu.classList.add("open");
});

menuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});
