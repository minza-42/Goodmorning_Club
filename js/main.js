// Toggle overlay menu on menu button click
const menuButton = document.getElementById("menuButton");
const overlayMenu = document.getElementById("mainNav");

const menuX = menuButton.querySelector(".menu-x");
const menuBars = menuButton.querySelectorAll(".menu-icon-bar");

menuButton.addEventListener("click", function () {
  overlayMenu.classList.toggle("open");
  // Toggle aria-expanded for accessibility
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !expanded);

  // Toggle menu-x and hamburger bars
  if (overlayMenu.classList.contains("open")) {
    menuX.style.display = "flex";
    menuBars.forEach((bar) => (bar.style.display = "none"));
  } else {
    menuX.style.display = "none";
    menuBars.forEach((bar) => (bar.style.display = "block"));
  }
});

// Optional: Close menu when clicking outside or pressing Escape
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && overlayMenu.classList.contains("open")) {
    overlayMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", false);
    // Reset menu-x and hamburger bars
    menuX.style.display = "none";
    menuBars.forEach((bar) => (bar.style.display = "block"));
  }
});

// Prevent submit if no radio button is selected
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    const checked = form.querySelector('input[name="category"]:checked');
    if (!checked) {
      e.preventDefault();
      alert("You must select Sips, Grub or Other!");
    }
  });
}
