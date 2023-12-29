// mouse
const cursor = document.querySelector(".cursor");
const cursorSphere = document.querySelector(".cursor-sphere");

document.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  const cursorRect = cursor.getBoundingClientRect();
  const cursorCenterX = cursorRect.width / 2;
  const cursorCenterY = cursorRect.height / 2;

  cursor.style.transform = `translate(${posX - cursorCenterX}px, ${
    posY - cursorCenterY
  }px)`;

  const cursorSphereRect = cursorSphere.getBoundingClientRect();
  const cursorSphereCenterX = cursorSphereRect.width / 2;
  const cursorSphereCenterY = cursorSphereRect.height / 2;

  cursorSphere.style.transform = `translate(${posX - cursorSphereCenterX}px, ${
    posY - cursorSphereCenterY
  }px)`;
});

// header
// const headerEl = document.querySelector("#header");
// window.addEventListener(
//   "scroll",
//   _.throttle(function () {
//     console.log(window.scrollY);
//     if (window.scrollY > 200) {
//       gsap.to(headerEl, 0.6, {
//         opacity: 0,
//         display: "none",
//       });
//     } else {
//       gsap.to(headerEl, 0.6, {
//         opacity: 1,
//         display: "block",
//       });
//     }
//   }, 300)
// );

// header
const headerEl = document.querySelector("#header");
let lastScroll = 0;

window.addEventListener(
  "scroll",
  _.throttle(function () {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 200) {
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

    lastScroll = currentScroll;
  }, 300)
);

// project
let panels = gsap.utils.toArray("#project .sec-cont");

let panelTween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#project",
    start: "top top",
    end: "+=300%",
    markers: true,
    pin: true,
    scrub: 1,
    markers: false,
  },
});

// aos
AOS.init();

//test
// $(".fullpage").fullpage({
//   sectionSelector: ".section-g",
//   slideSelector: ".sec-cont",
//   navigation: true,
//   slidesNavigation: true,
//   controlArrows: false,
//   anchors: ["firstSection", "secondSection", "thirdSection", "fourthSection"],
//   menu: "#menu",

//   onLeave: function (index, nextIndex, direction) {
//     if (index == 5) {
//       $("#fp-nav").show();
//     }
//   },

//   afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
//     if (anchorLink == "fourthSection" && slideIndex == 1) {
//       $.fn.fullpage.setAllowScrolling(false, "up");
//     }
//   },

//   onSlideLeave: function (anchorLink, index, slideIndex, direction) {
//     if (anchorLink == "fourthSection" && slideIndex == 1) {
//       $.fn.fullpage.setAllowScrolling(true, "up");
//     }
//   },
// });
