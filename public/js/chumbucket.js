// const { text } = require("express");

const chumItems = [

  {
    name: "CHUM BURGER x",
    count: 0,
  },

  {
    name: "CHUM FRIES x",
    count: 0,
  },

  {
    name: "CHUM CHILI x",
    count: 0,
  },
  {
    name: "CHUM STICK x",
    count: 0,
  },
  {
    name: "CHUM SHAKE x",
    count: 0,
  },
];

const section = document.querySelector(".style-section");
const opener = document.querySelector(".opener");

section.addEventListener("click", function (event) {
  if (event.target.classList.contains("minus")) {
    const index = event.target.dataset.number;
    const chumItem = chumItems[index];
    if (chumItem.count > 0) {
      chumItem.count--;
    }
    var textBox = document.querySelector("#count-box" + index);
    textBox = chumItem.count;
    textBox.textContent = textBox;
    console.log("this item count is " + chumItem.count + " " + chumItem.name + "(s)");
    localStorage.setItem(chumItem.name, chumItem.count);
  }

  if (event.target.classList.contains("add")) {
    const index = event.target.dataset.number;
    const chumItem = chumItems[index];
    if (chumItem.count < 20) {
      chumItem.count++;
    }
    var textBox = document.querySelector("#count-box" + index);
    textBox = chumItem.count;
    textBox.textContent = textBox;
    console.log("this item count is " + chumItem.count + " " + chumItem.name + "(s)");
    localStorage.setItem(chumItem.name, chumItem.count);
  }
});

opener.addEventListener("click", function () {
  const listItem = document.querySelector("#dialog ul");

  while (listItem.hasChildNodes()) {
    listItem.removeChild(listItem.firstChild);
  }

  for (var i = 0; i < chumItems.length; i++) {
    const quantity = localStorage.getItem(chumItems[i].name);

    if (quantity != null && quantity > 0) {
      const newList = document.createElement("li");
      newList.classList.add("list");
      newList.textContent = chumItems[i].name + quantity;
      listItem.appendChild(newList);
    }
  }
});

// Put inside the event listener to display orders that returned more than
// var example = menuItems.filter(m => m.count > 0);
// var example2 = menuItems.filter(m => m.name === 'Water x');

const array = ["love", "cute", "awesome"];

const array2 = [{ name: "cool" }, { type: "awesome" }];


