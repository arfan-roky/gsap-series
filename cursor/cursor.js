const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.8,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View Details";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff5c",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "white",
  });
});
