gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.to(section, {
    ease: "none",
    scrollTrigger: {
      trigger: section,
      onUpdate: ({ trigger, progress }) =>
        trigger.style.setProperty(
          "--progress",
          (progress.toFixed(4) - 0.5) * 2
        ),
    },
  });
});

const articles = document.querySelectorAll("section article");

articles.forEach((article) => {
  const boxes = article.querySelectorAll("div");
  gsap.from(boxes, {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: article,
      start: "top 80%",
      end: "+=200",
      toggleActions: "play none none reverse",
      fastScrollEnd: true,
    },
  });
});

const span = (text, index) => {
  const node = document.createElement("span");

  node.innerText = text;
  node.style.setProperty("--index", index);

  return node;
};

const byLetter = (text) => [...text].map(span);

const splitTargets = document.querySelectorAll("[data-split-letters]");

splitTargets.forEach((node) => {
  let nodes = null;
  nodes = byLetter(node.innerText);

  if (nodes) node.firstChild.replaceWith(...nodes);
});
