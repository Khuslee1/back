const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list =document.querySelector(".list");

let content="";

const ListItem =(content) => {
    return `<div class="item"> ${content} <button class="delete"> Delete </button> </div>`;
};

add.addEventListener("click", () => {
    const value =input.value;
    content += ListItem(value);
    list.innerHTML=content;


    const delet = document.querySelectorAll(".delete");
    const item= document.querySelectorAll(".item");
    delet.forEach((btn) => {
        btn.addEventListener("click", () => {

        });
    });


} );