function openMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  let mobileMenuBackground = document.getElementById("mobileMenuBackground");
  mobileMenu.style.display = "flex";
  mobileMenuBackground.style.display = "flex";
}

function closeMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  let mobileMenuBackground = document.getElementById("mobileMenuBackground");
  mobileMenu.style.display = "none";
  mobileMenuBackground.style.display = "none";
}
