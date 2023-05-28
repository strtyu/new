let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let newInt=0;
let newTotalPrice=0;
localStorage.setItem("Num",newInt);
localStorage.setItem("totalPrice",newTotalPrice);
openShopping.addEventListener('click', () => {
  body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: 'Absobers',
    image: 'Absobers.png',
    price: 120000,
  },
  {
    id: 2,
    name: 'Parts',
    image: 'parts.jpg',
    price: 120000,
  },
  {
    id: 3,
    name: 'AC Compressor',
    image: 'ACCompressor.png',
    price: 220000,
  },
  {
    id: 4,
    name: 'Clutch',
    image: 'clutch.png',
    price: 123000,
  },
  {
    id: 5,
    name: 'Oil',
    image: 'oil.jpg',
    price: 320000,
  },
  {
    id: 6,
    name: 'Air Filter',
    image: 'airfilter.jpg',
    price: 120000,
  },
];
let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="image/${value.image}">
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCart(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCart(key) {
  if (listCards[key] == null) {
    // copy product from list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    localStorage.setItem("Num", newInt++);
    console.log(localStorage.getItem("Num"));
    showSnackbar('Added to Cart Successfully', 'success');
  }
  reloadCart();
}

function reloadCart() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    newTotalPrice=totalPrice;
    localStorage.setItem("totalPrice",newTotalPrice);
    count = count + value.quantity;
    localStorage.setItem("Num", count);
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCart();
}

function showSnackbar(message, type, duration = 1900) {
    let icon = '';
    if (type === 'success') {
      icon = 'fa-solid fa-circle-check';
    }
  
    const snackbar = document.createElement('div');
    snackbar.classList.add('snackbar', type);
    snackbar.innerHTML = `
      <i class="icon ${icon}"></i>
      <span class="title">${message}</span>
      <span class="close">&times;</span>
    `;
    document.body.appendChild(snackbar);
  
    setTimeout(() => {
      snackbar.classList.add('show');
      setTimeout(() => {
        snackbar.classList.remove('show');
        setTimeout(() => {
          snackbar.remove();
        }, 190);
      }, duration);
    }, 100);
  }