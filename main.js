// main.js - Global interactions for all pages
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const spans = menuToggle.querySelectorAll("span");
      if (navLinks.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px,6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px,-6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (header) {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
  });

  // Search overlay
  const searchBtn = document.getElementById("searchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      document.getElementById("searchInput")?.focus();
    });
    closeSearch?.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
    searchOverlay?.addEventListener("click", (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
    document.querySelectorAll(".suggestion-tags span").forEach((tag) => {
      tag.addEventListener("click", () => {
        const input = document.getElementById("searchInput");
        if (input) {
          input.value = tag.textContent;
          alert(`Searching for: ${tag.textContent}`);
        }
      });
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (q) {
      q.addEventListener("click", () => item.classList.toggle("active"));
    }
  });

  // Form submissions
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! We will get back to you soon.");
      form.reset();
    });
  });

  // Counter animation (stats)
  const statsSection = document.querySelector(".stats-premium");
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll(".stat-number");
            counters.forEach((counter) => {
              if (!counter.getAttribute("data-animated")) {
                counter.setAttribute("data-animated", "true");
                const target = parseInt(
                  counter.innerText.replace(/[^0-9]/g, ""),
                );
                if (target) {
                  let current = 0;
                  const increment = target / 50;
                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                      counter.innerText =
                        target +
                        (counter.innerText.includes("%")
                          ? "%"
                          : counter.innerText.includes("+")
                            ? "+"
                            : "");
                      clearInterval(timer);
                    } else {
                      counter.innerText =
                        Math.floor(current) +
                        (counter.innerText.includes("%")
                          ? "%"
                          : counter.innerText.includes("+")
                            ? "+"
                            : "");
                    }
                  }, 30);
                }
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(statsSection);
  }

  // Swiper sliders (if Swiper library is loaded)
  if (typeof Swiper !== "undefined") {
    const heroSwiper = document.querySelector(".hero-swiper");
    if (heroSwiper) {
      new Swiper(".hero-swiper", {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: { el: ".swiper-pagination", clickable: true },
      });
    }
    const testimonialSwiper = document.querySelector(".testimonial-swiper");
    if (testimonialSwiper) {
      new Swiper(".testimonial-swiper", {
        loop: true,
        autoplay: { delay: 4000 },
        pagination: { el: ".swiper-pagination", clickable: true },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
      });
    }
    const logoSwiper = document.querySelector(".logo-swiper");
    if (logoSwiper) {
      new Swiper(".logo-swiper", {
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        },
      });
    }
  }

  // Gallery / Video clicks
  document
    .querySelectorAll(".gallery-item, .video-card, .masonry-item")
    .forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img")?.src;
        if (img) alert(`View full image: ${img}`);
      });
    });
});
// Add this to your existing script
if (window.location.pathname.endsWith(".html")) {
  const cleanUrl = window.location.pathname.replace(".html", "/");
  window.history.replaceState({}, "", cleanUrl);
}
