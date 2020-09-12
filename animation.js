import anime from "animejs/lib/anime.es.js";

document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".header__container",
    scale: [1.1, 1],
    opacity: [0, 1],
    duration: 300,
    easing: "easeInOutSine",
  });

  var tl = anime.timeline({});

  tl.add({
    targets: ".rating__star",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(80, { start: -50 }),
  })
    .add(
      {
        targets: ".rating__text",
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(80),
        easing: "easeOutSine",
      },
      "-=1600"
    )
    .add(
      {
        targets: ".rating",
        opacity: [0, 1],
      },
      "-=1600"
    );

  var tlTwo = anime.timeline({});

  tlTwo
    .add(
      {
        targets: ".card-1",
        translateY: [100, 0],
        opacity: [0, 1],
        delay: 2500,
        duration: 500,
        easing: "easeOutSine",
      },
      "-=1600"
    )
    .add(
      {
        targets: ".card-2",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutSine",
      },
      "-=200"
    )
    .add(
      {
        targets: ".card-3",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutSine",
      },
      "-=200"
    );
});
