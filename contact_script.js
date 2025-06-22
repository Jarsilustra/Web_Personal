/// ---- Menu ----
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  toggle.addEventListener("click", function () {
    menuList.classList.toggle("active");
  });
});