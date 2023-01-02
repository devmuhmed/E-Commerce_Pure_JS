//setup variable
let productDom = document.querySelector(".content-products");
let cartProductDivDom = document.querySelector(".carts-products div");
let cartProductMenu = document.querySelector(".carts-products");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let badgeDom = document.querySelector(".badge");
let products = JSON.parse(localStorage.getItem("products"));
// open card menu
shoppingCartIcon.addEventListener("click", openCartMenu);
// display product
let getProductsUi;
(getProductsUi = function (products = []) {
  let productsUi = products.map((item) => {
    console.log("eeee", item)
    return `
        <div class="product-item d-flex">
            <img
            src="${item.imageUrl}"
            alt="image"
            class="product-item-img"
            />
            <div class="product-item-desc">
              <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-action d-flex"> 
              <button class="add-to-cart" onclick="addToCart(${item.id})">
                Add To Cart
              </button>
              <i class="far fa-heart" style ="color: ${item.liked == true ? "red" :""}" onclick="addToFavorite(${item.id})"></i>
            </div>
          </div>
        `;
  });
  productDom.innerHTML = productsUi;
})(JSON.parse(localStorage.getItem("products")));
// Check if there's item in localstorage
let addedItem = [];
(function cartMenuData() {
  addedItem = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
  if (addedItem) {
    addedItem.map(
      (item) => (cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`)
    );
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
  }
})();
// Add to cart
let allItems = [];
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = products.find((item) => item.id === id);
    let item = allItems.find((item) => item.id === choosenItem.id);
    if (item) {
      choosenItem.qty += 1;
    } else {
      allItems.push(choosenItem);
    }
    cartProductDivDom.innerHTML = "";
    allItems.forEach((item) => {
      cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    addedItem = [...addedItem, choosenItem];
    let uniqueProducts = getUniqueArr(addedItem, "id");
    localStorage.setItem("productsInCart", JSON.stringify(uniqueProducts));
    let cartProductItems = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
}
function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, finalarr) => finalarr.indexOf(item) === i && i)
    .filter(item => arr[item])
    .map(item => arr[item]);
  return unique;
}
// open card menu
function openCartMenu() {
  if (cartProductDivDom.innerHTML != "") {
    if (cartProductMenu.style.display == "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";
    }
  }
}
function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartdetails.html";
}
// search function
let inputSearch = document.querySelector("#search");
inputSearch.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));
  if (e.target.value.trim() === "")
    getProductsUi(JSON.parse(localStorage.getItem("products")));
});
function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.indexOf(title) !== -1);
  getProductsUi(arr);
}
// add to favorite

let favoriteItems = localStorage.getItem("productsFavorite")
    ? JSON.parse(localStorage.getItem("productsFavorite"))
    : [];
function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = products.find((item) => item.id === id);
    choosenItem.liked = true;
    favoriteItems = [...favoriteItems,choosenItem]
    let uniqueProducts = getUniqueArr(favoriteItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map(item => {
      if(item.id === choosenItem.id){
        item.liked = true
      }
    })
    localStorage.setItem("products",JSON.stringify(products))
    getProductsUi(products)
  } else {
    window.location = "login.html";
  }
}
