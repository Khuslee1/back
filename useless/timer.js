const start = document.querySelector(".button_cont button:nth-child(1)");
const stop = document.querySelector(".button_cont button:nth-child(2)");
const reset = document.querySelector(".button_cont button:nth-child(3)");
const time = document.querySelector(".time");

let counts1 = 0;
let counts2 = 0;
let countm1 = 0;
let countm2 = 0;
let counth1 = 0;
let counth2 = 0;
let interval;

const hevleh = () => {
  return `${counth2}${counth1}:${countm2}${countm1}:${counts2}${counts1}`;
};
const adding = () => {
  counts1++;

  if (counts1 > 9) {
    counts2++;
    counts1 = 0;
  }

  if (counts2 >= 6) {
    counts2 = 0;
    countm1++;
  }

  if (countm1 > 9) {
    countm2++;
    countm1 = 0;
  }

  if (countm2 >= 6) {
    countm2 = 0;
    counth1++;
  }

  if (counth1 > 9) {
    counth2++;
    counth1 = 0;
  }
  time.innerHTML = hevleh();
};

start.addEventListener("click", () => {
  interval = setInterval(() => adding(), 1000);
  start.disabled = true;
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  start.disabled = false;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  counts1 = 0;
  counts2 = 0;
  countm1 = 0;
  countm2 = 0;
  counth1 = 0;
  counth2 = 0;
  time.innerHTML = hevleh();
  start.disabled = false;
});
