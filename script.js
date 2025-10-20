document.addEventListener("DOMContentLoaded", () => {
  // Initialize language from localStorage or default to English
  const savedLanguage = localStorage.getItem("language") || "en"
  switchLanguage(savedLanguage)
})

// Language Switcher Function with smooth transitions
function switchLanguage(lang) {
  // Update language attribute on HTML element
  document.documentElement.setAttribute("lang", lang)
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr")

  // Update body lang attribute for font switching
  document.body.setAttribute("lang", lang)

  // Update all elements with data-en and data-ar attributes
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`)
  })

  // Update active language button with smooth transition
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"))
  const activeBtn = document.getElementById(`lang-${lang}`)
  if (activeBtn) {
    activeBtn.classList.add("active")
  }

  // Save language preference to localStorage
  localStorage.setItem("language", lang)
}

// Tabs Functionality
const tabs = document.querySelectorAll(".tab-btn")
const sections = document.querySelectorAll(".menu-section")

if (tabs.length > 0) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")

      // Show/hide sections based on selected tab
      if (tab.dataset.tab === "all") {
        sections.forEach((s) => s.classList.add("active"))
      } else {
        sections.forEach((s) => {
          s.classList.remove("active")
          if (s.id === tab.dataset.tab) {
            s.classList.add("active")
          }
        })
      }
    })
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Add animation to menu items on scroll
const animateOnScroll = () => {
  const menuItems = document.querySelectorAll(".menu-item")

  menuItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top
    const itemBottom = item.getBoundingClientRect().bottom

    if (itemTop < window.innerHeight && itemBottom > 0) {
      item.style.opacity = "1"
      item.style.transform = "translateY(0)"
    }
  })
}

// Initial setup for menu items animation
document.querySelectorAll(".menu-item").forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(20px)"
  item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
})

// Run animation on scroll and load
window.addEventListener("scroll", animateOnScroll)
window.addEventListener("load", animateOnScroll)
// Back to Top Button Functionality
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
