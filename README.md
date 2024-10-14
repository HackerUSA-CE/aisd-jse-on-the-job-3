# JavaScript Essentials On the Job 3

## Project Description 📄
Welcome back to your **JavaScript Essentials** "On the Job" project! This week, we’ll take what you’ve already built and refactor it using **functions** for better code organization and reusability. In this assignment, we will also be using **modern arrow functions** to make the code more concise and aligned with best practices in modern JavaScript. Additionally, you’ll work with a new set of array methods, including **push**, **pop**, **map**, **forEach**, and **sort**, to dynamically manage the store’s products and prices.

Functions will help you reduce repetition in your code and make it easier to update in the future. By the end of this assignment, you’ll have cleaner and more maintainable code that achieves the same functionality as before, but with added efficiency.

### In this project, you will:
  - **Refactor your code using arrow functions** to manage store details, inventory, and pricing.
  - **Add new items** to the store’s products and prices using the `push` method.
  - **Remove items** from the store’s inventory with the `pop` method.
  - **Sort your products** alphabetically and by price using the `sort` method.
  - **Display products and prices dynamically** using the `map()` and `forEach()` methods.

By the end of this assignment, you’ll have hands-on experience refactoring code and dynamically managing a store's inventory system. You’ll also gain insight into how to organize and structure your code more effectively using arrow functions.

This refactoring ensures that your code is aligned with modern JavaScript practices, making it more readable and maintainable.
## Project Scenario 📄

Your code has been reviewed by a senior developer, and they were impressed with your progress! However, they’ve suggested a more efficient way to handle your logic using **functions**. Functions will help you organize your code better, reduce redundancy, and make it easier to update in the future.

### Why Refactor with Functions?

The senior developer pointed out that:
- Your code repeats certain actions, like logging product and price updates.
- Adding or removing products could be handled by reusable blocks of code.
- Organizing logic into functions improves readability and makes future changes easier.

By refactoring your code, you’ll be able to manage product updates, inventory changes, and client messages more dynamically. Your goal is to refactor the code so it’s easier to maintain and scalable as your store grows.

---

### Refactor Requirements:
You need to convert your existing code to use functions that:
1. **Display store information** like name, type, and hours.
2. **Manage products and prices** (adding, removing, and displaying inventory).
3. **Highlight featured products** for weekly promotions.
4. **Update the store message** dynamically when products are added or removed.

##

 ## Resources 📦

Free stock images and videos can be downloaded at https://www.pexels.com.

