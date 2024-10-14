const storeName = "Paws & Claws";
const storeType = "Pet Store";

const products = ["Dog Food", "Cat Litter", "Bird Seed", "Fish Tank", "Hamster Cage"];
const prices = [29.99, 15.49, 12.99, 89.99, 34.5];

const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

// Reusable logging function
const logMessage = (message) => {
  console.log(message);
};

// Function to display store info
const displayStoreInfo = (name, type) => {
  logMessage(`Welcome to ${name}! We are the best ${type} in town.`);
};

// Function to display products and prices
const displayInventory = (products, prices) => {
  logMessage("Here are the products we currently offer:");
  products.forEach((product, index) => {
    logMessage(`${product}: $${prices[index]}`);
  });
};

// Function to add a product
const addProduct = (products, prices, newProduct, newPrice) => {
  products.push(newProduct);
  prices.push(newPrice);
  logMessage(`We've added a new product! ${newProduct} for $${newPrice}`);
  displayInventory(products, prices);
};

// Function to remove the last product
const removeLastProduct = (products, prices) => {
  const removedProduct = products.pop();
  const removedPrice = prices.pop();
  logMessage(`Unfortunately, ${removedProduct} is out of stock.`);
  displayInventory(products, prices);
};

// Function to display featured products (sorted alphabetically)
const displayFeaturedProducts = (products, numberOfFeatured) => {
  const sortedProducts = [...products].sort(); // Sorting alphabetically
  const featuredProducts = [];

  sortedProducts.forEach((product, index) => {
    if (index < numberOfFeatured) {
      featuredProducts.push(product);
    }
  });

  logMessage("This week, our featured products are:");
  featuredProducts.forEach((product) => logMessage(product));
};

// Function to sort products and prices by price (low to high) without using objects
const sortInventoryByPrice = (products, prices) => {
  // Generate an array of [index, price] pairs and sort them by price
  const sortedPairs = prices
    .map((price, index) => [index, price]) // Create [index, price] pairs
    .sort((a, b) => a[1] - b[1]); // Sort pairs by price

  logMessage("Products sorted by price (low to high):");
  // Use the sorted pairs to display the products and prices
  sortedPairs.forEach(([i]) => {
    logMessage(`${products[i]}: $${prices[i]}`);
  });
};


// Initial display
displayStoreInfo(storeName, storeType);
displayInventory(products, prices);

// Add new product
addProduct(products, prices, "Pet Shampoo", 12.0);

// Remove the last product
removeLastProduct(products, prices);

// Display featured products
displayFeaturedProducts(products, 3);

// Sort and display products by price
sortInventoryByPrice(products, prices);

// Closing logs
logMessage(`Thanks for visiting ${storeName}`);
logMessage(`Here are our store hours for reference: ${storeHours}`);
