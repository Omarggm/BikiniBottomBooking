// lead item is purposely a dummy item not shown on the site to ensure proper targeting
var menuItems = [
  {
    name: "PRETTY PATTY SLIDERS x",
    count: 0,
  },
  {
    name: "KRABBY PATTY x",
    count: 0,
  },
  {
    name: "KRABBY PATTY (WITH CHEESE) x",
    count: 0,
  },
  {
    name: "KELP FRIES x",
    count: 0,
  },
  {
    name: "KRABBY PIZZA x",
    count: 0,
  },
  {
    name: "SALAD x",
    count: 0,
  },
  {
    name: "PEAS (IN A CAN) PIE x",
    count: 0,
  },
  {
    name: "SEANUT BRITTLE x",
    count: 0,
  },
  {
    name: "DIET DR. KELP x",
    count: 0,
  },
  {
    name: "WATER x",
    count: 0,
  },
  {
    name: "KELP SHAKE x",
    count: 0,
  },
  {
    name: "TEA x",
    count: 0,
  },
];

var section = document.querySelector(".style-section");
var KKopener = document.querySelector(".opener");
var emptyCart = document.querySelector(".empty-cart");

section.addEventListener("click", function (event) {
  if (event.target.classList.contains("minus")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count > 0) {
      menuItem.count--;
    }
    var textBox = event.target.nextElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.name + "(s)");
    localStorage.setItem(menuItem.name, menuItem.count);
  }

  if (event.target.classList.contains("add")) {
    var index = event.target.dataset.number;
    var menuItem = menuItems[index];
    if (menuItem.count < 20) {
      menuItem.count++;
    }
    var textBox = event.target.previousElementSibling;
    textBox.textContent = menuItem.count;
    console.log("this item count is " + menuItem.count + " " + menuItem.name + "(s)");
    localStorage.setItem(menuItem.name, menuItem.count);
  }
});

KKopener.addEventListener("click", function () {
  var listItem = document.querySelector("#dialog ul");

  while (listItem.hasChildNodes()) {
    listItem.removeChild(listItem.firstChild);
  }

  for (var i = 0; i < menuItems.length; i++) {
    var quantity = localStorage.getItem(menuItems[i].name);

    if (quantity != null && quantity > 0) {
      var newList = document.createElement("li");
      newList.classList.add("list");
      newList.textContent = menuItems[i].name + " " + quantity;
      listItem.appendChild(newList);
    }
  }
});

emptyCart.addEventListener("click", function () {
  const clearCart = confirm("Are you sure you want to emptyyour cart?");
  if (clearCart) {
    localStorage.clear();
    location.reload();
  }
});
   
