// Toggle mobile nav
const hamburger = document.getElementById("hamburgerBtn");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Scroll to Top
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


const hamburgerBtn = document.getElementById("hamburgerBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    hamburgerBtn.classList.add("hidden");
  } else {
    hamburgerBtn.classList.remove("hidden");
  }
});
