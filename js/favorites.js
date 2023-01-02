let productDom = document.querySelector(".content-products");
let noProductsDom = document.querySelector(".noproducts");
function drawFavoritesProductsUi(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0) 
    noProductsDom.innerHTML = "<h1>there's no item</h1>";
    noProductsDom.style.textAlign = "center";
  
  let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
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
                <span>Quantity: ${item.qty}</span>
              </div>
              <div class="product-item-action d-flex"> 
                <button class="add-to-cart">
                  Remove From Favorites
                </button>
              </div>
            </div>
          `;
  });
  productDom.innerHTML = productsUi;
}
drawFavoritesProductsUi();
// function removeItemFromCart(id) {
//   let productsFavorite = localStorage.getItem("productsFavorite");
//   if (productsFavorite) {
//     let items = JSON.parse(productsFavorite);
//     let filteredItems = items.filter((item) => item.id !== id);
//     localStorage.setItem("productsFavorite", JSON.stringify(filteredItems));
//     drawFavoritesProductsUi(filteredItems);
//   }
// }
