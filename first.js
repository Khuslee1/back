let boxes = document.querySelectorAll(".box");
let container = document.querySelectorAll(".cont");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    boxes[i].style.backgroundColor == "blue"
      ? (boxes[i].style.backgroundColor = "red")
      : (boxes[i].style.backgroundColor = "blue");
  });
}

container[0].addEventListener("click", () => {
  container[0].style.backgroundColor = "white";
});
