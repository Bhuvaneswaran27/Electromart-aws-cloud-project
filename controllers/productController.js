const db = require("../db");

exports.getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }
        res.json(results);
    });
};
exports.addProduct = (req, res) => {
    const { name, category, price, stock } = req.body;

    const sql = "INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, category, price, stock], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({
            message: "Product added successfully",
            id: result.insertId
        });
    });
};
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, category, price, stock } = req.body;

    const sql = `
        UPDATE products
        SET name = ?, category = ?, price = ?, stock = ?
        WHERE id = ?
    `;

    db.query(sql, [name, category, price, stock, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: "Product updated successfully" });
    });
};exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM products WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({ message: "Product deleted successfully" });
        }
    );
};
