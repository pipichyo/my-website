const button = document.querySelector(".contact-btn");

button.addEventListener("click", function() {
     button.textContent = "Я скоро вам напишу 😎";
});


const themeButton = document.querySelector(".theme-toggle");

// Проверяем сохранённую тему
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "🌞";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌞";
    } else {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "🌙";
    }
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
    }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav a");
const theme = document.querySelector(".theme-toggle")

function closeMenu() {
    nav.classList.remove("active");
    burger.classList.remove("active");
    overlay.classList.remove("active");
}

burger.addEventListener("click", function() {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
    theme.classList.toggle("active");
});

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {
        closeMenu()
        e.preventDefault()
        const id = this.getAttribute("href");
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});


overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu()
    }
});

const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;
    if (currentScroll <= 50) {
        header.classList.remove("hide");
    }
    if (currentScroll > lastScroll) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScroll = currentScroll;
});


