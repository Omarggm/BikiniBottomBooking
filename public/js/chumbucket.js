// lead item is purposely a dummy item not shown on the site to ensure proper targeting
var menuItems = [
  {
    item_name: "CHUM",
    count: 0,
  },  
  {
    item_name: "CHUM FRIES",
    count: 0,
  },
  {
    item_name: "CHUM BURGER",
    count: 0,
  },
  {
    item_name: "CHUM CHILI",
    count: 0,
  },
  {
    item_name: "CHUM STICK",
    count: 0,
  },
  {
    item_name: "CHUM SHAKE",
    count: 0,
  },
];

var section = document.querySelector(".style-section");
var KKopener = document.querySelector(".opener");

section.addEventListener("click", function (event) {
  if (event.target.classList.contains("minus")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count > 0) {
      menuItem.count--;
    }
    var textBox = event.target.nextElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.item_name + "(s)");
    localStorage.setItem(menuItem.item_name, menuItem.count);
  }

  if (event.target.classList.contains("add")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count < 20) {
      menuItem.count++;
    }
    var textBox = event.target.previousElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.item_name + "(s)");
    localStorage.setItem(menuItem.item_name, menuItem.count);
  }
});

KKopener.addEventListener("click", function () {
  var listItem = document.querySelector("#dialog ul");

  while (listItem.hasChildNodes()) {
    listItem.removeChild(listItem.firstChild);
  }

  for (var i = 0; i < menuItems.length; i++) {
    var quantity = localStorage.getItem(menuItems[i].item_name);

    if (quantity != null && quantity > 0) {
      var newList = document.createElement("li");
      newList.classList.add("list");
      newList.textContent = menuItems[i].item_name + " " + quantity;
      listItem.appendChild(newList);
    }
  }
});
