document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Select sidebar items
    const sidebarItems = document.querySelectorAll(".sidebar-item");

    // Define section targets
    const sections = {
        "INTRODUCTION": document.querySelector(".content"),
        "MY SKILLS": document.querySelector(".skills-container"),
        "EDUCATION": document.querySelector(".content1:last-of-type"),
    };

    // Add click event listeners to sidebar items
    sidebarItems.forEach((item) => {
        item.addEventListener("click", function () {
            const section = sections[item.textContent.trim()];
            if (section) {
                let offset = section.offsetTop - 120; // Adjust this value to move the Skills section higher
                if (item.textContent.trim() === "MY SKILLS") {
                    offset -= 40; // Moves Skills section higher
                }
                window.scrollTo({
                    top: offset,
                    behavior: "smooth",
                });
            }
        });
    });
});
  