Utilize documentation such as [W3 Schools](https://www.w3schools.com/) and [MDN](https://developer.mozilla.org/en-US/) for all things related to HTML and CSS.

Use AI tools such as ChatGPT and Claude to help you learn. As you integrate AI tools into your learning process, it's essential to use them responsibly. AI can be a powerful resource to assist you, but it’s important to ensure that you truly understand and engage with the content it generates. This will not only enhance your learning experience but also help you develop critical thinking and problem-solving skills.

## Checkpoint 3 ✋

## Project Structure from Last Week 🏗️
Your folder name may vary based on your selection of the eCommerce store type.

```plaintext
PawsClawsPetStore/
│
├── index.js
├── README.md
```
##

## Deliverables ✅

# 1. **Locate and Navigate to Your Project Folder**

  You should locate the folder where you saved last week’s project and continue working from there. No need to start a new project from scratch.
  
  - [ ] Find and navigate to the folder from last week's project, for example: `PawsClawsPetStore` or the folder you named based on your client.
  
  - [ ] `cd` into that folder from the terminal to access your project code.

  - [ ] Inside this folder, continue working in your existing `index.js` file, which you set up last week.

  ---

  ## 2. **Starting from Last Week's Data**
The goal here is to, once again, remove all code below the variable declarations, including the `console.log()` statements, so we can focus on refactoring the structure of the data for more efficient use in the next steps. This will allow us to prepare the code for better organization and functionality during the refactoring process.

### Last Week (OTJ-2)

- [ ] Review your `index.js` variable code from the last OTJ assignment.

- [ ] Remove the all the code statements after the variables as shown below.

**Remember, your code may vary. Below is an example from last week's OTJ-1 assignment.**

```javascript
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

```

This will give us a **clean starting** point to handle the refactoring process more effectively. By stripping away the previous logic, we can focus on rebuilding the functionality with **functions** and **array methods** to achieve the same outcome with more modular, maintainable code.

---

# Step 3: Writing Your First Functions
In this step, we will write our first reusable function to handle console logging. By creating a single function to manage our `console.log()` statements, we can improve code organization and make it easier to update or extend the functionality in the future. 

### Goal:

The goal of this step is to create a function called `logMessage()` that takes a message as a parameter and logs it to the console. This will allow you to use this function throughout your code whenever you need to print messages, ensuring consistency and readability.

- [ ] Write reusable functions to centralize all logging in your application, as shown in the code below.


```javascript
// Reusable logging function
const logMessage = (message) => {
  console.log(message);
};

// Function to display store info
const displayStoreInfo = (name, type) => {
  logMessage(`Welcome to ${name}! We are the best ${type} in town.`);
};
```

### Explanation:

  - **`logMessage`**: This is a reusable function that accepts a single argument, `message`. This parameter is meant to hold the string or value you want to print to the console. 
  - **Flexibility**: Instead of having multiple `console.log()` statements scattered throughout your code, you can now rely on this one function to log messages. This will make your code cleaner and more maintainable, as you only need to write `console.log()` once inside the function.
  - **Extensibility**: With this structure, you can easily add extra functionality to your logging. For example, you could prepend timestamps, format the output, or send logs to a different system. Because all logs pass through this function, making a change here affects all your logs globally.
  - **Consistency**: This function ensures that all log outputs follow the same structure. This is especially helpful in larger projects where consistency is key to maintaining clarity.

By centralizing your logging logic into a single function, you also make it easier to maintain and modify in the future. If you want to change how logs are displayed or enhance the logging process, you only need to modify the `logMessage` function instead of updating each `console.log()` statement individually.

---


# Step 4: Displaying Products and Prices

In this step, you will create a reusable function to display the store’s products and their corresponding prices. We will use the arrow function syntax to make the function modern and concise, and utilize the `forEach` method to iterate over the products and prices.

### Goal:
The goal is to write a function called `displayInventory()` that accepts two parameters: `products` and `prices`. This function will loop through the products and their prices using the `forEach` method, and log them to the console using the reusable `logMessage()` function.

- [ ] Write a function called `displayInventory()` that uses `forEach` to iterate over the `products` and `prices` arrays, and logs the product name and price to the console.

```javascript
// Function to display products and prices
const displayInventory = (products, prices) => {
  logMessage("Here are the products we currently offer:");
  products.forEach((product, index) => {
    logMessage(`${product}: $ ${prices[index]}`);
  });
};
```

### Explanation:
  - **Parameters**: The function takes two arguments, `products` and `prices`. These represent arrays of the store's products and their corresponding prices.
  - **forEach Method**: The function uses the `forEach` method to iterate over the `products` array. For each product, it logs both the product name and its corresponding price, using the same index to access the price from the `prices` array.
  - **Dynamic Output**: This setup ensures that both the product and price are displayed dynamically in a clear format.
  - **Usage of `logMessage()`**: This function calls `logMessage()` instead of directly using `console.log()` to maintain consistency in logging throughout the application.

By using this function, you can easily display the current store inventory and prices in a structured and dynamic way, leveraging the power of the `forEach` method.

---


# Step 5: Adding a New Product

In this step, you will create a function that allows you to add new products to the store’s inventory. The function will use the arrow function syntax and the `push` method to add both a new product and its price to the respective arrays. After adding the new product, the function will call `displayInventory()` to show the updated inventory. In this step, we will also call a function within another function to handle this task efficiently.

### Goal:
The goal is to write a function called `addProduct()` that takes four parameters: `products`, `prices`, `newProduct`, and `newPrice`. It will use the `push` method to add the new product and price to the existing arrays, then log a confirmation message, and call the previously defined `displayInventory()` function to display the updated product list.

- [ ] Write a function called `addProduct()` that adds a new product and price to the `products` and `prices` arrays using the `push` method, then calls `displayInventory()` to show the updated inventory.

```javascript
// Function to add a product
const addProduct = (products, prices, newProduct, newPrice) => {
  products.push(newProduct);
  prices.push(newPrice);
  logMessage(`We've added a new product! ${newProduct} for $${newPrice}`);
  displayInventory(products, prices);
};
```

### Explanation:
  - **Parameters**: The function takes four arguments: `products`, `prices`, `newProduct`, and `newPrice`. These allow the function to update both the list of products and their corresponding prices.
  - **push Method**: The function uses the `push` method to add the `newProduct` to the `products` array and the `newPrice` to the `prices` array.
  - **Logging**: After adding the new product and price, the function logs a message confirming the addition using the `logMessage()` function.
  - **Calling a Function within a Function**: The function calls `displayInventory()` at the end to show the updated list of products and prices. This demonstrates how one function can call another to manage different tasks efficiently.

By using this function, you can dynamically add new items to your store’s inventory and immediately see the updated results.

---


# Step 6: Removing the Last Product

In this step, you will create a function to remove the last product and its price from the store’s inventory. The function will use the arrow function syntax and the `pop` method to handle the removal. After removing the product, the function will call `displayInventory()` to show the updated inventory. This step will also demonstrate calling a function within a function for better task management. Additionally, we will reuse the previously defined `logMessage()` function to maintain consistent logging throughout the application.

### Goal:
The goal is to write a function called `removeLastProduct()` that takes two parameters: `products` and `prices`. It will use the `pop` method to remove the last product and price from the respective arrays, log a message indicating the product was removed, and then call `displayInventory()` to display the updated product list.

- [ ] Write a function called `removeLastProduct()` that removes the last product and price using the `pop` method, calls `logMessage()` to log the removal, and then calls `displayInventory()` to show the updated inventory.

```javascript
// Function to remove the last product
const removeLastProduct = (products, prices) => {
  const removedProduct = products.pop();
  const removedPrice = prices.pop();
  logMessage(`Unfortunately, ${removedProduct} is out of stock.`);
  displayInventory(products, prices);
};
```

### Explanation:
  - **Parameters**: The function takes two arguments: `products` and `prices`, which represent the store's product list and corresponding prices.
  - **pop Method**: The function uses the `pop` method to remove the last product from the `products` array and its corresponding price from the `prices` array.
  - **Reusing `logMessage()`**: The function calls `logMessage()` to log the removal of the product, ensuring consistent logging behavior across the application.
  - **Calling a Function within a Function**: The function calls `displayInventory()` after removing the product to show the updated list of products and prices, demonstrating how tasks are managed through function calls.

By using this function, you can easily remove the last item from your store’s inventory and immediately see the updated results, while maintaining consistent logging and display behavior.

---


# Step 7: Displaying Featured Products (Sorted Alphabetically)

In this step, you will create a function to display a specified number of featured products from the store’s inventory, sorted alphabetically. This function will introduce the idea of using a **function within a function**, as it will call both the `logMessage()` function and use the `forEach()` method. These nested function calls will help manage the sorting, selection, and logging of the featured products.

### Goal:
The goal is to write a function called `displayFeaturedProducts()` that takes two parameters: `products` and `numberOfFeatured`. This function will sort the products alphabetically using the `sort()` method, select the desired number of featured products, and log the results using `forEach()`.

- [ ] Write a function called `displayFeaturedProducts()` that sorts products alphabetically using `sort()`, selects the top featured products, and logs the results using `forEach()`.

```javascript
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
```

### Explanation

- **Parameters**: The function takes two arguments: `products` (an array of all store products) and `numberOfFeatured` (the number of products to feature). This allows the function to dynamically handle any number of products.
  
- **Sorting Products**: The function uses the `sort()` method to sort the `products` array alphabetically. The `spread operator` (`...products`) is used to create a new array that does not modify the original `products` array.
  
- **What is the `...` (Spread Operator)?**: The spread operator (`...`) is used to "spread out" the elements of an array into a new array. In this case, `...products` takes all the elements of the `products` array and puts them into a new array (`sortedProducts`). This ensures the original `products` array is not modified when sorting.
  
- **Selecting Featured Products**: The function then uses the `forEach()` method to loop through the sorted products and push the top `numberOfFeatured` products into the `featuredProducts` array. Only the number of products specified by `numberOfFeatured` are selected.
  
- **Reusing `logMessage()`**: Once the featured products are selected, the function calls `logMessage()` to announce the featured products, and then it loops through the `featuredProducts` array using `forEach()` to log each product. This ensures that the message and products are displayed consistently across the application.

  ### Nested Function Calls
    - **Calling `logMessage()` Within a Loop**: You are calling `logMessage()` multiple times within the same function, first to log the announcement and then to log each individual product. This demonstrates how functions can be called inside other functions or loops, making the code modular and reusable.

By understanding how to call functions within functions, you’ll see how tasks like sorting, selecting, and logging can be managed in an organized and efficient way.

---


# Step 8: Sorting Products and Prices by Price (Low to High) with `map`

In this step, you will implement an optimized way to sort products based on their prices without using objects. This version ensures the relationship between products and prices remains intact by relying on **index-price pairs**. The code is efficient, easy to understand, and avoids unnecessary intermediate arrays.

---

## Goal:
The goal is to write a function called `sortInventoryByPrice()` that takes two parameters: `products` and `prices`. This function will use `map()` to create index-price pairs, sort them based on the prices in ascending order, and then display the products with their corresponding prices.

- [ ] Write a function called `sortInventoryByPrice()` that sorts products and prices efficiently without using objects.

---

### Code Implementation:

```javascript
// Function to sort products and prices by price (low to high)
const sortInventoryByPrice = (products, prices) => {
  // Generate an array of [index, price] pairs and sort by price
  const sortedPairs = prices
    .map((price, i) => [i, price]) // Create pairs of [index, price]
    .sort((a, b) => a[1] - b[1]); // Sort pairs by price

  logMessage("Products sorted by price (low to high):");
  sortedPairs.forEach(([i]) => {
    logMessage(`${products[i]}: $${prices[i]}`);
  });
};
```

---

## Explanation

### Parameters:
- **`products`**: An array of product names.
- **`prices`**: An array of prices corresponding to each product by index.

---

### Step-by-Step Explanation:

1. **Generating Index-Price Pairs with `map()`:**
   - The `map()` method transforms the `prices` array into an array of **[index, price] pairs**.
     ```javascript
     prices.map((price, i) => [i, price]);
     ```
   - For example, if `prices = [10, 5, 15]`, the generated pairs will be:
     ```javascript
     [[0, 10], [1, 5], [2, 15]]
     ```
   - Each pair contains:
     - **The index** of the product/price in the original array.
     - **The price** associated with that product.

2. **Sorting the Pairs by Price:**
   - We use `sort()` on the array of pairs. The `sort()` function compares the **second element** (the price) in each pair to order them in ascending price:
     ```javascript
     .sort((a, b) => a[1] - b[1]);
     ```
   - After sorting, the pairs might look like:
     ```javascript
     [[1, 5], [0, 10], [2, 15]];
     ```
   - This keeps the original product-price relationship intact through the index.

3. **Displaying the Sorted Products with `forEach()`:**
   - Once sorted, we use `forEach()` to loop through the sorted pairs:
     ```javascript
     sortedPairs.forEach(([i]) => {
       logMessage(`${products[i]}: $${prices[i]}`);
     });
     ```
   - **Destructuring** each pair as `[i]` gives us access to the index. We use this index to retrieve the corresponding product and price from the original arrays.

---

### Why This Works

- **Indices Maintain Relationships:**  
  By pairing prices with their indices, we avoid mixing data and keep the relationship between products and prices intact.

- **Efficient Sorting:**  
  Sorting the array of pairs ensures that we only traverse the data once, making it more efficient than creating multiple arrays.

- **Readable and Simple Code:**  
  The code avoids unnecessary complexity, making it easy to follow and understand. The use of **array destructuring** further improves readability.

---

### Example Output:

Given the following inputs:

```javascript
const products = ["Product A", "Product B", "Product C"];
const prices = [10, 5, 15];
```

The output will be:

```
Products sorted by price (low to high):
Product B: $5
Product A: $10
Product C: $15
```

---

### Key Points to Remember:
1. **`map()` is used to generate index-price pairs:**  
   This helps maintain the relationship between products and prices during sorting.
   
2. **`sort()` compares the prices directly:**  
   We sort by comparing the second element of each pair (the price).

3. **Destructuring in `forEach()` ensures clarity:**  
   Extracting the index directly from each pair helps us retrieve the matching product and price from the original arrays.

---


# Step 9: Calling the Functions

In this step, we will bring together all the functions created so far. Each function will be called in sequence to perform specific tasks, such as displaying store info, adding or removing products, displaying featured items, and sorting the inventory by price. Each function call is explained briefly to ensure clarity on what is happening and what parameters are being passed.

### Goal:
The goal of this step is to call each function in the correct order and pass the necessary parameters, ensuring the program runs as expected from start to finish.

---

### Steps:

#### 9a: Initial Display of Store Information
- [ ] Call the `displayStoreInfo()` function to show the store's name and type.
  
```javascript
displayStoreInfo(storeName, storeType);
```

**Explanation:** This step calls the `displayStoreInfo()` function and passes two parameters: `storeName` and `storeType`. It prints a welcoming message for the store.

---

#### 9b: Initial Display of Products and Prices
- [ ] Call the `displayInventory()` function to show the current products and their prices in the store.

```javascript
displayInventory(products, prices);
```

**Explanation:** The `displayInventory()` function is called, which takes `products` and `prices` arrays as parameters and prints the available products along with their prices.

---

#### 9c: Adding a New Product
- [ ] Call the `addProduct()` function to add a new product (Pet Shampoo) to the store's inventory.

```javascript
addProduct(products, prices, "Pet Shampoo", 12.0);
```

**Explanation:**  The `addProduct()` function is called with the `products` and `prices` arrays, and it adds a new product ("Pet Shampoo") with a price of $12.00 to the arrays. The updated inventory is displayed afterward.

---

#### 9d: Removing the Last Product
- [ ] Call the `removeLastProduct()` function to remove the last product from the store's inventory.

```javascript
removeLastProduct(products, prices);
```

**Explanation:**  The `removeLastProduct()` function removes the last product from the `products` and `prices` arrays, simulating the product going out of stock.

---

#### 9e: Displaying Featured Products
- [ ] Call the `displayFeaturedProducts()` function to show a selection of featured products.

```javascript
displayFeaturedProducts(products, 3);
```

**Explanation:**  The `displayFeaturedProducts()` function displays the first 3 products in the list, which are sorted alphabetically before being displayed.

---

#### 9f: Sorting and Displaying Products by Price
- [ ] Call the `sortInventoryByPrice()` function to sort the products and prices in ascending order and display them.

```javascript
sortInventoryByPrice(products, prices);
```

**Explanation:**  The `sortInventoryByPrice()` function combines the products and prices into a single array of objects, sorts them by price from lowest to highest, and displays the sorted inventory.

---

#### 9g: Closing Logs
- [ ] Use `logMessage()` to print a closing message thanking visitors and displaying the store hours.

```javascript
logMessage(`Thanks for visiting ${storeName}`);
logMessage(`Here are our store hours for reference: ${storeHours}`);
```

**Explanation:**  The `logMessage()` function is used to print a friendly closing message for the customers, along with the store hours.

---

### Summary:
In this step, you have called various functions in sequence to:
  - Display initial store information and inventory.
  -  Add and remove products from the inventory.
  -  Highlight featured products.
  - Sort and display the inventory by price.
  - Show a closing message.

Each function takes specific parameters, which have been explained above to clarify their purpose and usage.

---

# 10. **Running Your Code with Node.js and Generating the Final Message**

Now that you've successfully built the data structure for your store's inventory and customer message, it's time to run your code using Node.js and see the output.

### Step Instructions:

- [ ] Use the terminal to navigate to your project folder.
- [ ] Run the following command to execute your `index.js` file:

```bash
node index.js
```

### Expected Output:
When you run the `index.js` file, you should see output similar to the example below, which reflects the products, prices, and store hours you've entered. While the exact output will vary depending on your specific data, it will showcase the functionality of adding and removing products, displaying featured items, sorting the inventory by price, and logging a closing message.

```bash
Welcome to Paws & Claws! We are the best Pet Store in town.
Here are the products we currently offer:
Dog Food: $29.99
Cat Litter: $15.49
Bird Seed: $12.99
Fish Tank: $89.99
Hamster Cage: $34.50
We've added a new product! Pet Shampoo for $12
Dog Food: $29.99
Cat Litter: $15.49
Bird Seed: $12.99
Fish Tank: $89.99
Hamster Cage: $34.50
Pet Shampoo: $12.00
Unfortunately, Pet Shampoo is out of stock.
Dog Food: $29.99
Cat Litter: $15.49
Bird Seed: $12.99
Fish Tank: $89.99
Hamster Cage: $34.50
This week, our featured products are:
Bird Seed
Cat Litter
Dog Food
Products sorted by price (low to high):
Bird Seed: $12.99
Cat Litter: $15.49
Hamster Cage: $34.50
Dog Food: $29.99
Fish Tank: $89.99
Thanks for visiting Paws & Claws!
Here are our store hours for reference: Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed

