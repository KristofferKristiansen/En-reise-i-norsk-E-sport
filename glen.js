// Fade-in for artikler og bilder
const elements = document.querySelectorAll("article, .image-break");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.25 });

elements.forEach(el => observer.observe(el));

