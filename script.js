// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Typing effect
const devTitle = document.getElementById("dev-title");
const titles = ["Student Of Computer Science USU", "Part Of Humas IMILKOM"];
let index = 0;

function typeText() {
  if (!devTitle) return;
  devTitle.textContent = "";
  let i = 0;
  const currentTitle = titles[index];
  const typing = setInterval(() => {
    devTitle.textContent += currentTitle[i];
    i++;
    if (i === currentTitle.length) {
      clearInterval(typing);
      setTimeout(() => {
        index = (index + 1) % titles.length;
        typeText();
      }, 1500);
    }
  }, 100);
}
typeText();
