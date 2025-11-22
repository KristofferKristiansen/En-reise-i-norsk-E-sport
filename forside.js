/* --- ANIMER KORTENE VED SCROLL --- */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
