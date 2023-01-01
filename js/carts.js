let productDom = document.querySelector(".content-products");
let noProductsDom = document.querySelector(".noproducts");
function drawCartProductsUi(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) 
    noProductsDom.innerHTML = "<h1>there's no item</h1>";
    noProductsDom.style.textAlign = "center";
  
  let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
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
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">
                  Remove To Cart
                </button>
              </div>
            </div>
          `;
  });
  productDom.innerHTML = productsUi;
}
drawCartProductsUi();
function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawCartProductsUi(filteredItems);
  }
}
