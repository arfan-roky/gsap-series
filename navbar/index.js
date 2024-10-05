const tl = gsap.timeline();

const menu = document.querySelector("i.ri-menu-line");
const closeMenu = document.querySelector("i.ri-close-line");

tl.to("ul", {
  right: 0,
  duration: 0.5,
});
tl.from("ul li", {
  x: 140,
  opacity: 0,
  duration: 0.5,
  stagger: 0.28,
});

tl.from(closeMenu, {
  opacity: 0,
  duration: 0.4,
});

tl.pause();
menu.addEventListener("click", () => {
  tl.play();
});

closeMenu.addEventListener("click", () => {
  tl.reverse();
});

// when click outside of the ul tag it will close
window.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== closeMenu) {
    tl.reverse();
  }
});
