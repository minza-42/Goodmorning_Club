// Toggle overlay menu on menu button click
const menuButton = document.getElementById("menuButton");
const overlayMenu = document.getElementById("mainNav");

menuButton.addEventListener("click", function () {
  overlayMenu.classList.toggle("open");
  // Toggle aria-expanded for accessibility
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !expanded);
});

// Optional: Close menu when clicking outside or pressing Escape
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && overlayMenu.classList.contains("open")) {
    overlayMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", false);
  }
});
