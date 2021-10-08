// ======================================= //
// FIRST
// ======================================= //
const btn1 = document.querySelector("#btn-1"),
  box1 = document.querySelector(".box-1");
// din kode her

function clickHandler1() {
  // din kode her
  box1.classList.add("js-1");
}

btn1.addEventListener("click", clickHandler1);

// ======================================= //
// SECOND
// ======================================= //
const btn2 = document.querySelector("#btn-2"),
  boxes = document.querySelectorAll(".box");
// din kode her

function clickHandler2() {
  // din kode her
  boxes.forEach((box) => {
    box.classList.add("js-2");
  });
}

btn2.addEventListener("click", clickHandler2);

// ======================================= //
// THIRD
// ======================================= //
const btn3 = document.querySelector("#btn-3"),
  h5 = document.querySelectorAll(".heading-box h5");
// din kode her

function clickHandler3() {
  // din kode her
  h5.forEach((h5) => {
    h5.classList.add("js-3");
  });
}

btn3.addEventListener("click", clickHandler3);

// ======================================= //
// FOURTH
// ======================================= //
const btn4 = document.querySelector("#btn-4"),
  cards = document.querySelectorAll(".card");
// din kode her

function clickHandler4() {
  // din kode her
  cards.forEach((card) => {
    const children = card.querySelectorAll(":scope > *");
    children.forEach((child) => {
      child.classList.add("js-4");
    });
  });
}

btn4.addEventListener("click", clickHandler4);
