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
// let panels = gsap.utils.toArray("#project .sec-cont");

// let panelTween = gsap.to(panels, {
//   xPercent: -100 * (panels.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#project",
//     start: "top top",
//     end: "+=" + window.innerWidth * 3, // 가로로 스크롤할 거리 계산
//     markers: true,
//     pin: true,
//     scrub: 1,
//   },
// });
let panels = gsap.utils.toArray("#project .sec-cont");

let panelTween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#project",
    start: "top top",
    end: "+=300%", // 가로 스크롤 범위를 300%로 설정
    markers: true,
    pin: true,
    scrub: 1,
    markers: false,
  },
});
