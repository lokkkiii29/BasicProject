const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("nav ul li a");

// Change navbar color when scrolling
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Highlight active link when clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
