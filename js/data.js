// Define Products
let products = [
    {
      id: 1,
      title: "headphone item",
      size: "large",
      imageUrl: "img/headphone.jpeg",
    },
    {
      id: 2,
      title: "glasses item",
      size: "large",
      imageUrl: "img/glasses.jpg",
    },
    {
      id: 3,
      title: "laptop item",
      size: "large",
      imageUrl: "img/laptop.jpg",
    },
    {
      id: 4,
      title: "watch item",
      size: "large",
      imageUrl: "img/watch.jpeg",
    },
  ];
  localStorage.setItem('products',JSON.stringify(products))
