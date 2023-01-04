let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find((item) => item.id == productId);
console.log(productDetails);
itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="">
<h2>${productDetails.title}</h2>
<p> ${productDetails.desc}</p>
<span>Size : ${productDetails.size}</span><br>
<span>Quantity : ${productDetails.qty}</span>
`;
