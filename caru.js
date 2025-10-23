let box = document.querySelectorAll(".box");
let cont = document.querySelector(".cont");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let boxCont = document.querySelector(".box_cont");
let a = 0;
box.addEventListener("click", () => {
  boxCont.animate(
    [
      { transform: `translateX(${a}px)` },
      { transform: `translateX(${a - 100}px)` },
    ],
    { duration: 1000, easing: "ease-in-out" }
  );
  a = a - 100;
});

box.addEventListener("click", () => {
  boxCont.animate(
    [
      { transform: `translateX(${a}px)` },
      { transform: `translateX(${a + 100}px)` },
    ],
    { duration: 1000, easing: "ease-in-out" }
  );
  a = a + 100;
});
