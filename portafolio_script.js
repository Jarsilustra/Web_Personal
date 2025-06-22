const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/// ---- Menu ----
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  toggle.addEventListener("click", function () {
    menuList.classList.toggle("active");
  });
});

/// ---- Modal ----

  document.querySelectorAll(".swiper-slide img").forEach((img) => {
    img.addEventListener("click", () => {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("imgAmpliada");
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });