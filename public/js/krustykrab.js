// lead item is purposely a dummy item not shown on the site to ensure proper targeting
var menuItems = [
  {
    name: "PRETTY PATTY SLIDERS",
    count: 0,
    item_price: 1,
  },
  {
    name: "KRABBY PIZZA",
    count: 0,
    item_price: 11.99,
  },
  {
    name: "PEAS (IN A CAN) PIE",
    count: 0,
    item_price: 7.99,
  },
  {
    name: "KRABBY PATTY (WITH CHEESE)",
    count: 0,
    item_price: 12.99,
  },
  {
    name: "SEANUT BRITTLE",
    count: 0,
    item_price: 7.99,
  },
  {
    name: "DIET DR. KELP",
    count: 0,
    item_price: 3.99,
  },
  {
    name: "WATER",
    count: 0,
    item_price: 1.75,
  },
  {
    name: "KELP SHAKE",
    count: 0,
    item_price: 7.99,
  },
  {
    name: "TEA",
    count: 0,
    item_price: 7.99,
  },
  {
    name: "SALAD",
    count: 0,
    item_price: 14.50,
  },
  {
    name: "KELP FRIES",
    count: 0,
    item_price: 5.99,
  },
  {
    name: "KRABBY PATTY",
    count: 0,
    item_price: 10.99,
  },
];

var section = document.querySelector(".style-section");
const kkOpener = document.querySelector(".opener-kk");
var emptyCart = document.querySelector(".empty-cart");
var total = JSON.parse(localStorage.getItem('kk-total'));

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
    console.log("this item count is " + menuItem.count + " " + menuItem.name + "(s) for $" + menuItem.item_price + " each");
    localStorage.setItem(menuItem.name, menuItem.count);
    localStorage.setItem("kk-total", total);
    console.log("The current total is $" + total);
  }


  if (event.target.classList.contains("add")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count < 20) {
      menuItem.count++;
      localStorage.getItem("kk-total", total);
      total = total + menuItem.item_price;
      total = Math.round(total * 100) / 100;      
    }
    var textBox = event.target.previousElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.name + "(s) for $" + menuItem.item_price + " each");
    localStorage.setItem(menuItem.name, menuItem.count);
    console.log("The current total is $" + total);
  }
});


// f
kkOpener.addEventListener("click", function () {
  var listItem = document.querySelector("#dialog ul");
  // var total = 0;

  while (listItem.hasChildNodes()) {
    listItem.removeChild(listItem.firstChild);
  }


  for (var i = 0; i < menuItems.length; i++) {
    var quantity = localStorage.getItem(menuItems[i].name);

    // total += (menuItems[i].item_price * menuItems[i].count);

    // prevents weird rounding errors
    // total = Math.round(total * 100) / 100;

    if (quantity != null && quantity > 0) {
      var newList = document.createElement("li");
      newList.classList.add("list");
      newList.textContent = menuItems[i].name + ": $" + menuItems[i].item_price + " x" + quantity;
      listItem.appendChild(newList);
    }
  }
  // for (var i = 0; i < menuItems.length; i++) {
  //   total += localStorage.getItem(menuItems[i].item_price * menuItems[i].count);
  // }
  // console.log("total is $" + total);
  if (total > 0 ) {listItem.append("🦀 Total: $" + total)};
});
// let total = 0;



emptyCart.addEventListener("click", function () {
  const clearCart = confirm("Are you sure you want to empty your cart?");
  if (clearCart) {
    localStorage.clear();
    location.reload();
  }
});