```

### Explanation:

  - **Dynamic Data Structure**: You've created arrays to store the products and their prices. These arrays are updated when products are added or removed, ensuring that the store's inventory remains accurate and up-to-date.
  - **Array Manipulation**: The array methods (`push`, `pop`, `sort`, `forEach`) were used to dynamically manage the products and prices, such as adding a new product, removing the last item, displaying featured products, and sorting by price.
  - **Generating a Customer-Facing Message**: The output reflects how these changes to the store’s inventory are logged and presented to customers. For instance, the store’s products, prices, and featured items are clearly listed, followed by a closing message with the store hours.
  - **Real-World Application**: This exercise simulates how dynamic systems in eCommerce work. Inventory is constantly updated, and messages are generated to reflect the current state of the store's products.

By running this code and reviewing the output, you've successfully simulated an inventory management system with customer-facing updates!


## 11. **Pushing Your Code to GitHub**

In this section, you will save your updated project to the **existing GitHub repository** you created last week. This allows you to continue storing your code online, collaborate with others, and keep track of changes over time.

- [ ] Add all files and commit your work:

```bash
git add .
git commit -m "Your commit message here"
```

- [ ] Push your work to the existing GitHub repository:

```bash
git push origin main
```

This will push your changes to the repository you set up last week, without needing to reinitialize or create a new repository.

---

# Conclusion 📄

In this assignment, you successfully built a dynamic system for managing a store’s inventory using JavaScript arrays and array methods. 
You’ve learned how to:
  - Add new products
  - Remove out-of-stock items
  - Highlight featured products
  - Prepare a customer message complete with store hours

These skills are essential for managing data in real-world applications, particularly in eCommerce environments where inventory and messaging must be updated frequently.

As you continue to progress, you’ll build on this foundation to create more complex systems, enhancing your ability to manage and present data dynamically.

---

## Grading Criteria 💯

| Criteria                                   | Exemplary Performance (Full Marks) | Proficient Performance (Partial Marks) | Developing Performance (Half Marks) | Needs Improvement (No Marks) |
|--------------------------------------------|------------------------------------|----------------------------------------|-------------------------------------|------------------------------|
| **Technical Acceptance Criteria (60 pts)** | 54-60                              | 42-53                                  | 30-41                               | 0-29                         |
| **Workflow Appropriacy (15 pts)**          | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **Documentation (15 pts)**                 | 14-15                              | 11-13                                  | 8-10                                | 0-7                          |
| **User Experience (10 pts)**               | 9-10                               | 7-8                                    | 5-6                                 | 0-4                          |

## ### Solution codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:**  This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-on-the-job-3/tree/solution) (link not shown).


---
© All rights reserved to ThriveDX# aisd-jse-on-the-job-3
