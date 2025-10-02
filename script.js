document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let response = document.getElementById("formResponse");

  if (name && email && message) {
    response.style.color = "green";
    response.innerText = `Terima kasih, ${name}! Pesan Anda sudah terkirim.`;
    document.getElementById("contactForm").reset();
  } else {
    response.style.color = "red";
    response.innerText = "Harap isi semua field!";
  }
});

// Dark Mode Toggle
document.getElementById("darkModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.innerText = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Real-time Clock
function updateClock() {
  let now = new Date();
  let time = now.toLocaleTimeString();
  document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
function showOnScroll() {
  let triggerBottom = window.innerHeight * 0.8;
  faders.forEach((fade) => {
    let boxTop = fade.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      fade.classList.add("show");
    }
  });
}
window.addEventListener("scroll", showOnScroll);
showOnScroll();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const secTop = sec.offsetTop - 100;
    if (pageYOffset >= secTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
