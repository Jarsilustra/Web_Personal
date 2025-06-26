/// ---- FlipCard ----
document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/// ---- Menu ----
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  toggle.addEventListener("click", function () {
    menuList.classList.toggle("active");
  });
});

// Soporte para teclado en el menú
toggle.addEventListener("keydown", function(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    menuList.classList.toggle("active");
  }
});