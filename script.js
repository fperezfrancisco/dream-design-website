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

/** intersection observer */

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        return;
      }
      entry.target.classList.remove("in-view");
    });
  });

  const allAnimatedElements = document.querySelectorAll(".animate");

  allAnimatedElements.forEach((element) => observer.observe(element));
});
