// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


// ===============================
// Active Menu
// ===============================

const sections = document.querySelectorAll("section");

const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Header Shadow
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";
        header.style.background = "rgba(255,255,255,.98)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,.95)";

    }

});


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(
    ".timeline-item, .card, .education-grid div, .skills span"
).forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});


// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// Hero Fade
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
