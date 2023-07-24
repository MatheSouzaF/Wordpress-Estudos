const btnAppears = document.querySelector('.btnFixed');

function btnOpen() {
  if (btnAppears) {
    btnAppears.classList.add('visible');
  }
}

function btnOff() {
  if (btnAppears) {
    btnAppears.classList.remove('visible');
  }
}

window.addEventListener('load', btnFixed);

function btnFixed() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".section02", {
    scrollTrigger: {
      trigger: ".section02",
      start: "top center",
      scrub: true,
      onEnter: btnOpen,
      onLeaveBack: btnOff,
    }
  });

  gsap.from(".section08", {
    scrollTrigger: {
      trigger: ".section08",
      start: "top-=200 center",
      scrub: true,
      onEnter: btnOff,
      onLeaveBack: btnOpen,
    }
  });
}
