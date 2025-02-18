// Intersection Observer for section fade-in effect
const sections = document.querySelectorAll(".section-fade");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Animate skill items
gsap.utils.toArray(".skill-item").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
    delay: index * 0.1,
  });
});

// Animate project items
gsap.utils.toArray(".project-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: -50,
    duration: 0.8,
    scrollTrigger: {
      trigger: item,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });
});

// Animate experience items
gsap.utils.toArray(".experience-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: item,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });
});
