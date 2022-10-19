const toggleButton = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
