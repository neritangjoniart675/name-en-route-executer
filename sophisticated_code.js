/* sophisticated_code.js */

// This code is a demonstration of a complex and feature-rich JavaScript web application.
// It simulates a customizable e-commerce platform with various functionalities.

// Define global variables
let products = [];
let shoppingCart = [];
let user = null;

// Define Product class
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  addToCart() {
    if (user) {
      shoppingCart.push(this);
      console.log(`${this.name} added to cart.`);
    } else {
      console.log("Please log in to add products to the cart.");
    }
  }

  toString() {
    return `${this.name}: $${this.price} - ${this.description}`;
  }
}

// Create sample products
const product1 = new Product("Smartphone", 500, "A high-quality smartphone.");
const product2 = new Product("Laptop", 1000, "A powerful laptop for professional use.");
const product3 = new Product("Headphones", 200, "Wireless headphones with noise cancellation.");

// Initialize the products array
products.push(product1, product2, product3);

// Define User class
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    user = this;
    console.log(`Logged in as ${this.username}.`);
  }

  logout() {
    user = null;
    console.log("Logged out successfully.");
  }
}

// Create sample users
const user1 = new User("JohnDoe", "john.doe@example.com");
const user2 = new User("JaneSmith", "jane.smith@example.com");

// Main application logic
user1.login();

product1.addToCart();
product2.addToCart();
product3.addToCart();

console.log("Current shopping cart:");
for (let product of shoppingCart) {
  console.log(product.toString());
}

user1.logout();

// You can continue adding more functionalities to the application...

// ...

// End of sophisticated_code.js