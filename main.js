function openMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  let mobileMenuBackground = document.getElementById("mobileMenuBackground");
  let body = document.querySelector("body");
  mobileMenu.style.display = "flex";
  mobileMenuBackground.style.display = "flex";
  body.style.overflowY = "hidden";
}

function closeMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  let mobileMenuBackground = document.getElementById("mobileMenuBackground");
  let body = document.querySelector("body");
  mobileMenu.style.display = "none";
  mobileMenuBackground.style.display = "none";
  body.style.overflowY = "scroll";
}
