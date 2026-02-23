// Toggle menu functionality for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".header .links .icon");
  const menu = document.querySelector(".header .links ul");

  // Toggle menu when clicking the icon
  menuIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    menu.classList.toggle("visible");
    this.classList.toggle("active"); // Toggle active class on the icon
  });

  // Close menu when clicking anywhere else on the page
  document.addEventListener("click", function (e) {
    // Check if click was outside the menu and the menu is visible
    if (
      !e.target.closest(".header .links ul") &&
      menu.classList.contains("visible")
    ) {
      menu.classList.remove("visible");
      menuIcon.classList.remove("active"); // Remove active class from icon
    }
  });

  // Prevent clicks on the menu from closing it
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Scroll animation for all animated elements
  const animatedElements = [
    // Features section
    ...document.querySelectorAll(".features .feat"),

    // Services section
    document.querySelector(".services .special-heading"),
    document.querySelector(".services .special-heading + p"),
    ...document.querySelectorAll(".services .serv"),
    document.querySelector(".services .image-column"),

    // Portfolio section
    document.querySelector(".portfolio .special-heading"),
    document.querySelector(".portfolio .special-heading + p"),
    ...document.querySelectorAll(".portfolio .card"),

    // About section
    document.querySelector(".about .special-heading"),
    document.querySelector(".about .special-heading + p"),
    document.querySelector(".about .image"),
    document.querySelector(".about .text"),

    // Contact section
    document.querySelector(".contact .special-heading"),
    document.querySelector(".contact .special-heading + p"),
    document.querySelector(".contact .info"),
  ].filter(Boolean); // Filter out any null values in case elements don't exist

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Show elements when they enter the viewport
  function checkVisibility() {
    animatedElements.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("show");
      }
    });
  }

  // Check visibility on page load
  checkVisibility();

  // Check visibility on scroll
  window.addEventListener("scroll", checkVisibility);
});
