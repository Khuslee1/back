let butt = document.querySelector(".start");
let container = document.querySelector(".container");

const first = () => {
  return `Wait for green`;
};

const second = () => {
  return `<div class="press"> Presssssss!!</div>`;
};

const third = (time) => {
  return `Your reaction time is ${time} ms
  <button class="restart"> restart </button>`;
};

butt.addEventListener("click", () => {
  let time1;
  let time2;
  container.innerHTML = first();
  container.style.backgroundColor = "red";
  setTimeout(() => {
    container.innerHTML = second();
    const d = new Date();
    time1 = d.getMilliseconds() / 1000 + d.getSeconds();
    console.log(time1);
    let press = document.querySelector(".press");
    press.addEventListener("click", () => {
      const b = new Date();
      time2 = b.getMilliseconds() / 1000 + b.getSeconds();
      console.log(time2);
      container.innerHTML = third(Math.round((time2 - time1) * 1000));
      let res = document.querySelector(".restart");
      res.addEventListener("click", () => {
        location.reload();
      });
    });
  }, Math.random() * 4000);
});
