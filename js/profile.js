let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let products =
  JSON.parse(localStorage.getItem("products")) || productsLocalStorage;
let myProducts = products.filter((i) => i.isMe === "Y");

let userNameDom = document.getElementById("username");
let emailDom = document.getElementById("email");
let productsLength = document.querySelector("#productsLength span");
userNameDom.innerHTML = get_user;
emailDom.innerHTML = get_email;
if (myProducts.length != 0) {
  productsLength.innerHTML = myProducts.length;
} else {
  productsLength.remove();
}
