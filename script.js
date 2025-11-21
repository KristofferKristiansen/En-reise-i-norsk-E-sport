/* --- SCROLL ANIMASJONER FOR ARTIKLER OG BILDER --- */
const animatedElements = document.querySelectorAll('article, .image-break');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));


/* --- TIDSLINJE NODER OG SCROLL-AKTIVERT ANIMASJON --- */

// Alle node-elementene
const nodes = document.querySelectorAll('.timeline-graph .node');

// Selve linjen/timeline-wrapper
const timeline = document.querySelector('.timeline-graph');

// Instruksjonsteksten over grafen
const timelineText = document.querySelector('.timeline-instruks');

// Plasser nodene jevnt og lag tooltips
nodes.forEach((node, index) => {
  const total = nodes.length - 1;
  const position = (index / total) * 100;

  node.style.left = position + '%';

  // Lag tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = node.dataset.year + ": " + node.dataset.text;

  node.appendChild(tooltip);
});

const fotoTekster = document.querySelectorAll('.foto-tekst');

const fotoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fotoTekster.forEach(f => fotoObserver.observe(f));



/* --- OBSERVER SOM STARTER TIMELINE-ANIMASJONEN --- */
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      /* 1: Fade inn instruksjonen */
      if (timelineText) {
        timelineText.classList.add('visible');
      }

      /* 2: Start linjeanimasjon */
      timeline.classList.add('animate');

      /* 3: Nodeanimasjoner i sekvens */
      nodes.forEach((node, index) => {
        setTimeout(() => {
          node.classList.add('animate');
        }, index * 400); // En node hvert 0.4 sekund
      });

      // Stopper observer etter første aktivering
      timelineObserver.unobserve(timeline);
    }
  });
}, { threshold: 0.3 });

timelineObserver.observe(timeline);
