let productName = document.querySelector("#product-name");
let productDesc = document.querySelector("#product-desc");
let productSize = document.querySelector("#product-size");
let inputFile = document.querySelector("#upload-image");
let createForm = document.querySelector("#create-form");
let productBtn = document.querySelector("#create-product-btn");
let productSizeValue;
let productImage;
// Events
productSize.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);
// funnction
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function createProductFun(e) {
  e.preventDefault();
  let allProducts =
    JSON.parse(localStorage.getItem("products")) || productsLocalStorage;
  let nameValue = productName.value;
  let descValue = productDesc.value;
  if (nameValue && descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      title: nameValue,
      desc: descValue,
      size: productSizeValue,
      imageUrl: productImage,
      qty: 1,
      isMe:"Y"
    };
    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));
    productName.value = "";
    productDesc.value = "";
    productSize.value = "";
    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("enter data");
  }
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
