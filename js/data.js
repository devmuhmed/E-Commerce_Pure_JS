// Define Products
let products = [
    {
      id: 1,
      title: "headphone item",
      size: "large",
      imageUrl: "img/headphone.jpeg",
      qty: 1
    },
    {
      id: 2,
      title: "glasses item",
      size: "large",
      imageUrl: "img/glasses.jpg",
      qty: 1
    },
    {
      id: 3,
      title: "laptop item",
      size: "large",
      imageUrl: "img/laptop.jpg",
      qty: 1
    },
    {
      id: 4,
      title: "watch item",
      size: "large",
      imageUrl: "img/watch.jpeg",
      qty: 1
    },
  ];
  localStorage.setItem('products',JSON.stringify(products))
