// mouse
let mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", (event) => {
  mouse = getMousePosition(event);
});

// Cursor Implementation
class Cursor {
  constructor(element, doLerp = false) {
    this.DOM = { element, doLerp };
    this.DOM.element.style.opacity = 0;

    this.bounds = this.DOM.element.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: doLerp ? 0.2 : 1 },
      ty: { previous: 0, current: 0, amt: doLerp ? 0.2 : 1 },
      scale: { previous: 1, current: 1, amt: doLerp ? 0.17 : 1 },
      opacity: { previous: 1, current: 1, amt: doLerp ? 0.17 : 1 },
    };

    this.onMouseMoveEvent = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.current =
        mouse.y - this.bounds.height / 2;

      gsap.to(this.DOM.element, {
        duration: 0.9,
        ease: "Power3.easeOut",
        opacity: 1,
      });

      requestAnimationFrame(() => this.render());

      window.removeEventListener("mousemove", this.onMouseMoveEvent);
    };

    window.addEventListener("mousemove", this.onMouseMoveEvent);
  }

  enter() {
    this.renderedStyles.scale.current = 1.8;
  }

  leave() {
    this.renderedStyles.scale.current = 1;
  }

  render() {
    this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
    this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.DOM.element.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px) scale(${this.renderedStyles.scale.previous})`;
    this.DOM.element.style.opacity = this.renderedStyles.opacity.previous;

    requestAnimationFrame(() => this.render());
  }
}

// Initialize cursor
const cursorSphere = new Cursor(document.querySelector(".cursor-sphere"), true);
new Cursor(document.querySelector(".cursor"));

// Mouse cursor hovers
const hoverText = document.querySelector("a");
hoverText.addEventListener("mouseenter", () => cursorSphere.enter());
hoverText.addEventListener("mouseleave", () => cursorSphere.leave());

// Linear interpolation
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

// Gets the mouse position
function getMousePosition(event) {
  let positionX = 0;
  let positionY = 0;

  if (!event) event = window.event;

  if (event.pageX & event.pageY) {
    positionX = event.pageX;
    positionY = event.pageY;
  } else if (event.clientX) {
    positionX =
      event.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    positionY =
      event.clientY +
      document.body.scrollTop +
      document.documentElement.scrollTop;
  }

  return { x: positionX, y: positionY };
}

// header
const headerEl = document.querySelector("#header");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      gsap.to(headerEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(headerEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
