let users = document.querySelector("#users");
let user = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");
let username = localStorage.getItem("username");
if (username) {
  console.log(users);
  links.remove();
  users.style.display = "flex";
  user.innerHTML = username;
}
logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
// Define Products
let products = [
  {
    id: 1,
    title: "headphone item",
    size: "large",
    imageUrl: "img/headphone.jpeg",
  },
  {
    id: 2,
    title: "glasses item",
    size: "large",
    imageUrl: "img/glasses.jpg",
  },
  {
    id: 3,
    title: "laptop item",
    size: "large",
    imageUrl: "img/laptop.jpg",
  },
  {
    id: 4,
    title: "watch item",
    size: "large",
    imageUrl: "img/watch.jpeg",
  },
];
let productDom = document.querySelector(".content-products");
let cartProductDivDom = document.querySelector(".carts-products div");
let cartProductMenu = document.querySelector(".carts-products");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let badgeDom = document.querySelector(".badge");
shoppingCartIcon.addEventListener("click", openCartMenue);
function getProductsUi() {
  let productsUi = products.map((item) => {
    return `
        <div class="product-item d-flex">
            <img
            src="${item.imageUrl}"
            alt="image"
            class="product-item-img"
            />
            <div class="product-item-desc">
              <h2>${item.title}</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-action d-flex"> 
              <button class="add-to-cart" onclick="addToCart(${item.id})">
                Add To Cart
              </button>
              <i class="far fa-heart"></i>
            </div>
          </div>
        `;
  });
  productDom.innerHTML = productsUi;
}
getProductsUi();
function checkLogedUser() {
  if (localStorage.getItem("username")) {
    // window.location = "cartproducts.html"
  } else {
    window.location = "login.html";
  }
}

function addToCart(id) {
  let cartProductItems = document.querySelectorAll(".carts-products div p");
  let choosenItem = products.find((item) => {
    return item.id === id;
  });
  cartProductDivDom.innerHTML += `<p>${choosenItem.title}</p>`;
  badgeDom.style.display = "block";
  badgeDom.innerHTML = cartProductItems.length + 1;
}
function openCartMenue() {
  if (cartProductDivDom.innerHTML != "") {
    if (cartProductMenu.style.display == "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";
    }
  }
}
