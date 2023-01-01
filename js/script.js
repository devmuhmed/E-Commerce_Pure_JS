//setup variable
let productDom = document.querySelector(".content-products");
let cartProductDivDom = document.querySelector(".carts-products div");
let cartProductMenu = document.querySelector(".carts-products");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let badgeDom = document.querySelector(".badge");
let products = JSON.parse(localStorage.getItem("products"))
// open card menu
shoppingCartIcon.addEventListener("click", openCartMenu);
// display product
let getProductsUi;
(getProductsUi = function (products = []) {
  let productsUi = products.map((item) => {
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
              <i class="far fa-heart"></i>
            </div>
          </div>
        `;
  });
  productDom.innerHTML = productsUi;
})(JSON.parse(localStorage.getItem("products")));
// Check if there's item in localstorage
let addedItem = [];
(function cartMenuData(){
  addedItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];
if (addedItem) {
  addedItem.map(
    (item) => (cartProductDivDom.innerHTML += `<p>${item.title}</p>`)
  );
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addedItem.length;
}
})();
// Add to cart
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = products.find((item) => item.id === id);
    cartProductDivDom.innerHTML += `<p>${choosenItem.title}</p>`;
    addedItem = [...addedItem, choosenItem];
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
    let cartProductItems = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
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
function saveItemData(id){
  localStorage.setItem("productId",id)
  window.location = "cartdetails.html"
}
// search function 
let inputSearch = document.querySelector("#search");
inputSearch.addEventListener("keyup", function(e){
  if(e.keyCode === 13){
    search(e.target.value, JSON.parse(localStorage.getItem("products")))
  }
  if(e.target.value.trim() === "")
  getProductsUi(JSON.parse(localStorage.getItem("products")))
})
function search(title,myArray){
  let arr = myArray.filter( item => item.title === title)
  getProductsUi(arr);
}
// search("headphone item",JSON.parse(localStorage.getItem("products")))
