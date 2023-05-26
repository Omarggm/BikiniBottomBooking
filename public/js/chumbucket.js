// lead item is purposely a dummy item not shown on the site to ensure proper targeting
var menuItems = [
  {
    item_name: "CHUM",
    count: 0,
    item_price: 1,
  },
  {
    item_name: "CHUM FRIES",
    count: 0,
    item_price: 5.99,
  },
  {
    item_name: "CHUM BURGER",
    count: 0,
    item_price: 10.99,
  },
  {
    item_name: "CHUM SHAKE",
    count: 0,
    item_price: 7.99,
  },
  {
    item_name: "CHUM STICK",
    count: 0,
    item_price: 5.99,
  },
  {
    item_name: "CHUM CHILI",
    count: 0,
    item_price: 10.00,
  }
];

var section = document.querySelector(".style-section");
var opener = document.querySelector(".cb-opener");
var emptyCart = document.querySelector(".cb-empty-cart");
var total = JSON.parse(localStorage.getItem('total'));

counter = document.querySelectorAll(".counter");
for (var i = 1; i < 5; i++) {
  var menuItem = menuItems[i];
  menuItem.count = parseInt(localStorage.getItem(menuItem.item_name)) || 0;
  // var textBox = document.querySelector(".item-" + i + " .count");
  counter.textContent = menuItem.count;
  console.log("this item count is " + menuItem.count + " " + menuItem.item_name + "(s) for $" + menuItem.item_price + " each");
  localStorage.setItem(menuItem.item_name, menuItem.count);
}


section.addEventListener("click", function (event) {
  if (event.target.classList.contains("minus")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count > 0) {
      menuItem.count--;

      localStorage.getItem("total", total);
      total = total - menuItem.item_price;
      total = Math.round(total * 100) / 100;
    }

    var textBox = event.target.nextElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.item_name + "(s)" + " for $" + menuItem.item_price + " each");
    localStorage.setItem(menuItem.item_name, menuItem.count);
    localStorage.setItem("total", total);
    console.log("The current total is $" + total);
  }

  if (event.target.classList.contains("add")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count < 20) {
      menuItem.count++;

      localStorage.getItem("total", total);
      total = total + menuItem.item_price;

      // to prevent weird rounding errors
      total = Math.round(total * 100) / 100;
    }
    var textBox = event.target.previousElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.item_name + "(s) for $" + menuItem.item_price + " each");
    localStorage.setItem(menuItem.item_name, menuItem.count);
    localStorage.setItem(menuItem.item_name, menuItem.count);
    localStorage.setItem("total", total);
    console.log("The current total is $" + total);
  }
});



opener.addEventListener("click", function () {
  var listItem = document.querySelector("#dialog ul");

  while (listItem.hasChildNodes()) {
    listItem.removeChild(listItem.firstChild);
  }

  for (var i = 0; i < menuItems.length; i++) {
    var quantity = localStorage.getItem(menuItems[i].item_name);

    if (quantity != null && quantity > 0) {
      var newList = document.createElement("li");
      newList.classList.add("list");
      newList.textContent = menuItems[i].item_name + " $" + menuItems[i].item_price + " x" + quantity;
      listItem.appendChild(newList);
    }
  }
  listItem.append("🦈 Total: $" + total);
});

emptyCart.addEventListener("click", function () {
  const clearCart = confirm("Are you sure you want to empty your cart?");
  if (clearCart) {
    localStorage.clear();
    location.reload();
  }
});
