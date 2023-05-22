var menuItems = [
    {
      name: "KRABBY PATTY x",
      count: 0,
    },
  
    {
      name: "KRABBY PATTY (WITH CHEESE) x",
      count: 0,
    },
  
    {
      name: "PRETTY PATTY SLIDERS x",
      count: 0,
    },
  
    {
      name: "NASTY PATTY x",
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
  var opener = document.querySelector(".opener");
  
  section.addEventListener("click", function (event) {
    if (event.target.classList.contains("minus")) {
      var index = event.target.dataset.number;
      var menuItem = menuItems[index];
      if (menuItem.count > 0) {
        menuItem.count--;
      }
      var textBox = document.querySelector("#count-box" + index);
      textBox.textContent = menuItem.count;
      localStorage.setItem(menuItem.name, menuItem.count);
    }
  
    if (event.target.classList.contains("add")) {
      var index = event.target.dataset.number;
      var menuItem = menuItems[index];
      if (menuItem.count < 20) {
        menuItem.count++;
      }
      var textBox = document.querySelector("#count-box" + index);
      textBox.textContent = menuItem.count;
      localStorage.setItem(menuItem.name, menuItem.count);
    }
  });
  
  opener.addEventListener("click", function () {
    var listItem = document.querySelector("#dialog ul");
    
    while(listItem.hasChildNodes()) {
      listItem.removeChild(listItem.firstChild);
    }
  
      for (var i = 0; i < menuItems.length; i++) {
        var quantity = localStorage.getItem(menuItems[i].name);
  
        if (quantity != null && quantity > 0) {
          var newList = document.createElement('li');
          newList.classList.add('list');
          newList.textContent = menuItems[i].name + quantity;
          listItem.appendChild(newList);
        }
  
      }
  });

  //const selectedItems = do

  //const totalPrice = selectedItems.reduce ((sum, item) => sum + item.price, 0);
  
  
  
  // Put inside the event listener to display orders that returned more than
  // var example = menuItems.filter(m => m.count > 0);
  // var example2 = menuItems.filter(m => m.name === 'Water x');
  
  
  var array = ['love','cute','awesome']
  
  var array2 = [ {name:'cool'}, {type:'awesome'}]

  // howler function for button onclicks

const Howler = require("howler");

function garyMeow() {
  var sound = new Howl({
    src: ["./sounds/gary_meow.mp3"],
    autoplay: true,
    volume: 1.0,
  });
}

function stankNoise() {
  var sound = new Howl({
    src: ["./sounds/stank-noise.mp3"],
    autoplay: true,
    volume: 1.0,
  });
}

