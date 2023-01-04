let productDom = document.querySelector(".content-products");
let noProductsDom = document.querySelector(".noproducts");
let getProductsUi;
(getProductsUi = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts.length !== 0) {
    let productsUi = myProducts.map((item) => {
      return `
            <div class="d-flex" style = "border:${
                item.isMe === "Y" ? "2px solid green" : ""
                }">
                <img
                src="${item.imageUrl}"
                alt="image"
                class="product-item-img"
                />
                <div class="product-item-desc">
                <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
                <p> ${item.desc}</p>
                <span>Size: ${item.size}</span>
                <div class='d-flex'>
                <button class='edit-product' onclick='editProduct(${item.id})'> Edit </button>
                <button class='edit-product' onclick='deleteProduct(${item.id})'> Delete </button>
                <div>
                </div>
                </div>
                `;
    });
    productDom.innerHTML = productsUi.join("");
  }else{
    noProductsDom.innerHTML = "No Products"
  }
})(JSON.parse(localStorage.getItem("products")) || productsLocalStorage);
// Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id)
    window.location = "editProduct.html"
  }
// Delete Product
function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem('products')) || productsLocalStorage
    let myProducts = products.filter((item) => item.isMe === "Y");
    let filtered = myProducts.filter(i => i.id !== id)
    let clickItem = myProducts.find(i=> i.id === id)
    products = products.filter(i => i.id !== clickItem.id)
    localStorage.setItem("products",JSON.stringify(products))
    getProductsUi(filtered)
}

