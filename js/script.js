// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ==========================
// Close Menu on Link Click
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ==========================
// Active Navbar on Scroll
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ==========================
// Navbar Background on Scroll
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    }else{
        header.style.background = "#0f172a";
        header.style.boxShadow = "none";
    }

});

// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const words = [
    "Python Full Stack Developer",
    "Frontend Developer",
    "Django Developer",
    "Freelancer"
];

const typing = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0, charIndex++);
    }else{
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 40 : 80;

    if(!deleting && charIndex > currentWord.length){
        deleting = true;
        speed = 1800; // Pause after typing
    }

    if(deleting && charIndex < 0){
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500; // Pause before next word
    }

    setTimeout(typeEffect, speed);
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Backend integration is coming soon.");
});

typeEffect();