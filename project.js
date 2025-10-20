const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");

let content = [];

const ListItem = (cont) => {
  return `<div class="item"><div class="check"><input type="checkbox" class="hiisenuu">${cont}</div><button class="delete">Delete</button></div>`;
};
const render = () => {
  list.innerHTML = content
    .map((item) => {
      return ListItem(item.text);
    })
    .join("");
  angilah();
  checker();
  addlist();
};

const angilah = () => {
  all.addEventListener("click", () => {
    list.innerHTML = content
      .map((item) => {
        return ListItem(item.text);
      })
      .join("");
    checker();
    addlist();
  });
  active.addEventListener("click", () => {
    list.innerHTML = content
      .filter((ele) => ele.check == false)
      .map((item) => {
        return ListItem(item.text);
      })
      .join("");
    checker();
    addlist();
  });
  completed.addEventListener("click", () => {
    list.innerHTML = content
      .filter((ele) => ele.check == true)
      .map((item) => {
        return ListItem(item.text);
      })
      .join("");
    checker();
    addlist();
  });
};

const addlist = () => {
  const delet = document.querySelectorAll(".delete");
  delet.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      content = content.filter((el, i) => {
        return i != index;
      });
      render();
    });
  });
};

const checker = () => {
  const checkm = document.querySelectorAll(".hiisenuu");
  checkm.forEach((ele, i) => {
    ele.addEventListener("change", () => {
      content[i].check = ele.checked;
      render();
    });
    ele.checked = content[i].check;
  });
};

add.addEventListener("click", () => {
  const value = { text: input.value, check: false };
  content.push(value);
  render();
});
