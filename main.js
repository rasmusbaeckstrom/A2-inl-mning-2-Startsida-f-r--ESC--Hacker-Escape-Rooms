const openMobileMenu = document.querySelector("#openMobileMenu");
const closeMobileMenu = document.querySelector("#closeMobileMenu");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuBackground = document.querySelector("#mobileMenuBackground");
const body = document.body;

openMobileMenu.addEventListener("click", openMenu);
closeMobileMenu.addEventListener("click", closeMenu);

function openMenu() {
  mobileMenuBackground.style.display = "flex";
  body.style.overflowY = "hidden";
  setTimeout(() => {
    mobileMenu.style.display = "flex";
  }, 200);
}

function closeMenu() {
  mobileMenu.style.display = "none";
  mobileMenuBackground.style.display = "none";
  body.style.overflowY = "scroll";
}
