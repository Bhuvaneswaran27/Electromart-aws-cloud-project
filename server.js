const express = require("express");

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to ElectroMart");
});

const PORT = 3000;

app.listen(PORT,"0.0.0.0", () => {
    console.log(`ElectroMart Server Running on Port ${PORT}`);
});
