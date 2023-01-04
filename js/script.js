//setup variable
let productDom = document.querySelector(".content-products");
let products = productsLocalStorage;
// display product
let getProductsUi;
(getProductsUi = function (products = []) {
  let productsUi = products.map((item) => {
    return `
        <div class="product-item d-flex" style = "border:${item.isMe === "Y" ? "2px solid green":""}">
            <img
            src="${item.imageUrl}"
            alt="image"
            class="product-item-img"
            />
            <div class="product-item-desc">
              <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
              <p> ${item.desc}</p>
              <span>Size: ${item.size}</span>
              ${item.isMe === "Y" && "<button class='edit-product' onclick='editProduct("+item.id+")'> Edit </button>"}
            </div>
            <div class="product-item-action d-flex"> 
              <button class="add-to-cart" onclick="addToCart(${item.id})">
                Add To Cart
              </button>
              <i class="far fa-heart" style ="color: ${
                item.liked == true ? "red" : ""
              }" onclick="addToFavorite(${item.id})"></i>
            </div>
          </div>
        `;
  });
  productDom.innerHTML = productsUi.join("");
})(JSON.parse(localStorage.getItem("products")) || products);
// Add to cart
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);
    let isProductInCart = addedItem.some((i) => i.id === product.id);
    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }

    // UI
    cartProductDivDom.innerHTML = "";
    addedItem.forEach((item) => {
      cartProductDivDom.innerHTML += `<p>${item.title} <span class="item-qty">${item.qty}</span></p>`;
    });

    // Save Data
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
    
    // Add Counter of Items
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
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
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
  let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
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
    favoriteItems = [...favoriteItems, choosenItem];
    let uniqueProducts = getUniqueArr(favoriteItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === choosenItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    getProductsUi(products);
  } else {
    window.location = "login.html";
  }
}
// Filter Product By Size
let sizeFilter = document.getElementById('size-filter')
sizeFilter.addEventListener('change',getProductsFilteredBySize)
function getProductsFilteredBySize(e){
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || products;
  if (val === "all"){
    getProductsUi(products)
  }else {
    products = products.filter(i => i.size === val)
    getProductsUi(products)
  }
}
// Edit Product
function editProduct(id){
  localStorage.setItem("editProduct",id)
  window.location = "editProduct.html"
}
