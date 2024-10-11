const storeName = "Paws & Claws";
const storeType = "Pet Store";

const product1 = "Dog Food";
const product2 = "Cat Litter";
const product3 = "Bird Seed";
const product4 = "Fish Tank";
const product5 = "Hamster Cage";

const price1 = 29.99;
const price2 = 15.49;
const price3 = 12.99;
const price4 = 89.99;
const price5 = 34.5;

const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

console.log(`Welcome to ${storeName}! We are the best ${storeType} in town.`);
console.log("Here are the products we currently offer:");

// Build arrays from the product and price variables
let products = [product1, product2, product3, product4, product5];
let prices = [price1, price2, price3, price4, price5];

// Display the initial product list
console.log("Products:", products);
console.log("Prices:", prices);

// Example of push: Add a new product to the store
products.push("Pet Shampoo");
prices.push(12.0);
console.log("We've added a new product! Products:", products);
console.log("Updated Prices:", prices);

// Example of pop: Remove the last product from the store
products.pop();
prices.pop();
console.log("Unfortunately, Pet Shampoo is out of stock. Products:", products);
console.log("Updated Prices:", prices);

// Example of slice: Show a selection of featured products
let featuredProducts = products.slice(0, 3);
console.log("This week, our featured products are:", featuredProducts);

// Example of concat: Add new products from a shipment to the store's inventory
let newProducts = ["Cat Toy", "Dog Leash"];
let newPrices = [9.99, 14.99];
products = products.concat(newProducts);
prices = prices.concat(newPrices);

console.log("We have new arrivals! Products:", products);
console.log("Updated Prices:", prices);

console.log(`Thanks for visiting ${storeName}`);
console.log(`Here are our store hours for reference: ${storeHours}`);
