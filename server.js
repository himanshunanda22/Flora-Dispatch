const express = require("express");
const mysql = require("mysql2/promise");
const fs = require("fs").promises;

const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Himanshu22@",
  database: "flora",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(express.json());

// Your existing authentication route
app.post("/api/authenticate", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Fetch user from the database
    const [user] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (user.length > 0) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/authenticate", async (req, res) => {
  try {
    const { username, password } = req.query;

    // Fetch user from the database
    const [user] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (user.length > 0) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to handle retrieving cart items from the products table
app.get("/api/getCartItems", async (req, res) => {
  try {
    // Fetch all cart items from the database
    const [cartItems] = await pool.query("SELECT * FROM products");

    res.status(200).json({ cartItems });
  } catch (error) {
    console.error("Error retrieving cart items from the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to handle inserting cart items into the products table
app.post("/api/insertCartItems", async (req, res) => {
  try {
    const { productNames, prices, quantities, finalPrice } = req.body;

    // Iterate through the cart items and insert into the database
    for (let i = 0; i < productNames.length; i++) {
      const productName = productNames[i];
      const price = prices[i];
      const quantity = quantities[i];

      const result = await pool.query(
        "INSERT INTO products (product_name, price, quantity) VALUES (?, ?, ?)",
        [productName, price, quantity, finalPrice]
      );

      console.log(
        `Inserted cart item: ${productName}, Price: ${price}, Quantity: ${quantity}`
      );
    }

    res.status(200).send("Cart items inserted into the database successfully");
  } catch (error) {
    console.error("Error inserting cart items into the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Route to handle GET requests for /api/insertCartItems (respond with 405 Method Not Allowed)
app.get("/api/insertCartItems", (req, res) => {
  res
    .status(405)
    .send("GET method not allowed. Use POST method to insert cart items.");
});

app.get("/api/products", async (req, res) => {
  try {
    // Fetch products from the database
    const [plants, tools, fertilizers] = await Promise.all([
      fetchProducts("plants"),
      fetchProducts("tools"),
      fetchProducts("fertilizer"),
    ]);

    res.json({ plants, tools, fertilizers });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to fetch products from the database
async function fetchProducts(tableName) {
  const [rows] = await pool.query(`SELECT * FROM ${tableName}`);
  return rows;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post("/api/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if the username or email already exists
    const [existingUsers] = await pool.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );

    if (existingUsers.length > 0) {
      return res.json({
        success: false,
        message:
          "Username or email already exists. Please choose a different one.",
      });
    }

    // Add the new user to the database
    const result = await pool.query(
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
      [username, password, email]
    );

    // Log the result if needed
    console.log("User registered successfully. Result:", result);

    // Send a success response
    res.json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
