/* Typing Animation */
const text = "Software Engineer | Python Developer | Web Developer";
let index = 0;

function typingAnimation() {

    const element = document.getElementById("typing");

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;

        setTimeout(typingAnimation, 60);
    } else {
        // highlight first word after typing finishes
        element.innerHTML = element.innerHTML.replace(
            "Software Engineer",
            '<span class="highlight">Software Engineer</span>'
        );
    }
}

typingAnimation();



/* Scroll Progress */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    document.querySelector(".scroll-progress").style.width = (scrollTop / height) * 100 + "%";

});



/* Mobile Menu */

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* Skill Display */

function showSkill(skill) {

    const display = document.getElementById("skill-display");

    if (skill === "programming") {

        display.innerHTML = `
Python  
SQL  
Object Oriented Programming  
`;

    } else if (skill === "web") {

        display.innerHTML = `
HTML5  
CSS3  
JavaScript  
Responsive Design  
`;

    } else if (skill === "database") {

        display.innerHTML = `
MySQL  
Database Schema Design  
SQL Queries  
`;

    } else if (skill === "tools") {

        display.innerHTML = `
Git  
GitHub  
VS Code  
`;

    }

}



/* Scroll Reveal Animation */

function revealOnScroll() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "all 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 200);

});
window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let offset = window.scrollY;

    hero.style.transform = "translateY(" + offset * 0.2 + "px)";

});
/* Active Navbar Highlight */

const sectionsList = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-box");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sectionsList.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

document.getElementById("contact-form").addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
            "service_o2waypi",
            "template_ifh8zfu",
            this,
            "oPEZ5nLEXASYPTHm7"
        )
        .then(function() {

            document.getElementById("contact-form").reset();
            document.getElementById("success-popup").style.display = "flex";

            setTimeout(function() {
                const msg = document.getElementById("form-success");
                msg.style.opacity = "0";

                setTimeout(function() {
                    msg.style.display = "none";
                    msg.style.opacity = "1";
                }, 500);

            }, 4000);

        }, function(error) {

            alert("Failed to send message.");

        });

});

function openCert(imageSrc) {
    document.getElementById("cert-popup").style.display = "flex";
    document.getElementById("cert-image").src = imageSrc;
}

function closeCert() {
    document.getElementById("cert-popup").style.display = "none";
}
document.getElementById("cert-popup").addEventListener("click", function(e) {
    if (e.target.id === "cert-popup") {
        closeCert();
    }
});
const skillsSection = document.querySelector("#skills");

const progressBars = document.querySelectorAll(".progress");

function showSkills() {
    progressBars.forEach(bar => {
        bar.style.width = bar.classList.contains("python") ? "85%" :
            bar.classList.contains("html") ? "90%" :
            bar.classList.contains("css") ? "85%" :
            bar.classList.contains("javascript") ? "75%" :
            bar.classList.contains("sql") ? "70%" : "0%";
    });
}

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        showSkills();
    }
});

function closePopup(){
document.getElementById("success-popup").style.display = "none";
}