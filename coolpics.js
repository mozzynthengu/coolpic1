// Toggle navigation menu on small screens
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const isHidden = navMenu.style.display === "none" || navMenu.style.display === "";
  navMenu.style.display = isHidden ? "flex" : "none";

  // Update aria-expanded for accessibility
  menuBtn.setAttribute("aria-expanded", isHidden);
});

// Hide nav on load for small screens
function checkWindowSize() {
  if (window.innerWidth >= 1000) {
    navMenu.style.display = "flex"; // show nav on large screens
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    navMenu.style.display = "none"; // hide nav on small screens initially
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

window.addEventListener("resize", checkWindowSize);
window.addEventListener("load", checkWindowSize);
