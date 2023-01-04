let cartProductDivDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartProductMenu = document.querySelector(".carts-products");
shoppingCartIcon.addEventListener("click", openCartMenu);
// Check if there's item in localstorage
let addedItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];
if (addedItem) {
  addedItem.map((item) => {
    cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addedItem.length;
}
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
      cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
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
