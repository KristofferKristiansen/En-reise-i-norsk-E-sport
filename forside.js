/* ============================
   Particle system
============================ */

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = document.querySelector(".hero-banner").offsetHeight;

let particles = [];

for (let i = 0; i < 70; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180,190,255,0.8)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();

/* Resize handling */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".hero-banner").offsetHeight;
});

/* ============================
   CARD FADE-IN ON SCROLL
============================ */

const epicCards = document.querySelectorAll(".epic-card");

const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

epicCards.forEach(card => cardObserver.observe(card));

// VIS ARTIKLER NÅR MAN TRYKKER PÅ KNAPPEN
const showBtn = document.getElementById("showArticles");
const articleSection = document.getElementById("articleSection");

showBtn.addEventListener("click", () => {
    articleSection.classList.remove("hidden");

    // smooth scroll ned til artiklene
    setTimeout(() => {
        articleSection.scrollIntoView({ behavior: "smooth" });
    }, 200);
});

// Fade-in for the small cards
const smallCards = document.querySelectorAll(".small-card");

const smallObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

smallCards.forEach(card => smallObserver.observe(card));

// Hvis man kommer tilbake via #articles, vis kortene
if (window.location.hash === "#articles") {
    articleSection.classList.remove("hidden");
}
