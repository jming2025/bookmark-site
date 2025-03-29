// Search functionality
const searchInput = document.getElementById("searchInput");
const siteCards = document.querySelectorAll(".site-card");
const categories = document.querySelectorAll(".category");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  siteCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = "flex";
      card.style.animation = "fadeIn 0.5s ease forwards";
    } else {
      card.style.display = "none";
    }
  });

  // Hide empty categories
  categories.forEach((category) => {
    const visibleCards = category.querySelectorAll(
      '.site-card[style="display: flex;"]'
    );
    category.style.display = visibleCards.length > 0 ? "block" : "none";
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply fade-in animation to categories
categories.forEach((category) => {
  category.style.opacity = "0";
  category.style.transform = "translateY(20px)";
  category.style.transition = "all 0.5s ease";
  observer.observe(category);
});

// Add hover effect to site cards
siteCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  });
});

// Add loading animation for images
document.querySelectorAll(".site-card img").forEach((img) => {
  img.addEventListener("error", function () {
    this.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6IiBmaWxsPSIjODY4NjhiIi8+PC9zdmc+";
  });
});
