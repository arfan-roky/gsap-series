let initial = `M 10 100 Q 500 100 990 100`;
const final = `M 10 100 Q 500 100 990 100`;

const string = document.getElementById("string");

string.addEventListener("mousemove", (event) => {
  initial = `M 10 100 Q ${event.x} ${event.y} 990 100`;

  gsap.to("svg path", {
    attr: {
      d: initial,
    },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: final,
    },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});
