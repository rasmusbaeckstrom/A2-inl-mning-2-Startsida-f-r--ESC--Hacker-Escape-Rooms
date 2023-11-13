document
  .getElementById("openMobileMenu")
  .addEventListener("click", handleClick);
document.getElementById("closeMobileMenu").addEventListener("click", closeMenu);

function handleClick() {
  openMenu();
  console.log("The menu will shut down in 10 seconds");
  setTimeout(() => {
    closeMenu();
  }, 10000);
}

function openMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  let mobileMenuBackground = document.getElementById("mobileMenuBackground");
  let body = document.querySelector("body");
  mobileMenuBackground.style.display = "flex";
  body.style.overflowY = "hidden";
  setTimeout(function () {
    mobileMenu.style.display = "flex";
  }, 200);
}

function closeMenu() {
  let mobileMenu = document.getElementById("mobileMenu");
  let mobileMenuBackground = document.getElementById("mobileMenuBackground");
  let body = document.querySelector("body");
  mobileMenu.style.display = "none";
  mobileMenuBackground.style.display = "none";
  body.style.overflowY = "scroll";
}
