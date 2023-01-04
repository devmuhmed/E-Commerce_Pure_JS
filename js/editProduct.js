// variable
let products = JSON.parse(localStorage.getItem("products")) || productsLocalStorage
productId = JSON.parse(localStorage.getItem("editProduct"))
let getProduct = products.find(item => item.id === productId)
let productName = document.querySelector("#product-name");
let productDesc = document.querySelector("#product-desc");
let productSize = document.querySelector("#product-size");
let inputFile = document.querySelector("#upload-image");
let updateForm = document.querySelector("#update-form");
let productBtn = document.querySelector("#update-product-btn");
let productSizeValue;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSize.value = getProduct.size;
productImage = getProduct.imageUrl;

// // Events
productSize.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);
// // funnction
function getProductSizeValue(e) {
    productSizeValue = e.target.value;
}

function updateProductFun(e) {
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSize.value;
    getProduct.imageUrl = productImage;
    localStorage.setItem("products", JSON.stringify(products));
    setTimeout(() => {
        window.location = "index.html"
    },500)
}
// uploadImage
function uploadImage() {
  let file = this.files[0];
  console.log(file);
  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    alert("type not suppported");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("Image not exced 2mg");
    return;
  }
  getImageBase64(file);
  // productImage = URL.createObjectURL(file)
}

function getImageBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    productImage = reader.result;
  };
  reader.onerror = function () {
    alert("error !!");
  };
}

