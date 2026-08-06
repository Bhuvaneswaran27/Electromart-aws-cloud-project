const db = require("../db");

exports.addToCart = (req, res) => {
    const userId = req.user.id;
    const { product_id, quantity } = req.body;

    const sql =
        "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

    db.query(sql, [userId, product_id, quantity], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "Product added to cart"
        });
    });
};
exports.getCart = (req, res) => {
    const userId = req.user.id;

    const sql = `
        SELECT
            cart.id,
            products.name,
            products.category,
            products.price,
            cart.quantity
        FROM cart
        JOIN products
        ON cart.product_id = products.id
        WHERE cart.user_id = ?
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(results);
    });
};
exports.removeFromCart = (req, res) => {
    const cartId = req.params.id;
    const userId = req.user.id;

    const sql = "DELETE FROM cart WHERE id = ? AND user_id = ?";

    db.query(sql, [cartId, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

        res.json({
            message: "Item removed from cart"
        });
    });
};
