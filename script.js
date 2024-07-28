document.addEventListener('DOMContentLoaded', () => {
  // Example toggleMenu function to handle hamburger menu
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Attach the toggleMenu function to the hamburger icon
  document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

  // Remove the fragment from the URL if present
  if (window.location.hash) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
});


