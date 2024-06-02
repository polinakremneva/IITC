const products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "watch", price: 200 },
];

const names = products.map((product) => product.name);
console.log(names);

const prices = products.filter((product) => product.price > 500);
console.log(...prices);

const totalCost = products.reduce((total, product) => total + product.price, 0);
console.log(totalCost);

