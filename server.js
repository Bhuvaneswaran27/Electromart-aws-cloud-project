const express = require("express");

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const uploadRoutes = require("./routes/upload");
const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to ElectroMart - CI/CD Working");
});

const PORT = 3000;

app.listen(PORT,"0.0.0.0", () => {
    console.log(`ElectroMart Server Running on Port ${PORT}`);
});
