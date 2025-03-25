// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const header = document.querySelector("header")
    const menuBtn = document.querySelector(".menu-btn")
    const nav = document.querySelector(".nav")
    const navLinks = document.querySelectorAll(".nav-link")
    const backToTop = document.querySelector(".back-to-top")
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectItems = document.querySelectorAll(".project-item")
    const skillBars = document.querySelectorAll(".skill-progress")
    const contactForm = document.getElementById("contactForm")
    const formMessage = document.getElementById("formMessage")
  
    // Variables
    let menuOpen = false
  
    // Functions
  
    // Toggle menu
    function toggleMenu() {
      if (!menuOpen) {
        menuBtn.classList.add("open")
        nav.classList.add("active")
        document.body.style.overflow = "hidden"
        menuOpen = true
      } else {
        menuBtn.classList.remove("open")
        nav.classList.remove("active")
        document.body.style.overflow = "auto"
        menuOpen = false
      }
    }
  
    // Close menu when clicking a nav link
    function closeMenu() {
      menuBtn.classList.remove("open")
      nav.classList.remove("active")
      document.body.style.overflow = "auto"
      menuOpen = false
    }
  
    // Change header background on scroll
    function scrollHeader() {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }
  
    // Show/hide back to top button
    function scrollBackToTop() {
      if (window.scrollY > 300) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
    }
  
    // Active nav link on scroll
    function scrollActive() {
      const scrollY = window.pageYOffset
  
      navLinks.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1)
        const section = document.getElementById(sectionId)
  
        if (section) {
          const sectionHeight = section.offsetHeight
          const sectionTop = section.offsetTop - 100
  
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active")
          } else {
            link.classList.remove("active")
          }
        }
      })
    }
  
    // Filter projects
    function filterProjects(e) {
      const filter = e.target.getAttribute("data-filter")
  
      // Remove active class from all buttons
      filterBtns.forEach((btn) => {
        btn.classList.remove("active")
      })
  
      // Add active class to clicked button
      e.target.classList.add("active")
  
      // Filter projects
      projectItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    }
  
    // Animate skill bars on scroll
    function animateSkills() {
      skillBars.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (barTop < windowHeight - 100) {
          const width = bar.parentElement.previousElementSibling.querySelector(".percent").textContent
          bar.style.width = width
        }
      })
    }
  
    // Handle form submission
    function handleFormSubmit(e) {
      e.preventDefault()
  
      // Get form data
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value
  
      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        // Show success message
        formMessage.textContent = "Your message has been sent successfully!"
        formMessage.classList.add("success")
  
        // Reset form
        contactForm.reset()
  
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.textContent = ""
          formMessage.classList.remove("success")
        }, 5000)
      }, 1500)
    }
  
    // Event Listeners
    menuBtn.addEventListener("click", toggleMenu)
    navLinks.forEach((link) => link.addEventListener("click", closeMenu))
    window.addEventListener("scroll", scrollHeader)
    window.addEventListener("scroll", scrollBackToTop)
    window.addEventListener("scroll", scrollActive)
    window.addEventListener("scroll", animateSkills)
    filterBtns.forEach((btn) => btn.addEventListener("click", filterProjects))
    contactForm.addEventListener("submit", handleFormSubmit)
  
    // Initialize
    scrollHeader()
    scrollActive()
    animateSkills()
  })
  
  