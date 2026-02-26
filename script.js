// Smooth entrance animations on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});

// Smooth scroll effect
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});



/* HIDE DEFAULT CURSOR */
body {
    cursor: none;
}

/* MAIN CURSOR DOT */
.cursor {
    position: fixed;
    width: 18px;
    height: 18px;
    border: 2px solid #c59d5f;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: 
        width 0.3s ease,
        height 0.3s ease,
        background 0.3s ease,
        transform 0.08s ease;
    z-index: 9999;
}

/* EXPAND ON HOVER */
.cursor.hover {
    width: 45px;
    height: 45px;
    background: rgba(197, 157, 95, 0.1);
}


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Hover grow effect
const hoverElements = document.querySelectorAll("a, button, .menu-item, img");

hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});
