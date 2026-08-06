const db = require("../db");

exports.placeOrder = (req, res) => {

    const userId = req.user.id;

    const sql = `
        SELECT SUM(products.price * cart.quantity) AS total
        FROM cart
        JOIN products
        ON cart.product_id = products.id
        WHERE cart.user_id = ?
    `;

    db.query(sql, [userId], (err, results) => {

        if (err)
            return res.status(500).json({ error: err.message });

        const total = results[0].total || 0;

        const insert =
            "INSERT INTO orders(user_id,total_amount) VALUES (?,?)";

        db.query(insert, [userId, total], (err) => {

            if (err)
                return res.status(500).json({ error: err.message });

            res.json({
                message: "Order placed successfully",
                total: total
            });

        });

    });

};
